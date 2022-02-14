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
 * The ExtendedTextConfigDto model module.
 * @module model/ExtendedTextConfigDto
 * @version 0.9.1
 */
class ExtendedTextConfigDto {
    /**
     * Constructs a new <code>ExtendedTextConfigDto</code>.
     * @alias module:model/ExtendedTextConfigDto
     */
    constructor() { 
        
        ExtendedTextConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtendedTextConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtendedTextConfigDto} obj Optional instance to populate.
     * @return {module:model/ExtendedTextConfigDto} The populated <code>ExtendedTextConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtendedTextConfigDto();

            if (data.hasOwnProperty('maxChars')) {
                obj['maxChars'] = ApiClient.convertToType(data['maxChars'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} maxChars
 */
ExtendedTextConfigDto.prototype['maxChars'] = undefined;






export default ExtendedTextConfigDto;

