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
import InlineResponse2006InstrumentKnockInDistance from './InlineResponse2006InstrumentKnockInDistance';
import InlineResponse2006InstrumentKnockOutBreach from './InlineResponse2006InstrumentKnockOutBreach';
import InlineResponse2006InstrumentKnockOutObservation from './InlineResponse2006InstrumentKnockOutObservation';

/**
 * The InlineResponse2006InstrumentKnockIn model module.
 * @module model/InlineResponse2006InstrumentKnockIn
 * @version 0.9.0
 */
class InlineResponse2006InstrumentKnockIn {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentKnockIn</code>.
     * Knock-in of the securitized derivative.
     * @alias module:model/InlineResponse2006InstrumentKnockIn
     */
    constructor() { 
        
        InlineResponse2006InstrumentKnockIn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentKnockIn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentKnockIn} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentKnockIn} The populated <code>InlineResponse2006InstrumentKnockIn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentKnockIn();

            if (data.hasOwnProperty('observation')) {
                obj['observation'] = InlineResponse2006InstrumentKnockOutObservation.constructFromObject(data['observation']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = InlineResponse2006InstrumentKnockInDistance.constructFromObject(data['distance']);
            }
            if (data.hasOwnProperty('breach')) {
                obj['breach'] = InlineResponse2006InstrumentKnockOutBreach.constructFromObject(data['breach']);
            }
            if (data.hasOwnProperty('cashFlow')) {
                obj['cashFlow'] = ApiClient.convertToType(data['cashFlow'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2006InstrumentKnockOutObservation} observation
 */
InlineResponse2006InstrumentKnockIn.prototype['observation'] = undefined;

/**
 * Value of the knock-in.
 * @member {Number} value
 */
InlineResponse2006InstrumentKnockIn.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse2006InstrumentKnockInDistance} distance
 */
InlineResponse2006InstrumentKnockIn.prototype['distance'] = undefined;

/**
 * @member {module:model/InlineResponse2006InstrumentKnockOutBreach} breach
 */
InlineResponse2006InstrumentKnockIn.prototype['breach'] = undefined;

/**
 * Cash flow amount.
 * @member {Number} cashFlow
 */
InlineResponse2006InstrumentKnockIn.prototype['cashFlow'] = undefined;






export default InlineResponse2006InstrumentKnockIn;
