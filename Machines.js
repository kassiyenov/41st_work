var Machine = function(){
  this.enabled = false;
  this.turnOn = function(){
    this.enabled = true;
    console.log("Turned On");
  };
  this.turnOff = function(){
    this.enabled = false;
    console.log("Turned Off");
  };
};

var HomeAppliance = function(){
  Machine.call(this);
  this.plugIn = function(){
    console.log("Plugged In");
  };
  this.plugOff = function(){
    console.log("Plugged Off");
  };
};


var WashingMachine = function() {
  HomeAppliance.call(this);
  this.run = function(){
    console.log("Running");
  };
};

var LightSource = function() {
  HomeAppliance.call(this);
  this.setLevel = function(level){
    console.log(level + " level is set");
  };
};

var AutoVehicle  = function(){
  Machine.call(this);
  this.x = 0;
  this.y = 0;
  this.setPosition = function(Ox, Oy){
    this.x = Ox;
    this.y = Oy;
    console.log("position is " + "(" + Ox + ";" + Oy + ")");
  };
};

var honda = new AutoVehicle();
honda.setPosition(30, 40);
honda.turnOn();

var lightBulb = new LightSource();
lightBulb.plugIn();
lightBulb.setLevel(60);
lightBulb.turnOn();



var bosch = new HomeAppliance();
bosch.plugIn();
bosch.turnOn();
