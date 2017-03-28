/**
 * DIA 3: SENTENCIAS CONDICIONALES
 */

function main() {
    var N = parseInt("18");
    var outputText;
    
    if ( N%2===1 ) {
    	outputText = "Weird";
    } else {
    	if ( N>=2 && N<=5 ) {
    		outputText = "Not Weird";
    	} else if ( N>=6 && N<=20 ) {
    		outputText = "Weird";
    	} else {
    		outputText = "Not Weird";
    	}
    }
    console.log(outputText);
}

main();