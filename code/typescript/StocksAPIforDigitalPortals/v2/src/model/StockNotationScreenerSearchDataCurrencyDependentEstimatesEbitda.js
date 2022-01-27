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
 * The StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda model module.
 * @module model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda</code>.
     * EBITDA (earnings before interest, taxes, depreciation, and amortization).
     * @alias module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda
     */
    constructor() { 
        
        StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda} The populated <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda();

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
StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda.prototype['mean'] = undefined;






export default StockNotationScreenerSearchDataCurrencyDependentEstimatesEbitda;
