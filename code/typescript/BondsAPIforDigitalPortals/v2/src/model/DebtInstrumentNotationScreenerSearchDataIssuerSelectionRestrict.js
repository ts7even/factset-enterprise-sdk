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
 * The DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict model module.
 * @module model/DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict
 * @version 0.9.0
 */
class DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict {
    /**
     * Constructs a new <code>DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict</code>.
     * Restriction list. Only debt instruments issued by an issuer in the provided list are returned.
     * @alias module:model/DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict
     */
    constructor() { 
        
        DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict} obj Optional instance to populate.
     * @return {module:model/DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict} The populated <code>DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Set of identifiers of legal entities in the role of an issuer.
 * @member {Array.<Number>} ids
 */
DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict.prototype['ids'] = undefined;






export default DebtInstrumentNotationScreenerSearchDataIssuerSelectionRestrict;
