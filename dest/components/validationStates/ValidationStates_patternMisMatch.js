

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