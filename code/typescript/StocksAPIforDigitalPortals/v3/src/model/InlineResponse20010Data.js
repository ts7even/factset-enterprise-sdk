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
import InlineResponse20010Accumulated from './InlineResponse20010Accumulated';
import InlineResponse20010Currency from './InlineResponse20010Currency';
import InlineResponse20010Fsym from './InlineResponse20010Fsym';
import InlineResponse20010Instrument from './InlineResponse20010Instrument';
import InlineResponse20010Market from './InlineResponse20010Market';
import InlineResponse20010Trade from './InlineResponse20010Trade';

/**
 * The InlineResponse20010Data model module.
 * @module model/InlineResponse20010Data
 * @version 0.10.0
 */
class InlineResponse20010Data {
    /**
     * Constructs a new <code>InlineResponse20010Data</code>.
     * @alias module:model/InlineResponse20010Data
     */
    constructor() { 
        
        InlineResponse20010Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20010Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010Data} The populated <code>InlineResponse20010Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20010Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = InlineResponse20010Market.constructFromObject(data['market']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = InlineResponse20010Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('isAlternative')) {
                obj['isAlternative'] = ApiClient.convertToType(data['isAlternative'], 'Boolean');
            }
            if (data.hasOwnProperty('trade')) {
                obj['trade'] = InlineResponse20010Trade.constructFromObject(data['trade']);
            }
            if (data.hasOwnProperty('quality')) {
                obj['quality'] = ApiClient.convertToType(data['quality'], 'String');
            }
            if (data.hasOwnProperty('accumulated')) {
                obj['accumulated'] = InlineResponse20010Accumulated.constructFromObject(data['accumulated']);
            }
            if (data.hasOwnProperty('fsym')) {
                obj['fsym'] = InlineResponse20010Fsym.constructFromObject(data['fsym']);
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = InlineResponse20010Instrument.constructFromObject(data['instrument']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of a notation.
 * @member {String} id
 */
InlineResponse20010Data.prototype['id'] = undefined;

/**
 * The symbol of the notation. It is a market-specific code to identify the notation. Which characters can be part of a symbol depends on the market. If a market does not define a proprietary symbol, but uses a different identifier (for example, the ISIN or the WKN) to identify instruments, no symbol will be set for the notations of that market.
 * @member {String} symbol
 */
InlineResponse20010Data.prototype['symbol'] = undefined;

/**
 * @member {module:model/InlineResponse20010Market} market
 */
InlineResponse20010Data.prototype['market'] = undefined;

/**
 * @member {module:model/InlineResponse20010Currency} currency
 */
InlineResponse20010Data.prototype['currency'] = undefined;

/**
 * Indicates whether the notation is an alternative one, i.e. not the original notation of the index constituent.
 * @member {Boolean} isAlternative
 */
InlineResponse20010Data.prototype['isAlternative'] = undefined;

/**
 * @member {module:model/InlineResponse20010Trade} trade
 */
InlineResponse20010Data.prototype['trade'] = undefined;

/**
 * Quality of the trade-related attributes, see attributes `trade` and `accumulated`.
 * @member {String} quality
 */
InlineResponse20010Data.prototype['quality'] = undefined;

/**
 * @member {module:model/InlineResponse20010Accumulated} accumulated
 */
InlineResponse20010Data.prototype['accumulated'] = undefined;

/**
 * @member {module:model/InlineResponse20010Fsym} fsym
 */
InlineResponse20010Data.prototype['fsym'] = undefined;

/**
 * @member {module:model/InlineResponse20010Instrument} instrument
 */
InlineResponse20010Data.prototype['instrument'] = undefined;






export default InlineResponse20010Data;
