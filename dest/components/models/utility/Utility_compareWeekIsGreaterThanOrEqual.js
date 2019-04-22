    
    
    /**
     * @memberof Utility
     * @method compareWeekIsGreaterThanOrEqual(language,week1,week2)
     * 			@public
     *  			Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro week1
     * 			@param {String} week1
     * 				Pode receber uma semana em ENG('aaaa-Wss') ou PT('ssW-aaaa').
     * 			@param {String} week2
     * 				Sempre recebe uma semana no idioma ENG('aaaa-Wss')
     * 			@description
     * 				Esse metodo verifica se o parametro week1 é maior ou igual
     * 				ao parametro week2.
     * 			@return {Boolean}
     * 				Retorna true se for maior ou igual, e falso se não for.
     */

    static compareWeekIsGreaterThanOrEqual(language, week1, week2) {
        
                let _language = ('' + language).toLowerCase();
                let _regexWeekENG = /^([0-9]{4})\-[W]?([0-9]{2})$/;
                let _regexWeekPT = /^([0-9]{2})[W]?\-([0-9]{4})$/;
        
                if(_language !== 'pt' && _language !== 'eng')
                    return false;
                
                if(!Type.isWeek(_language, week1) || !Type.isWeek('eng', week2))
                    return false;
        
                if(_language === 'pt'){
                    week1 = week1.replace(_regexWeekPT, '$2-$1');
                } else {
                    week1 = week1.replace(_regexWeekENG, '$1-$2');
                } 
        
                week2 = week2.replace(_regexWeekENG, '$1-$2');
        
                return week1 >= week2;
            }