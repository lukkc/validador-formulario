    
    
    /**
     * @memberof Utility
     * @method trim(value)
     * 			@public
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo utiliza uma expressao regular que retira
     * 				os espaços em branco do inicio e do final da String.
     * 			@return {String}
     * 				Retorna a String sem os espaços em branco.
     */

    static trim(value) {

        let _value = ('' + value);
        let regexTrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        
        return _value.replace(regexTrim, '');
    }