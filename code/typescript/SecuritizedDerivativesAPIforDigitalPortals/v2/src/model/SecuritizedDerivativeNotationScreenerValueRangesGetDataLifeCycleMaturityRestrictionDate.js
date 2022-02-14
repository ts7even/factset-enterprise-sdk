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
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate
 * @version 0.9.1
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate</code>.
     * Date range of the maturity date.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate
     * @param start {Date} The starting point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the past.
     * @param end {Date} The ending point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the future.
     */
    constructor(start, end) { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate.initialize(this, start, end);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, start, end) { 
        obj['start'] = start;
        obj['end'] = end;
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The starting point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the past.
 * @member {Date} start
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate.prototype['start'] = undefined;

/**
 * The ending point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the future.
 * @member {Date} end
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate.prototype['end'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleMaturityRestrictionDate;

