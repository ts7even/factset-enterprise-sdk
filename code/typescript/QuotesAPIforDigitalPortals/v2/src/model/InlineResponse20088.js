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
import InlineResponse20036Meta from './InlineResponse20036Meta';
import InlineResponse20088Data from './InlineResponse20088Data';

/**
 * The InlineResponse20088 model module.
 * @module model/InlineResponse20088
 * @version 0.9.1
 */
class InlineResponse20088 {
    /**
     * Constructs a new <code>InlineResponse20088</code>.
     * @alias module:model/InlineResponse20088
     */
    constructor() { 
        
        InlineResponse20088.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20088</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20088} obj Optional instance to populate.
     * @return {module:model/InlineResponse20088} The populated <code>InlineResponse20088</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20088();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse20088Data]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse20036Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * List of notations.
 * @member {Array.<module:model/InlineResponse20088Data>} data
 */
InlineResponse20088.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse20036Meta} meta
 */
InlineResponse20088.prototype['meta'] = undefined;






export default InlineResponse20088;

