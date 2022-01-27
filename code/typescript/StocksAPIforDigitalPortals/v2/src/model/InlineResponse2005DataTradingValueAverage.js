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
import InlineResponse2005DataTradingValueAverageDays30 from './InlineResponse2005DataTradingValueAverageDays30';
import InlineResponse2005DataTradingValueAverageDays5 from './InlineResponse2005DataTradingValueAverageDays5';

/**
 * The InlineResponse2005DataTradingValueAverage model module.
 * @module model/InlineResponse2005DataTradingValueAverage
 * @version 0.9.0
 */
class InlineResponse2005DataTradingValueAverage {
    /**
     * Constructs a new <code>InlineResponse2005DataTradingValueAverage</code>.
     * Value range of the arithmetic mean of the trading value for different time ranges.
     * @alias module:model/InlineResponse2005DataTradingValueAverage
     */
    constructor() { 
        
        InlineResponse2005DataTradingValueAverage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataTradingValueAverage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataTradingValueAverage} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataTradingValueAverage} The populated <code>InlineResponse2005DataTradingValueAverage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataTradingValueAverage();

            if (data.hasOwnProperty('days5')) {
                obj['days5'] = InlineResponse2005DataTradingValueAverageDays5.constructFromObject(data['days5']);
            }
            if (data.hasOwnProperty('days30')) {
                obj['days30'] = InlineResponse2005DataTradingValueAverageDays30.constructFromObject(data['days30']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataTradingValueAverageDays5} days5
 */
InlineResponse2005DataTradingValueAverage.prototype['days5'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataTradingValueAverageDays30} days30
 */
InlineResponse2005DataTradingValueAverage.prototype['days30'] = undefined;






export default InlineResponse2005DataTradingValueAverage;
