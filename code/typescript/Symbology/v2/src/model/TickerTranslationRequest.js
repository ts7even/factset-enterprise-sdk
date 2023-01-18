/**
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and Bloomberg FIGIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as of a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time.</p> 
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TickerTranslationRequest model module.
 * @module model/TickerTranslationRequest
 */
class TickerTranslationRequest {
    /**
     * Constructs a new <code>TickerTranslationRequest</code>.
     * Request object for Ticker endpoint.
     * @alias module:model/TickerTranslationRequest
     * @param ids {Array.<String>} Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId'.
     * @param tickerType {String} Controls the Ticker Type returned.   * **REGION** = Ticker-Regional   * **EXCHANGE** = Ticker-Exchange 
     */
    constructor(ids, tickerType) { 
        
        TickerTranslationRequest.initialize(this, ids, tickerType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids, tickerType) { 
        obj['ids'] = ids;
        obj['tickerType'] = tickerType;
    }

    /**
     * Constructs a <code>TickerTranslationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TickerTranslationRequest} obj Optional instance to populate.
     * @return {module:model/TickerTranslationRequest} The populated <code>TickerTranslationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TickerTranslationRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('tickerType')) {
                obj['tickerType'] = ApiClient.convertToType(data['tickerType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId'.
 * @member {Array.<String>} ids
 */
TickerTranslationRequest.prototype['ids'] = undefined;

/**
 * Controls the Ticker Type returned.   * **REGION** = Ticker-Regional   * **EXCHANGE** = Ticker-Exchange 
 * @member {String} tickerType
 */
TickerTranslationRequest.prototype['tickerType'] = undefined;






export default TickerTranslationRequest;

