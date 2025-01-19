const websiteUrl = "https://pixi-elegance.netlify.app/";

const mainPage = document.getElementById("main");
const promotionPage = document.getElementById("promotion");
const ascendPage = document.getElementById("ascend");

const allPages = [mainPage, promotionPage, ascendPage];

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
