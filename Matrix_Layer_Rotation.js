function processData(input) {
	var input = input || "8 6 1\n1 2 3 4 1 2\n5 6 7 8 5 6\n9 0 1 9 0 2\n3 4 5 3 4 6\n7 8 9 7 8 0\n1 2 3 4 1 2\n5 6 7 8 5 6\n9 0 1 9 0 2";
	var defaultArray = input.split('\n');

	var mainArray = defaultArray.splice(0,1);
	var contentArray = defaultArray; // matriz de M strings donde cada string tiene 
	                                 // N valores separados por espacios
	                                 // 
	var mains = mainArray[0].split(' '); // The first line: M, N, R
	var M = parseInt(mains[0]); // Number of rows
	var N = parseInt(mains[1]); // Number of columns
	var R = parseInt(mains[2]); // Number of iterations*/

	var RotationMain = function (M, N, R, matrix) {

		var M = M;
		var N = N;
		var R = R;

		// Inicializando una matriz vacía
		var matrizVacia = new Array(M);
		for (var i = 0; i < matrizVacia.length; i++) {
			matrizVacia[i] = new Array(N);
		}

		// Construyendo la matriz de entrada
		var matrizInicial = new Array(M);
		for (var i = 0; i < matrizInicial.length; i++) {
			matrizInicial[i] = new Array(N);
			var temp = matrix[i].split(' ');
			for (var j = 0; j < temp.length; j++) {
				matrizInicial[i][j] = parseInt(temp[j]);
			}
		}

		var init = {};

		init.rotatePosition = function () {

		}

		init.rotateVertical = function () {
			var numberOfRings = (init.getMinDimention())/2; // returna el valor del numero de columnas
			                                				// por ser menor, girara verticalmente
			for (var index = 0; index < numberOfRings; index++) {
				for (var i = 0; i < matrizInicial.length; i++) {
					for (var j = 0; j < matrizInicial[i].length; j++) {
						if ( i==(0+index) && ( j>(0+index) && j<(matrizInicial[i].length-index) ) ) {
							matrizVacia[i][j-1] = matrizInicial[i][j];
						}
						if ( i==(M-1-index) && ( j>=(0+index) && j<(matrizInicial[i].length-index-1) ) ) {
							matrizVacia[i][j+1] = matrizInicial[i][j];
						}
						if ( j==(0+index) && ( i>=(0+index) && i<(matrizInicial.length-index-1) ) ) {
							matrizVacia[i+1][j] = matrizInicial[i][j];
						}
						if ( j==(N-1-index) && ( i>(0+index) && i<(matrizInicial.length-index) ) ) {
							matrizVacia[i-1][j] = matrizInicial[i][j];
						}
					}
				}
			}
		}

		init.getMinDimention = function () {
			if ( M <= N ) {
				return M;
			} else {
				return N;
			}
		}

		init.getMatrizVacia = function () {
			return matrizVacia;
		}

		init.getMatrizInicial = function () {
			return matrizInicial;
		}

		return init;		
	}

	var matrix = new RotationMain(M, N, R, contentArray);
	matrix.rotateVertical();
	console.log(matrix.getMatrizVacia());
	console.log("");
	console.log(matrix.getMatrizInicial());
}

processData();