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
import InlineResponse2003InstrumentTradingVolumeOtc from './InlineResponse2003InstrumentTradingVolumeOtc';

/**
 * The InlineResponse2003InstrumentTradingVolume model module.
 * @module model/InlineResponse2003InstrumentTradingVolume
 * @version 0.9.1
 */
class InlineResponse2003InstrumentTradingVolume {
    /**
     * Constructs a new <code>InlineResponse2003InstrumentTradingVolume</code>.
     * Requirements regarding the trading volume. The currency is the currency of denomination (see attribute &#x60;issue.volume.currency&#x60;), thus the values are not comparable if debt instruments with different currencies of denomination are among the results.
     * @alias module:model/InlineResponse2003InstrumentTradingVolume
     */
    constructor() { 
        
        InlineResponse2003InstrumentTradingVolume.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003InstrumentTradingVolume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003InstrumentTradingVolume} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003InstrumentTradingVolume} The populated <code>InlineResponse2003InstrumentTradingVolume</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003InstrumentTradingVolume();

            if (data.hasOwnProperty('otc')) {
                obj['otc'] = InlineResponse2003InstrumentTradingVolumeOtc.constructFromObject(data['otc']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2003InstrumentTradingVolumeOtc} otc
 */
InlineResponse2003InstrumentTradingVolume.prototype['otc'] = undefined;






export default InlineResponse2003InstrumentTradingVolume;

