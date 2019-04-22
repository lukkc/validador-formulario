    
    
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