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
import StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDaysMaximum from './StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDaysMaximum';
import StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDaysMinimum from './StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDaysMinimum';

/**
 * The StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays model module.
 * @module model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays</code>.
     * Value range for the number of trading days.
     * @alias module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays
     */
    constructor() { 
        
        StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays} The populated <code>StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDaysMinimum.constructFromObject(data['minimum']);
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDaysMaximum.constructFromObject(data['maximum']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDaysMinimum} minimum
 */
StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays.prototype['minimum'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDaysMaximum} maximum
 */
StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays.prototype['maximum'] = undefined;






export default StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays;
