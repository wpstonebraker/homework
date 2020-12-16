function soundMaker(sound, times) {
	
	// closure
	function makeSound() {
		console.log(`${sound}`);
	}

	for(let i = 0; i < times; i++) {
		makeSound();
	}
}

function summation(arr) {
	let sum = 1

	function summer() {
		for(let i = 0; i < arr.length; i++) {
			sum *= arr[i];
		}
	}

	# when we use variables inside the enclosure, it changes them


	summer();

	return sum;
}

console.log(summartion([1,2,3,4]));

callback // function that is passed to another function as a argument that is intended to be called at a later time
// often used when the result is not immidiately avail (maybe we need user input)
//
// often see with asynchronous functions
//
let callback = function() {
	console.log("supdudeslol");
};

// notice line 42 callback in NOT invoked with()
// invoking with () would say "give me the return value"
global.setTimeout(callback, timeToWait); 
// more likely to see vvv
global.setTimeout(function() {
	console.log("supdudeslol");
}, 5000);
// ^^ this is ES5 syntax
//
// ES6 syntax vvvv

global.setTimeout(() => {
	console.log("supdudeslol")
}, 5000);








