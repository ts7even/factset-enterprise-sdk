/*
 * FactSet Options API
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetOptions.models;

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
import java.math.BigDecimal;
import java.time.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetOptions.JSON;


/**
 * Underlying Volume response fields
 */
@ApiModel(description = "Underlying Volume response fields")
@JsonPropertyOrder({
  UnderlyingVolume.JSON_PROPERTY_DATE,
  UnderlyingVolume.JSON_PROPERTY_EXCHANGE,
  UnderlyingVolume.JSON_PROPERTY_FSYM_ID,
  UnderlyingVolume.JSON_PROPERTY_PUT_CALL_RATIO,
  UnderlyingVolume.JSON_PROPERTY_REQUEST_ID,
  UnderlyingVolume.JSON_PROPERTY_TOTAL_CALL_OPEN_INTEREST,
  UnderlyingVolume.JSON_PROPERTY_TOTAL_CALL_VOLUME,
  UnderlyingVolume.JSON_PROPERTY_TOTAL_PUT_CALL_OPEN_INTEREST,
  UnderlyingVolume.JSON_PROPERTY_TOTAL_PUT_CALL_VOLUME,
  UnderlyingVolume.JSON_PROPERTY_TOTAL_PUT_OPEN_INTEREST,
  UnderlyingVolume.JSON_PROPERTY_TOTAL_PUT_VOLUME
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class UnderlyingVolume implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DATE = "date";
  private LocalDate date;

  public static final String JSON_PROPERTY_EXCHANGE = "exchange";
  private String exchange;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_PUT_CALL_RATIO = "putCallRatio";
  private Double putCallRatio;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_TOTAL_CALL_OPEN_INTEREST = "totalCallOpenInterest";
  private BigDecimal totalCallOpenInterest;

  public static final String JSON_PROPERTY_TOTAL_CALL_VOLUME = "totalCallVolume";
  private Double totalCallVolume;

  public static final String JSON_PROPERTY_TOTAL_PUT_CALL_OPEN_INTEREST = "totalPutCallOpenInterest";
  private BigDecimal totalPutCallOpenInterest;

  public static final String JSON_PROPERTY_TOTAL_PUT_CALL_VOLUME = "totalPutCallVolume";
  private Double totalPutCallVolume;

  public static final String JSON_PROPERTY_TOTAL_PUT_OPEN_INTEREST = "totalPutOpenInterest";
  private BigDecimal totalPutOpenInterest;

  public static final String JSON_PROPERTY_TOTAL_PUT_VOLUME = "totalPutVolume";
  private Double totalPutVolume;

  public UnderlyingVolume() { 
  }

  public UnderlyingVolume date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * The date of data as of the YYYY-MM-DD format.
   * @return date
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Fri May 14 00:00:00 UTC 2021", value = "The date of data as of the YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getDate() {
    return date;
  }


  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDate(LocalDate date) {
    this.date = date;
  }


  public UnderlyingVolume exchange(String exchange) {
    this.exchange = exchange;
    return this;
  }

   /**
   * Option Exchange ISO. Visit [OA 14925](https://my.apps.factset.com/oa/pages/14925) for a list of Exchange ISOs.
   * @return exchange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USA", value = "Option Exchange ISO. Visit [OA 14925](https://my.apps.factset.com/oa/pages/14925) for a list of Exchange ISOs.")
  @JsonProperty(JSON_PROPERTY_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getExchange() {
    return exchange;
  }


  @JsonProperty(JSON_PROPERTY_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExchange(String exchange) {
    this.exchange = exchange;
  }


  public UnderlyingVolume fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * FactSet&#39;s Security Permanent Identifier for input security in XXXXXX-S format.
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "WWDPYB-S", value = "FactSet's Security Permanent Identifier for input security in XXXXXX-S format.")
  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymId() {
    return fsymId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymId(String fsymId) {
    this.fsymId = fsymId;
  }


  public UnderlyingVolume putCallRatio(Double putCallRatio) {
    this.putCallRatio = putCallRatio;
    return this;
  }

   /**
   * Put/Call Ratio (Open Interest)
   * @return putCallRatio
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1.0257621", value = "Put/Call Ratio (Open Interest)")
  @JsonProperty(JSON_PROPERTY_PUT_CALL_RATIO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getPutCallRatio() {
    return putCallRatio;
  }


  @JsonProperty(JSON_PROPERTY_PUT_CALL_RATIO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPutCallRatio(Double putCallRatio) {
    this.putCallRatio = putCallRatio;
  }


  public UnderlyingVolume requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * The requested identifier submitted in the query.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "TSLA", value = "The requested identifier submitted in the query.")
  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRequestId() {
    return requestId;
  }


  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequestId(String requestId) {
    this.requestId = requestId;
  }


  public UnderlyingVolume totalCallOpenInterest(BigDecimal totalCallOpenInterest) {
    this.totalCallOpenInterest = totalCallOpenInterest;
    return this;
  }

   /**
   * Total Call Open Interest
   * @return totalCallOpenInterest
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2753464", value = "Total Call Open Interest")
  @JsonProperty(JSON_PROPERTY_TOTAL_CALL_OPEN_INTEREST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getTotalCallOpenInterest() {
    return totalCallOpenInterest;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_CALL_OPEN_INTEREST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalCallOpenInterest(BigDecimal totalCallOpenInterest) {
    this.totalCallOpenInterest = totalCallOpenInterest;
  }


  public UnderlyingVolume totalCallVolume(Double totalCallVolume) {
    this.totalCallVolume = totalCallVolume;
    return this;
  }

   /**
   * Total Call Volume
   * @return totalCallVolume
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "946936", value = "Total Call Volume")
  @JsonProperty(JSON_PROPERTY_TOTAL_CALL_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getTotalCallVolume() {
    return totalCallVolume;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_CALL_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalCallVolume(Double totalCallVolume) {
    this.totalCallVolume = totalCallVolume;
  }


  public UnderlyingVolume totalPutCallOpenInterest(BigDecimal totalPutCallOpenInterest) {
    this.totalPutCallOpenInterest = totalPutCallOpenInterest;
    return this;
  }

   /**
   * Total Call/Put Open Interest
   * @return totalPutCallOpenInterest
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "5577863", value = "Total Call/Put Open Interest")
  @JsonProperty(JSON_PROPERTY_TOTAL_PUT_CALL_OPEN_INTEREST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getTotalPutCallOpenInterest() {
    return totalPutCallOpenInterest;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_PUT_CALL_OPEN_INTEREST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalPutCallOpenInterest(BigDecimal totalPutCallOpenInterest) {
    this.totalPutCallOpenInterest = totalPutCallOpenInterest;
  }


  public UnderlyingVolume totalPutCallVolume(Double totalPutCallVolume) {
    this.totalPutCallVolume = totalPutCallVolume;
    return this;
  }

   /**
   * Total Call/Put Volume
   * @return totalPutCallVolume
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1646616", value = "Total Call/Put Volume")
  @JsonProperty(JSON_PROPERTY_TOTAL_PUT_CALL_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getTotalPutCallVolume() {
    return totalPutCallVolume;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_PUT_CALL_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalPutCallVolume(Double totalPutCallVolume) {
    this.totalPutCallVolume = totalPutCallVolume;
  }


  public UnderlyingVolume totalPutOpenInterest(BigDecimal totalPutOpenInterest) {
    this.totalPutOpenInterest = totalPutOpenInterest;
    return this;
  }

   /**
   * Total Put Open Interest
   * @return totalPutOpenInterest
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2824399", value = "Total Put Open Interest")
  @JsonProperty(JSON_PROPERTY_TOTAL_PUT_OPEN_INTEREST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getTotalPutOpenInterest() {
    return totalPutOpenInterest;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_PUT_OPEN_INTEREST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalPutOpenInterest(BigDecimal totalPutOpenInterest) {
    this.totalPutOpenInterest = totalPutOpenInterest;
  }


  public UnderlyingVolume totalPutVolume(Double totalPutVolume) {
    this.totalPutVolume = totalPutVolume;
    return this;
  }

   /**
   * Total Put Volume
   * @return totalPutVolume
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "699680", value = "Total Put Volume")
  @JsonProperty(JSON_PROPERTY_TOTAL_PUT_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getTotalPutVolume() {
    return totalPutVolume;
  }


  @JsonProperty(JSON_PROPERTY_TOTAL_PUT_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTotalPutVolume(Double totalPutVolume) {
    this.totalPutVolume = totalPutVolume;
  }


  /**
   * Return true if this underlyingVolume object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UnderlyingVolume underlyingVolume = (UnderlyingVolume) o;
    return Objects.equals(this.date, underlyingVolume.date) &&
        Objects.equals(this.exchange, underlyingVolume.exchange) &&
        Objects.equals(this.fsymId, underlyingVolume.fsymId) &&
        Objects.equals(this.putCallRatio, underlyingVolume.putCallRatio) &&
        Objects.equals(this.requestId, underlyingVolume.requestId) &&
        Objects.equals(this.totalCallOpenInterest, underlyingVolume.totalCallOpenInterest) &&
        Objects.equals(this.totalCallVolume, underlyingVolume.totalCallVolume) &&
        Objects.equals(this.totalPutCallOpenInterest, underlyingVolume.totalPutCallOpenInterest) &&
        Objects.equals(this.totalPutCallVolume, underlyingVolume.totalPutCallVolume) &&
        Objects.equals(this.totalPutOpenInterest, underlyingVolume.totalPutOpenInterest) &&
        Objects.equals(this.totalPutVolume, underlyingVolume.totalPutVolume);
  }

  @Override
  public int hashCode() {
    return Objects.hash(date, exchange, fsymId, putCallRatio, requestId, totalCallOpenInterest, totalCallVolume, totalPutCallOpenInterest, totalPutCallVolume, totalPutOpenInterest, totalPutVolume);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UnderlyingVolume {\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    exchange: ").append(toIndentedString(exchange)).append("\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    putCallRatio: ").append(toIndentedString(putCallRatio)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    totalCallOpenInterest: ").append(toIndentedString(totalCallOpenInterest)).append("\n");
    sb.append("    totalCallVolume: ").append(toIndentedString(totalCallVolume)).append("\n");
    sb.append("    totalPutCallOpenInterest: ").append(toIndentedString(totalPutCallOpenInterest)).append("\n");
    sb.append("    totalPutCallVolume: ").append(toIndentedString(totalPutCallVolume)).append("\n");
    sb.append("    totalPutOpenInterest: ").append(toIndentedString(totalPutOpenInterest)).append("\n");
    sb.append("    totalPutVolume: ").append(toIndentedString(totalPutVolume)).append("\n");
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
