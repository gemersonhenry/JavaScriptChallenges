/**
 * Formas de ingresar un valor al input:
 * 1. Escribiendo valor por valor (presionando teclado)
 * 2. Copiando y pegando (combinación de teclado)
 */
var number_arr = [
	3456, 1094298, 0045, "00026354", "1,987", "45,234,098", "0000", 0, "0", "henry"
]

function formatNumber ( input )
{
	var _input = input;
	if ( !validateTypeString(_input) )
		_input = convertNumberToString(_input);
	_input = rebuildNumber(_input);
	_input = removeInitialZerosOfTheNumber(_input);
	_input = addEspecialCharacterPosition( _input, 6, "," );
	_input = addEspecialCharacterPosition( _input, 3, "," );
	return _input;
}

/**
 * @param  {string} _value [ingresa un número  en formato string con caracteres especiales]
 * @return {string}        [sale un número en formato string sin caracteres especiales]
 */
function rebuildNumber ( _value )
{
	var regexp = new RegExp("\\d");
	var _value_arr = _value.split(""); // convertimos string en array
	for (var i = (_value_arr.length-1); i >= 0 ; i--)
	{
		if ( !regexp.test( _value_arr.slice(i,i+1).join("") ) )
			_value_arr.splice(i,1);
	}
	return _value_arr.join(""); // convertimos el array en string y retornamos
}

/**
 * [addEspecialCharacterPosition]
 * Esta función recibe 3 parametros y está creada para insertar un caracter especial
 * en la posición que se indique (posición contada a partir de la izquierda)
 * @param {string} _value     [número en formato string]
 * @param {number} _position  [un digito (debido a que máximo son 9 digitos)]
 * @param {string} _character [caracter especial que se desea insertar]
 */
function addEspecialCharacterPosition ( _value, _position, _character )
{
	var _position = _position;
	var _value_arr = _value.split("");
	var _value_arr_length = _value_arr.length;
	if ( _value_arr_length > _position )
		_value_arr.splice( _value_arr_length - _position, 0, _character );
	return _value_arr.join("");	
}

/**
 * @param  {string} _value [string con valor numérico y ceros iniciales]
 * @return {string}        [string con valor numérico y ceros iniciales eliminados]
 */
function removeInitialZerosOfTheNumber ( _value ) 
{
	var _value_arr = _value.split(""); // convertimos string en array
	while ( _value_arr.slice(0,1).join("") === "0" )
		_value_arr.splice(0,1);
	/*if ( _value_arr.join("") === "" )
		return "0";
	else*/
	return _value_arr.join(""); // convertimos el array en string y retornamos
}

/**
 * @param  {string} _string [validando si la entrada es de tipo string]
 * @return {boolean}         [se devuelve un boolean]
 */
function validateTypeString ( _string ) 
{
	if ( typeof _string === "string" )
		return true;
	else
		return false;
}

/**
 * @param  {number} _number [entrada de tipo number]
 * @return {string}         [salida de tipo string]
 */
function convertNumberToString ( _number ) {
	var _str = _number + "";
	return _str;
}

/**
 * @param  {string} _string [entrada de tipo string]
 * @return {number}         [salida de tipo number]
 */
function convertStringToNumber ( _string ) {
	var _num = parseInt( _string );
	return _num;
}





for (var i = 0; i < number_arr.length; i++) {
	console.log( formatNumber( number_arr[i] ) );
}