interface Motor{

    Drive: string;

    Gear: number;

    speed: number;

}




class Bike implements Motor{

    Drive :string= "Automatic";

    Gear: number=4;

    speed: number=40;

 }



 
class Cycle implements Motor{

    Drive : string="manual";

    Gear: number=0;

    speed:number= 10;

}




class Car implements Motor{

    Drive:string="automated";

    Gear:number=5;

    speed:number=100;

}




//create instances 




const bike = new Bike();
 
const cycle = new Cycle();

const car= new Car();




const vechicles: Motor[]=[bike,car,cycle];




//>20 using filter




const greater20 = vechicles.filter(vechicle=>vechicle.speed>20);

console.log(greater20);




//highspeed




let highspeed=0;

greater20.forEach(vechicle=>{

    if(vechicle.speed>highspeed){

        highspeed=vechicle.speed;

    }

});

console.log(highspeed);
