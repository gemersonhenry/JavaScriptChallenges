var m = ['a','b','a','b','a','b','a','b'];
var string = '';
function concat(a) {
	string = string + a;
};

m.map(concat);
console.log(string);