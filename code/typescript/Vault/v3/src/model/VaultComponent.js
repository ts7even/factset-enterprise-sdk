/**
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.12.0
 * Contact: api@factset.com
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
 * The VaultComponent model module.
 * @module model/VaultComponent
 */
class VaultComponent {
    /**
     * Constructs a new <code>VaultComponent</code>.
     * @alias module:model/VaultComponent
     */
    constructor() { 
        
        VaultComponent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VaultComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VaultComponent} obj Optional instance to populate.
     * @return {module:model/VaultComponent} The populated <code>VaultComponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VaultComponent();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = VaultIdentifier.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('benchmark')) {
                obj['benchmark'] = VaultIdentifier.constructFromObject(data['benchmark']);
            }
            if (data.hasOwnProperty('currencyisocode')) {
                obj['currencyisocode'] = ApiClient.convertToType(data['currencyisocode'], 'String');
            }
            if (data.hasOwnProperty('dates')) {
                obj['dates'] = VaultDateParameters.constructFromObject(data['dates']);
            }
            if (data.hasOwnProperty('snapshot')) {
                obj['snapshot'] = ApiClient.convertToType(data['snapshot'], 'Boolean');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Vault component identifier
 * @member {String} id
 */
VaultComponent.prototype['id'] = undefined;

/**
 * @member {module:model/VaultIdentifier} account
 */
VaultComponent.prototype['account'] = undefined;

/**
 * @member {module:model/VaultIdentifier} benchmark
 */
VaultComponent.prototype['benchmark'] = undefined;

/**
 * Currency iso code saved in the document
 * @member {String} currencyisocode
 */
VaultComponent.prototype['currencyisocode'] = undefined;

/**
 * @member {module:model/VaultDateParameters} dates
 */
VaultComponent.prototype['dates'] = undefined;

/**
 * Snapshot
 * @member {Boolean} snapshot
 */
VaultComponent.prototype['snapshot'] = undefined;

/**
 * The path to the document
 * @member {String} path
 */
VaultComponent.prototype['path'] = undefined;

/**
 * Component name.
 * @member {String} name
 */
VaultComponent.prototype['name'] = undefined;

/**
 * Component category.
 * @member {String} category
 */
VaultComponent.prototype['category'] = undefined;






export default VaultComponent;

