// Log when hovering over the button
let imageNum = 3;  // define how many images to add
const imageContainerEl = document.querySelector(".image-container");   
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    imageNum = 10
    console.log("Button clicked");
    addNewImage();
});

function addNewImage() {
    for (let i = 0; i < imageNum; i++) {    
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
    newImageEl.alt = "Random Image";
    imageContainerEl.appendChild(newImageEl);
    }
}