
let slideImg = document.querySelectorAll(".slider img");
let container = document.querySelector(".container");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slider = document.querySelector(".slider");

slideInd = 0;

function nextImg() {

  slideInd = slideInd + 1;
  if (slideInd > (slideImg.length - 1)) {
    slideInd = 0;
  }
  slider.style.transform = `translateX(-${slideInd * 100}%)`;
  console.log(slideInd);

} function prevImg() {
  slideInd--;
  if (slideInd < 0) {
    slideInd = slideImg.length -1;
  }
  slider.style.transform = `translateX(-${slideInd * 100}%)`;

  console.log(slideInd);
  console.log((slideInd * 100));

}


nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);