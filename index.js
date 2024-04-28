console.log("funguju");


let choosed = document.querySelectorAll(".color-option__box");
const fce = (event) => {
  event.target.classList.toggle("border");
};
choosed.forEach((vybran) => {
  vybran.addEventListener("click", fce);
});
