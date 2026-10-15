
const appState = {
  currentSection: "home",
  launches: [],
  selectedLaunch: null,
  vehicles: [],
  selectedVehicleIndex: 0,
  astronauts: [],
  selectedAstronautIndex: 0,
  agencies: [],
  selectedAgencyIndex: 0,
  media: [],
  mediaLightboxTrigger: null,
  platformProfiles: null,
  filters: {
    agency: "todas",
    vehicle: "todos",
    status: "todos",
    search: ""
  }
};

const HERO_IMAGE_FALLBACK = "assets/vehiculos/falcon-9.jpg";

const VEHICLE_PHOTO_OVERRIDES = [
  {
    names: ["long march 2d"],
    url: "assets/vehiculos/long-march-2d-photo.png?v=2",
    credit: "China News Service / Wikimedia Commons",
    source: "https://commons.wikimedia.org/wiki/File:Yaogan-36_satellite_launch.png"
  },
  {
    names: ["long march 4b"],
    url: "assets/vehiculos/long-march-4b-photo.jpg?v=2",
    credit: "IHEP, Chinese Academy of Sciences / Wikimedia Commons",
    source: "https://commons.wikimedia.org/wiki/File:HXMT_launch.jpg"
  },
  {
    names: ["proton-m briz-m", "proton-m breeze-m"],
    url: "assets/vehiculos/proton-m-briz-m-photo.jpg",
    credit: "alexpgp / Wikimedia Commons",
    source: "https://commons.wikimedia.org/wiki/File:Launch_Vehicle_Arrival,_Proton-M.jpg"
  },
  {
    names: ["falcon 9 block 5", "falcon 9"],
    url: "assets/vehiculos/falcon-9.jpg?v=2",
    credit: "U.S. Space Force / Joshua Conti",
    source: "https://www.dvidshub.net/image/7326410/starlink-4-22-launch"
  }
];

const getImageUrl = (value) => {
  const normalizeSpaceDevsMediaUrl = (url) => url.replace(
    "https://thespacedevs-dev.nyc3.digitaloceanspaces.com/",
    "https://thespacedevs-prod.nyc3.digitaloceanspaces.com/"
  );

  if (typeof value === "string" && value.trim()) {
    return normalizeSpaceDevsMediaUrl(value.trim());
  }
  if (!value || typeof value !== "object") return "";
  const url = value.image_url || value.url || value.thumbnail_url || "";
  return typeof url === "string" ? normalizeSpaceDevsMediaUrl(url) : "";
};

const getVehicleMedia = (vehicle) => {
  const vehicleNames = [vehicle?.full_name, vehicle?.name]
    .filter(Boolean)
    .map((name) => String(name).trim().toLowerCase());
  const override = VEHICLE_PHOTO_OVERRIDES.find(({ names }) =>
    names.some((name) => vehicleNames.includes(name))
  );

  if (override) return override;

  return {
    url: getImageUrl(vehicle?.image_url || vehicle?.image),
    credit: vehicle?.image_credit || "",
    source: vehicle?.image_source || ""
  };
};

const getLaunchImageUrl = (launch) => {
  if (!launch) return "";

  const candidates = [
    launch.image,
    launch.image_url
  ];

  for (const candidate of candidates) {
    const url = getImageUrl(candidate);
    if (url) return url;
  }

  return "";
};

const escapeMediaText = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const getLaunchThumbnailFallback = (launch) => {
  const launchText = [
    launch?.name,
    launch?.rocket?.configuration?.name
  ].filter(Boolean).join(" ").toLowerCase();

  if (launchText.includes("long march")) {
    return "assets/vehiculos/long-march-2d-photo.jpg";
  }

  return HERO_IMAGE_FALLBACK;
};

const getAstronautImageUrl = (astronaut, preferThumbnail = false) => {
  if (!astronaut) return "";

  const candidates = preferThumbnail
    ? [astronaut.profile_image_thumbnail, astronaut.profile_image]
    : [astronaut.profile_image, astronaut.profile_image_thumbnail];

  for (const candidate of candidates) {
    const url = getImageUrl(candidate);
    if (url) return url;
  }

  return "";
};

const getAstronautDaysInSpace = (value) => {
  if (typeof value === "number" && Number.isFinite(value)) return Math.round(value);
  if (!value) return "—";

  const duration = String(value).trim();
  const writtenDays = duration.match(/(\d+)\s*(?:days?|días?)/i);
  if (writtenDays) return Number(writtenDays[1]);

  const isoDuration = duration.match(/^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?/i);
  if (isoDuration) {
    const years = Number(isoDuration[1] || 0);
    const months = Number(isoDuration[2] || 0);
    const days = Number(isoDuration[3] || 0);
    return (years * 365) + (months * 30) + days;
  }

  return /^\d+(?:\.\d+)?$/.test(duration) ? Math.round(Number(duration)) : "—";
};

const updateHeroLaunchImage = (launch) => {
  const imageEl = document.getElementById("hero-launch-image");
  if (!imageEl) return;

  const apiImageUrl = getLaunchImageUrl(launch);
  imageEl.classList.add("is-loading");
  imageEl.alt = launch?.name
    ? `Imagen del lanzamiento ${launch.name}`
    : "Imagen del próximo lanzamiento";

  imageEl.onload = () => imageEl.classList.remove("is-loading");
  imageEl.onerror = () => {
    imageEl.onerror = null;
    imageEl.src = HERO_IMAGE_FALLBACK;
    imageEl.alt = "Ilustración de respaldo del próximo lanzamiento";
  };

  imageEl.src = apiImageUrl || HERO_IMAGE_FALLBACK;
};

const initLiveClock = () => {
  const clockEl = document.getElementById("header-utc-clock");
  if (!clockEl) return;

  const updateClock = () => {
    const now = new Date();
    const day = String(now.getUTCDate()).padStart(2, "0");
    const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
    const month = months[now.getUTCMonth()];
    const year = now.getUTCFullYear();
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const mins = String(now.getUTCMinutes()).padStart(2, "0");
    const secs = String(now.getUTCSeconds()).padStart(2, "0");

    clockEl.textContent = `${day} ${month} ${year} / ${hours}:${mins}:${secs} UTC`;
  };

  updateClock();
  setInterval(updateClock, 1000);
};

window.navigateToSection = (sectionId, paramId = null) => {
  appState.currentSection = sectionId;

  const sections = document.querySelectorAll(".content-section");
  sections.forEach(sec => sec.classList.remove("active"));

  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    if (item.dataset.section === sectionId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  const breadcrumbEl = document.getElementById("header-breadcrumb");
  const sectionMap = {
    home: "INICIO",
    launches: "LANZAMIENTOS",
    "mission-detail": "MISIÓN",
    vehicles: "VEHÍCULOS",
    agencies: "AGENCIAS",
    astronauts: "ASTRONAUTAS",
    platforms: "PLATAFORMAS",
    media: "MEDIA"
  };
  if (breadcrumbEl) breadcrumbEl.textContent = sectionMap[sectionId] || "INICIO";

  const targetSection = document.getElementById(`section-${sectionId}`);
  if (targetSection) {
    targetSection.classList.add("active");
  }

  switch (sectionId) {
    case "home":
      renderHomeScreen();
      break;
    case "launches":
      renderLaunchesScreen();
      break;
    case "mission-detail":
      renderMissionDetailScreen(paramId);
      break;
    case "vehicles":
      renderVehiclesScreen();
      break;
    case "agencies":
      renderAgenciesScreen();
      break;
    case "astronauts":
      renderAstronautsScreen();
      break;
    case "platforms":
      renderPlatformsScreen();
      break;
    case "media":
      renderMediaScreen();
      break;
  }

  const contentArea = document.querySelector(".app-content-area");
  if (contentArea) contentArea.scrollTop = 0;
};


const renderHomeScreen = async () => {
  if (appState.launches.length === 0) {
    appState.launches = await getUpcomingLaunches(15);
  }

  let nextLaunch = appState.launches[0];
  if (!nextLaunch) {
    const missionTitle = document.getElementById("hero-mission-title");
    const agencyMeta = document.getElementById("hero-agency-meta");
    const countdownEl = document.getElementById("hero-countdown-timer");
    const btnHeroGo = document.getElementById("btn-hero-launch-detail");

    if (missionTitle) missionTitle.textContent = "Sin lanzamientos disponibles";
    if (agencyMeta) agencyMeta.textContent = "No fue posible obtener una misión futura desde la API";
    if (countdownEl) countdownEl.textContent = "T − --D --H --M";
    updateHeroLaunchImage(null);
    if (btnHeroGo) {
      btnHeroGo.disabled = true;
      btnHeroGo.setAttribute("aria-label", "No hay un lanzamiento disponible");
    }
    return;
  }

  if (!getLaunchImageUrl(nextLaunch) && nextLaunch.id) {
    const launchDetail = await getLaunchDetail(nextLaunch.id);
    if (launchDetail) {
      nextLaunch = { ...nextLaunch, ...launchDetail };
      appState.launches[0] = nextLaunch;
    }
  }

  const missionTitle = document.getElementById("hero-mission-title");
  const agencyMeta = document.getElementById("hero-agency-meta");
  const countdownEl = document.getElementById("hero-countdown-timer");

  if (missionTitle) missionTitle.textContent = nextLaunch.name;
  if (agencyMeta) agencyMeta.textContent = `${nextLaunch.launch_service_provider?.name || "Agencia Espacial"} · ${nextLaunch.rocket?.configuration?.name || "Cohete"}`;
  updateHeroLaunchImage(nextLaunch);

  if (countdownEl && nextLaunch.net) {
    startCountdownTimer(nextLaunch.net, "hero-countdown-timer");
  }

  const btnHeroGo = document.getElementById("btn-hero-launch-detail");
  if (btnHeroGo) {
    btnHeroGo.disabled = false;
    btnHeroGo.setAttribute("aria-label", `Ver lanzamiento ${nextLaunch.name}`);
    btnHeroGo.onclick = () => window.navigateToSection("mission-detail", nextLaunch.id);
  }
};

const renderLaunchesScreen = async () => {
  const container = document.getElementById("launches-list-container");
  if (!container) return;

  if (appState.launches.length === 0) {
    container.innerHTML = `<div class="ui-state-container"><div class="pulse-dot"></div><p style="margin-top:16px;">Cargando telemetría de lanzamientos...</p></div>`;
    appState.launches = await getUpcomingLaunches(20);
  }

  applyLaunchesFilters();
};

const applyLaunchesFilters = () => {
  const container = document.getElementById("launches-list-container");
  if (!container) return;

  let filtered = [...appState.launches];

  if (appState.filters.agency !== "todas") {
    filtered = filtered.filter(l => 
      l.launch_service_provider?.name?.toLowerCase().includes(appState.filters.agency.toLowerCase())
    );
  }

  if (appState.filters.search) {
    const term = appState.filters.search.toLowerCase();
    filtered = filtered.filter(l => 
      l.name.toLowerCase().includes(term) ||
      l.rocket?.configuration?.name?.toLowerCase().includes(term) ||
      l.launch_service_provider?.name?.toLowerCase().includes(term)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="ui-state-container">
        <div class="ui-state-icon">🛰️</div>
        <h3 class="ui-state-title">No se encontraron misiones</h3>
        <p class="ui-state-desc">No hay lanzamientos que coincidan con los filtros seleccionados.</p>
        <button class="btn-ghost" onclick="resetFilters()">Limpiar Filtros</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((launch, index) => {
    const fallbackThumb = getLaunchThumbnailFallback(launch);
    const thumbImg = getLaunchImageUrl(launch) || fallbackThumb;
    const dateFormatted = formatDateReadable(launch.net);
    const agencyName = launch.launch_service_provider?.name || "Agencia Espacial";
    const rocketName = launch.rocket?.configuration?.name || "Lanzador";

    const isFirst = (index === 0 && appState.filters.agency === "todas" && !appState.filters.search);
    const timeInfo = isFirst 
      ? `<div class="timing-label">COUNTDOWN</div><div class="timing-value timing-countdown" id="launch-card-countdown-${launch.id}">T - EN CURSO</div>`
      : `<div class="timing-label">LANZAMIENTO</div><div class="timing-value">${dateFormatted.split(',')[0]}</div>`;

    return `
      <div class="launch-card" onclick="window.navigateToSection('mission-detail', '${launch.id}')">
        <img class="launch-thumb" src="${thumbImg}" alt="${launch.name}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackThumb}';" />
        <div class="launch-info">
          <h3 class="launch-title">${launch.name}</h3>
          <p class="launch-agency-meta">${agencyName} &nbsp;/&nbsp; ${rocketName}</p>
        </div>
        <div class="launch-timing">
          ${timeInfo}
        </div>
        <button class="btn-arrow-circle" aria-label="Ver detalle">→</button>
      </div>
    `;
  }).join("");

  if (filtered[0] && filtered[0].net) {
    const firstCountEl = document.getElementById(`launch-card-countdown-${filtered[0].id}`);
    if (firstCountEl) {
      const time = calculateTimeDifference(filtered[0].net);
      firstCountEl.textContent = `${time.formatted}`;
    }
  }
};

window.resetFilters = () => {
  appState.filters = { agency: "todas", vehicle: "todos", status: "todos", search: "" };
  const agencySel = document.getElementById("filter-agency");
  const searchInput = document.getElementById("global-search-input");
  if (agencySel) {
    agencySel.value = "todas";
    updateAgencyFilterControl("todas");
  }
  if (searchInput) searchInput.value = "";
  applyLaunchesFilters();
};

const updateAgencyFilterControl = (value) => {
  const agencySel = document.getElementById("filter-agency");
  const toggle = document.getElementById("filter-agency-toggle");
  const menu = document.getElementById("filter-agency-menu");
  if (!agencySel || !toggle || !menu) return;

  const option = agencySel.querySelector(`option[value="${value}"]`);
  const label = option?.textContent || "Agencia: Todas";
  agencySel.value = value;
  toggle.querySelector("span").textContent = label;
  menu.querySelectorAll("[role=option]").forEach((item) => {
    const isSelected = item.dataset.value === value;
    item.setAttribute("aria-selected", String(isSelected));
    item.classList.toggle("is-selected", isSelected);
  });
};

const closeAgencyFilterMenu = () => {
  const toggle = document.getElementById("filter-agency-toggle");
  const menu = document.getElementById("filter-agency-menu");
  if (!toggle || !menu) return;
  menu.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
  toggle.classList.remove("is-open");
};

const renderMissionDetailScreen = async (launchId) => {
  const launch = appState.launches.find(l => l.id === launchId) || appState.launches[0];
  if (!launch) return;

  document.getElementById("detail-mission-name").textContent = launch.name;
  document.getElementById("detail-agency-rocket").textContent = `${launch.launch_service_provider?.name || "Agencia"} / ${launch.rocket?.configuration?.full_name || "Cohete"}`;
  document.getElementById("detail-description").textContent = launch.mission?.description || "Misión espacial oficial registrada en la base de datos aeroespacial.";
  document.getElementById("detail-launch-date").textContent = formatDateReadable(launch.net);
  document.getElementById("detail-launch-pad").textContent = `${launch.pad?.name || "Base de lanzamiento"} (${launch.pad?.location?.name || "Ubicación"})`;

  if (launch.net) {
    startCountdownTimer(launch.net, "detail-countdown-timer");
  }

  document.getElementById("detail-rocket-name").textContent = launch.rocket?.configuration?.full_name || "Vehículo Espacial";
  document.getElementById("detail-rocket-family").textContent = launch.rocket?.configuration?.family || "Lanzador Orbital";
};

const renderVehiclesScreen = async () => {
  const container = document.getElementById("vehicles-carousel-container");
  if (!container) return;

  if (appState.vehicles.length === 0) {
    container.innerHTML = `
      <div class="ui-state-container vehicles-loading-state">
        <div class="pulse-dot"></div>
        <p style="margin-top:16px;">Cargando fichas técnicas de vehículos…</p>
      </div>
    `;
    appState.vehicles = await getLauncherConfigs(10);
  }

  if (appState.vehicles.length === 0) {
    container.innerHTML = `
      <div class="ui-state-container vehicles-loading-state">
        <h3 class="ui-state-title">No se pudieron cargar los vehículos</h3>
        <p class="ui-state-desc">La API no devolvió configuraciones de lanzadores. Recargá la sección para intentarlo nuevamente.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = appState.vehicles.map((v, i) => {
    return `
      <button type="button"
              class="vehicle-thumb-card ${i === appState.selectedVehicleIndex ? 'active' : ''}"
              data-vehicle-index="${i}"
              aria-pressed="${i === appState.selectedVehicleIndex}"
              onclick="selectVehicle(${i})">
        <div>
          <h4 style="color:var(--text-bright);font-size:0.95rem;">${v.name}</h4>
          <p style="font-size:0.75rem;color:var(--text-dim);">${v.manufacturer?.name || "Fabricante"}</p>
        </div>
      </button>
    `;
  }).join("");

  if (appState.vehicles.length > 0) {
    const safeIndex = Math.min(appState.selectedVehicleIndex, appState.vehicles.length - 1);
    window.selectVehicle(safeIndex);
  }
};

window.selectVehicle = (index) => {
  const vehicle = appState.vehicles[index];
  if (!vehicle) return;

  appState.selectedVehicleIndex = index;

  document.querySelectorAll(".vehicle-thumb-card").forEach((card) => {
    const isSelected = Number(card.dataset.vehicleIndex) === index;
    card.classList.toggle("active", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });

  document.getElementById("vehicle-feat-name").textContent = vehicle.full_name || vehicle.name;
  document.getElementById("vehicle-feat-desc").textContent = vehicle.description || vehicle.families?.[0]?.description || "La API no proporciona una descripción para este vehículo.";
  document.getElementById("vehicle-metric-height").textContent = vehicle.length ? `${vehicle.length} M` : "—";
  document.getElementById("vehicle-metric-diameter").textContent = vehicle.diameter ? `${vehicle.diameter} M` : "—";
  document.getElementById("vehicle-metric-thrust").textContent = vehicle.to_thrust ? `${(vehicle.to_thrust / 1000).toFixed(1)} MN` : "—";
  document.getElementById("vehicle-metric-stages").textContent = vehicle.max_stage || vehicle.min_stage || "—";

  const imageEl = document.getElementById("vehicle-feat-image");
  const emptyEl = document.getElementById("vehicle-image-empty");
  const creditEl = document.getElementById("vehicle-image-credit");
  const vehicleMedia = getVehicleMedia(vehicle);
  const imageUrl = vehicleMedia.url;

  if (imageEl && emptyEl) {
    imageEl.onload = () => {
      imageEl.hidden = false;
      imageEl.classList.remove("is-loading");
      emptyEl.hidden = true;
      if (creditEl) creditEl.hidden = !vehicleMedia.credit;
    };

    imageEl.onerror = () => {
      imageEl.onerror = null;
      imageEl.removeAttribute("src");
      imageEl.alt = "";
      imageEl.hidden = true;
      imageEl.classList.remove("is-loading");
      emptyEl.hidden = false;
      emptyEl.textContent = "No hay una imagen verificada disponible para este vehículo.";
      if (creditEl) creditEl.hidden = true;
    };

    if (creditEl) {
      creditEl.textContent = vehicleMedia.credit;
      creditEl.href = vehicleMedia.source || "#";
      creditEl.hidden = true;
    }

    if (imageUrl) {
      imageEl.hidden = false;
      imageEl.classList.add("is-loading");
      imageEl.alt = `Imagen de ${vehicle.full_name || vehicle.name}`;
      emptyEl.hidden = true;
      imageEl.src = imageUrl;
    } else {
      imageEl.onerror = null;
      imageEl.removeAttribute("src");
      imageEl.alt = "";
      imageEl.hidden = true;
      imageEl.classList.remove("is-loading");
      emptyEl.hidden = false;
      emptyEl.textContent = "No hay una imagen verificada disponible para este vehículo.";
      if (creditEl) creditEl.hidden = true;
    }
  }
};

const renderAgenciesScreen = async () => {
  const container = document.getElementById("agencies-grid-container");
  if (!container) return;

  if (appState.agencies.length === 0) {
    appState.agencies = await getAgencies(12);
  }

  container.innerHTML = appState.agencies.map((agency, i) => {
    const logoImg = agency.logo_url || "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg";
    return `
      <button type="button"
              class="agency-item-card ${i === appState.selectedAgencyIndex ? 'active' : ''}"
              data-agency-index="${i}"
              aria-pressed="${i === appState.selectedAgencyIndex}"
              onclick="selectAgency(${i})">
        <div>
          <h4 style="color:var(--text-bright);font-size:1.05rem;">${agency.name}</h4>
          <p style="font-size:0.8rem;color:var(--text-dim);">${agency.country_code || "Global"}</p>
        </div>
        <img class="agency-logo-img" src="${logoImg}" alt="${agency.name}" />
      </button>
    `;
  }).join("");

  if (appState.agencies.length > 0) {
    const safeIndex = Math.min(appState.selectedAgencyIndex, appState.agencies.length - 1);
    window.selectAgency(safeIndex);
  }
};

window.selectAgency = (index) => {
  const agency = appState.agencies[index];
  if (!agency) return;

  appState.selectedAgencyIndex = index;

  document.querySelectorAll(".agency-item-card").forEach((card) => {
    const isSelected = Number(card.dataset.agencyIndex) === index;
    card.classList.toggle("active", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });

  document.getElementById("agency-panel-title").textContent = agency.name;
  const agencyLogo = document.getElementById("agency-panel-logo");
  if (agencyLogo) {
    agencyLogo.src = agency.logo_url || "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg";
    agencyLogo.alt = `Logo de ${agency.name}`;
  }
  document.getElementById("agency-panel-desc").textContent = agency.description || "Agencia aeroespacial líder en exploración y desarrollo científico.";
  document.getElementById("agency-panel-year").textContent = agency.founding_year || "1958";
  document.getElementById("agency-panel-launches").textContent = agency.total_launch_count || "120";
};

const renderAstronautsScreen = async () => {
  const container = document.getElementById("astronauts-grid-container");
  if (!container) return;

  if (appState.astronauts.length === 0) {
    appState.astronauts = await getAstronauts("", 12);
  }

  container.innerHTML = appState.astronauts.map((astro, i) => {
    const avatar = getAstronautImageUrl(astro, true);
    const initial = (astro.name || "A").trim().charAt(0).toUpperCase();
    const agencyName = astro.agency?.name || "Agencia";
    const agencyLabel = astro.agency?.abbrev || (
      agencyName === "National Aeronautics and Space Administration" ? "NASA" : agencyName
    );
    return `
      <button type="button"
              class="astronaut-item-card ${i === appState.selectedAstronautIndex ? 'active' : ''}"
              data-astronaut-index="${i}"
              aria-pressed="${i === appState.selectedAstronautIndex}"
              onclick="selectAstronaut(${i})">
        <div class="astronaut-avatar-wrap">
          <span class="astronaut-avatar-media">
            ${avatar ? `<img class="astronaut-avatar-img" src="${avatar}" alt="" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false;" />` : ""}
            <span class="astronaut-avatar-placeholder" ${avatar ? "hidden" : ""} aria-hidden="true">${initial}</span>
          </span>
          <div class="astronaut-card-copy">
            <h4 style="color:var(--text-bright);font-size:0.95rem;">${astro.name}</h4>
            <p style="font-size:0.75rem;color:var(--text-dim);">${agencyLabel}</p>
          </div>
        </div>
        <span class="btn-arrow-circle astronaut-card-arrow" aria-hidden="true">→</span>
      </button>
    `;
  }).join("");

  if (appState.astronauts.length > 0) {
    const safeIndex = Math.min(appState.selectedAstronautIndex, appState.astronauts.length - 1);
    window.selectAstronaut(safeIndex);
  }
};

window.selectAstronaut = (index) => {
  const astro = appState.astronauts[index];
  if (!astro) return;

  appState.selectedAstronautIndex = index;

  document.querySelectorAll(".astronaut-item-card").forEach((card) => {
    const isSelected = Number(card.dataset.astronautIndex) === index;
    card.classList.toggle("active", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });

  document.getElementById("astronaut-panel-name").textContent = astro.name;
  document.getElementById("astronaut-panel-agency").textContent = `${astro.agency?.name || "Agencia"} / ${astro.nationality || "Nacionalidad"}`;
  document.getElementById("astronaut-panel-bio").textContent = astro.bio || "Astronauta activo en misiones espaciales internacionales.";
  document.getElementById("astronaut-panel-days").textContent = getAstronautDaysInSpace(astro.time_in_space);
  document.getElementById("astronaut-panel-spacewalks").textContent = astro.spacewalks_count ?? "—";

  const imageEl = document.getElementById("astronaut-panel-image");
  const imagePlaceholder = document.getElementById("astronaut-panel-image-placeholder");
  const imageUrl = getAstronautImageUrl(astro);

  if (imageEl && imagePlaceholder) {
    imagePlaceholder.textContent = (astro.name || "A").trim().charAt(0).toUpperCase();

    imageEl.onload = () => {
      imageEl.hidden = false;
      imagePlaceholder.hidden = true;
    };
    imageEl.onerror = () => {
      imageEl.onerror = null;
      imageEl.removeAttribute("src");
      imageEl.hidden = true;
      imagePlaceholder.hidden = false;
    };

    if (imageUrl) {
      imageEl.alt = `Retrato de ${astro.name}`;
      imageEl.hidden = false;
      imagePlaceholder.hidden = true;
      imageEl.src = imageUrl;
    } else {
      imageEl.removeAttribute("src");
      imageEl.alt = "";
      imageEl.hidden = true;
      imagePlaceholder.hidden = false;
    }
  }
};

window.handlePlatformImageError = (image) => {
  const visual = image.closest(".platform-card-visual");
  if (!visual) return;

  image.hidden = true;
  if (image.classList.contains("platform-card-image--primary")) {
    visual.classList.add("platform-card-visual--primary-missing");
  }

  const hasAvailableImage = [...visual.querySelectorAll(".platform-card-image")]
    .some((candidate) => !candidate.hidden);
  const emptyState = visual.querySelector(".platform-card-image-empty");
  if (emptyState) emptyState.hidden = hasAvailableImage;
};

const renderPlatformsScreen = async () => {
  const container = document.getElementById("platforms-grid-container");
  if (!container) return;

  if (!appState.platformProfiles) {
    container.innerHTML = Array.from({ length: 3 }, () => `
      <div class="platform-card platform-card--skeleton" aria-hidden="true">
        <div class="platform-card-image media-skeleton-block"></div>
        <div class="platform-card-content">
          <span class="media-skeleton-line media-skeleton-line--short"></span>
          <span class="media-skeleton-line"></span>
          <span class="media-skeleton-line media-skeleton-line--medium"></span>
        </div>
      </div>
    `).join("");
    appState.platformProfiles = await getPlatformProfiles();
  }

  if (!appState.platformProfiles) {
    container.innerHTML = `
      <div class="ui-state-container platforms-empty-state">
        <h3 class="ui-state-title">No pudimos cargar las plataformas</h3>
        <p class="ui-state-desc">The Space Devs no respondió y todavía no hay datos guardados en este navegador.</p>
        <button type="button" class="btn-ghost" onclick="retryPlatformsLoad()">Reintentar conexión</button>
      </div>
    `;
    return;
  }

  const { station, pads } = appState.platformProfiles;
  const stationOwners = station.owners?.map((owner) => owner.abbrev || owner.name).join(" · ") || "Alianza internacional";
  const profiles = [
    {
      type: "ESTACIÓN ORBITAL",
      name: station.name,
      image: getImageUrl(station.image),
      secondaryImage: "assets/plataformas/iss-hover.jpg",
      imageAlt: station.image?.name || station.name,
      description: "Laboratorio orbital habitado de forma permanente y centro internacional de investigación en microgravedad.",
      operatorLabel: "OPERADORES",
      operator: stationOwners,
      locationLabel: "ÓRBITA",
      location: station.orbit || "Órbita terrestre baja",
      status: station.status?.name || "Active",
      metrics: [
        { value: station.onboard_crew ?? "—", label: "TRIPULANTES" },
        { value: station.docked_vehicles ?? "—", label: "NAVES ACOPLADAS" }
      ],
      footer: station.founded ? `EN ÓRBITA DESDE ${new Date(station.founded).getUTCFullYear()}` : "ESTACIÓN ACTIVA",
      actionLabel: "VER REGISTRO",
      actionUrl: "https://www.nasa.gov/international-space-station/"
    },
    ...pads.map((pad, index) => ({
      type: "PLATAFORMA DE LANZAMIENTO",
      name: index === 0 ? pad.name : "Starbase Orbital Launch Pad 1",
      image: getImageUrl(pad.image) || getImageUrl(pad.map_image),
      secondaryImage: index === 0
        ? "assets/plataformas/lc39b-hover.jpg"
        : "assets/plataformas/starbase-hover.jpg",
      imageAlt: `Vista satelital de ${pad.name}`,
      description: index === 0
        ? "Complejo histórico del Kennedy Space Center, adaptado para misiones lunares del programa Artemis."
        : "Primera plataforma orbital para el sistema Starship y Super Heavy en las instalaciones de SpaceX Starbase.",
      operatorLabel: "OPERADOR",
      operator: pad.agencies?.map((agency) => agency.name).join(" · ") || "Agencia no informada",
      locationLabel: "UBICACIÓN",
      location: pad.location?.name || "Ubicación no informada",
      status: pad.active ? "Active" : "Inactive",
      metrics: [
        { value: pad.total_launch_count ?? "—", label: "LANZAMIENTOS" },
        { value: pad.orbital_launch_attempt_count ?? "—", label: "INTENTOS ORBITALES" }
      ],
      footer: `${Number(pad.latitude).toFixed(3)}° / ${Number(pad.longitude).toFixed(3)}°`,
      actionLabel: "VER MAPA",
      actionUrl: pad.map_url || `https://www.google.com/maps?q=${pad.latitude},${pad.longitude}`
    }))
  ];

  container.innerHTML = profiles.map((profile) => `
    <article class="platform-card">
      <div class="platform-card-visual">
        <img class="platform-card-image platform-card-image--primary" src="${escapeMediaText(profile.image)}" alt="${escapeMediaText(profile.imageAlt)}" loading="lazy" onerror="handlePlatformImageError(this)" />
        <img class="platform-card-image platform-card-image--secondary" src="${escapeMediaText(profile.secondaryImage)}" alt="" aria-hidden="true" loading="lazy" onerror="handlePlatformImageError(this)" />
        <span class="platform-card-image-empty" hidden>IMAGEN NO DISPONIBLE</span>
        <span class="platform-type-badge">${profile.type}</span>
        <span class="platform-status-badge"><span aria-hidden="true"></span>${profile.status === "Active" ? "ACTIVA" : "INACTIVA"}</span>
      </div>
      <div class="platform-card-content">
        <div>
          <p class="platform-card-eyebrow">FICHA TÉCNICA</p>
          <h3 class="platform-card-title">${escapeMediaText(profile.name)}</h3>
          <p class="platform-card-description">${escapeMediaText(profile.description)}</p>
        </div>
        <dl class="platform-data-list">
          <div>
            <dt>${profile.operatorLabel}</dt>
            <dd>${escapeMediaText(profile.operator)}</dd>
          </div>
          <div>
            <dt>${profile.locationLabel}</dt>
            <dd>${escapeMediaText(profile.location)}</dd>
          </div>
        </dl>
        <div class="platform-metrics">
          ${profile.metrics.map((metric) => `
            <div><strong>${escapeMediaText(metric.value)}</strong><span>${metric.label}</span></div>
          `).join("")}
        </div>
        <div class="platform-card-footer">
          <span>${escapeMediaText(profile.footer)}</span>
          <a href="${escapeMediaText(profile.actionUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeMediaText(profile.actionLabel)}: ${escapeMediaText(profile.name)}">${profile.actionLabel} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  `).join("");
};

window.retryPlatformsLoad = async () => {
  appState.platformProfiles = null;
  await renderPlatformsScreen();
};

const renderMediaScreen = async () => {
  const container = document.getElementById("media-grid-container");
  if (!container) return;

  if (appState.media.length === 0) {
    container.innerHTML = Array.from({ length: 8 }, (_, index) => `
      <div class="media-card media-card--skeleton ${index === 0 ? "media-card--featured" : ""}" aria-hidden="true">
        <div class="media-card-img media-skeleton-block"></div>
        <div class="media-card-body">
          <span class="media-skeleton-line media-skeleton-line--short"></span>
          <span class="media-skeleton-line"></span>
          <span class="media-skeleton-line media-skeleton-line--medium"></span>
        </div>
      </div>
    `).join("");
    appState.media = await getLaunchMedia(24);
  }

  renderMediaGrid();
};

const renderMediaGrid = () => {
  const container = document.getElementById("media-grid-container");
  const countEl = document.getElementById("media-results-count");
  if (!container) return;

  const enriched = appState.media.map((launch) => ({
    launch,
    imageUrl: getLaunchImageUrl(launch),
    thumbnailUrl: getImageUrl(launch?.image?.thumbnail_url || launch?.image)
  }));
  const filtered = enriched.filter((item) => Boolean(item.imageUrl));

  if (countEl) countEl.textContent = String(filtered.length).padStart(2, "0");

  if (appState.media.length === 0) {
    container.innerHTML = `
      <div class="ui-state-container media-empty-state">
        <div class="media-empty-mark" aria-hidden="true"></div>
        <h3 class="ui-state-title">No pudimos cargar el archivo fotográfico</h3>
        <p class="ui-state-desc">The Space Devs no respondió y todavía no hay datos guardados en este navegador.</p>
        <button type="button" class="btn-ghost" onclick="retryMediaLoad()">Reintentar conexión</button>
      </div>
    `;
    return;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="ui-state-container media-empty-state">
        <div class="media-empty-mark" aria-hidden="true"></div>
        <h3 class="ui-state-title">No hay fotografías disponibles</h3>
        <p class="ui-state-desc">La API no devolvió imágenes utilizables para este archivo.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((item, index) => {
    const { launch, imageUrl, thumbnailUrl } = item;
    const mediaIndex = appState.media.findIndex((entry) => entry.id === launch.id);
    const agency = launch.launch_service_provider?.name || "Agencia no informada";
    const credit = launch.image?.credit || agency;
    const missionType = launch.mission?.type || launch.rocket?.configuration?.name || "Lanzamiento orbital";
    const imageName = launch.image?.name || launch.name;
    const cardClass = index === 0 ? "media-card--featured" : "";
    const date = formatDateReadable(launch.net).split(",")[0];
    const displayImageUrl = index === 0 ? imageUrl : (thumbnailUrl || imageUrl);
    const fullImageData = imageUrl
      ? ` data-full-image="${escapeMediaText(imageUrl)}"`
      : "";

    return `
      <button type="button"
              class="media-card ${cardClass}"
              onclick="openMediaItem(${mediaIndex})"
              aria-label="Ampliar imagen: ${escapeMediaText(launch.name)}">
        <span class="media-badge">FOTO API</span>
        <img class="media-card-img" src="${escapeMediaText(displayImageUrl)}" alt="${escapeMediaText(imageName)}" loading="lazy"${fullImageData} onerror="handleMediaImageError(this, '${escapeMediaText(launch.id)}')" />
        <span class="media-card-overlay" aria-hidden="true"></span>
        <span class="media-card-body">
          <span class="media-card-kicker">${escapeMediaText(agency)} · ${escapeMediaText(date)}</span>
          <strong class="media-card-title">${escapeMediaText(launch.name)}</strong>
          <span class="media-card-description">${escapeMediaText(missionType)}</span>
          <span class="media-card-footer">
            <span>CRÉDITO: ${escapeMediaText(credit)}</span>
            <span class="media-card-action">AMPLIAR <span aria-hidden="true">+</span></span>
          </span>
        </span>
      </button>
    `;
  }).join("");
};

window.handleMediaImageError = (imageEl, launchId) => {
  const fullImageUrl = imageEl?.dataset?.fullImage || "";
  const currentUrl = imageEl?.currentSrc || imageEl?.src || "";

  if (fullImageUrl && currentUrl !== fullImageUrl && imageEl.dataset.fullTried !== "true") {
    imageEl.dataset.fullTried = "true";
    imageEl.src = fullImageUrl;
    return;
  }

  appState.media = appState.media.filter((launch) => String(launch.id) !== String(launchId));
  renderMediaGrid();
};

window.openMediaItem = (index) => {
  const launch = appState.media[index];
  if (!launch) return;

  const imageUrl = getLaunchImageUrl(launch);
  if (imageUrl) {
    const lightbox = document.getElementById("media-lightbox");
    const imageEl = document.getElementById("media-lightbox-image");
    const titleEl = document.getElementById("media-lightbox-title");
    const metaEl = document.getElementById("media-lightbox-meta");
    const creditEl = document.getElementById("media-lightbox-credit");
    if (!lightbox || !imageEl || !titleEl || !metaEl || !creditEl) return;

    const agency = launch.launch_service_provider?.name || "Agencia no informada";
    const date = formatDateReadable(launch.net).split(",")[0];
    const credit = launch.image?.credit || agency;

    appState.mediaLightboxTrigger = document.activeElement;
    imageEl.onerror = () => {
      imageEl.onerror = null;
      window.closeMediaLightbox();
      if (typeof showToast === "function") {
        showToast("La imagen original ya no está disponible en The Space Devs.");
      }
    };
    imageEl.src = imageUrl;
    imageEl.alt = launch.image?.name || `Imagen de ${launch.name}`;
    titleEl.textContent = launch.name;
    metaEl.textContent = `${agency} · ${date}`;
    creditEl.textContent = `Crédito: ${credit}`;
    document.body.classList.add("media-lightbox-open");
    lightbox.showModal();
    return;
  }

};

window.closeMediaLightbox = () => {
  const lightbox = document.getElementById("media-lightbox");
  if (lightbox?.open) lightbox.close();
};

window.retryMediaLoad = async () => {
  appState.media = [];
  await renderMediaScreen();
};


document.addEventListener("DOMContentLoaded", () => {
  initLiveClock();

  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const section = item.dataset.section;
      if (section) window.navigateToSection(section);
    });
  });

  const agencyFilter = document.getElementById("filter-agency");
  if (agencyFilter) {
    agencyFilter.addEventListener("change", (e) => {
      appState.filters.agency = e.target.value;
      updateAgencyFilterControl(e.target.value);
      applyLaunchesFilters();
    });

    const agencyToggle = document.getElementById("filter-agency-toggle");
    const agencyMenu = document.getElementById("filter-agency-menu");
    agencyToggle?.addEventListener("click", () => {
      const isOpen = !agencyMenu.hidden;
      agencyMenu.hidden = isOpen;
      agencyToggle.setAttribute("aria-expanded", String(!isOpen));
      agencyToggle.classList.toggle("is-open", !isOpen);
    });

    agencyMenu?.querySelectorAll("[role=option]").forEach((option) => {
      option.addEventListener("click", () => {
        agencyFilter.value = option.dataset.value;
        agencyFilter.dispatchEvent(new Event("change", { bubbles: true }));
        closeAgencyFilterMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".filter-select-wrap")) closeAgencyFilterMenu();
    });
    updateAgencyFilterControl(agencyFilter.value);
  }

  const searchInput = document.getElementById("global-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.filters.search = e.target.value.trim();
      if (appState.currentSection !== "launches") {
        window.navigateToSection("launches");
      } else {
        applyLaunchesFilters();
      }
    });
  }

  const btnHomeLaunch = document.getElementById("btn-home-ver-lanzamiento");
  if (btnHomeLaunch) {
    btnHomeLaunch.addEventListener("click", () => {
      window.navigateToSection("launches");
    });
  }

  const mediaLightbox = document.getElementById("media-lightbox");
  const mediaLightboxClose = document.getElementById("media-lightbox-close");
  if (mediaLightbox && mediaLightboxClose) {
    mediaLightboxClose.addEventListener("click", window.closeMediaLightbox);
    mediaLightbox.addEventListener("click", (event) => {
      if (event.target === mediaLightbox) window.closeMediaLightbox();
    });
    mediaLightbox.addEventListener("close", () => {
      document.body.classList.remove("media-lightbox-open");
      document.getElementById("media-lightbox-image")?.removeAttribute("src");
      if (appState.mediaLightboxTrigger instanceof HTMLElement) {
        appState.mediaLightboxTrigger.focus();
      }
      appState.mediaLightboxTrigger = null;
    });
  }
});
