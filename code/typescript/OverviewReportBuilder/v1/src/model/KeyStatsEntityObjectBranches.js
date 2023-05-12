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
 * The KeyStatsEntityObjectBranches model module.
 * @module model/KeyStatsEntityObjectBranches
 */
class KeyStatsEntityObjectBranches {
    /**
     * Constructs a new <code>KeyStatsEntityObjectBranches</code>.
     * The total count of physical locations, such as buildings or offices, where a bank offers its products and services to customers
     * @alias module:model/KeyStatsEntityObjectBranches
     * @param value {module:model/KeyStatsEntityObjectRange52WeekValue} 
     * @param label {module:model/KeyStatsEntityObjectRange52WeekValue} 
     */
    constructor(value, label) { 
        
        KeyStatsEntityObjectBranches.initialize(this, value, label);
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
     * Constructs a <code>KeyStatsEntityObjectBranches</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeyStatsEntityObjectBranches} obj Optional instance to populate.
     * @return {module:model/KeyStatsEntityObjectBranches} The populated <code>KeyStatsEntityObjectBranches</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyStatsEntityObjectBranches();

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
KeyStatsEntityObjectBranches.prototype['value'] = undefined;

/**
 * @member {module:model/KeyStatsEntityObjectRange52WeekValue} label
 */
KeyStatsEntityObjectBranches.prototype['label'] = undefined;






export default KeyStatsEntityObjectBranches;
