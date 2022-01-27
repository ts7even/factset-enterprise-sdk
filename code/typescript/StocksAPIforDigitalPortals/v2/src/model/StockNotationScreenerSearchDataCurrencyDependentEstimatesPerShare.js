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
import StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareCashFlow from './StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareCashFlow';
import StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareDividends from './StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareDividends';
import StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareEarnings from './StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareEarnings';
import StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareSales from './StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareSales';

/**
 * The StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare model module.
 * @module model/StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare</code>.
     * Per-share parameters.
     * @alias module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare
     */
    constructor() { 
        
        StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare} The populated <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare();

            if (data.hasOwnProperty('sales')) {
                obj['sales'] = StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareSales.constructFromObject(data['sales']);
            }
            if (data.hasOwnProperty('earnings')) {
                obj['earnings'] = StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareEarnings.constructFromObject(data['earnings']);
            }
            if (data.hasOwnProperty('dividends')) {
                obj['dividends'] = StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareDividends.constructFromObject(data['dividends']);
            }
            if (data.hasOwnProperty('cashFlow')) {
                obj['cashFlow'] = StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareCashFlow.constructFromObject(data['cashFlow']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareSales} sales
 */
StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare.prototype['sales'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareEarnings} earnings
 */
StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare.prototype['earnings'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareDividends} dividends
 */
StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare.prototype['dividends'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShareCashFlow} cashFlow
 */
StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare.prototype['cashFlow'] = undefined;






export default StockNotationScreenerSearchDataCurrencyDependentEstimatesPerShare;
