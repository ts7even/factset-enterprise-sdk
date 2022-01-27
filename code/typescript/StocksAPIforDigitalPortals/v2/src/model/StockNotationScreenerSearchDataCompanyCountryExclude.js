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
 * The StockNotationScreenerSearchDataCompanyCountryExclude model module.
 * @module model/StockNotationScreenerSearchDataCompanyCountryExclude
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataCompanyCountryExclude {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCompanyCountryExclude</code>.
     * Exclusion list. Stocks issued by a company whose head office is located in a country in the provided list are not returned.
     * @alias module:model/StockNotationScreenerSearchDataCompanyCountryExclude
     */
    constructor() { 
        
        StockNotationScreenerSearchDataCompanyCountryExclude.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCompanyCountryExclude</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCompanyCountryExclude} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCompanyCountryExclude} The populated <code>StockNotationScreenerSearchDataCompanyCountryExclude</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCompanyCountryExclude();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Set of country identifiers.
 * @member {Array.<Number>} ids
 */
StockNotationScreenerSearchDataCompanyCountryExclude.prototype['ids'] = undefined;






export default StockNotationScreenerSearchDataCompanyCountryExclude;
