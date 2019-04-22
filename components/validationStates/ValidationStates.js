class ValidationStates {

    constructor(element) {

        this._element = new Component(element);
        this._validations = {};
    }
    
    @import '/validationStates/ValidationStates_valueMissing.js'; 

    @import '/validationStates/ValidationStates_patternMisMatch.js';

    @import '/validationStates/ValidationStates_rangeOverFlow.js';

    @import '/validationStates/ValidationStates_rangeUnderFlow.js';

    @import '/validationStates/ValidationStates_stepMisMatch.js';

    @import '/validationStates/ValidationStates_tooLong.js';

    @import '/validationStates/ValidationStates_tooShort.js';

    @import '/validationStates/ValidationStates_typeMismatch.js';

    @import '/validationStates/ValidationStates_getListValidations.js';

    @import '/validationStates/ValidationStates_setListValidations.js'; 

}