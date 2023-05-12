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
 * The KeyStatsFundObjectAverageSpread model module.
 * @module model/KeyStatsFundObjectAverageSpread
 */
class KeyStatsFundObjectAverageSpread {
    /**
     * Constructs a new <code>KeyStatsFundObjectAverageSpread</code>.
     * The 45-day median of daily time-weighted percentage differences between the highest-posted price a market participant is willing to pay to buy a fund and the lowest-posted price at which a market participant is willing to sell a fund.
     * @alias module:model/KeyStatsFundObjectAverageSpread
     * @param value {module:model/KeyStatsFundObjectExpenseRatioValue} 
     * @param label {module:model/KeyStatsEntityObjectRange52WeekValue} 
     */
    constructor(value, label) { 
        
        KeyStatsFundObjectAverageSpread.initialize(this, value, label);
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
     * Constructs a <code>KeyStatsFundObjectAverageSpread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyStatsFundObjectAverageSpread} obj Optional instance to populate.
     * @return {module:model/KeyStatsFundObjectAverageSpread} The populated <code>KeyStatsFundObjectAverageSpread</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyStatsFundObjectAverageSpread();

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
KeyStatsFundObjectAverageSpread.prototype['value'] = undefined;

/**
 * @member {module:model/KeyStatsEntityObjectRange52WeekValue} label
 */
KeyStatsFundObjectAverageSpread.prototype['label'] = undefined;






export default KeyStatsFundObjectAverageSpread;
