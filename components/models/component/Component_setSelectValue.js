    
    
    /**
     * @memberof Component
     * @method _setSelectValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     *	 		@param {String} _value  
    * 			@description
    * 				Esse metodo define o valor de um DOMElement <select>.
    * 			@return
    * 				sem retorno
    */

    _setSelectValue(_value) {
        
        let _element = this._element;
        let _isSelect = this.isElement('select');
        let _elementOption;

        if(_isSelect){

            _elementOption = _element.find(':selected:not(:first-child)');
            _elementOption.attr('value', _value);
        }
    }