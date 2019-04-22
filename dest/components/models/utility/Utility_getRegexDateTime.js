    
    
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