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
import InlineResponse2006InstrumentKnockOutBreach from './InlineResponse2006InstrumentKnockOutBreach';
import InlineResponse2006InstrumentKnockOutDistance from './InlineResponse2006InstrumentKnockOutDistance';
import InlineResponse2006InstrumentKnockOutObservation from './InlineResponse2006InstrumentKnockOutObservation';

/**
 * The InlineResponse2006InstrumentKnockOut model module.
 * @module model/InlineResponse2006InstrumentKnockOut
 * @version 0.9.0
 */
class InlineResponse2006InstrumentKnockOut {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentKnockOut</code>.
     * Knock-out of the securitized derivative.
     * @alias module:model/InlineResponse2006InstrumentKnockOut
     */
    constructor() { 
        
        InlineResponse2006InstrumentKnockOut.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentKnockOut</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentKnockOut} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentKnockOut} The populated <code>InlineResponse2006InstrumentKnockOut</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentKnockOut();

            if (data.hasOwnProperty('observation')) {
                obj['observation'] = InlineResponse2006InstrumentKnockOutObservation.constructFromObject(data['observation']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = InlineResponse2006InstrumentKnockOutDistance.constructFromObject(data['distance']);
            }
            if (data.hasOwnProperty('breach')) {
                obj['breach'] = InlineResponse2006InstrumentKnockOutBreach.constructFromObject(data['breach']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2006InstrumentKnockOutObservation} observation
 */
InlineResponse2006InstrumentKnockOut.prototype['observation'] = undefined;

/**
 * Value of the knock-out.
 * @member {Number} value
 */
InlineResponse2006InstrumentKnockOut.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse2006InstrumentKnockOutDistance} distance
 */
InlineResponse2006InstrumentKnockOut.prototype['distance'] = undefined;

/**
 * @member {module:model/InlineResponse2006InstrumentKnockOutBreach} breach
 */
InlineResponse2006InstrumentKnockOut.prototype['breach'] = undefined;






export default InlineResponse2006InstrumentKnockOut;
