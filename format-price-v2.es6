yOSON.AppCore.addModule("range-format", function () {

	let st, initialize, dom, event, fn, suscribeEvents, catchDom, intervalInputFocus;

	st = {
		numberFormat: ".js-number-format",
		inputActivateFocus: "js-input-activate-focus",
		body: "body"
	};

	dom = {};

	catchDom = () => {
		dom.numberFormat = $(st.numberFormat);
		dom.inputActivateFocus = $(st.inputActivateFocus);
		dom.body = $(st.body);
	}

	suscribeEvents = () => {
		dom.numberFormat.on("focus", event.focusInputFormat);
		dom.numberFormat.on("blur", event.blurInputFormat);
	}

	event = {};

	event.focusInputFormat = (e) => {
		$(e.target).addClass("js-input-activate-focus");
		let inputActivateFocus = $(".js-input-activate-focus");
		intervalInputFocus = setInterval(function () {
			console.log(inputFocus.val());
		}, 20);
	}

	event.blurInputFormat = (e) => {
		$(e.target).removeClass("js-input-activate-focus");
	}

	fn.formatNumberForm = (_this) => {
		let _inputNumber = _this.val();
		_inputNumber = fn.formatNumber(_inputNumber);
		_this.val(_inputNumber);
		console.log(_inputNumber);
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
		_input = fn.addEspecialCharacterPosition( _input, 6, "," );
		_input = fn.addEspecialCharacterPosition( _input, 3, "," );
		return _input;
	}

	fn.rebuildNumber = (_value) => {
		let regexp = new RegExp("\\d");
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

	fn.filterKeyCode = (_keyCode) => {
		let _keyCode_arr = [
			17, /* Control */
			37, /* izquierda */
			38, /* arriba */
			39, /* derecha */
			40, /* abajo */
			46, /* suprimir */
		];
		for (var i = 0; i < _keyCode_arr.length; i++) {
			if ( _keyCode_arr[i] == _keyCode )
				return true;
		}
		return false;
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

/*


var intervalInputFocus;
$(".js-type-number").on("focus", function () { 
	$(this).addClass("input-focus");
	var inputFocus = $(".input-focus");
	intervalInputFocus = setInterval(function () {
		console.log(inputFocus.val());
	}, 20);
});

$(".js-type-number").on("blur", function () { 
	clearInterval(intervalInputFocus);
	$(this).removeClass("input-focus") 
});

 */