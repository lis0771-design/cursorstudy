const spotlight = document.querySelector(".spotlight");
const navItems = [...document.querySelectorAll(".nav-item")];
const sections = ["about", "experience", "personality", "goals"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

function moveSpotlight(event) {
  spotlight.style.background = `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, var(--spotlight), transparent 80%)`;
}

function setActiveNav() {
  const offset = window.scrollY + window.innerHeight * 0.28;
  let current = sections[0]?.id;

  sections.forEach((section) => {
    if (section.offsetTop <= offset) current = section.id;
  });

  navItems.forEach((item) => {
    item.classList.toggle("is-active", item.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("mousemove", moveSpotlight);
window.addEventListener("scroll", setActiveNav);
window.addEventListener("resize", setActiveNav);
setActiveNav();
