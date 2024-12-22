// Add to css for fade effect
// .idc-header {
//   transition: opacity 0.5s ease;
// }

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".idc-header");
  let lastScrollY = window.scrollY;
  let visible = true;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      if (visible) {
        header.style.opacity = "0";
        header.style.pointerEvents = "none";
        visible = false;
      }
    } else {
      // Scrolling up
      if (!visible) {
        header.style.opacity = "1";
        header.style.pointerEvents = "all";
        visible = true;
      }
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
});
