class Horse extends ChessFigure{
  calculatePossibleMoves(){
    var output=[];
    var clacs=[
      new Position(-1, 2),
      new Position(1, 2)
    ];
    for(var i=0;i<8;i++){
      var tmp=Position.add(clacs[i%2], this.position);
      if(Position.checkBorders(tmp, {maxX:7,minX:0,maxY:7,minY:0})){
        var ocupator=this.board.getFigureByPosition(tmp);
        if(ocupator==null||ocupator.team!=this.team){
          output.push(tmp);
        }
      }
      clacs[i%2].rotateLeft();
    }
    return output;
  }
  get picturePath(){
    return "images/horse.png";
  }
  get figureType(){
    return "horse";
  }
}
