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
import InlineResponse2003InstrumentIssuerCountry from './InlineResponse2003InstrumentIssuerCountry';

/**
 * The InlineResponse2003InstrumentIssuer model module.
 * @module model/InlineResponse2003InstrumentIssuer
 * @version 0.9.1
 */
class InlineResponse2003InstrumentIssuer {
    /**
     * Constructs a new <code>InlineResponse2003InstrumentIssuer</code>.
     * Issuer of the debt instrument. See endpoint &#x60;/legalEntity/list&#x60; for possible values.
     * @alias module:model/InlineResponse2003InstrumentIssuer
     */
    constructor() { 
        
        InlineResponse2003InstrumentIssuer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003InstrumentIssuer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003InstrumentIssuer} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003InstrumentIssuer} The populated <code>InlineResponse2003InstrumentIssuer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003InstrumentIssuer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = InlineResponse2003InstrumentIssuerCountry.constructFromObject(data['country']);
            }
        }
        return obj;
    }


}

/**
 * Identifier of the issuer.
 * @member {Number} id
 */
InlineResponse2003InstrumentIssuer.prototype['id'] = undefined;

/**
 * Name of the issuer.
 * @member {String} name
 */
InlineResponse2003InstrumentIssuer.prototype['name'] = undefined;

/**
 * @member {module:model/InlineResponse2003InstrumentIssuerCountry} country
 */
InlineResponse2003InstrumentIssuer.prototype['country'] = undefined;






export default InlineResponse2003InstrumentIssuer;

