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
import SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlying from './SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlying';

/**
 * The SecuritizedDerivativeIssuerSearchDataFactorCertificates model module.
 * @module model/SecuritizedDerivativeIssuerSearchDataFactorCertificates
 * @version 0.9.0
 */
class SecuritizedDerivativeIssuerSearchDataFactorCertificates {
    /**
     * Constructs a new <code>SecuritizedDerivativeIssuerSearchDataFactorCertificates</code>.
     * Parameters for factor certificates.
     * @alias module:model/SecuritizedDerivativeIssuerSearchDataFactorCertificates
     */
    constructor() { 
        
        SecuritizedDerivativeIssuerSearchDataFactorCertificates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeIssuerSearchDataFactorCertificates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeIssuerSearchDataFactorCertificates} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeIssuerSearchDataFactorCertificates} The populated <code>SecuritizedDerivativeIssuerSearchDataFactorCertificates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeIssuerSearchDataFactorCertificates();

            if (data.hasOwnProperty('effectiveUnderlying')) {
                obj['effectiveUnderlying'] = SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlying.constructFromObject(data['effectiveUnderlying']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlying} effectiveUnderlying
 */
SecuritizedDerivativeIssuerSearchDataFactorCertificates.prototype['effectiveUnderlying'] = undefined;






export default SecuritizedDerivativeIssuerSearchDataFactorCertificates;
