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
 * The InlineResponse20018Data model module.
 * @module model/InlineResponse20018Data
 * @version 0.9.1
 */
class InlineResponse20018Data {
    /**
     * Constructs a new <code>InlineResponse20018Data</code>.
     * @alias module:model/InlineResponse20018Data
     */
    constructor() { 
        
        InlineResponse20018Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20018Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018Data} The populated <code>InlineResponse20018Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20018Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of a continent.
 * @member {Number} id
 */
InlineResponse20018Data.prototype['id'] = undefined;

/**
 * Name of the continent.
 * @member {String} name
 */
InlineResponse20018Data.prototype['name'] = undefined;






export default InlineResponse20018Data;

