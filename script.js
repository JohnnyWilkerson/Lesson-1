function screen(){
    width=window.innerWidth;
    document.getElementById("size").innerHTML=width;
}

window.onload=screen;
window.onresize=screen;