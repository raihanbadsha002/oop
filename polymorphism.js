class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area(){
        return Math.PI * Math.pow(2, this.radius);
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    area(){
        return this.base * this.height/2;
    }
}

const shapes = [new Triangle(15, 10), new Rectangle(20, 15), new Circle(10), new Rectangle(10, 5)]

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    console.log(shape.area())
    
}