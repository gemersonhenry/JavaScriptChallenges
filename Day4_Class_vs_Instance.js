function Person (initialAge) {
	// Add some more code to run some checks on initialAge
	this.age = (initialAge>=0) ? initialAge : 0 ;

	this.amIOld = function () {
	// Do some computations in here and print out the correct statement to the console
		if ( this.age < 13 ) {
			console.log("You are young.");
		} else if ( this.age >= 13 && this.age < 18 ) {
			console.log("You are a teenager.");
		} else {
			console.log("You are old.");
		}
	};

	this.yearPasses = function () {
	// Increment the age of the person in here
		this.age++;
	};

	this.validate = function () {
		if ( initialAge < 0) {
			console.log("Age is not valid, setting age to 0.");
		}
	}

	this.validate();
}

function main() {

	var T = parseInt("1");

	for( i = 0; i < T; i++){
    	var age = parseInt("-3");
    	var p = new Person(age);
    	p.amIOld();
    	for( j = 0; j < 3; j++){
        	p.yearPasses();        
    	}
    	p.amIOld();
    	console.log("");   
    }
}

main();