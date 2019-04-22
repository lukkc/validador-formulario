(function( $ ){
 
    $.fn.ForgeValidation = function(errorMessages) {
    
       var _Validation = new Validation(this);
   
       _Validation.validateInput();
       _Validation.validateTextarea();
       _Validation.validateSelect();
       _Validation.validateSubmit();

       MessagingSystem.setUpMessage(errorMessages);
   
    };

})( jQuery ); 