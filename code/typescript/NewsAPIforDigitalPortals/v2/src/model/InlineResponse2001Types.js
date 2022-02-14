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
 * The InlineResponse2001Types model module.
 * @module model/InlineResponse2001Types
 * @version 0.9.1
 */
class InlineResponse2001Types {
    /**
     * Constructs a new <code>InlineResponse2001Types</code>.
     * @alias module:model/InlineResponse2001Types
     */
    constructor() { 
        
        InlineResponse2001Types.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001Types</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Types} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Types} The populated <code>InlineResponse2001Types</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Types();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the type of news article.
 * @member {Number} id
 */
InlineResponse2001Types.prototype['id'] = undefined;






export default InlineResponse2001Types;

