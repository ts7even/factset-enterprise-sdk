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
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment
 * @version 0.9.1
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment</code>.
     * Date range of the repayment date.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment
     * @param start {Date} The starting point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the past.
     * @param end {Date} The ending point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the future.
     */
    constructor(start, end) { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment.initialize(this, start, end);
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
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment();

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
SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment.prototype['start'] = undefined;

/**
 * The ending point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the future.
 * @member {Date} end
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment.prototype['end'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycleRepayment;

