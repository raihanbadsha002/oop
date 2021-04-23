function Cat(name) {
    this.name = name;
}
Cat.prototype.talk = function(){
    console.log('Meow Meow');
}
const myCat = new Cat('Pussy Cat');
console.log(myCat)
myCat.talk()