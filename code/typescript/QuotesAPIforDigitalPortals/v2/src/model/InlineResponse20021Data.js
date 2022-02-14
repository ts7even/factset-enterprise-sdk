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
 * The InlineResponse20021Data model module.
 * @module model/InlineResponse20021Data
 * @version 0.9.1
 */
class InlineResponse20021Data {
    /**
     * Constructs a new <code>InlineResponse20021Data</code>.
     * @alias module:model/InlineResponse20021Data
     */
    constructor() { 
        
        InlineResponse20021Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20021Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20021Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20021Data} The populated <code>InlineResponse20021Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20021Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of a country.
 * @member {Number} id
 */
InlineResponse20021Data.prototype['id'] = undefined;

/**
 * ISO 3166-1 alpha-2 code of the country.
 * @member {String} code
 */
InlineResponse20021Data.prototype['code'] = undefined;

/**
 * Name of the country.
 * @member {String} name
 */
InlineResponse20021Data.prototype['name'] = undefined;






export default InlineResponse20021Data;

