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
import InlineResponse2007EstimatesFirstFiscalYearCurrencyDependentEstimates from './InlineResponse2007EstimatesFirstFiscalYearCurrencyDependentEstimates';
import InlineResponse2007EstimatesFirstFiscalYearFiscalYear from './InlineResponse2007EstimatesFirstFiscalYearFiscalYear';
import InlineResponse2007EstimatesFirstFiscalYearRatios from './InlineResponse2007EstimatesFirstFiscalYearRatios';
import InlineResponse2007EstimatesFirstFiscalYearReturnOnAssets from './InlineResponse2007EstimatesFirstFiscalYearReturnOnAssets';
import InlineResponse2007EstimatesFirstFiscalYearReturnOnEquity from './InlineResponse2007EstimatesFirstFiscalYearReturnOnEquity';

/**
 * The InlineResponse2007EstimatesSecondFiscalYear model module.
 * @module model/InlineResponse2007EstimatesSecondFiscalYear
 */
class InlineResponse2007EstimatesSecondFiscalYear {
    /**
     * Constructs a new <code>InlineResponse2007EstimatesSecondFiscalYear</code>.
     * Estimates for the second most distant fiscal year that has been requested. If the parameters used in the request refer to data from two fiscals year, the respective data of the more distant one is found here.
     * @alias module:model/InlineResponse2007EstimatesSecondFiscalYear
     */
    constructor() { 
        
        InlineResponse2007EstimatesSecondFiscalYear.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007EstimatesSecondFiscalYear</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007EstimatesSecondFiscalYear} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007EstimatesSecondFiscalYear} The populated <code>InlineResponse2007EstimatesSecondFiscalYear</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007EstimatesSecondFiscalYear();

            if (data.hasOwnProperty('fiscalYear')) {
                obj['fiscalYear'] = InlineResponse2007EstimatesFirstFiscalYearFiscalYear.constructFromObject(data['fiscalYear']);
            }
            if (data.hasOwnProperty('currencyDependentEstimates')) {
                obj['currencyDependentEstimates'] = InlineResponse2007EstimatesFirstFiscalYearCurrencyDependentEstimates.constructFromObject(data['currencyDependentEstimates']);
            }
            if (data.hasOwnProperty('returnOnAssets')) {
                obj['returnOnAssets'] = InlineResponse2007EstimatesFirstFiscalYearReturnOnAssets.constructFromObject(data['returnOnAssets']);
            }
            if (data.hasOwnProperty('returnOnEquity')) {
                obj['returnOnEquity'] = InlineResponse2007EstimatesFirstFiscalYearReturnOnEquity.constructFromObject(data['returnOnEquity']);
            }
            if (data.hasOwnProperty('ratios')) {
                obj['ratios'] = InlineResponse2007EstimatesFirstFiscalYearRatios.constructFromObject(data['ratios']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2007EstimatesFirstFiscalYearFiscalYear} fiscalYear
 */
InlineResponse2007EstimatesSecondFiscalYear.prototype['fiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse2007EstimatesFirstFiscalYearCurrencyDependentEstimates} currencyDependentEstimates
 */
InlineResponse2007EstimatesSecondFiscalYear.prototype['currencyDependentEstimates'] = undefined;

/**
 * @member {module:model/InlineResponse2007EstimatesFirstFiscalYearReturnOnAssets} returnOnAssets
 */
InlineResponse2007EstimatesSecondFiscalYear.prototype['returnOnAssets'] = undefined;

/**
 * @member {module:model/InlineResponse2007EstimatesFirstFiscalYearReturnOnEquity} returnOnEquity
 */
InlineResponse2007EstimatesSecondFiscalYear.prototype['returnOnEquity'] = undefined;

/**
 * @member {module:model/InlineResponse2007EstimatesFirstFiscalYearRatios} ratios
 */
InlineResponse2007EstimatesSecondFiscalYear.prototype['ratios'] = undefined;






export default InlineResponse2007EstimatesSecondFiscalYear;

