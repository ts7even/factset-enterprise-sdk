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
 * The InlineResponse20085DataType model module.
 * @module model/InlineResponse20085DataType
 * @version 0.9.0
 */
class InlineResponse20085DataType {
    /**
     * Constructs a new <code>InlineResponse20085DataType</code>.
     * Trading schedule event type.
     * @alias module:model/InlineResponse20085DataType
     */
    constructor() { 
        
        InlineResponse20085DataType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20085DataType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20085DataType} obj Optional instance to populate.
     * @return {module:model/InlineResponse20085DataType} The populated <code>InlineResponse20085DataType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20085DataType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the event type.
 * @member {Number} id
 */
InlineResponse20085DataType.prototype['id'] = undefined;

/**
 * Code of the event type.
 * @member {String} code
 */
InlineResponse20085DataType.prototype['code'] = undefined;






export default InlineResponse20085DataType;
