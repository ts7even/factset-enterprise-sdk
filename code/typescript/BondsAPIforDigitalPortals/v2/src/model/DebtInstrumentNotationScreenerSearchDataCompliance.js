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
import DebtInstrumentNotationScreenerSearchDataComplianceGermany from './DebtInstrumentNotationScreenerSearchDataComplianceGermany';

/**
 * The DebtInstrumentNotationScreenerSearchDataCompliance model module.
 * @module model/DebtInstrumentNotationScreenerSearchDataCompliance
 * @version 0.9.0
 */
class DebtInstrumentNotationScreenerSearchDataCompliance {
    /**
     * Constructs a new <code>DebtInstrumentNotationScreenerSearchDataCompliance</code>.
     * Compliance properties.
     * @alias module:model/DebtInstrumentNotationScreenerSearchDataCompliance
     */
    constructor() { 
        
        DebtInstrumentNotationScreenerSearchDataCompliance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebtInstrumentNotationScreenerSearchDataCompliance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebtInstrumentNotationScreenerSearchDataCompliance} obj Optional instance to populate.
     * @return {module:model/DebtInstrumentNotationScreenerSearchDataCompliance} The populated <code>DebtInstrumentNotationScreenerSearchDataCompliance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebtInstrumentNotationScreenerSearchDataCompliance();

            if (data.hasOwnProperty('germany')) {
                obj['germany'] = DebtInstrumentNotationScreenerSearchDataComplianceGermany.constructFromObject(data['germany']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DebtInstrumentNotationScreenerSearchDataComplianceGermany} germany
 */
DebtInstrumentNotationScreenerSearchDataCompliance.prototype['germany'] = undefined;






export default DebtInstrumentNotationScreenerSearchDataCompliance;
