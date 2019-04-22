	
	
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