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
 * The InlineResponse2003DataNotationInstrument model module.
 * @module model/InlineResponse2003DataNotationInstrument
 * @version 0.9.1
 */
class InlineResponse2003DataNotationInstrument {
    /**
     * Constructs a new <code>InlineResponse2003DataNotationInstrument</code>.
     * Instrument of the underlying.
     * @alias module:model/InlineResponse2003DataNotationInstrument
     */
    constructor() { 
        
        InlineResponse2003DataNotationInstrument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003DataNotationInstrument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003DataNotationInstrument} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003DataNotationInstrument} The populated <code>InlineResponse2003DataNotationInstrument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003DataNotationInstrument();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the instrument.
 * @member {String} id
 */
InlineResponse2003DataNotationInstrument.prototype['id'] = undefined;






export default InlineResponse2003DataNotationInstrument;

