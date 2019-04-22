    
    
    /**
     * @memberof Validation
     * @method tooShort()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se a quantidade de digitos do
     *          valor do elemento é inferior o valor definido no 
     *          atributo minlength.
     *      @return {Boolean}
     *          Retorna true se o valor do elemento for maior ou igual
     *          o valor de minlength.
     *          Retorna false se o valor do elemento for menor que
     *          o valor de minlength.
     */

    tooShort() {
        
                let _element = this._element;
                let _elementValue = _element.getValue();
                    _elementValue = Utility.removeWhiteSpace(_elementValue);
                let _elementIsInput = _element.isElement('input');
                let _elementHasAttrMinLength = _element.hasAttr('minlength');
                let _elementValueIsEmpty = _element.isEmpty();
        
                let _attrType = _element.getAttrValue('type').toLowerCase();    
                let _attrTypeIsText = _attrType === 'text' || _attrType === '';
                let _attrTypeIsNumber = _attrType === 'number';
                let _attrTypeIsPassword = _attrType === 'password';
                let _attrTypeIsSearch = _attrType === 'search';
        
        
                let _attrMinLength = _element.getAttrValue('minlength');
                let _attrMinLengthIsEmpty = _attrMinLength === '';
        
                if( !_elementIsInput || !_elementHasAttrMinLength || _attrMinLengthIsEmpty || _elementValueIsEmpty )
                    return true;
        
                if(_attrTypeIsText || _attrTypeIsNumber || _attrTypeIsPassword || _attrTypeIsSearch){
        
                    return _elementValue.length >= _attrMinLength; 
                }
        
                else
                    return true;
            }