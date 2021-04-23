class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }

    getPower(){
    if(this.power){
        return this.power
    }
    return 'I have no power';
    }

    goForGrocery(budget){
        if (this.power && budget > 5000) {
         console.log(this.getPower());
        }
      return "Price is to High. I can't Buy"
    }
}
const batman = new Hero('batman');
// console.log(batman.power);
// console.log(batman.getPower());
console.log(batman.goForGrocery(1000));