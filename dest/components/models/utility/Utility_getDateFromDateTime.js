    
    
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