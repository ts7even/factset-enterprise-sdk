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
 * The SubscriptionMember model module.
 * @module model/SubscriptionMember
 * @version 0.9.0
 */
class SubscriptionMember {
    /**
     * Constructs a new <code>SubscriptionMember</code>.
     * Object defining the subscription attributes.
     * @alias module:model/SubscriptionMember
     * @param minimumInterval {Number} Non-negative number of milliseconds to throttle the update rate from 0ms to 5000ms. Set to 0 for sending updates immediately.
     */
    constructor(minimumInterval) { 
        
        SubscriptionMember.initialize(this, minimumInterval);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, minimumInterval) { 
        obj['minimumInterval'] = minimumInterval;
    }

    /**
     * Constructs a <code>SubscriptionMember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionMember} obj Optional instance to populate.
     * @return {module:model/SubscriptionMember} The populated <code>SubscriptionMember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionMember();

            if (data.hasOwnProperty('minimumInterval')) {
                obj['minimumInterval'] = ApiClient.convertToType(data['minimumInterval'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Non-negative number of milliseconds to throttle the update rate from 0ms to 5000ms. Set to 0 for sending updates immediately.
 * @member {Number} minimumInterval
 */
SubscriptionMember.prototype['minimumInterval'] = undefined;






export default SubscriptionMember;
