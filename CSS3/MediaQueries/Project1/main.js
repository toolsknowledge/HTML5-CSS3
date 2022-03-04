window.onresize = screen;
window.onload = screen;
function screen(){
    screenWidth = window.innerWidth;
    document.getElementById("size").innerHTML = "Width..."+screenWidth+" px";
}