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
 * The InlineResponse2007DataSingleParticipationFactor model module.
 * @module model/InlineResponse2007DataSingleParticipationFactor
 * @version 0.9.0
 */
class InlineResponse2007DataSingleParticipationFactor {
    /**
     * Constructs a new <code>InlineResponse2007DataSingleParticipationFactor</code>.
     * Participation factor of the securitized derivative in the performance of the underlying, depending on the exercise right (see attribute &#x60;exercise.right&#x60; in endpoint &#x60;/securitizedDerivative/get&#x60;).
     * @alias module:model/InlineResponse2007DataSingleParticipationFactor
     */
    constructor() { 
        
        InlineResponse2007DataSingleParticipationFactor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007DataSingleParticipationFactor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007DataSingleParticipationFactor} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007DataSingleParticipationFactor} The populated <code>InlineResponse2007DataSingleParticipationFactor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007DataSingleParticipationFactor();

            if (data.hasOwnProperty('positive')) {
                obj['positive'] = ApiClient.convertToType(data['positive'], 'Number');
            }
            if (data.hasOwnProperty('negative')) {
                obj['negative'] = ApiClient.convertToType(data['negative'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Participation factor above the barrier for a securitized derivative with exercise right call, and below the barrier for exercise right put. 
 * @member {Number} positive
 */
InlineResponse2007DataSingleParticipationFactor.prototype['positive'] = undefined;

/**
 * Participation factor above the barrier for a securitized derivative with exercise right put, and below the barrier for exercise right call.
 * @member {Number} negative
 */
InlineResponse2007DataSingleParticipationFactor.prototype['negative'] = undefined;






export default InlineResponse2007DataSingleParticipationFactor;
