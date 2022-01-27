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
 * The SecuritizedDerivativeIssuerSearchDataCategory model module.
 * @module model/SecuritizedDerivativeIssuerSearchDataCategory
 * @version 0.9.0
 */
class SecuritizedDerivativeIssuerSearchDataCategory {
    /**
     * Constructs a new <code>SecuritizedDerivativeIssuerSearchDataCategory</code>.
     * List of categories of securitized derivatives. Only issuers that have issued securitized derivatives belonging to at least one category in the provided list are returned.
     * @alias module:model/SecuritizedDerivativeIssuerSearchDataCategory
     */
    constructor() { 
        
        SecuritizedDerivativeIssuerSearchDataCategory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeIssuerSearchDataCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeIssuerSearchDataCategory} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeIssuerSearchDataCategory} The populated <code>SecuritizedDerivativeIssuerSearchDataCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeIssuerSearchDataCategory();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * List of category identifiers. See endpoint `/category/listBySystem` for category systems 18 and 23 for valid values.
 * @member {Array.<Number>} ids
 */
SecuritizedDerivativeIssuerSearchDataCategory.prototype['ids'] = undefined;






export default SecuritizedDerivativeIssuerSearchDataCategory;
