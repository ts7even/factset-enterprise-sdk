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
import InlineResponse2006InstrumentStrikeDistance from './InlineResponse2006InstrumentStrikeDistance';

/**
 * The InlineResponse2006InstrumentStrike model module.
 * @module model/InlineResponse2006InstrumentStrike
 * @version 0.9.1
 */
class InlineResponse2006InstrumentStrike {
    /**
     * Constructs a new <code>InlineResponse2006InstrumentStrike</code>.
     * Strike of the securitized derivative.
     * @alias module:model/InlineResponse2006InstrumentStrike
     */
    constructor() { 
        
        InlineResponse2006InstrumentStrike.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006InstrumentStrike</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006InstrumentStrike} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006InstrumentStrike} The populated <code>InlineResponse2006InstrumentStrike</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006InstrumentStrike();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = InlineResponse2006InstrumentStrikeDistance.constructFromObject(data['distance']);
            }
        }
        return obj;
    }


}

/**
 * Value of the strike.
 * @member {Number} value
 */
InlineResponse2006InstrumentStrike.prototype['value'] = undefined;

/**
 * @member {module:model/InlineResponse2006InstrumentStrikeDistance} distance
 */
InlineResponse2006InstrumentStrike.prototype['distance'] = undefined;






export default InlineResponse2006InstrumentStrike;

