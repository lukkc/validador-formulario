	
	
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