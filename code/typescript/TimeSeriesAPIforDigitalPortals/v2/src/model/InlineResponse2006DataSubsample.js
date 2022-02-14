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
 * The InlineResponse2006DataSubsample model module.
 * @module model/InlineResponse2006DataSubsample
 * @version 0.9.1
 */
class InlineResponse2006DataSubsample {
    /**
     * Constructs a new <code>InlineResponse2006DataSubsample</code>.
     * Single summary record. For the attributes first, last, low, high, see attribute &#x60;valueUnit&#x60; in endpoint &#x60;/prices/get&#x60; for their unit, except for price type yield, where the &#x60;valueUnit&#x60; is always &#x60;percent&#x60; (id&#x3D;258).
     * @alias module:model/InlineResponse2006DataSubsample
     */
    constructor() { 
        
        InlineResponse2006DataSubsample.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006DataSubsample</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006DataSubsample} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006DataSubsample} The populated <code>InlineResponse2006DataSubsample</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006DataSubsample();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'Number');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'Number');
            }
            if (data.hasOwnProperty('low')) {
                obj['low'] = ApiClient.convertToType(data['low'], 'Number');
            }
            if (data.hasOwnProperty('high')) {
                obj['high'] = ApiClient.convertToType(data['high'], 'Number');
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
 * Date of the start of the subsample.
 * @member {Date} date
 */
InlineResponse2006DataSubsample.prototype['date'] = undefined;

/**
 * First price of the subsample.
 * @member {Number} first
 */
InlineResponse2006DataSubsample.prototype['first'] = undefined;

/**
 * Last price of the subsample.
 * @member {Number} last
 */
InlineResponse2006DataSubsample.prototype['last'] = undefined;

/**
 * Lowest price of the subsample.
 * @member {Number} low
 */
InlineResponse2006DataSubsample.prototype['low'] = undefined;

/**
 * Highest price of the subsample.
 * @member {Number} high
 */
InlineResponse2006DataSubsample.prototype['high'] = undefined;

/**
 * Accumulated number of units (e.g. shares) traded of the subsample. If the requested type of the price is ask, bid, or yield, the value is empty.
 * @member {Number} tradingVolume
 */
InlineResponse2006DataSubsample.prototype['tradingVolume'] = undefined;

/**
 * Accumulated monetary equivalent (cash value) of the subsample. If the requested type of the price is ask, bid, or yield, the value is empty. See attribute `currency` in endpoint `/prices/get` for its unit.
 * @member {Number} tradingValue
 */
InlineResponse2006DataSubsample.prototype['tradingValue'] = undefined;






export default InlineResponse2006DataSubsample;

