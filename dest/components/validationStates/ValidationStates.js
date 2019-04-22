class ValidationStates {

    constructor(element) {

        this._element = new Component(element);
        this._validations = {};
    }
    
    
    /**
     * @memberof Validation
     * @method valueMissing()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se o elemento contem o atributo
     *          required. se conter o atributo required, o metodo 
     *          verifica se o valor do elemento está vazio.
     *      @return {Boolean}
     *          Retorna true se o elemento não contem o atributo required.
     *          Retorna true se o elemento contem o atributo required
     *          e o valor for diferente de vazio;
     *          Retorna false se o elemento contem o atributo required
     *          e o valor for vazio.
     */    
    
    valueMissing() {
        
        //para element
        let _element = this._element;
        let _elementHasAttrRequired = _element.hasAttr('required');
        let _elementValueIsEmpty = _element.isEmpty();
        
        //para atributo required do element
        let _attrRequired = _element.getAttrValue('required');


        if( !_elementHasAttrRequired )
            return true;

        return !_elementValueIsEmpty;
    }




	/**
	 * @memberof Validation
	 * @method patternMisMatch()
	 * @description
	 * 		Esse metodo aplica a expressao regular do atributo pattern
	 * 	 	do elemento.
	 * @return {Boolean}
	 * 		Retorna true se o valor do elemento fizer match com o pattern.
	 * 		Retorna false se o valor do elemento não fizer match com o pattern. 
 	*/

	patternMisMatch() {

		let _element = this._element;
		let _elementValue = _element.getValue();
		let _elementValueIsEmpty = _element.isEmpty();
		let _hasAttrPattern = _element.hasAttr('pattern');
		let _isInput = _element.isElement('input');
		let _isTextarea = _element.isElement('textarea');
		let _pattern = _element.getAttrValue('pattern');

		if( !_isInput && !_isTextarea || _elementValueIsEmpty )
			return true;

		if( _hasAttrPattern ) {
			
			_pattern = Utility.trim(_pattern);

			if(_pattern.length > 0) {
				
				_pattern = RegExp(_pattern);
				return _pattern.test(_elementValue);
			}
		}

		else 
			return true;
	}

	
	
	/**
	 * @memberof Validation
	 * @method rangerOverFlow()
	 * 		@public
	 * 			Esse metodo pode ser usado por todos
	 * 		@description
	 * 			Esse metodo verifica se um elemento contem o atributo max e,
	 * 			verifica se o valor do elemnento ultrapassa o valor definido
	 * 			no atributo max.
	 * 		@return {Boolean}
	 * 			Retorna true se o valor do elemento for menor ou igual
	 * 			ao valor do atributo max.
	 * 			Retorna false se o valor do elemento for maior que o
	 * 			valor do atributo max.
	 */
	

	rangeOverFlow() {

		//para element
		let _element = this._element;
		let _elementIsInput = _element.isElement('input');
		let _elementHasAttrMax = _element.hasAttr('max');
		let _elementValue = _element.getValue();
			_elementValue = Utility.removeWhiteSpace(_elementValue);
		let _elementValueIsEmpty = _element.isEmpty();

		//para atributo type do element
		let _attrType = _element.getAttrValue('type').toLowerCase();
		let _attrTypeIsNumber = _attrType === 'number';
		let _attrTypeIsRange = _attrType === 'range';
		let _attrTypeIsDate = _attrType === 'date';
		let _attrTypeIsMonth = _attrType === 'month';
		let _attrTypeIsDateTimeLocal = _attrType === 'datetime-local';
		let _attrTypeIsTime = _attrType === 'time';
		let _attrTypeIsWeek = _attrType === 'week';

		//para atributo max do element
		let _attrMax = _element.getAttrValue('max');
		let _attrMaxIsDateENG = Type.isDate('eng', _attrMax);
		let _attrMaxIsDateTimeENG = Type.isDateTime('eng', _attrMax);
		let _attrMaxIsMonthENG = Type.isMonth('eng', _attrMax);
		let _attrMaxIsTime = Type.isTime(_attrMax);
		let _attrMaxIsWeekENG = Type.isWeek('eng', _attrMax);
		let _attrMaxIsNotEmpty = _attrMax !== '';

		//se element com atributo type igual number
		let _elementValueIsNumber = Type.isNumber(_elementValue);

		//se element com atributo type igual date
		let _elementValueIsDatePT = Type.isDate('pt', _elementValue);
		let _elementValueIsDateENG = Type.isDate('eng', _elementValue);

		//se element com atributo type igual month
		let _elementValueIsMonthPT = Type.isMonth('pt', _elementValue);
		let _elementValueisMonthENG = Type.isMonth('eng', _elementValue);

		//se element com atributo type igual datetime-local
		let _elementValueIsDateTimePT = Type.isDateTime('pt', _elementValue);
		let _elementValueIsDateTimeENG = Type.isDateTime('eng', _elementValue);

		//se element com atributo type igual time
		let _elementValueIsTime = Type.isTime(_elementValue);

		//se element com atributo type igual week
		let _elementValueIsWeekPT = Type.isWeek('pt', _elementValue);
		let _elementValueIsWeekENG = Type.isWeek('eng', _elementValue);

		//se element com atributo type igual a qualquer coisa que envolve data
		let _language;

		

		if( !_elementIsInput || !_elementHasAttrMax || !_attrMaxIsNotEmpty || _elementValueIsEmpty )
			return true;


		if ( _attrTypeIsNumber || _attrTypeIsRange ) {
			
			if( _elementValueIsNumber )
				return +_elementValue <= +_attrMax;
			
			return false;
		}
		

		else if( _attrTypeIsDate ) {
			
			if( !_attrMaxIsDateENG )
				return false;

			else if(_elementValueIsDatePT || _elementValueIsDateENG ){
				
				if(_elementValueIsDatePT)
					_language = 'pt';
				
				else if(_elementValueIsDateENG)
					_language = 'eng';
				
				_elementValue = Utility.addZeroOnDate(_language, _elementValue);

				return _elementValue <= _attrMax;
			}

			else
				return false;
		}


		else if( _attrTypeIsMonth ) {

			if( !_attrMaxIsMonthENG )
				return false;

			else if( _elementValueIsMonthPT || _elementValueisMonthENG ){

				if(_elementValueIsMonthPT)
					_language = 'pt';
		
				else if(_elementValueisMonthENG)
					_language = 'eng';
				
				_elementValue = Utility.addZeroOnMonth(_language, _elementValue);

				return _elementValue <= _attrMax;
			}

			else
				return false;
		}
		

		else if( _attrTypeIsDateTimeLocal ) {
			
			if( !_attrMaxIsDateTimeENG )
				return false;
				
			if( _elementValueIsDateTimePT || _elementValueIsDateTimeENG){

				if(_elementValueIsDateTimePT)
					_language = 'pt';
					
				else if(_elementValueIsDateTimeENG)
					_language = 'eng';
			
				return Utility.compareDateTimeIsLessThanOrEqual(_language, _elementValue, _attrMax); 
			}

			else
				return false;
		}
		

		else if( _attrTypeIsTime ) {

			if( !_attrMaxIsTime )
				return false

			else if( _elementValueIsTime )
				return _elementValue <= _attrMax ;

			else
				return false;
		}

		
		else if( _attrTypeIsWeek ) {

			if( !_attrMaxIsWeekENG )
				return false;
				
			if( _elementValueIsWeekPT || _elementValueIsWeekENG ) {

				if( _elementValueIsWeekPT )
					_language = 'pt';
			
				else if( _elementValueIsWeekENG ) 
					_language = 'eng';
				
				return Utility.compareWeekIsLessThanOrEqual(_language, _elementValue, _attrMax) ;
			}

			else
				return false;
		}

		else
        	return true;
	}

	
	
	/**
	 * @memberof Validation
	 * @method rangerUnderFlow()
	 * 		@public
	 * 			Esse metodo pode ser usado por todos
	 * 		@description
	 * 			Esse metodo verifica se um elemento contem o atributo min e,
	 * 			verifica se o valor do elemnento é inferior ao valor definido
	 * 			no atributo min.
	 * 		@return {Boolean}
	 * 			Retorna true se o valor do elemento for maior ou igual
	 * 			ao valor do atributo min.
	 * 			Retorna false se o valor do elemento for menor que o
	 * 			valor do atributo min.
	 */
	

	rangeUnderFlow() {
        
                //para element
                let _element = this._element;
                let _elementIsInput = _element.isElement('input');
                let _elementHasAttrMin = _element.hasAttr('min');
                let _elementValue = _element.getValue();
                    _elementValue = Utility.removeWhiteSpace(_elementValue);
                let _elementValueIsEmpty = _element.isEmpty();
        
                //para atributo type do element
                let _attrType = _element.getAttrValue('type').toLowerCase();
                let _attrTypeIsNumber = _attrType === 'number';
                let _attrTypeIsRange = _attrType === 'range';
                let _attrTypeIsDate = _attrType === 'date';
                let _attrTypeIsMonth = _attrType === 'month';
                let _attrTypeIsDateTimeLocal = _attrType === 'datetime-local';
                let _attrTypeIsTime = _attrType === 'time';
                let _attrTypeIsWeek = _attrType === 'week';
        
                //para atributo min do element
                let _attrMin = _element.getAttrValue('min');
                let _attrMinIsDateENG = Type.isDate('eng', _attrMin);
                let _attrMinIsDateTimeENG = Type.isDateTime('eng', _attrMin);
                let _attrMinIsMonthENG = Type.isMonth('eng', _attrMin);
                let _attrMinIsTime = Type.isTime(_attrMin);
                let _attrMinIsWeekENG = Type.isWeek('eng', _attrMin);
                let _attrMinIsNotEmpty = _attrMin !== '';
        
                //se element com atributo type igual number
                let _elementValueIsNumber = Type.isNumber(_elementValue);
        
                //se element com atributo type igual date
                let _elementValueIsDatePT = Type.isDate('pt', _elementValue);
                let _elementValueIsDateENG = Type.isDate('eng', _elementValue);
        
                //se element com atributo type igual month
                let _elementValueIsMonthPT = Type.isMonth('pt', _elementValue);
                let _elementValueisMonthENG = Type.isMonth('eng', _elementValue);
        
                //se element com atributo type igual datetime-local
                let _elementValueIsDateTimePT = Type.isDateTime('pt', _elementValue);
                let _elementValueIsDateTimeENG = Type.isDateTime('eng', _elementValue);
        
                //se element com atributo type igual time
                let _elementValueIsTime = Type.isTime(_elementValue);
        
                //se element com atributo type igual week
                let _elementValueIsWeekPT = Type.isWeek('pt', _elementValue);
                let _elementValueIsWeekENG = Type.isWeek('eng', _elementValue);
        
                //se element com atributo type igual a qualquer coisa que envolve data
                let _language;
        
                
        
                if( !_elementIsInput || !_elementHasAttrMin || !_attrMinIsNotEmpty || _elementValueIsEmpty )
                    return true;
        
        
                if ( _attrTypeIsNumber || _attrTypeIsRange ) {
                    
                    if( _elementValueIsNumber )
                        return +_elementValue >= +_attrMin;
                    
                    return false;
                }
                
        
                else if( _attrTypeIsDate ) {
                    
                    if( !_attrMinIsDateENG )
                        return false;
        
                    else if(_elementValueIsDatePT || _elementValueIsDateENG ){
                        
                        if(_elementValueIsDatePT)
                            _language = 'pt';
                        
                        else if(_elementValueIsDateENG)
                            _language = 'eng';
                        
                        _elementValue = Utility.addZeroOnDate(_language, _elementValue);
        
                        return _elementValue >= _attrMin;
                    }
        
                    else
                        return false;
                }
        
        
                else if( _attrTypeIsMonth ) {
        
                    if( !_attrMinIsMonthENG )
                        return false;
        
                    else if( _elementValueIsMonthPT || _elementValueisMonthENG ){
        
                        if(_elementValueIsMonthPT)
                            _language = 'pt';
                
                        else if(_elementValueisMonthENG)
                            _language = 'eng';
                        
                        _elementValue = Utility.addZeroOnMonth(_language, _elementValue);
        
                        return _elementValue >= _attrMin;
                    }
        
                    else
                        return false;
                }
                
        
                else if( _attrTypeIsDateTimeLocal ) {
                    
                    if( !_attrMinIsDateTimeENG )
                        return false;
                        
                    if( _elementValueIsDateTimePT || _elementValueIsDateTimeENG){
        
                        if(_elementValueIsDateTimePT)
                            _language = 'pt';
                            
                        else if(_elementValueIsDateTimeENG)
                            _language = 'eng';
                    
                        return Utility.compareDateTimeIsGreaterThanOrEqual(_language, _elementValue, _attrMin); 
                    }
        
                    else
                        return false;
                }
                
        
                else if( _attrTypeIsTime ) {
        
                    if( !_attrMinIsTime )
                        return false
        
                    else if( _elementValueIsTime )
                        return _elementValue >= _attrMin ;
        
                    else
                        return false;
                }
        
                
                else if( _attrTypeIsWeek ) {
        
                    if( !_attrMinIsWeekENG )
                        return false;
                        
                    if( _elementValueIsWeekPT || _elementValueIsWeekENG ) {
        
                        if( _elementValueIsWeekPT )
                            _language = 'pt';
                    
                        else if( _elementValueIsWeekENG ) 
                            _language = 'eng';
                        
                        return Utility.compareWeekIsGreaterThanOrEqual(_language, _elementValue, _attrMin) ;
                    }
        
                    else
                        return false;
                }

                else
                    return true;
            }

	
	
	/**
	 * @memberof Validation
	 * @method stepMisMatch()
	 * 		@public
	 * 			Esse metodo pode ser usado por todos
	 * 		@description
	 * 			Esse metodo verifica se um elemento contem o atributo step e,
	 * 			verifica se o valor do elemnento obdece o intervalo definido
	 * 			no atributo step.
	 * 		@return {Boolean}
	 * 			Retorna true se o valor do elemento estiver no intervalo.
	 * 			Retorna false se o valor do elemento não estiver
	 * 			no intervalo.
	 */
	

	stepMisMatch() {
        
                //para element
                let _element = this._element;
                let _elementIsInput = _element.isElement('input');
                let _elementHasAttrStep = _element.hasAttr('step');
                let _elementValue = _element.getValue();
                    _elementValue = Utility.removeWhiteSpace(_elementValue);
                let _elementValueIsEmpty = _element.isEmpty();
        
                //para atributo type do element
                let _attrType = _element.getAttrValue('type').toLowerCase();
                let _attrTypeIsNumber = _attrType === 'number';
                let _attrTypeIsRange = _attrType === 'range';
                let _attrTypeIsDate = _attrType === 'date';
                let _attrTypeIsMonth = _attrType === 'month';
                let _attrTypeIsDateTimeLocal = _attrType === 'datetime-local';
                let _attrTypeIsTime = _attrType === 'time';
                let _attrTypeIsWeek = _attrType === 'week';
        
                //para atributo step do element
                let _attrStep = _element.getAttrValue('step');
                let _attrStepIsEmpty = _attrStep === '';
        
                //se element com atributo type igual number
                let _elementValueIsNumber = Type.isNumber(_elementValue);
        
                //se element com atributo type igual date
                let _elementValueIsDatePT = Type.isDate('pt', _elementValue);
                let _elementValueIsDateENG = Type.isDate('eng', _elementValue);
                let _dateInMilliseconds;
        
                //se element com atributo type igual month
                let _elementValueIsMonthPT = Type.isMonth('pt', _elementValue);
                let _elementValueisMonthENG = Type.isMonth('eng', _elementValue);
        
                //se element com atributo type igual datetime-local
                let _elementValueIsDateTimePT = Type.isDateTime('pt', _elementValue);
                let _elementValueIsDateTimeENG = Type.isDateTime('eng', _elementValue);
        
                //se element com atributo type igual time
                let _elementValueIsTime = Type.isTime(_elementValue);
        
                //se element com atributo type igual week
                let _elementValueIsWeekPT = Type.isWeek('pt', _elementValue);
                let _elementValueIsWeekENG = Type.isWeek('eng', _elementValue);
                let _valueElementYear;
                let _valueElementWeek;
        
                //se element com atributo type igual a qualquer coisa que envolve data
                let _language;
        
                
        
                if( !_elementIsInput || !_elementHasAttrStep || _attrStepIsEmpty || _elementValueIsEmpty )
                    return true;
        
        
                if ( _attrTypeIsNumber || _attrTypeIsRange ) {
                    
                    if( _elementValueIsNumber )
                        return (+_elementValue % +_attrStep) === 0 ;
                    
                    return false;
                }
                
                
                else if( _attrTypeIsDate ) {
                
                    if(_elementValueIsDatePT || _elementValueIsDateENG ){
                        
                        if(_elementValueIsDatePT)
                            _language = 'pt';
                        
                        else if(_elementValueIsDateENG)
                            _language = 'eng';
                        
                        _elementValue = Utility.addZeroOnDate(_language, _elementValue);
                
                        _elementValue = _elementValue.replace(/-/g, ' ');
                
                        _dateInMilliseconds = new Date(_elementValue).getTime();

                        _elementValue = Math.round(_dateInMilliseconds / 86400000);

                        return (+_elementValue % +_attrStep) === 0;
                        
                    }
                
                    return false;
                }

                
                else if( _attrTypeIsDateTimeLocal ) {
                     
                    if( _elementValueIsDateTimePT || _elementValueIsDateTimeENG){
        
                        if(_elementValueIsDateTimePT)
                            _language = 'pt';
                            
                        else if(_elementValueIsDateTimeENG)
                            _language = 'eng';
                    
                        _elementValue = Utility.getDateFromDatetime(_language, _elementValue); 

                        _elementValue = _elementValue.replace(/-/g, ' ');
                        
                        _dateInMilliseconds = new Date(_elementValue).getTime();

                        _elementValue = Math.round(_dateInMilliseconds / 86400000);

                        return (+_elementValue % +_attrStep) === 0;
                    }
        
                    return false;
                }

        
                else if( _attrTypeIsMonth ) {
        
                    if( _elementValueIsMonthPT || _elementValueisMonthENG ){
        
                        if(_elementValueIsMonthPT)
                            _language = 'pt';
                
                        else if(_elementValueisMonthENG)
                            _language = 'eng';
                        
                        _elementValue = Utility.addZeroOnMonth(_language, _elementValue);

                        _elementValue = _elementValue.replace(/-/g, ' ');

                        _elementValue = new Date(_elementValue).getMonth();
        
                        return (+_elementValue % +_attrStep) === 0;
                    }
        
                    return false;
                }
                

                   else if( _attrTypeIsWeek ) {
                        
                    if( _elementValueIsWeekPT || _elementValueIsWeekENG ) {
        
                        if( _elementValueIsWeekPT )
                            _language = 'pt';
                    
                        else if( _elementValueIsWeekENG ) 
                            _language = 'eng';
                                                
                        _valueElementYear =  _elementValue.replace(/([0-9]{4})\-[W]?([0-9]{2})/, '$1');
                        _valueElementWeek =  _elementValue.replace(/([0-9]{4})\-[W]?([0-9]{2})/, '$2');

                        _valueElementYear = +(new Date(_valueElementYear).getTime());
                        _valueElementWeek = +_valueElementWeek * 604800000;
                        
                        _elementValue = Math.round( (_valueElementYear + _valueElementWeek) / 604800000);

                        return (+_elementValue % +_attrStep) === 0;
                    }
        
                    return false;
                }
        
        
                else if( _attrTypeIsTime ) {
        
                    if( _elementValueIsTime ){

                        _elementValue = _elementValue.replace(/([0-9]{1,2}).*/, '$1');
                   
                        return (+_elementValue % +_attrStep) === 0;
                    }
                    
                    return false;
                }

                else
                    return true;
        
            }

    
    
    /**
     * @memberof Validation
     * @method tooLong()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se a quantidade de digitos do
     *          valor do elemento
     *          ultrapassa o valor definido no atributo maxlength.
     *      @return {Boolean}
     *          Retorna true se o valor do elemento for menor ou igual
     *          o valor de maxlength.
     *          Retorna false se o valor do elemento for maior que
     *          o valor de maxlength.
     */

    tooLong() {

        let _element = this._element;
        let _elementValue = _element.getValue();
            _elementValue = Utility.removeWhiteSpace(_elementValue);
        let _elementIsInput = _element.isElement('input');
        let _elementHasAttrMaxLength = _element.hasAttr('maxlength');
        let _elementValueIsEmpty = _element.isEmpty();

        let _attrType = _element.getAttrValue('type').toLowerCase();    
        let _attrTypeIsText = _attrType === 'text' || _attrType === '';
        let _attrTypeIsNumber = _attrType === 'number';
        let _attrTypeIsPassword = _attrType === 'password';
        let _attrTypeIsSearch = _attrType === 'search';


        let _attrMaxLength = _element.getAttrValue('maxlength');
        let _attrMaxLengthIsEmpty = _attrMaxLength === '';

        if( !_elementIsInput || !_elementHasAttrMaxLength || _attrMaxLengthIsEmpty || _elementValueIsEmpty )
            return true;

        if(_attrTypeIsText || _attrTypeIsNumber || _attrTypeIsPassword || _attrTypeIsSearch){

            return _elementValue.length <= _attrMaxLength; 
        }

        else
            return true;
    }

    
    
    /**
     * @memberof Validation
     * @method tooShort()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se a quantidade de digitos do
     *          valor do elemento é inferior o valor definido no 
     *          atributo minlength.
     *      @return {Boolean}
     *          Retorna true se o valor do elemento for maior ou igual
     *          o valor de minlength.
     *          Retorna false se o valor do elemento for menor que
     *          o valor de minlength.
     */

    tooShort() {
        
                let _element = this._element;
                let _elementValue = _element.getValue();
                    _elementValue = Utility.removeWhiteSpace(_elementValue);
                let _elementIsInput = _element.isElement('input');
                let _elementHasAttrMinLength = _element.hasAttr('minlength');
                let _elementValueIsEmpty = _element.isEmpty();
        
                let _attrType = _element.getAttrValue('type').toLowerCase();    
                let _attrTypeIsText = _attrType === 'text' || _attrType === '';
                let _attrTypeIsNumber = _attrType === 'number';
                let _attrTypeIsPassword = _attrType === 'password';
                let _attrTypeIsSearch = _attrType === 'search';
        
        
                let _attrMinLength = _element.getAttrValue('minlength');
                let _attrMinLengthIsEmpty = _attrMinLength === '';
        
                if( !_elementIsInput || !_elementHasAttrMinLength || _attrMinLengthIsEmpty || _elementValueIsEmpty )
                    return true;
        
                if(_attrTypeIsText || _attrTypeIsNumber || _attrTypeIsPassword || _attrTypeIsSearch){
        
                    return _elementValue.length >= _attrMinLength; 
                }
        
                else
                    return true;
            }

    
    
    /**
     * @memberof Validation
     * @method typeMismatch()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se o elemento contem o atributo
     *          required. se conter o atributo required, o metodo 
     *          verifica se o valor do elemento está vazio.
     *      @return {Boolean}
     *          Retorna true se o elemento não contem o atributo required.
     *          Retorna true se o elemento contem o atributo required
     *          e o valor for diferente de vazio;
     *          Retorna false se o elemento contem o atributo required
     *          e o valor for vazio.
     */    
    
    typeMismatch() {
        
        //para element
        let _element = this._element;
        let _elementValue = _element.getValue();
        let _elementValueIsEmpty = _element.isEmpty();
        let _elementValueIsEmail = Type.isEmail(_elementValue);
        let _elementValueIsUrl = Type.isUrl(_elementValue);
        let _elementValueIsCPF = Type.isCPF(_elementValue);
        let _elementValueIsRG = Type.isRG(_elementValue);
        let _elementValueIsPhone = Type.isPhone(_elementValue);
        let _elementValueIsCEP = Type.isCEP(_elementValue);
        let _elementHasAttrType = _element.hasAttr('type');

        let _attrType = _element.getAttrValue('type').toLowerCase();
        let _attrTypeIsEmpty = _attrType  === '';
        
        let _attrTypeIsEmail = _attrType === 'email';
        let _attrTypeIsUrl = _attrType === 'url';
        let _attrTypeIsCPF = _attrType === 'cpf';
        let _attrTypeIsRG = _attrType === 'rg';
        let _attrTypeIsPhone = _attrType === 'phone';
        let _attrTypeIsCEP = _attrType === 'cep';
        

        if( !_elementHasAttrType || _attrTypeIsEmpty || _elementValueIsEmpty ) 
            return true;

        if( _attrTypeIsEmail )
            return _elementValueIsEmail;

        if( _attrTypeIsUrl )
            return _elementValueIsUrl;

        if( _attrTypeIsCPF )
            return _elementValueIsCPF;

        if( _attrTypeIsRG )
            return _elementValueIsRG;

        if( _attrTypeIsPhone )
            return _elementValueIsPhone;

        if( _attrTypeIsCEP )
            return _elementValueIsCEP;

        return true;
    }

    
    
    /**
     * @memberof Validation
     * @method getListValidations()
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @description 
     *          Esse metodo obtem uma lista com o resultado das validações.
     *         return {Object}
     *            Retorna um objeto com o resultado das validações.
     */

    getListValidations() {
        return new Object(this._validations);
    }

    
    
    /**
     * @memberof Validation
     * @method setListValidations()
     *      @public
     *          Esse methodo pode ser usado por todos.
     *      @description
     *          Esse metodo adiciona o resultado das validações na lista.
     */

    setListValidations() {

        this._validations.valueMissing = this.valueMissing();

        this._validations.patternMisMatch = this.patternMisMatch();

        this._validations.rangeOverFlow = this.rangeOverFlow();

        this._validations.rangeUnderFlow = this.rangeUnderFlow();
        
        this._validations.stepMisMatch = this.stepMisMatch();
        
        this._validations.tooLong = this.tooLong();

        this._validations.tooShort = this.tooShort();

        this._validations.typeMismatch = this.typeMismatch();
    }
 

}