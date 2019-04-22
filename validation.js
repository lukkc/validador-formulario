(function ($) {

    $.Validation = function (form, isRetorn) {
        var $form = $(form);
        var listValidations = {elements : [], validations: []};
        var isRetorn = isRetorn === false || typeof(isRetorn) !== "boolean";
        
        
        
        
        
        function isValid(list) {
            var valid = true;
            
        
                list.forEach(function (el) {
                    if (el === false) {
                        valid = false;
                    }
                });
       
            return valid;
        }

        
        
        function generic() {

            $form.find("input, select, textarea").each(function (index) {

                var element = $(this);
                var isRequired = element.is('[required]');
                var isEmpty = element.val().length === 0;
                
                if(isRequired){
                    listValidations.elements.push(!isEmpty);
                }
                
            });
            
            listValidations.validations.push(isValid(listValidations.elements));
            listValidations.elements = [];
            
        }
        
        
        
        function valid() {
            var valids;
            
            generic();
            valids = isValid(listValidations.validations);
            
        
            if(valids){
                $form.on('submit', (function(e){
                    console.log(valids);
                   e.preventDefault(); 
                });
            }
            return valids;
        }
        
        
        
        if (isRetorn) {
            (function () {
                $form.on('click', '.js-button_submit', function (e) {
                    valid();
                });
            }());
            
        } else {
            return valid();
        }
        
    };
   
    

}(jQuery));


$.Validation("form");



    

