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
 * The InlineResponse2006InstrumentKnockOutObservation model module.
 * @module model/InlineResponse2006InstrumentKnockOutObservation
 * @version 0.9.0
 */
class InlineResponse2006InstrumentKnockOutObservation {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentKnockOutObservation</code>.
     * Barrier observation modality.
     * @alias module:model/InlineResponse2006InstrumentKnockOutObservation
     */
    constructor() { 
        
        InlineResponse2006InstrumentKnockOutObservation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentKnockOutObservation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentKnockOutObservation} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentKnockOutObservation} The populated <code>InlineResponse2006InstrumentKnockOutObservation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentKnockOutObservation();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Type of the barrier observation.
 * @member {module:model/InlineResponse2006InstrumentKnockOutObservation.TypeEnum} type
 */
InlineResponse2006InstrumentKnockOutObservation.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2006InstrumentKnockOutObservation['TypeEnum'] = {

    /**
     * value: "continuous"
     * @const
     */
    "continuous": "continuous",

    /**
     * value: "eod"
     * @const
     */
    "eod": "eod"
};



export default InlineResponse2006InstrumentKnockOutObservation;
