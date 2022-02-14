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
import InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareCashFlow from './InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareCashFlow';
import InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareDividends from './InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareDividends';
import InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings from './InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings';
import InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareSales from './InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareSales';

/**
 * The InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare model module.
 * @module model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare
 * @version 0.9.1
 */
class InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare {
    /**
     * Constructs a new <code>InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare</code>.
     * Per-share estimates.
     * @alias module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare
     */
    constructor() { 
        
        InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare} The populated <code>InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare();

            if (data.hasOwnProperty('sales')) {
                obj['sales'] = InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareSales.constructFromObject(data['sales']);
            }
            if (data.hasOwnProperty('earnings')) {
                obj['earnings'] = InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings.constructFromObject(data['earnings']);
            }
            if (data.hasOwnProperty('dividends')) {
                obj['dividends'] = InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareDividends.constructFromObject(data['dividends']);
            }
            if (data.hasOwnProperty('cashFlow')) {
                obj['cashFlow'] = InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareCashFlow.constructFromObject(data['cashFlow']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareSales} sales
 */
InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare.prototype['sales'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings} earnings
 */
InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare.prototype['earnings'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareDividends} dividends
 */
InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare.prototype['dividends'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareCashFlow} cashFlow
 */
InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare.prototype['cashFlow'] = undefined;






export default InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesPerShare;

