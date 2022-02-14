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
 * The DebtInstrumentIssuerSearchDataCountry model module.
 * @module model/DebtInstrumentIssuerSearchDataCountry
 * @version 0.9.1
 */
class DebtInstrumentIssuerSearchDataCountry {
    /**
     * Constructs a new <code>DebtInstrumentIssuerSearchDataCountry</code>.
     * List of countries of registration of the issuers. Only issuers that are registered in a country in the provided list are returned.
     * @alias module:model/DebtInstrumentIssuerSearchDataCountry
     */
    constructor() { 
        
        DebtInstrumentIssuerSearchDataCountry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebtInstrumentIssuerSearchDataCountry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebtInstrumentIssuerSearchDataCountry} obj Optional instance to populate.
     * @return {module:model/DebtInstrumentIssuerSearchDataCountry} The populated <code>DebtInstrumentIssuerSearchDataCountry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebtInstrumentIssuerSearchDataCountry();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * List of country identifiers. See endpoint `/basic/region/country/list` for valid values.
 * @member {Array.<Number>} ids
 */
DebtInstrumentIssuerSearchDataCountry.prototype['ids'] = undefined;






export default DebtInstrumentIssuerSearchDataCountry;

