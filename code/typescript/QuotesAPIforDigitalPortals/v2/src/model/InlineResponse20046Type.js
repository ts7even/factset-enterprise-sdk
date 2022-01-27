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
 * The InlineResponse20046Type model module.
 * @module model/InlineResponse20046Type
 * @version 0.9.0
 */
class InlineResponse20046Type {
    /**
     * Constructs a new <code>InlineResponse20046Type</code>.
     * Type of the benchmark. For possible values, see endpoint &#x60;/basic/benchmark/type/list&#x60;.
     * @alias module:model/InlineResponse20046Type
     */
    constructor() { 
        
        InlineResponse20046Type.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20046Type</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20046Type} obj Optional instance to populate.
     * @return {module:model/InlineResponse20046Type} The populated <code>InlineResponse20046Type</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20046Type();

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
 * Identifier of the type.
 * @member {Number} id
 */
InlineResponse20046Type.prototype['id'] = undefined;

/**
 * Name of the type.
 * @member {String} name
 */
InlineResponse20046Type.prototype['name'] = undefined;






export default InlineResponse20046Type;
