/**
 * @class Type
 * @constructor
 * 		Essa classe não deve ser instanciada.
 * @description
 * 		Type é uma classe com metodos que ajudam a 
 *      verificar o tipo de um determinado valor.
 */

class Type {
    
    constructor() {

        throw new Error('Esse objeto não deve ser instaciado.');
    }

    @import '/models/type/Type_isCEP.js';

    @import '/models/type/Type_isConfPassword.js';

    @import '/models/type/Type_isCPF.js';

    @import '/models/type/Type_isNumber.js';

    @import '/models/type/Type_isPhone.js';

    @import '/models/type/Type_isRG.js';

    @import '/models/type/Type_isLetter.js';
    
    @import '/models/type/Type_isDate.js';
    
    @import '/models/type/Type_isDateTime.js';
    
    @import '/models/type/Type_isEmail.js';
    
    @import '/models/type/Type_isMonth.js';
    
    @import '/models/type/Type_isSpecialCharacter.js';
    
    @import '/models/type/Type_isTime.js';

    @import '/models/type/Type_isUrl.js';
    
    @import '/models/type/Type_isWeek.js';
}