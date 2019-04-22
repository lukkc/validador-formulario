   
   
   /**
     * @memberof Component 
     * @method isInput() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o parametro passado é um DOM Element <input>.
     * 			@return {Boolean}
     * 				Retorna true, se for um <input>
     * 				Retorno false se não for.
     */

    isInput() {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _tagName;

        if(_isValidElement){

            _tagName = _element[0].tagName.toLowerCase();

            return _tagName === "input";
        };

        return false;
    };