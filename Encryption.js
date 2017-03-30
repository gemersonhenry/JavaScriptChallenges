function main() {
    var s = 'haveaniceday';

    var Encryption = function (texto) {
    	var text = {
    		initial: texto,
    		final: ''
    	}
    	var fn = {};
    	fn.getTextFinal = function () {
    		return text.final;
    	}
    	fn.startEncryption = function () {
    		var t = text.initial;
    		var t_we = fn.extractSpace(text.initial);
    		var rc = fn.getRowsColmunsCorrect(t_we);
    		var array_initial = fn.generateArrayWithoutEncryption(t_we, rc);
    		var array_final = fn.generateArrayWithEncryption(array_initial, rc);
    		//console.log(rc, array_initial, array_final);
    		text.final = array_final.join(' ');
    	}
    	fn.generateArrayWithEncryption = function (arr_initial, rc) {
    		var arr_final = [];
    		for (var i = 0; i < rc.c; i++) {
    			var new_array = '';
    			for (var j = 0; j < rc.r; j++) {
    				var sub_str = arr_initial[j].substring(i,i+1);
    				if ( !!sub_str ) {
    					new_array = new_array + sub_str;	
    				}    				
    			}
    			arr_final.push(new_array);
    		}
    		return arr_final;
    	}
    	fn.generateArrayWithoutEncryption = function (t, rc) {
    		var arr = [];
    		for (var i = 0; i < rc.r; i++) {
    			arr.push( t.substring(i*rc.c, ((i+1)*rc.c)) );
    		}
    		return arr;
    	}
    	fn.extractSpace = function (t) {
    		var es = t.split(' ');
    		es = es.join('');
    		return es;
    	}
    	fn.getRowsColmunsCorrect = function (t) {
    		var n_sqrt = Math.sqrt(t.length);
    		var n_floor = Math.floor(n_sqrt);
    		var n_ceil = Math.ceil(n_sqrt);
    		var t_length = t.length;
    		var temp = {};
    		//console.log(n_sqrt);
    		temp.r = n_floor;
    		temp.c = n_floor;
    		if ( fn.comparateRowsColumns(temp.r, temp.c, t_length) )
    			return temp;

    		temp.r = n_floor;
    		temp.c = n_ceil;
    		if ( fn.comparateRowsColumns(temp.r, temp.c, t_length) )
    			return temp;

    		temp.r = n_ceil;
    		temp.c = n_ceil;
    		if ( fn.comparateRowsColumns(temp.r, temp.c, t_length) )
    			return temp;
    	}
    	fn.comparateRowsColumns = function (r, c, tl) {
    		var rec = r * c;
    		if ( rec >= tl && (rec-tl)>=0 )
    			return true;
    		else
    			return false;
    	}
    	return fn;
    }

    var encryption = new Encryption(s);
    encryption.startEncryption();
    console.log(encryption.getTextFinal());
}

main();