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
 * The StockNotationScreenerSearchDataIndustryClassificationExclude model module.
 * @module model/StockNotationScreenerSearchDataIndustryClassificationExclude
 * @version 0.9.1
 */
class StockNotationScreenerSearchDataIndustryClassificationExclude {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataIndustryClassificationExclude</code>.
     * Exclusion list. Stocks that belong to a category in the provided list are not returned.
     * @alias module:model/StockNotationScreenerSearchDataIndustryClassificationExclude
     */
    constructor() { 
        
        StockNotationScreenerSearchDataIndustryClassificationExclude.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataIndustryClassificationExclude</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataIndustryClassificationExclude} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataIndustryClassificationExclude} The populated <code>StockNotationScreenerSearchDataIndustryClassificationExclude</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataIndustryClassificationExclude();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Set of category identifiers. 
 * @member {Array.<Number>} ids
 */
StockNotationScreenerSearchDataIndustryClassificationExclude.prototype['ids'] = undefined;






export default StockNotationScreenerSearchDataIndustryClassificationExclude;

