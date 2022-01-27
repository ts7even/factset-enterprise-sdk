/**
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types. various market symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN,  SEDOL, Tickers, and Bloomberg FIGIs.   Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly  harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time. Additionally, the Symbology API provides  translation of market ids into Bloomberg FIGI. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SedolHistoryTranslation model module.
 * @module model/SedolHistoryTranslation
 * @version 0.8.0
 */
class SedolHistoryTranslation {
    /**
     * Constructs a new <code>SedolHistoryTranslation</code>.
     * SEDOL History Translation data object.
     * @alias module:model/SedolHistoryTranslation
     */
    constructor() { 
        
        SedolHistoryTranslation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SedolHistoryTranslation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SedolHistoryTranslation} obj Optional instance to populate.
     * @return {module:model/SedolHistoryTranslation} The populated <code>SedolHistoryTranslation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SedolHistoryTranslation();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sedol')) {
                obj['sedol'] = ApiClient.convertToType(data['sedol'], 'String');
            }
            if (data.hasOwnProperty('sedolEffectiveStartDate')) {
                obj['sedolEffectiveStartDate'] = ApiClient.convertToType(data['sedolEffectiveStartDate'], 'Date');
            }
            if (data.hasOwnProperty('sedolEffectiveEndDate')) {
                obj['sedolEffectiveEndDate'] = ApiClient.convertToType(data['sedolEffectiveEndDate'], 'Date');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * FactSet Default Permanent Identifier. Regional and Composite (-USA) request `ids` will use a Regional ID '-R', Listing specific ids '-NYS' will use Listing ids '-L', Entities will use '-E', and FI will use security '-S' ids. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)
 * @member {String} fsymId
 */
SedolHistoryTranslation.prototype['fsymId'] = undefined;

/**
 * Proper Name of company or issuer.
 * @member {String} name
 */
SedolHistoryTranslation.prototype['name'] = undefined;

/**
 * SEDOL
 * @member {String} sedol
 */
SedolHistoryTranslation.prototype['sedol'] = undefined;

/**
 * SEDOL effective start date in YYYY-MM-DD format.
 * @member {Date} sedolEffectiveStartDate
 */
SedolHistoryTranslation.prototype['sedolEffectiveStartDate'] = undefined;

/**
 * SEDOL effective end date in YYYY-MM-DD format. Null if still active.
 * @member {Date} sedolEffectiveEndDate
 */
SedolHistoryTranslation.prototype['sedolEffectiveEndDate'] = undefined;

/**
 * Identifier specified in the request
 * @member {String} requestId
 */
SedolHistoryTranslation.prototype['requestId'] = undefined;






export default SedolHistoryTranslation;
