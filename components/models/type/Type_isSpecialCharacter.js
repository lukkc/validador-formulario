    
    
    /**
     * @memberof Type
     * @method isSpecialCharacter(value)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} value
     *      @description
     *          Esse metodo verifica se o valor é um caracter especial.
     *      @return {Boolean}
     *          Retorna true se for caracter especial.
     *          Retorna false se não for caracter especial.
     */

    static isSpecialCharacter(value) {
        
        let _value = Utility.removeWhiteSpace(value);
        let _regexSpecialCharacter = /[^\_\!\"\#\$\%\&\'\,\(\)\*\+\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\€\‚\„\…\†\‡\‰\‹\‘\’\“\”\•\–\—\˜\™\›\¡\¢\£\¤\¥\¦\§\¨\©\«\¬\®\¯\°\±\²\³\´\¶\·\¸\¹\»\¼\½\¾\¿\×\÷]/;

        _value.length === 0 ? _value = "false" : _value
        
        return !(_regexSpecialCharacter.test(_value));
    }