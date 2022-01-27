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
 * The HeadlineFormatConfigDto model module.
 * @module model/HeadlineFormatConfigDto
 * @version 0.9.0
 */
class HeadlineFormatConfigDto {
    /**
     * Constructs a new <code>HeadlineFormatConfigDto</code>.
     * @alias module:model/HeadlineFormatConfigDto
     */
    constructor() { 
        
        HeadlineFormatConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HeadlineFormatConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HeadlineFormatConfigDto} obj Optional instance to populate.
     * @return {module:model/HeadlineFormatConfigDto} The populated <code>HeadlineFormatConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HeadlineFormatConfigDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('customString')) {
                obj['customString'] = ApiClient.convertToType(data['customString'], 'String');
            }
            if (data.hasOwnProperty('customFieldName')) {
                obj['customFieldName'] = ApiClient.convertToType(data['customFieldName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
HeadlineFormatConfigDto.prototype['name'] = undefined;

/**
 * @member {String} customString
 */
HeadlineFormatConfigDto.prototype['customString'] = undefined;

/**
 * @member {String} customFieldName
 */
HeadlineFormatConfigDto.prototype['customFieldName'] = undefined;






export default HeadlineFormatConfigDto;
