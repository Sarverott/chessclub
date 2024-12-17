class ChessServer{
  constructor(name, hash){
    this.players=[];
    this.name=name;
    this.hash=hash;
  }
  addPlayer(){
    this.players.push(new ChessGame());
  }
}
class ChessGame{
  constructor(){

  }
}
const CONFIG={
  servers:[],

}
