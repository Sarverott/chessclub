class Pawn extends ChessFigure{
  calculatePossibleMoves(){
    var output=[];
    var move=null;
    if(this.team=="black"){
      move=new Position(0,-1);
    }else{
      move=new Position(0,1);
    }
    var tmp=Position.add(move, this.position);
    if(Position.checkBorders(tmp, {maxX:7,minX:0,maxY:7,minY:0})){
      var ocupator=this.board.getFigureByPosition(tmp);
      if(ocupator==null){
        output.push(tmp);
      }
    }
    if(!this.everMoved&&output.length==1){
      if(this.team=="black"){
        move=new Position(0,-2);
      }else{
        move=new Position(0,2);
      }
      tmp=Position.add(move, this.position);
      if(Position.checkBorders(tmp, {maxX:7,minX:0,maxY:7,minY:0})){
        var ocupator=this.board.getFigureByPosition(tmp);
        if(ocupator==null){
          output.push(tmp);
        }
      }
    }
    if(this.team=="black"){
      move=new Position(-1,-1);
    }else{
      move=new Position(1,1);
    }
    for(var i=0;i<2;i++){
      tmp=Position.add(move, this.position);
      if(Position.checkBorders(tmp, {maxX:7,minX:0,maxY:7,minY:0})){
        var ocupator=this.board.getFigureByPosition(tmp);
        if(ocupator!=null&&ocupator.team!=this.team){
          output.push(tmp);
        }
      }
      move.rotateLeft();
    }
    return output;
  }
  get picturePath(){
    return "images/pawn.png";
  }
  get figureType(){
    return "pawn";
  }

}
