class Hetmn extends ChessFigure{
  calculatePossibleMoves(){
    var output=[];
    var mover=new Position(1,1);
    var lastPos=null;
    for(var i=0;i<4;i++){
      while(true){
        if(lastPos==null){
          lastPos=Position.add(
            this.position,
            mover
          );
        }else{
          lastPos=Position.add(
            lastPos,
            mover
          );
        }
        if(Position.checkBorders(lastPos, {maxX:7,minX:0,maxY:7,minY:0})){
          var ocupator=this.board.getFigureByPosition(lastPos);
          if(ocupator==null){
            output.push(lastPos);
          }else{
            if(ocupator.team!=this.team){
              output.push(lastPos);
            }
            break;
          }
        }else{
          break;
        }
      }
      lastPos=null;
      mover.rotateLeft();
    }
    return output;
  }
  get picturePath(){
    return "images/hetmn.png";
  }
  get figureType(){
    return "hetmn";
  }
}
