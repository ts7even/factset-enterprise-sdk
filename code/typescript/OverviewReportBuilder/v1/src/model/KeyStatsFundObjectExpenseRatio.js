/**
 * FactSet Overview Report Builder API
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import KeyStatsEntityObjectRange52WeekValue from './KeyStatsEntityObjectRange52WeekValue';
import KeyStatsFundObjectExpenseRatioValue from './KeyStatsFundObjectExpenseRatioValue';

/**
 * The KeyStatsFundObjectExpenseRatio model module.
 * @module model/KeyStatsFundObjectExpenseRatio
 */
class KeyStatsFundObjectExpenseRatio {
    /**
     * Constructs a new <code>KeyStatsFundObjectExpenseRatio</code>.
     * The net expense ratio, or total expense ratio, represents the percentage of assets of the fund used to run and manage the fund, after any fee waivers or reimbursements that may be in effect. Ongoing charge is collected as the Net Expense ratio for Mutual Funds if the Net Expense Ratio is not available.
     * @alias module:model/KeyStatsFundObjectExpenseRatio
     * @param value {module:model/KeyStatsFundObjectExpenseRatioValue} 
     * @param label {module:model/KeyStatsEntityObjectRange52WeekValue} 
     */
    constructor(value, label) { 
        
        KeyStatsFundObjectExpenseRatio.initialize(this, value, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, label) { 
        obj['value'] = value;
        obj['label'] = label;
    }

    /**
     * Constructs a <code>KeyStatsFundObjectExpenseRatio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyStatsFundObjectExpenseRatio} obj Optional instance to populate.
     * @return {module:model/KeyStatsFundObjectExpenseRatio} The populated <code>KeyStatsFundObjectExpenseRatio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyStatsFundObjectExpenseRatio();

            if (data.hasOwnProperty('value')) {
                obj['value'] = KeyStatsFundObjectExpenseRatioValue.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = KeyStatsEntityObjectRange52WeekValue.constructFromObject(data['label']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/KeyStatsFundObjectExpenseRatioValue} value
 */
KeyStatsFundObjectExpenseRatio.prototype['value'] = undefined;

/**
 * @member {module:model/KeyStatsEntityObjectRange52WeekValue} label
 */
KeyStatsFundObjectExpenseRatio.prototype['label'] = undefined;






export default KeyStatsFundObjectExpenseRatio;
