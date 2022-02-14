/**
 * PA Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TemplatedPAComponentPostSummary from './TemplatedPAComponentPostSummary';

/**
 * The TemplatedPAComponentPostSummaryRoot model module.
 * @module model/TemplatedPAComponentPostSummaryRoot
 * @version 0.9.1
 */
class TemplatedPAComponentPostSummaryRoot {
    /**
     * Constructs a new <code>TemplatedPAComponentPostSummaryRoot</code>.
     * @alias module:model/TemplatedPAComponentPostSummaryRoot
     * @param data {module:model/TemplatedPAComponentPostSummary} 
     */
    constructor(data) { 
        
        TemplatedPAComponentPostSummaryRoot.initialize(this, data);
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
     * Constructs a <code>TemplatedPAComponentPostSummaryRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplatedPAComponentPostSummaryRoot} obj Optional instance to populate.
     * @return {module:model/TemplatedPAComponentPostSummaryRoot} The populated <code>TemplatedPAComponentPostSummaryRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplatedPAComponentPostSummaryRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = TemplatedPAComponentPostSummary.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TemplatedPAComponentPostSummary} data
 */
TemplatedPAComponentPostSummaryRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
TemplatedPAComponentPostSummaryRoot.prototype['meta'] = undefined;






export default TemplatedPAComponentPostSummaryRoot;

