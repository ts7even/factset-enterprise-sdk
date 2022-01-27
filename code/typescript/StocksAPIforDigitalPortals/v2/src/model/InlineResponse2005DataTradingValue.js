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
import InlineResponse2005DataTradingValueAverage from './InlineResponse2005DataTradingValueAverage';

/**
 * The InlineResponse2005DataTradingValue model module.
 * @module model/InlineResponse2005DataTradingValue
 * @version 0.9.0
 */
class InlineResponse2005DataTradingValue {
    /**
     * Constructs a new <code>InlineResponse2005DataTradingValue</code>.
     * Value range of the sum of the cash flow for all transactions of a notation over a certain time range. The cash flow of a transaction is its volume multiplied by its trade price.
     * @alias module:model/InlineResponse2005DataTradingValue
     */
    constructor() { 
        
        InlineResponse2005DataTradingValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataTradingValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataTradingValue} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataTradingValue} The populated <code>InlineResponse2005DataTradingValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataTradingValue();

            if (data.hasOwnProperty('average')) {
                obj['average'] = InlineResponse2005DataTradingValueAverage.constructFromObject(data['average']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataTradingValueAverage} average
 */
InlineResponse2005DataTradingValue.prototype['average'] = undefined;






export default InlineResponse2005DataTradingValue;
