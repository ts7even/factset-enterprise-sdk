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
 * The InlineResponse20054DataDayCountConvention model module.
 * @module model/InlineResponse20054DataDayCountConvention
 * @version 0.9.1
 */
class InlineResponse20054DataDayCountConvention {
    /**
     * Constructs a new <code>InlineResponse20054DataDayCountConvention</code>.
     * Day count convention type. See endpoint &#x60;/instrument/coupon/dayCountConvention/type/list&#x60; for possible values.
     * @alias module:model/InlineResponse20054DataDayCountConvention
     */
    constructor() { 
        
        InlineResponse20054DataDayCountConvention.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20054DataDayCountConvention</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20054DataDayCountConvention} obj Optional instance to populate.
     * @return {module:model/InlineResponse20054DataDayCountConvention} The populated <code>InlineResponse20054DataDayCountConvention</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20054DataDayCountConvention();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the day count convention type.
 * @member {Number} id
 */
InlineResponse20054DataDayCountConvention.prototype['id'] = undefined;

/**
 * Name of the day count convention type.
 * @member {String} name
 */
InlineResponse20054DataDayCountConvention.prototype['name'] = undefined;






export default InlineResponse20054DataDayCountConvention;

