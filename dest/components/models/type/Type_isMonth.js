    
    
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