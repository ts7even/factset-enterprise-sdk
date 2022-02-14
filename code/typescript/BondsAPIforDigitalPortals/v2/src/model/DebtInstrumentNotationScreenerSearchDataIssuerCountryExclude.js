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
 * The DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude model module.
 * @module model/DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude
 * @version 0.9.1
 */
class DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude {
    /**
     * Constructs a new <code>DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude</code>.
     * Exclusion list. Debt instruments issued by an issuer whose country of registration is in the provided list are not returned.
     * @alias module:model/DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude
     */
    constructor() { 
        
        DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude} obj Optional instance to populate.
     * @return {module:model/DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude} The populated <code>DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Set of country identifiers.
 * @member {Array.<Number>} ids
 */
DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude.prototype['ids'] = undefined;






export default DebtInstrumentNotationScreenerSearchDataIssuerCountryExclude;

