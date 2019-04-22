   
   
    /**
     * @memberof Component
     * @method isEmpty() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o valor do Element está vazio.
     * 			@return {Boolean}
     * 				Retorna true, se estiver vazio.
     * 				Retorno false se não estiver vazio.
     */

    isEmpty() {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _elementValue = this.getValue();
        _elementValue = Utility.removeWhiteSpace(_elementValue);

        return _elementValue.length === 0 ;
    }