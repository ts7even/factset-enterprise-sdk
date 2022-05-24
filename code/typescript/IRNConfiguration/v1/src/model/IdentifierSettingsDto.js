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
 * The IdentifierSettingsDto model module.
 * @module model/IdentifierSettingsDto
 * @version 0.20.0
 */
class IdentifierSettingsDto {
    /**
     * Constructs a new <code>IdentifierSettingsDto</code>.
     * @alias module:model/IdentifierSettingsDto
     */
    constructor() { 
        
        IdentifierSettingsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdentifierSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentifierSettingsDto} obj Optional instance to populate.
     * @return {module:model/IdentifierSettingsDto} The populated <code>IdentifierSettingsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentifierSettingsDto();

            if (data.hasOwnProperty('AllowEdit')) {
                obj['AllowEdit'] = ApiClient.convertToType(data['AllowEdit'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} AllowEdit
 */
IdentifierSettingsDto.prototype['AllowEdit'] = undefined;






export default IdentifierSettingsDto;
