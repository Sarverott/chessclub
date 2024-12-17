class PossibleMove{
  constructor(pos, figure){
    this.div=document.createElement("div");
    this.div.className="possible-move";
    this.div.setAttribute("position", pos.getChessField());
    this.position=pos;
    this.figure=figure;
    this.board=figure.board;
    var tmpThis=this;
    this.div.addEventListener("click",function(){
      tmpThis.makeMove();
    });
    this.board.container.appendChild(this.div);
    this.div.appendChild(document.createElement("div"));
  }
  makeMove(){
    this.board.makeMove(this.figure, this.position);
  }
  remove(){
    //this.div.removeEventListener("click");
    this.div.parentNode.removeChild(this.div);
  }
}
