/**
 * @memberof Component
 * @method getAttrValue(atributo)
 *      @public 
 *          Esse metodo pode ser usado por todos.
 *      @param {String} atributo
 *          Nome de um atributo HTML5
 *      @description
 *          Esse metodo obtem o valor de um atributo do elemento,
 *          se o elemento possuir o atributo.
 *      @return {String || Throw}
 *          Retorna o valor do atributo.
 *          Retorna Throw com mensagem de erro se atributo não existir.
 *  
 */

getAttrValue(atributo) {
    
    let _element = this._element;
    let _hasAttr = this.hasAttr(atributo);

    if(_hasAttr)
       return _element.attr(`${atributo}`);
    
    else
        return '';
}

