/**
 * Classifications API
 * The Classifications API gives access to various Industry Classifications for a given list of securities. Beginning first with GICS Direct, the service will then expand to offering NAICS, SIC, RBICS, and more.  
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
import Calendar from './Calendar';
import Frequency from './Frequency';

/**
 * The GicsRequest model module.
 * @module model/GicsRequest
 * @version 0.9.1
 */
class GicsRequest {
    /**
     * Constructs a new <code>GicsRequest</code>.
     * @alias module:model/GicsRequest
     * @param ids {Array.<String>} The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
     */
    constructor(ids) { 
        
        GicsRequest.initialize(this, ids);
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
     * Constructs a <code>GicsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GicsRequest} obj Optional instance to populate.
     * @return {module:model/GicsRequest} The populated <code>GicsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GicsRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = Frequency.constructFromObject(data['frequency']);
            }
            if (data.hasOwnProperty('calendar')) {
                obj['calendar'] = Calendar.constructFromObject(data['calendar']);
            }
        }
        return obj;
    }


}

/**
 * The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
 * @member {Array.<String>} ids
 */
GicsRequest.prototype['ids'] = undefined;

/**
 * Requested start date expressed in YYYY-MM-DD format.
 * @member {String} startDate
 */
GicsRequest.prototype['startDate'] = undefined;

/**
 * Requested end date for Range expressed in YYYY-MM-DD format.
 * @member {String} endDate
 */
GicsRequest.prototype['endDate'] = undefined;

/**
 * @member {module:model/Frequency} frequency
 */
GicsRequest.prototype['frequency'] = undefined;

/**
 * @member {module:model/Calendar} calendar
 */
GicsRequest.prototype['calendar'] = undefined;






export default GicsRequest;

