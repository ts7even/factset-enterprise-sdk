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
 * The InlineResponse2001DataSummaryTransactionsSell model module.
 * @module model/InlineResponse2001DataSummaryTransactionsSell
 * @version 0.9.1
 */
class InlineResponse2001DataSummaryTransactionsSell {
    /**
     * Constructs a new <code>InlineResponse2001DataSummaryTransactionsSell</code>.
     * Summary of sell transactions.
     * @alias module:model/InlineResponse2001DataSummaryTransactionsSell
     */
    constructor() { 
        
        InlineResponse2001DataSummaryTransactionsSell.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001DataSummaryTransactionsSell</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001DataSummaryTransactionsSell} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001DataSummaryTransactionsSell} The populated <code>InlineResponse2001DataSummaryTransactionsSell</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001DataSummaryTransactionsSell();

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('turnover')) {
                obj['turnover'] = ApiClient.convertToType(data['turnover'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of sell transactions in the portfolio.
 * @member {Number} number
 */
InlineResponse2001DataSummaryTransactionsSell.prototype['number'] = undefined;

/**
 * Total turnover generated by all sell transactions.
 * @member {Number} turnover
 */
InlineResponse2001DataSummaryTransactionsSell.prototype['turnover'] = undefined;






export default InlineResponse2001DataSummaryTransactionsSell;

