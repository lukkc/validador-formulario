    
    
    /**
     * @memberof Component
     * @method _setInputValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@param {String} _value  
     * 			@description
     * 				Esse metodo define o valor de um DOMElement <input>.
     * 			@return
     * 				Sem retorno
     */

    _setInputValue(_value) {
        
        let _isInput = this.isElement('input');
        let _hasAttrSrc = this.hasAttr('src');
        let _elementType = this.getAttrValue('type');

        if(_isInput){
            
            _elementType.toLowerCase();
            
            if(_elementType === "image"){
                
                if(_hasAttrSrc)
                   this.setAttrValue('src', _value);
                
                return;	
            } 

            this.setAttrValue('value', _value);
            return;
        }
    }