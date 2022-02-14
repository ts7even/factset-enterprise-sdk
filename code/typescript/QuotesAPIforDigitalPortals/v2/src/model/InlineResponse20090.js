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
import InlineResponse20090Data from './InlineResponse20090Data';

/**
 * The InlineResponse20090 model module.
 * @module model/InlineResponse20090
 * @version 0.9.1
 */
class InlineResponse20090 {
    /**
     * Constructs a new <code>InlineResponse20090</code>.
     * @alias module:model/InlineResponse20090
     */
    constructor() { 
        
        InlineResponse20090.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20090</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20090} obj Optional instance to populate.
     * @return {module:model/InlineResponse20090} The populated <code>InlineResponse20090</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20090();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [InlineResponse20090Data]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InlineResponse20036Meta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Set of basic data for a list of matching notations.
 * @member {Array.<module:model/InlineResponse20090Data>} data
 */
InlineResponse20090.prototype['data'] = undefined;

/**
 * @member {module:model/InlineResponse20036Meta} meta
 */
InlineResponse20090.prototype['meta'] = undefined;






export default InlineResponse20090;

