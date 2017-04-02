 /*
 You are given an integer N. Print the factorial of this number.
		N! = Nx(N-1)x(N-2)x(N-3)x...x2x1
Input 
Input consists of a single integer N, where 1<N<100.

Output 
Print the factorial of N.

Example 
For an input of 25, you would print 15511210043330985984000000.
  */

function main() {
    var n = parseInt("25");
    var bigInt = require("big-integer");
    var factorial = bigInt(factor(n));

    console.log(factorial);

    function factor (n) {
    	if ( n > 0 ) {
    		return n * factor(n-1);
    	} else {
    		return 1;
    	}
    }
}

main();