	
	/**
	 * @memberof Type
	 * @method isPhone(phone)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} phone
	 *      @description
	 *          Esse metodo verifica se o valor do parametro phone é um numero de telephone/celular valido.
	 *      @return {Boolean}
	 *          Retorna true se for telephone.
	 *          Retorna false se não for telephone/celular.
	 */

	static isPhone( phone ) {

        let _phone = Utility.removeWhiteSpace(phone);
		let _regexPhone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;

		_phone.length === 0 ? _phone = "false" : _phone
			
		return _regexPhone.test(_phone);
	};