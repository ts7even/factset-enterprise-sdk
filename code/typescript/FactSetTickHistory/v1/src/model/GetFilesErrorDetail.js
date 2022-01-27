/**
 * TickHistory
 * TickHistory provides dynamic access to historical tick data for a specific security for specific dates or date range.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetFilesErrorDetail model module.
 * @module model/GetFilesErrorDetail
 * @version 0.9.0
 */
class GetFilesErrorDetail {
    /**
     * Constructs a new <code>GetFilesErrorDetail</code>.
     * @alias module:model/GetFilesErrorDetail
     */
    constructor() { 
        
        GetFilesErrorDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFilesErrorDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFilesErrorDetail} obj Optional instance to populate.
     * @return {module:model/GetFilesErrorDetail} The populated <code>GetFilesErrorDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFilesErrorDetail();

            if (data.hasOwnProperty('not_authorized_tickers')) {
                obj['not_authorized_tickers'] = ApiClient.convertToType(data['not_authorized_tickers'], ['String']);
            }
            if (data.hasOwnProperty('_paginationLimit')) {
                obj['_paginationLimit'] = ApiClient.convertToType(data['_paginationLimit'], ['String']);
            }
            if (data.hasOwnProperty('_paginationOffset')) {
                obj['_paginationOffset'] = ApiClient.convertToType(data['_paginationOffset'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * query with partial tickers, products or exchanges not subscribed to
 * @member {Array.<String>} not_authorized_tickers
 */
GetFilesErrorDetail.prototype['not_authorized_tickers'] = undefined;

/**
 * _paginationLimit must be <=500
 * @member {Array.<String>} _paginationLimit
 */
GetFilesErrorDetail.prototype['_paginationLimit'] = undefined;

/**
 * _paginationoffset must be an integer
 * @member {Array.<String>} _paginationOffset
 */
GetFilesErrorDetail.prototype['_paginationOffset'] = undefined;






export default GetFilesErrorDetail;
