let icon = document.querySelector(".nav-mobile");
let nav = document.querySelector(".links");
// let items = document.querySelector(.nav-mobile);


icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  if (nav.style.display === "block") {
   nav.style.display = "none";
   // items.style.display = "block";

 } else {
   nav.style.display = "block";
   // items.style.display = "none";
 }
});
