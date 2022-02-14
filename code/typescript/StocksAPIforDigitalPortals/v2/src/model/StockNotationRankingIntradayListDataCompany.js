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
import StockNotationRankingIntradayListDataCompanyCountry from './StockNotationRankingIntradayListDataCompanyCountry';

/**
 * The StockNotationRankingIntradayListDataCompany model module.
 * @module model/StockNotationRankingIntradayListDataCompany
 * @version 0.9.1
 */
class StockNotationRankingIntradayListDataCompany {
    /**
     * Constructs a new <code>StockNotationRankingIntradayListDataCompany</code>.
     * Company-related parameters.
     * @alias module:model/StockNotationRankingIntradayListDataCompany
     */
    constructor() { 
        
        StockNotationRankingIntradayListDataCompany.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationRankingIntradayListDataCompany</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationRankingIntradayListDataCompany} obj Optional instance to populate.
     * @return {module:model/StockNotationRankingIntradayListDataCompany} The populated <code>StockNotationRankingIntradayListDataCompany</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationRankingIntradayListDataCompany();

            if (data.hasOwnProperty('country')) {
                obj['country'] = StockNotationRankingIntradayListDataCompanyCountry.constructFromObject(data['country']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationRankingIntradayListDataCompanyCountry} country
 */
StockNotationRankingIntradayListDataCompany.prototype['country'] = undefined;






export default StockNotationRankingIntradayListDataCompany;

