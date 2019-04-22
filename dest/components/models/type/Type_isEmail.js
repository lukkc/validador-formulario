	
	
	/**
	 * @memberof Type
	 * @method isEmail(email)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} email
	 *      @description
	 *          Esse metodo verifica se o valor do parametro email é um email valido.
	 *      @return {Boolean}
	 *          Retorna true se for email.
	 *          Retorna false se não for email.
	 */

	static isEmail(email) {

		let _email = Utility.removeWhiteSpace(email);
		let _regexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

		_email.length === 0 ? _email = "false" : _email
			
		return _regexEmail.test(_email);
	};
