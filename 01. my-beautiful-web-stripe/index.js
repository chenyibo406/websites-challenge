const menuIcon = document.querySelector(".bxs-plus-circle");
const navbar = document.querySelector(".nav-container nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  navbar.classList.toggle("open");
  console.log("hello");
});
