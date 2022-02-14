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
 * The InlineResponse2007DataSingleDistance model module.
 * @module model/InlineResponse2007DataSingleDistance
 * @version 0.9.1
 */
class InlineResponse2007DataSingleDistance {
    /**
     * Constructs a new <code>InlineResponse2007DataSingleDistance</code>.
     * Distance of the barrier level to the current underlying level.
     * @alias module:model/InlineResponse2007DataSingleDistance
     */
    constructor() { 
        
        InlineResponse2007DataSingleDistance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007DataSingleDistance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007DataSingleDistance} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007DataSingleDistance} The populated <code>InlineResponse2007DataSingleDistance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007DataSingleDistance();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Number');
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = ApiClient.convertToType(data['relative'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Distance in absolute terms.
 * @member {Number} absolute
 */
InlineResponse2007DataSingleDistance.prototype['absolute'] = undefined;

/**
 * Distance relative to the current underlying level.
 * @member {Number} relative
 */
InlineResponse2007DataSingleDistance.prototype['relative'] = undefined;






export default InlineResponse2007DataSingleDistance;

