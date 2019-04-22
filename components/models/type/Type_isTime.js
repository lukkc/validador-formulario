
    
    /**
     * @memberof Type
     * @method isTime(time)
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @param {String} time
     * 			'00:00'
     *      @description
     *          Esse metodo verifica se o valor do parametro time é um time valido.
     *      @return {Boolean}
     *          Retorna true se for time valido.
     *          Retorna false se não for time valido.
     */

    static isTime(time) {
        
        let _time = Utility.removeWhiteSpace(time);
        let _regexTime = /^([0-9]{2})\:([0-9]{2})$/;

        return _regexTime.test(_time);
    }