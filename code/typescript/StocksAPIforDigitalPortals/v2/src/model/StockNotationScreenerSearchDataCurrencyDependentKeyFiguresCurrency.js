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
 * The StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency model module.
 * @module model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency
 * @version 0.9.1
 */
class StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency</code>.
     * Currency in which the currency-dependent fiscal year key figures are expressed.
     * @alias module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency
     * @param isoCode {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency.IsoCodeEnum} ISO 4217 code of the currency.
     */
    constructor(isoCode) { 
        
        StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency.initialize(this, isoCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isoCode) { 
        obj['isoCode'] = isoCode;
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency} The populated <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency();

            if (data.hasOwnProperty('isoCode')) {
                obj['isoCode'] = ApiClient.convertToType(data['isoCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ISO 4217 code of the currency.
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency.IsoCodeEnum} isoCode
 */
StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency.prototype['isoCode'] = undefined;





/**
 * Allowed values for the <code>isoCode</code> property.
 * @enum {String}
 * @readonly
 */
StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency['IsoCodeEnum'] = {

    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR",

    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",

    /**
     * value: "GBP"
     * @const
     */
    "GBP": "GBP",

    /**
     * value: "CHF"
     * @const
     */
    "CHF": "CHF"
};



export default StockNotationScreenerSearchDataCurrencyDependentKeyFiguresCurrency;

