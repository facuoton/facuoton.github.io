# Preentrega 2: Documentación de la Aplicación y Prototipado
**Programación 2 · Licenciatura en Multimedia · Universidad ORT Uruguay**  
**Fecha de Entrega:** 25 de Septiembre  
**Proyecto:** *Mission Control — Space Tracker*  
**Integrantes:** Facundo Otón (303861) · Iván González (329320)  

---

## 1. Esquema de Datos y su Manejo

La aplicación interactúa con la API de **The Space Devs (Launch Library 2)** y procesa la información para estructurarla en el frontend.

### 📌 Tabla de Datos de la Aplicación

| Entidad / Objeto | Propiedad | Origen | Tipo de Dato | Función en la Aplicación |
| :--- | :--- | :--- | :--- | :--- |
| **Lanzamiento (`Launch`)** | `id` | API (`results[i].id`) | String (UUID) | Identificador único para abrir el modal de detalle. |
| | `name` | API (`results[i].name`) | String | Título de la misión (ej: *"Falcon 9 Block 5 \| USSF-153"*). |
| | `net` | API (`results[i].net`) | String (ISO 8601) | Fecha y hora exacta programada para el despegue. |
| | `status.name` | API (`results[i].status.name`) | String | Estado del lanzamiento (*"Go for Launch"*, *"Success"*, *"Failure"*). |
| | `status.abbrev` | API (`results[i].status.abbrev`) | String | Abreviación para el badge visual (*"Go"*, *"TBD"*, *"Success"*). |
| | `image` | API (`results[i].image`) | String (URL) | Fotografía oficial del cohete/despegue en alta resolución. |
| | `webcast_live` | API (`results[i].webcast_live`) | Boolean | Indica si la transmisión en vivo está emitiendo en el momento. |
| | `cuentaRegresiva` | **Calculado en Frontend** | Objeto `{d, h, m, s}` | Cálculo dinámico en tiempo real (`net` - `Date.now()`). |
| | `fechaFormateada` | **Calculado en Frontend** | String | Fecha legible para el usuario (ej: *"10 de Septiembre, 15:37 hs"*). |
| **Cohete (`Rocket`)** | `configuration.name` | API (`rocket.configuration.name`) | String | Nombre del vehículo (ej: *"Falcon 9"*). |
| | `configuration.full_name` | API (`rocket.configuration.full_name`) | String | Nombre completo y variante (ej: *"Falcon 9 Block 5"*). |
| | `configuration.family` | API (`rocket.configuration.family`) | String | Familia del lanzador (*"Falcon"*, *"Starship"*, *"Atlas"*). |
| **Agencia (`Provider`)** | `name` | API (`launch_service_provider.name`) | String | Nombre de la entidad responsable (*"SpaceX"*, *"NASA"*, *"ESA"*). |
| | `type` | API (`launch_service_provider.type`) | String | Tipo de organización (*"Commercial"*, *"Government"*). |
| **Misión (`Mission`)** | `name` | API (`mission.name`) | String | Nombre del satélite o carga útil. |
| | `description` | API (`mission.description`) | String | Resumen informativo de la misión. |
| | `type` | API (`mission.type`) | String | Categoría (*"Communications"*, *"Government/Top Secret"*). |
| **Plataforma (`Pad`)** | `name` | API (`pad.name`) | String | Nombre de la base de despegue. |
| | `location.name` | API (`pad.location.name`) | String | Ubicación geográfica (*"Vandenberg SFB, CA, USA"*). |
| | `latitude` / `longitude`| API (`pad.latitude`, `pad.longitude`) | Strings numéricos | Coordenadas para enlace a mapa interactivo. |

---

### 🔄 Manejo del Estado en el Frontend (`estadoApp`)
En JavaScript se centralizarán las variables de estado que controlan la interfaz:
```javascript
const estadoApp = {
  misiones: [],             // Array con los lanzamientos obtenidos de la API
  proximoLanzamiento: null,  // Objeto de la misión más cercana en el tiempo
  filtroAgencia: "todas",   // Filtro activo: 'todas', 'SpaceX', 'NASA', 'ESA', 'Rocket Lab'
  terminoBusqueda: "",      // Texto escrito por el usuario en el buscador
  misionSeleccionada: null, // ID de la misión abierta en el modal de detalle
  cargando: false,          // Boolean para mostrar/ocultar spinner o skeleton
  error: null               // Mensaje de error si la petición falla
};
```

---

## 2. Diagrama de Flujo de la Aplicación

El siguiente diagrama detalla el recorrido interactivo del usuario, las peticiones asíncronas a la API y los caminos de decisión y validación:

```mermaid
flowchart TD
    Inicio([Inicio / Usuario entra a la web]) --> CargarApp[Mostrar Skeleton Loading e iniciar app]
    CargarApp --> FetchUpcoming[Hacer fetch a /launch/upcoming/]
    
    FetchUpcoming --> DecisionAPI{¿Respuesta HTTP 200 OK?}
    
    DecisionAPI -- No (Error 4xx / 5xx o sin red) --> MostrarError[Mostrar mensaje de error en pantalla y botón 'Reintentar']
    MostrarError --> ClickReintentar[/Usuario hace click en Reintentar/] --> FetchUpcoming
    
    DecisionAPI -- Sí (200 OK) --> ProcesarDatos[Separar el primer elemento como Próximo Lanzamiento y el resto en la lista]
    ProcesarDatos --> IniciarTimer[Iniciar setInterval para la cuenta regresiva en vivo]
    ProcesarDatos --> RenderizarHero[Renderizar Tarjeta Hero con Próximo Lanzamiento]
    ProcesarDatos --> RenderizarGrilla[Renderizar Grilla de Misiones]
    
    RenderizarGrilla --> EsperaAccion[/Usuario interactúa en el Dashboard/]
    
    %% Flujo de Búsqueda y Filtros
    EsperaAccion -- Escribe en el buscador --> InputBusqueda[/Ingresa texto ej: Starship/]
    EsperaAccion -- Toca un filtro de agencia --> ClickFiltro[/Selecciona SpaceX, NASA, etc./]
    
    InputBusqueda --> FetchSearch[Hacer fetch a /launch/?search=termino]
    ClickFiltro --> FiltrarLocal[Filtrar array local o consultar API]
    
    FetchSearch --> DecisionResultados{¿Resultados > 0?}
    FiltrarLocal --> DecisionResultados
    
    DecisionResultados -- No --> MostrarEmpty[Mostrar estado vacío: 'No se encontraron misiones']
    MostrarEmpty --> ClickLimpiar[/Usuario borra búsqueda o limpia filtros/] --> RenderizarGrilla
    
    DecisionResultados -- Sí --> RenderizarFiltrados[Actualizar grilla con las misiones coincidentes]
    RenderizarFiltrados --> EsperaAccion
    
    %% Flujo de Detalle (Modal)
    EsperaAccion -- Hace click en una tarjeta de misión --> ClickCard[/Click en Tarjeta/]
    ClickCard --> FetchDetalle[Hacer fetch a /launch/{id}/]
    FetchDetalle --> AbrirModal[Abrir Modal / Ficha Técnica con fotos HD, cohete, mapa y descripción]
    AbrirModal --> EsperaModal[/Usuario lee ficha o hace click en Cerrar/]
    EsperaModal -- Click en backdrop o botón cerrar 'X' --> CerrarModal[Cerrar Modal y volver al Dashboard]
    CerrarModal --> EsperaAccion
```

---

## 3. Especificación del Prototipo Visual (UI / Mockups en Figma)

### 🎨 Design System
* **Tema:** Dark Mode Aeroespacial (*Mission Control*).
* **Colores:**
  * Fondo general: `#0A0E17`
  * Contenedores / Tarjetas: `#131B2E` con bordes `#1E293B`
  * Acento Primario (Cyan Espacial): `#38BDF8`
  * Acento Secundario (Naranja Ignición): `#F97316`
  * Éxito / Estado Go: `#22C55E`
* **Tipografías:** *Space Grotesk* (Títulos y Números) / *Inter* (Textos y etiquetas) / *JetBrains Mono* (Datos técnicos y countdown).

---

### 🖥️ Pantallas y Componentes a Diseñar en Figma

#### 1. Header / Barra de Navegación
* **Logo:** Isotipo de cohete + *Mission Control* en blanco y cyan.
* **Buscador:** Input dinámico con placeholder *"Buscar misión, cohete o agencia (ej. Falcon 9, Starship)..."*.
* **Filtros rápidos (Chips):** Botones píldora: `[Todos]` (Activo), `[SpaceX]`, `[NASA]`, `[ESA]`, `[Rocket Lab]`.

#### 2. Sección Hero (Próximo Lanzamiento en Vivo)
* **Tarjeta destacada de gran tamaño** con imagen de fondo del cohete con degradado oscuro.
* **Badge de estado:** Indicador verde pulsante `🟢 GO FOR LAUNCH`.
* **Nombre de la misión:** *"Falcon 9 Block 5 | USSF-153"*.
* **Reloj de Cuenta Regresiva (Countdown):** 4 bloques numéricos gigantes: `DÍAS : HORAS : MIN : SEG`.
* **Información clave:** Agencia (*SpaceX*), Base (*Vandenberg SLC-4E*) y botón con ícono de YouTube: `[ Ver Transmisión en Vivo ]`.

#### 3. Grilla de Misiones (Lanzamientos Programados)
* Grilla responsiva de 3 columnas con tarjetas interactivas (*Cards*).
* **Cada tarjeta incluye:**
  * Fotografía HD del despegue/vehículo.
  * Badge de agencia (*SpaceX*, *NASA*, etc.).
  * Título de la misión y fecha formateada.
  * Nombre del cohete y base de lanzamiento.
  * Botón o indicador hover: `[ Ver Ficha Técnica → ]`.

#### 4. Modal de Detalle (Ficha Técnica Expandida)
* Ventana modal emergente con fondo oscurecido (*Backdrop Blur*).
* **Contenido:**
  * Cabecera con imagen panorámica y botón de cierre `[✕]`.
  * Descripción detallada de los objetivos de la misión.
  * Ficha del vehículo espacial: Familia, fabricante, variante y etapas.
  * Datos de la plataforma: Nombre del complejo de lanzamiento, país y coordenadas geográficas.
  * Enlaces oficiales a Wikipedia y transmisiones.

#### 5. Estados de la Interfaz (UI States)
* **Loading State:** Esqueleto animado (*Skeleton Loader*) simulando las tarjetas de la grilla.
* **Empty State:** Ilustración de radar espacial con el texto *"No se encontraron misiones para '...'"* y botón *"Limpiar búsqueda"*.
* **Error State:** Banner de alerta rojo/naranja con mensaje *"Error al conectar con la API espacial"* y botón *"Reintentar conexión"*.

---

## 4. Justificaciones Individuales (Trabajo en Pareja)

### 👤 Integrante 1: Facundo Otón (303861)
**Rol:** *Diseño UI/UX, Arquitectura de Datos y Componentes del Dashboard.*

> **Justificación y Decisiones de Diseño:**  
> *"Para el diseño de Mission Control me enfoqué en crear una interfaz inmersiva y de alto impacto visual, adecuada para estudiantes de Multimedia. La decisión de estructurar la pantalla con una sección Hero dominante para el próximo lanzamiento responde a la necesidad de jerarquizar el dato más dinámico y crítico de la API: la cuenta regresiva en tiempo real.*  
> 
> *La grilla de misiones se diseñó con un sistema de tarjetas modulares que compactan información técnica compleja (cohete, plataforma y agencia) en bloques visuales legibles. El principal desafío fue organizar la gran cantidad de datos que entrega la API sin saturar la pantalla; esto se resolvió delegando la información técnica profunda a un modal de detalle enfocado, permitiendo que la navegación principal se mantenga ágil y limpia."*

---

### 👤 Integrante 2: Iván González (329320)
**Rol:** *Lógica Asíncrona, Búsquedas/Filtros, Cuenta Regresiva y Manejo de Errores.*

> **Justificación y Decisiones de Desarrollo:**  
> *"Mi responsabilidad se centró en la arquitectura de interacción, el flujo de datos asíncronos y el control de estados de la aplicación. Definimos un flujo unidireccional donde una función centralizadora `iniciar()` consulta la API al cargar la página y separa el próximo lanzamiento de la lista general.*  
> 
> *El mayor desafío técnico radica en la sincronización en tiempo real: la cuenta regresiva requiere un intervalo dinámico que recalcule segundos sin generar fugas de memoria o saltos visuales. Asimismo, estructuramos un sistema de control de errores mediante bloques `try/catch` que interceptan fallos de red o respuestas vacías, garantizando que el usuario siempre reciba retroalimentación visual amigable a través de estados Empty y Error en lugar de una pantalla rota."*

---

## 5. Prompt Maestro para Generar los Elementos en Figma con Codex

```text
Actúa como Diseñador UI/UX especializado en interfaces complejas y dashboards aeroespaciales en Figma.

Utiliza como guía de requerimientos la información del archivo:
pre-entrega/documentacion_app_preentrega2.md

Genera en Figma los siguientes 4 frames principales para la Preentrega 2 de Programación 2 (Lic. en Multimedia):

1. FRAME 1: '01_Diagrama_de_Flujo_App'
- Diagrama de flujo visual completo con la simbología estándar (óvalos de inicio/fin, rectángulos de procesos fetch y render, romboides de input del usuario, rombos de decisión de respuesta HTTP 200 y resultados > 0, y flechas de retorno).
- Estilo en Dark Mode con conectores limpios y legibles.

2. FRAME 2: '02_Dashboard_Principal_UI'
- Header con logo de 'Mission Control', barra de búsqueda interactiva y filtros tipo chip (Todos, SpaceX, NASA, ESA, Rocket Lab).
- Hero Section dominante con el 'Próximo Lanzamiento' (Falcon 9 | USSF-153), badge verde 'GO FOR LAUNCH', 4 cajas de cuenta regresiva (Días, Horas, Minutos, Segundos), foto HD del cohete y botón a transmisión de YouTube.
- Grilla de 3 columnas con tarjetas de misiones con imagen, fecha formateada, nombre de cohete y botón de detalle.

3. FRAME 3: '03_Modal_Detalle_Mision'
- Vista modal emergente con Backdrop Blur oscurecido.
- Ficha técnica expandida: foto panorámica, descripción completa de la misión, especificaciones del cohete (familia, fabricante, variante) y plataforma de despegue con coordenadas en mapa.

4. FRAME 4: '04_Estados_UI_Loading_Error'
- Componente de Loading State con Skeleton Loader.
- Componente de Empty State ('No se encontraron misiones') con botón de limpiar búsqueda.
- Componente de Error State con botón de reintentar petición.

Aplica la paleta #0A0E17 (fondo), #131B2E (tarjetas), #38BDF8 (cyan), #F97316 (naranja), #22C55E (verde), tipografía Space Grotesk/Inter y Auto Layout en todos los componentes.
```
