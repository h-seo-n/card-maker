import Konva from 'konva.js';

// Base
const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");

// Konv configurations
const stage = new Konva.Stage({
    container: 'container',
    width: canvas.width,
    height: canvas.height,
});


// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

// background
const bgRect = new Konva.Rect({
  x: 0, y: 0,
  width: stage.width(),
  height: stage.height(),
  name: 'bgRect',
  listening: false
});
layer.add(bgRect);
bgRect.moveToBottom();
layer.draw();


// Sticker
const stickerPhotoInupt = document.querySelector("#sticker-photo-input");
const stickerSearch = document.querySelector("#search");
const stickerList = document.querySelectorAll(".sticker");

stickerList.forEach(sticker, () => {
    sticker.addEventListener("click", event => {
        const imageObj = new Image();
        imageObj.onload = () => {
            const sticker = new Konva.Image({
                x: 50,
                y: 50,
                image: imageObj,
                width: 106,
                height: 118
            });
            
            layer.add(sticker);
        };
        imageObj.src = event.currentTarget.src;
    })
})

// Background
const bgPhotoInput = document.querySelector("#bg-photo-input");
const bgColorInput = document.querySelector("#bg-color-input");
const bgOpcInput = document.querySelector("#bgopc-input");


// background color
bgColorInput.addEventListener("input", () => {
    
    bgRect.fill(bgColorInput.value);
    layer.batchDraw();



    // remove old bg if exists
    // layer.find('.bgRect').destroy();
    // layer.draw();

    // const rect = new Konva.Rect({
    //     x: 0,
    //     y: 0,
    //     width: stage.width(),
    //     height: stage.height(),
    //     fill: bgColorInput.value,
    //     name: 'bgRect',
    //     listening: false
    // });
    // layer.add(rect);
    // rect.moveToBottom();
    // layer.draw();
    // ctx.fillStyle = bgColorInput.value;
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
});


// background image
bgPhotoInput.addEventListener("change", () => {
    let backgroundImg = new Image(); 
    backgroundImg.src = URL.createObjectURL(bgPhotoInput.files[0]);
    backgroundImg.onload = () => {
        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    }
});

bgOpcInput.addEventListener("change", () => {
    let opacity = bgOpcInput.value / 100;
    ctx.fillStyle = "white";
    ctx.globalAlpha = opacity;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})






// finishing touches
const reset = document.querySelector("#new-col");
reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
