function main() {
    var t = parseInt('1');

    var GridChild = function () {
        var fn = {};
        fn.response = function (arrPattern, R, C, arrChild, r, c) {
            if ( fn.runComparison(arrPattern, R, C, arrChild, r, c) ) {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
        fn.runComparison = function (arrPattern, R, C, arrChild, r, c) {
            // los valores de filas y columnas se pueden obtener también directamente de los arrays
            var arr_pattern = fn.constructArray(arrPattern, R, C);
            var arr_child = fn.constructArray(arrChild, r, c);
            var RP = (R-r+1);
            var CP = (C-c+1);
            for (var rp = 0; rp < RP; rp++) {
                for (var cp = 0; cp < CP; cp++) {
                    var arr_temp = fn.getChildArray(arr_pattern, r, c, rp, cp);
                    //console.log(arr_temp);
                    if ( fn.compareArrays(arr_child, arr_temp) ) {
                        return true;
                    }
                }
            }
        }
        fn.getChildArray = function (arr_pattern, r_length, c_length, r_initial, c_initial) {
            //var arr = fn.generateEmptyArray(r_length, c_length);
            var arr = [];
            //console.log(arr_pattern, r_length, c_length, r_initial, c_initial);
            var rows = (r_initial+r_length);
            var cols = (c_initial+c_length);
            for (var i = r_initial; i < rows; i++) {
                var arr_row = [];
                for (var j = c_initial; j < cols; j++) {
                    arr_row.push(arr_pattern[i][j]);
                }
                arr.push(arr_row);
            }
            return arr;
        }
        fn.compareArrays = function (arr1, arr2) {
            // Asumimos que entran 2 arreglos con las mismas dimensiones
            var rows = arr1.length;
            var cols = arr1[0].length;
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < cols; j++) {
                    if ( arr1[i][j] != arr2[i][j] ) {
                        return false;
                    }
                }
            }
            return true;
        }
        fn.constructArray = function (arr, rows, cols) {
            // método especialmente creado para formatear las entradas por defecto
            // y convertirlas en un arreglo de 2 dimensiones.
            var arrf = [];
            for (var i = 0; i < rows; i++) {
                var string_arr = arr[i].split('');
                var empty_arr = [];
                for (var j = 0; j < cols; j++) {
                    empty_arr.push( parseInt(string_arr[j]) );
                }
                arrf.push(empty_arr);
            }
            //console.log(arrf);
            return arrf;
        }
        fn.generateEmptyArray = function (M,N) {
            // Inicializando una matriz vacía
            var ea = new Array(M);
            var ea_length = ea.length;
            for (var i = 0; i < ea_length; i++) {
                ea[i] = new Array(N);
            }
            return ea;
        }

        // return all function
        return fn;
    }

    for(var a0 = 0; a0 < t; a0++){
        var R_temp = '3 5'.split(' ');
        var R = parseInt(R_temp[0]);
        var C = parseInt(R_temp[1]);
        var G = ['1 4 6 7 3', '4 3 2 5 1', '9 8 7 6 5'];
        /*for(var G_i = 0; G_i < R; G_i++){
           G[G_i] = readLine();
        }*/
        var r_temp = '2 2'.split(' ');
        var r = parseInt(r_temp[0]);
        var c = parseInt(r_temp[1]);
        var P = ['5 1', '6 5'];
        /*for(var P_i = 0; P_i < r; P_i++){
           P[P_i] = readLine();
        }*/

        var n = new GridChild();
        n.response(G, R, C, P, r, c);
    }    
}

console.time('search');
main();
console.timeEnd('search');