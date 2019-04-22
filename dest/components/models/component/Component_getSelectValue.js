   
   
   /**
     * @memberof Component
     * @method _getSelectValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <select>.
     * 			@return {String}
     * 				Retorna o valor.
     */

    _getSelectValue() {
        
        let _element = this._element;
        let _isSelect = this.isElement('select');

        if(_isSelect)
            return ('' + _element.find(':selected').val());
    }