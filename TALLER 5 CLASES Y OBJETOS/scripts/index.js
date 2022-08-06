
class Dog {
  constructor(id, name, age, zice, breed, behavior, specialCondition, status){
    this.id = id;
    this.name = name;
    this.age = age;
    this.zice = zice;
    this.breed = breed;
    this.behavior = behavior;
    this.specialCondition = specialCondition;
    this.status = status;
  }

  changeStatus(){
    
  }

  printStatus(){
    console.log(this.status)
  }

}