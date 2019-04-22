    
    
    /**
     * @memberof Component
     * @method isChecked() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o Element está marcado como checado.
     * 			@return {Boolean}
     * 				Retorna true, se estiver marcado.
     * 				Retorno false se não estiver marcado.
     */

    isChecked() {
        
        let _element = this._element;
        let _isInput = this.isElement('input');
        let _elementType = this.getAttrValue('type');

        if(_isInput){

            _elementType.toLowerCase();

            if (_elementType === "radio" || _elementType === "checkbox") {
                return _element.is(":checked");
            }
        }

        throw new Error('O element não possui uma propriedade checked');
    }