var cat1,cat2,cat3,cat4,garden,mouse1,mouse2,mouse3,mouse4,tom,jerry;
function preload() {
    //load the images here
    cat1=loadImage("cat1.png");
    cat2=loadImage("cat2.png");
    cat3=loadImage("cat3.png");
    cat4=loadImage("cat4.png");
    garden=loadImage("garden.png");
    mouse1=loadImage("mouse1.png");
    mouse2=loadImage("mouse2.png");
    mouse3=loadImage("mouse3.png");
    mouse4=loadImage("mouse4.png");
    
    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     tom=createSprite(200,200,50,50);
     tom.addImage(cat1);
     jerry=createSprite(300,200,80,80);
     jerry.addImage(mouse1);

}

function draw() {

    background(225);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(cat.width-mouse.width)/2)
        {
           


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
tom.addAnimation("mouse teasing",cat3);
tom.changeAnimation("mouseTeasing");
tom.frameDelay=25;

  }
}
  
  
   if(keyDown("space")){
   jerry.velocityY=-5;
    
  }



}
