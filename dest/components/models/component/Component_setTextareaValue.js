    
    
    /**
     * @memberof Component
     * @method _setTextareaValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe
     * 			@param {String} _value  
     * 			@description
     * 				Esse metodo define o valor de um DOMElement <textarea>.
     * 			@return
     * 				Sem retorno
     */

    _setTextareaValue(_value) {
        
        let _element = this._element;
        let _isTextArea = this.isElement('textarea');

        if (_isTextArea)
            _element.attr('value', _value).text(_value);
    }