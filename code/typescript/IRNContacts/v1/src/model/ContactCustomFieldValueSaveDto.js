/**
 * IRN API v1
 * Allows users to create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ContactCustomFieldValueSaveDto model module.
 * @module model/ContactCustomFieldValueSaveDto
 * @version 0.9.1
 */
class ContactCustomFieldValueSaveDto {
    /**
     * Constructs a new <code>ContactCustomFieldValueSaveDto</code>.
     * @alias module:model/ContactCustomFieldValueSaveDto
     * @param code {String} 
     */
    constructor(code) { 
        
        ContactCustomFieldValueSaveDto.initialize(this, code);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code) { 
        obj['code'] = code;
    }

    /**
     * Constructs a <code>ContactCustomFieldValueSaveDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactCustomFieldValueSaveDto} obj Optional instance to populate.
     * @return {module:model/ContactCustomFieldValueSaveDto} The populated <code>ContactCustomFieldValueSaveDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactCustomFieldValueSaveDto();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('optionValues')) {
                obj['optionValues'] = ApiClient.convertToType(data['optionValues'], ['String']);
            }
            if (data.hasOwnProperty('evaluateFormula')) {
                obj['evaluateFormula'] = ApiClient.convertToType(data['evaluateFormula'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
ContactCustomFieldValueSaveDto.prototype['code'] = undefined;

/**
 * @member {String} value
 */
ContactCustomFieldValueSaveDto.prototype['value'] = undefined;

/**
 * @member {Array.<String>} optionValues
 */
ContactCustomFieldValueSaveDto.prototype['optionValues'] = undefined;

/**
 * @member {Boolean} evaluateFormula
 * @default false
 */
ContactCustomFieldValueSaveDto.prototype['evaluateFormula'] = false;






export default ContactCustomFieldValueSaveDto;

