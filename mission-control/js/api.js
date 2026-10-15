
const API_BASE = "https://lldev.thespacedevs.com/2.2.0";
const API_V23_BASE = "https://lldev.thespacedevs.com/2.3.0";
const API_V23_PRODUCTION_BASE = "https://ll.thespacedevs.com/2.3.0";
const VEHICLES_CACHE_KEY = "mission_control_launcher_configs_v1";
const VEHICLES_CACHE_MAX_AGE = 24 * 60 * 60 * 1000;
const ASTRONAUTS_CACHE_KEY = "mission_control_astronauts_v1";
const AGENCIES_CACHE_KEY = "mission_control_agencies_v1";
const MEDIA_CACHE_KEY = "mission_control_launch_media_v2";
const PLATFORMS_CACHE_KEY = "mission_control_platform_profiles_v1";

const isUpcomingLaunch = (launch) => {
  const launchTime = new Date(launch?.net).getTime();
  return Number.isFinite(launchTime) && launchTime > Date.now();
};

const sortUpcomingLaunches = (launches = []) => launches
  .filter(isUpcomingLaunch)
  .sort((a, b) => new Date(a.net).getTime() - new Date(b.net).getTime());

const FALLBACK_LAUNCHES = [
  {
    id: "artemis-2-uuid",
    name: "Artemis II | Orion SLS",
    net: "2026-09-26T15:30:00Z",
    status: { id: 1, name: "Go for Launch", abbrev: "Go" },
    launch_service_provider: { name: "NASA", type: "Government" },
    rocket: { configuration: { name: "SLS Block 1", full_name: "Space Launch System Block 1", family: "SLS" } },
    mission: { name: "Artemis II", description: "Primer vuelo tripulado del programa Artemis alrededor de la Luna, validando sistemas de soporte vital con 4 astronautas a bordo.", type: "Lunar Exploration" },
    pad: { name: "Launch Complex 39B", location: { name: "Kennedy Space Center, FL, USA" }, latitude: "28.627", longitude: "-80.621" },
    image: "https://images.unsplash.com/photo-1517976487502-d96a60d6a2f8?auto=format&fit=crop&w=1200&q=80",
    webcast_live: false,
    vid_urls: [{ url: "https://www.youtube.com/watch?v=21X5lGlDOfg", title: "NASA Official Stream" }]
  },
  {
    id: "starlink-11-4-uuid",
    name: "Starlink 11-4 | Falcon 9",
    net: "2026-09-26T21:42:00Z",
    status: { id: 1, name: "Go for Launch", abbrev: "Go" },
    launch_service_provider: { name: "SpaceX", type: "Commercial" },
    rocket: { configuration: { name: "Falcon 9", full_name: "Falcon 9 Block 5", family: "Falcon" } },
    mission: { name: "Starlink 11-4", description: "Despliegue de lote de satélites Starlink en órbita baja terrestre para red de internet global.", type: "Communications" },
    pad: { name: "Space Launch Complex 40", location: { name: "Cape Canaveral SFS, FL, USA" }, latitude: "28.562", longitude: "-80.577" },
    image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80",
    webcast_live: false,
    vid_urls: [{ url: "https://www.youtube.com/watch?v=wbSwFU6tY1c", title: "SpaceX Live Broadcast" }]
  },
  {
    id: "soyuz-ms-28-uuid",
    name: "Soyuz MS-28 | Soyuz 2.1a",
    net: "2026-09-28T14:17:00Z",
    status: { id: 1, name: "Go for Launch", abbrev: "Go" },
    launch_service_provider: { name: "Roscosmos", type: "Government" },
    rocket: { configuration: { name: "Soyuz 2.1a", full_name: "Soyuz 2.1a / MS", family: "Soyuz" } },
    mission: { name: "Soyuz MS-28", description: "Rotación de tripulación e intercambio de cosmonautas y astronautas hacia la Estación Espacial Internacional.", type: "Human Spaceflight" },
    pad: { name: "Site 31/6", location: { name: "Baikonur Cosmodrome, Kazakhstan" }, latitude: "45.996", longitude: "63.564" },
    image: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?auto=format&fit=crop&w=1200&q=80",
    webcast_live: false,
    vid_urls: []
  },
  {
    id: "ariane-6-va262-uuid",
    name: "Ariane 6 VA262 | Ariane 6",
    net: "2026-10-03T13:05:00Z",
    status: { id: 1, name: "Go for Launch", abbrev: "Go" },
    launch_service_provider: { name: "ESA", type: "Government" },
    rocket: { configuration: { name: "Ariane 6", full_name: "Ariane 62", family: "Ariane" } },
    mission: { name: "VA262 Earth Observer", description: "Satélites de observación de la Tierra y monitoreo del clima para la Unión Europea.", type: "Earth Observation" },
    pad: { name: "ELA-4", location: { name: "Guiana Space Centre, Kourou, French Guiana" }, latitude: "5.239", longitude: "-52.775" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    webcast_live: false,
    vid_urls: []
  }
];

const FALLBACK_ASTRONAUTS = [
  { id: "fallback-thomas-pesquet", name: "Thomas Pesquet", agency: { name: "European Space Agency" }, nationality: "French", bio: "Astronauta de la Agencia Espacial Europea y piloto de misiones de larga duración a la Estación Espacial Internacional.", time_in_space: "196 days", spacewalks_count: 2 },
  { id: "fallback-claude-nicollier", name: "Claude Nicollier", agency: { name: "European Space Agency" }, nationality: "Swiss", bio: "Astronauta suizo de la ESA, veterano de cuatro misiones del transbordador espacial y del mantenimiento del telescopio Hubble.", time_in_space: "42 days", spacewalks_count: 1 },
  { id: "fallback-tim-peake", name: "Tim Peake", agency: { name: "European Space Agency" }, nationality: "British", bio: "Astronauta británico de la ESA y miembro de la Expedición 50/51 a la Estación Espacial Internacional.", time_in_space: "186 days", spacewalks_count: 1 },
  { id: "fallback-buzz-aldrin", name: "Buzz Aldrin", agency: { name: "National Aeronautics and Space Administration" }, nationality: "American", bio: "Astronauta de la NASA, piloto del módulo lunar del Apollo 11 y segunda persona en caminar sobre la Luna.", time_in_space: "12 days", spacewalks_count: 2 },
  { id: "fallback-chris-hadfield", name: "Chris Hadfield", agency: { name: "Canadian Space Agency" }, nationality: "Canadian", bio: "Astronauta canadiense, comandante de la Expedición 35 y divulgador de la exploración espacial.", time_in_space: "166 days", spacewalks_count: 2 },
  { id: "fallback-david-saint-jacques", name: "David Saint-Jacques", agency: { name: "Canadian Space Agency" }, nationality: "Canadian", bio: "Astronauta e ingeniero canadiense que participó en la Expedición 58/59 a la Estación Espacial Internacional.", time_in_space: "204 days", spacewalks_count: 2 },
  { id: "fallback-anne-mcclain", name: "Anne McClain", agency: { name: "National Aeronautics and Space Administration" }, nationality: "American", bio: "Astronauta e ingeniera de vuelo de la NASA, integrante de la Expedición 58/59.", time_in_space: "204 days", spacewalks_count: 2 },
  { id: "fallback-andrew-morgan", name: "Andrew R. Morgan", agency: { name: "National Aeronautics and Space Administration" }, nationality: "American", bio: "Astronauta de la NASA y médico de vuelo de la Expedición 60/61/62.", time_in_space: "272 days", spacewalks_count: 7 }
];

const FALLBACK_AGENCIES = [
  { id: "fallback-nasa", name: "National Aeronautics and Space Administration", country_code: "USA", description: "Agencia gubernamental de Estados Unidos responsable del programa espacial civil, investigación aeronáutica y exploración interplanetaria.", founding_year: 1958, total_launch_count: 730, logo_url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" },
  { id: "fallback-esa", name: "European Space Agency", country_code: "EUR", description: "Organización internacional que coordina los programas espaciales europeos de ciencia, observación de la Tierra y exploración.", founding_year: 1975, total_launch_count: 245, logo_url: "https://upload.wikimedia.org/wikipedia/commons/b/b7/ESA_logo.svg" },
  { id: "fallback-spacex", name: "SpaceX", country_code: "USA", description: "Compañía aeroespacial privada dedicada al desarrollo de lanzadores reutilizables, naves espaciales y transporte orbital.", founding_year: 2002, total_launch_count: 500, logo_url: "https://upload.wikimedia.org/wikipedia/commons/3/36/SpaceX-Logo.svg" },
  { id: "fallback-jaxa", name: "Japan Aerospace Exploration Agency", country_code: "JPN", description: "Agencia espacial nacional de Japón dedicada a la investigación, observación terrestre y exploración del sistema solar.", founding_year: 2003, total_launch_count: 190, logo_url: "https://upload.wikimedia.org/wikipedia/commons/8/85/JAXA_logo.svg" },
  { id: "fallback-roscosmos", name: "ROSCOSMOS", country_code: "RUS", description: "Corporación espacial estatal de Rusia, responsable de lanzamientos, vehículos orbitales y operaciones tripuladas.", founding_year: 2015, total_launch_count: 380, logo_url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Roscosmos_logo.svg" },
  { id: "fallback-isro", name: "Indian Space Research Organisation", country_code: "IND", description: "Agencia espacial de India, con programas de lanzadores, satélites, exploración lunar y misiones interplanetarias.", founding_year: 1969, total_launch_count: 130, logo_url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" }
];

const getFutureFallbackLaunches = () => FALLBACK_LAUNCHES.map((launch) => {
  let net = launch.net;
  while (new Date(net).getTime() <= Date.now()) {
    const nextDate = new Date(net);
    nextDate.setUTCFullYear(nextDate.getUTCFullYear() + 1);
    net = nextDate.toISOString();
  }
  return { ...launch, net };
});

const FALLBACK_VEHICLES = [
  {
    id: "fallback-falcon-9-block-5",
    name: "Falcon 9 Block 5",
    full_name: "Falcon 9 Block 5",
    manufacturer: { name: "SpaceX" },
    description: "Lanzador orbital reutilizable de dos etapas desarrollado por SpaceX para misiones tripuladas y de carga.",
    length: 70,
    diameter: 3.7,
    to_thrust: 7607,
    min_stage: 2,
    max_stage: 2,
    image: "assets/vehiculos/falcon-9.jpg",
    image_credit: "U.S. Space Force / Wikimedia Commons",
    image_source: "https://commons.wikimedia.org/wiki/File:Starlink_4-22_Launch_(7326410).jpeg"
  },
  {
    id: "fallback-falcon-heavy",
    name: "Falcon Heavy",
    full_name: "Falcon Heavy",
    manufacturer: { name: "SpaceX" },
    description: "Vehículo de lanzamiento pesado formado por tres núcleos derivados del Falcon 9 y diseñado para transportar grandes cargas.",
    length: 70,
    diameter: 3.7,
    to_thrust: 22819,
    min_stage: 2,
    max_stage: 2,
    image: "assets/vehiculos/falcon-heavy.jpg",
    image_credit: "Daniel Oberhaus / Wikimedia Commons",
    image_source: "https://commons.wikimedia.org/wiki/File:First_Launch_of_SpaceX_Falcon_Heavy.jpg"
  },
  {
    id: "fallback-electron",
    name: "Electron",
    full_name: "Electron",
    manufacturer: { name: "Rocket Lab" },
    description: "Lanzador orbital ligero de dos etapas especializado en el despliegue de satélites pequeños.",
    length: 18,
    diameter: 1.2,
    to_thrust: 224,
    min_stage: 2,
    max_stage: 2,
    image: "assets/vehiculos/electron.jpg",
    image_credit: "Rocket Lab / Wikimedia Commons",
    image_source: "https://commons.wikimedia.org/wiki/File:CAPSTONE-LAUNCH.jpg"
  },
  {
    id: "fallback-ariane-6",
    name: "Ariane 6",
    full_name: "Ariane 6",
    manufacturer: { name: "ArianeGroup" },
    description: "Familia europea de lanzadores modulares desarrollada para colocar cargas institucionales y comerciales en distintas órbitas.",
    length: 63,
    diameter: 5.4,
    to_thrust: null,
    min_stage: 2,
    max_stage: 2,
    image: "assets/vehiculos/ariane-6.jpg",
    image_credit: "ESA / Wikimedia Commons",
    image_source: "https://commons.wikimedia.org/wiki/File:Ariane_6_ESA-CC.jpg"
  }
];

const readVehiclesCache = () => {
  try {
    const cached = JSON.parse(localStorage.getItem(VEHICLES_CACHE_KEY));
    if (!cached?.vehicles?.length) return null;
    return cached;
  } catch (_) {
    return null;
  }
};

const writeVehiclesCache = (vehicles) => {
  try {
    localStorage.setItem(VEHICLES_CACHE_KEY, JSON.stringify({
      savedAt: Date.now(),
      vehicles
    }));
  } catch (_) {
  }
};

const getUpcomingLaunches = async (limit = 15) => {
  try {
    const nowIso = new Date().toISOString();
    const url = `${API_BASE}/launch/upcoming/?limit=${limit}&net__gt=${encodeURIComponent(nowIso)}&ordering=net&format=json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return sortUpcomingLaunches(data.results || []);
  } catch (error) {
    console.warn("Aviso: Conexión con The Space Devs en modo contingencia.", error);
    return sortUpcomingLaunches(getFutureFallbackLaunches()).slice(0, limit);
  }
};

const searchLaunches = async (query = "", limit = 15) => {
  try {
    const url = `${API_BASE}/launch/?search=${encodeURIComponent(query)}&limit=${limit}&format=json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error al buscar lanzamientos:", error);
    return getFutureFallbackLaunches().filter(l => 
      l.name.toLowerCase().includes(query.toLowerCase()) ||
      l.launch_service_provider.name.toLowerCase().includes(query.toLowerCase())
    );
  }
};

const getLaunchDetail = async (id) => {
  try {
    const url = `${API_BASE}/launch/${id}/?format=json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error al obtener detalle:", error);
    return getFutureFallbackLaunches().find(l => l.id === id) || getFutureFallbackLaunches()[0];
  }
};

const getLauncherConfigs = async (limit = 10) => {
  const cached = readVehiclesCache();
  const cacheIsFresh = cached && (Date.now() - cached.savedAt < VEHICLES_CACHE_MAX_AGE);
  if (cacheIsFresh) return cached.vehicles.slice(0, limit);

  try {
    const url = `${API_V23_BASE}/launcher_configurations/?limit=${limit}&mode=detailed&active=true&ordering=-total_launch_count&format=json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const vehicles = data.results || [];
    if (vehicles.length) writeVehiclesCache(vehicles);
    return vehicles.length
      ? vehicles
      : (cached?.vehicles || FALLBACK_VEHICLES).slice(0, limit);
  } catch (error) {
    console.warn("La API de vehículos no está disponible; se usarán datos de respaldo.", error);
    return (cached?.vehicles || FALLBACK_VEHICLES).slice(0, limit);
  }
};

const getAstronauts = async (search = "", limit = 12) => {
  try {
    let url = `${API_BASE}/astronaut/?limit=${limit}&format=json`;
    if (search) url += `&search=${encodeURIComponent(search)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const astronauts = data.results || [];
    if (astronauts.length) {
      try { localStorage.setItem(ASTRONAUTS_CACHE_KEY, JSON.stringify(astronauts)); } catch (_) {  }
    }
    return astronauts;
  } catch (error) {
    console.error("Error al obtener astronautas; se usará el respaldo local:", error);
    try {
      const cached = JSON.parse(localStorage.getItem(ASTRONAUTS_CACHE_KEY));
      if (cached?.length) return cached.slice(0, limit);
    } catch (_) {  }
    return FALLBACK_ASTRONAUTS.slice(0, limit);
  }
};

const getAgencies = async (limit = 12) => {
  try {
    const url = `${API_BASE}/agencies/?featured=true&limit=${limit}&format=json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const agencies = data.results || [];
    if (agencies.length) {
      try { localStorage.setItem(AGENCIES_CACHE_KEY, JSON.stringify(agencies)); } catch (_) {  }
    }
    return agencies;
  } catch (error) {
    console.error("Error al obtener agencias; se usará el respaldo local:", error);
    try {
      const cached = JSON.parse(localStorage.getItem(AGENCIES_CACHE_KEY));
      if (cached?.length) return cached.slice(0, limit);
    } catch (_) {  }
    return FALLBACK_AGENCIES.slice(0, limit);
  }
};

const getLaunchMedia = async (limit = 24) => {
  try {
    const requestLimit = Math.min(Math.max(limit * 2, 24), 100);
    const url = `${API_V23_PRODUCTION_BASE}/launches/previous/?limit=${requestLimit}&ordering=-net&mode=normal&format=json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const launches = (data.results || []).filter((launch) => {
      const image = launch?.image;
      const hasImage = typeof image === "string"
        ? Boolean(image.trim())
        : Boolean(image?.image_url || image?.thumbnail_url || image?.url);
      return hasImage;
    }).slice(0, limit);

    if (launches.length) {
      try {
        localStorage.setItem(MEDIA_CACHE_KEY, JSON.stringify(launches));
      } catch (_) {
      }
    }

    return launches;
  } catch (error) {
    console.warn("No se pudo actualizar la galería desde The Space Devs.", error);
    try {
      const cached = JSON.parse(localStorage.getItem(MEDIA_CACHE_KEY));
      if (cached?.length) return cached.slice(0, limit);
    } catch (_) {
    }
    return [];
  }
};

const getPlatformProfiles = async () => {
  try {
    const urls = [
      `${API_V23_PRODUCTION_BASE}/space_stations/4/?mode=normal&format=json`,
      `${API_V23_PRODUCTION_BASE}/pads/4/?format=json`,
      `${API_V23_PRODUCTION_BASE}/pads/188/?format=json`
    ];
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    if (responses.some((response) => !response.ok)) {
      throw new Error("Una o más fichas de plataforma no respondieron correctamente.");
    }

    const [station, kennedyPad, starbasePad] = await Promise.all(
      responses.map((response) => response.json())
    );
    const profiles = { station, pads: [kennedyPad, starbasePad] };
    try {
      localStorage.setItem(PLATFORMS_CACHE_KEY, JSON.stringify(profiles));
    } catch (_) {
    }
    return profiles;
  } catch (error) {
    console.warn("No se pudieron actualizar las plataformas desde The Space Devs.", error);
    try {
      const cached = JSON.parse(localStorage.getItem(PLATFORMS_CACHE_KEY));
      if (cached?.station && cached?.pads?.length === 2) return cached;
    } catch (_) {
    }
    return null;
  }
};
