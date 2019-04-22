    
    
    /**
     * @memberof Validation
     * @method typeMismatch()
     *      @public
     *          Esse metodo pode ser usado por todos
     *      @description
     *          Esse metodo verifica se o elemento contem o atributo
     *          required. se conter o atributo required, o metodo 
     *          verifica se o valor do elemento está vazio.
     *      @return {Boolean}
     *          Retorna true se o elemento não contem o atributo required.
     *          Retorna true se o elemento contem o atributo required
     *          e o valor for diferente de vazio;
     *          Retorna false se o elemento contem o atributo required
     *          e o valor for vazio.
     */    
    
    typeMismatch() {
        
        //para element
        let _element = this._element;
        let _elementValue = _element.getValue();
        let _elementValueIsEmpty = _element.isEmpty();
        let _elementValueIsEmail = Type.isEmail(_elementValue);
        let _elementValueIsUrl = Type.isUrl(_elementValue);
        let _elementValueIsCPF = Type.isCPF(_elementValue);
        let _elementValueIsRG = Type.isRG(_elementValue);
        let _elementValueIsPhone = Type.isPhone(_elementValue);
        let _elementValueIsCEP = Type.isCEP(_elementValue);
        let _elementHasAttrType = _element.hasAttr('type');

        let _attrType = _element.getAttrValue('type').toLowerCase();
        let _attrTypeIsEmpty = _attrType  === '';
        
        let _attrTypeIsEmail = _attrType === 'email';
        let _attrTypeIsUrl = _attrType === 'url';
        let _attrTypeIsCPF = _attrType === 'cpf';
        let _attrTypeIsRG = _attrType === 'rg';
        let _attrTypeIsPhone = _attrType === 'phone';
        let _attrTypeIsCEP = _attrType === 'cep';
        

        if( !_elementHasAttrType || _attrTypeIsEmpty || _elementValueIsEmpty ) 
            return true;

        if( _attrTypeIsEmail )
            return _elementValueIsEmail;

        if( _attrTypeIsUrl )
            return _elementValueIsUrl;

        if( _attrTypeIsCPF )
            return _elementValueIsCPF;

        if( _attrTypeIsRG )
            return _elementValueIsRG;

        if( _attrTypeIsPhone )
            return _elementValueIsPhone;

        if( _attrTypeIsCEP )
            return _elementValueIsCEP;

        return true;
    }