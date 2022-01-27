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
import InlineResponse2007DataRangeLower from './InlineResponse2007DataRangeLower';
import InlineResponse2007DataRangeUpper from './InlineResponse2007DataRangeUpper';

/**
 * The InlineResponse2007DataRange model module.
 * @module model/InlineResponse2007DataRange
 * @version 0.9.0
 */
class InlineResponse2007DataRange {
    /**
     * Constructs a new <code>InlineResponse2007DataRange</code>.
     * Range barrier.
     * @alias module:model/InlineResponse2007DataRange
     */
    constructor() { 
        
        InlineResponse2007DataRange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007DataRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007DataRange} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007DataRange} The populated <code>InlineResponse2007DataRange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007DataRange();

            if (data.hasOwnProperty('upper')) {
                obj['upper'] = InlineResponse2007DataRangeUpper.constructFromObject(data['upper']);
            }
            if (data.hasOwnProperty('lower')) {
                obj['lower'] = InlineResponse2007DataRangeLower.constructFromObject(data['lower']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2007DataRangeUpper} upper
 */
InlineResponse2007DataRange.prototype['upper'] = undefined;

/**
 * @member {module:model/InlineResponse2007DataRangeLower} lower
 */
InlineResponse2007DataRange.prototype['lower'] = undefined;






export default InlineResponse2007DataRange;
