class Animal{
    static category = 'Cat';

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
   static compare(animal1, animal2){
        if (animal1.speed > animal2.speed) {
            return `${animal1.name} is faster then ${animal2.name}`
        }
        return `${animal2.name} is faster then ${animal1.name}`
    }
}
const myCat= new Animal('Cat', 140);
const myDog= new Animal('Dog', 80);
console.log(Animal.compare(myCat, myDog))

// console.log(myCat.category)
// console.log(Animal.category)