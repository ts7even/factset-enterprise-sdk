/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CalculationMeta from './CalculationMeta';
import VaultCalculationParameters from './VaultCalculationParameters';

/**
 * The VaultCalculationParametersRoot model module.
 * @module model/VaultCalculationParametersRoot
 */
class VaultCalculationParametersRoot {
    /**
     * Constructs a new <code>VaultCalculationParametersRoot</code>.
     * @alias module:model/VaultCalculationParametersRoot
     */
    constructor() { 
        
        VaultCalculationParametersRoot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VaultCalculationParametersRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultCalculationParametersRoot} obj Optional instance to populate.
     * @return {module:model/VaultCalculationParametersRoot} The populated <code>VaultCalculationParametersRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultCalculationParametersRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': VaultCalculationParameters});
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = CalculationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * List of calculation parameters.
 * @member {Object.<String, module:model/VaultCalculationParameters>} data
 */
VaultCalculationParametersRoot.prototype['data'] = undefined;

/**
 * @member {module:model/CalculationMeta} meta
 */
VaultCalculationParametersRoot.prototype['meta'] = undefined;






export default VaultCalculationParametersRoot;

