/*
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.IRNCustomSymbols.models;

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
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.IRNCustomSymbols.JSON;


/**
 * InstrumentDto
 */
@JsonPropertyOrder({
  InstrumentDto.JSON_PROPERTY_SYMBOL,
  InstrumentDto.JSON_PROPERTY_TICKER_REGION,
  InstrumentDto.JSON_PROPERTY_TICKER_EXCHANGE,
  InstrumentDto.JSON_PROPERTY_SEDOL,
  InstrumentDto.JSON_PROPERTY_CUSIP,
  InstrumentDto.JSON_PROPERTY_ISIN,
  InstrumentDto.JSON_PROPERTY_INSTRUMENT_NAME,
  InstrumentDto.JSON_PROPERTY_IDENTIFIERS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InstrumentDto implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SYMBOL = "symbol";
  private JsonNullable<String> symbol = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_TICKER_REGION = "tickerRegion";
  private JsonNullable<String> tickerRegion = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_TICKER_EXCHANGE = "tickerExchange";
  private JsonNullable<String> tickerExchange = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_SEDOL = "sedol";
  private JsonNullable<String> sedol = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CUSIP = "cusip";
  private JsonNullable<String> cusip = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_ISIN = "isin";
  private JsonNullable<String> isin = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_INSTRUMENT_NAME = "instrumentName";
  private JsonNullable<String> instrumentName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_IDENTIFIERS = "identifiers";
  private JsonNullable<java.util.List<String>> identifiers = JsonNullable.<java.util.List<String>>undefined();

  public InstrumentDto() { 
  }

  public InstrumentDto symbol(String symbol) {
    this.symbol = JsonNullable.<String>of(symbol);
    return this;
  }

   /**
   * Get symbol
   * @return symbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getSymbol() {
        return symbol.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getSymbol_JsonNullable() {
    return symbol;
  }
  
  @JsonProperty(JSON_PROPERTY_SYMBOL)
  public void setSymbol_JsonNullable(JsonNullable<String> symbol) {
    this.symbol = symbol;
  }

  public void setSymbol(String symbol) {
    this.symbol = JsonNullable.<String>of(symbol);
  }


  public InstrumentDto tickerRegion(String tickerRegion) {
    this.tickerRegion = JsonNullable.<String>of(tickerRegion);
    return this;
  }

   /**
   * Get tickerRegion
   * @return tickerRegion
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getTickerRegion() {
        return tickerRegion.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TICKER_REGION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getTickerRegion_JsonNullable() {
    return tickerRegion;
  }
  
  @JsonProperty(JSON_PROPERTY_TICKER_REGION)
  public void setTickerRegion_JsonNullable(JsonNullable<String> tickerRegion) {
    this.tickerRegion = tickerRegion;
  }

  public void setTickerRegion(String tickerRegion) {
    this.tickerRegion = JsonNullable.<String>of(tickerRegion);
  }


  public InstrumentDto tickerExchange(String tickerExchange) {
    this.tickerExchange = JsonNullable.<String>of(tickerExchange);
    return this;
  }

   /**
   * Get tickerExchange
   * @return tickerExchange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getTickerExchange() {
        return tickerExchange.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TICKER_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getTickerExchange_JsonNullable() {
    return tickerExchange;
  }
  
  @JsonProperty(JSON_PROPERTY_TICKER_EXCHANGE)
  public void setTickerExchange_JsonNullable(JsonNullable<String> tickerExchange) {
    this.tickerExchange = tickerExchange;
  }

  public void setTickerExchange(String tickerExchange) {
    this.tickerExchange = JsonNullable.<String>of(tickerExchange);
  }


  public InstrumentDto sedol(String sedol) {
    this.sedol = JsonNullable.<String>of(sedol);
    return this;
  }

   /**
   * Get sedol
   * @return sedol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getSedol() {
        return sedol.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_SEDOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getSedol_JsonNullable() {
    return sedol;
  }
  
  @JsonProperty(JSON_PROPERTY_SEDOL)
  public void setSedol_JsonNullable(JsonNullable<String> sedol) {
    this.sedol = sedol;
  }

  public void setSedol(String sedol) {
    this.sedol = JsonNullable.<String>of(sedol);
  }


  public InstrumentDto cusip(String cusip) {
    this.cusip = JsonNullable.<String>of(cusip);
    return this;
  }

   /**
   * Get cusip
   * @return cusip
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getCusip() {
        return cusip.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CUSIP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getCusip_JsonNullable() {
    return cusip;
  }
  
  @JsonProperty(JSON_PROPERTY_CUSIP)
  public void setCusip_JsonNullable(JsonNullable<String> cusip) {
    this.cusip = cusip;
  }

  public void setCusip(String cusip) {
    this.cusip = JsonNullable.<String>of(cusip);
  }


  public InstrumentDto isin(String isin) {
    this.isin = JsonNullable.<String>of(isin);
    return this;
  }

   /**
   * Get isin
   * @return isin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getIsin() {
        return isin.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_ISIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getIsin_JsonNullable() {
    return isin;
  }
  
  @JsonProperty(JSON_PROPERTY_ISIN)
  public void setIsin_JsonNullable(JsonNullable<String> isin) {
    this.isin = isin;
  }

  public void setIsin(String isin) {
    this.isin = JsonNullable.<String>of(isin);
  }


  public InstrumentDto instrumentName(String instrumentName) {
    this.instrumentName = JsonNullable.<String>of(instrumentName);
    return this;
  }

   /**
   * Get instrumentName
   * @return instrumentName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getInstrumentName() {
        return instrumentName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_INSTRUMENT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getInstrumentName_JsonNullable() {
    return instrumentName;
  }
  
  @JsonProperty(JSON_PROPERTY_INSTRUMENT_NAME)
  public void setInstrumentName_JsonNullable(JsonNullable<String> instrumentName) {
    this.instrumentName = instrumentName;
  }

  public void setInstrumentName(String instrumentName) {
    this.instrumentName = JsonNullable.<String>of(instrumentName);
  }


  public InstrumentDto identifiers(java.util.List<String> identifiers) {
    this.identifiers = JsonNullable.<java.util.List<String>>of(identifiers);
    return this;
  }

  public InstrumentDto addIdentifiersItem(String identifiersItem) {
    if (this.identifiers == null || !this.identifiers.isPresent()) {
      this.identifiers = JsonNullable.<java.util.List<String>>of(new java.util.ArrayList<>());
    }
    try {
      this.identifiers.get().add(identifiersItem);
    } catch (java.util.NoSuchElementException e) {
      // this can never happen, as we make sure above that the value is present
    }
    return this;
  }

   /**
   * Get identifiers
   * @return identifiers
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public java.util.List<String> getIdentifiers() {
        return identifiers.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_IDENTIFIERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<java.util.List<String>> getIdentifiers_JsonNullable() {
    return identifiers;
  }
  
  @JsonProperty(JSON_PROPERTY_IDENTIFIERS)
  public void setIdentifiers_JsonNullable(JsonNullable<java.util.List<String>> identifiers) {
    this.identifiers = identifiers;
  }

  public void setIdentifiers(java.util.List<String> identifiers) {
    this.identifiers = JsonNullable.<java.util.List<String>>of(identifiers);
  }


  /**
   * Return true if this InstrumentDto object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InstrumentDto instrumentDto = (InstrumentDto) o;
    return equalsNullable(this.symbol, instrumentDto.symbol) &&
        equalsNullable(this.tickerRegion, instrumentDto.tickerRegion) &&
        equalsNullable(this.tickerExchange, instrumentDto.tickerExchange) &&
        equalsNullable(this.sedol, instrumentDto.sedol) &&
        equalsNullable(this.cusip, instrumentDto.cusip) &&
        equalsNullable(this.isin, instrumentDto.isin) &&
        equalsNullable(this.instrumentName, instrumentDto.instrumentName) &&
        equalsNullable(this.identifiers, instrumentDto.identifiers);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(symbol), hashCodeNullable(tickerRegion), hashCodeNullable(tickerExchange), hashCodeNullable(sedol), hashCodeNullable(cusip), hashCodeNullable(isin), hashCodeNullable(instrumentName), hashCodeNullable(identifiers));
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
    sb.append("class InstrumentDto {\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    tickerRegion: ").append(toIndentedString(tickerRegion)).append("\n");
    sb.append("    tickerExchange: ").append(toIndentedString(tickerExchange)).append("\n");
    sb.append("    sedol: ").append(toIndentedString(sedol)).append("\n");
    sb.append("    cusip: ").append(toIndentedString(cusip)).append("\n");
    sb.append("    isin: ").append(toIndentedString(isin)).append("\n");
    sb.append("    instrumentName: ").append(toIndentedString(instrumentName)).append("\n");
    sb.append("    identifiers: ").append(toIndentedString(identifiers)).append("\n");
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
