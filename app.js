var Bike = /** @class */ (function () {
    function Bike() {
        this.Drive = "Automatic";
        this.Gear = 4;
        this.speed = 40;
    }
    return Bike;
}());
var Cycle = /** @class */ (function () {
    function Cycle() {
        this.Drive = "manual";
        this.Gear = 0;
        this.speed = 10;
    }
    return Cycle;
}());
var Car = /** @class */ (function () {
    function Car() {
        this.Drive = "automated";
        this.Gear = 5;
        this.speed = 100;
    }
    return Car;
}());
//create instances 
var bike = new Bike();
var cycle = new Cycle();
var car = new Car();
var vechicles = [bike, car, cycle];
//>20 using filter
var greater20 = vechicles.filter(function (vechicle) { return vechicle.speed > 20; });
console.log(greater20);
//highspeed
var highspeed = 0;
greater20.forEach(function (vechicle) {
    if (vechicle.speed > highspeed) {
        highspeed = vechicle.speed;
    }
});
console.log(highspeed);
