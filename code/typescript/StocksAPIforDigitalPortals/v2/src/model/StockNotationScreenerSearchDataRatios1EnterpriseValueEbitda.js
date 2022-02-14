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
 * The StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda model module.
 * @module model/StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda
 * @version 0.9.1
 */
class StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda</code>.
     * Ratio of the enterprise value, divided by the EBITDA.
     * @alias module:model/StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda
     */
    constructor() { 
        
        StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda} The populated <code>StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda();

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
StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda.prototype['mean'] = undefined;






export default StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda;

