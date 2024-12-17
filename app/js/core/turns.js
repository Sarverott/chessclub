GAME.TURNS={
  currentTeam:"white",
  counter:0,
  change:function changeTurn(){
    GAME.TURNS.counter++;
    if(GAME.TURNS.team==GAME.myColor){
      document.getElementById("gameboard").setAttribute("turn", "your");
    }else{
      document.getElementById("gameboard").setAttribute("turn", "mine");
    }
    GAME.TURNS.currentTeam=(GAME.TURNS.currentTeam=="white")?GAME.TURNS.currentTeam="black":GAME.TURNS.currentTeam="white";
    GAME.CLOCKS.change();
  },
};
