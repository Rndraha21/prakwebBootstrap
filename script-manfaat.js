const fadeElements = document.querySelectorAll(".content-fade");

window.addEventListener("scroll", () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (rect < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});

