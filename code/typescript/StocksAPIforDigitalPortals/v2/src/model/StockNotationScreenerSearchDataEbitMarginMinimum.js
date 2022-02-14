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
 * The StockNotationScreenerSearchDataEbitMarginMinimum model module.
 * @module model/StockNotationScreenerSearchDataEbitMarginMinimum
 * @version 0.9.1
 */
class StockNotationScreenerSearchDataEbitMarginMinimum {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataEbitMarginMinimum</code>.
     * The minimum of the range, or &#x60;null&#x60; to indicate that there is no minimum.
     * @alias module:model/StockNotationScreenerSearchDataEbitMarginMinimum
     */
    constructor() { 
        
        StockNotationScreenerSearchDataEbitMarginMinimum.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataEbitMarginMinimum</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataEbitMarginMinimum} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataEbitMarginMinimum} The populated <code>StockNotationScreenerSearchDataEbitMarginMinimum</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataEbitMarginMinimum();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('inclusive')) {
                obj['inclusive'] = ApiClient.convertToType(data['inclusive'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The minimum value.
 * @member {Number} value
 */
StockNotationScreenerSearchDataEbitMarginMinimum.prototype['value'] = undefined;

/**
 * Indicates whether the minimum value is included in the range or not.
 * @member {Boolean} inclusive
 * @default true
 */
StockNotationScreenerSearchDataEbitMarginMinimum.prototype['inclusive'] = true;






export default StockNotationScreenerSearchDataEbitMarginMinimum;

