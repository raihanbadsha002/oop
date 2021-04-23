class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        
    }
    charging(){
        console.log("I am electrons..so Charge me")
    }
}
// ************
class Phone extends SmartDevice {
    constructor(name, price, camera) {
        super(name, price)
        this.camera = camera;   
    }
    sendSMS(){
        console.log("I am sending text to my gf/bf")
    }
}

class Watch extends SmartDevice {
    constructor(name, price, distance) {
        super(name, price)
        this.distance = distance;
        
    }
}

class Tablet extends SmartDevice {
    constructor(name, price, isWifi) {
        super(name, price)
        this.isWifi = isWifi;
        
    }
}

const kupaSamsu = new Phone('Samsung', 35000, '16GB');
console.log(kupaSamsu)
// kupaSamsu.charging()