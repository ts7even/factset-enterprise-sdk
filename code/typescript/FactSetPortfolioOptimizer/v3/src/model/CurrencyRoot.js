/**
 * FPO API
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
import Currency from './Currency';

/**
 * The CurrencyRoot model module.
 * @module model/CurrencyRoot
 * @version 0.9.1
 */
class CurrencyRoot {
    /**
     * Constructs a new <code>CurrencyRoot</code>.
     * @alias module:model/CurrencyRoot
     */
    constructor() { 
        
        CurrencyRoot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencyRoot} obj Optional instance to populate.
     * @return {module:model/CurrencyRoot} The populated <code>CurrencyRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Currency});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, module:model/Currency>} data
 */
CurrencyRoot.prototype['data'] = undefined;






export default CurrencyRoot;

