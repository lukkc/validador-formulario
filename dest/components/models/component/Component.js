/**
 * @class Component 
 * @constructor
 * 		Essa classe não deve ser instanciada.
 * @description
 * 		Component é uma classe que possui metodos
 *  	de manipulação e verificação para um DOMElement.
 */

class Component {
    
    constructor(element) {
        
        this._element = element;
        this.isValid();
    }


    /**
     * @memberof Component
     * @method getValue() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo obtem o valor do elemento.
     * 			@return {String}
     * 				Retorna o valor do elemento.
     */

    getValue() {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _elementValue = '';
        let _isInput = this.isElement('input');
        let _isSelect = this.isElement('select');
        let _isTextArea = this.isElement('textarea');

        if (_isValidElement) {
            
            if (_isSelect)
                return this._getSelectValue();
            
            if (_isTextArea)
                return this._getTextareaValue();
            
            if(_isInput)	
                return this._getInputValue();
        }
        
        return _elementValue;
    }

    
    
    /**
     * @memberof Component
     * @method setValue(value) 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@param {String} value
     * 			@description
     * 				Esse metodo define o valor do elemento.
     * 			@return
     * 				Sem retorno.
     */

    setValue(value) {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _value = Utility.trim(value);
        let _isInput = this.isElement('input');
        let _isSelect = this.isElement('select');
        let _isTextArea = this.isElement('textarea');

        if (_isValidElement) {
            
            if (_isSelect)
                this._setSelectValue(_value);
            
            if (_isTextArea)
                this._setTextareaValue(_value);
            
            if (_isInput)	
                this._setInputValue(_value);
        }
    }

   
   
    /**
     * @memberof Component
     * @method isValid() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o parametro passado é um DOM Element <input>,
     *  			<select> ou <texarea>.
     * 			@return {Boolean || Throw}
     * 				Retorna true, se for um elemento valido.
     * 				Retorno throw(false) com a mensagem de erro, se não for um
     * 				elemento valido.
     */

    isValid() {
        
        let _element = this._element;

        if(_element === undefined || _element === null)
            throw new Error('Parametro obrigatorio.')

        this._type();
        this._length();
            
        return true;

    };

   
   
   /**
     * @memberof Component 
     * @method isElement(element) 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o element é do tipo do parametro passado.
     * 			@return {Boolean}
     * 				Retorna true, se for
     * 				Retorno false se não for.
     */

    isElement(element) {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _tagName;

        if(_isValidElement){

            _tagName = _element[0].tagName.toLowerCase();

            return _tagName === `${element}`;
        };

        return false;
    };

   
   
    /**
     * @memberof Component
     * @method isEmpty() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o valor do Element está vazio.
     * 			@return {Boolean}
     * 				Retorna true, se estiver vazio.
     * 				Retorno false se não estiver vazio.
     */

    isEmpty() {
        
        let _element = this._element;
        let _isValidElement = this.isValid();
        let _elementValue = this.getValue();
        _elementValue = Utility.removeWhiteSpace(_elementValue);

        return _elementValue.length === 0 ;
    }

    
    
    /**
     * @memberof Component
     * @method isChecked() 
     * 			@public 
     * 				Esse metodo pode ser usado por todos.
     * 			@description
     * 				Esse metodo verifica se o Element está marcado como checado.
     * 			@return {Boolean}
     * 				Retorna true, se estiver marcado.
     * 				Retorno false se não estiver marcado.
     */

    isChecked() {
        
        let _element = this._element;
        let _isInput = this.isElement('input');
        let _elementType = this.getAttrValue('type');

        if(_isInput){

            _elementType.toLowerCase();

            if (_elementType === "radio" || _elementType === "checkbox") {
                return _element.is(":checked");
            }
        }

        throw new Error('O element não possui uma propriedade checked');
    }

   
   
    /**
     * @memberof Component
     * @method _length() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.		
     * 			@description
     * 				Esse metodo verifica se o comprimento do elemento é igual a 1.
     * 			@return {Throw}
     * 				Retorna throw(false) com a mensagem de erro, se comprimento for
     * 				diferente de 1.
     */

    _length() {

        let _element = this._element;
        
        if(_element.length > 1)
            throw new Error('Tipo de objeto invalido.');

        if(_element.length < 1)
            throw new Error('Tipo de objeto invalido.');

        return true;
    }

    
    
    /**
     * @memberof Component
     * @method _type() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.		
     * 			@description
     * 				Esse metodo verifica se o element é igual
     *              a input, selet ou textarea;
     * 			@return {Throw}
     * 				Retorno throw(false) com a mensagem de erro, se não for igual
     * 				a input, select ou textarea.
     */

    
    _type() {
        
        let _element = this._element;
        let _validElements = ['input', 'select', 'textarea'];
        let _elementTagName;

        try {
            
            _elementTagName = _element[0].tagName.toLowerCase();

            if( !_validElements.some(type => _elementTagName === type) )
                throw new Error('Tipo de objeto invalido.');

            return true;

        } catch (error) {

            throw new Error('Tipo de objeto invalido.');
        }
    }

   
   
   /**
     * @memberof Component
     * @method _getSelectValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <select>.
     * 			@return {String}
     * 				Retorna o valor.
     */

    _getSelectValue() {
        
        let _element = this._element;
        let _isSelect = this.isElement('select');

        if(_isSelect)
            return ('' + _element.find(':selected').val());
    }



    /**
     * @memberof Component
     * @method _getTextareaValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <textarea>.
     * 			@return {String}
     * 				Retorna o valor.
     */

    _getTextareaValue() {
        
        let _element = this._element;
        let _isTextArea = this.isElement('textarea');

        if (_isTextArea)
            return ('' + _element.val());
    }

    
    
    /**
     * @memberof Component
     * @method _getInputValue() 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@description
     * 				Esse metodo obtem o valor de um DOMElement <input>.
     * 			@return {String}
     * 				Retorna valor.
     */

    _getInputValue() {
        
        let _element = this._element;
        let _isInput = this.isElement('input');
        let _hasAttrSrc = this.hasAttr('src');
        let _elementType = this.getAttrValue('type');

        if(_isInput){
            
            _elementType.toLowerCase();
            
            if(_elementType === "image"){
                
                if(_hasAttrSrc)
                    return this.getAttrValue('src');

                return '';
            } 

            return ('' + _element.val());
        }
    }

    
    
    /**
     * @memberof Component
     * @method _setSelectValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     *	 		@param {String} _value  
    * 			@description
    * 				Esse metodo define o valor de um DOMElement <select>.
    * 			@return
    * 				sem retorno
    */

    _setSelectValue(_value) {
        
        let _element = this._element;
        let _isSelect = this.isElement('select');
        let _elementOption;

        if(_isSelect){

            _elementOption = _element.find(':selected:not(:first-child)');
            _elementOption.attr('value', _value);
        }
    }

    
    
    /**
     * @memberof Component
     * @method _setTextareaValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe
     * 			@param {String} _value  
     * 			@description
     * 				Esse metodo define o valor de um DOMElement <textarea>.
     * 			@return
     * 				Sem retorno
     */

    _setTextareaValue(_value) {
        
        let _element = this._element;
        let _isTextArea = this.isElement('textarea');

        if (_isTextArea)
            _element.attr('value', _value).text(_value);
    }

    
    
    /**
     * @memberof Component
     * @method _setInputValue(_value) 
     * 			@private 
     * 				Esse metodo so deve ser usado pela classe.
     * 			@param {String} _value  
     * 			@description
     * 				Esse metodo define o valor de um DOMElement <input>.
     * 			@return
     * 				Sem retorno
     */

    _setInputValue(_value) {
        
        let _isInput = this.isElement('input');
        let _hasAttrSrc = this.hasAttr('src');
        let _elementType = this.getAttrValue('type');

        if(_isInput){
            
            _elementType.toLowerCase();
            
            if(_elementType === "image"){
                
                if(_hasAttrSrc)
                   this.setAttrValue('src', _value);
                
                return;	
            } 

            this.setAttrValue('value', _value);
            return;
        }
    }

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

	
	
	/**
	 * @memberof Component
	 * @method hasAttr(atributo)
	 * 		@public
	 * 				Esse metodo pode ser usado por todos.
	 * 		@description
	 * 				Esse metodo verifica se o elemento tem um determinado atributo.
	 * 		@return {Boolean}
	 * 				Retorna true se contem o atributo.
	 * 				Retorna false se não contem.
	 */

	hasAttr(atributo) {
		
		let _element = this._element;
		let _isValidElement = this.isValid();

		if(_isValidElement)
			return _element.is(`[${atributo}]`);

		return false;
	};


}