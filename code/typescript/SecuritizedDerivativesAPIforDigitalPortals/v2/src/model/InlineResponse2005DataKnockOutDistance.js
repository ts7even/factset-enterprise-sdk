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
import InlineResponse2005DataStrikeDistanceAbsolute from './InlineResponse2005DataStrikeDistanceAbsolute';
import InlineResponse2005DataStrikeDistanceRelative from './InlineResponse2005DataStrikeDistanceRelative';

/**
 * The InlineResponse2005DataKnockOutDistance model module.
 * @module model/InlineResponse2005DataKnockOutDistance
 * @version 0.9.0
 */
class InlineResponse2005DataKnockOutDistance {
    /**
     * Constructs a new <code>InlineResponse2005DataKnockOutDistance</code>.
     * Value range of the distance of the current underlying level to the knock-out.
     * @alias module:model/InlineResponse2005DataKnockOutDistance
     */
    constructor() { 
        
        InlineResponse2005DataKnockOutDistance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataKnockOutDistance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataKnockOutDistance} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataKnockOutDistance} The populated <code>InlineResponse2005DataKnockOutDistance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataKnockOutDistance();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = InlineResponse2005DataStrikeDistanceAbsolute.constructFromObject(data['absolute']);
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = InlineResponse2005DataStrikeDistanceRelative.constructFromObject(data['relative']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataStrikeDistanceAbsolute} absolute
 */
InlineResponse2005DataKnockOutDistance.prototype['absolute'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataStrikeDistanceRelative} relative
 */
InlineResponse2005DataKnockOutDistance.prototype['relative'] = undefined;






export default InlineResponse2005DataKnockOutDistance;
