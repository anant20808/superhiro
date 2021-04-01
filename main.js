var canvas=new fabric.Canvas("myCanvas");

blockwidth=30;
blockheight=30;

xofplayer=10;
yofplayer=10;

var objectofplayer="";
var objectofblock="";

function updateplayer(){

 fabric.Image.fromURL("player.png",function(IMG){

     objectofplayer = IMG;
    objectofplayer.scaleToWidth(150);
    objectofplayer.scaleToHeight(140);
    objectofplayer.set({

              top:yofplayer,
              left:xofplayer});


 

        canvas.add(objectofplayer);});

}

function newimage(get_image){

 fabric.Image.fromURL(get_image,function(IMG){
   
    objectofblock=IMG;

    objectofblock.scaleToWidth(blockwidth);
    objectofblock.scaleToHeight(blockheight);
    objectofblock.set({

 top:yofplayer,
 left:xofplayer});

 canvas.add(objectofblock);});


 }

 window.addEventListener("Keydown".my_Keydown);

 function my_Keydown(e){
   keypress=e.keyCode;
 
   if(e.shiftKey == true && keypress == '80'){


       blockwidth = blockwidth+10;
       blockheight = blockheight+10;
       document.getElementById("crwidth").innerHTML=blockwidth;
       document.getElementById("crheight").innerHTML=blockheight;

   }
   if(e.shiftKey == true && keypress == '77'){


    blockwidth = blockwidth-10;
    blockheight = blockheight-10;
    document.getElementById("crwidth").innerHTML=blockwidth;
    document.getElementById("crheight").innerHTML=blockheight;

}
if(keypress == '38'){

 up();
}

if(keypress == '40'){

 down();
}
if(keypress == '37'){

 left();
}
if(keypress == '39'){

 right();
}

if(keypress == '70'){

 newimage("ironman_face.png");
}
if(keypress == '66'){

 newimage("spiderman_body.png");
}
if(keypress == '76'){
 ;
 newimage("hulk_legs.png");

}
if(keypress == '82'){

 newimage("thor_right_hand.png");
}
if(keypress == '72'){

 newimage("captain_america_left_hand.png");
}
 }
 function up(){
    if(yofplayer >= 0){
    yofplayer = yofplayer - blockheight;
    canvas.remove(objectofplayer);
    updateplayer();
    }
  }
 
  function down(){
    if(yofplayer <= 600){
  yofplayer = yofplayer + blockheight;
   canvas.remove(objectofplayer);
   updateplayer();
    }
 }
 
 function left(){
   if(xofplayer >= 0){
   xofplayer = xofplayer - blockwidth;
   canvas.remove(objectofplayer);
   updateplayer();
   }
 }
 
 function right(){
   if(xofplayer <=800){
   xofplayer = xofplayer + blockwidth;
   canvas.remove(objectofplayer);
   updateplayer();
   }
 }

