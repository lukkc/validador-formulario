/**
 * @class Utility
 * @constructor
 * 		Essa classe não deve ser instanciada.
 * @description
 * 		Utility é uma classe que possui metodos
 *  	auxiliares e utilitarios.
 * @implements
 * 		Type
 * 			.isDate
 * 			.isWeek()
 * 			.isDateTime()
 */

class Utility {
    
    constructor(){
 
        throw new Error('Esse objeto não deve ser instaciado.');	
    }
    
    
    /**
     * @memberof Utility
     * @method trim(value)
     * 			@public
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo utiliza uma expressao regular que retira
     * 				os espaços em branco do inicio e do final da String.
     * 			@return {String}
     * 				Retorna a String sem os espaços em branco.
     */

    static trim(value) {

        let _value = ('' + value);
        let regexTrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        
        return _value.replace(regexTrim, '');
    }

    
    
    /**
     * @memberof Utility
     * @method removeWhiteSpace(value)
     * 			@public
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo utiliza uma expressao regular que retira
     * 				todos os espaços em branco da String.
     * 			@return {String}
     * 				Retorna a String sem os espaços em branco.
     */

    static removeWhiteSpace(value) {

        let _value = ('' + value);
        let regexWhiteSpace = /\s/g;

        return _value.replace(regexWhiteSpace, '');
    }

    
    
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

    
    
    /**
     * @memberof Utility
     * @method _getRegexDatetime(language)
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@param {String} language
     * 				'ENG' || 'PT'
     * 			@description
     * 				Esse metodo obtem a expressao regular de um datetime de acordo com o idioma;
     * 			@return {RegExp || Throw}
     * 				Retorna /^([0-9]{4})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{1,2})\T?([0-9]{2})\:([0-9]{2})$/
     * 				se o idioma for 'ENG'.
     * 				Retorna /^([0-9]{1,2})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{4})\T?([0-9]{2})\:([0-9]{2})$/
     * 				se o idioma for 'PT'.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static _getRegexDatetime(language) {
        
        let _language = ('' + language).toLowerCase();
        let _regexDateENG = '^([0-9]{4})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{1,2})';
        let _regexDatePT = '^([0-9]{1,2})[\/|\-]([0-9]{1,2})[\/|\-]([0-9]{4})';
        let _regexTime = '\T?([0-9]{2})\:([0-9]{2})$';

        if(_language === 'pt')
            return RegExp(_regexDatePT + _regexTime);

        if (_language === 'eng')
            return RegExp(_regexDateENG + _regexTime);

        throw new Error('Valor de paramtro invalido')
    }

    
    
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

    
    
    /**
     * @memberof Utility
     * @method compareWeekIsLessThanOrEqual(language,week1,week2)
     * 			@public
     *  			Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro week1
     * 			@param {String} week1
     * 				Pode receber uma semana em ENG('aaaa-Wss') ou PT('ssW-aaaa').
     * 			@param {String} week2
     * 				Sempre recebe uma semana no idioma ENG('aaaa-Wss')
     * 			@description
     * 				Esse metodo verifica se o parametro week1 é menor ou igual
     * 				ao parametro week2.
     * 			@return {Boolean}
     * 				Retorna true se for menor ou igual, e falso se não for.
     */

    static compareWeekIsLessThanOrEqual(language, week1, week2) {

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

        return week1 <= week2;
    }

    
    
    /**
     * @memberof Utility
     * @method compareDateTimeIsGreaterThanOrEqual(language,dateTime1,dateTime2)
     * 			@public
     *  			Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro dateTime1
     * 			@param {String} dateTime1
     * 				Pode receber uma datetime em ENG('aaaa-mm-ddT00:00') ou PT('dd-mm-aaaaT00:00').
     * 			@param {String} dateTime2
     * 				Sempre recebe uma datetime no idioma ENG('aaaa-mm-ddT00:00')
     * 			@description
     * 				Esse metodo verifica se o parametro dateTime1 é maior ou igual
     * 				ao parametro dateTime2. 
     * 			@return {Boolean}
     * 				Retorna falso se o parametro language for diferente de 'ENG' e 'PT'.
     * 				Retorna falso se os datetime1 e datetime2 forem diferente do formato definido.
     * 				Retorna true se for maior ou igual, e falso se não for.
     */

    static compareDateTimeIsGreaterThanOrEqual(language, dateTime1, dateTime2) {
        
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
            return _time1 >= _time2;

        return _date1 >= _date2;
    }

    
    
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
 
} 