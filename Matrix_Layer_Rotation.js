function processData(input) {
	var input = input || "4 5 3\n1 2 3 4 1\n5 6 7 8 5\n9 0 1 9 0\n3 4 5 3 4";
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
				var temp = matrizResultado[i].join('\t') + '\n';
				st = st + temp;
			}
			return st;
		}

		fn.generatedMatrixResultado = function () {
			matrizResultado = fn.rotateMatrix();
		}

		fn.rotateMatrix = function () {
			var mt = matrizInicial;
			for (var m = 0; m < R; m++) {
				mt = fn.rotateMatrixOne(mt);
			}
			return mt;
		}

		fn.rotateMatrixOne = function (/*matriz inicial*/mi) {
			var rings = (fn.getMinDimention())/2;
			var mf = fn.generatedMatrixVacia(); /*matriz final - después de la rotación*/

			for (var index = 0; index < rings; index++) {
				for (var i = 0; i < mi.length; i++) {
					for (var j = 0; j < mi[i].length; j++) {
						if ( i==(0+index) && ( j>(0+index) && j<(mi[i].length-index) ) ) {
							mf[i][j-1] = mi[i][j];
						}
						if ( i==(M-1-index) && ( j>=(0+index) && j<(mi[i].length-index-1) ) ) {
							mf[i][j+1] = mi[i][j];
						}
						if ( j==(0+index) && ( i>=(0+index) && i<(mi.length-index-1) ) ) {
							mf[i+1][j] = mi[i][j];
						}
						if ( j==(N-1-index) && ( i>(0+index) && i<(mi.length-index) ) ) {
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

		return fn;		
	}

	var matrix = new RotationMain(M, N, R, contentArray);
	matrix.generatedMatrixResultado();	
	console.log(matrix.getMatrixString());
}

processData();