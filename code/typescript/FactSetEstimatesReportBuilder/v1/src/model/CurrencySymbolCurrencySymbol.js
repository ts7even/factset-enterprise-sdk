/**
 * FactSet Estimates Report Builder
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
 * The CurrencySymbolCurrencySymbol model module.
 * @module model/CurrencySymbolCurrencySymbol
 * @version 0.9.1
 */
class CurrencySymbolCurrencySymbol {
    /**
     * Constructs a new <code>CurrencySymbolCurrencySymbol</code>.
     * Symbol for data currency
     * @alias module:model/CurrencySymbolCurrencySymbol
     */
    constructor() { 
        
        CurrencySymbolCurrencySymbol.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencySymbolCurrencySymbol</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencySymbolCurrencySymbol} obj Optional instance to populate.
     * @return {module:model/CurrencySymbolCurrencySymbol} The populated <code>CurrencySymbolCurrencySymbol</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencySymbolCurrencySymbol();

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
CurrencySymbolCurrencySymbol.prototype['value'] = undefined;






export default CurrencySymbolCurrencySymbol;

