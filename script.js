score =0;
cross=true;
arrow=true;
//audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
audiojump = new Audio('jump.mp3');

/*
audio.play()
setTimeout(() => {
    audio.play()
}, 1000);
*/

function jump_button(){
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
        dino.classList.remove('animateDino')
    }, 700);
}
function left_button(){
    dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112)+ "px";
        dino.style.transform = "scaleX(-1)";
}
function right_button(){
    dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112+ "px";
        dino.style.transform = "scaleX(1)";
}

document.onkeydown=function(e){
    //console.log("Key Code is : ",e.keyCode)
    jumpbutton=document.querySelector('.jumpbutton');
    rightbutton=document.querySelector('.rightbutton');
    leftbutton=document.querySelector('.leftbutton');
    if((e.keyCode==38) && arrow){
        jump_button();
        jumpbutton.style.background="gray";
    }
    if((e.keyCode==39) && arrow){
        right_button();
        rightbutton.style.background="gray";
    }
    if((e.keyCode==37 ) && arrow){
        left_button();
        leftbutton.style.background="gray";
    }
    if(e.keyCode==32){
        window.location.reload();
    }
}
document.onkeyup=function(e){
    jumpbutton=document.querySelector('.jumpbutton');
    rightbutton=document.querySelector('.rightbutton');
    leftbutton=document.querySelector('.leftbutton');
    if((e.keyCode==38) && arrow){
        jumpbutton.style.background="white";
    }
    if((e.keyCode==39) && arrow){
        rightbutton.style.background="white";
    }
    if((e.keyCode==37 ) && arrow){
        leftbutton.style.background="white";
    }
}
setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    restart_button = document.querySelector('.restart_button');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = dx-ox;
    offsetY = Math.abs(dy-oy);

    //console.log(offsetX,offsetY);

    if(offsetX>-150 && offsetX<90 && offsetY<100){
        restart_button.style.visibility="visible";
        gameOver.style.display="block";
        gameOver.style.top="40px";
        gameOver.innerHTML='Game Over';
        obstacle.classList.remove('obstacleAni');
        obstacle.style.left = dino.style.left ;
        arrow=false;
        /*
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            //audio.pause();
        }, 1000);
        */
    }
    else if(offsetX >100 && cross){
        score+=10;
        updateScore(score);
        audiojump.play();
        cross=false;
        setTimeout(() => {
            cross = true;
        },1000);
        
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 200);

function updateScore(score){
    scoreCont.innerHTML = "Your Score : " + score;
}
