class ChessFigure{
  constructor(board, team, pos=null){
    this.img=document.createElement("img");
    this.inDanger=false;
    this.focused=false;
    this.img.className="figure"
    this.everMoved=false;
    this.img.src=this.picturePath;
    this.team=team;
    this.img.setAttribute("team", this.team);
    this.board=board;
    this.position=new Position(pos);
    var tmpThis=this;
    this.eventListeners=[];
    this.img.addEventListener("click",function(){
      if(tmpThis.board.GAME.TURNS.currentTeam==tmpThis.team){
        tmpThis.focusFigure();
        tmpThis.board.printPossibleMoves(tmpThis);
      }
    });
  }
  addEventListener(label, funct){
    this.eventListeners.push();
  }
  removeEventListeners(label){
    this.eventListeners.filter(function(){});
    for(var i in this.eventListeners){
      if(this.eventListeners[i].label==label){

      }
    }
  }
  activeEventListener(label, ...args){
    //var label=args.shift();
    var promiseArray=[];
    for(var i in this.eventListeners){
      if(this.eventListeners[i].label==label){

      }
    }
  }
  destroyFigure(){
    this.img.parentNode.removeChild(this.img)
  }
  focusFigure(){
    this.board.blurAllFigures();
    this.focused=true;
    this.img.className="figure selected";
  }
  blurFigure(){
    this.focused=false;
    this.img.className="figure";
  }
  get image(){
    this.updatePosition()
    return this.img;
  }
  setPosition(...args){
    this.position.insertData(...args);
    this.updatePosition();
  }
  updatePosition(){
    this.img.setAttribute("position", this.position.getChessField());
  }
  get getPosition(){
    return this.position.getChessField();
  }
  //FIGURE PREPARATION
  get picturePath(){
    return "";
  }
  calculatePossibleMoves(){

  }
  get figureType(){
    return "[NONE]";
  }
}
