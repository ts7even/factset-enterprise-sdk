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
 * The InlineResponse2001DataProfitLossTotal model module.
 * @module model/InlineResponse2001DataProfitLossTotal
 * @version 0.9.1
 */
class InlineResponse2001DataProfitLossTotal {
    /**
     * Constructs a new <code>InlineResponse2001DataProfitLossTotal</code>.
     * Summary of potential profit or loss resulting from open and closed positions.
     * @alias module:model/InlineResponse2001DataProfitLossTotal
     */
    constructor() { 
        
        InlineResponse2001DataProfitLossTotal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001DataProfitLossTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001DataProfitLossTotal} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001DataProfitLossTotal} The populated <code>InlineResponse2001DataProfitLossTotal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001DataProfitLossTotal();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = ApiClient.convertToType(data['absolute'], 'Number');
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = ApiClient.convertToType(data['relative'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Absolute value of realized and potential profit or loss.
 * @member {Number} absolute
 */
InlineResponse2001DataProfitLossTotal.prototype['absolute'] = undefined;

/**
 * Relative value of realized and potential profit or loss.
 * @member {Number} relative
 */
InlineResponse2001DataProfitLossTotal.prototype['relative'] = undefined;






export default InlineResponse2001DataProfitLossTotal;

