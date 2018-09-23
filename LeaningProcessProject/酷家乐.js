function ofo(){}

function Bike(){
    this.useTime=0;
}

var myofo=new ofo();
ofo.prototype = new Bike();
var youngofo=new Bike();

Bike();