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
 * The SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList model module.
 * @module model/SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList
 * @version 0.9.0
 */
class SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList</code>.
     * Instrument-level restriction. If present, the result contains only securitized derivatives that are a member of at least one of the provided lists.
     * @alias module:model/SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList} The populated <code>SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} ids
 */
SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList.prototype['ids'] = undefined;






export default SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList;
