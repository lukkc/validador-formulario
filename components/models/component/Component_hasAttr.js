	
	
	/**
	 * @memberof Component
	 * @method hasAttr(atributo)
	 * 		@public
	 * 				Esse metodo pode ser usado por todos.
	 * 		@description
	 * 				Esse metodo verifica se o elemento tem um determinado atributo.
	 * 		@return {Boolean}
	 * 				Retorna true se contem o atributo.
	 * 				Retorna false se não contem.
	 */

	hasAttr(atributo) {
		
		let _element = this._element;
		let _isValidElement = this.isValid();

		if(_isValidElement)
			return _element.is(`[${atributo}]`);

		return false;
	};