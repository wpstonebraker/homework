function titleize(names, callback) {
    let mahler = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
        callback(mahler);
}

function putsName(array) {
    array.forEach(word => console.log(word));
}

// titleize(["Mary", "Brian", "Leo"], putsName)

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;

}

const dad = new Elephant('dad', 60, ['vids', 'beer'])

Elephant.prototype.trumpet = function() {
    console.log(this.name + " the elephant goes 'phrRRRRRRRRRRR!!!!!!!'");
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick = function(newTrick) {
    this.tricks.push(newTrick)
}

Elephant.prototype.play = function() {
    tricky = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[tricky]}in'!` );
}

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is trotting by!`)
}


// dad.trumpet()
// dad.grow()
// dad.grow()
// dad.addTrick('roll over')
// dad.play()
// console.log(dad.height)

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

console.log(herd)

function dinerBreakfast () {
    let order = "i'd like food";l
    console.log(order);

    return function (food) {
        order = 
    }
}