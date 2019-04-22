

    /**
     * @memberof Component
     * @method _getTextareaValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <textarea>.
     * 			@return {String}
     * 				Retorna o valor.
     */

    _getTextareaValue() {
        
        let _element = this._element;
        let _isTextArea = this.isElement('textarea');

        if (_isTextArea)
            return ('' + _element.val());
    }