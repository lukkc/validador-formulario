
	
	/**
	 * @memberof Type
	 * @method isCPF(cpf)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} cpf
	 *      @description
	 *          Esse metodo verifica se o valor do parametro cpf é um cpf valido.
	 *      @return {Boolean}
	 *          Retorna true se for cpf.
	 *          Retorna false se não for cpf.
	 */

	static isCPF( cpf ) {

        let _cpf = Utility.removeWhiteSpace(cpf);
		let _regexCPF = /^([0-9]{3})[\.]?([0-9]{3})[\.]?([0-9]{3})[\-]?([0-9]{2})$/;

		_cpf.length === 0 ? _cpf = "false" : _cpf
			
		return _regexCPF.test(_cpf);
	};