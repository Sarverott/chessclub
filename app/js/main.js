const CORE={
  screens:{
    menu:null,
    chat:null,
    game:null
  },
  init:function(){
    CORE.screens={
      menu:document.getElementById("menu-screen"),
      chat:document.getElementById("chat-screen"),
      game:document.getElementById("game-screen")
    };
    MENU.init();
    GAME.start();
    CORE.openMenu();
  },
  hide:function(item){
    item.removeAttribute("show");
    item.setAttribute("hide", "");
  },
  show:function(item){
    item.removeAttribute("hide");
    item.setAttribute("show", "");
  },
  closeAll:function(){
    for(var i in CORE.screens){
      CORE.hide(CORE.screens[i]);
    }
  },
  exit:function(){
    CORE.closeAll();
    window.open('','_self').close();
  },
  gotoWebsite:function(){
    window.open('http://sarverott.com/','_blank');
  },
  openMenu:function(){
    CORE.closeAll();
    CORE.show(CORE.screens.menu);
  },
  openGame:function(){
    CORE.closeAll();
    CORE.show(CORE.screens.game);
  },
  openChat:function(){
    CORE.closeAll();
    CORE.show(CORE.screens.chat);
  }
}
window.onload=CORE.init;
