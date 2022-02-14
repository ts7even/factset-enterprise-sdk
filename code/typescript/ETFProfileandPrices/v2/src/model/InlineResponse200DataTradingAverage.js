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
 * The InlineResponse200DataTradingAverage model module.
 * @module model/InlineResponse200DataTradingAverage
 * @version 0.9.1
 */
class InlineResponse200DataTradingAverage {
    /**
     * Constructs a new <code>InlineResponse200DataTradingAverage</code>.
     * Average.
     * @alias module:model/InlineResponse200DataTradingAverage
     */
    constructor() { 
        
        InlineResponse200DataTradingAverage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse200DataTradingAverage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200DataTradingAverage} obj Optional instance to populate.
     * @return {module:model/InlineResponse200DataTradingAverage} The populated <code>InlineResponse200DataTradingAverage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200DataTradingAverage();

            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The average daily number of shares traded over the past 45 trading days. This data is available for the US regions.
 * @member {Number} volume
 */
InlineResponse200DataTradingAverage.prototype['volume'] = undefined;

/**
 * The average daily value traded over the past 45-trading day period in ETP's listing currency. This data is available for the US regions.
 * @member {Number} value
 */
InlineResponse200DataTradingAverage.prototype['value'] = undefined;






export default InlineResponse200DataTradingAverage;

