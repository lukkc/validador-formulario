   
    /**
     * @memberof Type
     * @method isConfPassword(form)
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} language
     * 				'ENG' || 'PT' determina o idioma do parametro date
     * 			@param {String} date
     * 				Pode receber uma date em ENG('aaaa-mm-dd') ou PT('dd-mm-aaaa').
     * 			@description
     * 				Esse metodo verifica se o valor do parametro date é uma data valida.
     * 			@return {String || Throw}
     * 				Retorna true se for data valida;
     * 				Retorna false se não for data valida.
     * 				Retorna Throw com a mensagem de erro, se o parametro language for diferente de 'ENG' e 'PT'.
     */

    static isConfPassword(form) {
        
        let _inputsPassword = form.find('[type="password"]');
        let _quantityInputs = _inputsPassword.length;
        let _password;
        let _confPassword;

        if( _quantityInputs === 2 ) {

            _password = _inputsPassword.eq(0).val();
            _confPassword = _inputsPassword.eq(1).val();

            // console.log(_password === _confPassword);
            return _password === _confPassword;
        }

        return true;
    }