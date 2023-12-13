const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
hamburger?.addEventListener("click", () => {
  hamburger?.classList.toggle("active");
  navMenu?.classList.toggle("active");

  console.log("jkbgvk");
});

document.querySelectorAll(".navLink").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    navMenu?.classList.remove("active");
  })
);
