    
    
    /**
     * @memberof Utility
     * @method removeWhiteSpace(value)
     * 			@public
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo utiliza uma expressao regular que retira
     * 				todos os espaços em branco da String.
     * 			@return {String}
     * 				Retorna a String sem os espaços em branco.
     */

    static removeWhiteSpace(value) {

        let _value = ('' + value);
        let regexWhiteSpace = /\s/g;

        return _value.replace(regexWhiteSpace, '');
    }