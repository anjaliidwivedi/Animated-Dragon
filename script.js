score=0;
cross=true;

audio=new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
},1000);
document.onkeydown=function(e){
    console.log("Key code is: ",e.code)
    if(e.code=='ArrowUp')
    {
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        },700);
    }
    else if(e.code=='ArrowRight')
    {
        dino=document.querySelector('.dino');
        dinoX= parseInt (window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+112+"px";
    }
    else if(e.code=='ArrowLeft')
    {
        dino=document.querySelector('.dino');
        dinoX= parseInt (window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX-112+"px";
    }
}

setInterval(() => {
    dino=document.querySelector('.dino');
    gameOver=document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt (window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt (window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt (window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt (window.getComputedStyle(obstacle,null).getPropertyValue('left'));

    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);
    console.log(offsetX,offsetY);
    
    if(offsetX<73 && offsetY<52)
    {
        gameOver.innerHTML = "Game Over - Reload to play again";
        obstacle.classList.remove('obstacleAni')
        audiogo.paly();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 100);
    }
    else if(offsetX< 145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=> {
            cross=true;
        },1000);
        setTimeout(() => {
            aniDur=parseFloat (window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur= aniDur - 0.8;
            obstacle.style.animationDuration= newDur + 's';
        },500);
       
    }
    
}, 10);
function updateScore(score){
    scoreCont.innerHTML ="Your Score" + score
}