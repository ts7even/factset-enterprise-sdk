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
import Instrument from './Instrument';
import TimeInForce from './TimeInForce';

/**
 * The EMSOrder model module.
 * @module model/EMSOrder
 */
class EMSOrder {
    /**
     * Constructs a new <code>EMSOrder</code>.
     * @alias module:model/EMSOrder
     * @param instrument {module:model/Instrument} 
     * @param side {module:model/EMSOrder.SideEnum} Side
     * @param orderType {module:model/EMSOrder.OrderTypeEnum} Type of the order
     */
    constructor(instrument, side, orderType) { 
        
        EMSOrder.initialize(this, instrument, side, orderType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, instrument, side, orderType) { 
        obj['instrument'] = instrument;
        obj['side'] = side;
        obj['orderType'] = orderType;
    }

    /**
     * Constructs a <code>EMSOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EMSOrder} obj Optional instance to populate.
     * @return {module:model/EMSOrder} The populated <code>EMSOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EMSOrder();

            if (data.hasOwnProperty('orderId')) {
                obj['orderId'] = ApiClient.convertToType(data['orderId'], 'String');
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = Instrument.constructFromObject(data['instrument']);
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
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('stopPrice')) {
                obj['stopPrice'] = ApiClient.convertToType(data['stopPrice'], 'Number');
            }
            if (data.hasOwnProperty('strikePrice')) {
                obj['strikePrice'] = ApiClient.convertToType(data['strikePrice'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('isCovered')) {
                obj['isCovered'] = ApiClient.convertToType(data['isCovered'], 'Boolean');
            }
            if (data.hasOwnProperty('maxShow')) {
                obj['maxShow'] = ApiClient.convertToType(data['maxShow'], 'Number');
            }
            if (data.hasOwnProperty('maxFloor')) {
                obj['maxFloor'] = ApiClient.convertToType(data['maxFloor'], 'Number');
            }
            if (data.hasOwnProperty('prevClosePrice')) {
                obj['prevClosePrice'] = ApiClient.convertToType(data['prevClosePrice'], 'Number');
            }
            if (data.hasOwnProperty('settlementType')) {
                obj['settlementType'] = ApiClient.convertToType(data['settlementType'], 'String');
            }
            if (data.hasOwnProperty('settlementDate')) {
                obj['settlementDate'] = ApiClient.convertToType(data['settlementDate'], 'String');
            }
            if (data.hasOwnProperty('handlingInstructions')) {
                obj['handlingInstructions'] = ApiClient.convertToType(data['handlingInstructions'], 'String');
            }
            if (data.hasOwnProperty('executionInstructions')) {
                obj['executionInstructions'] = ApiClient.convertToType(data['executionInstructions'], 'String');
            }
            if (data.hasOwnProperty('locateRequired')) {
                obj['locateRequired'] = ApiClient.convertToType(data['locateRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('effectiveTime')) {
                obj['effectiveTime'] = ApiClient.convertToType(data['effectiveTime'], 'String');
            }
            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('timeInForce')) {
                obj['timeInForce'] = TimeInForce.constructFromObject(data['timeInForce']);
            }
            if (data.hasOwnProperty('inboundDestination')) {
                obj['inboundDestination'] = ApiClient.convertToType(data['inboundDestination'], 'String');
            }
            if (data.hasOwnProperty('userDefinedFields')) {
                obj['userDefinedFields'] = ApiClient.convertToType(data['userDefinedFields'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * Unique id for the order
 * @member {String} orderId
 */
EMSOrder.prototype['orderId'] = undefined;

/**
 * @member {module:model/Instrument} instrument
 */
EMSOrder.prototype['instrument'] = undefined;

/**
 * Side
 * @member {module:model/EMSOrder.SideEnum} side
 */
EMSOrder.prototype['side'] = undefined;

/**
 * Type of the order
 * @member {module:model/EMSOrder.OrderTypeEnum} orderType
 */
EMSOrder.prototype['orderType'] = undefined;

/**
 * Order quantity
 * @member {Number} orderQuantity
 */
EMSOrder.prototype['orderQuantity'] = undefined;

/**
 * Order Price
 * @member {Number} price
 */
EMSOrder.prototype['price'] = undefined;

/**
 * Stop Price
 * @member {Number} stopPrice
 */
EMSOrder.prototype['stopPrice'] = undefined;

/**
 * Strike Price
 * @member {Number} strikePrice
 */
EMSOrder.prototype['strikePrice'] = undefined;

/**
 * Currency
 * @member {String} currency
 */
EMSOrder.prototype['currency'] = undefined;

/**
 * Currency
 * @member {Boolean} isCovered
 */
EMSOrder.prototype['isCovered'] = undefined;

/**
 * Max Show
 * @member {Number} maxShow
 */
EMSOrder.prototype['maxShow'] = undefined;

/**
 * Max Floor
 * @member {Number} maxFloor
 */
EMSOrder.prototype['maxFloor'] = undefined;

/**
 * Previous close price
 * @member {Number} prevClosePrice
 */
EMSOrder.prototype['prevClosePrice'] = undefined;

/**
 * Settlement type
 * @member {String} settlementType
 */
EMSOrder.prototype['settlementType'] = undefined;

/**
 * Settlement date in YYYYMMDD format
 * @member {String} settlementDate
 */
EMSOrder.prototype['settlementDate'] = undefined;

/**
 * Handling instructions
 * @member {module:model/EMSOrder.HandlingInstructionsEnum} handlingInstructions
 */
EMSOrder.prototype['handlingInstructions'] = undefined;

/**
 * Execution instructions
 * @member {module:model/EMSOrder.ExecutionInstructionsEnum} executionInstructions
 */
EMSOrder.prototype['executionInstructions'] = undefined;

/**
 * Locate Required
 * @member {Boolean} locateRequired
 */
EMSOrder.prototype['locateRequired'] = undefined;

/**
 * Effective time in YYYYMMDD-HH:MM:SS format expressed in UTC
 * @member {String} effectiveTime
 */
EMSOrder.prototype['effectiveTime'] = undefined;

/**
 * Account
 * @member {String} account
 */
EMSOrder.prototype['account'] = undefined;

/**
 * @member {module:model/TimeInForce} timeInForce
 */
EMSOrder.prototype['timeInForce'] = undefined;

/**
 * Inbound Destination
 * @member {String} inboundDestination
 */
EMSOrder.prototype['inboundDestination'] = undefined;

/**
 * User defined fields
 * @member {Object.<String, String>} userDefinedFields
 */
EMSOrder.prototype['userDefinedFields'] = undefined;





/**
 * Allowed values for the <code>side</code> property.
 * @enum {String}
 * @readonly
 */
EMSOrder['SideEnum'] = {

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
EMSOrder['OrderTypeEnum'] = {

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


/**
 * Allowed values for the <code>handlingInstructions</code> property.
 * @enum {String}
 * @readonly
 */
EMSOrder['HandlingInstructionsEnum'] = {

    /**
     * value: "auto_ord_pvt"
     * @const
     */
    "auto_ord_pvt": "auto_ord_pvt",

    /**
     * value: "auto_ord_pub"
     * @const
     */
    "auto_ord_pub": "auto_ord_pub",

    /**
     * value: "best_execution"
     * @const
     */
    "best_execution": "best_execution"
};


/**
 * Allowed values for the <code>executionInstructions</code> property.
 * @enum {String}
 * @readonly
 */
EMSOrder['ExecutionInstructionsEnum'] = {

    /**
     * value: "not_held"
     * @const
     */
    "not_held": "not_held",

    /**
     * value: "work"
     * @const
     */
    "work": "work",

    /**
     * value: "go_along"
     * @const
     */
    "go_along": "go_along",

    /**
     * value: "over_the_day"
     * @const
     */
    "over_the_day": "over_the_day",

    /**
     * value: "held"
     * @const
     */
    "held": "held",

    /**
     * value: "participate_dont_initiate"
     * @const
     */
    "participate_dont_initiate": "participate_dont_initiate",

    /**
     * value: "strict_scale"
     * @const
     */
    "strict_scale": "strict_scale",

    /**
     * value: "try_to_scale"
     * @const
     */
    "try_to_scale": "try_to_scale",

    /**
     * value: "stay_on_bidside"
     * @const
     */
    "stay_on_bidside": "stay_on_bidside",

    /**
     * value: "stay_on_offerside"
     * @const
     */
    "stay_on_offerside": "stay_on_offerside",

    /**
     * value: "no_cross"
     * @const
     */
    "no_cross": "no_cross",

    /**
     * value: "ok_to_cross"
     * @const
     */
    "ok_to_cross": "ok_to_cross",

    /**
     * value: "call_first"
     * @const
     */
    "call_first": "call_first",

    /**
     * value: "percent_of_volume"
     * @const
     */
    "percent_of_volume": "percent_of_volume",

    /**
     * value: "do_not_increase"
     * @const
     */
    "do_not_increase": "do_not_increase",

    /**
     * value: "do_not_reduce"
     * @const
     */
    "do_not_reduce": "do_not_reduce",

    /**
     * value: "all_or_none"
     * @const
     */
    "all_or_none": "all_or_none",

    /**
     * value: "reinstate_on_system_failure"
     * @const
     */
    "reinstate_on_system_failure": "reinstate_on_system_failure",

    /**
     * value: "institutions_only"
     * @const
     */
    "institutions_only": "institutions_only",

    /**
     * value: "reinstate_on_trading_halt"
     * @const
     */
    "reinstate_on_trading_halt": "reinstate_on_trading_halt",

    /**
     * value: "cancel_on_trading_halt"
     * @const
     */
    "cancel_on_trading_halt": "cancel_on_trading_halt",

    /**
     * value: "last_peg"
     * @const
     */
    "last_peg": "last_peg",

    /**
     * value: "mid_price_peg"
     * @const
     */
    "mid_price_peg": "mid_price_peg",

    /**
     * value: "non_negotiable"
     * @const
     */
    "non_negotiable": "non_negotiable",

    /**
     * value: "opening_peg"
     * @const
     */
    "opening_peg": "opening_peg",

    /**
     * value: "market_peg"
     * @const
     */
    "market_peg": "market_peg",

    /**
     * value: "cancel_on_system_failure"
     * @const
     */
    "cancel_on_system_failure": "cancel_on_system_failure",

    /**
     * value: "primary_peg"
     * @const
     */
    "primary_peg": "primary_peg",

    /**
     * value: "suspend"
     * @const
     */
    "suspend": "suspend",

    /**
     * value: "fixed_peg_to_local_best_bid"
     * @const
     */
    "fixed_peg_to_local_best_bid": "fixed_peg_to_local_best_bid",

    /**
     * value: "customer_display_instruction"
     * @const
     */
    "customer_display_instruction": "customer_display_instruction",

    /**
     * value: "netting"
     * @const
     */
    "netting": "netting",

    /**
     * value: "peg_to_vwap"
     * @const
     */
    "peg_to_vwap": "peg_to_vwap",

    /**
     * value: "trade_along"
     * @const
     */
    "trade_along": "trade_along",

    /**
     * value: "try_to_stop"
     * @const
     */
    "try_to_stop": "try_to_stop",

    /**
     * value: "cancel_if_not_best"
     * @const
     */
    "cancel_if_not_best": "cancel_if_not_best",

    /**
     * value: "trailing_stop_peg"
     * @const
     */
    "trailing_stop_peg": "trailing_stop_peg",

    /**
     * value: "strict_limit"
     * @const
     */
    "strict_limit": "strict_limit",

    /**
     * value: "ignore_price_validity_checks"
     * @const
     */
    "ignore_price_validity_checks": "ignore_price_validity_checks",

    /**
     * value: "peg_to_limit_price"
     * @const
     */
    "peg_to_limit_price": "peg_to_limit_price",

    /**
     * value: "work_to_target_strategy"
     * @const
     */
    "work_to_target_strategy": "work_to_target_strategy",

    /**
     * value: "intermarket_sweep"
     * @const
     */
    "intermarket_sweep": "intermarket_sweep",

    /**
     * value: "external_routing_allowed"
     * @const
     */
    "external_routing_allowed": "external_routing_allowed",

    /**
     * value: "external_routing_not_allowed"
     * @const
     */
    "external_routing_not_allowed": "external_routing_not_allowed",

    /**
     * value: "imbalance_only"
     * @const
     */
    "imbalance_only": "imbalance_only",

    /**
     * value: "single_execution_requested_for_block_trade"
     * @const
     */
    "single_execution_requested_for_block_trade": "single_execution_requested_for_block_trade",

    /**
     * value: "best_execution"
     * @const
     */
    "best_execution": "best_execution"
};



export default EMSOrder;

