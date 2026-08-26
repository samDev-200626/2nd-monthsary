const floatingHearts = document.getElementById("floating-hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤";

  const left = Math.random() * 100;
  const size = (Math.random() * 1.4 + 0.8).toFixed(2);
  const duration = (Math.random() * 6 + 8).toFixed(2);
  const delay = (Math.random() * 5).toFixed(2);
  const drift = `${(Math.random() * 120 - 60).toFixed(0)}px`;

  heart.style.left = `${left}vw`;
  heart.style.fontSize = `${size}rem`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.setProperty("--drift", drift);

  floatingHearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, (Number(duration) + Number(delay) + 1) * 1000);
}

setInterval(createHeart, 450);

window.addEventListener("load", () => {
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 150);
  }
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((element) => observer.observe(element));
