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
 * The InlineResponse20021DataExpenseRatio model module.
 * @module model/InlineResponse20021DataExpenseRatio
 * @version 0.9.0
 */
class InlineResponse20021DataExpenseRatio {
    /**
     * Constructs a new <code>InlineResponse20021DataExpenseRatio</code>.
     * Expense ratio.
     * @alias module:model/InlineResponse20021DataExpenseRatio
     */
    constructor() { 
        
        InlineResponse20021DataExpenseRatio.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse20021DataExpenseRatio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20021DataExpenseRatio} obj Optional instance to populate.
     * @return {module:model/InlineResponse20021DataExpenseRatio} The populated <code>InlineResponse20021DataExpenseRatio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20021DataExpenseRatio();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('potential')) {
                obj['potential'] = ApiClient.convertToType(data['potential'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Typically the net total annual fee the issuer deducts from ETP assets as a management fee. Also can include where applicable acquired ETP fees, short interest expense, index fees, and financing fees. Breakeven rate is reported for commodity pools. This data is available for all the regions.
 * @member {Number} value
 */
InlineResponse20021DataExpenseRatio.prototype['value'] = undefined;

/**
 * The full expense ratio before any fee waivers. This data is available fo the US and Canada regions.
 * @member {Number} potential
 */
InlineResponse20021DataExpenseRatio.prototype['potential'] = undefined;






export default InlineResponse20021DataExpenseRatio;
