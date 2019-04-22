
 'use strict';
 function rangeOverflow(element) {

	// se o elemento conter o alemento max, o valor n pode ultrapassar o max especificado

	// verifies that the element contains the required attribute;
	var _isInput = isInput(element);
	var _isEmpty = isEmpty(element);
	var _isNumber = isNumber(element);
	var _hasMax = hasAttrMax(element);
	var _hasType = hasAttrType(element);
	var elementValue = blank(element);
	

	if( _isInput && _hasMax && _hasType ){

		var elementType = element.attr('type').toLowerCase();
		var elementMax = element.attr('max');
		var attrMaxIsDateENG = isDate('eng', elementMax, '2', '2');
		var attrMaxIsDateTimeENG = isDateTime('eng', elementMax, '2', '2');
		var attrMaxIsMonthENG = isMonth('eng', elementMax, '2');
		var attrMaxIsTime = isTime(elementMax);
		var attrMaxIsWeekENG = isWeek('eng', elementMax);
		var _isTypeNumber = elementType === "number";
		var _isTypeRange = elementType === "range";
		var _isTypeDate = elementType === "date";
		var _isTypeMonth = elementType === "month";
		var _isTypeDateTimeLocal = elementType === "datetime-local";
		var _isTypeTime = elementType === "time";
		var _isTypeWeek = elementType === "week";
		var empty = '';


		if(!( elementMax === empty )){

			// VALIDAÇÃO DO ATRIBUTO MAX, SE O TIPO DO INPUT FOR NUMBER OU RANGE
			if ( _isTypeNumber || _isTypeRange ) {
				return _isNumber || _isEmpty ? +elementValue <= +elementMax : false;
			}


			// VALIDAÇÃO DO ATRIBUTO MAX, SE O TIPO DO INPUT FOR DATE
			if( _isTypeDate ) {
				if( attrMaxIsDateENG && !_isEmpty ){

					var _isDatePT = isDate('pt', elementValue, '1,2', '1,2');
					var _isDateENG = isDate('eng', elementValue, '1,2', '1,2');
					var modo;

					if( _isDateENG || _isDatePT ){
						if(_isDatePT){
							modo = 'pt';
						} 
						else if(_isDateENG) {
							modo = 'eng';
						}

						elementValue = addZeroOnDate(modo, elementValue);
						return elementValue <= elementMax
					}
				}
				return false;
			}


			// VALIDAÇÃO DO ATRIBUTO MAX, SE O TIPO DO INPUT FOR MONTH
			if( _isTypeMonth ) {
				if( attrMaxIsMonthENG && !_isEmpty ){

					var _isMonthPT = isMonth('pt', elementValue, '1,2');
					var _isMonthENG = isMonth('eng', elementValue, '1,2');
					var modo;
					
					if( _isMonthENG || _isMonthPT ){
						if(_isMonthPT){
							modo = 'pt';
						} 
						else if(_isMonthENG) {
							modo = 'eng';
						}				
 				
 						
						elementValue = addZeroOnMonth(modo, elementValue);
						return elementValue <= elementMax 
					}
				}
				return false;
			}


			// VALIDAÇÃO DO ATRIBUTO MAX, SE O TIPO DO INPUT FOR DATETIME-LOCAL 
			if( _isTypeDateTimeLocal ) {
				if( attrMaxIsDateTimeENG && !_isEmpty ){

					var _isDatePT = isDateTime('pt', elementValue, '1,2', '1,2');
					var _isDateENG = isDateTime('eng', elementValue, '1,2', '1,2');
					
					if( _isDateENG || _isDatePT ){
						if(_isDatePT){
							modo = 'pt';
						} 
						else if(_isDateENG) {
							modo = 'eng';
						}				
 
						return compareDateTime(modo, elementValue, elementMax); 
					}
				}
				return false;
			}


			// VALIDAÇÃO DO ATRIBUTO MAX, SE O TIPO DO INPUT FOR TIME 
			if( _isTypeTime ) {

				if( attrMaxIsTime && !_isEmpty ){

					var _isTime = isTime(elementValue);

					if( _isTime ) { 
			
						return elementValue <= elementMax ;
					}
				}
				return false;
			}



			// VALIDAÇÃO DO ATRIBUTO MAX, SE O TIPO DO INPUT FOR WEEK 
			if( _isTypeWeek ) {

				if( attrMaxIsWeekENG && !_isEmpty ){

					var _isWeekPT = isWeek('pt', elementValue);
					var _isWeekENG = isWeek('eng', elementValue);

					if( _isWeekPT || _isWeekENG ) {
						if( _isWeekPT ){
							modo = 'pt';
						} 
						else if( _isWeekENG ) {
							modo = 'eng';
						}	 
						

						return compareWeek(modo, elementValue, elementMax) ;
					}
				}
				return false;
			}













		}
		return true;
	}
	return true;
}