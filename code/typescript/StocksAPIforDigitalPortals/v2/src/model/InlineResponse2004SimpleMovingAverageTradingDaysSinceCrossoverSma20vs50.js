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
 * The InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 model module.
 * @module model/InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50
 * @version 0.9.1
 */
class InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 {
    /**
     * Constructs a new <code>InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50</code>.
     * Number of trading days since the crossover and direction thereof of the SMA 20 (see parameter &#x60;simpleMovingAverage.days20&#x60;) and the SMA 50 (see parameter &#x60;simpleMovingAverage.days50&#x60;). Only crossovers which occurred in the most recent 100 trading days are considered, hence the attribute &#x60;sma20vs50.numberDays&#x60; cannot exceed the value 100.
     * @alias module:model/InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50
     */
    constructor() { 
        
        InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50} The populated <code>InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50();

            if (data.hasOwnProperty('numberDays')) {
                obj['numberDays'] = ApiClient.convertToType(data['numberDays'], 'Number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Number of trading days.
 * @member {Number} numberDays
 */
InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.prototype['numberDays'] = undefined;

/**
 * Direction of the crossing.
 * @member {module:model/InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.DirectionEnum} direction
 */
InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.prototype['direction'] = undefined;





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50['DirectionEnum'] = {

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



export default InlineResponse2004SimpleMovingAverageTradingDaysSinceCrossoverSma20vs50;

