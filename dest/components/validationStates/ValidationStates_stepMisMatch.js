	
	
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