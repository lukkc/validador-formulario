    
    
    /**
     * @memberof Component
     * @method _getInputValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <input>.
     * 			@return {String}
     * 				Retorna valor.
     */

    _getInputValue() {
        
        let _element = this._element;
        let _isInput = this.isElement('input');
        let _hasAttrSrc = this.hasAttr('src');
        let _elementType = this.getAttrValue('type');

        if(_isInput){
            
            _elementType.toLowerCase();
            
            if(_elementType === "image"){
                
                if(_hasAttrSrc)
                    return this.getAttrValue('src');

                return '';
            } 

            return ('' + _element.val());
        }
    }