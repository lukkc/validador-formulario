    
    
    /**
     * @memberof Validation
     * @method setListValidations()
     *      @public
     *          Esse methodo pode ser usado por todos.
     *      @description
     *          Esse metodo adiciona o resultado das validações na lista.
     */

    setListValidations() {

        this._validations.valueMissing = this.valueMissing();

        this._validations.patternMisMatch = this.patternMisMatch();

        this._validations.rangeOverFlow = this.rangeOverFlow();

        this._validations.rangeUnderFlow = this.rangeUnderFlow();
        
        this._validations.stepMisMatch = this.stepMisMatch();
        
        this._validations.tooLong = this.tooLong();

        this._validations.tooShort = this.tooShort();

        this._validations.typeMismatch = this.typeMismatch();
    }