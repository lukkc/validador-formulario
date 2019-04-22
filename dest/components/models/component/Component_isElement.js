   
   
   /**
     * @memberof Component 
     * @method isElement(element) 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o element é do tipo do parametro passado.
     * 			@return {Boolean}
     * 				Retorna true, se for
     * 				Retorno false se não for.
     */

    isElement(element) {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _tagName;

        if(_isValidElement){

            _tagName = _element[0].tagName.toLowerCase();

            return _tagName === `${element}`;
        };

        return false;
    };