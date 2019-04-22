
	
	/**
	 * @memberof Type
	 * @method isUrl(url)
	 *      @public
	 *          Esse metodo pode ser usado por todos.
	 *      @param {String} url
	 *      @description
	 *          Esse metodo verifica se o valor do parametro url é um url valida.
	 *      @return {Boolean}
	 *          Retorna true se for url.
	 *          Retorna false se não for url.
	 */

	static isUrl( url ) {

		let _url = Utility.removeWhiteSpace(url);
		let _regexUrl = /^(http|https):(\/\/)[\w]+$/;

		_url.length === 0 ? _url = "false" : _url
			
		return _regexUrl.test(_url);
	};