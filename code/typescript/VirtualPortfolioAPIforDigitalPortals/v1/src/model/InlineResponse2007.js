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
import InlineResponse201Meta from './InlineResponse201Meta';

/**
 * The InlineResponse2007 model module.
 * @module model/InlineResponse2007
 * @version 0.9.0
 */
class InlineResponse2007 {
    /**
     * Constructs a new <code>InlineResponse2007</code>.
     * @alias module:model/InlineResponse2007
     */
    constructor() { 
        
        InlineResponse2007.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007} The populated <code>InlineResponse2007</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse201Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * The response is always empty.
 * @member {Object} data
 */
InlineResponse2007.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse201Meta} meta
 */
InlineResponse2007.prototype['meta'] = undefined;






export default InlineResponse2007;
