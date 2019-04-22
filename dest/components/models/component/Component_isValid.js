   
   
    /**
     * @memberof Component
     * @method isValid() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o parametro passado é um DOM Element <input>,
     *  			<select> ou <texarea>.
     * 			@return {Boolean || Throw}
     * 				Retorna true, se for um elemento valido.
     * 				Retorno throw(false) com a mensagem de erro, se não for um
     * 				elemento valido.
     */

    isValid() {
        
        let _element = this._element;

        if(_element === undefined || _element === null)
            throw new Error('Parametro obrigatorio.')

        this._type();
        this._length();
            
        return true;

    };