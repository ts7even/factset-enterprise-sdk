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
 * The PortfolioTransactionCashCreateData model module.
 * @module model/PortfolioTransactionCashCreateData
 * @version 0.9.0
 */
class PortfolioTransactionCashCreateData {
    /**
     * Constructs a new <code>PortfolioTransactionCashCreateData</code>.
     * The data member contains the request&#39;s primary data.
     * @alias module:model/PortfolioTransactionCashCreateData
     * @param id {String} Identifier of the portfolio.
     * @param time {String} Date and time of the trade.
     * @param amount {Number} The cash amount being deposited / withdrawn in portfolio‘s base currency.
     */
    constructor(id, time, amount) { 
        
        PortfolioTransactionCashCreateData.initialize(this, id, time, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, time, amount) { 
        obj['id'] = id;
        obj['time'] = time;
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>PortfolioTransactionCashCreateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortfolioTransactionCashCreateData} obj Optional instance to populate.
     * @return {module:model/PortfolioTransactionCashCreateData} The populated <code>PortfolioTransactionCashCreateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PortfolioTransactionCashCreateData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the portfolio.
 * @member {String} id
 */
PortfolioTransactionCashCreateData.prototype['id'] = undefined;

/**
 * Date and time of the trade.
 * @member {String} time
 */
PortfolioTransactionCashCreateData.prototype['time'] = undefined;

/**
 * The cash amount being deposited / withdrawn in portfolio‘s base currency.
 * @member {Number} amount
 */
PortfolioTransactionCashCreateData.prototype['amount'] = undefined;






export default PortfolioTransactionCashCreateData;
