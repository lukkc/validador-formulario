    
    
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