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
import InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays from './InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays';

/**
 * The InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down model module.
 * @module model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down
 * @version 0.9.1
 */
class InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down {
    /**
     * Constructs a new <code>InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down</code>.
     * Value range of the down direction, i.e. the SMA 50 crossed the SMA 200 from above, hence the SMA 50 has currently a lower value.
     * @alias module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down
     */
    constructor() { 
        
        InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down} The populated <code>InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down();

            if (data.hasOwnProperty('numberDays')) {
                obj['numberDays'] = InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays.constructFromObject(data['numberDays']);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50UpNumberDays} numberDays
 */
InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down.prototype['numberDays'] = undefined;

/**
 * Number of notations.
 * @member {Number} count
 */
InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down.prototype['count'] = undefined;






export default InlineResponse2005DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200Down;

