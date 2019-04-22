    
    
    /**
     * @memberof Type
     * @method isNumber(value)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} value
     *      @description
     *          Esse metodo verifica se o valor é um numero.
     *      @return {Boolean}
     *          Retorna true se for um numero.
     *          Retorna false se não for numero.
     */

    static isNumber(value) {
        
        let _value = Utility.removeWhiteSpace(value);
        let _regexNumber = /^[\-]?[0-9]+$/g;

        _value.length === 0 ? _value = "false" : _value

        return _regexNumber.test(_value);
    }