/*
Steve has a string, s, consisting of n lowercase English alphabetic letters. 
In one operation, he can delete any pair of adjacent letters with same value. 
For example, string "aabcc" would become either "aab" or "bcc" after operation.

Steve wants to reduce s as much as possible. 
To do this, he will repeat the above operation as many times as it can be performed. 
Help Steve out by finding and printing s's non-reducible form!

Note: If the final string is empty, print Empty String .

Input Format

A single string, s.

Constraints

1 < n < 100
 */

function processData(input) 
{
	var letters = input.split('');
	var longitud = letters.length;
	var s = new Arreglo();
	var output;

	for (var i = 0; i < longitud; i++) {
		s.setArreglo(letters);
		s.extractDuplicated();
		letters = s.getArreglo();
	}

	if ( letters.length > 0 ) {
		output = letters.join('');
	} else {
		output = "Empty String";
	}

	console.log(output);
}

function Arreglo () {
	this.arreglo = [];
}
Arreglo.prototype.getArreglo = function () {
	return this.arreglo;
}
Arreglo.prototype.setArreglo = function (arreglo) {
	this.arreglo = arreglo;
}
Arreglo.prototype.extractDuplicated = function () {
	for (var i = 0; i < (this.arreglo.length - 1); i++) {
		var j = i + 1;
		if( this.arreglo[i] === this.arreglo[j] ){
			this.arreglo.splice(j,1);
			this.arreglo.splice(i,1);
			break;
		}
	}
}

processData("aaaaabbcdcccedccmn");