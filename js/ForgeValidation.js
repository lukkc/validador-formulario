/**
 * @class Utility
 * @constructor
 * 		Essa classe não deve ser instanciada.
 * @description
 * 		Utility é uma classe que possui metodos
 *  	auxiliares e utilitarios.
 * @implements
 * 		Type
 * 			.isDate
 * 			.isWeek()
 * 			.isDateTime()
 */

class Utility {
    
    constructor(){
 
        throw new Error('Esse objeto não deve ser instaciado.');	
    }
    
    
    /**
     * @memberof Utility
     * @method trim(value)
     * 			@public
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo utiliza uma expressao regular que retira
     * 				os espaços em branco do inicio e do final da String.
     * 			@return {String}
     * 				Retorna a String sem os espaços em branco.
     */

    static trim(value) {

        let _value = ('' + value);
        let regexTrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        
        return _value.replace(regexTrim, '');
    }

    
    
    /**
     * @memberof Utility
     * @method removeWhiteSpace(value)
     * 			@public
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo utiliza uma expressao regular que retira
     * 				todos os espaços em branco da String.
     * 			@return {String}
     * 				Retorna a String sem os espaços em branco.
     */

    static removeWhiteSpace(value) {

        let _value = ('' + value);
        let regexWhiteSpace = /\s/g;

        return _value.replace(regexWhiteSpace, '');
    }

    
    
    /**
     * @memberof Utility
     * @method getTimeFromDatetime(language,dateTime)
     * 			@private 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro datetime
     * 			@param {String} dateTime
     * 				Pode receber uma datetime em ENG('aaaa-mm-ddT00:00') ou PT('dd-mm-aaaaT00:00').
     * 			@description
     * 				Esse metodo obtem o time de um datetime.
     * 			@return {String || Throw}
     * 				Retorna o time.
     * 				Retorna Throw com a mensagem de erro, se o datetime for diferente do formato definido.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static getTimeFromDatetime(language, dateTime) {
        
        let _language = ('' + language).toLowerCase();
        let _regexDateTime;
        let _time;

        if(_language !== 'pt' && _language !== 'eng')
            throw new Error('Valor do parametro language esta invalido');

        if(!(Type.isDateTime(_language, dateTime)))
            throw new Error('Valor do parametro datetime esta invalido');

        _regexDateTime = Utility._getRegexDatetime(_language)
        _time =  dateTime.replace(_regexDateTime, '$4:$5');

        return _time;
    }

    
    
    /**
     * @memberof Utility
     * @method _getRegexDatetime(language)
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@param {String} language
     * 				'ENG' || 'PT'
     * 			@description
     * 				Esse metodo obtem a expressao regular de um datetime de acordo com o idioma;
     * 			@return {RegExp || Throw}
     * 				Retorna /^([0-9]{4})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{1,2})\T?([0-9]{2})\:([0-9]{2})$/
     * 				se o idioma for 'ENG'.
     * 				Retorna /^([0-9]{1,2})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{4})\T?([0-9]{2})\:([0-9]{2})$/
     * 				se o idioma for 'PT'.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static _getRegexDatetime(language) {
        
        let _language = ('' + language).toLowerCase();
        let _regexDateENG = '^([0-9]{4})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{1,2})';
        let _regexDatePT = '^([0-9]{1,2})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{4})';
        let _regexTime = '\T?([0-9]{2})\:([0-9]{2})$';

        if(_language === 'pt')
            return RegExp(_regexDatePT + _regexTime);

        if (_language === 'eng')
            return RegExp(_regexDateENG + _regexTime);

        throw new Error('Valor de paramtro invalido')
    }

    
    
    /**
     * @memberof Utility
     * @method getDateFromDatetime(language,dateTime)
     * 			@private 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro dateTime
     * 			@param {String} dateTime
     * 				Pode receber uma datetime em ENG('aaaa-mm-ddT00:00') ou PT('dd-mm-aaaaT00:00').
     * 			@description
     * 				Esse metodo obtem a data de um datetime.
     * 			@return {String || Throw}
     * 				Retorna a data;
     * 				Retorna Throw com a mensagem de erro, se o datetime for diferente do formato definido.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static getDateFromDatetime(language, dateTime) {
        
        let _language = ('' + language).toLowerCase();
        let _regexDateTime;
        let _date;

        if(_language !== 'pt' && _language !== 'eng')
            throw new Error('Valor do parametro language esta invalido');

        if(!(Type.isDateTime(_language, dateTime)))
            throw new Error('Valor do parametro datetime esta invalido');

        _regexDateTime = Utility._getRegexDatetime(_language)
        _date = dateTime.replace(_regexDateTime, '$1-$2-$3');
        
        return Utility.addZeroOnDate(language, _date);
    }

    
    
    /**
     * @memberof Utility
     * @method compareWeekIsGreaterThanOrEqual(language,week1,week2)
     * 			@public
     *  			Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro week1
     * 			@param {String} week1
     * 				Pode receber uma semana em ENG('aaaa-Wss') ou PT('ssW-aaaa').
     * 			@param {String} week2
     * 				Sempre recebe uma semana no idioma ENG('aaaa-Wss')
     * 			@description
     * 				Esse metodo verifica se o parametro week1 é maior ou igual
     * 				ao parametro week2.
     * 			@return {Boolean}
     * 				Retorna true se for maior ou igual, e falso se não for.
     */

    static compareWeekIsGreaterThanOrEqual(language, week1, week2) {
        
                let _language = ('' + language).toLowerCase();
                let _regexWeekENG = /^([0-9]{4})\-[W]?([0-9]{2})$/;
                let _regexWeekPT = /^([0-9]{2})[W]?\-([0-9]{4})$/;
        
                if(_language !== 'pt' && _language !== 'eng')
                    return false;
                
                if(!Type.isWeek(_language, week1) || !Type.isWeek('eng', week2))
                    return false;
        
                if(_language === 'pt'){
                    week1 = week1.replace(_regexWeekPT, '$2-$1');
                } else {
                    week1 = week1.replace(_regexWeekENG, '$1-$2');
                } 
        
                week2 = week2.replace(_regexWeekENG, '$1-$2');
        
                return week1 >= week2;
            }

    
    
    /**
     * @memberof Utility
     * @method compareWeekIsLessThanOrEqual(language,week1,week2)
     * 			@public
     *  			Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro week1
     * 			@param {String} week1
     * 				Pode receber uma semana em ENG('aaaa-Wss') ou PT('ssW-aaaa').
     * 			@param {String} week2
     * 				Sempre recebe uma semana no idioma ENG('aaaa-Wss')
     * 			@description
     * 				Esse metodo verifica se o parametro week1 é menor ou igual
     * 				ao parametro week2.
     * 			@return {Boolean}
     * 				Retorna true se for menor ou igual, e falso se não for.
     */

    static compareWeekIsLessThanOrEqual(language, week1, week2) {

        let _language = ('' + language).toLowerCase();
        let _regexWeekENG = /^([0-9]{4})\-[W]?([0-9]{2})$/;
        let _regexWeekPT = /^([0-9]{2})[W]?\-([0-9]{4})$/;

        if(_language !== 'pt' && _language !== 'eng')
            return false;
        
        if(!Type.isWeek(_language, week1) || !Type.isWeek('eng', week2))
            return false;

        if(_language === 'pt'){
            week1 = week1.replace(_regexWeekPT, '$2-$1');
        } else {
            week1 = week1.replace(_regexWeekENG, '$1-$2');
        } 

        week2 = week2.replace(_regexWeekENG, '$1-$2');

        return week1 <= week2;
    }

    
    
    /**
     * @memberof Utility
     * @method compareDateTimeIsGreaterThanOrEqual(language,dateTime1,dateTime2)
     * 			@public
     *  			Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro dateTime1
     * 			@param {String} dateTime1
     * 				Pode receber uma datetime em ENG('aaaa-mm-ddT00:00') ou PT('dd-mm-aaaaT00:00').
     * 			@param {String} dateTime2
     * 				Sempre recebe uma datetime no idioma ENG('aaaa-mm-ddT00:00')
     * 			@description
     * 				Esse metodo verifica se o parametro dateTime1 é maior ou igual
     * 				ao parametro dateTime2. 
     * 			@return {Boolean}
     * 				Retorna falso se o parametro language for diferente de 'ENG' e 'PT'.
     * 				Retorna falso se os datetime1 e datetime2 forem diferente do formato definido.
     * 				Retorna true se for maior ou igual, e falso se não for.
     */

    static compareDateTimeIsGreaterThanOrEqual(language, dateTime1, dateTime2) {
        
        let _language = ('' + language).toLowerCase();
        let _notDatetime1;
        let _notDatetime2;
        let _date1;
        let _time1; 
        let _date2;
        let _time2;

        if(_language !== 'pt' && _language !== 'eng')
            return false;

        _notDatetime1 = !(Type.isDateTime(_language, dateTime1));
        _notDatetime2 = !(Type.isDateTime('eng', dateTime2));
        
        if( _notDatetime1 || _notDatetime2 )
            return false;
        
        _date1 = this.getDateFromDatetime(_language, dateTime1);
        _time1 = this.getTimeFromDatetime(_language, dateTime1); 
        _date2 = this.getDateFromDatetime('eng', dateTime2);
        _time2 = this.getTimeFromDatetime('eng', dateTime2);

        if( _date1 === _date2 )
            return _time1 >= _time2;

        return _date1 >= _date2;
    }

    
    
    /**
     * @memberof Utility
     * @method compareDateTimeIsLessThanOrEqual(language,dateTime1,dateTime2)
     * 			@public
     *  			Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro dateTime1
     * 			@param {String} dateTime1
     * 				Pode receber uma datetime em ENG('aaaa-mm-ddT00:00') ou PT('dd-mm-aaaaT00:00').
     * 			@param {String} dateTime2
     * 				Sempre recebe uma datetime no idioma ENG('aaaa-mm-ddT00:00')
     * 			@description
     * 				Esse metodo verifica se o parametro dateTime1 é menor ou igual
     * 				ao parametro dateTime2. 
     * 			@return {Boolean}
     * 				Retorna falso se o parametro language for diferente de 'ENG' e 'PT'.
     * 				Retorna falso se os datetime1 e datetime2 forem diferente do formato definido.
     * 				Retorna true se for menor ou igual, e falso se não for.
     */

    static compareDateTimeIsLessThanOrEqual(language, dateTime1, dateTime2) {
        
        let _language = ('' + language).toLowerCase();
        let _notDatetime1;
        let _notDatetime2;
        let _date1;
        let _time1; 
        let _date2;
        let _time2;

        if(_language !== 'pt' && _language !== 'eng')
            return false;

        _notDatetime1 = !(Type.isDateTime(_language, dateTime1));
        _notDatetime2 = !(Type.isDateTime('eng', dateTime2));
        
        if( _notDatetime1 || _notDatetime2 )
            return false;
        
        _date1 = this.getDateFromDatetime(_language, dateTime1);
        _time1 = this.getTimeFromDatetime(_language, dateTime1); 
        _date2 = this.getDateFromDatetime('eng', dateTime2);
        _time2 = this.getTimeFromDatetime('eng', dateTime2);

        if( _date1 === _date2 )
            return _time1 <= _time2;

        return _date1 <= _date2;
    }

    
    
    /**
     * @memberof Utility
     * @method addZeroOnMonth(language,month)
     * 			@public
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro month
     * 			@param {String} month
     * 				Pode receber um mes em ENG('aaaa-mm') ou PT('mm-aaaa').
     * 			@description
     * 				Esse metodo adiciona zero no valor de mês se ele for de 1 - 9.
     * 				Sempre vai retornar o mes no idioma ENG.
     * 			@example
     * 				se mes 1-2000, o retorno fica 2000-01
     * 				se mes 2000-2, o retorno fica 2000-02
     * 			@return {String || Throw}
     * 				Retorna o mes;
     * 				Retorna Throw com a mensagem de erro, se o mes for diferente do formato definido.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static addZeroOnMonth(language, month) {
        
        let _language = ('' + language).toLowerCase();	
        let _regexMonthENG = /^([0-9]{4})[\/|\-]([0-9]{1,2})$/;
        let _regexMonthPT = /^([0-9]{1,2})[\/|\-]([0-9]{4})$/;
        let _month;

        if(!(Type.isMonth(_language, month)))
            throw new Error('Valor do parametro month esta invalido');

        if(_language === 'eng')
            month = month.replace(_regexMonthENG, '$1-$2');

        else if(_language === 'pt')
            month = month.replace(_regexMonthPT, '$2-$1');

        else
            throw new Error('Valor do parametro language esta invalido');

        _month = month.replace(_regexMonthENG, '$2');

        if(_month.length == 1)
            month = month.replace(_regexMonthENG, '$1-0$2');

        return month;
    }

    
    
    /**
     * @memberof Utility
     * @method addZeroOnDate(language,date)
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro date
     * 			@param {String} date
     * 				Pode receber uma date em ENG('aaaa-mm-dd') ou PT('dd-mm-aaaa').
     * 			@description
     * 				Esse metodo adiciona zero no valor de dia e de mês se eles forem de 1 - 9.
     * 				Sempre vai retornar a data no idioma ENG.
     * 			@example
     * 				se date 12-1-2000, o retorno fica 2000-01-12
     * 				se date 2000-12-2, o retorno fica 2000-12-02
     * 				se date 3-3-2000, o retorno fica 2000-03-03
     * 			@return {String || Throw}
     * 				Retorna a date;
     * 				Retorna Throw com a mensagem de erro, se a date for diferente do formato definido.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

     static addZeroOnDate(language, date) {
        
        let _language = ('' + language).toLowerCase();
        let _regexDateENG = /^([0-9]{4})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{1,2})$/;
        let _regexDatePT = /^([0-9]{1,2})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{4})$/;
        let _day;
        let _month;

        if(!(Type.isDate(_language, date)))
            throw new Error('Valor do parametro date esta invalido');		
        
        if(_language == 'pt')
            date = date.replace(_regexDatePT, '$3-$2-$1');

        else if(_language == 'eng')
            date = date.replace(_regexDateENG, '$1-$2-$3');

        else
            throw new Error('Valor do parametro language esta invalido');

        _day = date.replace(_regexDateENG, '$3');
        _month = date.replace(_regexDateENG, '$2');
        
        if(_day.length == 1)
            date = date.replace(_regexDateENG, '$1-$2-0$3');

        if(_month.length == 1)
            date = date.replace(_regexDateENG, '$1-0$2-$3');

        return date;
    }
 
} 
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
	 *      @publicX
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
/**
 * @class Component 
 * @constructor
 * 		Essa classe não deve ser instanciada.
 * @description
 * 		Component é uma classe que possui metodos
 *  	de manipulação e verificação para um DOMElement.
 */

class Component {
    
    constructor(element) {
        
        this._element = element;
        this.isValid();
    }


    /**
     * @memberof Component
     * @method getValue() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo obtem o valor do elemento.
     * 			@return {String}
     * 				Retorna o valor do elemento.
     */

    getValue() {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _elementValue = '';
        let _isInput = this.isElement('input');
        let _isSelect = this.isElement('select');
        let _isTextArea = this.isElement('textarea');

        if (_isValidElement) {
            
            if (_isSelect)
                return this._getSelectValue();
            
            if (_isTextArea)
                return this._getTextareaValue();
            
            if(_isInput)	
                return this._getInputValue();
        }
        
        return _elementValue;
    }

    
    
    /**
     * @memberof Component
     * @method setValue(value) 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo define o valor do elemento.
     * 			@return
     * 				Sem retorno.
     */

    setValue(value) {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _value = Utility.trim(value);
        let _isInput = this.isElement('input');
        let _isSelect = this.isElement('select');
        let _isTextArea = this.isElement('textarea');

        if (_isValidElement) {
            
            if (_isSelect)
                this._setSelectValue(_value);
            
            if (_isTextArea)
                this._setTextareaValue(_value);
            
            if (_isInput)	
                this._setInputValue(_value);
        }
    }

   
   
    /**
     * @memberof Component
     * @method isValid() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o parametro passado é um DOM Element <input>,
     *  			<select> ou <texarea>.
     * 			@return {Boolean || Throw}
     * 				Retorna true, se for um elemento valido.
     * 				Retorno throw(false) com a mensagem de erro, se não for um
     * 				elemento valido.
     */

    isValid() {
        
        let _element = this._element;

        if(_element === undefined || _element === null)
            throw new Error('Parametro obrigatorio.')

        this._type();
        this._length();
            
        return true;

    };

   
   
   /**
     * @memberof Component 
     * @method isElement(element) 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o element é do tipo do parametro passado.
     * 			@return {Boolean}
     * 				Retorna true, se for
     * 				Retorno false se não for.
     */

    isElement(element) {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _tagName;

        if(_isValidElement){

            _tagName = _element[0].tagName.toLowerCase();

            return _tagName === `${element}`;
        };

        return false;
    };

   
   
    /**
     * @memberof Component
     * @method isEmpty() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o valor do Element está vazio.
     * 			@return {Boolean}
     * 				Retorna true, se estiver vazio.
     * 				Retorno false se não estiver vazio.
     */

    isEmpty() {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _elementValue = this.getValue();
        _elementValue = Utility.removeWhiteSpace(_elementValue);

        return _elementValue.length === 0 ;
    }

    
    
    /**
     * @memberof Component
     * @method isChecked() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o Element está marcado como checado.
     * 			@return {Boolean}
     * 				Retorna true, se estiver marcado.
     * 				Retorno false se não estiver marcado.
     */

    isChecked() {
        
        let _element = this._element;
        let _isInput = this.isElement('input');
        let _elementType = this.getAttrValue('type');

        if(_isInput){

            _elementType.toLowerCase();

            if (_elementType === "radio" || _elementType === "checkbox") {
                return _element.is(":checked");
            }
        }

        throw new Error('O element não possui uma propriedade checked');
    }

   
   
    /**
     * @memberof Component
     * @method _length() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.		
     * 			@description
     * 				Esse metodo verifica se o comprimento do elemento é igual a 1.
     * 			@return {Throw}
     * 				Retorna throw(false) com a mensagem de erro, se comprimento for
     * 				diferente de 1.
     */

    _length() {

        let _element = this._element;
        
        if(_element.length > 1)
            throw new Error('Tipo de objeto invalido.');

        if(_element.length < 1)
            throw new Error('Tipo de objeto invalido.');

        return true;
    }

    
    
    /**
     * @memberof Component
     * @method _type() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.		
     * 			@description
     * 				Esse metodo verifica se o element é igual
     *              a input, selet ou textarea;
     * 			@return {Throw}
     * 				Retorno throw(false) com a mensagem de erro, se não for igual
     * 				a input, select ou textarea.
     */

    
    _type() {
        
        let _element = this._element;
        let _validElements = ['input', 'select', 'textarea'];
        let _elementTagName;

        try {
            
            _elementTagName = _element[0].tagName.toLowerCase();

            if( !_validElements.some(type => _elementTagName === type) )
                throw new Error('Tipo de objeto invalido.');

            return true;

        } catch (error) {

            throw new Error('Tipo de objeto invalido.');
        }
    }

   
   
   /**
     * @memberof Component
     * @method _getSelectValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <select>.
     * 			@return {String}
     * 				Retorna o valor.
     */

    _getSelectValue() {
        
        let _element = this._element;
        let _isSelect = this.isElement('select');

        if(_isSelect)
            return ('' + _element.find(':selected').val());
    }



    /**
     * @memberof Component
     * @method _getTextareaValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <textarea>.
     * 			@return {String}
     * 				Retorna o valor.
     */

    _getTextareaValue() {
        
        let _element = this._element;
        let _isTextArea = this.isElement('textarea');

        if (_isTextArea)
            return ('' + _element.val());
    }

    
    
    /**
     * @memberof Component
     * @method _getInputValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <input>.
     * 			@return {String}
     * 				Retorna valor.
     */

    _getInputValue() {
        
        let _element = this._element;
        let _isInput = this.isElement('input');
        let _hasAttrSrc = this.hasAttr('src');
        let _elementType = this.getAttrValue('type');

        if(_isInput){
            
            _elementType.toLowerCase();
            
            if(_elementType === "image"){
                
                if(_hasAttrSrc)
                    return this.getAttrValue('src');

                return '';
            } 

            return ('' + _element.val());
        }
    }

    
    
    /**
     * @memberof Component
     * @method _setSelectValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     *	 		@param {String} _value  
    * 			@description
    * 				Esse metodo define o valor de um DOMElement <select>.
    * 			@return
    * 				sem retorno
    */

    _setSelectValue(_value) {
        
        let _element = this._element;
        let _isSelect = this.isElement('select');
        let _elementOption;

        if(_isSelect){

            _elementOption = _element.find(':selected:not(:first-child)');
            _elementOption.attr('value', _value);
        }
    }

    
    
    /**
     * @memberof Component
     * @method _setTextareaValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe
     * 			@param {String} _value  
     * 			@description
     * 				Esse metodo define o valor de um DOMElement <textarea>.
     * 			@return
     * 				Sem retorno
     */

    _setTextareaValue(_value) {
        
        let _element = this._element;
        let _isTextArea = this.isElement('textarea');

        if (_isTextArea)
            _element.attr('value', _value).text(_value);
    }

    
    
    /**
     * @memberof Component
     * @method _setInputValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@param {String} _value  
     * 			@description
     * 				Esse metodo define o valor de um DOMElement <input>.
     * 			@return
     * 				Sem retorno
     */

    _setInputValue(_value) {
        
        let _isInput = this.isElement('input');
        let _hasAttrSrc = this.hasAttr('src');
        let _elementType = this.getAttrValue('type');

        if(_isInput){
            
            _elementType.toLowerCase();
            
            if(_elementType === "image"){
                
                if(_hasAttrSrc)
                   this.setAttrValue('src', _value);
                
                return;	
            } 

            this.setAttrValue('value', _value);
            return;
        }
    }

/**
 * @memberof Component
 * @method getAttrValue(atributo)
 *      @public 
 *          Esse metodo pode ser usado por todos.
 *      @param {String} atributo
 *          Nome de um atributo HTML5
 *      @description
 *          Esse metodo obtem o valor de um atributo do elemento,
 *          se o elemento possuir o atributo.
 *      @return {String || Throw}
 *          Retorna o valor do atributo.
 *          Retorna Throw com mensagem de erro se atributo não existir.
 *  
 */

getAttrValue(atributo) {
    
    let _element = this._element;
    let _hasAttr = this.hasAttr(atributo);

    if(_hasAttr)
       return _element.attr(`${atributo}`);
    
    else
        return '';
}



/**
 * @memberof Component
 * @method setAttrValue(atributo,value)
 *      @public 
 *          Esse metodo pode ser usado por todos.
 *      @param {String} atributo
 *          Nome de um atributo HTML5
 *      @param {String} value
 *      @description
 *          Esse metodo define o valor de um atributo do elemento,
 *          se o elemento possuir o atributo.
 *      @return {Throw}
 *          Retorna Throw com mensagem de erro se atributo não existir.
 *  
 */

setAttrValue(atributo, value) {
    
    let _element = this._element;
    let _hasAttr = this.hasAttr(atributo);

    if(_hasAttr)
        _element.attr(`${atributo}`, `${value}`);
        
    else
        throw new Error(`O element não possui um atributo ${atributo}`);
}

	
	
	/**
	 * @memberof Component
	 * @method hasAttr(atributo)
	 * 		@public
	 * 				Esse metodo pode ser usado por todos.
	 * 		@description
	 * 				Esse metodo verifica se o elemento tem um determinado atributo.
	 * 		@return {Boolean}
	 * 				Retorna true se contem o atributo.
	 * 				Retorna false se não contem.
	 */

	hasAttr(atributo) {
		
		let _element = this._element;
		let _isValidElement = this.isValid();

		if(_isValidElement)
			return _element.is(`[${atributo}]`);

		return false;
	};


}
class ValidationStates {

    constructor(element) {

        this._element = new Component(element);
        this._validations = {};
    }
    
    
    /**
     * @memberof Validation
     * @method valueMissing()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se o elemento contem o atributo
     *          required. se conter o atributo required, o metodo 
     *          verifica se o valor do elemento está vazio.
     *      @return {Boolean}
     *          Retorna true se o elemento não contem o atributo required.
     *          Retorna true se o elemento contem o atributo required
     *          e o valor for diferente de vazio;
     *          Retorna false se o elemento contem o atributo required
     *          e o valor for vazio.
     */    
    
    valueMissing() {
        
        //para element
        let _element = this._element;
        let _elementHasAttrRequired = _element.hasAttr('required');
        let _elementValueIsEmpty = _element.isEmpty();
        
        //para atributo required do element
        let _attrRequired = _element.getAttrValue('required');


        if( !_elementHasAttrRequired )
            return true;

        return !_elementValueIsEmpty;
    }




	/**
	 * @memberof Validation
	 * @method patternMisMatch()
	 * @description
	 * 		Esse metodo aplica a expressao regular do atributo pattern
	 * 	 	do elemento.
	 * @return {Boolean}
	 * 		Retorna true se o valor do elemento fizer match com o pattern.
	 * 		Retorna false se o valor do elemento não fizer match com o pattern. 
 	*/

	patternMisMatch() {

		let _element = this._element;
		let _elementValue = _element.getValue();
		let _elementValueIsEmpty = _element.isEmpty();
		let _hasAttrPattern = _element.hasAttr('pattern');
		let _isInput = _element.isElement('input');
		let _isTextarea = _element.isElement('textarea');
		let _pattern = _element.getAttrValue('pattern');

		if( !_isInput && !_isTextarea || _elementValueIsEmpty )
			return true;

		if( _hasAttrPattern ) {
			
			_pattern = Utility.trim(_pattern);

			if(_pattern.length > 0) {
				
				_pattern = RegExp(_pattern);
				return _pattern.test(_elementValue);
			}
		}

		else 
			return true;
	}

	
	
	/**
	 * @memberof Validation
	 * @method rangerOverFlow()
	 * 		@public
	 * 			Esse metodo pode ser usado por todos
	 * 		@description
	 * 			Esse metodo verifica se um elemento contem o atributo max e,
	 * 			verifica se o valor do elemnento ultrapassa o valor definido
	 * 			no atributo max.
	 * 		@return {Boolean}
	 * 			Retorna true se o valor do elemento for menor ou igual
	 * 			ao valor do atributo max.
	 * 			Retorna false se o valor do elemento for maior que o
	 * 			valor do atributo max.
	 */
	

	rangeOverFlow() {

		//para element
		let _element = this._element;
		let _elementIsInput = _element.isElement('input');
		let _elementHasAttrMax = _element.hasAttr('max');
		let _elementValue = _element.getValue();
			_elementValue = Utility.removeWhiteSpace(_elementValue);
		let _elementValueIsEmpty = _element.isEmpty();

		//para atributo type do element
		let _attrType = _element.getAttrValue('type').toLowerCase();
		let _attrTypeIsNumber = _attrType === 'number';
		let _attrTypeIsRange = _attrType === 'range';
		let _attrTypeIsDate = _attrType === 'date';
		let _attrTypeIsMonth = _attrType === 'month';
		let _attrTypeIsDateTimeLocal = _attrType === 'datetime-local';
		let _attrTypeIsTime = _attrType === 'time';
		let _attrTypeIsWeek = _attrType === 'week';

		//para atributo max do element
		let _attrMax = _element.getAttrValue('max');
		let _attrMaxIsDateENG = Type.isDate('eng', _attrMax);
		let _attrMaxIsDateTimeENG = Type.isDateTime('eng', _attrMax);
		let _attrMaxIsMonthENG = Type.isMonth('eng', _attrMax);
		let _attrMaxIsTime = Type.isTime(_attrMax);
		let _attrMaxIsWeekENG = Type.isWeek('eng', _attrMax);
		let _attrMaxIsNotEmpty = _attrMax !== '';

		//se element com atributo type igual number
		let _elementValueIsNumber = Type.isNumber(_elementValue);

		//se element com atributo type igual date
		let _elementValueIsDatePT = Type.isDate('pt', _elementValue);
		let _elementValueIsDateENG = Type.isDate('eng', _elementValue);

		//se element com atributo type igual month
		let _elementValueIsMonthPT = Type.isMonth('pt', _elementValue);
		let _elementValueisMonthENG = Type.isMonth('eng', _elementValue);

		//se element com atributo type igual datetime-local
		let _elementValueIsDateTimePT = Type.isDateTime('pt', _elementValue);
		let _elementValueIsDateTimeENG = Type.isDateTime('eng', _elementValue);

		//se element com atributo type igual time
		let _elementValueIsTime = Type.isTime(_elementValue);

		//se element com atributo type igual week
		let _elementValueIsWeekPT = Type.isWeek('pt', _elementValue);
		let _elementValueIsWeekENG = Type.isWeek('eng', _elementValue);

		//se element com atributo type igual a qualquer coisa que envolve data
		let _language;

		

		if( !_elementIsInput || !_elementHasAttrMax || !_attrMaxIsNotEmpty || _elementValueIsEmpty )
			return true;


		if ( _attrTypeIsNumber || _attrTypeIsRange ) {
			
			if( _elementValueIsNumber )
				return +_elementValue <= +_attrMax;
			
			return false;
		}
		

		else if( _attrTypeIsDate ) {
			
			if( !_attrMaxIsDateENG )
				return false;

			else if(_elementValueIsDatePT || _elementValueIsDateENG ){
				
				if(_elementValueIsDatePT)
					_language = 'pt';
				
				else if(_elementValueIsDateENG)
					_language = 'eng';
				
				_elementValue = Utility.addZeroOnDate(_language, _elementValue);

				return _elementValue <= _attrMax;
			}

			else
				return false;
		}


		else if( _attrTypeIsMonth ) {

			if( !_attrMaxIsMonthENG )
				return false;

			else if( _elementValueIsMonthPT || _elementValueisMonthENG ){

				if(_elementValueIsMonthPT)
					_language = 'pt';
		
				else if(_elementValueisMonthENG)
					_language = 'eng';
				
				_elementValue = Utility.addZeroOnMonth(_language, _elementValue);

				return _elementValue <= _attrMax;
			}

			else
				return false;
		}
		

		else if( _attrTypeIsDateTimeLocal ) {
			
			if( !_attrMaxIsDateTimeENG )
				return false;
				
			if( _elementValueIsDateTimePT || _elementValueIsDateTimeENG){

				if(_elementValueIsDateTimePT)
					_language = 'pt';
					
				else if(_elementValueIsDateTimeENG)
					_language = 'eng';
			
				return Utility.compareDateTimeIsLessThanOrEqual(_language, _elementValue, _attrMax); 
			}

			else
				return false;
		}
		

		else if( _attrTypeIsTime ) {

			if( !_attrMaxIsTime )
				return false

			else if( _elementValueIsTime )
				return _elementValue <= _attrMax ;

			else
				return false;
		}

		
		else if( _attrTypeIsWeek ) {

			if( !_attrMaxIsWeekENG )
				return false;
				
			if( _elementValueIsWeekPT || _elementValueIsWeekENG ) {

				if( _elementValueIsWeekPT )
					_language = 'pt';
			
				else if( _elementValueIsWeekENG ) 
					_language = 'eng';
				
				return Utility.compareWeekIsLessThanOrEqual(_language, _elementValue, _attrMax) ;
			}

			else
				return false;
		}

		else
        	return true;
	}

	
	
	/**
	 * @memberof Validation
	 * @method rangerUnderFlow()
	 * 		@public
	 * 			Esse metodo pode ser usado por todos
	 * 		@description
	 * 			Esse metodo verifica se um elemento contem o atributo min e,
	 * 			verifica se o valor do elemnento é inferior ao valor definido
	 * 			no atributo min.
	 * 		@return {Boolean}
	 * 			Retorna true se o valor do elemento for maior ou igual
	 * 			ao valor do atributo min.
	 * 			Retorna false se o valor do elemento for menor que o
	 * 			valor do atributo min.
	 */
	

	rangeUnderFlow() {
        
                //para element
                let _element = this._element;
                let _elementIsInput = _element.isElement('input');
                let _elementHasAttrMin = _element.hasAttr('min');
                let _elementValue = _element.getValue();
                    _elementValue = Utility.removeWhiteSpace(_elementValue);
                let _elementValueIsEmpty = _element.isEmpty();
        
                //para atributo type do element
                let _attrType = _element.getAttrValue('type').toLowerCase();
                let _attrTypeIsNumber = _attrType === 'number';
                let _attrTypeIsRange = _attrType === 'range';
                let _attrTypeIsDate = _attrType === 'date';
                let _attrTypeIsMonth = _attrType === 'month';
                let _attrTypeIsDateTimeLocal = _attrType === 'datetime-local';
                let _attrTypeIsTime = _attrType === 'time';
                let _attrTypeIsWeek = _attrType === 'week';
        
                //para atributo min do element
                let _attrMin = _element.getAttrValue('min');
                let _attrMinIsDateENG = Type.isDate('eng', _attrMin);
                let _attrMinIsDateTimeENG = Type.isDateTime('eng', _attrMin);
                let _attrMinIsMonthENG = Type.isMonth('eng', _attrMin);
                let _attrMinIsTime = Type.isTime(_attrMin);
                let _attrMinIsWeekENG = Type.isWeek('eng', _attrMin);
                let _attrMinIsNotEmpty = _attrMin !== '';
        
                //se element com atributo type igual number
                let _elementValueIsNumber = Type.isNumber(_elementValue);
        
                //se element com atributo type igual date
                let _elementValueIsDatePT = Type.isDate('pt', _elementValue);
                let _elementValueIsDateENG = Type.isDate('eng', _elementValue);
        
                //se element com atributo type igual month
                let _elementValueIsMonthPT = Type.isMonth('pt', _elementValue);
                let _elementValueisMonthENG = Type.isMonth('eng', _elementValue);
        
                //se element com atributo type igual datetime-local
                let _elementValueIsDateTimePT = Type.isDateTime('pt', _elementValue);
                let _elementValueIsDateTimeENG = Type.isDateTime('eng', _elementValue);
        
                //se element com atributo type igual time
                let _elementValueIsTime = Type.isTime(_elementValue);
        
                //se element com atributo type igual week
                let _elementValueIsWeekPT = Type.isWeek('pt', _elementValue);
                let _elementValueIsWeekENG = Type.isWeek('eng', _elementValue);
        
                //se element com atributo type igual a qualquer coisa que envolve data
                let _language;
        
                
        
                if( !_elementIsInput || !_elementHasAttrMin || !_attrMinIsNotEmpty || _elementValueIsEmpty )
                    return true;
        
        
                if ( _attrTypeIsNumber || _attrTypeIsRange ) {
                    
                    if( _elementValueIsNumber )
                        return +_elementValue >= +_attrMin;
                    
                    return false;
                }
                
        
                else if( _attrTypeIsDate ) {
                    
                    if( !_attrMinIsDateENG )
                        return false;
        
                    else if(_elementValueIsDatePT || _elementValueIsDateENG ){
                        
                        if(_elementValueIsDatePT)
                            _language = 'pt';
                        
                        else if(_elementValueIsDateENG)
                            _language = 'eng';
                        
                        _elementValue = Utility.addZeroOnDate(_language, _elementValue);
        
                        return _elementValue >= _attrMin;
                    }
        
                    else
                        return false;
                }
        
        
                else if( _attrTypeIsMonth ) {
        
                    if( !_attrMinIsMonthENG )
                        return false;
        
                    else if( _elementValueIsMonthPT || _elementValueisMonthENG ){
        
                        if(_elementValueIsMonthPT)
                            _language = 'pt';
                
                        else if(_elementValueisMonthENG)
                            _language = 'eng';
                        
                        _elementValue = Utility.addZeroOnMonth(_language, _elementValue);
        
                        return _elementValue >= _attrMin;
                    }
        
                    else
                        return false;
                }
                
        
                else if( _attrTypeIsDateTimeLocal ) {
                    
                    if( !_attrMinIsDateTimeENG )
                        return false;
                        
                    if( _elementValueIsDateTimePT || _elementValueIsDateTimeENG){
        
                        if(_elementValueIsDateTimePT)
                            _language = 'pt';
                            
                        else if(_elementValueIsDateTimeENG)
                            _language = 'eng';
                    
                        return Utility.compareDateTimeIsGreaterThanOrEqual(_language, _elementValue, _attrMin); 
                    }
        
                    else
                        return false;
                }
                
        
                else if( _attrTypeIsTime ) {
        
                    if( !_attrMinIsTime )
                        return false
        
                    else if( _elementValueIsTime )
                        return _elementValue >= _attrMin ;
        
                    else
                        return false;
                }
        
                
                else if( _attrTypeIsWeek ) {
        
                    if( !_attrMinIsWeekENG )
                        return false;
                        
                    if( _elementValueIsWeekPT || _elementValueIsWeekENG ) {
        
                        if( _elementValueIsWeekPT )
                            _language = 'pt';
                    
                        else if( _elementValueIsWeekENG ) 
                            _language = 'eng';
                        
                        return Utility.compareWeekIsGreaterThanOrEqual(_language, _elementValue, _attrMin) ;
                    }
        
                    else
                        return false;
                }

                else
                    return true;
            }

	
	
	/**
	 * @memberof Validation
	 * @method stepMisMatch()
	 * 		@public
	 * 			Esse metodo pode ser usado por todos
	 * 		@description
	 * 			Esse metodo verifica se um elemento contem o atributo step e,
	 * 			verifica se o valor do elemnento obdece o intervalo definido
	 * 			no atributo step.
	 * 		@return {Boolean}
	 * 			Retorna true se o valor do elemento estiver no intervalo.
	 * 			Retorna false se o valor do elemento não estiver
	 * 			no intervalo.
	 */
	

	stepMisMatch() {
        
                //para element
                let _element = this._element;
                let _elementIsInput = _element.isElement('input');
                let _elementHasAttrStep = _element.hasAttr('step');
                let _elementValue = _element.getValue();
                    _elementValue = Utility.removeWhiteSpace(_elementValue);
                let _elementValueIsEmpty = _element.isEmpty();
        
                //para atributo type do element
                let _attrType = _element.getAttrValue('type').toLowerCase();
                let _attrTypeIsNumber = _attrType === 'number';
                let _attrTypeIsRange = _attrType === 'range';
                let _attrTypeIsDate = _attrType === 'date';
                let _attrTypeIsMonth = _attrType === 'month';
                let _attrTypeIsDateTimeLocal = _attrType === 'datetime-local';
                let _attrTypeIsTime = _attrType === 'time';
                let _attrTypeIsWeek = _attrType === 'week';
        
                //para atributo step do element
                let _attrStep = _element.getAttrValue('step');
                let _attrStepIsEmpty = _attrStep === '';
        
                //se element com atributo type igual number
                let _elementValueIsNumber = Type.isNumber(_elementValue);
        
                //se element com atributo type igual date
                let _elementValueIsDatePT = Type.isDate('pt', _elementValue);
                let _elementValueIsDateENG = Type.isDate('eng', _elementValue);
                let _dateInMilliseconds;
        
                //se element com atributo type igual month
                let _elementValueIsMonthPT = Type.isMonth('pt', _elementValue);
                let _elementValueisMonthENG = Type.isMonth('eng', _elementValue);
        
                //se element com atributo type igual datetime-local
                let _elementValueIsDateTimePT = Type.isDateTime('pt', _elementValue);
                let _elementValueIsDateTimeENG = Type.isDateTime('eng', _elementValue);
        
                //se element com atributo type igual time
                let _elementValueIsTime = Type.isTime(_elementValue);
        
                //se element com atributo type igual week
                let _elementValueIsWeekPT = Type.isWeek('pt', _elementValue);
                let _elementValueIsWeekENG = Type.isWeek('eng', _elementValue);
                let _valueElementYear;
                let _valueElementWeek;
        
                //se element com atributo type igual a qualquer coisa que envolve data
                let _language;
        
                
        
                if( !_elementIsInput || !_elementHasAttrStep || _attrStepIsEmpty || _elementValueIsEmpty )
                    return true;
        
        
                if ( _attrTypeIsNumber || _attrTypeIsRange ) {
                    
                    if( _elementValueIsNumber )
                        return (+_elementValue % +_attrStep) === 0 ;
                    
                    return false;
                }
                
                
                else if( _attrTypeIsDate ) {
                
                    if(_elementValueIsDatePT || _elementValueIsDateENG ){
                        
                        if(_elementValueIsDatePT)
                            _language = 'pt';
                        
                        else if(_elementValueIsDateENG)
                            _language = 'eng';
                        
                        _elementValue = Utility.addZeroOnDate(_language, _elementValue);
                
                        _elementValue = _elementValue.replace(/-/g, ' ');
                
                        _dateInMilliseconds = new Date(_elementValue).getTime();

                        _elementValue = Math.round(_dateInMilliseconds / 86400000);

                        return (+_elementValue % +_attrStep) === 0;
                        
                    }
                
                    return false;
                }

                
                else if( _attrTypeIsDateTimeLocal ) {
                     
                    if( _elementValueIsDateTimePT || _elementValueIsDateTimeENG){
        
                        if(_elementValueIsDateTimePT)
                            _language = 'pt';
                            
                        else if(_elementValueIsDateTimeENG)
                            _language = 'eng';
                    
                        _elementValue = Utility.getDateFromDatetime(_language, _elementValue); 

                        _elementValue = _elementValue.replace(/-/g, ' ');
                        
                        _dateInMilliseconds = new Date(_elementValue).getTime();

                        _elementValue = Math.round(_dateInMilliseconds / 86400000);

                        return (+_elementValue % +_attrStep) === 0;
                    }
        
                    return false;
                }

        
                else if( _attrTypeIsMonth ) {
        
                    if( _elementValueIsMonthPT || _elementValueisMonthENG ){
        
                        if(_elementValueIsMonthPT)
                            _language = 'pt';
                
                        else if(_elementValueisMonthENG)
                            _language = 'eng';
                        
                        _elementValue = Utility.addZeroOnMonth(_language, _elementValue);

                        _elementValue = _elementValue.replace(/-/g, ' ');

                        _elementValue = new Date(_elementValue).getMonth();
        
                        return (+_elementValue % +_attrStep) === 0;
                    }
        
                    return false;
                }
                

                   else if( _attrTypeIsWeek ) {
                        
                    if( _elementValueIsWeekPT || _elementValueIsWeekENG ) {
        
                        if( _elementValueIsWeekPT )
                            _language = 'pt';
                    
                        else if( _elementValueIsWeekENG ) 
                            _language = 'eng';
                                                
                        _valueElementYear =  _elementValue.replace(/([0-9]{4})\-[W]?([0-9]{2})/, '$1');
                        _valueElementWeek =  _elementValue.replace(/([0-9]{4})\-[W]?([0-9]{2})/, '$2');

                        _valueElementYear = +(new Date(_valueElementYear).getTime());
                        _valueElementWeek = +_valueElementWeek * 604800000;
                        
                        _elementValue = Math.round( (_valueElementYear + _valueElementWeek) / 604800000);

                        return (+_elementValue % +_attrStep) === 0;
                    }
        
                    return false;
                }
        
        
                else if( _attrTypeIsTime ) {
        
                    if( _elementValueIsTime ){

                        _elementValue = _elementValue.replace(/([0-9]{1,2}).*/, '$1');
                   
                        return (+_elementValue % +_attrStep) === 0;
                    }
                    
                    return false;
                }

                else
                    return true;
        
            }

    
    
    /**
     * @memberof Validation
     * @method tooLong()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se a quantidade de digitos do
     *          valor do elemento
     *          ultrapassa o valor definido no atributo maxlength.
     *      @return {Boolean}
     *          Retorna true se o valor do elemento for menor ou igual
     *          o valor de maxlength.
     *          Retorna false se o valor do elemento for maior que
     *          o valor de maxlength.
     */

    tooLong() {

        let _element = this._element;
        let _elementValue = _element.getValue();
            _elementValue = Utility.removeWhiteSpace(_elementValue);
        let _elementIsInput = _element.isElement('input');
        let _elementHasAttrMaxLength = _element.hasAttr('maxlength');
        let _elementValueIsEmpty = _element.isEmpty();

        let _attrType = _element.getAttrValue('type').toLowerCase();    
        let _attrTypeIsText = _attrType === 'text' || _attrType === '';
        let _attrTypeIsNumber = _attrType === 'number';
        let _attrTypeIsPassword = _attrType === 'password';
        let _attrTypeIsSearch = _attrType === 'search';


        let _attrMaxLength = _element.getAttrValue('maxlength');
        let _attrMaxLengthIsEmpty = _attrMaxLength === '';

        if( !_elementIsInput || !_elementHasAttrMaxLength || _attrMaxLengthIsEmpty || _elementValueIsEmpty )
            return true;

        if(_attrTypeIsText || _attrTypeIsNumber || _attrTypeIsPassword || _attrTypeIsSearch){

            return _elementValue.length <= _attrMaxLength; 
        }

        else
            return true;
    }

    
    
    /**
     * @memberof Validation
     * @method tooShort()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se a quantidade de digitos do
     *          valor do elemento é inferior o valor definido no 
     *          atributo minlength.
     *      @return {Boolean}
     *          Retorna true se o valor do elemento for maior ou igual
     *          o valor de minlength.
     *          Retorna false se o valor do elemento for menor que
     *          o valor de minlength.
     */

    tooShort() {
        
                let _element = this._element;
                let _elementValue = _element.getValue();
                    _elementValue = Utility.removeWhiteSpace(_elementValue);
                let _elementIsInput = _element.isElement('input');
                let _elementHasAttrMinLength = _element.hasAttr('minlength');
                let _elementValueIsEmpty = _element.isEmpty();
        
                let _attrType = _element.getAttrValue('type').toLowerCase();    
                let _attrTypeIsText = _attrType === 'text' || _attrType === '';
                let _attrTypeIsNumber = _attrType === 'number';
                let _attrTypeIsPassword = _attrType === 'password';
                let _attrTypeIsSearch = _attrType === 'search';
        
        
                let _attrMinLength = _element.getAttrValue('minlength');
                let _attrMinLengthIsEmpty = _attrMinLength === '';
        
                if( !_elementIsInput || !_elementHasAttrMinLength || _attrMinLengthIsEmpty || _elementValueIsEmpty )
                    return true;
        
                if(_attrTypeIsText || _attrTypeIsNumber || _attrTypeIsPassword || _attrTypeIsSearch){
        
                    return _elementValue.length >= _attrMinLength; 
                }
        
                else
                    return true;
            }

    
    
    /**
     * @memberof Validation
     * @method typeMismatch()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se o elemento contem o atributo
     *          required. se conter o atributo required, o metodo 
     *          verifica se o valor do elemento está vazio.
     *      @return {Boolean}
     *          Retorna true se o elemento não contem o atributo required.
     *          Retorna true se o elemento contem o atributo required
     *          e o valor for diferente de vazio;
     *          Retorna false se o elemento contem o atributo required
     *          e o valor for vazio.
     */    
    
    typeMismatch() {
        
        //para element
        let _element = this._element;
        let _elementValue = _element.getValue();
        let _elementValueIsEmpty = _element.isEmpty();
        let _elementValueIsEmail = Type.isEmail(_elementValue);
        let _elementValueIsUrl = Type.isUrl(_elementValue);
        let _elementValueIsCPF = Type.isCPF(_elementValue);
        let _elementValueIsRG = Type.isRG(_elementValue);
        let _elementValueIsPhone = Type.isPhone(_elementValue);
        let _elementValueIsCEP = Type.isCEP(_elementValue);
        let _elementHasAttrType = _element.hasAttr('type');

        let _attrType = _element.getAttrValue('type').toLowerCase();
        let _attrTypeIsEmpty = _attrType  === '';
        
        let _attrTypeIsEmail = _attrType === 'email';
        let _attrTypeIsUrl = _attrType === 'url';
        let _attrTypeIsCPF = _attrType === 'cpf';
        let _attrTypeIsRG = _attrType === 'rg';
        let _attrTypeIsPhone = _attrType === 'phone';
        let _attrTypeIsCEP = _attrType === 'cep';
        

        if( !_elementHasAttrType || _attrTypeIsEmpty || _elementValueIsEmpty ) 
            return true;

        if( _attrTypeIsEmail )
            return _elementValueIsEmail;

        if( _attrTypeIsUrl )
            return _elementValueIsUrl;

        if( _attrTypeIsCPF )
            return _elementValueIsCPF;

        if( _attrTypeIsRG )
            return _elementValueIsRG;

        if( _attrTypeIsPhone )
            return _elementValueIsPhone;

        if( _attrTypeIsCEP )
            return _elementValueIsCEP;

        return true;
    }

    
    
    /**
     * @memberof Validation
     * @method getListValidations()
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @description 
     *          Esse metodo obtem uma lista com o resultado das validações.
     *         return {Object}
     *            Retorna um objeto com o resultado das validações.
     */

    getListValidations() {
        return new Object(this._validations);
    }

    
    
    /**
     * @memberof Validation
     * @method setListValidations()
     *      @public
     *          Esse methodo pode ser usado por todos.
     *      @description
     *          Esse metodo adiciona o resultado das validações na lista.
     */

    setListValidations() {

        this._validations.valueMissing = this.valueMissing();

        this._validations.patternMisMatch = this.patternMisMatch();

        this._validations.rangeOverFlow = this.rangeOverFlow();

        this._validations.rangeUnderFlow = this.rangeUnderFlow();
        
        this._validations.stepMisMatch = this.stepMisMatch();
        
        this._validations.tooLong = this.tooLong();

        this._validations.tooShort = this.tooShort();

        this._validations.typeMismatch = this.typeMismatch();
    }
 

}
class Validation {

    constructor( formulario ) {

        this._formulario = formulario;
        this._validations = {};

    }
validateInput() {
    $('input').bind('input', function() {
        
        let $element = $(this);
        let _ValidationState = new ValidationStates( $element );
        let _isValid;
        let _listValidations;

        _ValidationState.setListValidations();
        _listValidations = Object.values(_ValidationState.getListValidations());
        _isValid = !_listValidations.some( elem => elem === false );

        if( !_isValid ) {
            MessagingSystem.show($element,  _ValidationState.getListValidations());
            
        }else{
            MessagingSystem.hide($element);
        }
    });
}

validateTextarea() {
    $('textarea').bind('input', function(e) {
        
        let $element = $(this);
        let _ValidationState = new ValidationStates( $element );
        let _isValid;
        let _listValidations;

        _ValidationState.setListValidations();
        _listValidations = Object.values(_ValidationState.getListValidations());
        _isValid = !_listValidations.some( elem => elem === false );

        if( !_isValid ) {
            MessagingSystem.show($element);
        }else{
            MessagingSystem.hide($element);
        }

    });
}

validateSelect() {
    $('select').bind('change', function(e) {
            
        let $element = $(this);
        let _ValidationState = new ValidationStates( $element );
        let _isValid;
        let _listValidations;

        _ValidationState.setListValidations();
        _listValidations = Object.values(_ValidationState.getListValidations());
        _isValid = !_listValidations.some( elem => elem === false );

        if( !_isValid ) {
            MessagingSystem.show($element);
        }else{
            MessagingSystem.hide($element);
        }
    });
}

validateSubmit() {

    let _$formulario = this._formulario;
    let _hasConfPassword;

    _$formulario.submit(function(e){

        _hasConfPassword = Type.isConfPassword(_$formulario);
        
        _$formulario.find('input, select, textarea').each(function () {
        
            let $element = $(this);
            let _ValidationState = new ValidationStates( $element );
            let _isValid;
            let _listValidations;

            _ValidationState.setListValidations();
            _listValidations = Object.values(_ValidationState.getListValidations());
            _isValid = !_listValidations.some( elem => elem === false );

            if( !_isValid ) {
                e.preventDefault();
                MessagingSystem.show($element,  _ValidationState.getListValidations());

            }else{
                MessagingSystem.hide($element);
            }
        });
    
        if( !_hasConfPassword ) {
            
            let $elementPassword = _$formulario.find('[type="password"]').eq(1);

            e.preventDefault();
            MessagingSystem.show($elementPassword);
        }else{

            let $elementPassword = _$formulario.find('[type="password"]').eq(1);

            MessagingSystem.hide($elementPassword);
        }

    });
}

}

class MessagingSystem {

    constructor(){
 
        throw new Error('Esse objeto não deve ser instaciado.');
        this.messages = {};	
    }
static show(element, getListValidation) {

    let _target = element.attr('targetMsg');
    let _listValidations = getListValidation;
    let _listMessages = this.messages === undefined ? this.messages = {} : this.messages;
    let _messagesError = "";
    let _standardMessages = {
        patternMisMatch: "vamos ver se agora da certo",
        valueMissing: "faltando alguma coisa"
    }

    $.each(_listValidations, function( typeValidation , valueValidation ) {
        
        if( valueValidation === false ) {
            
            if( _listMessages[_target] === undefined ) {

                _messagesError += "<span class='errorMsg'>"+ _standardMessages[typeValidation] + "</span>";
            }else{
                _messagesError += "<span class='errorMsg'>"+ _listMessages[_target][typeValidation] + "</span>";
            }
          
        }
    });

    _target = "#" + _target;
    $(_target).find( ".errorMsg" ).remove();
    $(_target).append(_messagesError);
}

static hide(element) {
    let target = "#" + element.attr('targetMsg');
    $(target).find( ".errorMsg" ).remove();
}

static setUpMessage(messages) {
    this.messages = new Object(messages);
}
 

}


(function( $ ){
 
    $.fn.ForgeValidation = function(errorMessages) {
    
       var _Validation = new Validation(this);
   
       _Validation.validateInput();
       _Validation.validateTextarea();
       _Validation.validateSelect();
       _Validation.validateSubmit();

       MessagingSystem.setUpMessage(errorMessages);
   
    };

})( jQuery ); 