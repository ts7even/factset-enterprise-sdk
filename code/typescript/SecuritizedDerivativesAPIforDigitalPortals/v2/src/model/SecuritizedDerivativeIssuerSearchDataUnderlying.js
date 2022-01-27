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
import SecuritizedDerivativeIssuerSearchDataUnderlyingInstrument from './SecuritizedDerivativeIssuerSearchDataUnderlyingInstrument';

/**
 * The SecuritizedDerivativeIssuerSearchDataUnderlying model module.
 * @module model/SecuritizedDerivativeIssuerSearchDataUnderlying
 * @version 0.9.0
 */
class SecuritizedDerivativeIssuerSearchDataUnderlying {
    /**
     * Constructs a new <code>SecuritizedDerivativeIssuerSearchDataUnderlying</code>.
     * List of underlyings of securitized derivatives. Only issuers that have issued at least one securitized derivative on an underlying in the provided list are returned.
     * @alias module:model/SecuritizedDerivativeIssuerSearchDataUnderlying
     */
    constructor() { 
        
        SecuritizedDerivativeIssuerSearchDataUnderlying.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeIssuerSearchDataUnderlying</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeIssuerSearchDataUnderlying} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeIssuerSearchDataUnderlying} The populated <code>SecuritizedDerivativeIssuerSearchDataUnderlying</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeIssuerSearchDataUnderlying();

            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = SecuritizedDerivativeIssuerSearchDataUnderlyingInstrument.constructFromObject(data['instrument']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecuritizedDerivativeIssuerSearchDataUnderlyingInstrument} instrument
 */
SecuritizedDerivativeIssuerSearchDataUnderlying.prototype['instrument'] = undefined;






export default SecuritizedDerivativeIssuerSearchDataUnderlying;
