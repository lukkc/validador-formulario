// /**
//  * @name {function} patternMisMatch
//  * 	
//  * @description [ verifies if the element contains the
//  * 	              pattern attribute, if it contains,
//  * 	              check if the value is in the default,
//  * 	              if it has, returns true, otherwise 
//  * 	              return false ]
//  *
//  * @param {<element>} element [ Only <input> or <textarea> ]
//  *
//  * @return {Boolean} [ if it contains pattern, and value
//  *                     is in the default, returns true,
//  *                     otherwise returns false ]
//  */
'use strict';
function patternMisMatch(element) {

	// verifies that the element contains the pattern attribute;
	var hasPattern = hasAttrPattern(element);
	var elementValue = getValue(element);
	var _isInput = isInput(element);
	var _isTextarea = isTextArea(element);
	
	if(hasPattern && (_isInput || _isTextarea) ) {
		//get the value of the pattern attribute of the element
		var pattern = element.attr('pattern');
			pattern = RegExp(pattern);

		return pattern.test(elementValue);
	}

	return true;
}