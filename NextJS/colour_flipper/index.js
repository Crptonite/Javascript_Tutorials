const body = document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

function RandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const yellow = Math.floor(Math.random() * 256);
    const orange = Math.floor(Math.random() * 256);

    const color = `rgb(${red}, ${green}, ${blue}),${yellow}, ${random}, ${orange})`;
    body.style.backgroundColor = color;
}

randomColor()


