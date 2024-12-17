class MenuButton{
  constructor(menuHook, title, funct){
    this.html=document.createElement("div");
    this.html.appendChild(document.createElement("div")).innerHTML=title;
    this.html.className="menu-button";
    this.html.addEventListener("click",funct);
    this.menu=menuHook;
    this.menu.html.appendChild(this.html);
  }
}
class MenuControll{
  constructor(id, hook){
    this.id=id;
    this.html=hook;
    this.buttons=[];
  }
  checkId(id){
    return id==this.id;
  }
  hide(){
    CORE.hide(this.html);
  }
  show(){
    CORE.show(this.html);
  }
  addButton(title, funct){
    this.buttons.push(new MenuButton(this, title, funct));
  }
  static goto(id){
    for(var i in MenuControll.contexts){
      MenuControll.contexts[i].hide();
    }
    MenuControll.getContextById(id).show();
  }
  static getContextById(id){
    for(var i in MenuControll.contexts){
      if(MenuControll.contexts[i].checkId(id)){
        return MenuControll.contexts[i];
      }
    }
    return null;
  }
  static addContext(id, hook, screen){
    var tmp=new MenuControll(id, hook)
    MenuControll.contexts.push(tmp);
    return tmp;
  }

}
MenuControll.contexts=[];
