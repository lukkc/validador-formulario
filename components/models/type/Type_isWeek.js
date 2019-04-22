    
    
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