function main() {
    //var n_temp = readLine().split(' ');
    var n = parseInt('6');
    var k = parseInt('2');
    var number = '932239';

    var NumeroCapicua = function () {
    	fn = {};

    	fn.generarNumeroCapicua = function (arr, n, k) {
    		var p = fn.cantidadDeDigitosDiferentes(arr);
    		var arr = arr.split('');
    		if ( k >= n ) {
    			/*
    			se genera un string de puros 9
    			 */
    			return fn.generarCapicuaNueve(arr, n, k);
    		} else if ( k === 0 ) {
    			/*
    			no se cambiará ningún digito
    			 */
    			return fn.retornarCapicuaVerificado(arr, n, k);
    		} else if ( k < p ) {
    			/*
    			no se podrá formar un número capicua
    			 */
    			return -1;
    		} else if ( k === p ) {
    			/*
    			siempre que aparesca esto, se usara un capicua base
    			 */
    			return fn.capicuaBase(arr, n, k);
    		} else if ( n%2 === 0 ) {
    			/*
    			generar número Capicua de un numero 
    			con cantidad de digitos PAR
    			 */
    			return fn.generarNumeroCapicuaPar(arr, n, k);
    		} else if ( n%2 === 1 ) {
    			/*
    			generar número Capicua de un numero 
    			con cantidad de digitos IMPAR
    			 */
    			return fn.generarNumeroCapicuaImpar(arr, n, k);
    		}
    	}
    	fn.generarNumeroCapicuaImpar = function (arr, n, k) {
    		var num = fn.cantidadDeDigitosDiferentes(arr, n, k);
    		if ( num === 0 ) {
    			// el número ya es capicua
    			if ( k%2 === 1 ) {
    				arr[(n-1)/2] = '9';
    				k--;
    				arr = fn.reemplazarDigitosPorNueve(arr, n, k);
    			} else {
    				arr = fn.reemplazarDigitosPorNueve(arr, n, k);
    			}
    		} else if ( num > 0 ) {
				for (var i = 0; i < n; i++) {
					if ( (arr[i]!=='9' && arr[n-i-1]!=='9') && k>num ) {
						arr[i] = '9';
						arr[n-i-1] = '9';
						k = k - 2;
					} else if ( (arr[i]!=='9' || arr[n-i-1]!=='9') && k>num ) {
						arr[i] = '9';
						arr[n-i-1] = '9';
						k = k - 1;
					}
					num = fn.cantidadDeDigitosDiferentes(arr);
				}
				num = fn.cantidadDeDigitosDiferentes(arr);
				if ( k < num ) {
					return -1;
				}				
    		}
    		return arr.join('');
    	}
    	fn.generarNumeroCapicuaPar = function (arr, n, k) {
    		arr = fn.capicuaParBaseMaximo(arr, n, k);
    		return arr;
    	}
    	fn.capicuaImparBaseMaximo = function (arr, n, k) {

    	}
    	fn.capicuaParBaseMaximo = function (arr, n, k) {
    		var num;
			arr = fn.reemplazarDigitosPorNueve(arr, n, k)
			num = fn.cantidadDeDigitosDiferentes(arr);
			if ( k < num ) {
				return -1;
			} else {
				if ( fn.verificarNumeroCapicua(arr, n, k) ) {
					return fn.capicuaBase(arr, n, k);
				} else {
					return fn.capicuaBase(arr, n, k);
				}				
			}
    	}
    	fn.capicuaBase = function (arr, n, k) {
    		var m = Math.floor(n/2);
    		var left;
    		var rigth;
    		var k_temp = k;
    		//console.log(arr);
    		for (var i = 0; i < m; i++) {
    			if ( arr[i] !== arr[n-i-1] && k_temp > 0 ) {
    				left = arr[i];
    				rigth = arr[n-i-1];
    				k_temp--;
    				if ( left > rigth ) {
    					arr[n-i-1] = left;
    				} else {
    					arr[i] = rigth;
    				}
    			}
    		}
    		return arr.join('');
    	}
    	fn.reemplazarDigitosPorNueve = function (arr, n, k) {
    		var num;
			for (var i = 0; i < n/2; i++) {
				num = fn.cantidadDeDigitosDiferentes(arr);
				if ( arr[i] !== '9' && k > num ) {
					arr[i] = '9';
					k = k - 1;
				}
				num = fn.cantidadDeDigitosDiferentes(arr);
				if ( arr[n-i-1] !== '9' && k > num) {
					arr[n-i-1] = '9';
					k = k - 1;
				}
				//console.log(arr);	
			}
			return arr;
    	}
    	fn.retornarCapicuaVerificado = function (arr, n, k) {
    		if ( fn.verificarNumeroCapicua(arr, n, k) ) {
    			return arr.join('');
    		} else {
    			return -1;
    		}
    	}
    	fn.verificarNumeroCapicua = function (arr, n, k) {
    		var m = Math.floor(n/2);
    		for (var i = 0; i < m; i++) {
    			if ( arr[i] !== arr[n-i-1] ) {
    				return false;
    			}
    		}
    		return true;
    	}
    	fn.generarCapicuaNueve = function (arr, n, k) {
    		for (var i = 0; i < n; i++) {
    			arr[i] = '9';
    		}
    		return arr.join('');
    	}
    	fn.cantidadDeDigitosDiferentes = function (arr) {
    		var len = arr.length;
    		var m = Math.floor(len/2);
    		var count = 0;
    		for (var i = 0; i < m; i++) {
    			if ( arr[i] !== arr[len-i-1] ) {
    				count++;
    			}
    		}
    		return count;
    	}

    	return fn;
    }

    var nc = new NumeroCapicua();
    console.log(nc.generarNumeroCapicua(number, n, k));
}

main();