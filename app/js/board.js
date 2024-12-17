class ChessBoard{
  constructor(gamearea, game){
    this.GAME=game;
    gamearea.innerHTML="";
    this.container=gamearea.appendChild(
      document.createElement("div")
    );
    this.session={
      moves:[],
      figure:null
    };
    this.container.className="container";
    this.figures=[];
    for(var index1 in this.figureTypes){
      var tmp=this.figureTypes[index1];
      for(var index2 in this.defaultBlack[index1]){
        this.figures.push(
          new tmp(this, "black", this.defaultBlack[index1][index2])
        );
      }
      for(var index2 in this.defaultWhite[index1]){
        this.figures.push(
          new tmp(this, "white", this.defaultWhite[index1][index2])
        );
      }
    }
    for(var index in this.figures){
      this.container.appendChild(this.figures[index].image);
    }
  }
  makeMove(figure, position){
    for(var i in this.session.moves){
      this.session.moves[i].remove();
    }
    var ocupator=this.getFigureByPosition(position);
    if(ocupator!=null){
      ocupator.destroyFigure();
      this.removeFigure(ocupator);
    }
    this.session.moves=[];
    this.session.figure=null;
    this.blurAllFigures();
    figure.everMoved=true;
    figure.setPosition(position.getChessField());
    this.GAME.TURNS.change();
  }
  removeFigure(figure){
    var output=false;
    for(var i in this.figures){
      if(figure==this.figures[i]){
        this.figures.splice(i, 1);
        output=true;
        break;
      }
    }
    return output;
  }
  getFigureByPosition(pos){
    var output=null;
    for(var i in this.figures){
      if(Position.compare(this.figures[i].position, pos)){
        output=this.figures[i];
        break;
      }
    }
    return output;
  }
  blurAllFigures(){
    for(var i in this.figures){
      this.figures[i].blurFigure();
    }
  }
  printPossibleMoves(figure){
    for(var index in this.session.moves){
      this.session.moves[index].remove();
    }
    this.session.figure=figure;
    this.session.moves=figure.calculatePossibleMoves();
    for(var index in this.session.moves){
      this.session.moves[index]=new PossibleMove(
        this.session.moves[index],
        this.session.figure
      );
    }
  }
  get figureTypes(){
    return {
      "king":King,
      "queen":Queen,
      "hetmn":Hetmn,
      "horse":Horse,
      "tower":Tower,
      "pawn":Pawn
    };
  }
  get defaultBlack(){
    return {
      "king":["E8"],
      "queen":["D8"],
      "hetmn":["C8","F8"],
      "horse":["B8","G8"],
      "tower":["A8","H8"],
      "pawn":["A7","B7","C7","D7","E7","F7","G7","H7"]
    };
  }
  get defaultWhite(){
    return {
      "king":["E1"],
      "queen":["D1"],
      "hetmn":["C1","F1"],
      "horse":["B1","G1"],
      "tower":["A1","H1"],
      "pawn":["A2","B2","C2","D2","E2","F2","G2","H2"]
    };
  }
  checkKingSafety(color=null, kings=[]){
    if(kings.length==0){
      for(var index in this.figures){
        if(color instanceof String&&this.figures[figure].team!=color){
          continue;
        }
        if(this.figures[index] instanceof King){
          kings.push(this.figures[index].position);
        }
      }
    }
    var indangered=[];
    for(var figure in this.figures){
      if(color instanceof String&&this.figures[figure].team==color){
        continue;
      }
      var moves=this.figures[index].calculatePossibleMoves();
      for(var move in moves){
        for(var king in kings){
          if(Position.compare(kings[king].position, moves[move])){
            indangered.push(kings[king]);
          }
        }
      }
    }
    return indangered;
  }
}
