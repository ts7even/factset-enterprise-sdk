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
 * The InlineResponse2008DataType model module.
 * @module model/InlineResponse2008DataType
 * @version 0.9.1
 */
class InlineResponse2008DataType {
    /**
     * Constructs a new <code>InlineResponse2008DataType</code>.
     * Type of the market.
     * @alias module:model/InlineResponse2008DataType
     */
    constructor() { 
        
        InlineResponse2008DataType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008DataType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008DataType} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008DataType} The populated <code>InlineResponse2008DataType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008DataType();

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
InlineResponse2008DataType.prototype['id'] = undefined;

/**
 * Name of the type.
 * @member {String} name
 */
InlineResponse2008DataType.prototype['name'] = undefined;






export default InlineResponse2008DataType;

