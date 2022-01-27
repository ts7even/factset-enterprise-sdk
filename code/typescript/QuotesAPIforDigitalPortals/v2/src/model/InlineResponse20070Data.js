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
import InlineResponse20070DataInstrument from './InlineResponse20070DataInstrument';
import InlineResponse20070DataRegional from './InlineResponse20070DataRegional';

/**
 * The InlineResponse20070Data model module.
 * @module model/InlineResponse20070Data
 * @version 0.9.0
 */
class InlineResponse20070Data {
    /**
     * Constructs a new <code>InlineResponse20070Data</code>.
     * Instrument data with a list of regional-level data and assigned listing-level data.
     * @alias module:model/InlineResponse20070Data
     */
    constructor() { 
        
        InlineResponse20070Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20070Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20070Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20070Data} The populated <code>InlineResponse20070Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20070Data();

            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = InlineResponse20070DataInstrument.constructFromObject(data['instrument']);
            }
            if (data.hasOwnProperty('permanentIdentifier')) {
                obj['permanentIdentifier'] = ApiClient.convertToType(data['permanentIdentifier'], 'String');
            }
            if (data.hasOwnProperty('regional')) {
                obj['regional'] = ApiClient.convertToType(data['regional'], [InlineResponse20070DataRegional]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse20070DataInstrument} instrument
 */
InlineResponse20070Data.prototype['instrument'] = undefined;

/**
 * FactSet Permanent Identifier for an instrument. The format is six alpha numeric characters, excluding vowels, with an S suffix (XXXXXX-S).
 * @member {String} permanentIdentifier
 */
InlineResponse20070Data.prototype['permanentIdentifier'] = undefined;

/**
 * Regional-level data with assigned listing-level data. If the set of regional identifiers contains an element for which the attribute `isPrimary = true`, then this element is the first one in the array.
 * @member {Array.<module:model/InlineResponse20070DataRegional>} regional
 */
InlineResponse20070Data.prototype['regional'] = undefined;






export default InlineResponse20070Data;
