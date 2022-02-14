/**
 * FactSet Funds API
 * FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage    * Fund descriptions    * A seven-tier classification system   * Leverage information   * Fees and expenses    * Portfolio managers       FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage    * Net asset value   * Fund flows    * Assets under management   * Total return  
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DividendAdjust from './DividendAdjust';

/**
 * The ReturnsRangeRequest model module.
 * @module model/ReturnsRangeRequest
 * @version 0.9.1
 */
class ReturnsRangeRequest {
    /**
     * Constructs a new <code>ReturnsRangeRequest</code>.
     * Returns Range Request Body
     * @alias module:model/ReturnsRangeRequest
     * @param ids {Array.<String>} The requested Fund Identifier. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
     */
    constructor(ids) { 
        
        ReturnsRangeRequest.initialize(this, ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids) { 
        obj['ids'] = ids;
    }

    /**
     * Constructs a <code>ReturnsRangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReturnsRangeRequest} obj Optional instance to populate.
     * @return {module:model/ReturnsRangeRequest} The populated <code>ReturnsRangeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReturnsRangeRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('dividendAdjust')) {
                obj['dividendAdjust'] = DividendAdjust.constructFromObject(data['dividendAdjust']);
            }
        }
        return obj;
    }


}

/**
 * The requested Fund Identifier. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
 * @member {Array.<String>} ids
 */
ReturnsRangeRequest.prototype['ids'] = undefined;

/**
 * The start date requested for a given date range in YYYY-MM-DD format. If left blank, the API will default to the day prior to today's previous close. The startDate cannot be equal to the endDate as no return can be computed. Additionally, the startDate MUST be equal to or greater than the `priceFirstDate` found within the /summary endpoint. 
 * @member {String} startDate
 */
ReturnsRangeRequest.prototype['startDate'] = undefined;

/**
 * The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
 * @member {String} endDate
 */
ReturnsRangeRequest.prototype['endDate'] = undefined;

/**
 * @member {module:model/DividendAdjust} dividendAdjust
 */
ReturnsRangeRequest.prototype['dividendAdjust'] = undefined;






export default ReturnsRangeRequest;

