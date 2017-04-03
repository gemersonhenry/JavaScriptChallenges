function main() {
    //var n_temp = readLine().split(' ');
    var n = parseInt('6');
    var k = parseInt('3');
    var number = '092282';

    var Capicua = function () {
    	var arr_number;
    	var arr_number_length;
    	var number_of_digit_diff = 0;
    	var fn = {};

    	fn.runCaptiveNumber = function (number, n) {
    		fn.convertNumberOnArray(number);
    		fn.checkCaptiveNumber();
    		fn.checkExistsCaptive(n);
    	}
    	fn.checkExistsCaptive = function (n) {
    		//console.log(n, number_of_digit_diff);
    		if ( n == number_of_digit_diff ) {
    			fn.convertToCaptive();
    			console.log(arr_number.join(''));
    		} else if ( n > number_of_digit_diff ) {
    			fn.convertToCaptiveMax(n);
    			console.log(arr_number.join(''));
    		} else {
    			console.log(-1);
    		}
    	}
    	fn.convertToCaptiveMax = function (n) {
    		var m = Math.floor(arr_number_length/2);
    		var k_temp;
    		//console.log(k);
    		for (var i = 0; i < m; i++) {
    			if ( arr_number[i] !== arr_number[arr_number_length-i-1] ) {
    				arr_number[i] = '9';
    				arr_number[arr_number.length-i-1] = '9';
    				k_temp = fn.countDigitDiff(arr_number);
    				n = n - 2;
    				if ( n === k_temp ) {
    					break;
    				}
    			}
    		}
    		fn.convertToCaptive();
    	}
    	fn.convertToCaptive = function () {
    		var m = Math.floor(arr_number_length/2);
    		var left;
    		var rigth;
    		for (var i = 0; i < m; i++) {
    			if ( arr_number[i] !== arr_number[arr_number_length-i-1] ) {
    				left = arr_number[i];
    				rigth = arr_number[arr_number_length-i-1];
    				if ( left > rigth ) {
    					arr_number[arr_number_length-i-1] = left;
    				} else {
    					arr_number[i] = rigth;
    				}
    			}
    		}
    	}
    	fn.countDigitDiff = function (arr) {
    		var m = Math.floor(arr.length/2);
    		var count = 0;
    		for (var i = 0; i < m; i++) {
    			if ( arr[i] !== arr[arr.length-i-1] ) {
    				count++;
    			}
    		}
    		return count;
    	}
    	fn.changeOneNumber = function (arr_child) {
    		var m = Math.floor(arr_child.length/2);
    		for (var i = 0; i < m; i++) {
    			if ( arr_child[i] !== arr_child[arr_child.length-i-1] ) {
    				arr_child[i] = '9';
    				arr_child[arr_child.length-i-1] = '9';
    				return arr_child;
    			}
    		}
    	}
    	fn.checkCaptiveNumber = function () {
    		var m = Math.floor(arr_number_length/2);
    		for (var i = 0; i < m; i++) {
    			if ( arr_number[i] !== arr_number[arr_number_length-i-1] ) {
    				number_of_digit_diff++;
    			}
    		}
    	}
    	fn.convertNumberOnArray = function (number) {
    		arr_number = number.split('');
    		arr_number_length = arr_number.length;
    	}
    	fn.getArray = function () {
    		return arr_number;
    	}

    	return fn;
    }

    var c = new Capicua();
    c.runCaptiveNumber(number, k);
}

main();