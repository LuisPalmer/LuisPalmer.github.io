var balls = jQuery('.balls img');
var bola1 = jQuery('.bola-ba1');
var bola2 = jQuery('.bola-ba2');
var bola3 = jQuery('.bola-ba3');
var bola4 = jQuery('.bola-ba4');
var bola5 = jQuery('.bola-ba5');
var bola6 = jQuery('.bola-ba6');
var bola7 = jQuery('.bola-ba7');



function var1(){
    balls.css("animation-name","light1");
}
function var2(){
    balls.css("animation-name","light2");
    var velocilocal = 0.5;
    
    for (var i= 0; i < balls.length; i++ ){
        balls[i].style.animationDelay = velocilocal + "s";
        velocilocal = velocilocal + 0.5
    }
}
function var3(){
    balls.css ("animation-name","light3");
    var velocilocal = 0.25
    for (var i= 0; i < balls.length; i++ ){
        balls[i].style.animationDelay = velocilocal + "s";
        velocilocal = velocilocal + 0.5
    }
}

function var4(){
  balls.css("animation-name","light5");
  var velocilocal = 0.8
  for (var i= 0; i < balls.length; i++ ){
      balls[i].style.animationDelay = velocilocal + "s";
      velocilocal = velocilocal + 0.5
  }
}

function var5(){
  balls.css("animation-name","light6");
  var velocilocal = 0.2
  for (var i= 0; i < balls.length; i++ ){
      balls[i].style.animationDelay = velocilocal + "s";
      velocilocal = velocilocal + 0.5
  }
}


function var6(){
  balls.css("animation-name","light7");
  var velocilocal = 0.4
  for (var i= 0; i < balls.length; i++ ){
      balls[i].style.animationDelay = velocilocal + "s";
      velocilocal = velocilocal + 0.5
  }
}


function var7(){
  balls.css("animation-name","light8");
  var velocilocal = 0.1
  for (var i= 0; i < balls.length; i++ ){
      balls[i].style.animationDelay = velocilocal + "s";
      velocilocal = velocilocal + 0.5
  }
}



bola1.click( function() {
  balls.css({"animation-duration": 1 + "s", "animation-name": "light1"})
  
})
bola3.click( function() {
  var2();
  
})
bola2.click( function() {
  var3();

})

bola4.click( function() {
  var4();

})

bola5.click( function() {
  var5();

})

bola6.click( function() {
  var6();

})


bola7.click( function() {
  var7();

})



