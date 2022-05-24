/**
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
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
 * The ContactCustomFieldFormulaDto model module.
 * @module model/ContactCustomFieldFormulaDto
 * @version 0.20.0
 */
class ContactCustomFieldFormulaDto {
    /**
     * Constructs a new <code>ContactCustomFieldFormulaDto</code>.
     * @alias module:model/ContactCustomFieldFormulaDto
     */
    constructor() { 
        
        ContactCustomFieldFormulaDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactCustomFieldFormulaDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactCustomFieldFormulaDto} obj Optional instance to populate.
     * @return {module:model/ContactCustomFieldFormulaDto} The populated <code>ContactCustomFieldFormulaDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactCustomFieldFormulaDto();

            if (data.hasOwnProperty('Formula')) {
                obj['Formula'] = ApiClient.convertToType(data['Formula'], 'String');
            }
            if (data.hasOwnProperty('IsScreening')) {
                obj['IsScreening'] = ApiClient.convertToType(data['IsScreening'], 'Boolean');
            }
            if (data.hasOwnProperty('Symbol')) {
                obj['Symbol'] = ApiClient.convertToType(data['Symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Formula
 */
ContactCustomFieldFormulaDto.prototype['Formula'] = undefined;

/**
 * @member {Boolean} IsScreening
 * @default false
 */
ContactCustomFieldFormulaDto.prototype['IsScreening'] = false;

/**
 * @member {String} Symbol
 */
ContactCustomFieldFormulaDto.prototype['Symbol'] = undefined;






export default ContactCustomFieldFormulaDto;
