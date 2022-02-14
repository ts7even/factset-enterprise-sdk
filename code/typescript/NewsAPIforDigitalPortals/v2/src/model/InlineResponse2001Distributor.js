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
 * The InlineResponse2001Distributor model module.
 * @module model/InlineResponse2001Distributor
 * @version 0.9.1
 */
class InlineResponse2001Distributor {
    /**
     * Constructs a new <code>InlineResponse2001Distributor</code>.
     * Distributor of the news article. See endpoint &#x60;/news/distributor/list&#x60; for possible values.
     * @alias module:model/InlineResponse2001Distributor
     */
    constructor() { 
        
        InlineResponse2001Distributor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001Distributor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Distributor} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Distributor} The populated <code>InlineResponse2001Distributor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Distributor();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the distributor.
 * @member {Number} id
 */
InlineResponse2001Distributor.prototype['id'] = undefined;






export default InlineResponse2001Distributor;

