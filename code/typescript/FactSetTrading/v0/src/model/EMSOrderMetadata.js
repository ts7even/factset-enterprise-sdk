/**
 * EMS API
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EMSOrderMetadata model module.
 * @module model/EMSOrderMetadata
 */
class EMSOrderMetadata {
    /**
     * Constructs a new <code>EMSOrderMetadata</code>.
     * @alias module:model/EMSOrderMetadata
     */
    constructor() { 
        
        EMSOrderMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EMSOrderMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EMSOrderMetadata} obj Optional instance to populate.
     * @return {module:model/EMSOrderMetadata} The populated <code>EMSOrderMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EMSOrderMetadata();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('side')) {
                obj['side'] = ApiClient.convertToType(data['side'], 'String');
            }
            if (data.hasOwnProperty('orderType')) {
                obj['orderType'] = ApiClient.convertToType(data['orderType'], 'String');
            }
            if (data.hasOwnProperty('orderQuantity')) {
                obj['orderQuantity'] = ApiClient.convertToType(data['orderQuantity'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], 'String');
            }
            if (data.hasOwnProperty('orderId')) {
                obj['orderId'] = ApiClient.convertToType(data['orderId'], 'String');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = ApiClient.convertToType(data['warning'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Symbol
 * @member {String} symbol
 */
EMSOrderMetadata.prototype['symbol'] = undefined;

/**
 * Side
 * @member {module:model/EMSOrderMetadata.SideEnum} side
 */
EMSOrderMetadata.prototype['side'] = undefined;

/**
 * Order Type
 * @member {module:model/EMSOrderMetadata.OrderTypeEnum} orderType
 */
EMSOrderMetadata.prototype['orderType'] = undefined;

/**
 * Order Quantity
 * @member {Number} orderQuantity
 */
EMSOrderMetadata.prototype['orderQuantity'] = undefined;

/**
 * Error message
 * @member {String} error
 */
EMSOrderMetadata.prototype['error'] = undefined;

/**
 * information
 * @member {String} info
 */
EMSOrderMetadata.prototype['info'] = undefined;

/**
 * Order Id
 * @member {String} orderId
 */
EMSOrderMetadata.prototype['orderId'] = undefined;

/**
 * Warning
 * @member {String} warning
 */
EMSOrderMetadata.prototype['warning'] = undefined;





/**
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */
EMSOrderMetadata['SideEnum'] = {

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
     * value: "sell_short"
     * @const
     */
    "sell_short": "sell_short",

    /**
     * value: "sell_short_exempt"
     * @const
     */
    "sell_short_exempt": "sell_short_exempt"
};


/**
 * Allowed values for the <code>orderType</code> property.
 * @enum {String}
 * @readonly
 */
EMSOrderMetadata['OrderTypeEnum'] = {

    /**
     * value: "market"
     * @const
     */
    "market": "market",

    /**
     * value: "limit"
     * @const
     */
    "limit": "limit",

    /**
     * value: "stop"
     * @const
     */
    "stop": "stop",

    /**
     * value: "stop_limit"
     * @const
     */
    "stop_limit": "stop_limit",

    /**
     * value: "market_on_close"
     * @const
     */
    "market_on_close": "market_on_close",

    /**
     * value: "limit_or_better"
     * @const
     */
    "limit_or_better": "limit_or_better"
};



export default EMSOrderMetadata;

