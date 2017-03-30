var MaximoComunDivisor = function (a, b) {
	var a = a;
	var b = b;
	var mcm;
	var fn = {};

	fn.calculateMCM = function () {
		var mcd = fn.calculateMCD(a, b);
		return (a*b)/mcd;
	}

	fn.calculateMCD = function (m, n) {
		var restoTemp = fn.getRestoDeDivision(m, n);
		if ( restoTemp === 0 ) {
			return n
		} else {
			return fn.calculateMCD(n, restoTemp)
		}
	}

	fn.getRestoDeDivision = function (m, n) {
		var resto = ( m - Math.floor(m/n)*n );
		return resto;
	}

	return fn;
}

var x = new MaximoComunDivisor(144,80);
console.log(x.calculateMCM());
