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
 * The InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument model module.
 * @module model/InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument
 * @version 0.9.1
 */
class InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument {
    /**
     * Constructs a new <code>InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument</code>.
     * @alias module:model/InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument
     */
    constructor() { 
        
        InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument} The populated <code>InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of an instrument
 * @member {String} id
 */
InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument.prototype['id'] = undefined;

/**
 * Number of notations
 * @member {Number} count
 */
InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument.prototype['count'] = undefined;






export default InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument;

