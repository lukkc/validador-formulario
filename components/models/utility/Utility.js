/**
 * @class Utility
 * @constructor
 * 		Essa classe não deve ser instanciada.
 * @description
 * 		Utility é uma classe que possui metodos
 *  	auxiliares e utilitarios.
 * @implements
 * 		Type
 * 			.isDate
 * 			.isWeek()
 * 			.isDateTime()
 */

class Utility {
    
    constructor(){
 
        throw new Error('Esse objeto não deve ser instaciado.');	
    }

    @import '/models/utility/Utility_trim.js'; 
    
    @import '/models/utility/Utility_removeWhiteSpace.js'; 
    
    @import '/models/utility/Utility_getTimeFromDateTime.js'; 
    
    @import '/models/utility/Utility_getRegexDateTime.js'; 
    
    @import '/models/utility/Utility_getDateFromDateTime.js'; 
    
    @import '/models/utility/Utility_compareWeekIsGreaterThanOrEqual.js'; 

    @import '/models/utility/Utility_compareWeekIsLessThanOrEqual.js'; 
    
    @import '/models/utility/Utility_compareDateTimeIsGreaterThanOrEqual.js'; 

    @import '/models/utility/Utility_compareDateTimeIsLessThanOrEqual.js'; 
    
    @import '/models/utility/Utility_addZeroOnMonth.js'; 
    
    @import '/models/utility/Utility_addZeroOnDate.js'; 
} 