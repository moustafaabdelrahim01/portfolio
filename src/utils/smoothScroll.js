export function smoothScrollTo(id, duration = 1000, offset = 64) {
  const element = document.getElementById(id);
  if (!element) return;

  const startY = window.scrollY;
  const endY = element.getBoundingClientRect().top + window.scrollY - offset;
  const distance = endY - startY;
  let startTime = null;

  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function step(currentTime) {
    if (startTime === null) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);

    window.scrollTo({
      top: startY + distance * easeInOutCubic(progress),
      behavior: "instant",
    });

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}