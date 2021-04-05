class Player {

        constructor(){
            this.index = null;
            this.name = null;
            this.distance = 0;
            this.rank = null;

        }

getCount(){
    database.ref("PlayerCount").on("value",(data)=>{
        PlayerCount = data.val()
    })
}

updateCount(Count){
    database.ref("/").update({
        PlayerCount: Count
    })

}

update(){
    var PlayerIndex = "Players/Player"+this.index
    database.ref(PlayerIndex).set({
        name: this.name,
        distance: this.distance
    })
}

static getPlayerInfo(){
    var playerInfoRef = database.ref('Players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

 getRank(){
    database.ref("Rank").on("value",(data)=>{
        this.rank = data.val();
    }
    )
 }

updateRank(rank){
    database.ref("/").set({
        Rank: rank

    })
    
}


}

























