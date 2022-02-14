/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineResponse20051DataPeriod model module.
 * @module model/InlineResponse20051DataPeriod
 * @version 0.9.1
 */
class InlineResponse20051DataPeriod {
    /**
     * Constructs a new <code>InlineResponse20051DataPeriod</code>.
     * Coupon period.
     * @alias module:model/InlineResponse20051DataPeriod
     * @param start {Date} Starting date.
     * @param end {Date} Ending date (inclusive).
     */
    constructor(start, end) { 
        
        InlineResponse20051DataPeriod.initialize(this, start, end);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, start, end) { 
        obj['start'] = start;
        obj['end'] = end;
    }

    /**
     * Constructs a <code>InlineResponse20051DataPeriod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20051DataPeriod} obj Optional instance to populate.
     * @return {module:model/InlineResponse20051DataPeriod} The populated <code>InlineResponse20051DataPeriod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20051DataPeriod();

            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Starting date.
 * @member {Date} start
 */
InlineResponse20051DataPeriod.prototype['start'] = undefined;

/**
 * Ending date (inclusive).
 * @member {Date} end
 */
InlineResponse20051DataPeriod.prototype['end'] = undefined;






export default InlineResponse20051DataPeriod;

