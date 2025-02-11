const websiteUrl = "https://pixi-elegance.netlify.app/";

const mainPage = document.getElementById("main");
const promotionPage = document.getElementById("promotion");
const ascendPage = document.getElementById("ascend");
const accordionPage = document.getElementById("accordion");
const cardsPage = document.getElementById("cards");
const navBarPage = document.getElementById("bar");
const carouselPage = document.getElementById("carousel");
const chartsPage = document.getElementById("charts");

const allPages = [
  mainPage,
  promotionPage,
  ascendPage,
  accordionPage,
  cardsPage,
  navBarPage,
  carouselPage,
  chartsPage,
];

const featuresBtn = document.querySelectorAll(".main__features--btn");
const goToPromotionBtn = document.querySelectorAll(".promotion__goto");
const goToHome = document.querySelector(".promotion__back");

const loadPage = function (target) {
  const targetPage = document.getElementById(target);
  console.log(`Loading page: ${target}`, targetPage);
  if (targetPage) {
    targetPage.classList.remove("hide--display"); // Show the target page
  } else {
    console.error(`Element with ID ${target} does not exist.`);
  }
};

// Hide all pages first, then show the selected page
featuresBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.closest(".main__features--btn").dataset.name;

    if (target) {
      allPages.forEach((page) => page.classList.add("hide--display")); // Hide all pages
      loadPage(target); // Show the selected page
    }
  })
);

// Handle the promotion page navigation
goToPromotionBtn.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    allPages.forEach((page) => page.classList.add("hide--display")); // Hide all pages
    promotionPage.classList.remove("hide--display"); // Show promotion page
  })
);

// Handle the back button from promotion page to main page
goToHome.addEventListener("click", (e) => {
  e.preventDefault();
  allPages.forEach((page) => page.classList.add("hide--display")); // Hide all pages
  mainPage.classList.remove("hide--display"); // Show main page
});

// Logo
document.getElementById("logo").addEventListener("click", function () {
  window.open(websiteUrl);
});

// NavBar
// Select all nav links
const navBarLinks = document.querySelectorAll(".navbar-nav .nav-link");

// Select the navbar collapse element
const navbarCollapse = document.getElementById("navbarNavAltMarkup");

navBarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Check if the navbar is expanded (visible)
    const isExpanded = navbarCollapse.classList.contains("show");
    if (isExpanded) {
      // Collapse the navbar
      const navbarToggler = document.querySelector(".navbar-toggler");
      navbarToggler.click();
    }
  });
});

// Charts
const ctx = document.getElementById("weddingChart").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Bridal Makeup", "Venue Booking", "Catering Services"],
    datasets: [
      {
        label: "Booking Percentage",
        data: [40, 35, 25],
        backgroundColor: ["#0d6efd", "#198754", "#dc3545"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  },
});
