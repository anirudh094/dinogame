window.onkeydown = function (e) {
    if(e.keyCode==32){
        startgame();
    }
}
function startgame(){
    window.open("start.html", "_self");
}