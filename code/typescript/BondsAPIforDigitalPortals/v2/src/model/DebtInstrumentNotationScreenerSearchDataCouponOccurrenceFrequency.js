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
 * The DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency model module.
 * @module model/DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency
 * @version 0.9.0
 */
class DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency {
    /**
     * Constructs a new <code>DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency</code>.
     * Frequency of the coupon payments. This filter is only applied to debt instruments whose &#x60;coupon.occurrence.type&#x60; is &#x60;repeated&#x60;. If this parameter is set, &#x60;occurrence.type&#x60; must include the value &#x60;repeated&#x60; or must not be set (in which case &#x60;repeated&#x60; is implied).
     * @alias module:model/DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency
     */
    constructor() { 
        
        DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency} obj Optional instance to populate.
     * @return {module:model/DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency} The populated <code>DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * List of frequency identifiers. See endpoint `/basic/frequency/type/list` for valid values.
 * @member {Array.<Number>} ids
 */
DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency.prototype['ids'] = undefined;






export default DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency;
