    
    
    /**
     * @memberof Type
     * @method isLetter(value)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} value
     *      @description
     *          Esse metodo verifica se o valor é uma letra do alfabeto.
     *      @return {Boolean}
     *          Retorna true se for letra do alfabeto.
     *          Retorna false se não for letra do alfabeto.
     */

    static isLetter(value) {
        
        let _value = Utility.removeWhiteSpace(value);
        let _regexLetter = /[0-9\_\!\"\#\$\%\&\'\,\(\)\*\+\-\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~\€\‚\„\…\†\‡\‰\‹\‘\’\“\”\•\–\—\˜\™\›\¡\¢\£\¤\¥\¦\§\¨\©\«\¬\®\¯\°\±\²\³\´\¶\·\¸\¹\»\¼\½\¾\¿\×\÷]/;

        _value.length === 0 ? _value = "fals3" : _value
        
        return !_regexLetter.test(_value);
    }