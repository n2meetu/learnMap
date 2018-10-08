function ofo() { }

function Bike() {
    this.useTime = 0;
}

var myofo = new ofo();

ofo.prototype = new Bike();


var youngofo = new Bike();

Bike();

console.log(myofo.useTime);  // undefined
console.log(youngofo.useTime);  // 0

var newBike = new Bike();
res = ofo.prototype === Bike;
console.log(res);
console.log(ofo.prototype);