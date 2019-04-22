    
    
    /**
     * @memberof Component
     * @method setValue(value) 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo define o valor do elemento.
     * 			@return
     * 				Sem retorno.
     */

    setValue(value) {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _value = Utility.trim(value);
        let _isInput = this.isElement('input');
        let _isSelect = this.isElement('select');
        let _isTextArea = this.isElement('textarea');

        if (_isValidElement) {
            
            if (_isSelect)
                this._setSelectValue(_value);
            
            if (_isTextArea)
                this._setTextareaValue(_value);
            
            if (_isInput)	
                this._setInputValue(_value);
        }
    }