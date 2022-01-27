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
 * The NumericConfigDto model module.
 * @module model/NumericConfigDto
 * @version 0.9.0
 */
class NumericConfigDto {
    /**
     * Constructs a new <code>NumericConfigDto</code>.
     * @alias module:model/NumericConfigDto
     */
    constructor() { 
        
        NumericConfigDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NumericConfigDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NumericConfigDto} obj Optional instance to populate.
     * @return {module:model/NumericConfigDto} The populated <code>NumericConfigDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NumericConfigDto();

            if (data.hasOwnProperty('decimals')) {
                obj['decimals'] = ApiClient.convertToType(data['decimals'], 'Number');
            }
            if (data.hasOwnProperty('splitType')) {
                obj['splitType'] = ApiClient.convertToType(data['splitType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} decimals
 */
NumericConfigDto.prototype['decimals'] = undefined;

/**
 * @member {String} splitType
 */
NumericConfigDto.prototype['splitType'] = undefined;






export default NumericConfigDto;
