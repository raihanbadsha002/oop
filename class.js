class PenDrive {
    constructor(capacity, color, price) {
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const apple = new PenDrive("36GB", "White", 1320);
console.log(apple)

const realMe = new PenDrive("32GB", "Black", 1120);
console.log(realMe)


// function syntax

function Walton(name, price) {
    this.name = name;
    this.price = price;
}
const walton = new Walton("GrammePhone", 250)
console.log(walton)