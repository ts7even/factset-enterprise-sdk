# factsettrading.EMSOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **String** | Unique id for the order | [optional] 
**instrument** | [**Instrument**](Instrument.md) |  | 
**side** | **String** | Side | 
**orderType** | **String** | Type of the order | 
**orderQuantity** | **Number** | Order quantity | [optional] 
**price** | **Number** | Order Price | [optional] 
**stopPrice** | **Number** | Stop Price | [optional] 
**strikePrice** | **Number** | Strike Price | [optional] 
**currency** | **String** | Currency | [optional] 
**isCovered** | **Boolean** | Currency | [optional] 
**maxShow** | **Number** | Max Show | [optional] 
**maxFloor** | **Number** | Max Floor | [optional] 
**prevClosePrice** | **Number** | Previous close price | [optional] 
**settlementType** | **String** | Settlement type | [optional] 
**settlementDate** | **String** | Settlement date in YYYYMMDD format | [optional] 
**handlingInstructions** | **String** | Handling instructions | [optional] 
**executionInstructions** | **String** | Execution instructions | [optional] 
**locateRequired** | **Boolean** | Locate Required | [optional] 
**effectiveTime** | **String** | Effective time in YYYYMMDD-HH:MM:SS format expressed in UTC | [optional] 
**account** | **String** | Account | [optional] 
**timeInForce** | [**TimeInForce**](TimeInForce.md) |  | [optional] 
**inboundDestination** | **String** | Inbound Destination | [optional] 
**userDefinedFields** | **{String: String}** | User defined fields | [optional] 



## Enum: SideEnum


* `buy` (value: `"buy"`)

* `sell` (value: `"sell"`)

* `sell_short` (value: `"sell_short"`)

* `sell_short_exempt` (value: `"sell_short_exempt"`)





## Enum: OrderTypeEnum


* `market` (value: `"market"`)

* `limit` (value: `"limit"`)

* `stop` (value: `"stop"`)

* `stop_limit` (value: `"stop_limit"`)

* `market_on_close` (value: `"market_on_close"`)

* `limit_or_better` (value: `"limit_or_better"`)





## Enum: HandlingInstructionsEnum


* `auto_ord_pvt` (value: `"auto_ord_pvt"`)

* `auto_ord_pub` (value: `"auto_ord_pub"`)

* `best_execution` (value: `"best_execution"`)





## Enum: ExecutionInstructionsEnum


* `not_held` (value: `"not_held"`)

* `work` (value: `"work"`)

* `go_along` (value: `"go_along"`)

* `over_the_day` (value: `"over_the_day"`)

* `held` (value: `"held"`)

* `participate_dont_initiate` (value: `"participate_dont_initiate"`)

* `strict_scale` (value: `"strict_scale"`)

* `try_to_scale` (value: `"try_to_scale"`)

* `stay_on_bidside` (value: `"stay_on_bidside"`)

* `stay_on_offerside` (value: `"stay_on_offerside"`)

* `no_cross` (value: `"no_cross"`)

* `ok_to_cross` (value: `"ok_to_cross"`)

* `call_first` (value: `"call_first"`)

* `percent_of_volume` (value: `"percent_of_volume"`)

* `do_not_increase` (value: `"do_not_increase"`)

* `do_not_reduce` (value: `"do_not_reduce"`)

* `all_or_none` (value: `"all_or_none"`)

* `reinstate_on_system_failure` (value: `"reinstate_on_system_failure"`)

* `institutions_only` (value: `"institutions_only"`)

* `reinstate_on_trading_halt` (value: `"reinstate_on_trading_halt"`)

* `cancel_on_trading_halt` (value: `"cancel_on_trading_halt"`)

* `last_peg` (value: `"last_peg"`)

* `mid_price_peg` (value: `"mid_price_peg"`)

* `non_negotiable` (value: `"non_negotiable"`)

* `opening_peg` (value: `"opening_peg"`)

* `market_peg` (value: `"market_peg"`)

* `cancel_on_system_failure` (value: `"cancel_on_system_failure"`)

* `primary_peg` (value: `"primary_peg"`)

* `suspend` (value: `"suspend"`)

* `fixed_peg_to_local_best_bid` (value: `"fixed_peg_to_local_best_bid"`)

* `customer_display_instruction` (value: `"customer_display_instruction"`)

* `netting` (value: `"netting"`)

* `peg_to_vwap` (value: `"peg_to_vwap"`)

* `trade_along` (value: `"trade_along"`)

* `try_to_stop` (value: `"try_to_stop"`)

* `cancel_if_not_best` (value: `"cancel_if_not_best"`)

* `trailing_stop_peg` (value: `"trailing_stop_peg"`)

* `strict_limit` (value: `"strict_limit"`)

* `ignore_price_validity_checks` (value: `"ignore_price_validity_checks"`)

* `peg_to_limit_price` (value: `"peg_to_limit_price"`)

* `work_to_target_strategy` (value: `"work_to_target_strategy"`)

* `intermarket_sweep` (value: `"intermarket_sweep"`)

* `external_routing_allowed` (value: `"external_routing_allowed"`)

* `external_routing_not_allowed` (value: `"external_routing_not_allowed"`)

* `imbalance_only` (value: `"imbalance_only"`)

* `single_execution_requested_for_block_trade` (value: `"single_execution_requested_for_block_trade"`)

* `best_execution` (value: `"best_execution"`)




