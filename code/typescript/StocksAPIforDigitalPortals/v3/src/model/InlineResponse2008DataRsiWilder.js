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
import InlineResponse2008DataRsiWilderDays14 from './InlineResponse2008DataRsiWilderDays14';

/**
 * The InlineResponse2008DataRsiWilder model module.
 * @module model/InlineResponse2008DataRsiWilder
 */
class InlineResponse2008DataRsiWilder {
    /**
     * Constructs a new <code>InlineResponse2008DataRsiWilder</code>.
     * Value range of the relative strength index (RSI) by Wilder for different time ranges. This is the ratio of the smoothed moving averages of the upwards and downwards daily returns over the given period, normalized to the range between 0 and 100. The RSI by Wilder measures the magnitude of the price changes in a given time period evaluating whether an asset is overbought or oversold and deriving a respective sell or buy signal.
     * @alias module:model/InlineResponse2008DataRsiWilder
     */
    constructor() { 
        
        InlineResponse2008DataRsiWilder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008DataRsiWilder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008DataRsiWilder} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008DataRsiWilder} The populated <code>InlineResponse2008DataRsiWilder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008DataRsiWilder();

            if (data.hasOwnProperty('days14')) {
                obj['days14'] = InlineResponse2008DataRsiWilderDays14.constructFromObject(data['days14']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2008DataRsiWilderDays14} days14
 */
InlineResponse2008DataRsiWilder.prototype['days14'] = undefined;






export default InlineResponse2008DataRsiWilder;

