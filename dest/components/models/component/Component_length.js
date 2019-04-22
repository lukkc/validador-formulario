   
   
    /**
     * @memberof Component
     * @method _length() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.		
     * 			@description
     * 				Esse metodo verifica se o comprimento do elemento é igual a 1.
     * 			@return {Throw}
     * 				Retorna throw(false) com a mensagem de erro, se comprimento for
     * 				diferente de 1.
     */

    _length() {

        let _element = this._element;
        
        if(_element.length > 1)
            throw new Error('Tipo de objeto invalido.');

        if(_element.length < 1)
            throw new Error('Tipo de objeto invalido.');

        return true;
    }