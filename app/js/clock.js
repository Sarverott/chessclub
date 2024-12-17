class ChessClock{
  constructor(countdown=false){
    this.zeroTime=0;
    this.time=null;
    this.interval=null;
    this.equalizationNumber=0;
    this.displayHooks={
      hour:null,
      minute:null,
      second:null,
      milisecond:null
    };
    this.listeners={
      onHour:[],
      onCountout:[]
    };
  }
  addEventListener(label, funct){
    switch(label){
      case "hour":
        this.listeners.onHour.push(funct);
      break;
    }
  }
  removeEventListener(label){
    switch(label){
      case "hour":
        this.listeners.onHour=[];
      break;
    }
  }
  setupPrinters(hourId, minuteId, secondId, milisecondId){
    this.displayHooks={
      hour:document.getElementById(hourId),
      minute:document.getElementById(minuteId),
      second:document.getElementById(secondId),
      milisecond:document.getElementById(milisecondId)
    };
  }
  printTime(){
    this.time.full=Date.now()-this.zeroTime+this.equalizationNumber;
    if(this.time.minute>this.time.full/60000%60){
      this.time.hour=this.time.full/3600000;
      this.displayHooks.hour.innerHTML=Math.floor(this.time.hour);
    }
    if(this.time.second>this.time.full/1000%60){
      this.time.minute=this.time.full/60000%60;
      this.displayHooks.minute.innerHTML=fillZeros(Math.floor(this.time.minute),2);
    }
    if(this.time.millisecond>this.time.full%1000){
      this.time.second=this.time.full/1000%60;
      this.displayHooks.second.innerHTML=fillZeros(Math.floor(this.time.second),2);
    }
    this.time.millisecond=this.time.full%1000;
    this.displayHooks.milisecond.innerHTML=fillZeros(Math.floor(this.time.millisecond),3);
  }
  startClock(equalizationNumber=0){
    this.zeroTime=Date.now();
    this.equalizationNumber=equalizationNumber;
    this.time={
      full:0,
      millisecond:0,
      second:0,
      minute:0,
      hour:0
    };
    var tmpThis=this;
    this.interval=setInterval(function(){
      tmpThis.printTime();
    },27);
  }
  stopClock(){
    clearInterval(this.interval);
    var output=this.equalizationNumber;
    this.equalizationNumber=0;
    this.zeroTime=0;
    this.time=null;
    this.interval=null;
    output+=Date.now()-this.zeroTime;
    return output;
  }
  pauseClock(){
    if(this.time!=null){
      clearInterval(this.interval);
      this.equalizationNumber=this.time.full;
    }
  }
  resumeClock(){
    if(this.time!=null){
      this.time={
        full:0,
        millisecond:0,
        second:0,
        minute:0,
        hour:0
      };
      this.zeroTime=Date.now();
      var tmpThis=this;
      this.interval=setInterval(function(){
        tmpThis.printTime();
      },27);
    }else{
      this.startClock();
    }
  }
}