/**
 * @class Type
 * @constructor
 * 		Essa classe não deve ser instanciada.
 * @description
 * 		Type é uma classe com metodos que ajudam a 
 *      verificar o tipo de um determinado valor.
 */

class Type {
    
    constructor() {

        throw new Error('Esse objeto não deve ser instaciado.');
    }
/**
	 * @memberof Type
	 * @method isCEP(cep)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} cep
	 *      @description
	 *          Esse metodo verifica se o valor do parametro cep é um numero de CEP valido.
	 *      @return {Boolean}
	 *          Retorna true se for CEP.
	 *          Retorna false se não for CEP.
	 */

	static isCEP( cep ) {

        let _cep = Utility.removeWhiteSpace(cep);
		let _regexCEP = /^([0-9]{5})[\-]?([0-9]{3})$/;

		_cep.length === 0 ? _cep = "false" : _cep
			
		return _regexCEP.test(_cep);
	};

   
    /**
     * @memberof Type
     * @method isConfPassword(form)
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro date
     * 			@param {String} date
     * 				Pode receber uma date em ENG('aaaa-mm-dd') ou PT('dd-mm-aaaa').
     * 			@description
     * 				Esse metodo verifica se o valor do parametro date é uma data valida.
     * 			@return {String || Throw}
     * 				Retorna true se for data valida;
     * 				Retorna false se não for data valida.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static isConfPassword(form) {
        
        let _inputsPassword = form.find('[type="password"]');
        let _quantityInputs = _inputsPassword.length;
        let _password;
        let _confPassword;

        if( _quantityInputs === 2 ) {

            _password = _inputsPassword.eq(0).val();
            _confPassword = _inputsPassword.eq(1).val();

            // console.log(_password === _confPassword);
            return _password === _confPassword;
        }

        return true;
    }


	
	/**
	 * @memberof Type
	 * @method isCPF(cpf)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} cpf
	 *      @description
	 *          Esse metodo verifica se o valor do parametro cpf é um cpf valido.
	 *      @return {Boolean}
	 *          Retorna true se for cpf.
	 *          Retorna false se não for cpf.
	 */

	static isCPF( cpf ) {

        let _cpf = Utility.removeWhiteSpace(cpf);
		let _regexCPF = /^([0-9]{3})[\.]?([0-9]{3})[\.]?([0-9]{3})[\-]?([0-9]{2})$/;

		_cpf.length === 0 ? _cpf = "false" : _cpf
			
		return _regexCPF.test(_cpf);
	};

    
    
    /**
     * @memberof Type
     * @method isNumber(value)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} value
     *      @description
     *          Esse metodo verifica se o valor é um numero.
     *      @return {Boolean}
     *          Retorna true se for um numero.
     *          Retorna false se não for numero.
     */

    static isNumber(value) {
        
        let _value = Utility.removeWhiteSpace(value);
        let _regexNumber = /^[\-]?[0-9]+$/g;

        _value.length === 0 ? _value = "false" : _value

        return _regexNumber.test(_value);
    }

	
	/**
	 * @memberof Type
	 * @method isPhone(phone)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} phone
	 *      @description
	 *          Esse metodo verifica se o valor do parametro phone é um numero de telephone/celular valido.
	 *      @return {Boolean}
	 *          Retorna true se for telephone.
	 *          Retorna false se não for telephone/celular.
	 */

	static isPhone( phone ) {

        let _phone = Utility.removeWhiteSpace(phone);
		let _regexPhone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

		_phone.length === 0 ? _phone = "false" : _phone
			
		return _regexPhone.test(_phone);
	};

/**
	 * @memberof Type
	 * @method isRG(rg)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} rg
	 *      @description
	 *          Esse metodo verifica se o valor do parametro rg é um numero de RG valido.
	 *      @return {Boolean}
	 *          Retorna true se for RG.
	 *          Retorna false se não for RG.
	 */

	static isRG( rg ) {

        let _rg = Utility.removeWhiteSpace(rg);
		let _regexRG = /^([0-9]{1})[\.]?([0-9]{3})[\.]?([0-9]{3})$/;

		_rg.length === 0 ? _rg = "false" : _rg
			
		return _regexRG.test(_rg);
	};

    
    
    /**
     * @memberof Type
     * @method isLetter(value)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} value
     *      @description
     *          Esse metodo verifica se o valor é uma letra do alfabeto.
     *      @return {Boolean}
     *          Retorna true se for letra do alfabeto.
     *          Retorna false se não for letra do alfabeto.
     */

    static isLetter(value) {
        
        let _value = Utility.removeWhiteSpace(value);
        let _regexLetter = /[0-9\_\!\"\#\$\%\&\'\,\(\)\*\+\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\€\‚\„\…\†\‡\‰\‹\‘\’\“\”\•\–\—\˜\™\›\¡\¢\£\¤\¥\¦\§\¨\©\«\¬\®\¯\°\±\²\³\´\¶\·\¸\¹\»\¼\½\¾\¿\×\÷]/;

        _value.length === 0 ? _value = "fals3" : _value
        
        return !_regexLetter.test(_value);
    }

    
    
    /**
     * @memberof Type
     * @method isDate(language,date)
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro date
     * 			@param {String} date
     * 				Pode receber uma date em ENG('aaaa-mm-dd') ou PT('dd-mm-aaaa').
     * 			@description
     * 				Esse metodo verifica se o valor do parametro date é uma data valida.
     * 			@return {String || Throw}
     * 				Retorna true se for data valida;
     * 				Retorna false se não for data valida.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static isDate(language, date) {
        
        let _language = ('' + language).toLowerCase();
        let _date = Utility.removeWhiteSpace(date);
        let _regexDate;
        
        if(_language === 'eng') 
            _regexDate = /^([0-9]{4})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{1,2})$/;
            
        else if (_language === 'pt')
            _regexDate = /^([0-9]{1,2})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{4})$/;
        
        else
            throw new Error('Valor do parametro language esta invalido');
        
        return _regexDate.test(_date);
    }

    
    
    /**
     * @memberof Type
     * @method isDateTime(language,dateTime)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} language
     * 	        'ENG' || 'PT' determina o idioma do parametro dateTime
     *      @param {String} dateTime
     * 	        Pode receber uma datetime em ENG('aaaa-mm-ddT00:00') ou PT('dd-mm-aaaaT00:00').
     *      @description
     * 	        Esse metodo verifica se o valor do parametro dateTime é um datetime valido.
     *      @return {Boolean}
     * 	        Retorna true se for um datetime valido.
     * 	        Retorna false se não for um datetime valido.
     * 	        Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static isDateTime(language, dateTime) {
       
        let _language = ('' + language).toLowerCase();
        let _dateTime = Utility.removeWhiteSpace(dateTime);
        let _regexDateTime;
        let _regexTime = '\T?([0-9]{2})\:([0-9]{2})$';
        let _regexDate;
        
        if(_language === 'eng') 
            _regexDate = '^([0-9]{4})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{1,2})';
        
        else if (_language === 'pt')
            _regexDate = '^([0-9]{1,2})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{4})';
        
        else
            throw new Error('Valor do parametro language esta invalido');

        
        _regexDateTime = RegExp(_regexDate + _regexTime);

        return _regexDateTime.test(_dateTime);
    }

	
	
	/**
	 * @memberof Type
	 * @method isEmail(email)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} email
	 *      @description
	 *          Esse metodo verifica se o valor do parametro email é um email valido.
	 *      @return {Boolean}
	 *          Retorna true se for email.
	 *          Retorna false se não for email.
	 */

	static isEmail(email) {

		let _email = Utility.removeWhiteSpace(email);
		let _regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

		_email.length === 0 ? _email = "false" : _email
			
		return _regexEmail.test(_email);
	};


    
    
    /**
     * @memberof Type
     * @method isMonth(language,month)
     * 			@public
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro month.
     * 			@param {String} month
     * 				Pode receber um mes em ENG('aaaa-mm') ou PT('mm-aaaa').
     * 			@description
     * 				Esse metodo verifica se o valor do parametro month é um mes valido.
     * 			@return {String || Throw}
     * 				Retorna true se for um mes valido;
     * 				Retorna false se não for um mes valido.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */


    static isMonth(language, month) {
        
        let _language = ('' + language).toLowerCase();
        let _month = Utility.removeWhiteSpace(month);
        let _regexMonth;

        if(_language === 'eng')
            _regexMonth = /^([0-9]{4})[\/|\-]([0-9]{1,2})$/;
        
        else if (_language === 'pt')
            _regexMonth = /^([0-9]{1,2})[\/|\-]([0-9]{4})$/;

        else
            throw new Error('Valor do parametro language esta invalido');

        return _regexMonth.test(_month);
    }

    
    
    /**
     * @memberof Type
     * @method isSpecialCharacter(value)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} value
     *      @description
     *          Esse metodo verifica se o valor é um caracter especial.
     *      @return {Boolean}
     *          Retorna true se for caracter especial.
     *          Retorna false se não for caracter especial.
     */

    static isSpecialCharacter(value) {
        
        let _value = Utility.removeWhiteSpace(value);
        let _regexSpecialCharacter = /[^\_\!\"\#\$\%\&\'\,\(\)\*\+\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\€\‚\„\…\†\‡\‰\‹\‘\’\“\”\•\–\—\˜\™\›\¡\¢\£\¤\¥\¦\§\¨\©\«\¬\®\¯\°\±\²\³\´\¶\·\¸\¹\»\¼\½\¾\¿\×\÷]/;

        _value.length === 0 ? _value = "false" : _value
        
        return !(_regexSpecialCharacter.test(_value));
    }


    
    /**
     * @memberof Type
     * @method isTime(time)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} time
     * 			'00:00'
     *      @description
     *          Esse metodo verifica se o valor do parametro time é um time valido.
     *      @return {Boolean}
     *          Retorna true se for time valido.
     *          Retorna false se não for time valido.
     */

    static isTime(time) {
        
        let _time = Utility.removeWhiteSpace(time);
        let _regexTime = /^([0-9]{2})\:([0-9]{2})$/;

        return _regexTime.test(_time);
    }


	
	/**
	 * @memberof Type
	 * @method isUrl(url)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} url
	 *      @description
	 *          Esse metodo verifica se o valor do parametro url é um url valida.
	 *      @return {Boolean}
	 *          Retorna true se for url.
	 *          Retorna false se não for url.
	 */

	static isUrl( url ) {

		let _url = Utility.removeWhiteSpace(url);
		let _regexUrl = /^(http|https):(\/\/)[\w]+$/;

		_url.length === 0 ? _url = "false" : _url
			
		return _regexUrl.test(_url);
	};

    
    
    /**
     * @memberof Type
     * @method isWeek(language,week)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} language
     * 			'ENG' || 'PT' determina o idioma do parametro week
    * 		@param {String} week
    * 			Pode receber uma semana em ENG('aaaa-Wss') ou PT('ssW-aaaa').
    *      @description
    *          Esse metodo verifica se o valor do parametro week é uma semana valida.
    *      @return {Boolean || Throw}
    *          Retorna true se for semana valida.
    *          Retorna false se não for semana valida.
    *          Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
    */

    static isWeek(language, week) {
        
        let _language = ('' + language).toLowerCase();        
        let _week = Utility.removeWhiteSpace(week);
        let _regexWeek;
        
        if(_language === 'eng')
            _regexWeek = /^([0-9]{4})\-[W]{1}([0-9]{2})$/;

        else if (_language === 'pt')
            _regexWeek = /^([0-9]{2})[W]?\-([0-9]{4})$/;
        
        else
            throw new Error('Valor do parametro language esta invalido');

        return _regexWeek.test(_week);
    }

}