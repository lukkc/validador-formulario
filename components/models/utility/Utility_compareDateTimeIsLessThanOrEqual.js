    
    
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