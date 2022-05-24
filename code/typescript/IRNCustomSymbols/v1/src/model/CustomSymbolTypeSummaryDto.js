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
 * The CustomSymbolTypeSummaryDto model module.
 * @module model/CustomSymbolTypeSummaryDto
 * @version 0.20.0
 */
class CustomSymbolTypeSummaryDto {
    /**
     * Constructs a new <code>CustomSymbolTypeSummaryDto</code>.
     * @alias module:model/CustomSymbolTypeSummaryDto
     */
    constructor() { 
        
        CustomSymbolTypeSummaryDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomSymbolTypeSummaryDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomSymbolTypeSummaryDto} obj Optional instance to populate.
     * @return {module:model/CustomSymbolTypeSummaryDto} The populated <code>CustomSymbolTypeSummaryDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomSymbolTypeSummaryDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CustomSymbolTypeSummaryDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
CustomSymbolTypeSummaryDto.prototype['name'] = undefined;






export default CustomSymbolTypeSummaryDto;

