    
    
    /**
     * @memberof Validation
     * @method valueMissing()
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
    
    valueMissing() {
        
        //para element
        let _element = this._element;
        let _elementHasAttrRequired = _element.hasAttr('required');
        let _elementValueIsEmpty = _element.isEmpty();
        
        //para atributo required do element
        let _attrRequired = _element.getAttrValue('required');


        if( !_elementHasAttrRequired )
            return true;

        return !_elementValueIsEmpty;
    }
