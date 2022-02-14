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
import DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestriction from './DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestriction';

/**
 * The DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity model module.
 * @module model/DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity
 * @version 0.9.1
 */
class DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity {
    /**
     * Constructs a new <code>DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity</code>.
     * Parameters related to the maturity.
     * @alias module:model/DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity
     */
    constructor() { 
        
        DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity} obj Optional instance to populate.
     * @return {module:model/DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity} The populated <code>DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity();

            if (data.hasOwnProperty('restriction')) {
                obj['restriction'] = DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestriction.constructFromObject(data['restriction']);
            }
            if (data.hasOwnProperty('perpetual')) {
                obj['perpetual'] = ApiClient.convertToType(data['perpetual'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestriction} restriction
 */
DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity.prototype['restriction'] = undefined;

/**
 * Defines whether or not perpetual debt instruments, i.e. such that do not mature, are included in the result. The value \"only\" can be used if both parameters `maturity.restriction.date` and `maturity.restriction.remainingTermYears` are not set.
 * @member {module:model/DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity.PerpetualEnum} perpetual
 */
DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity.prototype['perpetual'] = undefined;





/**
 * Allowed values for the <code>perpetual</code> property.
 * @enum {String}
 * @readonly
 */
DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity['PerpetualEnum'] = {

    /**
     * value: "only"
     * @const
     */
    "only": "only",

    /**
     * value: "include"
     * @const
     */
    "include": "include",

    /**
     * value: "exclude"
     * @const
     */
    "exclude": "exclude"
};



export default DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity;

