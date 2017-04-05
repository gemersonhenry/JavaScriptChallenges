function processData(input) {
    //Enter your code here
    var x = input.split('\n');
    var nm = x.splice(0,1);
    var nm = nm[0].split(' ');
    var N = parseInt(nm[0]);
    var M = parseInt(nm[1]);
    var arr = x;

    var Tree = function (arr) {
    	var fn = {};
    	var arr = arr;

    	fn.run = function () {

    	}
    	fn.armarNodo = function (nodo) {
    		var t = nodo.split(' ');    		
    		var nodo = { padre : t[0], hijo : t[1] };

    	}
    	fn.recorrerArbol = function () {
    		arr.forEach( fn.armarNodo );
    	}

    	return fn;
    }

    var t = new Tree();
    t.run();
    console.log(N, M, arr);
} 

var input = "10 9\n2 1\n3 1\n4 3\n5 2\n6 1\n7 2\n8 6\n9 8\n10 8";
processData(input);