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
import StockNotationScreenerSearchDataEbitMarginMaximum from './StockNotationScreenerSearchDataEbitMarginMaximum';
import StockNotationScreenerSearchDataEbitMarginMinimum from './StockNotationScreenerSearchDataEbitMarginMinimum';

/**
 * The StockNotationScreenerSearchDataPerformanceIntraday model module.
 * @module model/StockNotationScreenerSearchDataPerformanceIntraday
 * @version 0.9.1
 */
class StockNotationScreenerSearchDataPerformanceIntraday {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataPerformanceIntraday</code>.
     * Value range for the time range intraday. That is the difference of a notation&#39;s most recent price from the current trading day against the most recent EOD closing price. The parameter can be used only with the quality &#x60;DLY&#x60;, see parameter &#x60;prices.quality&#x60;.
     * @alias module:model/StockNotationScreenerSearchDataPerformanceIntraday
     */
    constructor() { 
        
        StockNotationScreenerSearchDataPerformanceIntraday.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataPerformanceIntraday</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataPerformanceIntraday} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataPerformanceIntraday} The populated <code>StockNotationScreenerSearchDataPerformanceIntraday</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataPerformanceIntraday();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = StockNotationScreenerSearchDataEbitMarginMinimum.constructFromObject(data['minimum']);
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = StockNotationScreenerSearchDataEbitMarginMaximum.constructFromObject(data['maximum']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataEbitMarginMinimum} minimum
 */
StockNotationScreenerSearchDataPerformanceIntraday.prototype['minimum'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataEbitMarginMaximum} maximum
 */
StockNotationScreenerSearchDataPerformanceIntraday.prototype['maximum'] = undefined;






export default StockNotationScreenerSearchDataPerformanceIntraday;

