
let activeCountdownInterval = null;

const formatTwoDigits = (num) => (num < 10 ? `0${num}` : `${num}`);

const calculateTimeDifference = (targetDateString) => {
  const targetTime = new Date(targetDateString).getTime();
  const now = Date.now();
  const diff = targetTime - now;

  if (diff <= 0) {
    return { isPast: true, days: "00", hours: "00", minutes: "00", seconds: "00", formatted: "T + 00:00:00" };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    isPast: false,
    days: formatTwoDigits(days),
    hours: formatTwoDigits(hours),
    minutes: formatTwoDigits(minutes),
    seconds: formatTwoDigits(seconds),
    formatted: `T - ${formatTwoDigits(days)}D ${formatTwoDigits(hours)}H ${formatTwoDigits(minutes)}M`
  };
};

const startCountdownTimer = (targetDateString, elementId) => {
  if (activeCountdownInterval) {
    clearInterval(activeCountdownInterval);
  }

  const updateDisplay = () => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const time = calculateTimeDifference(targetDateString);
    if (time.isPast) {
      el.textContent = "LANZADO";
      el.style.color = "var(--green-go)";
    } else {
      el.textContent = `T - ${time.days}D ${time.hours}H ${time.minutes}M ${time.seconds}S`;
    }
  };

  updateDisplay();
  activeCountdownInterval = setInterval(updateDisplay, 1000);
};

const formatDateReadable = (isoString) => {
  if (!isoString) return "Fecha por confirmar";
  const date = new Date(isoString);
  const options = { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: "UTC" };
  return date.toLocaleDateString("es-ES", options).toUpperCase() + " UTC";
};
