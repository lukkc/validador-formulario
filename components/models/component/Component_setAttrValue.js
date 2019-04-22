/**
 * @memberof Component
 * @method setAttrValue(atributo,value)
 *      @public 
 *          Esse metodo pode ser usado por todos.
 *      @param {String} atributo
 *          Nome de um atributo HTML5
 *      @param {String} value
 *      @description
 *          Esse metodo define o valor de um atributo do elemento,
 *          se o elemento possuir o atributo.
 *      @return {Throw}
 *          Retorna Throw com mensagem de erro se atributo não existir.
 *  
 */

setAttrValue(atributo, value) {
    
    let _element = this._element;
    let _hasAttr = this.hasAttr(atributo);

    if(_hasAttr)
        _element.attr(`${atributo}`, `${value}`);
        
    else
        throw new Error(`O element não possui um atributo ${atributo}`);
}