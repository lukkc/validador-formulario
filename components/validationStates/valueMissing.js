/**
 * @name valueMissing
 * 	
 * @description [ verifies if the element contains the
 * 	              required attribute, if it contains, 
 *                checks if the value is missing, if it 
 *                returns false, otherwise returns true ]
 *
 * @param {<element>} element [ Only <input> or
 *	                            <select> or <textarea> ]
 *
 * @return {Boolean} [ if contains required and missing
 *                     value, returns false, otherwise
 *                     returns true ]
 */
'use strict';
function valueMissing(element) {
	
	// verifies that the element contains the required attribute;
	var isRequired = hasAttrRequired(element);

	// check if the value is missing;
	var hasValueMissing = isEmpty(element);

	return !(isRequired && hasValueMissing);
}

