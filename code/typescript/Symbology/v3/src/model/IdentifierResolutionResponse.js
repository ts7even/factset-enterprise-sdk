/**
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and LEIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs.</p> 
 *
 * The version of the OpenAPI document: 3.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IdentifierResolution from './IdentifierResolution';

/**
 * The IdentifierResolutionResponse model module.
 * @module model/IdentifierResolutionResponse
 */
class IdentifierResolutionResponse {
    /**
     * Constructs a new <code>IdentifierResolutionResponse</code>.
     * Response object for Identifier Resolution endpoint.
     * @alias module:model/IdentifierResolutionResponse
     */
    constructor() { 
        
        IdentifierResolutionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdentifierResolutionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentifierResolutionResponse} obj Optional instance to populate.
     * @return {module:model/IdentifierResolutionResponse} The populated <code>IdentifierResolutionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentifierResolutionResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [IdentifierResolution]);
            }
        }
        return obj;
    }


}

/**
 * Array of symbol translation objects.
 * @member {Array.<module:model/IdentifierResolution>} data
 */
IdentifierResolutionResponse.prototype['data'] = undefined;






export default IdentifierResolutionResponse;

