class MyCar{
  constructor(brand, model, engine, power, color){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.power = power;
    this.color = color;
    this.cost = 3000;
  }
    getCost(){
    return this.cost;
  }
  
  setCost(newCost){
    this.cost = newCost;
  }
  
  opinion(){
    console.log("It's convinent");
  }
}

let my_Car = new MyCar("Opel","Vectra", [1.8], [115, "Hp"],"grey"); 
my_Car.setCost(3250);
console.log(my_Car);

let friendCar = new MyCar("Nissan","Teana", [2.3], [173, "Hp"],"white");
friendCar.setCost(4400)
friendCar.opinion();
console.log(friendCar);

class dreamingCar extends MyCar{
  constructor(brand, model, engine, power, color, maxSpeed, tireSize){
    super(brand, model, engine, power, color);
    this.maxSpeed = maxSpeed;
    this.tireSize = tireSize;

  }
  
work() {
    console.log('Powerfull car');

  }
}

let dreamCar = new dreamingCar("BMW", "M5",[4.4], [575, "Hp"], "white", [250,"km/h"], "R-19");
dreamCar.setCost(8000);
dreamCar.work();
console.log(dreamCar);

class economyCar extends dreamingCar{
  constructor(brand, model, engine, power, color, maxSpeed, tireSize, spareParts){
    super(brand,model, engine, power, color, maxSpeed, tireSize);
    this.spareParts = spareParts;
  }
  opinion(){
    console.log("This car Fuel Economy is amazing")
  }
}

let economy_Car = new economyCar ("Toyota", "Corolla", [1.6], [132, "Hp"], "dark grey", [290,"km/h"], "R16", "high quality");
economy_Car.opinion();
console.log(economy_Car)
