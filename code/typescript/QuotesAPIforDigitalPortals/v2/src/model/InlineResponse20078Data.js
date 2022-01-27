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
import InlineResponse20078DataMarket from './InlineResponse20078DataMarket';

/**
 * The InlineResponse20078Data model module.
 * @module model/InlineResponse20078Data
 * @version 0.9.0
 */
class InlineResponse20078Data {
    /**
     * Constructs a new <code>InlineResponse20078Data</code>.
     * 
     * @alias module:model/InlineResponse20078Data
     */
    constructor() { 
        
        InlineResponse20078Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20078Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20078Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse20078Data} The populated <code>InlineResponse20078Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20078Data();

            if (data.hasOwnProperty('suspended')) {
                obj['suspended'] = ApiClient.convertToType(data['suspended'], 'Boolean');
            }
            if (data.hasOwnProperty('tradingStatus')) {
                obj['tradingStatus'] = ApiClient.convertToType(data['tradingStatus'], 'String');
            }
            if (data.hasOwnProperty('market')) {
                obj['market'] = InlineResponse20078DataMarket.constructFromObject(data['market']);
            }
        }
        return obj;
    }


}

/**
 * Indicates whether the notation is currently suspended from trading. The notation is tradable if it is not suspended and the market is open, see attribute `market.isOpen`.
 * @member {Boolean} suspended
 */
InlineResponse20078Data.prototype['suspended'] = undefined;

/**
 * Market-specific code of the trading status and/or the suspension of the notation.
 * @member {String} tradingStatus
 */
InlineResponse20078Data.prototype['tradingStatus'] = undefined;

/**
 * @member {module:model/InlineResponse20078DataMarket} market
 */
InlineResponse20078Data.prototype['market'] = undefined;






export default InlineResponse20078Data;
