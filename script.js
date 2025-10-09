const logo = document.getElementById("logo");
const words = ["AI", "dalam", "Pendidikan"];

let wordIndex = 0;
let charIndex = 0;

let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    logo.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (isDeleting) {
    logo.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => {
      isDeleting = true;
      typeEffect();
    }, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(() => {
      typeEffect();
    }, 500);
    return;
  }

  const speed = isDeleting ? 100 : 150;
  setTimeout(typeEffect, speed);
};

typeEffect();
