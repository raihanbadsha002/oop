class Tiger {
     #speed = 100;
     location = "Sundarban";
    constructor(name) {
        this.name = name;
    }
    run(){
    console.log(`I am ${this.name}. I am running per ${this.#speed}km/hr. I live in ${this.location}`)
 }
}

const tiger = new Tiger('Royal Bengal');
// tiger.name= "Cat Bengal"
// tiger.location= "Australia"
// tiger.#speed= 125  Private field '#speed'
tiger.run();