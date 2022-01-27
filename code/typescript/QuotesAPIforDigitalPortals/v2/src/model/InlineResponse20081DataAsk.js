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
 * The InlineResponse20081DataAsk model module.
 * @module model/InlineResponse20081DataAsk
 * @version 0.9.0
 */
class InlineResponse20081DataAsk {
    /**
     * Constructs a new <code>InlineResponse20081DataAsk</code>.
     * Most recent ask price of the trading day.
     * @alias module:model/InlineResponse20081DataAsk
     */
    constructor() { 
        
        InlineResponse20081DataAsk.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20081DataAsk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20081DataAsk} obj Optional instance to populate.
     * @return {module:model/InlineResponse20081DataAsk} The populated <code>InlineResponse20081DataAsk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20081DataAsk();

            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('quoteCondition')) {
                obj['quoteCondition'] = ApiClient.convertToType(data['quoteCondition'], 'String');
            }
            if (data.hasOwnProperty('tradingVolume')) {
                obj['tradingVolume'] = ApiClient.convertToType(data['tradingVolume'], 'Number');
            }
            if (data.hasOwnProperty('tradingValue')) {
                obj['tradingValue'] = ApiClient.convertToType(data['tradingValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date and time.
 * @member {String} time
 */
InlineResponse20081DataAsk.prototype['time'] = undefined;

/**
 * Price value. See attribute `valueUnit` for its unit.
 * @member {Number} price
 */
InlineResponse20081DataAsk.prototype['price'] = undefined;

/**
 * Quote condition. Possible values depend on the values delivered by the supplier of the price information.
 * @member {String} quoteCondition
 */
InlineResponse20081DataAsk.prototype['quoteCondition'] = undefined;

/**
 * Number of units (e.g. shares) offered.
 * @member {Number} tradingVolume
 */
InlineResponse20081DataAsk.prototype['tradingVolume'] = undefined;

/**
 * Monetary equivalent (cash value) of the offer. See attribute `currency` for its unit.
 * @member {Number} tradingValue
 */
InlineResponse20081DataAsk.prototype['tradingValue'] = undefined;






export default InlineResponse20081DataAsk;
