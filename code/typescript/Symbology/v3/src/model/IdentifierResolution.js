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

/**
 * The IdentifierResolution model module.
 * @module model/IdentifierResolution
 */
class IdentifierResolution {
    /**
     * Constructs a new <code>IdentifierResolution</code>.
     * Identifier Resolution data object.
     * @alias module:model/IdentifierResolution
     * @extends Object
     */
    constructor() { 
        
        IdentifierResolution.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdentifierResolution</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentifierResolution} obj Optional instance to populate.
     * @return {module:model/IdentifierResolution} The populated <code>IdentifierResolution</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentifierResolution();

            ApiClient.constructFromObject(data, obj, 'String');
            

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('inputSymbolType')) {
                obj['inputSymbolType'] = ApiClient.convertToType(data['inputSymbolType'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('frefListingExchange')) {
                obj['frefListingExchange'] = ApiClient.convertToType(data['frefListingExchange'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier inputted in the request.
 * @member {String} requestId
 */
IdentifierResolution.prototype['requestId'] = undefined;

/**
 * The type of identifier inputted in the request
 * @member {String} inputSymbolType
 */
IdentifierResolution.prototype['inputSymbolType'] = undefined;

/**
 * Name of the requested identifier
 * @member {String} name
 */
IdentifierResolution.prototype['name'] = undefined;

/**
 * The 3 digit fref exchange code for the primary exchange of the security
 * @member {String} frefListingExchange
 */
IdentifierResolution.prototype['frefListingExchange'] = undefined;

/**
 * The 3 digit ISO code for the currency
 * @member {String} currency
 */
IdentifierResolution.prototype['currency'] = undefined;






export default IdentifierResolution;

