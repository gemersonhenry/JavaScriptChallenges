function processData(input) {
	var input = input || "4 5 999999999\n1 2 3 4 1\n5 6 7 8 5\n9 0 1 9 0\n3 4 5 3 4";
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
		var matrizResultado;

		// Construyendo la matriz de entrada
		var matrizInicial = new Array(M);
		for (var i = 0; i < matrizInicial.length; i++) {
			matrizInicial[i] = new Array(N);
			var temp = matrix[i].split(' ');
			for (var j = 0; j < temp.length; j++) {
				matrizInicial[i][j] = parseInt(temp[j]);
			}
		}		

		var fn = {};

		fn.getMatrixString = function () {
			var st = '';
			for (var i = 0; i < matrizResultado.length; i++) {
				var temp = matrizResultado[i].join(' ') + '\n';
				st = st + temp;
			}
			return st;
		}

		fn.generatedMatrixResultado = function () {
			matrizResultado = fn.rotateMatrix();
		}

		fn.rotateMatrix = function () {
			var rings = (fn.getMinDimention())/2;
			fn.calculateNumberRotate();
			var mt = matrizInicial;
			for (var m = 0; m < R; m++) {
				mt = fn.rotateMatrixOne(mt, rings);
			}
			return mt;
		}

		fn.rotateMatrixOne = function (/*matriz inicial*/mi, rings) {			
			var mf = fn.generatedMatrixVacia(); /*matriz final - después de la rotación*/

			for (var kr = 0; kr < rings; kr++) {
				var nkr = N - kr;
				var mkr = M - kr;
				for (var i = 0; i < M; i++) {
					for (var j = 0; j < N; j++) {
						if ( i == kr && ( j > kr && j < nkr ) ) {
							mf[i][j-1] = mi[i][j];
						} else if ( i == ( mkr-1 ) && ( j >= kr && j < (nkr-1) ) ) {
							mf[i][j+1] = mi[i][j];
						} else if ( j == kr && ( i >= kr && i < (mkr-1) ) ) {
							mf[i+1][j] = mi[i][j];
						} else if ( j == (nkr-1) && ( i > kr && i < mkr ) ) {
							mf[i-1][j] = mi[i][j];
						}
					}
				}
			}
			return mf;
		}

		fn.generatedMatrixVacia = function () {
			// Inicializando una matriz vacía
			var mv = new Array(M);
			for (var i = 0; i < mv.length; i++) {
				mv[i] = new Array(N);
			}
			return mv;
		}

		fn.getMinDimention = function () {
			if ( M <= N ) {
				return M;
			} else {
				return N;
			}
		}

		fn.getMatrizInicial = function () {
			return matrizInicial;
		}

		fn.getMatrizResultado = function () {
			return matrizResultado;
		}

		fn.calculateNumberRotate = function () {
			var mcm = fn.mcmTotal();
			if ( R > mcm ) {
				R = R%mcm;
			}
		}

		// agregando funciones auxiliares
		fn.mcmTotal = function () {
			var vuelta = (2*(M+N)-4);
			var rings = (fn.getMinDimention())/2;
			var mcm_total;
			if ( rings > 1 ) {
				var a = vuelta;
				var b = vuelta - 8;
				for (var i = 0; i < (rings-1); i++) {
					mcm_total = fn.calculateMCM(a, b);
					b = vuelta - (8*i);
					a = mcm_total;
				}
			}
			return mcm_total;
		}

		fn.calculateMCM = function (a, b) {
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

	var matrix = new RotationMain(M, N, R, contentArray);
	matrix.generatedMatrixResultado();	
	console.log(matrix.getMatrixString());
}

console.time('Test performance');
processData();
console.timeEnd('Test performance');