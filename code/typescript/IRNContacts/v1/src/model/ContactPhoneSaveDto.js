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
 * The ContactPhoneSaveDto model module.
 * @module model/ContactPhoneSaveDto
 * @version 0.9.0
 */
class ContactPhoneSaveDto {
    /**
     * Constructs a new <code>ContactPhoneSaveDto</code>.
     * @alias module:model/ContactPhoneSaveDto
     */
    constructor() { 
        
        ContactPhoneSaveDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactPhoneSaveDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContactPhoneSaveDto} obj Optional instance to populate.
     * @return {module:model/ContactPhoneSaveDto} The populated <code>ContactPhoneSaveDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactPhoneSaveDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('typeId')) {
                obj['typeId'] = ApiClient.convertToType(data['typeId'], 'String');
            }
            if (data.hasOwnProperty('isPrimary')) {
                obj['isPrimary'] = ApiClient.convertToType(data['isPrimary'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ContactPhoneSaveDto.prototype['id'] = undefined;

/**
 * @member {String} number
 */
ContactPhoneSaveDto.prototype['number'] = undefined;

/**
 * @member {String} typeId
 */
ContactPhoneSaveDto.prototype['typeId'] = undefined;

/**
 * @member {Boolean} isPrimary
 */
ContactPhoneSaveDto.prototype['isPrimary'] = undefined;






export default ContactPhoneSaveDto;
