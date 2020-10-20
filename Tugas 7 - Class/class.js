console.log("###########################################")
console.log("\n1. Animal Class")
console.log("Release 0 : ")
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name() {
        return this._name;
    }
    set name(x) {
        this._name = x;
    }
    get legs() {
        return this._legs;
    }

    get cold_blooded() {
        return this._cold_blooded;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

console.log("\nRelease 1 : ")
// Code class Ape dan class Frog di sini

class Ape extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }
    yell() {
        return console.log("Auooo");
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
        this._legs = 2;
    }
    jump() {
        return console.log("hop hop");
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.name)
console.log(sungokong.legs)
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
console.log(kodok.name)
kodok.jump() // "hop hop" 

console.log("\n###########################################")
console.log("\n2. Function to Class")
class Clock {
    // Code di sini
    constructor({ template }) {
        this.template = template;
        var timer;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        this.template = hours + ":" + mins + ":" + secs;
        
        console.log(this.template);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  