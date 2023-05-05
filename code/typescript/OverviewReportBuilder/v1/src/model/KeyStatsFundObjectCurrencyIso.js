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

/**
 * The KeyStatsFundObjectCurrencyIso model module.
 * @module model/KeyStatsFundObjectCurrencyIso
 */
class KeyStatsFundObjectCurrencyIso {
    /**
     * Constructs a new <code>KeyStatsFundObjectCurrencyIso</code>.
     * Returns currency ISO code for a listing.
     * @alias module:model/KeyStatsFundObjectCurrencyIso
     * @param value {module:model/KeyStatsEntityObjectRange52WeekValue} 
     * @param label {module:model/KeyStatsEntityObjectRange52WeekValue} 
     */
    constructor(value, label) { 
        
        KeyStatsFundObjectCurrencyIso.initialize(this, value, label);
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
     * Constructs a <code>KeyStatsFundObjectCurrencyIso</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyStatsFundObjectCurrencyIso} obj Optional instance to populate.
     * @return {module:model/KeyStatsFundObjectCurrencyIso} The populated <code>KeyStatsFundObjectCurrencyIso</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyStatsFundObjectCurrencyIso();

            if (data.hasOwnProperty('value')) {
                obj['value'] = KeyStatsEntityObjectRange52WeekValue.constructFromObject(data['value']);
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = KeyStatsEntityObjectRange52WeekValue.constructFromObject(data['label']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/KeyStatsEntityObjectRange52WeekValue} value
 */
KeyStatsFundObjectCurrencyIso.prototype['value'] = undefined;

/**
 * @member {module:model/KeyStatsEntityObjectRange52WeekValue} label
 */
KeyStatsFundObjectCurrencyIso.prototype['label'] = undefined;






export default KeyStatsFundObjectCurrencyIso;

