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
import InlineResponse2004DataCouponOccurrenceFrequency from './InlineResponse2004DataCouponOccurrenceFrequency';
import InlineResponse2004DataCouponOccurrenceType from './InlineResponse2004DataCouponOccurrenceType';

/**
 * The InlineResponse2004DataCouponOccurrence model module.
 * @module model/InlineResponse2004DataCouponOccurrence
 * @version 0.9.1
 */
class InlineResponse2004DataCouponOccurrence {
    /**
     * Constructs a new <code>InlineResponse2004DataCouponOccurrence</code>.
     * Occurrence and frequency of the coupon payments.
     * @alias module:model/InlineResponse2004DataCouponOccurrence
     */
    constructor() { 
        
        InlineResponse2004DataCouponOccurrence.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataCouponOccurrence</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataCouponOccurrence} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataCouponOccurrence} The populated <code>InlineResponse2004DataCouponOccurrence</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataCouponOccurrence();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], [InlineResponse2004DataCouponOccurrenceType]);
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], [InlineResponse2004DataCouponOccurrenceFrequency]);
            }
        }
        return obj;
    }


}

/**
 * Occurrence types of the coupon payments.
 * @member {Array.<module:model/InlineResponse2004DataCouponOccurrenceType>} type
 */
InlineResponse2004DataCouponOccurrence.prototype['type'] = undefined;

/**
 * Frequency of the coupon payments; applicable only to debt instruments with an occurrence type `repeated`. See endpoint `/basic/frequency/type/list` for possible values.
 * @member {Array.<module:model/InlineResponse2004DataCouponOccurrenceFrequency>} frequency
 */
InlineResponse2004DataCouponOccurrence.prototype['frequency'] = undefined;






export default InlineResponse2004DataCouponOccurrence;

