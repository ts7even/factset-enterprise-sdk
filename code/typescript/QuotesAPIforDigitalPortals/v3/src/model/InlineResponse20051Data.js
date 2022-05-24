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
import InlineResponse20051DataCoupons from './InlineResponse20051DataCoupons';
import InlineResponse20051DataCurrency from './InlineResponse20051DataCurrency';

/**
 * The InlineResponse20051Data model module.
 * @module model/InlineResponse20051Data
 * @version 0.10.0
 */
class InlineResponse20051Data {
    /**
     * Constructs a new <code>InlineResponse20051Data</code>.
     * List of coupons and currency details.
     * @alias module:model/InlineResponse20051Data
     */
    constructor() { 
        
        InlineResponse20051Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20051Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20051Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20051Data} The populated <code>InlineResponse20051Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20051Data();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = InlineResponse20051DataCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('coupons')) {
                obj['coupons'] = ApiClient.convertToType(data['coupons'], [InlineResponse20051DataCoupons]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20051DataCurrency} currency
 */
InlineResponse20051Data.prototype['currency'] = undefined;

/**
 * List of coupons in chronological order.
 * @member {Array.<module:model/InlineResponse20051DataCoupons>} coupons
 */
InlineResponse20051Data.prototype['coupons'] = undefined;






export default InlineResponse20051Data;
