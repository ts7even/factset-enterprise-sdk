/*
 * EMS API
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetTrading.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FactSetTrading.models.Instrument;
import com.factset.sdk.FactSetTrading.models.TimeInForce;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetTrading.JSON;


/**
 * EMSOrder
 */
@JsonPropertyOrder({
  EMSOrder.JSON_PROPERTY_ORDER_ID,
  EMSOrder.JSON_PROPERTY_INSTRUMENT,
  EMSOrder.JSON_PROPERTY_SIDE,
  EMSOrder.JSON_PROPERTY_ORDER_TYPE,
  EMSOrder.JSON_PROPERTY_ORDER_QUANTITY,
  EMSOrder.JSON_PROPERTY_PRICE,
  EMSOrder.JSON_PROPERTY_STOP_PRICE,
  EMSOrder.JSON_PROPERTY_STRIKE_PRICE,
  EMSOrder.JSON_PROPERTY_CURRENCY,
  EMSOrder.JSON_PROPERTY_IS_COVERED,
  EMSOrder.JSON_PROPERTY_MAX_SHOW,
  EMSOrder.JSON_PROPERTY_MAX_FLOOR,
  EMSOrder.JSON_PROPERTY_PREV_CLOSE_PRICE,
  EMSOrder.JSON_PROPERTY_SETTLEMENT_TYPE,
  EMSOrder.JSON_PROPERTY_SETTLEMENT_DATE,
  EMSOrder.JSON_PROPERTY_HANDLING_INSTRUCTIONS,
  EMSOrder.JSON_PROPERTY_EXECUTION_INSTRUCTIONS,
  EMSOrder.JSON_PROPERTY_LOCATE_REQUIRED,
  EMSOrder.JSON_PROPERTY_EFFECTIVE_TIME,
  EMSOrder.JSON_PROPERTY_ACCOUNT,
  EMSOrder.JSON_PROPERTY_TIME_IN_FORCE,
  EMSOrder.JSON_PROPERTY_INBOUND_DESTINATION,
  EMSOrder.JSON_PROPERTY_USER_DEFINED_FIELDS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EMSOrder implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ORDER_ID = "orderId";
  private JsonNullable<String> orderId = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_INSTRUMENT = "instrument";
  private Instrument instrument;

  /**
   * Side
   */
  public enum SideEnum {
    BUY("buy"),
    
    SELL("sell"),
    
    SELL_SHORT("sell_short"),
    
    SELL_SHORT_EXEMPT("sell_short_exempt");

    private String value;

    SideEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static SideEnum fromValue(String value) {
      for (SideEnum b : SideEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_SIDE = "side";
  private SideEnum side;

  /**
   * Type of the order
   */
  public enum OrderTypeEnum {
    MARKET("market"),
    
    LIMIT("limit"),
    
    STOP("stop"),
    
    STOP_LIMIT("stop_limit"),
    
    MARKET_ON_CLOSE("market_on_close"),
    
    LIMIT_OR_BETTER("limit_or_better");

    private String value;

    OrderTypeEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static OrderTypeEnum fromValue(String value) {
      for (OrderTypeEnum b : OrderTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_ORDER_TYPE = "orderType";
  private OrderTypeEnum orderType;

  public static final String JSON_PROPERTY_ORDER_QUANTITY = "orderQuantity";
  private Double orderQuantity;

  public static final String JSON_PROPERTY_PRICE = "price";
  private JsonNullable<Double> price = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_STOP_PRICE = "stopPrice";
  private JsonNullable<Double> stopPrice = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_STRIKE_PRICE = "strikePrice";
  private JsonNullable<Double> strikePrice = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private JsonNullable<String> currency = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_IS_COVERED = "isCovered";
  private JsonNullable<Boolean> isCovered = JsonNullable.<Boolean>undefined();

  public static final String JSON_PROPERTY_MAX_SHOW = "maxShow";
  private JsonNullable<Double> maxShow = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_MAX_FLOOR = "maxFloor";
  private JsonNullable<Double> maxFloor = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_PREV_CLOSE_PRICE = "prevClosePrice";
  private JsonNullable<Double> prevClosePrice = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_SETTLEMENT_TYPE = "settlementType";
  private JsonNullable<String> settlementType = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_SETTLEMENT_DATE = "settlementDate";
  private JsonNullable<String> settlementDate = JsonNullable.<String>undefined();

  /**
   * Handling instructions
   */
  public enum HandlingInstructionsEnum {
    AUTO_ORD_PVT("auto_ord_pvt"),
    
    AUTO_ORD_PUB("auto_ord_pub"),
    
    BEST_EXECUTION("best_execution");

    private String value;

    HandlingInstructionsEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static HandlingInstructionsEnum fromValue(String value) {
      for (HandlingInstructionsEnum b : HandlingInstructionsEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return null;
    }
  }

  public static final String JSON_PROPERTY_HANDLING_INSTRUCTIONS = "handlingInstructions";
  private JsonNullable<HandlingInstructionsEnum> handlingInstructions = JsonNullable.<HandlingInstructionsEnum>undefined();

  /**
   * Execution instructions
   */
  public enum ExecutionInstructionsEnum {
    NOT_HELD("not_held"),
    
    WORK("work"),
    
    GO_ALONG("go_along"),
    
    OVER_THE_DAY("over_the_day"),
    
    HELD("held"),
    
    PARTICIPATE_DONT_INITIATE("participate_dont_initiate"),
    
    STRICT_SCALE("strict_scale"),
    
    TRY_TO_SCALE("try_to_scale"),
    
    STAY_ON_BIDSIDE("stay_on_bidside"),
    
    STAY_ON_OFFERSIDE("stay_on_offerside"),
    
    NO_CROSS("no_cross"),
    
    OK_TO_CROSS("ok_to_cross"),
    
    CALL_FIRST("call_first"),
    
    PERCENT_OF_VOLUME("percent_of_volume"),
    
    DO_NOT_INCREASE("do_not_increase"),
    
    DO_NOT_REDUCE("do_not_reduce"),
    
    ALL_OR_NONE("all_or_none"),
    
    REINSTATE_ON_SYSTEM_FAILURE("reinstate_on_system_failure"),
    
    INSTITUTIONS_ONLY("institutions_only"),
    
    REINSTATE_ON_TRADING_HALT("reinstate_on_trading_halt"),
    
    CANCEL_ON_TRADING_HALT("cancel_on_trading_halt"),
    
    LAST_PEG("last_peg"),
    
    MID_PRICE_PEG("mid_price_peg"),
    
    NON_NEGOTIABLE("non_negotiable"),
    
    OPENING_PEG("opening_peg"),
    
    MARKET_PEG("market_peg"),
    
    CANCEL_ON_SYSTEM_FAILURE("cancel_on_system_failure"),
    
    PRIMARY_PEG("primary_peg"),
    
    SUSPEND("suspend"),
    
    FIXED_PEG_TO_LOCAL_BEST_BID("fixed_peg_to_local_best_bid"),
    
    CUSTOMER_DISPLAY_INSTRUCTION("customer_display_instruction"),
    
    NETTING("netting"),
    
    PEG_TO_VWAP("peg_to_vwap"),
    
    TRADE_ALONG("trade_along"),
    
    TRY_TO_STOP("try_to_stop"),
    
    CANCEL_IF_NOT_BEST("cancel_if_not_best"),
    
    TRAILING_STOP_PEG("trailing_stop_peg"),
    
    STRICT_LIMIT("strict_limit"),
    
    IGNORE_PRICE_VALIDITY_CHECKS("ignore_price_validity_checks"),
    
    PEG_TO_LIMIT_PRICE("peg_to_limit_price"),
    
    WORK_TO_TARGET_STRATEGY("work_to_target_strategy"),
    
    INTERMARKET_SWEEP("intermarket_sweep"),
    
    EXTERNAL_ROUTING_ALLOWED("external_routing_allowed"),
    
    EXTERNAL_ROUTING_NOT_ALLOWED("external_routing_not_allowed"),
    
    IMBALANCE_ONLY("imbalance_only"),
    
    SINGLE_EXECUTION_REQUESTED_FOR_BLOCK_TRADE("single_execution_requested_for_block_trade"),
    
    BEST_EXECUTION("best_execution");

    private String value;

    ExecutionInstructionsEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static ExecutionInstructionsEnum fromValue(String value) {
      for (ExecutionInstructionsEnum b : ExecutionInstructionsEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return null;
    }
  }

  public static final String JSON_PROPERTY_EXECUTION_INSTRUCTIONS = "executionInstructions";
  private JsonNullable<ExecutionInstructionsEnum> executionInstructions = JsonNullable.<ExecutionInstructionsEnum>undefined();

  public static final String JSON_PROPERTY_LOCATE_REQUIRED = "locateRequired";
  private JsonNullable<Boolean> locateRequired = JsonNullable.<Boolean>undefined();

  public static final String JSON_PROPERTY_EFFECTIVE_TIME = "effectiveTime";
  private JsonNullable<String> effectiveTime = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_ACCOUNT = "account";
  private JsonNullable<String> account = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_TIME_IN_FORCE = "timeInForce";
  private TimeInForce timeInForce;

  public static final String JSON_PROPERTY_INBOUND_DESTINATION = "inboundDestination";
  private JsonNullable<String> inboundDestination = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_USER_DEFINED_FIELDS = "userDefinedFields";
  private JsonNullable<java.util.Map<String, String>> userDefinedFields = JsonNullable.<java.util.Map<String, String>>undefined();

  public EMSOrder() { 
  }

  @JsonCreator
  public EMSOrder(
    @JsonProperty(value=JSON_PROPERTY_INSTRUMENT, required=true) Instrument instrument, 
    @JsonProperty(value=JSON_PROPERTY_SIDE, required=true) SideEnum side, 
    @JsonProperty(value=JSON_PROPERTY_ORDER_TYPE, required=true) OrderTypeEnum orderType
  ) {
    this();
    this.instrument = instrument;
    this.side = side;
    this.orderType = orderType;
  }

  public EMSOrder orderId(String orderId) {
    this.orderId = JsonNullable.<String>of(orderId);
    return this;
  }

   /**
   * Unique id for the order
   * @return orderId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "12322123", value = "Unique id for the order")
  @JsonIgnore

  public String getOrderId() {
        return orderId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_ORDER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getOrderId_JsonNullable() {
    return orderId;
  }
  
  @JsonProperty(JSON_PROPERTY_ORDER_ID)
  public void setOrderId_JsonNullable(JsonNullable<String> orderId) {
    this.orderId = orderId;
  }

  public void setOrderId(String orderId) {
    this.orderId = JsonNullable.<String>of(orderId);
  }


  public EMSOrder instrument(Instrument instrument) {
    this.instrument = instrument;
    return this;
  }

   /**
   * Get instrument
   * @return instrument
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_INSTRUMENT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Instrument getInstrument() {
    return instrument;
  }


  @JsonProperty(JSON_PROPERTY_INSTRUMENT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setInstrument(Instrument instrument) {
    this.instrument = instrument;
  }


  public EMSOrder side(SideEnum side) {
    this.side = side;
    return this;
  }

   /**
   * Side
   * @return side
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "buy", required = true, value = "Side")
  @JsonProperty(JSON_PROPERTY_SIDE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public SideEnum getSide() {
    return side;
  }


  @JsonProperty(JSON_PROPERTY_SIDE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSide(SideEnum side) {
    this.side = side;
  }


  public EMSOrder orderType(OrderTypeEnum orderType) {
    this.orderType = orderType;
    return this;
  }

   /**
   * Type of the order
   * @return orderType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "market", required = true, value = "Type of the order")
  @JsonProperty(JSON_PROPERTY_ORDER_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public OrderTypeEnum getOrderType() {
    return orderType;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOrderType(OrderTypeEnum orderType) {
    this.orderType = orderType;
  }


  public EMSOrder orderQuantity(Double orderQuantity) {
    this.orderQuantity = orderQuantity;
    return this;
  }

   /**
   * Order quantity
   * @return orderQuantity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "350", value = "Order quantity")
  @JsonProperty(JSON_PROPERTY_ORDER_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getOrderQuantity() {
    return orderQuantity;
  }


  @JsonProperty(JSON_PROPERTY_ORDER_QUANTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOrderQuantity(Double orderQuantity) {
    this.orderQuantity = orderQuantity;
  }


  public EMSOrder price(Double price) {
    this.price = JsonNullable.<Double>of(price);
    return this;
  }

   /**
   * Order Price
   * @return price
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "800", value = "Order Price")
  @JsonIgnore

  public Double getPrice() {
        return price.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getPrice_JsonNullable() {
    return price;
  }
  
  @JsonProperty(JSON_PROPERTY_PRICE)
  public void setPrice_JsonNullable(JsonNullable<Double> price) {
    this.price = price;
  }

  public void setPrice(Double price) {
    this.price = JsonNullable.<Double>of(price);
  }


  public EMSOrder stopPrice(Double stopPrice) {
    this.stopPrice = JsonNullable.<Double>of(stopPrice);
    return this;
  }

   /**
   * Stop Price
   * @return stopPrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "800", value = "Stop Price")
  @JsonIgnore

  public Double getStopPrice() {
        return stopPrice.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_STOP_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getStopPrice_JsonNullable() {
    return stopPrice;
  }
  
  @JsonProperty(JSON_PROPERTY_STOP_PRICE)
  public void setStopPrice_JsonNullable(JsonNullable<Double> stopPrice) {
    this.stopPrice = stopPrice;
  }

  public void setStopPrice(Double stopPrice) {
    this.stopPrice = JsonNullable.<Double>of(stopPrice);
  }


  public EMSOrder strikePrice(Double strikePrice) {
    this.strikePrice = JsonNullable.<Double>of(strikePrice);
    return this;
  }

   /**
   * Strike Price
   * @return strikePrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "400", value = "Strike Price")
  @JsonIgnore

  public Double getStrikePrice() {
        return strikePrice.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_STRIKE_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getStrikePrice_JsonNullable() {
    return strikePrice;
  }
  
  @JsonProperty(JSON_PROPERTY_STRIKE_PRICE)
  public void setStrikePrice_JsonNullable(JsonNullable<Double> strikePrice) {
    this.strikePrice = strikePrice;
  }

  public void setStrikePrice(Double strikePrice) {
    this.strikePrice = JsonNullable.<Double>of(strikePrice);
  }


  public EMSOrder currency(String currency) {
    this.currency = JsonNullable.<String>of(currency);
    return this;
  }

   /**
   * Currency
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Currency")
  @JsonIgnore

  public String getCurrency() {
        return currency.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getCurrency_JsonNullable() {
    return currency;
  }
  
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  public void setCurrency_JsonNullable(JsonNullable<String> currency) {
    this.currency = currency;
  }

  public void setCurrency(String currency) {
    this.currency = JsonNullable.<String>of(currency);
  }


  public EMSOrder isCovered(Boolean isCovered) {
    this.isCovered = JsonNullable.<Boolean>of(isCovered);
    return this;
  }

   /**
   * Currency
   * @return isCovered
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "false", value = "Currency")
  @JsonIgnore

  public Boolean getIsCovered() {
        return isCovered.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_IS_COVERED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Boolean> getIsCovered_JsonNullable() {
    return isCovered;
  }
  
  @JsonProperty(JSON_PROPERTY_IS_COVERED)
  public void setIsCovered_JsonNullable(JsonNullable<Boolean> isCovered) {
    this.isCovered = isCovered;
  }

  public void setIsCovered(Boolean isCovered) {
    this.isCovered = JsonNullable.<Boolean>of(isCovered);
  }


  public EMSOrder maxShow(Double maxShow) {
    this.maxShow = JsonNullable.<Double>of(maxShow);
    return this;
  }

   /**
   * Max Show
   * @return maxShow
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "100", value = "Max Show")
  @JsonIgnore

  public Double getMaxShow() {
        return maxShow.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MAX_SHOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getMaxShow_JsonNullable() {
    return maxShow;
  }
  
  @JsonProperty(JSON_PROPERTY_MAX_SHOW)
  public void setMaxShow_JsonNullable(JsonNullable<Double> maxShow) {
    this.maxShow = maxShow;
  }

  public void setMaxShow(Double maxShow) {
    this.maxShow = JsonNullable.<Double>of(maxShow);
  }


  public EMSOrder maxFloor(Double maxFloor) {
    this.maxFloor = JsonNullable.<Double>of(maxFloor);
    return this;
  }

   /**
   * Max Floor
   * @return maxFloor
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "100", value = "Max Floor")
  @JsonIgnore

  public Double getMaxFloor() {
        return maxFloor.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MAX_FLOOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getMaxFloor_JsonNullable() {
    return maxFloor;
  }
  
  @JsonProperty(JSON_PROPERTY_MAX_FLOOR)
  public void setMaxFloor_JsonNullable(JsonNullable<Double> maxFloor) {
    this.maxFloor = maxFloor;
  }

  public void setMaxFloor(Double maxFloor) {
    this.maxFloor = JsonNullable.<Double>of(maxFloor);
  }


  public EMSOrder prevClosePrice(Double prevClosePrice) {
    this.prevClosePrice = JsonNullable.<Double>of(prevClosePrice);
    return this;
  }

   /**
   * Previous close price
   * @return prevClosePrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "100", value = "Previous close price")
  @JsonIgnore

  public Double getPrevClosePrice() {
        return prevClosePrice.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PREV_CLOSE_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getPrevClosePrice_JsonNullable() {
    return prevClosePrice;
  }
  
  @JsonProperty(JSON_PROPERTY_PREV_CLOSE_PRICE)
  public void setPrevClosePrice_JsonNullable(JsonNullable<Double> prevClosePrice) {
    this.prevClosePrice = prevClosePrice;
  }

  public void setPrevClosePrice(Double prevClosePrice) {
    this.prevClosePrice = JsonNullable.<Double>of(prevClosePrice);
  }


  public EMSOrder settlementType(String settlementType) {
    this.settlementType = JsonNullable.<String>of(settlementType);
    return this;
  }

   /**
   * Settlement type
   * @return settlementType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "regular", value = "Settlement type")
  @JsonIgnore

  public String getSettlementType() {
        return settlementType.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_SETTLEMENT_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getSettlementType_JsonNullable() {
    return settlementType;
  }
  
  @JsonProperty(JSON_PROPERTY_SETTLEMENT_TYPE)
  public void setSettlementType_JsonNullable(JsonNullable<String> settlementType) {
    this.settlementType = settlementType;
  }

  public void setSettlementType(String settlementType) {
    this.settlementType = JsonNullable.<String>of(settlementType);
  }


  public EMSOrder settlementDate(String settlementDate) {
    this.settlementDate = JsonNullable.<String>of(settlementDate);
    return this;
  }

   /**
   * Settlement date in YYYYMMDD format
   * @return settlementDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "20210622", value = "Settlement date in YYYYMMDD format")
  @JsonIgnore

  public String getSettlementDate() {
        return settlementDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_SETTLEMENT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getSettlementDate_JsonNullable() {
    return settlementDate;
  }
  
  @JsonProperty(JSON_PROPERTY_SETTLEMENT_DATE)
  public void setSettlementDate_JsonNullable(JsonNullable<String> settlementDate) {
    this.settlementDate = settlementDate;
  }

  public void setSettlementDate(String settlementDate) {
    this.settlementDate = JsonNullable.<String>of(settlementDate);
  }


  public EMSOrder handlingInstructions(HandlingInstructionsEnum handlingInstructions) {
    this.handlingInstructions = JsonNullable.<HandlingInstructionsEnum>of(handlingInstructions);
    return this;
  }

   /**
   * Handling instructions
   * @return handlingInstructions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "auto_ord_pub", value = "Handling instructions")
  @JsonIgnore

  public HandlingInstructionsEnum getHandlingInstructions() {
        return handlingInstructions.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_HANDLING_INSTRUCTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<HandlingInstructionsEnum> getHandlingInstructions_JsonNullable() {
    return handlingInstructions;
  }
  
  @JsonProperty(JSON_PROPERTY_HANDLING_INSTRUCTIONS)
  public void setHandlingInstructions_JsonNullable(JsonNullable<HandlingInstructionsEnum> handlingInstructions) {
    this.handlingInstructions = handlingInstructions;
  }

  public void setHandlingInstructions(HandlingInstructionsEnum handlingInstructions) {
    this.handlingInstructions = JsonNullable.<HandlingInstructionsEnum>of(handlingInstructions);
  }


  public EMSOrder executionInstructions(ExecutionInstructionsEnum executionInstructions) {
    this.executionInstructions = JsonNullable.<ExecutionInstructionsEnum>of(executionInstructions);
    return this;
  }

   /**
   * Execution instructions
   * @return executionInstructions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "not_held", value = "Execution instructions")
  @JsonIgnore

  public ExecutionInstructionsEnum getExecutionInstructions() {
        return executionInstructions.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_EXECUTION_INSTRUCTIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<ExecutionInstructionsEnum> getExecutionInstructions_JsonNullable() {
    return executionInstructions;
  }
  
  @JsonProperty(JSON_PROPERTY_EXECUTION_INSTRUCTIONS)
  public void setExecutionInstructions_JsonNullable(JsonNullable<ExecutionInstructionsEnum> executionInstructions) {
    this.executionInstructions = executionInstructions;
  }

  public void setExecutionInstructions(ExecutionInstructionsEnum executionInstructions) {
    this.executionInstructions = JsonNullable.<ExecutionInstructionsEnum>of(executionInstructions);
  }


  public EMSOrder locateRequired(Boolean locateRequired) {
    this.locateRequired = JsonNullable.<Boolean>of(locateRequired);
    return this;
  }

   /**
   * Locate Required
   * @return locateRequired
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "false", value = "Locate Required")
  @JsonIgnore

  public Boolean getLocateRequired() {
        return locateRequired.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_LOCATE_REQUIRED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Boolean> getLocateRequired_JsonNullable() {
    return locateRequired;
  }
  
  @JsonProperty(JSON_PROPERTY_LOCATE_REQUIRED)
  public void setLocateRequired_JsonNullable(JsonNullable<Boolean> locateRequired) {
    this.locateRequired = locateRequired;
  }

  public void setLocateRequired(Boolean locateRequired) {
    this.locateRequired = JsonNullable.<Boolean>of(locateRequired);
  }


  public EMSOrder effectiveTime(String effectiveTime) {
    this.effectiveTime = JsonNullable.<String>of(effectiveTime);
    return this;
  }

   /**
   * Effective time in YYYYMMDD-HH:MM:SS format expressed in UTC
   * @return effectiveTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "20210622-12:15:30", value = "Effective time in YYYYMMDD-HH:MM:SS format expressed in UTC")
  @JsonIgnore

  public String getEffectiveTime() {
        return effectiveTime.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_EFFECTIVE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getEffectiveTime_JsonNullable() {
    return effectiveTime;
  }
  
  @JsonProperty(JSON_PROPERTY_EFFECTIVE_TIME)
  public void setEffectiveTime_JsonNullable(JsonNullable<String> effectiveTime) {
    this.effectiveTime = effectiveTime;
  }

  public void setEffectiveTime(String effectiveTime) {
    this.effectiveTime = JsonNullable.<String>of(effectiveTime);
  }


  public EMSOrder account(String account) {
    this.account = JsonNullable.<String>of(account);
    return this;
  }

   /**
   * Account
   * @return account
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Test.ACCT", value = "Account")
  @JsonIgnore

  public String getAccount() {
        return account.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_ACCOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getAccount_JsonNullable() {
    return account;
  }
  
  @JsonProperty(JSON_PROPERTY_ACCOUNT)
  public void setAccount_JsonNullable(JsonNullable<String> account) {
    this.account = account;
  }

  public void setAccount(String account) {
    this.account = JsonNullable.<String>of(account);
  }


  public EMSOrder timeInForce(TimeInForce timeInForce) {
    this.timeInForce = timeInForce;
    return this;
  }

   /**
   * Get timeInForce
   * @return timeInForce
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TIME_IN_FORCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public TimeInForce getTimeInForce() {
    return timeInForce;
  }


  @JsonProperty(JSON_PROPERTY_TIME_IN_FORCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTimeInForce(TimeInForce timeInForce) {
    this.timeInForce = timeInForce;
  }


  public EMSOrder inboundDestination(String inboundDestination) {
    this.inboundDestination = JsonNullable.<String>of(inboundDestination);
    return this;
  }

   /**
   * Inbound Destination
   * @return inboundDestination
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Inbound Destination")
  @JsonIgnore

  public String getInboundDestination() {
        return inboundDestination.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_INBOUND_DESTINATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getInboundDestination_JsonNullable() {
    return inboundDestination;
  }
  
  @JsonProperty(JSON_PROPERTY_INBOUND_DESTINATION)
  public void setInboundDestination_JsonNullable(JsonNullable<String> inboundDestination) {
    this.inboundDestination = inboundDestination;
  }

  public void setInboundDestination(String inboundDestination) {
    this.inboundDestination = JsonNullable.<String>of(inboundDestination);
  }


  public EMSOrder userDefinedFields(java.util.Map<String, String> userDefinedFields) {
    this.userDefinedFields = JsonNullable.<java.util.Map<String, String>>of(userDefinedFields);
    return this;
  }

  public EMSOrder putUserDefinedFieldsItem(String key, String userDefinedFieldsItem) {
    if (this.userDefinedFields == null || !this.userDefinedFields.isPresent()) {
      this.userDefinedFields = JsonNullable.<java.util.Map<String, String>>of(new java.util.HashMap<>());
    }
    try {
      this.userDefinedFields.get().put(key, userDefinedFieldsItem);
    } catch (java.util.NoSuchElementException e) {
      // this can never happen, as we make sure above that the value is present
    }
    return this;
  }

   /**
   * User defined fields
   * @return userDefinedFields
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "User defined fields")
  @JsonIgnore

  public java.util.Map<String, String> getUserDefinedFields() {
        return userDefinedFields.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_USER_DEFINED_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<java.util.Map<String, String>> getUserDefinedFields_JsonNullable() {
    return userDefinedFields;
  }
  
  @JsonProperty(JSON_PROPERTY_USER_DEFINED_FIELDS)
  public void setUserDefinedFields_JsonNullable(JsonNullable<java.util.Map<String, String>> userDefinedFields) {
    this.userDefinedFields = userDefinedFields;
  }

  public void setUserDefinedFields(java.util.Map<String, String> userDefinedFields) {
    this.userDefinedFields = JsonNullable.<java.util.Map<String, String>>of(userDefinedFields);
  }


  /**
   * Return true if this EMSOrder object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EMSOrder emSOrder = (EMSOrder) o;
    return equalsNullable(this.orderId, emSOrder.orderId) &&
        Objects.equals(this.instrument, emSOrder.instrument) &&
        Objects.equals(this.side, emSOrder.side) &&
        Objects.equals(this.orderType, emSOrder.orderType) &&
        Objects.equals(this.orderQuantity, emSOrder.orderQuantity) &&
        equalsNullable(this.price, emSOrder.price) &&
        equalsNullable(this.stopPrice, emSOrder.stopPrice) &&
        equalsNullable(this.strikePrice, emSOrder.strikePrice) &&
        equalsNullable(this.currency, emSOrder.currency) &&
        equalsNullable(this.isCovered, emSOrder.isCovered) &&
        equalsNullable(this.maxShow, emSOrder.maxShow) &&
        equalsNullable(this.maxFloor, emSOrder.maxFloor) &&
        equalsNullable(this.prevClosePrice, emSOrder.prevClosePrice) &&
        equalsNullable(this.settlementType, emSOrder.settlementType) &&
        equalsNullable(this.settlementDate, emSOrder.settlementDate) &&
        equalsNullable(this.handlingInstructions, emSOrder.handlingInstructions) &&
        equalsNullable(this.executionInstructions, emSOrder.executionInstructions) &&
        equalsNullable(this.locateRequired, emSOrder.locateRequired) &&
        equalsNullable(this.effectiveTime, emSOrder.effectiveTime) &&
        equalsNullable(this.account, emSOrder.account) &&
        Objects.equals(this.timeInForce, emSOrder.timeInForce) &&
        equalsNullable(this.inboundDestination, emSOrder.inboundDestination) &&
        equalsNullable(this.userDefinedFields, emSOrder.userDefinedFields);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(orderId), instrument, side, orderType, orderQuantity, hashCodeNullable(price), hashCodeNullable(stopPrice), hashCodeNullable(strikePrice), hashCodeNullable(currency), hashCodeNullable(isCovered), hashCodeNullable(maxShow), hashCodeNullable(maxFloor), hashCodeNullable(prevClosePrice), hashCodeNullable(settlementType), hashCodeNullable(settlementDate), hashCodeNullable(handlingInstructions), hashCodeNullable(executionInstructions), hashCodeNullable(locateRequired), hashCodeNullable(effectiveTime), hashCodeNullable(account), timeInForce, hashCodeNullable(inboundDestination), hashCodeNullable(userDefinedFields));
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EMSOrder {\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    instrument: ").append(toIndentedString(instrument)).append("\n");
    sb.append("    side: ").append(toIndentedString(side)).append("\n");
    sb.append("    orderType: ").append(toIndentedString(orderType)).append("\n");
    sb.append("    orderQuantity: ").append(toIndentedString(orderQuantity)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    stopPrice: ").append(toIndentedString(stopPrice)).append("\n");
    sb.append("    strikePrice: ").append(toIndentedString(strikePrice)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    isCovered: ").append(toIndentedString(isCovered)).append("\n");
    sb.append("    maxShow: ").append(toIndentedString(maxShow)).append("\n");
    sb.append("    maxFloor: ").append(toIndentedString(maxFloor)).append("\n");
    sb.append("    prevClosePrice: ").append(toIndentedString(prevClosePrice)).append("\n");
    sb.append("    settlementType: ").append(toIndentedString(settlementType)).append("\n");
    sb.append("    settlementDate: ").append(toIndentedString(settlementDate)).append("\n");
    sb.append("    handlingInstructions: ").append(toIndentedString(handlingInstructions)).append("\n");
    sb.append("    executionInstructions: ").append(toIndentedString(executionInstructions)).append("\n");
    sb.append("    locateRequired: ").append(toIndentedString(locateRequired)).append("\n");
    sb.append("    effectiveTime: ").append(toIndentedString(effectiveTime)).append("\n");
    sb.append("    account: ").append(toIndentedString(account)).append("\n");
    sb.append("    timeInForce: ").append(toIndentedString(timeInForce)).append("\n");
    sb.append("    inboundDestination: ").append(toIndentedString(inboundDestination)).append("\n");
    sb.append("    userDefinedFields: ").append(toIndentedString(userDefinedFields)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

