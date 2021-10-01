// Script to fix the viewport height on mobile
window.addEventListener("resize", () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function openSideNav() {
  const sideNav = document.getElementById("sideNav");
  sideNav.classList.add("isOpen");
  const backgroundClosingSideNav = document.getElementById(
    "backgroundClosingSideNav"
  );
  backgroundClosingSideNav.classList.add("backgroundClosingSideNav");
}

function closeSideNav() {
  const sideNav = document.getElementById("sideNav");
  sideNav.classList.remove("isOpen");
  const backgroundClosingSideNav = document.getElementById(
    "backgroundClosingSideNav"
  );
  backgroundClosingSideNav.classList.remove("backgroundClosingSideNav");
}
