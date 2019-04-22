/**
	 * @memberof Type
	 * @method isCEP(cep)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} cep
	 *      @description
	 *          Esse metodo verifica se o valor do parametro cep é um numero de CEP valido.
	 *      @return {Boolean}
	 *          Retorna true se for CEP.
	 *          Retorna false se não for CEP.
	 */

	static isCEP( cep ) {

        let _cep = Utility.removeWhiteSpace(cep);
		let _regexCEP = /^([0-9]{5})[\-]?([0-9]{3})$/;

		_cep.length === 0 ? _cep = "false" : _cep
			
		return _regexCEP.test(_cep);
	};