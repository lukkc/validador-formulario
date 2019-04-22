(function($){    
    
    $.Validation = function (form) {
        
        var $form = $(form);
        
        var verification = {};
        
        var isRequired = function (element) {
            return element.is('[required]');
        };
        
        var isEmpty = function (element) {
            var elementType = element.attr('type');
         
            if (elementType === "checkbox") {
                return !element.is(":checked");
            }else{
                return element.val().length === 0;
            }    
        };
        
        var addVerification = function (elementName, elementValue) {
            verification[elementName] = elementValue;
        };
        
        var valid = function (list) {
            var bool = true;
            
            for(var element in list){
                if (!list[element]) {
                    bool = false;
                }
            };
            return bool;
        };
        
        var generic = function () {
            var verificationElements = {};
            
            $form.find('input, select, textarea').each(function () {
                var element = $(this);
                var elementName = element.attr('name');
                
                if (isRequired(element)) {
                    verificationElements[elementName] = !isEmpty(element);
               } 
            });
            
            addVerification("generic", valid(verificationElements));
        };
        
        var isAlphabet = function (element) {
            return !(/[\W\d]/gi.test(element));
        };
        
        var isNumber = function (element) {
            return !(/[\D]/gi.test(element));
        };
        
        var isCaracterEspecial = function (element) {
            return !(/[\w\d\s][^\_]/.test(element));
        };
        
        var name = function (element) {
            return (/^([\w]{2,})([\s]{1})([\w]{2,})/.test(element)) && isAlphabet(element);
        };
        
        var email = function () {
            
        };
        
        var password = function () {
            
        };
        
        var confPassword = function () {
            
        };
        
        var cpf = function () {
            
        };
        
        var rg = function () {
            
        };
        
        var telefone = function () {
            
        };
        
        var birthday = function () {
            
        };

        var cep = function () {
            
        };
        
        
        
        var submit = function (list) {
            
            if (valid(list)) {
                $form.submit();
            }
            
        };
        
        var isValid = function () {
            $form.on('click', '.js-button_submit', function (e) {
                e.preventDefault();
                verification = [];
                
                
                
                generic();
                console.log(name())
                submit(verification);
            });
            
            
        };
        
        
        
        
        
        
        
        return isValid();
        
        
        
    }
    
}(jQuery));


$.Validation('form');

$("button").click(function(){
    
  
  
});


