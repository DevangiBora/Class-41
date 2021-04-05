var ball;
var database;
var position;
var GameState = 0;
var player, form, game
var PlayerCount=0;
var allPlayers;
var car1, car2, car3, car4, cars;

function preload(){
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");

    trackImage = loadImage("images/track.jpg");
}



function setup(){
    createCanvas(displayWidth-20,displayHeight-30); 
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(PlayerCount===4){
        game.update(1);
    }

    if(GameState===1){
        clear();
        game.play();
    }
    if(GameState===2){
        game.End();
    }
   
}




















