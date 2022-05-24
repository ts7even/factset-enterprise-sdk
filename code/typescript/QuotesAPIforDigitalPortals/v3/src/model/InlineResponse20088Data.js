/**
 * Quotes API For Digital Portals
 * The quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the Time Series API for Digital Portals for direct access to price histories, and the News API for Digital Portals for searching and fetching related news.
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
import InlineResponse20088Instrument from './InlineResponse20088Instrument';
import InlineResponse20088Nsin from './InlineResponse20088Nsin';
import InlineResponse20088Price from './InlineResponse20088Price';

/**
 * The InlineResponse20088Data model module.
 * @module model/InlineResponse20088Data
 * @version 0.10.0
 */
class InlineResponse20088Data {
    /**
     * Constructs a new <code>InlineResponse20088Data</code>.
     * The data member contains a list of the matching notations.
     * @alias module:model/InlineResponse20088Data
     */
    constructor() { 
        
        InlineResponse20088Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20088Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20088Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20088Data} The populated <code>InlineResponse20088Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20088Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('nsin')) {
                obj['nsin'] = InlineResponse20088Nsin.constructFromObject(data['nsin']);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = InlineResponse20088Price.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = InlineResponse20088Instrument.constructFromObject(data['instrument']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the notation.
 * @member {String} id
 */
InlineResponse20088Data.prototype['id'] = undefined;

/**
 * The symbol of the notation. It is a market-specific code to identify the notation. Which characters can be part of a symbol depends on the market. If a market does not define a proprietary symbol, but uses a different identifier (for example, the ISIN or the WKN) to identify instruments, no symbol will be set for the notations of that market.
 * @member {String} symbol
 */
InlineResponse20088Data.prototype['symbol'] = undefined;

/**
 * @member {module:model/InlineResponse20088Nsin} nsin
 */
InlineResponse20088Data.prototype['nsin'] = undefined;

/**
 * @member {module:model/InlineResponse20088Price} price
 */
InlineResponse20088Data.prototype['price'] = undefined;

/**
 * @member {module:model/InlineResponse20088Instrument} instrument
 */
InlineResponse20088Data.prototype['instrument'] = undefined;






export default InlineResponse20088Data;
