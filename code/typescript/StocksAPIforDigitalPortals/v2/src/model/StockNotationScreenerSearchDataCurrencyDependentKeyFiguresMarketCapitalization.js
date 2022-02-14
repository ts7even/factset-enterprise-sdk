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
import StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum from './StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum';
import StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMinimum from './StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMinimum';

/**
 * The StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization model module.
 * @module model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization
 * @version 0.9.1
 */
class StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization</code>.
     * Value range for the market capitalization, which is the market value of the shares outstanding over all types of shares of the company.
     * @alias module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization
     */
    constructor() { 
        
        StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization} The populated <code>StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMinimum.constructFromObject(data['minimum']);
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum.constructFromObject(data['maximum']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMinimum} minimum
 */
StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization.prototype['minimum'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalizationMaximum} maximum
 */
StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization.prototype['maximum'] = undefined;






export default StockNotationScreenerSearchDataCurrencyDependentKeyFiguresMarketCapitalization;

