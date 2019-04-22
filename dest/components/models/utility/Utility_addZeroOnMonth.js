    
    
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