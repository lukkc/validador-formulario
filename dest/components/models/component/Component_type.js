    
    
    /**
     * @memberof Component
     * @method _type() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.		
     * 			@description
     * 				Esse metodo verifica se o element é igual
     *              a input, selet ou textarea;
     * 			@return {Throw}
     * 				Retorno throw(false) com a mensagem de erro, se não for igual
     * 				a input, select ou textarea.
     */

    
    _type() {
        
        let _element = this._element;
        let _validElements = ['input', 'select', 'textarea'];
        let _elementTagName;

        try {
            
            _elementTagName = _element[0].tagName.toLowerCase();

            if( !_validElements.some(type => _elementTagName === type) )
                throw new Error('Tipo de objeto invalido.');

            return true;

        } catch (error) {

            throw new Error('Tipo de objeto invalido.');
        }
    }