/**
 * FI API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.11.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FIAttributionForJobSettings model module.
 * @module model/FIAttributionForJobSettings
 */
class FIAttributionForJobSettings {
    /**
     * Constructs a new <code>FIAttributionForJobSettings</code>.
     * @alias module:model/FIAttributionForJobSettings
     */
    constructor() { 
        
        FIAttributionForJobSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FIAttributionForJobSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FIAttributionForJobSettings} obj Optional instance to populate.
     * @return {module:model/FIAttributionForJobSettings} The populated <code>FIAttributionForJobSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FIAttributionForJobSettings();

            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Start Date
 * @member {String} startDate
 */
FIAttributionForJobSettings.prototype['startDate'] = undefined;

/**
 * End Date
 * @member {String} endDate
 */
FIAttributionForJobSettings.prototype['endDate'] = undefined;






export default FIAttributionForJobSettings;
