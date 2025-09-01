// Base
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// Sticker - TODO
const stickerPhotoInupt = document.querySelector("#sticker-photo-input");
const stickerSearch = document.querySelector("#search");
const stickerList = document.querySelectorAll(".sticker");

// Background - TODO
const bgPhotoInput = document.querySelector("#bg-photo-input");
const bgColorInput = document.querySelector("#bg-color-input");
const bgOpcInput = document.querySelector("#bgopc-input");

// background color - FURTHER IMPLEMENTATION
bgColorInput.addEventListener("input", () => {
    ctx.fillStyle = bgColorInput.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

});


// background image
bgPhotoInput.addEventListener("change", () => {
    let img = new Image();
    img.src = URL.createObjectURL(bgPhotoInput.files[0]);
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
});

// set opacity such that it affects the background image 
// NEED TO FIX : OPACITY ACCUMULATES
bgOpcInput.addEventListener("change", () => {
    let opacity = bgOpcInput.value / 100;
    ctx.fillStyle = "white";
    ctx.globalAlpha = opacity;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})

// TEXT : TODO


// finishing touches
const reset = document.querySelector("#new-col");
reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
