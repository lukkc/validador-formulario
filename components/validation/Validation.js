class Validation {

    constructor( formulario ) {

        this._formulario = formulario;
        this._validations = {};

    }

    
    @import '/Validation/Validation_validateInput.js';

    @import '/Validation/Validation_validateTextarea.js';
    
    @import '/Validation/Validation_validateSelect.js';
    
    @import '/Validation/Validation_validateSubmit.js';
}