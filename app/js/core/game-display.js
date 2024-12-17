GAME.DISPLAY={
  createBoardSigns:function(upsideDown=false){
    var boardBorders={
      vertical:[
        document.querySelector(".board-signs-column[chess-east]"),
        document.querySelector(".board-signs-column[chess-west]")
      ],
      horizontal:[
        document.querySelector(".board-signs-column[chess-north]"),
        document.querySelector(".board-signs-column[chess-south]")
      ],
    };
    if(
      boardBorders.vertical.includes(null)
      ||
      boardBorders.horizontal.includes(null)
    ){
      errorHandle("BOARD_BORDER_COUNT_ERROR");
    }else{
      for(var i=0;i<16;i++){
        GAME.DISPLAY.mountBoardSign(
          boardBorders.vertical[i%2],
          8-Math.floor(i/2),
          "vertical"
        );
        GAME.DISPLAY.mountBoardSign(
          boardBorders.horizontal[i%2],
          String.fromCharCode(Math.floor(65+i/2)),
          "horizontal"
        );
      }
    }
  },
  mountBoardSign:function(mountPoint, content, mode){
    var boardSign=mountPoint.appendChild(
      document.createElement("div")
    );
    boardSign.className="board-sign "+mode;
    boardSign=boardSign.appendChild(document.createElement("div"))
    boardSign=boardSign.appendChild(document.createElement("p"));
    // if(mode=="vertical"){
    //   boardSign=boardSign.appendChild(document.createElement("p"));
    // }
    boardSign.innerHTML=content;
  },
  createBoard:function(upsideDown=false){
    var board=document.getElementById("gametable");
    board.innerHTML="";
    for(var i=0;i<8;i++){
      var row=document.createElement("div");
      row.className="chess-row";
      for(var j=0;j<8;j++){
        var field=document.createElement("div");
        field.className="chess-field";
        field.id=String.fromCharCode(Math.floor(65+i))+(j+1);
        row.appendChild(field);
      }
      board.appendChild(row);
    }
  },
};
