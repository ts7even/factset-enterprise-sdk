/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: v3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import VaultDateParameters from './VaultDateParameters';
import VaultIdentifier from './VaultIdentifier';

/**
 * The VaultCalculationParameters model module.
 * @module model/VaultCalculationParameters
 * @version 0.9.1
 */
class VaultCalculationParameters {
    /**
     * Constructs a new <code>VaultCalculationParameters</code>.
     * @alias module:model/VaultCalculationParameters
     * @param componentid {String} The Vault component identifier to analyze.
     * @param account {module:model/VaultIdentifier} 
     * @param configid {String} Vault Configuration identifier.
     */
    constructor(componentid, account, configid) { 
        
        VaultCalculationParameters.initialize(this, componentid, account, configid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, componentid, account, configid) { 
        obj['componentid'] = componentid;
        obj['account'] = account;
        obj['configid'] = configid;
    }

    /**
     * Constructs a <code>VaultCalculationParameters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultCalculationParameters} obj Optional instance to populate.
     * @return {module:model/VaultCalculationParameters} The populated <code>VaultCalculationParameters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultCalculationParameters();

            if (data.hasOwnProperty('componentid')) {
                obj['componentid'] = ApiClient.convertToType(data['componentid'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = VaultIdentifier.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('dates')) {
                obj['dates'] = VaultDateParameters.constructFromObject(data['dates']);
            }
            if (data.hasOwnProperty('configid')) {
                obj['configid'] = ApiClient.convertToType(data['configid'], 'String');
            }
            if (data.hasOwnProperty('componentdetail')) {
                obj['componentdetail'] = ApiClient.convertToType(data['componentdetail'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The Vault component identifier to analyze.
 * @member {String} componentid
 */
VaultCalculationParameters.prototype['componentid'] = undefined;

/**
 * @member {module:model/VaultIdentifier} account
 */
VaultCalculationParameters.prototype['account'] = undefined;

/**
 * @member {module:model/VaultDateParameters} dates
 */
VaultCalculationParameters.prototype['dates'] = undefined;

/**
 * Vault Configuration identifier.
 * @member {String} configid
 */
VaultCalculationParameters.prototype['configid'] = undefined;

/**
 * Component detail type for the Vault component. It can be GROUPS or TOTALS.
 * @member {String} componentdetail
 */
VaultCalculationParameters.prototype['componentdetail'] = undefined;






export default VaultCalculationParameters;

