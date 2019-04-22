/**
	 * @memberof Type
	 * @method isRG(rg)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} rg
	 *      @description
	 *          Esse metodo verifica se o valor do parametro rg é um numero de RG valido.
	 *      @return {Boolean}
	 *          Retorna true se for RG.
	 *          Retorna false se não for RG.
	 */

	static isRG( rg ) {

        let _rg = Utility.removeWhiteSpace(rg);
		let _regexRG = /^([0-9]{1})[\.]?([0-9]{3})[\.]?([0-9]{3})$/;

		_rg.length === 0 ? _rg = "false" : _rg
			
		return _regexRG.test(_rg);
	};