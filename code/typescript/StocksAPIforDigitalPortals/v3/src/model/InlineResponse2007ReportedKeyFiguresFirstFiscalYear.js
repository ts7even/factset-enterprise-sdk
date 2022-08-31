/**
 * Stocks API For Digital Portals
 * The stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts: Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with potentially daily updates).  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the Bonds API and the Securitized Derivatives API for details.
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
import InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures from './InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures';
import InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear from './InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear';
import InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios from './InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios';

/**
 * The InlineResponse2007ReportedKeyFiguresFirstFiscalYear model module.
 * @module model/InlineResponse2007ReportedKeyFiguresFirstFiscalYear
 */
class InlineResponse2007ReportedKeyFiguresFirstFiscalYear {
    /**
     * Constructs a new <code>InlineResponse2007ReportedKeyFiguresFirstFiscalYear</code>.
     * Data of the most recent fiscal year that has been requested. If the parameters used in the request refer to data from only one fiscal year, the respective data is found here.
     * @alias module:model/InlineResponse2007ReportedKeyFiguresFirstFiscalYear
     */
    constructor() { 
        
        InlineResponse2007ReportedKeyFiguresFirstFiscalYear.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007ReportedKeyFiguresFirstFiscalYear</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007ReportedKeyFiguresFirstFiscalYear} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007ReportedKeyFiguresFirstFiscalYear} The populated <code>InlineResponse2007ReportedKeyFiguresFirstFiscalYear</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007ReportedKeyFiguresFirstFiscalYear();

            if (data.hasOwnProperty('fiscalYear')) {
                obj['fiscalYear'] = InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear.constructFromObject(data['fiscalYear']);
            }
            if (data.hasOwnProperty('currencyDependentKeyFigures')) {
                obj['currencyDependentKeyFigures'] = InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures.constructFromObject(data['currencyDependentKeyFigures']);
            }
            if (data.hasOwnProperty('ebitMargin')) {
                obj['ebitMargin'] = ApiClient.convertToType(data['ebitMargin'], 'Number');
            }
            if (data.hasOwnProperty('ebitdaMargin')) {
                obj['ebitdaMargin'] = ApiClient.convertToType(data['ebitdaMargin'], 'Number');
            }
            if (data.hasOwnProperty('netIncomeMargin')) {
                obj['netIncomeMargin'] = ApiClient.convertToType(data['netIncomeMargin'], 'Number');
            }
            if (data.hasOwnProperty('grossIncomeMargin')) {
                obj['grossIncomeMargin'] = ApiClient.convertToType(data['grossIncomeMargin'], 'Number');
            }
            if (data.hasOwnProperty('operatingMargin')) {
                obj['operatingMargin'] = ApiClient.convertToType(data['operatingMargin'], 'Number');
            }
            if (data.hasOwnProperty('returnOnAssets')) {
                obj['returnOnAssets'] = ApiClient.convertToType(data['returnOnAssets'], 'Number');
            }
            if (data.hasOwnProperty('returnOnEquity')) {
                obj['returnOnEquity'] = ApiClient.convertToType(data['returnOnEquity'], 'Number');
            }
            if (data.hasOwnProperty('ratios')) {
                obj['ratios'] = InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios.constructFromObject(data['ratios']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear} fiscalYear
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['fiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures} currencyDependentKeyFigures
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['currencyDependentKeyFigures'] = undefined;

/**
 * EBIT margin, which is the ratio of the EBIT, divided by the total sales revenue.
 * @member {Number} ebitMargin
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['ebitMargin'] = undefined;

/**
 * EBITDA margin, which is the ratio of the EBITDA, divided by the total sales revenue.
 * @member {Number} ebitdaMargin
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['ebitdaMargin'] = undefined;

/**
 * Net income margin, which is the ratio of the net income, divided by the total sales revenue.
 * @member {Number} netIncomeMargin
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['netIncomeMargin'] = undefined;

/**
 * Gross income margin, which is the ratio of the gross income, divided by the total sales revenue.
 * @member {Number} grossIncomeMargin
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['grossIncomeMargin'] = undefined;

/**
 * Operating margin, which is the ratio of the operating income, divided by the sales revenue.
 * @member {Number} operatingMargin
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['operatingMargin'] = undefined;

/**
 * Return on assets (ROA), which is the ratio of the net income, divided by the two-fiscal-year average of the total assets.
 * @member {Number} returnOnAssets
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['returnOnAssets'] = undefined;

/**
 * Return on equity (ROE), which is the ratio of the net income, divided by the two-fiscal-year average of the total shareholders' equity.
 * @member {Number} returnOnEquity
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['returnOnEquity'] = undefined;

/**
 * @member {module:model/InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios} ratios
 */
InlineResponse2007ReportedKeyFiguresFirstFiscalYear.prototype['ratios'] = undefined;






export default InlineResponse2007ReportedKeyFiguresFirstFiscalYear;

