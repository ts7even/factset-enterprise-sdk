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
 * The InlineResponse2001Publisher model module.
 * @module model/InlineResponse2001Publisher
 * @version 0.9.0
 */
class InlineResponse2001Publisher {
    /**
     * Constructs a new <code>InlineResponse2001Publisher</code>.
     * Publisher of the news article. See endpoint &#x60;/news/publisher/list&#x60; for possible values.
     * @alias module:model/InlineResponse2001Publisher
     */
    constructor() { 
        
        InlineResponse2001Publisher.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001Publisher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001Publisher} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001Publisher} The populated <code>InlineResponse2001Publisher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001Publisher();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the publisher.
 * @member {Number} id
 */
InlineResponse2001Publisher.prototype['id'] = undefined;






export default InlineResponse2001Publisher;
