/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  // Validate that elements exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll(".nav_link");
const menuButton = document.querySelector(".menu");

const closeMenu = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
  menuButton.classList.remove("opened");
};

navLinks.forEach(link => link.addEventListener("click", closeMenu));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const updateActiveLink = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 64; // Adjust for header height
    const sectionId = section.getAttribute("id");

    const link = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", updateActiveLink);

/*==================== CHANGE BACKGROUND HEADER ====================*/
const header = document.getElementById("header");

const updateHeaderBackground = () => {
  if (window.scrollY >= 200) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", updateHeaderBackground);

/*==================== SHOW SCROLL TOP ====================*/
const scrollTopButton = document.getElementById("scroll-top");

const toggleScrollTopButton = () => {
  if (window.scrollY >= 560) {
    scrollTopButton.classList.add("show-scroll");
  } else {
    scrollTopButton.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", toggleScrollTopButton);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkThemeClass = "dark-theme";
const sunIconClass = "bx-sun";

const getCurrentTheme = () =>
  document.body.classList.contains(darkThemeClass) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(sunIconClass) ? "bx-moon" : "bx-sun";

const savedTheme = localStorage.getItem("selected-theme");
const savedIcon = localStorage.getItem("selected-icon");

if (savedTheme) {
  document.body.classList.toggle(darkThemeClass, savedTheme === "dark");
  themeButton.classList.toggle(sunIconClass, savedIcon === "bx-sun");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkThemeClass);
  themeButton.classList.toggle(sunIconClass);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true
});

scrollReveal.reveal(
  `.home_data, .home_img,
   .about_data, .about_img,
   .services_content, .menu_content,
   .app_data, .app_img,
   .contact_data, .contact_button,
   .footer_content`,
  {
    interval: 200
  }
);
