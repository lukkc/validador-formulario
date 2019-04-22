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

    @import '/models/component/Component_getValue.js'; 
    
    @import '/models/component/Component_setValue.js'; 
    
    @import '/models/component/Component_isValid.js'; 
    
    @import '/models/component/Component_isElement.js'; 
    
    @import '/models/component/Component_isEmpty.js';
    
    @import '/models/component/Component_isChecked.js';
    
    @import '/models/component/Component_length.js';
    
    @import '/models/component/Component_type.js';
    
    @import '/models/component/Component_getSelectValue.js';
    
    @import '/models/component/Component_getTextareaValue.js';

    @import '/models/component/Component_getInputValue.js';
    
    @import '/models/component/Component_setSelectValue.js';

    @import '/models/component/Component_setTextareaValue.js';

    @import '/models/component/Component_setInputValue.js';

    @import '/models/component/Component_getAttrValue.js';

    @import '/models/component/Component_setAttrValue.js';

    @import '/models/component/Component_hasAttr.js';

}