    
    
    /**
     * @memberof Validation
     * @method getListValidations()
     *      @public
     *          Esse metodo pode ser usado por todos.
     *      @description 
     *          Esse metodo obtem uma lista com o resultado das validações.
     *         return {Object}
     *            Retorna um objeto com o resultado das validações.
     */

    getListValidations() {
        return new Object(this._validations);
    }