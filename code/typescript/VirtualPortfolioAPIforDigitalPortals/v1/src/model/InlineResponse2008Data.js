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
import InlineResponse2008Notation from './InlineResponse2008Notation';

/**
 * The InlineResponse2008Data model module.
 * @module model/InlineResponse2008Data
 * @version 0.9.1
 */
class InlineResponse2008Data {
    /**
     * Constructs a new <code>InlineResponse2008Data</code>.
     * @alias module:model/InlineResponse2008Data
     */
    constructor() { 
        
        InlineResponse2008Data.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008Data</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008Data} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008Data} The populated <code>InlineResponse2008Data</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008Data();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('notation')) {
                obj['notation'] = InlineResponse2008Notation.constructFromObject(data['notation']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
            if (data.hasOwnProperty('numberShares')) {
                obj['numberShares'] = ApiClient.convertToType(data['numberShares'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], 'Number');
            }
            if (data.hasOwnProperty('exchangeRate')) {
                obj['exchangeRate'] = ApiClient.convertToType(data['exchangeRate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identifier of transaction.
 * @member {String} id
 */
InlineResponse2008Data.prototype['id'] = undefined;

/**
 * @member {module:model/InlineResponse2008Notation} notation
 */
InlineResponse2008Data.prototype['notation'] = undefined;

/**
 * Type of transaction
 * @member {module:model/InlineResponse2008Data.TypeEnum} type
 */
InlineResponse2008Data.prototype['type'] = undefined;

/**
 * Date and time of the trade.
 * @member {String} time
 */
InlineResponse2008Data.prototype['time'] = undefined;

/**
 * Number of shares bought or sold.
 * @member {Number} numberShares
 */
InlineResponse2008Data.prototype['numberShares'] = undefined;

/**
 * Price the securities were purchased / sold for.
 * @member {Number} price
 */
InlineResponse2008Data.prototype['price'] = undefined;

/**
 * Charges accrued in portfolio's base currency.
 * @member {Number} charges
 */
InlineResponse2008Data.prototype['charges'] = undefined;

/**
 * The exchange rate between the notation's currency and the portfolio currency.
 * @member {Number} exchangeRate
 */
InlineResponse2008Data.prototype['exchangeRate'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse2008Data['TypeEnum'] = {

    /**
     * value: "buy"
     * @const
     */
    "buy": "buy",

    /**
     * value: "sell"
     * @const
     */
    "sell": "sell",

    /**
     * value: "cash"
     * @const
     */
    "cash": "cash",

    /**
     * value: "payout"
     * @const
     */
    "payout": "payout",

    /**
     * value: "short"
     * @const
     */
    "short": "short",

    /**
     * value: "cover"
     * @const
     */
    "cover": "cover"
};



export default InlineResponse2008Data;

