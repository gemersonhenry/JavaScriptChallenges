function main() {
    //var n_temp = readLine().split(' ');
    var n = parseInt('6');
    var k = parseInt('2');
    var number = '932239';

    var NumeroCanonico = function () {    	
    	fn = {};

    	fn.convertirNumeroEnCanonico = function (strNumber, n, k) {
    		var arrNumber = strNumber.split('');
    		var numDigDiff = fn.cantidadDeDigitosDiferentes(arrNumber);
    		if ( n === 1 && k === 0 ) {
    			arrNumber = arrNumber;
    		} else if ( n === 1 && k === 1 ) {
    			arrNumber[0] = '9';
    		} else if ( k === numDigDiff ) {
    			arrNumber = fn.formarCapicuaBasica(arrNumber, n, k);
    		} else if ( k > numDigDiff ) {
    			arrNumber = fn.formarCapicuaMaxima(arrNumber, n, k);
    		} else if ( k >= n ) {
    			arrNumber = fn.cambiarTodosLosDigitosPorNueve(arrNumber, n, k);
    		} else {
    			return -1;
    		}
    		return arrNumber.join('');	
    	}
    	fn.formarCapicuaMaxima = function (arrNum, n, k) {
    		var m = Math.floor(n/2);
    		var numDiff = fn.cantidadDeDigitosDiferentes(arrNum);
    		while ( numDiff < k ) {
    			for (var i = 0; i < m; i++) {
    				if ( arrNum[i]!=='9' || arrNum[n-i-1]!=='9' ) {
    					if ( arrNum[i]!=='9' ){
    						arrNum[i] = '9'
    						k--;
    					}
    					if ( arrNum[n-i-1]!=='9' ){
    						arrNum[n-i-1] = '9'
    						k--;
    					}
    					break;
    				}
    			}
    			numDiff = fn.cantidadDeDigitosDiferentes(arrNum);
    		}
    		arrNum = fn.formarCapicuaBasica(arrNum, n, k);
    		return arrNum;
    	}
    	fn.reemplazarDigitosConNueve = function (arr, i, j) {
    		var k = 0;
    		if ( arr[i]!=='9' ){
				arr[i] = '9';
				k++;
			}
			if ( arr[j]!=='9' ){
				arr[j] = '9';
				k++;
			}
			return {arr:arr, k:k};
    	}
    	fn.cambiarTodosLosDigitosPorNueve = function (arrNum, n, k) {
    		for (var i = 0; i < (n*0.5+1); i++) {
    			arrNum[i] = '9';
    			arrNum[n-i-1] = '9';
    		}
    		return arrNum;
    	}
    	fn.formarCapicuaBasica = function (arrNum, n, k) {
    		var m = Math.floor(n/2);
    		var left;
    		var rigth;
    		for (var i = 0; i < m; i++) {
    			if ( arrNum[i] !== arrNum[n-i-1] ) {
    				left = arrNum[i];
    				rigth = arrNum[n-i-1];
    				if ( left > rigth ) {
    					arrNum[n-i-1] = left;
    				} else {
    					arrNum[i] = rigth;
    				}
    			}
    		}
    		return arrNum;
    	}
    	fn.verificarNumeroCapicua = function (arrNum, n, k) {
    		var m = Math.floor(n/2);
    		for (var i = 0; i < m; i++) {
    			if ( arrNum[i] !== arrNum[n-i-1] ) {
    				return false;
    			}
    		}
    		return true;
    	}
    	fn.cantidadDeDigitosDiferentes = function (arr) {
    		var len = arr.length;
    		/*
    		tener en cuenta que un array de 1 elemento no generará 
    		diferencias, pero si se podría modificar.
    		 */
    		var m = Math.floor(arr.length/2);
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

    var nc = new NumeroCanonico();
    var N = nc.convertirNumeroEnCanonico(number, n, k);
    console.log(N);
}

main();