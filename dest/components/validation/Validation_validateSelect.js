validateSelect() {
    $('select').bind('change', function(e) {
            
        let $element = $(this);
        let _ValidationState = new ValidationStates( $element );
        let _isValid;
        let _listValidations;

        _ValidationState.setListValidations();
        _listValidations = Object.values(_ValidationState.getListValidations());
        _isValid = !_listValidations.some( elem => elem === false );

        if( !_isValid ) {
            MessagingSystem.show($element);
        }else{
            MessagingSystem.hide($element);
        }
    });
}