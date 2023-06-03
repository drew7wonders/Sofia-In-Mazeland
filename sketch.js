var maze1,maze2,maze3,maze4,maze5,maze6,maze7;
var maze8,maze9,maze10,maze11,maze12,maze13,maze14;
var maze15,maze16,maze17,maze18,maze19,maze20, maze21, maze22;
var trophy,sofia;
var trophyIMG,sofiaAnim;
var boundary,boundary2,boundary3,boundary4, left, right, Up, Down;
var leftIMG, RightIMG, UpIMG, DownIMG, youwinIMG,BridIMG,TreeIMG;
var gameState = 0;
var Bird, TreeWon, youWonback;
var restart, restartIMG;
function preload(){
    sofiaAnim = loadAnimation("assets/bird1.png","assets/bird2.png","assets/brd3.png");
    trophyIMG =loadImage("assets/tree-removebg-preview.png_2.png");
    leftIMG = loadImage("assets/left.png");
    RightIMG = loadImage("assets/Right.png");
    UpIMG = loadImage("assets/up.png");
    DownIMG = loadImage("assets/down.png");
     youwinIMG = loadImage("assets/youwin.png");
     restartIMG = loadImage("assets/R.png");
     TreeIMG = loadImage("assets/wontree.png");

}

function setup(){
createCanvas(400, 600);


    //mazes
    maze1 = createSprite(72, 0, 10, 100);
    maze2 = createSprite(0, 72, 100,10);
    maze3 = createSprite(118, 0, 10, 210);
    maze4 = createSprite(77, 110, 95, 10);
    maze5 = createSprite(0, 145,400,10);
    maze6 = createSprite(159, 0, 10, 210);
    maze7 = createSprite(249, 110, 190,10);
    maze8 = createSprite(295, 145,100,10 );
    maze9 = createSprite(200, 200,10,100);
    maze10 = createSprite(125, 256,160,10 );
    maze11 = createSprite(250, 200,10,100);
    maze12 = createSprite(305, 250,118,10);
    maze13 = createSprite(347, 0,10,100);
    maze14 = createSprite(279, 50,142,10);
    maze15= createSprite(250, 254,10,80);
    maze16 = createSprite(155, 294,200,10);
    //maze17= createSprite(50, 345,12,112);
    maze18 = createSprite(50,215 ,10,75);
    maze19 = createSprite(355, 370,10,74);
    maze20 = createSprite(350, 179,10,77);
    maze21 = createSprite(224, 338,257,11);
    maze22 = createSprite(359, 271,10,40);

    //trophy
    trophy = createSprite(300, 380,50,50);
    trophy.addAnimation("Tree", trophyIMG);
    trophy.scale = 0.3;

    //sofia
    sofia = createSprite(10, 10,11,11);
    sofia.addAnimation("flying Sofia", sofiaAnim);
    sofia.scale = 0.05;

    //Boundary
    boundary = createSprite(200,410,1000,5);
    boundary2 = createSprite(200,0,1000,5);
    boundary3 = createSprite(0,200,5,1000);
    boundary4 = createSprite(400,200,5,1000);

    //Controller
    Up = createSprite(190, 455, 10, 10);
    Up.addAnimation("up", UpIMG);
    Up.scale = 0.2;

    Down = createSprite(190, 555, 10,10);
    Down.addAnimation("down", DownIMG);
    Down.scale = 0.2;

    left = createSprite(100, 505, 10,10);
    left.addAnimation("left", leftIMG);
    left.scale = 0.2;

    right = createSprite(280, 505, 10,10);
    right.addAnimation("right", RightIMG);
    right.scale = 0.2;

    //restart

   

}
//Sofia
function createShofia(){
    sofia = createSprite(10, 10,11,11);
    sofia.addAnimation("flying Sofia", sofiaAnim);
    sofia.scale = 0.05;
    }

  

function draw(){
    background(rgb(223,223,180));
    
    drawSprites();
    sofia.bounceOff(boundary);
    sofia.bounceOff(boundary2);
    sofia.bounceOff(boundary3);
    sofia.bounceOff(boundary4);
//colliders
//Up.debug = true;
Up.setCollider("rectangle", 13, -30,230, 280);

//left.debug = true;
left.setCollider("rectangle",-30,-13,300,260);

//right.debug = true;
right.setCollider("rectangle",30,-13,300,260);

// Down.debug = true;
Down.setCollider("rectangle", 13, 35,230, 290);

//Controls
    if (keyDown("up") || mousePressedOver(Up)) {
        sofia.velocityX = 0
          sofia.velocityY = -1
        }

    if (keyDown(DOWN_ARROW) || mousePressedOver(Down)) {
            sofia.velocityX = 0
            sofia.velocityY = 1
        }

//     if (World.mouseX == Down.x) {
//             sofia.velocityX = 0
//             sofia.velocityY = 1
//         }

    if (keyDown("left") || mousePressedOver(left)) {
            sofia.velocityX = -1
            sofiavelocityY = 0
        }
        
    if (keyDown("right") || mousePressedOver(right)) {
            sofia.velocityX = 1 
            sofia.velocityY = 0
        }

    if (mousePressedOver(restart) && gameState ==1){
            console.log("GM");
            gameState =0;
            setup();
            youWonback.destroy();
            Bird.destroy();
            TreeWon.destroy();
          draw();
    }    
    if(gameState == 0){
//BounceOFF
if (maze1.displace(sofia)) {
    sofia.destroy();
    createShofia();
    }

if (maze2.displace(sofia)) {
        sofia.destroy();
        createShofia();
    }
if (maze3.displace(sofia)) {
    sofia.destroy();
    createShofia();
    }
if (maze4.displace(sofia)) {
        sofia.destroy();
        createShofia();
    }
    
if (maze5.displace(sofia)) {
            sofia.destroy();
            createShofia();
    }

if (maze6.displace(sofia)) {
        sofia.destroy();
        createShofia();
    }
    
if (maze7.displace(sofia)) {
            sofia.destroy();
            createShofia();
    }
    
if (maze8.displace(sofia)) {
            sofia.destroy();
            createShofia();
    }
        
if (maze9.displace(sofia)) {
                sofia.destroy();
                createShofia();
    }
if (maze10.displace(sofia)) {
        sofia.destroy();
        createShofia();
    }
    
if (maze11.displace(sofia)) {
            sofia.destroy();
            createShofia();
    }
if (maze13.displace(sofia)) {
        sofia.destroy();
        createShofia();
    }
if (maze14.displace(sofia)) {
            sofia.destroy();
            createShofia();
    }
        
if (maze15.displace(sofia)) {
                sofia.destroy();
                createShofia();
    }
    
if (maze16.displace(sofia)) {
           sofia.destroy();
            createShofia();
    }
        
if (maze20.displace(sofia)) {
           sofia.destroy();
            createShofia();
    }
        
if (maze18.displace(sofia)) {
    sofia.destroy();
    createShofia();
    }
            
if (maze19.displace(sofia)) {
    sofia.destroy();
    createShofia();
    }
            
if (maze22.displace(sofia)) {
        sofia.destroy();
        createShofia();
    }
            
if (maze21.displace(sofia)) {
    sofia.destroy();
    createShofia();
    }
}

if (trophy.displace(sofia)) { 
    gameState = 1;
    sofia.destroy();
    //trophy.destroy();
        if(gameState == 1){
            youWonback = createSprite(200,205,400,410);
            youWonback.shapeColor = "white"

            TreeWon = createSprite(200, 250, 20, 20);
            TreeWon.addAnimation("wontree", TreeIMG);
            TreeWon.scale = 1.5;

            Bird = createSprite(200,230, 50,50);
            Bird.addAnimation("youwin", youwinIMG);
            Bird.scale = 0.5
        restart = createSprite(40, 450, 50, 50);
        restart.addAnimation("Restrat",restartIMG);
        restart.scale = 0.04
        //restart.debug = true;
        restart.setCollider("circle",5,10,650);
        }

}
// if (boundary.displace(sofia)) {
//         sofia.destroy();
//         createShofia();

//     }    

console.log(gameState)    
}
