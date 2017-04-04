function processData(input) {
    //Enter your code here
    var all = input.split('\n');
    // se obtiene un arreglo donde el primer elemento es un numero y los demas son strings
    var n = parseInt(all[0]);
    var string_even;
    var string_odd;
    
    for ( var i = 1; i <= n; i++ ) {
        string_even = '';
        string_odd = '';
        for ( var j = 0; j < all[i].length; j++ ) {
            if ( j%2===0 ) {
                string_even = string_even + all[i][j];
            } else {
                string_odd = string_odd + all[i][j];
            }
        }
        console.log(string_even + ' ' + string_odd);
    }
} 

var input = "2\nHacker\nRank";
processData(input);