yOSON.AppCore.addModule("range-format", function (Sb) {

	let st, initialize, dom, event, fn, suscribeEvents, catchDom, intervalInputFocus, inputTemporal;
	const INPUTFOCUS = "js-input-activate-focus";
	st = {
		numberFormat: ".js-number-format",
		inputActivateFocus: "."+INPUTFOCUS
	};

	dom = {};

	catchDom = () => {
		dom.numberFormat = $(st.numberFormat);
		//dom.inputActivateFocus = $(st.inputActivateFocus); //423,254,23459798
	}

	suscribeEvents = () => {
		dom.numberFormat.on("focus", event.focusInputFormat);
		dom.numberFormat.on("blur", event.blurInputFormat);
        Sb.events(["component-range::range-format:rebuild-number"], fn.rebuildNumber2, this);
	}

	event = {};

	event.focusInputFormat = (e) => {
		$(e.target).addClass(INPUTFOCUS);
		$(e.target).attr("id", INPUTFOCUS);
		intervalInputFocus = setInterval( fn.formatNumberInput, 20 );
	}

	event.blurInputFormat = (e) => {
		clearInterval(intervalInputFocus);
		$(e.target).removeClass(INPUTFOCUS);
		$(e.target).attr("id", "");
	}

	fn = {};

	/**
	 * metodo para capturar el input del DOM y reformatearlo
	 */

	fn.formatNumberInput = () => {
		let _inputNumber = $(st.inputActivateFocus).val();
		let _inputTemporal = _inputNumber; // elemento auxiliar para trabajar el focus
		if ( inputTemporal !== _inputNumber ) {
			let _inputFocus = document.getElementById(INPUTFOCUS);
			let _focus = _inputFocus.selectionStart;
			inputTemporal = _inputNumber;
			_inputNumber = fn.formatNumber(_inputNumber);
			$(st.inputActivateFocus).val(_inputNumber);

			// seteando la posición del focus
			let addNumberCharacter = fn.characterEspecial(_inputTemporal, _inputNumber);
			_inputFocus.setSelectionRange(_focus+addNumberCharacter, _focus+addNumberCharacter)
			//log(_inputNumber);
		}
	}

	/**
	 * Métodos para dar formato al valor del input
	 */
	
	fn.formatNumber = (input) => {
		let _input = input;
		if ( !fn.validateTypeString(_input) )
			_input = fn.convertNumberToString(_input);
		_input = fn.rebuildNumber(_input);
		_input = fn.removeInitialZerosOfTheNumber(_input);
		if ( _input.length > 9 )
			_input = fn.cutLengthValue(_input); /* ajuste a nueve digitos */
		if ( _input.length > 6 )
			_input = fn.addEspecialCharacterPosition( _input, 6, "," ); /* agrega una coma si hay más de 6 dígitos */
		if ( _input.length > 3 )
			_input = fn.addEspecialCharacterPosition( _input, 3, "," ); /* agrega una coma si hay más de 3 dígitos */
		return _input;
	}


	fn.rebuildNumber2 = (param, cb) => {
        let min = fn.rebuildNumber(param.min);
        let max = fn.rebuildNumber(param.max);
        let arg = {
            min:min,
            max:max
        };
		//log("rebuildNumber2", arg);
        cb(arg);
	}

	fn.rebuildNumber = (_value) => {
		let regexp = new RegExp("[0-9]");
		let _value_arr = _value.split(""); // convertimos string en array
		for (let i = (_value_arr.length-1); i >= 0 ; i--)
		{
			if ( !regexp.test( _value_arr.slice(i,i+1).join("") ) )
				_value_arr.splice(i,1);
		}
		return _value_arr.join(""); // convertimos el array en string y retornamos
	}

	fn.addEspecialCharacterPosition = (_value, _position, _character) => {
		let _value_arr = _value.split("");
		let _value_arr_length = _value_arr.length;
		if ( _value_arr_length > _position )
			_value_arr.splice( _value_arr_length - _position, 0, _character );
		return _value_arr.join("");	
	}

	fn.removeInitialZerosOfTheNumber = (_value) => {
		let _value_arr = _value.split(""); // convertimos string en array
		while ( _value_arr.slice(0,1).join("") === "0" )
			_value_arr.splice(0,1);
		return _value_arr.join(""); // convertimos el array en string y retornamos
	}

	fn.cutLengthValue = (_value) => {
		return _value.substring(0,9);
	}

	fn.validateTypeString = (_string) => {
		if ( typeof _string === "string" )
			return true;
		else
			return false;
	}

	fn.convertNumberToString = (_number) => {
		let _str = _number + "";
		return _str;
	}

	fn.getStartFocusPosition = (_id) => {
		let _input = document.getElementById(_id);
		return _input.selectionStart;
	}

	fn.characterEspecial = (_init, _fin) => {
		let _n_init = fn.numberCharacter(_init);
		let _n_fin = fn.numberCharacter(_fin);
		return (_n_fin - _n_init);
	}

	fn.numberCharacter = (_value) => {
		let _n = 0;
		for (var i = 0; i < _value.length; i++) {
			if ( _value[i] === ',' )
				_n++;
		}
		return _n;
	}

	initialize = () => {
		//log("[range-format] run");
		catchDom();
		suscribeEvents();
	};

	return {
		init: initialize
	}

});
