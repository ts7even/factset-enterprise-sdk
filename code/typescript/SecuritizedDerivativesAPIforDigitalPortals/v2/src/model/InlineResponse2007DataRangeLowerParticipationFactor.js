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
 * The InlineResponse2007DataRangeLowerParticipationFactor model module.
 * @module model/InlineResponse2007DataRangeLowerParticipationFactor
 * @version 0.9.1
 */
class InlineResponse2007DataRangeLowerParticipationFactor {
    /**
     * Constructs a new <code>InlineResponse2007DataRangeLowerParticipationFactor</code>.
     * Participation factor of the securitized derivative in the performance of the underlying.
     * @alias module:model/InlineResponse2007DataRangeLowerParticipationFactor
     */
    constructor() { 
        
        InlineResponse2007DataRangeLowerParticipationFactor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2007DataRangeLowerParticipationFactor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007DataRangeLowerParticipationFactor} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007DataRangeLowerParticipationFactor} The populated <code>InlineResponse2007DataRangeLowerParticipationFactor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007DataRangeLowerParticipationFactor();

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
 * Participation factor above the lower bound.
 * @member {Number} positive
 */
InlineResponse2007DataRangeLowerParticipationFactor.prototype['positive'] = undefined;

/**
 * Participation factor below the lower bound.
 * @member {Number} negative
 */
InlineResponse2007DataRangeLowerParticipationFactor.prototype['negative'] = undefined;






export default InlineResponse2007DataRangeLowerParticipationFactor;

