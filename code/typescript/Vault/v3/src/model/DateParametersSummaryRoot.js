/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: v3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DateParametersSummary from './DateParametersSummary';

/**
 * The DateParametersSummaryRoot model module.
 * @module model/DateParametersSummaryRoot
 * @version 0.9.1
 */
class DateParametersSummaryRoot {
    /**
     * Constructs a new <code>DateParametersSummaryRoot</code>.
     * @alias module:model/DateParametersSummaryRoot
     * @param data {module:model/DateParametersSummary} 
     */
    constructor(data) { 
        
        DateParametersSummaryRoot.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>DateParametersSummaryRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DateParametersSummaryRoot} obj Optional instance to populate.
     * @return {module:model/DateParametersSummaryRoot} The populated <code>DateParametersSummaryRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DateParametersSummaryRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = DateParametersSummary.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DateParametersSummary} data
 */
DateParametersSummaryRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
DateParametersSummaryRoot.prototype['meta'] = undefined;






export default DateParametersSummaryRoot;

