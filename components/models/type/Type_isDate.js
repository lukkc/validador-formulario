    
    
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