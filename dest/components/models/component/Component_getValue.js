

    /**
     * @memberof Component
     * @method getValue() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo obtem o valor do elemento.
     * 			@return {String}
     * 				Retorna o valor do elemento.
     */

    getValue() {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _elementValue = '';
        let _isInput = this.isElement('input');
        let _isSelect = this.isElement('select');
        let _isTextArea = this.isElement('textarea');

        if (_isValidElement) {
            
            if (_isSelect)
                return this._getSelectValue();
            
            if (_isTextArea)
                return this._getTextareaValue();
            
            if(_isInput)	
                return this._getInputValue();
        }
        
        return _elementValue;
    }