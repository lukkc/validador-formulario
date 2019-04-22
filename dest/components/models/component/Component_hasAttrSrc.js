	
	
	/**
	 * @memberof Component
	 * @method hasAttrSrc()
	 * 		@public
	 * 				Esse metodo pode ser usado por todos.
	 * 		@description
	 * 				Esse metodo verifica se o elemento tem o atributo src.
	 * 		@return {Boolean}
	 * 				Retorna true se contem o atributo.
	 * 				Retorna false se não contem.
	 */

	hasAttrSrc() {
		
		let _element = this._element;
		let _isValidElement = this.isValid();

		if(_isValidElement)
			return _element.is('[src]');
			
		return false;
	};