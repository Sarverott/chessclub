const GAME={
  CLOCKS:null,
  TURNS:null,
  GAMEAREA:null,
  DISPLAY:null,
  myColor:"white",
  load:function(){
    
  },
  showDialog:function(text){
    document.getElementById("info-dialog").removeAttribute("show");
    document.getElementById("info-dialog").innerHTML="";
    document.getElementById("info-dialog").appendChild(
      document.createElement("h1")
    ).innerHTML=text;
    setTimeout(function(){document.getElementById("info-dialog").setAttribute("show", "")},100);
  },
  start:function startGame(){
    GAME.DISPLAY.createBoardSigns();
    GAME.DISPLAY.createBoard();
    GAME.GAMEAREA=new ChessBoard(document.getElementById("gamearea"), GAME);
    GAME.CLOCKS.start();
  },
  init:function init(){

  }
};
