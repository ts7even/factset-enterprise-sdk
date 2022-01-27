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
import InlineResponse2005DataBonusLevelDistance from './InlineResponse2005DataBonusLevelDistance';
import InlineResponse2005DataBonusLevelValue from './InlineResponse2005DataBonusLevelValue';

/**
 * The InlineResponse2005DataBonusLevel model module.
 * @module model/InlineResponse2005DataBonusLevel
 * @version 0.9.0
 */
class InlineResponse2005DataBonusLevel {
    /**
     * Constructs a new <code>InlineResponse2005DataBonusLevel</code>.
     * Value ranges related to the bonus level.
     * @alias module:model/InlineResponse2005DataBonusLevel
     */
    constructor() { 
        
        InlineResponse2005DataBonusLevel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataBonusLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataBonusLevel} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataBonusLevel} The populated <code>InlineResponse2005DataBonusLevel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataBonusLevel();

            if (data.hasOwnProperty('value')) {
                obj['value'] = InlineResponse2005DataBonusLevelValue.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = InlineResponse2005DataBonusLevelDistance.constructFromObject(data['distance']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataBonusLevelValue} value
 */
InlineResponse2005DataBonusLevel.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataBonusLevelDistance} distance
 */
InlineResponse2005DataBonusLevel.prototype['distance'] = undefined;






export default InlineResponse2005DataBonusLevel;
