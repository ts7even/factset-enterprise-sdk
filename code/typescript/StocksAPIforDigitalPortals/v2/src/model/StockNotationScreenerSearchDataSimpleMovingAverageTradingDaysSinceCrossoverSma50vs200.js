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
import StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays from './StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays';

/**
 * The StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200 model module.
 * @module model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200 {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200</code>.
     * Number of trading days since the crossover and direction thereof of the SMA 50 (see parameter &#x60;simpleMovingAverage.days50&#x60;) and the SMA 200 (see parameter &#x60;simpleMovingAverage.days200&#x60;). Only crossovers which occurred in the most recent 300 trading days are considered.
     * @alias module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200
     * @param numberDays {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays} 
     */
    constructor(numberDays) { 
        
        StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200.initialize(this, numberDays);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, numberDays) { 
        obj['numberDays'] = numberDays;
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200} The populated <code>StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200();

            if (data.hasOwnProperty('numberDays')) {
                obj['numberDays'] = StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays.constructFromObject(data['numberDays']);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200NumberDays} numberDays
 */
StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200.prototype['numberDays'] = undefined;

/**
 * Direction of the crossing.
 * @member {module:model/StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200.DirectionEnum} direction
 * @default 'up'
 */
StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200.prototype['direction'] = 'up';





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200['DirectionEnum'] = {

    /**
     * value: "up"
     * @const
     */
    "up": "up",

    /**
     * value: "down"
     * @const
     */
    "down": "down"
};



export default StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200;
