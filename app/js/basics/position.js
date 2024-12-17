class Position{
  constructor(...args){
    if(!this.insertData(...args)){
      this.setTotalZero();
    }
  }
  insertData(...args){
    if(args.length==0){
      return false;
    }else if(
      args.length==1
      &&
      typeof(args[0])=="string"
      &&
      args[0].length==2
    ){
      this.setCoordinates(
        args[0].charCodeAt(0)-65,
        args[0].charCodeAt(1)-49
      );
      return true;
    }else if(
      args.length==2
      &&
      typeof(args[0])=="number"
      &&
      typeof(args[1])=="number"
    ){
      this.setCoordinates(args[0],args[1]);
      return true;
    }else{
      return false;
    }
  }
  getChessField(){
    return String.fromCharCode(this.x+65, this.y+49);
  }
  setTotalZero(){
    this.setCoordinates(0,0);
  }
  setCoordinates(x,y){
    this.x=x;
    this.y=y;
  }
  rotateLeft(){
    var tmp=this.x;
    this.x=-this.y;
    this.y=tmp;
  }
  rotateRight(){
    var tmp=this.x;
    this.x=this.y;
    this.y=-tmp;
  }
  static checkBorders(pos,borders){
    return (
      pos.x>=borders.minX
      &&
      pos.y>=borders.minY
      &&
      pos.y<=borders.maxY
      &&
      pos.x<=borders.maxX
    );
  }
  static add(firstPos, secondPos){
    return new Position(firstPos.x+secondPos.x, firstPos.y+secondPos.y);
  }
  static compare(firstPos, secondPos){
    return Position.compareX(firstPos, secondPos)==0&&Position.compareY(firstPos, secondPos)==0;
  }
  static compareX(firstPos, secondPos){
    var output=0;
    if(firstPos.x>secondPos.x){
      output=1;
    }else if(firstPos.x<secondPos.x){
      output=-1;
    }
    return output;
  }
  static compareY(firstPos, secondPos){
    var output=0;
    if(firstPos.y>secondPos.y){
      output=1;
    }else if(firstPos.y<secondPos.y){
      output=-1;
    }
    return output;
  }
  static isZeroPos(pos){
    return pos.x==0&&pos.y==0;
  }
}
