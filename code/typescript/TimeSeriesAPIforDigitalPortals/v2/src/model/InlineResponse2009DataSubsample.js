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
 * The InlineResponse2009DataSubsample model module.
 * @module model/InlineResponse2009DataSubsample
 * @version 0.9.0
 */
class InlineResponse2009DataSubsample {
    /**
     * Constructs a new <code>InlineResponse2009DataSubsample</code>.
     * Single summary record. For the attributes first, last, low, high, see attribute &#x60;valueUnit&#x60; in endpoint &#x60;/prices/get&#x60; for their unit, except for price type yield, where the &#x60;valueUnit&#x60; is always &#x60;percent&#x60; (id&#x3D;258).
     * @alias module:model/InlineResponse2009DataSubsample
     */
    constructor() { 
        
        InlineResponse2009DataSubsample.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2009DataSubsample</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009DataSubsample} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009DataSubsample} The populated <code>InlineResponse2009DataSubsample</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2009DataSubsample();

            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
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
 * Date and time of the start of the subsample.
 * @member {String} time
 */
InlineResponse2009DataSubsample.prototype['time'] = undefined;

/**
 * First price of the subsample.
 * @member {Number} first
 */
InlineResponse2009DataSubsample.prototype['first'] = undefined;

/**
 * Last price of the subsample.
 * @member {Number} last
 */
InlineResponse2009DataSubsample.prototype['last'] = undefined;

/**
 * Lowest price of the subsample.
 * @member {Number} low
 */
InlineResponse2009DataSubsample.prototype['low'] = undefined;

/**
 * Highest price of the subsample.
 * @member {Number} high
 */
InlineResponse2009DataSubsample.prototype['high'] = undefined;

/**
 * Accumulated number of units (e.g. shares) traded of the subsample. If the requested type of the price is ask, bid, or yield, the value is empty.
 * @member {Number} tradingVolume
 */
InlineResponse2009DataSubsample.prototype['tradingVolume'] = undefined;

/**
 * Accumulated monetary equivalent (cash value) of the subsample. If the requested type of the price is ask, bid, or yield, the value is empty. See attribute `currency` in endpoint `/prices/get` for its unit.
 * @member {Number} tradingValue
 */
InlineResponse2009DataSubsample.prototype['tradingValue'] = undefined;






export default InlineResponse2009DataSubsample;
