    
    
    /**
     * @memberof Validation
     * @method tooLong()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se a quantidade de digitos do
     *          valor do elemento
     *          ultrapassa o valor definido no atributo maxlength.
     *      @return {Boolean}
     *          Retorna true se o valor do elemento for menor ou igual
     *          o valor de maxlength.
     *          Retorna false se o valor do elemento for maior que
     *          o valor de maxlength.
     */

    tooLong() {

        let _element = this._element;
        let _elementValue = _element.getValue();
            _elementValue = Utility.removeWhiteSpace(_elementValue);
        let _elementIsInput = _element.isElement('input');
        let _elementHasAttrMaxLength = _element.hasAttr('maxlength');
        let _elementValueIsEmpty = _element.isEmpty();

        let _attrType = _element.getAttrValue('type').toLowerCase();    
        let _attrTypeIsText = _attrType === 'text' || _attrType === '';
        let _attrTypeIsNumber = _attrType === 'number';
        let _attrTypeIsPassword = _attrType === 'password';
        let _attrTypeIsSearch = _attrType === 'search';


        let _attrMaxLength = _element.getAttrValue('maxlength');
        let _attrMaxLengthIsEmpty = _attrMaxLength === '';

        if( !_elementIsInput || !_elementHasAttrMaxLength || _attrMaxLengthIsEmpty || _elementValueIsEmpty )
            return true;

        if(_attrTypeIsText || _attrTypeIsNumber || _attrTypeIsPassword || _attrTypeIsSearch){

            return _elementValue.length <= _attrMaxLength; 
        }

        else
            return true;
    }