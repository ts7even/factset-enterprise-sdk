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

/**
 * The InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays model module.
 * @module model/InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays
 */
class InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays {
    /**
     * Constructs a new <code>InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays</code>.
     * Value range of the number of trading days since the crossover.
     * @alias module:model/InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays
     */
    constructor() { 
        
        InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays} The populated <code>InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = ApiClient.convertToType(data['minimum'], 'Number');
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = ApiClient.convertToType(data['maximum'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Minimum value.
 * @member {Number} minimum
 */
InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays.prototype['minimum'] = undefined;

/**
 * Maximum value.
 * @member {Number} maximum
 */
InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays.prototype['maximum'] = undefined;






export default InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays;

