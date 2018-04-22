document.addEventListener('DOMContentLoaded',function(){

    var plansza=document.querySelector('.plansza');
   var time= setInterval(function () {

        var zombie=document.createElement('div');
        zombie.classList.add('zombie');

        var min= 10;
        var max= 360;

        var bottomPos=Math.floor(Math.random()*(max-min+1)+min);


        zombie.style.bottom=bottomPos +'px';

        zombie.style.zIndex=360-bottomPos;




//szybkość poruszania
       var min= 10;
       var max= 20;

       var walkSpeed=Math.floor(Math.random()*(max-min+1)+min);
       var anim='0.5s' + walkSpeed + 's';
        zombie.style.animationDuration= anim;
//skala

       var scale= 0.8 +Math.random()*0.5;
       zombie.style.transform= 'scale('+scale+')';

//blur
       if(bottomPos>200){
           zombie.style.filter = 'blur(3px)'
       }else if(bottomPos > 100) {
           zombie.style.filter = 'blur(2px)'
       }else{

       }

        zombie.life=2;

       plansza.appendChild(zombie);

        zombie.addEventListener('animationend',function (e) {

            if (e.animationName === 'zombieWalk'){
                this.remove();
            }
        })

    },1200);


   plansza.addEventListener('click',function (e) {
        if (e.target.classList.contains('zombie')){
            e.target.life--;
            console.log('ddd');

            if (e.target.life <=0){
                e.target.remove();

            }
        }
    });


});