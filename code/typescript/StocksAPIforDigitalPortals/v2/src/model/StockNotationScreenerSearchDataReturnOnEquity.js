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
 * The StockNotationScreenerSearchDataReturnOnEquity model module.
 * @module model/StockNotationScreenerSearchDataReturnOnEquity
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataReturnOnEquity {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataReturnOnEquity</code>.
     * Value range for the return on equity (ROE), which is the ratio of the net income, divided by the two-fiscal-year average of the total shareholder&#39;s equity.
     * @alias module:model/StockNotationScreenerSearchDataReturnOnEquity
     */
    constructor() { 
        
        StockNotationScreenerSearchDataReturnOnEquity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataReturnOnEquity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataReturnOnEquity} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataReturnOnEquity} The populated <code>StockNotationScreenerSearchDataReturnOnEquity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataReturnOnEquity();

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
StockNotationScreenerSearchDataReturnOnEquity.prototype['minimum'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataEbitMarginMaximum} maximum
 */
StockNotationScreenerSearchDataReturnOnEquity.prototype['maximum'] = undefined;






export default StockNotationScreenerSearchDataReturnOnEquity;
