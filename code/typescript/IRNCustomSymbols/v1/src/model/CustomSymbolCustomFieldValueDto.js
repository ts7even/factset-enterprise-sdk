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
import CustomSymbolContact from './CustomSymbolContact';

/**
 * The CustomSymbolCustomFieldValueDto model module.
 * @module model/CustomSymbolCustomFieldValueDto
 * @version 0.20.0
 */
class CustomSymbolCustomFieldValueDto {
    /**
     * Constructs a new <code>CustomSymbolCustomFieldValueDto</code>.
     * @alias module:model/CustomSymbolCustomFieldValueDto
     */
    constructor() { 
        
        CustomSymbolCustomFieldValueDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomSymbolCustomFieldValueDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomSymbolCustomFieldValueDto} obj Optional instance to populate.
     * @return {module:model/CustomSymbolCustomFieldValueDto} The populated <code>CustomSymbolCustomFieldValueDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomSymbolCustomFieldValueDto();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('optionValues')) {
                obj['optionValues'] = ApiClient.convertToType(data['optionValues'], ['String']);
            }
            if (data.hasOwnProperty('contacts')) {
                obj['contacts'] = ApiClient.convertToType(data['contacts'], [CustomSymbolContact]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
CustomSymbolCustomFieldValueDto.prototype['code'] = undefined;

/**
 * @member {String} value
 */
CustomSymbolCustomFieldValueDto.prototype['value'] = undefined;

/**
 * @member {Array.<String>} optionValues
 */
CustomSymbolCustomFieldValueDto.prototype['optionValues'] = undefined;

/**
 * @member {Array.<module:model/CustomSymbolContact>} contacts
 */
CustomSymbolCustomFieldValueDto.prototype['contacts'] = undefined;






export default CustomSymbolCustomFieldValueDto;
