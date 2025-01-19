let h1 = document.getElementById('h1');
function setcolor(color){
    document.body.style.background = color;
    if(color === 'black'){
        h1.style.color = 'white';
    }
    else{
        h1.style.color = 'black';
    }
}
function randomcolor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const rdcolor = `rgb(${red}, ${green}, ${blue})`;
    setcolor(rdcolor);
    
}
