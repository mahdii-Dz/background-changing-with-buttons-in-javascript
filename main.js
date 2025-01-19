
function setcolor(color){
    document.body.style.background = color;
}
function randomcolor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const rdcolor = `rgba(${red}, ${green}, ${blue})`;
    setcolor(rdcolor);
}
