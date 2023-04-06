/**
 * Stocks API For Digital Portals
 * The Stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years. Search criteria also include benchmark-related attributes (beta, correlation, outperformance), and ESG parameters, based on FactSet’s Truvalue ESG scores.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with daily updates).  This API is fully integrated with the corresponding [Quotes API](https://developer.factset.com/api-catalog/quotes-api-digital-portals), allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals).  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the [Bonds API](https://developer.factset.com/api-catalog/bonds-api-digital-portals) and the [Securitized Derivatives API](https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals) for details.  See also the recipe [\"Enrich Your Digital Portal with Flexible Equity Screening\"](https://developer.factset.com/recipe-catalog/enrich-your-digital-portal-flexible-equity-screening). 
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2001DataBalanceSheetNetDebt model module.
 * @module model/InlineResponse2001DataBalanceSheetNetDebt
 */
class InlineResponse2001DataBalanceSheetNetDebt {
    /**
     * Constructs a new <code>InlineResponse2001DataBalanceSheetNetDebt</code>.
     * Net debt, which is all interest-bearing obligations minus cash and cash equivalents.
     * @alias module:model/InlineResponse2001DataBalanceSheetNetDebt
     */
    constructor() { 
        
        InlineResponse2001DataBalanceSheetNetDebt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001DataBalanceSheetNetDebt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001DataBalanceSheetNetDebt} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001DataBalanceSheetNetDebt} The populated <code>InlineResponse2001DataBalanceSheetNetDebt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001DataBalanceSheetNetDebt();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('growth')) {
                obj['growth'] = ApiClient.convertToType(data['growth'], 'Number');
            }
            if (data.hasOwnProperty('ratioToTotalEquity')) {
                obj['ratioToTotalEquity'] = ApiClient.convertToType(data['ratioToTotalEquity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Vaue of the net debt.
 * @member {Number} value
 */
InlineResponse2001DataBalanceSheetNetDebt.prototype['value'] = undefined;

/**
 * Annual growth rate of the net debt.
 * @member {Number} growth
 */
InlineResponse2001DataBalanceSheetNetDebt.prototype['growth'] = undefined;

/**
 * Net-debt-to-total-equity ratio, which is the ratio of the net debt, divided by the total shareholders' equity.
 * @member {Number} ratioToTotalEquity
 */
InlineResponse2001DataBalanceSheetNetDebt.prototype['ratioToTotalEquity'] = undefined;






export default InlineResponse2001DataBalanceSheetNetDebt;
