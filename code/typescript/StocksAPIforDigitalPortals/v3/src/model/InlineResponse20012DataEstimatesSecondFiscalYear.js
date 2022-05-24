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
import InlineResponse20012DataEstimatesFirstFiscalYearCurrencyDependentEstimates from './InlineResponse20012DataEstimatesFirstFiscalYearCurrencyDependentEstimates';
import InlineResponse20012DataEstimatesFirstFiscalYearFiscalYear from './InlineResponse20012DataEstimatesFirstFiscalYearFiscalYear';
import InlineResponse20012DataEstimatesFirstFiscalYearRatios from './InlineResponse20012DataEstimatesFirstFiscalYearRatios';
import InlineResponse20012DataEstimatesFirstFiscalYearReturnOnAssets from './InlineResponse20012DataEstimatesFirstFiscalYearReturnOnAssets';
import InlineResponse20012DataEstimatesFirstFiscalYearReturnOnEquity from './InlineResponse20012DataEstimatesFirstFiscalYearReturnOnEquity';

/**
 * The InlineResponse20012DataEstimatesSecondFiscalYear model module.
 * @module model/InlineResponse20012DataEstimatesSecondFiscalYear
 * @version 0.10.0
 */
class InlineResponse20012DataEstimatesSecondFiscalYear {
    /**
     * Constructs a new <code>InlineResponse20012DataEstimatesSecondFiscalYear</code>.
     * Value ranges of the estimates for the second most distant fiscal year that has been requested. If the parameters used in the request refer to data from two fiscals year, the respective data of the more distant one is found here.
     * @alias module:model/InlineResponse20012DataEstimatesSecondFiscalYear
     */
    constructor() { 
        
        InlineResponse20012DataEstimatesSecondFiscalYear.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20012DataEstimatesSecondFiscalYear</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012DataEstimatesSecondFiscalYear} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012DataEstimatesSecondFiscalYear} The populated <code>InlineResponse20012DataEstimatesSecondFiscalYear</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20012DataEstimatesSecondFiscalYear();

            if (data.hasOwnProperty('fiscalYear')) {
                obj['fiscalYear'] = InlineResponse20012DataEstimatesFirstFiscalYearFiscalYear.constructFromObject(data['fiscalYear']);
            }
            if (data.hasOwnProperty('currencyDependentEstimates')) {
                obj['currencyDependentEstimates'] = InlineResponse20012DataEstimatesFirstFiscalYearCurrencyDependentEstimates.constructFromObject(data['currencyDependentEstimates']);
            }
            if (data.hasOwnProperty('returnOnAssets')) {
                obj['returnOnAssets'] = InlineResponse20012DataEstimatesFirstFiscalYearReturnOnAssets.constructFromObject(data['returnOnAssets']);
            }
            if (data.hasOwnProperty('returnOnEquity')) {
                obj['returnOnEquity'] = InlineResponse20012DataEstimatesFirstFiscalYearReturnOnEquity.constructFromObject(data['returnOnEquity']);
            }
            if (data.hasOwnProperty('ratios')) {
                obj['ratios'] = InlineResponse20012DataEstimatesFirstFiscalYearRatios.constructFromObject(data['ratios']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20012DataEstimatesFirstFiscalYearFiscalYear} fiscalYear
 */
InlineResponse20012DataEstimatesSecondFiscalYear.prototype['fiscalYear'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataEstimatesFirstFiscalYearCurrencyDependentEstimates} currencyDependentEstimates
 */
InlineResponse20012DataEstimatesSecondFiscalYear.prototype['currencyDependentEstimates'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataEstimatesFirstFiscalYearReturnOnAssets} returnOnAssets
 */
InlineResponse20012DataEstimatesSecondFiscalYear.prototype['returnOnAssets'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataEstimatesFirstFiscalYearReturnOnEquity} returnOnEquity
 */
InlineResponse20012DataEstimatesSecondFiscalYear.prototype['returnOnEquity'] = undefined;

/**
 * @member {module:model/InlineResponse20012DataEstimatesFirstFiscalYearRatios} ratios
 */
InlineResponse20012DataEstimatesSecondFiscalYear.prototype['ratios'] = undefined;






export default InlineResponse20012DataEstimatesSecondFiscalYear;
