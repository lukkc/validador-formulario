validateSubmit() {

    let _$formulario = this._formulario;
    let _hasConfPassword;

    _$formulario.submit(function(e){

        _hasConfPassword = Type.isConfPassword(_$formulario);
        
        _$formulario.find('input, select, textarea').each(function () {
        
            let $element = $(this);
            let _ValidationState = new ValidationStates( $element );
            let _isValid;
            let _listValidations;

            _ValidationState.setListValidations();
            _listValidations = Object.values(_ValidationState.getListValidations());
            _isValid = !_listValidations.some( elem => elem === false );

            if( !_isValid ) {
                e.preventDefault();
                MessagingSystem.show($element,  _ValidationState.getListValidations());

            }else{
                MessagingSystem.hide($element);
            }
        });
    
        if( !_hasConfPassword ) {
            
            let $elementPassword = _$formulario.find('[type="password"]').eq(1);

            e.preventDefault();
            MessagingSystem.show($elementPassword);
        }else{

            let $elementPassword = _$formulario.find('[type="password"]').eq(1);

            MessagingSystem.hide($elementPassword);
        }

    });
}