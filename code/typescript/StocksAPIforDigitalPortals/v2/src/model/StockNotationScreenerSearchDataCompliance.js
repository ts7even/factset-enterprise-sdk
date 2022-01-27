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
import StockNotationScreenerSearchDataComplianceFrance from './StockNotationScreenerSearchDataComplianceFrance';

/**
 * The StockNotationScreenerSearchDataCompliance model module.
 * @module model/StockNotationScreenerSearchDataCompliance
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataCompliance {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataCompliance</code>.
     * Compliance properties. See endpoint &#x60;/instrument/complianceProperty/list&#x60; for the full list of compliance properties associated with instruments (across all asset classes).
     * @alias module:model/StockNotationScreenerSearchDataCompliance
     */
    constructor() { 
        
        StockNotationScreenerSearchDataCompliance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataCompliance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataCompliance} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataCompliance} The populated <code>StockNotationScreenerSearchDataCompliance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataCompliance();

            if (data.hasOwnProperty('france')) {
                obj['france'] = StockNotationScreenerSearchDataComplianceFrance.constructFromObject(data['france']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataComplianceFrance} france
 */
StockNotationScreenerSearchDataCompliance.prototype['france'] = undefined;






export default StockNotationScreenerSearchDataCompliance;
