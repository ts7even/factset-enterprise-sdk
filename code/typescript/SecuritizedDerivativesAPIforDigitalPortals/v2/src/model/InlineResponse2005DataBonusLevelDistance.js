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
 * The InlineResponse2005DataBonusLevelDistance model module.
 * @module model/InlineResponse2005DataBonusLevelDistance
 * @version 0.9.1
 */
class InlineResponse2005DataBonusLevelDistance {
    /**
     * Constructs a new <code>InlineResponse2005DataBonusLevelDistance</code>.
     * Value range of the distance of the current underlying level to the bonus level.
     * @alias module:model/InlineResponse2005DataBonusLevelDistance
     */
    constructor() { 
        
        InlineResponse2005DataBonusLevelDistance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataBonusLevelDistance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataBonusLevelDistance} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataBonusLevelDistance} The populated <code>InlineResponse2005DataBonusLevelDistance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataBonusLevelDistance();

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
InlineResponse2005DataBonusLevelDistance.prototype['absolute'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataStrikeDistanceRelative} relative
 */
InlineResponse2005DataBonusLevelDistance.prototype['relative'] = undefined;






export default InlineResponse2005DataBonusLevelDistance;

