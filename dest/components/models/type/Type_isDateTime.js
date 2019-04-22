    
    
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