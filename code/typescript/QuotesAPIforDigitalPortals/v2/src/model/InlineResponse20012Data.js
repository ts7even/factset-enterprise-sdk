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
 * The InlineResponse20012Data model module.
 * @module model/InlineResponse20012Data
 * @version 0.9.1
 */
class InlineResponse20012Data {
    /**
     * Constructs a new <code>InlineResponse20012Data</code>.
     * @alias module:model/InlineResponse20012Data
     */
    constructor() { 
        
        InlineResponse20012Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20012Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012Data} The populated <code>InlineResponse20012Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20012Data();

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
 * Identifier of a media kind.
 * @member {Number} id
 */
InlineResponse20012Data.prototype['id'] = undefined;

/**
 * English name of the media kind.
 * @member {String} name
 */
InlineResponse20012Data.prototype['name'] = undefined;

/**
 * English description of the media kind.
 * @member {String} description
 */
InlineResponse20012Data.prototype['description'] = undefined;






export default InlineResponse20012Data;

