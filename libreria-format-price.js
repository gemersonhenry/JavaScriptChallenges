
let fn;
let format_array = ["999,999", "999,999,999", "999 999", "99,999.99"]; // 1 500

fn = {};


fn.formatNumber = ( numberDOM, numberFormat ) => {

	let _numberDOM = numberDOM;
	let _numberFormat = numberFormat;
	let _numberFormatLengthWhithoutEspecialCharacters = fn.rebuildNumberOnlyWithDigits(_numberFormat).length;
	let _especialCharacterArray = fn.getEspecialCharactersArray(_numberFormat);
	let _especialCharacterArrayLength = _especialCharacterArray.length;

	if ( !fn.validateTypeString(_numberDOM) ) {
		_numberDOM = fn.convertToString(_numberDOM);
	}

	_numberDOM = fn.rebuildNumberOnlyWithDigits(_numberDOM);
	_numberDOM = fn.removeInitialZerosOfTheNumber(_numberDOM);

	// si el número a formatear tiene una cantidad de dígitos que no necesite caracter especial
	if ( _numberDOM.length <= _especialCharacterArray[_especialCharacterArrayLength-1].position ) {
		return _numberDOM;
	}

	// si el número obligatoriamente debe tener caracteres escpeciales
	if ( _numberDOM.length > _numberFormatLengthWhithoutEspecialCharacters ) {
		_numberDOM = fn.cutLengthNumber(_numberDOM, _numberFormatLengthWhithoutEspecialCharacters); 
		/* ajuste a nueve digitos */
	}

	for (var i = 0; i < _especialCharacterArrayLength; i++) {
		if ( _numberDOM.length > _especialCharacterArray[i].position ) {
			_numberDOM = fn.addEspecialCharacterPosition( 
				_numberDOM, 
				_especialCharacterArray[i].especialCharacter, 
				_especialCharacterArray[i].position 
			);
		}
	}
	return _numberDOM;
}

fn.getEspecialCharactersArray = ( numberFormat ) => {
	let regexp = new RegExp("[0-9]");
	let numberFormatArray = numberFormat.split("");
	let numberFormatArrayLength = numberFormatArray.length;
	let especialCharactersArray = [];

	for ( let index = 0; index < numberFormatArrayLength; index++ ) {
		if ( !regexp.test( numberFormatArray[index] ) ) {
			let position = 0;
			for ( let i = index+1; i < numberFormatArrayLength; i++ ) {				
				position = ( regexp.test(numberFormatArray[i]) ) ? (position + 1) : position;				
			}
			let objEspecialCharacter = {
				"position": position,
				"especialCharacter": numberFormatArray[index]
			}
			especialCharactersArray.push(objEspecialCharacter);
		}
	}
	return especialCharactersArray;
}

fn.rebuildNumberOnlyWithDigits = ( dirtyNumber ) => {
	// si la entrada es string vacío entonces devuelve lo mismo
	if ( dirtyNumber === "" ) {
		return "";
	}

	// entrada de un string que tiene dígitos y otros caracteres	
	let regexp = new RegExp("[0-9]");
	let arrayDirtyNumber  = dirtyNumber .split("");
	let arrayDirtyNumberLength = arrayDirtyNumber.length;
	// luego de verificar que el string no sea vacío
	for ( let i = (arrayDirtyNumberLength-1); i >= 0 ; i-- ) {
		if ( !regexp.test( arrayDirtyNumber.slice(i,i+1).join("") ) ) {
			arrayDirtyNumber.splice(i,1);
		}
	}

	// salida de un string que tiene sólo dígitos
	return arrayDirtyNumber.join("");
}

fn.addEspecialCharacterPosition = ( number, especialCharacter, position ) => {
	// 	entrada de un número con o sin caracteres especiales
	let arrayNumber = number.split("");
	let arrayNumberLength = arrayNumber.length;
	if ( arrayNumberLength > position ) { // esta validación es opcional
		arrayNumber.splice( arrayNumberLength - position, 0, especialCharacter );
	}
	// salida de un número con un nuevo caracter especial agregado
	return arrayNumber.join("");
}

fn.removeInitialZerosOfTheNumber = ( number ) => {
	// si el number es vacío
	if ( number === "" ) {
		return "";
	}

	let arrayNumber = number.split(""); // convertimos string en array
	// luego de verificar que el number no sea nulo
	while ( arrayNumber.slice(0,1).join("") === "0" ) {
		arrayNumber.splice(0,1);
	}
	return arrayNumber.join(""); // convertimos el array en string y retornamos
}

fn.cutLengthNumber = ( number, numberLength ) => {
	return number.substring( 0, numberLength );
}

fn.validateTypeString = ( value ) => {
	if ( typeof value === "string" ) {
		return true;
	}
	return false;
}

fn.convertToString = ( value ) => {
	return `${value}`;
}

/**
 * seteando la posición del cursor dentro del input
 */

fn.getDiffOfEspecialCharacters = ( valueBeforeAction, valueAfterAction ) => {
	// aquí ingresan los valores ya formateados
	let _n_valueBeforeAction = fn.getNumberOfEspecialCharacters(valueBeforeAction);
	let _n_valueAfterAction = fn.getNumberOfEspecialCharacters(valueAfterAction);
	// valor positivo o negativo, dependiente del caso
	return (_n_valueAfterAction - _n_valueBeforeAction); 
}

fn.getNumberOfEspecialCharacters = ( numberWithEspecialCharacters ) => {
	// esta función se aplica cuando el número ya fue formateado y sólo
	// tiene los caracteres especiales del formato
	let _numberOfEspecialCharacters = 0;
	let _regexp = new RegExp("[0-9]");
	for (var i = 0; i < numberWithEspecialCharacters.length; i++) {
		if ( !_regexp.test(numberWithEspecialCharacters.slice(i,i+1).join("")) )
			_numberOfEspecialCharacters++;
	}
	return _numberOfEspecialCharacters;
}

fn.getValueOfInputException = ( inputBeforeAction, inputAfterAction ) => {
	// los valores de los input incluyen los caracteres especiales
	let _valueBefore = inputBeforeAction.value;
	let _focusValueBefore = inputBeforeAction.selectionStart;
	let _valueAfter = inputAfterAction.value;
	let _focusValueAfter = inputAfterAction.selectionStart;
	let _regexp = new RegExp("[0-9]");

	// la función se ejecuta cuango el tamaño del número disminuye
	if ( _valueBefore.length > _valueAfter.length ) {
		if ( _focusValueBefore === _focusValueAfter ) {
			// la condición indica que se pulso la tecla "suprimir/delete"
			for (let i = 0; i < _valueAfter.length; i++) {
				if ( _valueAfter[i] !== _valueBefore[i] && !_regexp.test(_valueBefore.slice(i,i+1).join("")) ) {
					_valueAfter.splice( i, 1 );
					// _valueBefore.splice( i+1, 1 );
					break;
				}
			}
		} else {
			// caso contrario se pulso la tecla "backspace/retroceder"
			for (let i = 0; i < _valueAfter.length; i++) {
				if ( _valueAfter[i] !== _valueBefore[i] && !_regexp.test(_valueBefore.slice(i,i+1).join("")) ) {
					_valueAfter.splice( i-1, 1 );
					// _valueBefore.splice( i-1, 1 );
					break;
				}
			}
		}
	}

}


console.log( fn.formatNumber("6542354WER2343", "999,999,999") );

/*

var interval = setInterval( runInterval, 100 );
var $input = document.getElementById("lst-ib");
var $inputLast = {};

function runInterval () {
	$inputLast.focus = 0;
	if ( $input.focus !== $inputLast.focus ) {
		console.log($inputLast);
		var value = $input.value;
		var focus = $input.selectionStart;
		$inputLast.value = value;
		$inputLast.focus = focus;
		console.log(value, focus);		
	}
}


*/