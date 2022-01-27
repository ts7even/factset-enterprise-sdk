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
 * The InlineResponse2006InstrumentRangeKnockOutLower model module.
 * @module model/InlineResponse2006InstrumentRangeKnockOutLower
 * @version 0.9.0
 */
class InlineResponse2006InstrumentRangeKnockOutLower {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentRangeKnockOutLower</code>.
     * Lower bound of the range knock-out.
     * @alias module:model/InlineResponse2006InstrumentRangeKnockOutLower
     */
    constructor() { 
        
        InlineResponse2006InstrumentRangeKnockOutLower.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentRangeKnockOutLower</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentRangeKnockOutLower} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentRangeKnockOutLower} The populated <code>InlineResponse2006InstrumentRangeKnockOutLower</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentRangeKnockOutLower();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Value of the lower bound.
 * @member {Number} value
 */
InlineResponse2006InstrumentRangeKnockOutLower.prototype['value'] = undefined;






export default InlineResponse2006InstrumentRangeKnockOutLower;
