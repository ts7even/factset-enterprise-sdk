/**
 * FactSet Fundamentals Report Builder
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CurrencyCodeCurrencyCode model module.
 * @module model/CurrencyCodeCurrencyCode
 * @version 0.9.0
 */
class CurrencyCodeCurrencyCode {
    /**
     * Constructs a new <code>CurrencyCodeCurrencyCode</code>.
     * Code for data currency
     * @alias module:model/CurrencyCodeCurrencyCode
     */
    constructor() { 
        
        CurrencyCodeCurrencyCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyCodeCurrencyCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencyCodeCurrencyCode} obj Optional instance to populate.
     * @return {module:model/CurrencyCodeCurrencyCode} The populated <code>CurrencyCodeCurrencyCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyCodeCurrencyCode();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} value
 */
CurrencyCodeCurrencyCode.prototype['value'] = undefined;






export default CurrencyCodeCurrencyCode;
