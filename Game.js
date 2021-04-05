class Game {
    constructor(){}
  
    getState(){
      var GameStateRef  = database.ref('GameState');
      GameStateRef.on("value",function(data){
         GameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        GameState: state
      });
    }
  
    async start(){
      if(GameState === 0){
        player = new Player();
        var PlayerCountRef = await database.ref('PlayerCount').once("value");
        if(PlayerCountRef.exists()){
          PlayerCount = PlayerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      car1 = createSprite(100,200);
      car1.addImage(car1Image);
      car2 = createSprite(300,200);
      car2.addImage(car2Image);
      car3 = createSprite(500,200);
      car3.addImage(car3Image);
      car4 = createSprite(700,200);
      car4.addImage(car4Image);

      cars = [car1,car2,car3,car4]
    }
  
    play(){
      form.hide();
      //textSize(30);
      //text("Game Start", 120, 100)
      Player.getPlayerInfo();
      player.getRank();

      if(allPlayers !== undefined){
        background("brown");
        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
        //var display_position = 130;
        var index = 0;
        var x = 175;
        var y = 0;
        for(var plr in allPlayers){
          index = index+1;
          x = x+200;
          y = displayHeight-allPlayers[plr].distance;
          cars[index-1].x=x;
          cars[index-1].y=y;

          if (index===player.index){
            stroke(10);
            fill("green");
            ellipse(x,y,100,100);
            cars[index-1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          }
            
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=50
        player.update();
      }
      if(player.distance>3750){
        GameState = 2;
        player.rank = player.rank+1;
        player.updateRank(player.rank);
      }
      drawSprites();
    }
    End(){
      console.log("You Won");
      console.log(player.rank);
    }

  }
































