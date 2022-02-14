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
import StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitMean from './StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitMean';

/**
 * The StockNotationScreenerSearchDataRatios1PriceSales model module.
 * @module model/StockNotationScreenerSearchDataRatios1PriceSales
 * @version 0.9.1
 */
class StockNotationScreenerSearchDataRatios1PriceSales {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataRatios1PriceSales</code>.
     * Ratio of the price, divided by the total sales revenue per share.
     * @alias module:model/StockNotationScreenerSearchDataRatios1PriceSales
     */
    constructor() { 
        
        StockNotationScreenerSearchDataRatios1PriceSales.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataRatios1PriceSales</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataRatios1PriceSales} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataRatios1PriceSales} The populated <code>StockNotationScreenerSearchDataRatios1PriceSales</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataRatios1PriceSales();

            if (data.hasOwnProperty('mean')) {
                obj['mean'] = StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitMean.constructFromObject(data['mean']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitMean} mean
 */
StockNotationScreenerSearchDataRatios1PriceSales.prototype['mean'] = undefined;






export default StockNotationScreenerSearchDataRatios1PriceSales;

