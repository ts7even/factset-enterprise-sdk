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
 * The InlineResponse2004DataCouponCurrentInterestRateValue model module.
 * @module model/InlineResponse2004DataCouponCurrentInterestRateValue
 * @version 0.9.1
 */
class InlineResponse2004DataCouponCurrentInterestRateValue {
    /**
     * Constructs a new <code>InlineResponse2004DataCouponCurrentInterestRateValue</code>.
     * Value range of the interest rate; annualized if the payment frequency is not annually.
     * @alias module:model/InlineResponse2004DataCouponCurrentInterestRateValue
     */
    constructor() { 
        
        InlineResponse2004DataCouponCurrentInterestRateValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004DataCouponCurrentInterestRateValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004DataCouponCurrentInterestRateValue} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004DataCouponCurrentInterestRateValue} The populated <code>InlineResponse2004DataCouponCurrentInterestRateValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004DataCouponCurrentInterestRateValue();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = ApiClient.convertToType(data['minimum'], 'Number');
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = ApiClient.convertToType(data['maximum'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Minimum value.
 * @member {Number} minimum
 */
InlineResponse2004DataCouponCurrentInterestRateValue.prototype['minimum'] = undefined;

/**
 * Maximum value.
 * @member {Number} maximum
 */
InlineResponse2004DataCouponCurrentInterestRateValue.prototype['maximum'] = undefined;






export default InlineResponse2004DataCouponCurrentInterestRateValue;

