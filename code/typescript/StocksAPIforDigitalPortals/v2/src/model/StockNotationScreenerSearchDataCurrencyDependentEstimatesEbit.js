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
 * The StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit model module.
 * @module model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit</code>.
     * EBIT (earnings before interest and taxes).
     * @alias module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit
     */
    constructor() { 
        
        StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit} The populated <code>StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit();

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
StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit.prototype['mean'] = undefined;






export default StockNotationScreenerSearchDataCurrencyDependentEstimatesEbit;
