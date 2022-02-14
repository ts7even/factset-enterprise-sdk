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
 * The RequestFilesResponse model module.
 * @module model/RequestFilesResponse
 * @version 0.9.1
 */
class RequestFilesResponse {
    /**
     * Constructs a new <code>RequestFilesResponse</code>.
     * @alias module:model/RequestFilesResponse
     */
    constructor() { 
        
        RequestFilesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RequestFilesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestFilesResponse} obj Optional instance to populate.
     * @return {module:model/RequestFilesResponse} The populated <code>RequestFilesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestFilesResponse();

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * a unique identification# for the query requested
 * @member {String} requestId
 */
RequestFilesResponse.prototype['requestId'] = undefined;

/**
 * The status of the query
 * @member {String} status
 */
RequestFilesResponse.prototype['status'] = undefined;






export default RequestFilesResponse;

