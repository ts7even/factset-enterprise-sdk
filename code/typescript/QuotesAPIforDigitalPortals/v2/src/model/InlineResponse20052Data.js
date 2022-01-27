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
 * The InlineResponse20052Data model module.
 * @module model/InlineResponse20052Data
 * @version 0.9.0
 */
class InlineResponse20052Data {
    /**
     * Constructs a new <code>InlineResponse20052Data</code>.
     * @alias module:model/InlineResponse20052Data
     */
    constructor() { 
        
        InlineResponse20052Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20052Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20052Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20052Data} The populated <code>InlineResponse20052Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20052Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the type.
 * @member {Number} id
 */
InlineResponse20052Data.prototype['id'] = undefined;

/**
 * Name of the type.
 * @member {String} name
 */
InlineResponse20052Data.prototype['name'] = undefined;

/**
 * Description of the type.
 * @member {String} description
 */
InlineResponse20052Data.prototype['description'] = undefined;






export default InlineResponse20052Data;
