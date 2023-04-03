"use strict"

class Vehicle {
constructor (make,model){
    this.make = make
    this.model = model
}
}

class car extends Vehicle {
    constructor (make,model,year){
        super(make,model);
        this.year = year
    }
    owners = []

    addOwner = function(owner){
        this.owners.push(owner);
    }

    removeOwner = function (owner) {
        this.owners = this.owners.filter((oldOwner) => oldOwner !== owner);
      };

    getOwnersCount = function(){
        return this.owners.length;
    }

    getOwnerNames = function(){
        return this.addOwner();
    }

    getCarInfo = function() {
        return `${this.make} ${this.model} released in ${this.year}`;
      }
    

    getFullInfo = function(){
        return this.make + " " + this. model + " " + "from" + " " + this.year +
        "." + " " + this.getOwnersCount() + " " + "person owns this car." +
        " " + "These are" + " " + this.getOwnerNames();
    }
}

//--------------------------------------------------------

class Person {
    constructor(name,surname,age,gender,cars = []){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
    }

    fullName = function(){
        return this.name + " " + this.surname;
    }

    countCars = function(){
        return this.cars.length;
    }
    
    buysCar = function(car){
        this.cars.push(car);
        car.owners.push(this);
    }

    sellsCar = function (car) {
        this.cars = this.cars.filter((el) => el !== car);
        car.removeOwner(this);
      };

      getAllCarsInfo = function () {
        return `${this.name} owns these cars: ${this.cars
          .map((car) => car.getCarInfo())
          .join(", ")}.`;
      };
}

//TEST:

let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new car("BMW", "525", "1999");
let stodevianosto = new car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});


console.log({
  daniel: {
    countCars: 1,
    fullName: "Daniel Barbakadze",
    getAllCarsInfo: "Daniel owns these cars: Mercedes E190 released in 1991.",
  },
  elon: {
    countCars: 2,
    fullName: "Elon Musk",
    getAllCarsInfo: "Elon owns these cars: Mercedes E190 released in 1991, BMW 525 released in 1999.",
  },
  duti_picoti: {
    getCarInfo: "BMW 525 released in 1999",
    getFullInfo: "BMW 525 from 1999. 1 person owns this car. These are - Elon Musk.",
    getOwnerNames: ["Elon Musk"],
    getOwnersCount: 1,
  },
  stodevianosto: {
    getCarInfo: "Mercedes E190 released in 1991",
    getFullInfo: "Mercedes E190 from 1991. 2 person owns this car. These are - Daniel Barbakadze, Elon Musk.",
    getOwnerNames: (2)[("Daniel Barbakadze", "Elon Musk")],
    getOwnersCount: 2,
  },
})