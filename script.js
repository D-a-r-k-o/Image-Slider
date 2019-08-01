const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");
const car = document.querySelector("#carName");
const currentPhoto = document.querySelector("#currentPic");
const totalPhotos = document.querySelector("#totalPics");
const slidePhoto = document.querySelector("#slidePic");

const photoArray = ["R8_spyder.jpg", "Audi_A5_coupe.jpg", "Audi_A6_3.0_TFSI_quattro.jpg", "Audi_A3_sedan.jpg", "Audi_Q8.jpg", "Audi_RS4_avant.jpg", "Audi_RS5.jpg", "Audi_RS5_rear_view.jpg"];

let size = photoArray.length;
let i = 0;
let k, c, end_index;
let cleanedString;



totalPhotos.textContent = String(size);

  function cleanFilename(index) {    
  // this function removes underscores and extensions, and puts space in underscore's place
  cleanedString = "";
  k = photoArray[i].length - 1;
  while(photoArray[index][k] !== ".") {
     k--;
     }
  end_index = k - 1;
  for(c = 0; c <= end_index; c++) {
    if(photoArray[index][c] === "_") {
        cleanedString = cleanedString + " ";
     } else {
        cleanedString = cleanedString + photoArray[index][c]; 
     } 
  }
return cleanedString;
}  

function prevSlide() {
    // if we are currently on the first image and want to go back
    if(i === 0) {
        i = size - 1;    
    } else {
    i--;
    }
    // setting border text
    car.textContent = cleanFilename(i);
    currentPhoto.textContent = String(i+1);

    // setting the image
    slidePhoto.setAttribute("src", `img/${photoArray[i]}`);
}

function nextSlide() {
    // if we are currently on the last image and want to go further
    if(i === size - 1) {
        i = 0;    
    } else {
        i++;
    }
    // setting border text
    car.textContent = cleanFilename(i);
    currentPhoto.textContent = String(i+1);

    // setting the image
    slidePhoto.setAttribute("src", `img/${photoArray[i]}`);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);