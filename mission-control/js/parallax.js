
const initParallaxEngine = () => {
  const container = document.getElementById("view-prelogin");
  if (!container) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;

  const layerBg = document.getElementById("parallax-bg-layer") || document.querySelector(".parallax-bg");
  const layerFrame = document.getElementById("parallax-frame-layer") || document.querySelector(".parallax-frame-accent");
  const layerAstronaut = document.getElementById("parallax-astro-layer") || document.querySelector(".parallax-astronaut-wrap");
  const contentBox = document.querySelector(".prelogin-content-box");

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let isHovering = false;
  let animationFrameId = null;

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const onPointerMove = (e) => {
    isHovering = true;
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rawX = (e.clientX - centerX) / (rect.width / 2);
    const rawY = (e.clientY - centerY) / (rect.height / 2);

    targetX = Math.max(-1, Math.min(1, rawX));
    targetY = Math.max(-1, Math.min(1, rawY));
  };

  const onPointerLeave = () => {
    isHovering = false;
    targetX = 0;
    targetY = 0;
  };

  const renderLoop = () => {
    currentX = lerp(currentX, targetX, 0.08);
    currentY = lerp(currentY, targetY, 0.08);

    if (layerBg) {
      layerBg.style.transform = `scale(1.05) translate3d(${currentX * 8}px, ${currentY * 4}px, 0)`;
    }

    if (layerFrame) {
      layerFrame.style.transform = `translate3d(${currentX * 16}px, ${currentY * 9}px, 0)`;
    }

    if (layerAstronaut) {
      layerAstronaut.style.transform = `translate3d(${currentX * 28}px, ${currentY * 15}px, 0)`;
    }

    if (contentBox) {
      contentBox.style.transform = `translate3d(${currentX * 4}px, ${currentY * 2}px, 0)`;
    }

    animationFrameId = requestAnimationFrame(renderLoop);
  };

  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerleave", onPointerLeave);

  animationFrameId = requestAnimationFrame(renderLoop);
};

document.addEventListener("DOMContentLoaded", initParallaxEngine);

