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


// dad.trumpet()
// dad.grow()
// dad.grow()
// dad.addTrick('roll over')
// dad.play()
// console.log(dad.height)

