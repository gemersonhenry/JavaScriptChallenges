function main() {
    var n = parseInt("1562395");

    var Binary = function (n) {
    	var n = n;
    	var n_binary;
    	var n_binary_arr;
    	var fn = {};

    	fn.run = function () {
    		fn.convertirABinario();
    		fn.buscarMayorRepeticion();
    	}
    	fn.convertirABinario = function () {
    		var D = n;
    		var d = 2;
    		var c_temp;
    		var r_temp;
    		var r_arr = [];
    		do {
    			r_temp = D%d;
    			r_arr.push(r_temp);
    			c_temp = Math.floor(D/d);
    			D = c_temp;
    		} while ( D > 0 )
    		n_binary_arr = r_arr.reverse();
    		n_binary = r_arr.join('');
    		//console.log(n_binary);
    	}
    	fn.buscarMayorRepeticion = function () {
    		var n_max = 0;
    		var n_temp = 0;
    		for (var i = 0; i < n_binary_arr.length; i++) {
    			if ( n_binary_arr[i]===1 ) {
    				n_temp++;
    				if ( n_temp > n_max ) {
	    				n_max = n_temp;
	    			}
    			} else if ( n_temp > 0 && n_temp > n_max ) {
    				n_max = n_temp;
    				n_temp = 0;
    			} else {
    				n_temp = 0;
    			}
    		}
    		console.log(n_max);
    	}

    	return fn;
    }

    var binary = new Binary(n);
    binary.run();
}

main();