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
 * The InlineResponse20051DataInterestRateType model module.
 * @module model/InlineResponse20051DataInterestRateType
 * @version 0.9.0
 */
class InlineResponse20051DataInterestRateType {
    /**
     * Constructs a new <code>InlineResponse20051DataInterestRateType</code>.
     * Type of the interest rate. See endpoint &#x60;/instrument/coupon/interestRate/type/list&#x60; for possible values.
     * @alias module:model/InlineResponse20051DataInterestRateType
     */
    constructor() { 
        
        InlineResponse20051DataInterestRateType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20051DataInterestRateType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20051DataInterestRateType} obj Optional instance to populate.
     * @return {module:model/InlineResponse20051DataInterestRateType} The populated <code>InlineResponse20051DataInterestRateType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20051DataInterestRateType();

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
 * Identifier of the type.
 * @member {Number} id
 */
InlineResponse20051DataInterestRateType.prototype['id'] = undefined;

/**
 * Name of the type.
 * @member {String} name
 */
InlineResponse20051DataInterestRateType.prototype['name'] = undefined;






export default InlineResponse20051DataInterestRateType;
