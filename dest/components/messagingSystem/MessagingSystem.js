
class MessagingSystem {

    constructor(){
 
        throw new Error('Esse objeto não deve ser instaciado.');
        this.messages = {};	
    }
static show(element, getListValidation) {

    let _target = element.attr('targetMsg');
    let _listValidations = getListValidation;
    let _listMessages = this.messages === undefined ? this.messages = {} : this.messages;
    let _messagesError = "";
    let _standardMessages = {
        patternMisMatch: "vamos ver se agora da certo",
        valueMissing: "faltando alguma coisa"
    }

    $.each(_listValidations, function( typeValidation , valueValidation ) {
        
        if( valueValidation === false ) {
            
            if( _listMessages[_target] === undefined ) {

                _messagesError += "<span class='errorMsg'>"+ _standardMessages[typeValidation] + "</span>";
            }else{
                _messagesError += "<span class='errorMsg'>"+ _listMessages[_target][typeValidation] + "</span>";
            }
          
        }
    });

    _target = "#" + _target;
    $(_target).find( ".errorMsg" ).remove();
    $(_target).append(_messagesError);
}

static hide(element) {
    let target = "#" + element.attr('targetMsg');
    $(target).find( ".errorMsg" ).remove();
}

static setUpMessage(messages) {
    this.messages = new Object(messages);
}
 

}

