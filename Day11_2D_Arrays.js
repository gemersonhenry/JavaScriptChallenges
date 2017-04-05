function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = "1 1 1 0 0 0".split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var Array2D = function (arr) {
    	var arr = arr;
    	var arr_length = arr.length;
    	var sumas = [];
    	var mayor_suma = 0;
    	var fn = {};

    	fn.run = function () {
    		fn.sumaDeRelojesDeArena();
    		fn.encontrarMayorSuma();
    		console.log(mayor_suma);
    	}
    	fn.sumaDeRelojesDeArena = function () {
    		for (var i = 0; i < (arr_length-2); i++) {    			
    			for (var j = 0; j < (arr[i].length-2); j++) {
    				var suma = arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
    				sumas.push(suma);
    			}
    		}
    	}
    	fn.encontrarMayorSuma = function () {
    		var temp = sumas[0];
    		for (var i = 0; i < sumas.length; i++) {
    			if ( sumas[i] > temp ) {
    				temp = sumas[i];
    			}
    		}
    		mayor_suma = temp;
    	}

    	return fn;
    }

    var A = new Array2D(arr);
    A.run();
}

main();