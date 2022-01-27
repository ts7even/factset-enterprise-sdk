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
import InlineResponse2004UnderlyingNotationInstrument from './InlineResponse2004UnderlyingNotationInstrument';

/**
 * The InlineResponse2004UnderlyingNotation model module.
 * @module model/InlineResponse2004UnderlyingNotation
 * @version 0.9.0
 */
class InlineResponse2004UnderlyingNotation {
    /**
     * Constructs a new <code>InlineResponse2004UnderlyingNotation</code>.
     * Notation of the underlying. All contained attributes are &#x60;null&#x60; if there is no notation for the underlying.
     * @alias module:model/InlineResponse2004UnderlyingNotation
     */
    constructor() { 
        
        InlineResponse2004UnderlyingNotation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004UnderlyingNotation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004UnderlyingNotation} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004UnderlyingNotation} The populated <code>InlineResponse2004UnderlyingNotation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004UnderlyingNotation();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = InlineResponse2004UnderlyingNotationInstrument.constructFromObject(data['instrument']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the notation.
 * @member {String} id
 */
InlineResponse2004UnderlyingNotation.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse2004UnderlyingNotationInstrument} instrument
 */
InlineResponse2004UnderlyingNotation.prototype['instrument'] = undefined;






export default InlineResponse2004UnderlyingNotation;
