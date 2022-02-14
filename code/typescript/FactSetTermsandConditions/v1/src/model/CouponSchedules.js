/**
 * FactSet Terms & Conditions API
 * The FactSet Terms & Conditions API exposes Terms & Conditions data for Fixed Income Corporate, Governement & Agency securities. The FactSet Corporate Government & Agency Terms & Conditions library provides descriptive data on the issue level, such as offering details, redemption information, and coupon schedules. Issuer level data is also available. Coverage is global and includes corporate, sovereign, and agency issues. 
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

/**
 * The CouponSchedules model module.
 * @module model/CouponSchedules
 * @version 0.9.1
 */
class CouponSchedules {
    /**
     * Constructs a new <code>CouponSchedules</code>.
     * Coupon Schedules for a Fixed Income security.
     * @alias module:model/CouponSchedules
     */
    constructor() { 
        
        CouponSchedules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponSchedules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponSchedules} obj Optional instance to populate.
     * @return {module:model/CouponSchedules} The populated <code>CouponSchedules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponSchedules();

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('couponEffDate')) {
                obj['couponEffDate'] = ApiClient.convertToType(data['couponEffDate'], 'Date');
            }
            if (data.hasOwnProperty('couponRate')) {
                obj['couponRate'] = ApiClient.convertToType(data['couponRate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Security identifier used in the request.
 * @member {String} requestId
 */
CouponSchedules.prototype['requestId'] = undefined;

/**
 * FactSet Permanent Security Identifier.
 * @member {String} fsymId
 */
CouponSchedules.prototype['fsymId'] = undefined;

/**
 * Coupon Effective Date
 * @member {Date} couponEffDate
 */
CouponSchedules.prototype['couponEffDate'] = undefined;

/**
 * Coupon Rate
 * @member {Number} couponRate
 */
CouponSchedules.prototype['couponRate'] = undefined;






export default CouponSchedules;

