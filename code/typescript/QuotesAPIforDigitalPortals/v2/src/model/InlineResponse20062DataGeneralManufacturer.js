/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse20062DataGeneralManufacturer model module.
 * @module model/InlineResponse20062DataGeneralManufacturer
 * @version 0.9.1
 */
class InlineResponse20062DataGeneralManufacturer {
    /**
     * Constructs a new <code>InlineResponse20062DataGeneralManufacturer</code>.
     * Manufacturer of the investment product.
     * @alias module:model/InlineResponse20062DataGeneralManufacturer
     */
    constructor() { 
        
        InlineResponse20062DataGeneralManufacturer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20062DataGeneralManufacturer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20062DataGeneralManufacturer} obj Optional instance to populate.
     * @return {module:model/InlineResponse20062DataGeneralManufacturer} The populated <code>InlineResponse20062DataGeneralManufacturer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20062DataGeneralManufacturer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('lei')) {
                obj['lei'] = ApiClient.convertToType(data['lei'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the manufacturer.
 * @member {Number} id
 */
InlineResponse20062DataGeneralManufacturer.prototype['id'] = undefined;

/**
 * Name of the manufacturer.
 * @member {String} name
 */
InlineResponse20062DataGeneralManufacturer.prototype['name'] = undefined;

/**
 * Legal entity identifier (LEI) of the manufacturer.
 * @member {String} lei
 */
InlineResponse20062DataGeneralManufacturer.prototype['lei'] = undefined;






export default InlineResponse20062DataGeneralManufacturer;

