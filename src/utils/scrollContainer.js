export function scrollContainer(identifier, left = false) {
  const container = document.querySelector(identifier);
  const scrollAmount = window.innerWidth;

  if (container.scrollBy) {
    container.scrollBy({
      left: left ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  } else {
    container.scrollLeft += scrollAmount;
  }
};