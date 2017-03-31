function main() {
    var s = "saveChangesInTheEditor";

    var CamelCase = function () {
    	var regExp = /[A-Z]{1}/;
    	var fn = {};

    	fn.counterOfWord = function (s) {
    		var s_temp = s;
    		var count = 0;
    		var i_res;
    		do {
    			i_res = fn.extractWord(s_temp);
    			count++;
    			if ( !!i_res ) {
    				s_temp = s_temp.substring(i_res, s_temp.length);
    				//console.log(s_temp);
    			}
    		} while ( !!i_res )
    		return count;
    	}
    	fn.extractWord = function (word) {
    		var arr = word;
    		for (var i = 1; i < arr.length; i++) {
    			// a "i" se le asigna el valor de 1
    			if ( fn.evaluatingLetter(arr[i]) ) {
    				return i;
    			}
    		}    		
    		return false;
    	}
    	fn.evaluatingLetter = function (letter) {
    		return regExp.test(letter);
    	}

    	return fn;
    }

    var cc = new CamelCase();
    console.log( cc.counterOfWord(s) );
}

main();