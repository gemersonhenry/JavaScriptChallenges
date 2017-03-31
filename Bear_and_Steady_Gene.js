function processData(input) {
    //Enter your code here
    var input = "GAAATAAA";

    var ADN = function () {
    	fn = {};

    	fn.printMinLengthSubstring = function (s) {
    		var min = fn.allAccumulatedDiff(s);
    		console.log(min);
    		var min_length = (min.A + min.G + min.C + min.T);
    		var state = fn.runSearchSubstring(s, min, min_length);
    		console.log(state);
    		if ( state ) {
    			console.log(min_length);
    		}
    	}
    	fn.runSearchSubstring = function (s, min, min_length) {    		
    		var s_substring;
    		for (var i = 0; i < min.MIN; i++) {
    			s_substring = s.substring(i, i + min_length);
    			console.log(s_substring);
    			if ( fn.searchSubstringInString(s_substring, min) ) {    				
    				return true;
    			}
    		}
    		return false;
    	}
    	fn.searchSubstringInString = function (sub_string, min) {
    		var min_s = fn.allAccumulatedLetters(sub_string);
    		if ( min_s.A==min.A && min_s.C==min.C && min_s.G==min.G && min_s.T==min.T) {
    			return true;
    		}
    		return false;
    	}
    	fn.allAccumulatedLetters = function (s) {
    		var num_A = fn.accumulatedLetters(s, "A");
    		var num_C = fn.accumulatedLetters(s, "C");
    		var num_G = fn.accumulatedLetters(s, "G");
    		var num_T = fn.accumulatedLetters(s, "T");
    		var quarter = (s.length)/4;
    		return { A:num_A, C:num_C, G:num_G, T:num_T, quarter:quarter};
    	}
    	fn.allAccumulatedDiff = function (s) {
    		var allAccuml = fn.allAccumulatedLetters(s);
    		console.log(allAccuml);
    		return fn.getMinAccumulated(allAccuml.A, allAccuml.C, allAccuml.G, allAccuml.T);
    	}
    	fn.accumulatedLetters = function (s, letter) {
    		var s_length = s.length;
    		var count = 0;
    		for (var i = 0; i < s_length; i++) {
    			if ( s[i] === letter ) {
    				count++;
    			}
    		}
    		return count;
    	}
    	fn.getMinAccumulated = function (num_A, num_C, num_G, num_T) {    		
    		var m = num_A;
    		if ( num_C < m ) {
    			m = num_C;
    		} else if ( num_G < m ) {
    			m = num_G;
    		} else if ( num_T < m ) {
    			m = num_T;
    		}
    		return { A:(num_A-m), C:(num_C-m), G:(num_G-m), T:(num_T-m), MIN:(m*4) };
    	}

    	return fn;
    }

    var adn = new ADN();
    adn.printMinLengthSubstring(input);
} 

processData();