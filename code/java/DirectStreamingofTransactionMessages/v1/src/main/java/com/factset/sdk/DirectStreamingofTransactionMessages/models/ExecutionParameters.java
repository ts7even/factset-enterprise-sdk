/*
 * DSOTM API
 * Allow clients to send transactions data to FactSet
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.DirectStreamingofTransactionMessages.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.DirectStreamingofTransactionMessages.JSON;


/**
 * ExecutionParameters
 */
@JsonPropertyOrder({
  ExecutionParameters.JSON_PROPERTY_NET,
  ExecutionParameters.JSON_PROPERTY_GROSS,
  ExecutionParameters.JSON_PROPERTY_SETTLEMENTVALUE,
  ExecutionParameters.JSON_PROPERTY_SETTLEMENTDATE,
  ExecutionParameters.JSON_PROPERTY_SETTLEMENTCURRENCYISO,
  ExecutionParameters.JSON_PROPERTY_PORTFOLIO,
  ExecutionParameters.JSON_PROPERTY_TRANSACTIONID,
  ExecutionParameters.JSON_PROPERTY_SYMBOL,
  ExecutionParameters.JSON_PROPERTY_DESCRIPTION,
  ExecutionParameters.JSON_PROPERTY_TRADETYPE,
  ExecutionParameters.JSON_PROPERTY_STATUS,
  ExecutionParameters.JSON_PROPERTY_TRADEDATE,
  ExecutionParameters.JSON_PROPERTY_TRANSACTIONLEAVES,
  ExecutionParameters.JSON_PROPERTY_AMOUNT,
  ExecutionParameters.JSON_PROPERTY_CURRENCYISO,
  ExecutionParameters.JSON_PROPERTY_FOREIGNEXCHANGERATE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ExecutionParameters implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NET = "net";
  private Float net;

  public static final String JSON_PROPERTY_GROSS = "gross";
  private Float gross;

  public static final String JSON_PROPERTY_SETTLEMENTVALUE = "settlementvalue";
  private Float settlementvalue;

  public static final String JSON_PROPERTY_SETTLEMENTDATE = "settlementdate";
  private String settlementdate;

  public static final String JSON_PROPERTY_SETTLEMENTCURRENCYISO = "settlementcurrencyiso";
  private String settlementcurrencyiso;

  public static final String JSON_PROPERTY_PORTFOLIO = "portfolio";
  private String portfolio;

  public static final String JSON_PROPERTY_TRANSACTIONID = "transactionid";
  private String transactionid;

  public static final String JSON_PROPERTY_SYMBOL = "symbol";
  private String symbol;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_TRADETYPE = "tradetype";
  private String tradetype;

  public static final String JSON_PROPERTY_STATUS = "status";
  private String status;

  public static final String JSON_PROPERTY_TRADEDATE = "tradedate";
  private String tradedate;

  public static final String JSON_PROPERTY_TRANSACTIONLEAVES = "transactionleaves";
  private Float transactionleaves;

  public static final String JSON_PROPERTY_AMOUNT = "amount";
  private Float amount;

  public static final String JSON_PROPERTY_CURRENCYISO = "currencyiso";
  private String currencyiso;

  public static final String JSON_PROPERTY_FOREIGNEXCHANGERATE = "foreignexchangerate";
  private Float foreignexchangerate;

  public ExecutionParameters() { 
  }

  @JsonCreator
  public ExecutionParameters(
    @JsonProperty(value=JSON_PROPERTY_NET, required=true) Float net, 
    @JsonProperty(value=JSON_PROPERTY_GROSS, required=true) Float gross, 
    @JsonProperty(value=JSON_PROPERTY_SETTLEMENTVALUE, required=true) Float settlementvalue, 
    @JsonProperty(value=JSON_PROPERTY_SETTLEMENTDATE, required=true) String settlementdate, 
    @JsonProperty(value=JSON_PROPERTY_PORTFOLIO, required=true) String portfolio, 
    @JsonProperty(value=JSON_PROPERTY_TRANSACTIONID, required=true) String transactionid, 
    @JsonProperty(value=JSON_PROPERTY_SYMBOL, required=true) String symbol, 
    @JsonProperty(value=JSON_PROPERTY_TRADETYPE, required=true) String tradetype, 
    @JsonProperty(value=JSON_PROPERTY_STATUS, required=true) String status, 
    @JsonProperty(value=JSON_PROPERTY_TRADEDATE, required=true) String tradedate, 
    @JsonProperty(value=JSON_PROPERTY_AMOUNT, required=true) Float amount, 
    @JsonProperty(value=JSON_PROPERTY_CURRENCYISO, required=true) String currencyiso
  ) {
    this();
    this.net = net;
    this.gross = gross;
    this.settlementvalue = settlementvalue;
    this.settlementdate = settlementdate;
    this.portfolio = portfolio;
    this.transactionid = transactionid;
    this.symbol = symbol;
    this.tradetype = tradetype;
    this.status = status;
    this.tradedate = tradedate;
    this.amount = amount;
    this.currencyiso = currencyiso;
  }

  public ExecutionParameters net(Float net) {
    this.net = net;
    return this;
  }

   /**
   * Cash value of the transaction, net of brokerage costs.
   * @return net
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Cash value of the transaction, net of brokerage costs.")
  @JsonProperty(JSON_PROPERTY_NET)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Float getNet() {
    return net;
  }


  @JsonProperty(JSON_PROPERTY_NET)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setNet(Float net) {
    this.net = net;
  }


  public ExecutionParameters gross(Float gross) {
    this.gross = gross;
    return this;
  }

   /**
   * Cash value of the transaction, including brokerage costs
   * @return gross
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Cash value of the transaction, including brokerage costs")
  @JsonProperty(JSON_PROPERTY_GROSS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Float getGross() {
    return gross;
  }


  @JsonProperty(JSON_PROPERTY_GROSS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setGross(Float gross) {
    this.gross = gross;
  }


  public ExecutionParameters settlementvalue(Float settlementvalue) {
    this.settlementvalue = settlementvalue;
    return this;
  }

   /**
   * Cash value of the transaction, a value that has been multiplied by an applicable FX rates to convert the a transacti
   * @return settlementvalue
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Cash value of the transaction, a value that has been multiplied by an applicable FX rates to convert the a transacti")
  @JsonProperty(JSON_PROPERTY_SETTLEMENTVALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Float getSettlementvalue() {
    return settlementvalue;
  }


  @JsonProperty(JSON_PROPERTY_SETTLEMENTVALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSettlementvalue(Float settlementvalue) {
    this.settlementvalue = settlementvalue;
  }


  public ExecutionParameters settlementdate(String settlementdate) {
    this.settlementdate = settlementdate;
    return this;
  }

   /**
   * Settlement date in YYYYMMDD format
   * @return settlementdate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Settlement date in YYYYMMDD format")
  @JsonProperty(JSON_PROPERTY_SETTLEMENTDATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getSettlementdate() {
    return settlementdate;
  }


  @JsonProperty(JSON_PROPERTY_SETTLEMENTDATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSettlementdate(String settlementdate) {
    this.settlementdate = settlementdate;
  }


  public ExecutionParameters settlementcurrencyiso(String settlementcurrencyiso) {
    this.settlementcurrencyiso = settlementcurrencyiso;
    return this;
  }

   /**
   * Currency code for Settlement Value
   * @return settlementcurrencyiso
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Currency code for Settlement Value")
  @JsonProperty(JSON_PROPERTY_SETTLEMENTCURRENCYISO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSettlementcurrencyiso() {
    return settlementcurrencyiso;
  }


  @JsonProperty(JSON_PROPERTY_SETTLEMENTCURRENCYISO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSettlementcurrencyiso(String settlementcurrencyiso) {
    this.settlementcurrencyiso = settlementcurrencyiso;
  }


  public ExecutionParameters portfolio(String portfolio) {
    this.portfolio = portfolio;
    return this;
  }

   /**
   * Path of the portfolio (Ex: Client:/folder1/testing.ofdb)
   * @return portfolio
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Path of the portfolio (Ex: Client:/folder1/testing.ofdb)")
  @JsonProperty(JSON_PROPERTY_PORTFOLIO)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getPortfolio() {
    return portfolio;
  }


  @JsonProperty(JSON_PROPERTY_PORTFOLIO)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setPortfolio(String portfolio) {
    this.portfolio = portfolio;
  }


  public ExecutionParameters transactionid(String transactionid) {
    this.transactionid = transactionid;
    return this;
  }

   /**
   * Unique id for the transaction
   * @return transactionid
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Unique id for the transaction")
  @JsonProperty(JSON_PROPERTY_TRANSACTIONID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getTransactionid() {
    return transactionid;
  }


  @JsonProperty(JSON_PROPERTY_TRANSACTIONID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTransactionid(String transactionid) {
    this.transactionid = transactionid;
  }


  public ExecutionParameters symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Symbol corresponding to the traded instrument.
   * @return symbol
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Symbol corresponding to the traded instrument.")
  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getSymbol() {
    return symbol;
  }


  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }


  public ExecutionParameters description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Description")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(String description) {
    this.description = description;
  }


  public ExecutionParameters tradetype(String tradetype) {
    this.tradetype = tradetype;
    return this;
  }

   /**
   * Trade type could be any of the following values BL, BC, SL, SS.  which stands for Buy Long, Buy to cover, Sell Long and Sell Short respectively.
   * @return tradetype
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Trade type could be any of the following values BL, BC, SL, SS.  which stands for Buy Long, Buy to cover, Sell Long and Sell Short respectively.")
  @JsonProperty(JSON_PROPERTY_TRADETYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getTradetype() {
    return tradetype;
  }


  @JsonProperty(JSON_PROPERTY_TRADETYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTradetype(String tradetype) {
    this.tradetype = tradetype;
  }


  public ExecutionParameters status(String status) {
    this.status = status;
    return this;
  }

   /**
   * Status could be any of the following value: ACCT or CNCL.  which stands for Accounted and Cancelled respectively.
   * @return status
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Status could be any of the following value: ACCT or CNCL.  which stands for Accounted and Cancelled respectively.")
  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStatus(String status) {
    this.status = status;
  }


  public ExecutionParameters tradedate(String tradedate) {
    this.tradedate = tradedate;
    return this;
  }

   /**
   * Transaction date which is in the format YYYYMMDD
   * @return tradedate
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Transaction date which is in the format YYYYMMDD")
  @JsonProperty(JSON_PROPERTY_TRADEDATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getTradedate() {
    return tradedate;
  }


  @JsonProperty(JSON_PROPERTY_TRADEDATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTradedate(String tradedate) {
    this.tradedate = tradedate;
  }


  public ExecutionParameters transactionleaves(Float transactionleaves) {
    this.transactionleaves = transactionleaves;
    return this;
  }

   /**
   * Shares that have been ordered and not executed
   * @return transactionleaves
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Shares that have been ordered and not executed")
  @JsonProperty(JSON_PROPERTY_TRANSACTIONLEAVES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Float getTransactionleaves() {
    return transactionleaves;
  }


  @JsonProperty(JSON_PROPERTY_TRANSACTIONLEAVES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTransactionleaves(Float transactionleaves) {
    this.transactionleaves = transactionleaves;
  }


  public ExecutionParameters amount(Float amount) {
    this.amount = amount;
    return this;
  }

   /**
   * Quantity of the instrument traded.
   * @return amount
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Quantity of the instrument traded.")
  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Float getAmount() {
    return amount;
  }


  @JsonProperty(JSON_PROPERTY_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setAmount(Float amount) {
    this.amount = amount;
  }


  public ExecutionParameters currencyiso(String currencyiso) {
    this.currencyiso = currencyiso;
    return this;
  }

   /**
   * The currency code of cash valued fields, Net Amount and Gross Amount.
   * @return currencyiso
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "The currency code of cash valued fields, Net Amount and Gross Amount.")
  @JsonProperty(JSON_PROPERTY_CURRENCYISO)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getCurrencyiso() {
    return currencyiso;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCYISO)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCurrencyiso(String currencyiso) {
    this.currencyiso = currencyiso;
  }


  public ExecutionParameters foreignexchangerate(Float foreignexchangerate) {
    this.foreignexchangerate = foreignexchangerate;
    return this;
  }

   /**
   * FX rate that can be picked up by PA, multiplied with the cash valued fields, Net, Gross, to allow PA to show transactions in reporting currency.
   * @return foreignexchangerate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "FX rate that can be picked up by PA, multiplied with the cash valued fields, Net, Gross, to allow PA to show transactions in reporting currency.")
  @JsonProperty(JSON_PROPERTY_FOREIGNEXCHANGERATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Float getForeignexchangerate() {
    return foreignexchangerate;
  }


  @JsonProperty(JSON_PROPERTY_FOREIGNEXCHANGERATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setForeignexchangerate(Float foreignexchangerate) {
    this.foreignexchangerate = foreignexchangerate;
  }


  /**
   * Return true if this ExecutionParameters object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExecutionParameters executionParameters = (ExecutionParameters) o;
    return Objects.equals(this.net, executionParameters.net) &&
        Objects.equals(this.gross, executionParameters.gross) &&
        Objects.equals(this.settlementvalue, executionParameters.settlementvalue) &&
        Objects.equals(this.settlementdate, executionParameters.settlementdate) &&
        Objects.equals(this.settlementcurrencyiso, executionParameters.settlementcurrencyiso) &&
        Objects.equals(this.portfolio, executionParameters.portfolio) &&
        Objects.equals(this.transactionid, executionParameters.transactionid) &&
        Objects.equals(this.symbol, executionParameters.symbol) &&
        Objects.equals(this.description, executionParameters.description) &&
        Objects.equals(this.tradetype, executionParameters.tradetype) &&
        Objects.equals(this.status, executionParameters.status) &&
        Objects.equals(this.tradedate, executionParameters.tradedate) &&
        Objects.equals(this.transactionleaves, executionParameters.transactionleaves) &&
        Objects.equals(this.amount, executionParameters.amount) &&
        Objects.equals(this.currencyiso, executionParameters.currencyiso) &&
        Objects.equals(this.foreignexchangerate, executionParameters.foreignexchangerate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(net, gross, settlementvalue, settlementdate, settlementcurrencyiso, portfolio, transactionid, symbol, description, tradetype, status, tradedate, transactionleaves, amount, currencyiso, foreignexchangerate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExecutionParameters {\n");
    sb.append("    net: ").append(toIndentedString(net)).append("\n");
    sb.append("    gross: ").append(toIndentedString(gross)).append("\n");
    sb.append("    settlementvalue: ").append(toIndentedString(settlementvalue)).append("\n");
    sb.append("    settlementdate: ").append(toIndentedString(settlementdate)).append("\n");
    sb.append("    settlementcurrencyiso: ").append(toIndentedString(settlementcurrencyiso)).append("\n");
    sb.append("    portfolio: ").append(toIndentedString(portfolio)).append("\n");
    sb.append("    transactionid: ").append(toIndentedString(transactionid)).append("\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tradetype: ").append(toIndentedString(tradetype)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    tradedate: ").append(toIndentedString(tradedate)).append("\n");
    sb.append("    transactionleaves: ").append(toIndentedString(transactionleaves)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    currencyiso: ").append(toIndentedString(currencyiso)).append("\n");
    sb.append("    foreignexchangerate: ").append(toIndentedString(foreignexchangerate)).append("\n");
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
