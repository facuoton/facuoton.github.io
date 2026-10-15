(function () {
  const translations = {
    es: {
      navWork: 'Work',
      navAbout: 'About',
      navContact: 'Contact',
      heroDescription: 'Diseño multimedia y web, dirección de arte, fotografía y video. Creando narrativas visuales que impactan.',
      heroCta: 'Ver Trabajos',
      selectedProjects: 'Selected Projects',
      selectedProjectsDescription: 'Una colección de mis proyectos recientes.',
      sizeMattersCategory: 'Web App / Diseño UI / Herramienta de Producción / JavaScript',
      sizeMattersDescription: 'Una herramienta visual de inteligencia para producción que permite estimar almacenamiento, rotación de tarjetas, tiempos de descarga, informes técnicos y riesgos antes de un rodaje.',
      openTool: 'Abrir herramienta',
      moreProjects: 'Ver más proyectos',
      aboutMe: 'About Me',
      aboutDescription: 'Soy un diseñador multimedia apasionado por contar historias a través de la imagen y el movimiento. Busco siempre la excelencia estética y la innovación técnica.',
      founderOf: 'Fundador de',
      specialtiesLabel: 'Especialidades:',
      specialties: 'Dirección de Arte, Motion Graphics, Video, Fotografía y Diseño Web.',
      contactPrompt: '¿Tienes un proyecto en mente?',
      backHome: 'Volver al inicio',
      allProjects: 'Todos los Proyectos',
      allProjectsDescription: 'Los destacados y todo lo demás. La colección completa.',
      missionControlCategory: 'Web App / Space Tracker / JavaScript',
      missionControlDescription: 'Dashboard interactivo para explorar lanzamientos, vehículos, agencias, astronautas y plataformas espaciales conectado a datos de The Space Devs.',
      exploreMissionControl: 'Explorar Mission Control',
      questOSCategory: 'Web App / RPG de Productividad / React + Node + IA',
      questOSDescription: 'Un RPG de fantasía oscura que gamifica la vida real: héroes pixel art, quests diarias, boss fights y un Quest Master con IA que convierte metas reales en batallas épicas.',
      enterDungeon: 'Entrar al Calabozo',
      redButtonCategory: 'Web App / Juego de Mesa / React',
      redButtonDescription: 'El botón de lanzamiento nuclear del juego de mesa Botón Rojo: 30 segundos de cuenta regresiva, alarmas y explosión final.',
      pressButton: 'Presionar el Botón'
    },
    en: {
      navWork: 'Work',
      navAbout: 'About',
      navContact: 'Contact',
      heroDescription: 'Multimedia and web design, art direction, photography and video. Creating visual narratives that make an impact.',
      heroCta: 'View Work',
      selectedProjects: 'Selected Projects',
      selectedProjectsDescription: 'A collection of my recent projects.',
      sizeMattersCategory: 'Web App / UI Design / Production Tool / JavaScript',
      sizeMattersDescription: 'A visual production intelligence tool for estimating storage, card rotation, download times, technical reports and risks before a shoot.',
      openTool: 'Open tool',
      moreProjects: 'View more projects',
      aboutMe: 'About Me',
      aboutDescription: 'I am a multimedia designer passionate about telling stories through image and movement. I am always looking for aesthetic excellence and technical innovation.',
      founderOf: 'Founder of',
      specialtiesLabel: 'Specialties:',
      specialties: 'Art Direction, Motion Graphics, Video, Photography and Web Design.',
      contactPrompt: 'Have a project in mind?',
      backHome: 'Back home',
      allProjects: 'All Projects',
      allProjectsDescription: 'The highlights and everything else. The complete collection.',
      missionControlCategory: 'Web App / Space Tracker / JavaScript',
      missionControlDescription: 'Interactive dashboard for exploring launches, vehicles, agencies, astronauts and space platforms, connected to The Space Devs data.',
      exploreMissionControl: 'Explore Mission Control',
      questOSCategory: 'Web App / Productivity RPG / React + Node + AI',
      questOSDescription: 'A dark fantasy RPG that gamifies real life: pixel-art heroes, daily quests, boss fights and an AI Quest Master that turns real goals into epic battles.',
      enterDungeon: 'Enter the Dungeon',
      redButtonCategory: 'Web App / Board Game / React',
      redButtonDescription: 'The nuclear launch button for the Botón Rojo board game: a 30-second countdown, alarms and a final explosion.',
      pressButton: 'Press the Button'
    }
  };

  const ariaTranslations = {
    es: {
      openSizeMatters: 'Abrir SizeMatters.AI',
      enterMissionControl: 'Entrar a Mission Control',
      enterQuestOS: 'Entrar a QuestOS',
      pressRedButton: 'Presionar el Botón Rojo'
    },
    en: {
      openSizeMatters: 'Open SizeMatters.AI',
      enterMissionControl: 'Enter Mission Control',
      enterQuestOS: 'Enter QuestOS',
      pressRedButton: 'Press the Red Button'
    }
  };

  const altTranslations = {
    es: {
      missionControlAlt: 'Mission Control — dashboard de seguimiento espacial'
    },
    en: {
      missionControlAlt: 'Mission Control — space tracking dashboard'
    }
  };

  function applyLanguage(language) {
    const currentLanguage = language === 'en' ? 'en' : 'es';
    document.documentElement.lang = currentLanguage;

    document.querySelectorAll('[data-lang-key]').forEach((element) => {
      const key = element.dataset.langKey;
      if (translations[currentLanguage][key]) element.textContent = translations[currentLanguage][key];
    });

    document.querySelectorAll('[data-lang-aria]').forEach((element) => {
      const key = element.dataset.langAria;
      if (ariaTranslations[currentLanguage][key]) element.setAttribute('aria-label', ariaTranslations[currentLanguage][key]);
    });

    document.querySelectorAll('[data-lang-alt]').forEach((element) => {
      const key = element.dataset.langAlt;
      if (altTranslations[currentLanguage][key]) element.setAttribute('alt', altTranslations[currentLanguage][key]);
    });

    const toggle = document.getElementById('language-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(currentLanguage === 'en'));
      toggle.dataset.language = currentLanguage;
      const picker = toggle.closest('.language-picker');
      if (picker) picker.dataset.language = currentLanguage;
      toggle.setAttribute('aria-label', currentLanguage === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
    }

    localStorage.setItem('portfolio-language', currentLanguage);
  }

  function initLanguage() {
    const toggle = document.getElementById('language-toggle');
    if (!toggle) return;

    const savedLanguage = localStorage.getItem('portfolio-language') || 'es';
    applyLanguage(savedLanguage);
    toggle.addEventListener('click', () => {
      applyLanguage(toggle.dataset.language === 'en' ? 'es' : 'en');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
})();
