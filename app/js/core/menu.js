const MENU={
  MAIN:null,
  SERVERS:null,
  OPTIONS:null,
  init:function(){
    MENU.MAIN=MenuControll.addContext("main", document.getElementById("main-menu"));
    MENU.SERVERS=MenuControll.addContext("servers", document.getElementById("game-servers"));
    MENU.OPTIONS=MenuControll.addContext("options", document.getElementById("options"));
    MENU.mainMenu();
    MenuControll.goto("main");
    setTimeout(function(){
      loadingScreen("hide");
    },1500);
  },
  mainMenu:function(){
    MENU.MAIN.addButton("Game", CORE.openGame);
    MENU.MAIN.addButton("Option", CORE.openGame);
    MENU.MAIN.addButton("More", CORE.gotoWebsite);
    MENU.MAIN.addButton("Exit", CORE.exit);
  },
  showServers:function(){

  }
}
