/*
 * Quotes API For Digital Portals
 * The quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the Time Series API for Digital Portals for direct access to price histories, and the News API for Digital Portals for searching and fetching related news.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20072DataHigh;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20072DataLow;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20072DataPerformance;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20073Status;
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
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * InlineResponse20077Data
 */
@JsonPropertyOrder({
  InlineResponse20077Data.JSON_PROPERTY_ID,
  InlineResponse20077Data.JSON_PROPERTY_REFERENCE_DATE,
  InlineResponse20077Data.JSON_PROPERTY_PERFORMANCE,
  InlineResponse20077Data.JSON_PROPERTY_HIGH,
  InlineResponse20077Data.JSON_PROPERTY_LOW,
  InlineResponse20077Data.JSON_PROPERTY_VOLATILITY,
  InlineResponse20077Data.JSON_PROPERTY_STATUS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20077Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_REFERENCE_DATE = "referenceDate";
  private LocalDate referenceDate;

  public static final String JSON_PROPERTY_PERFORMANCE = "performance";
  private InlineResponse20072DataPerformance performance;

  public static final String JSON_PROPERTY_HIGH = "high";
  private InlineResponse20072DataHigh high;

  public static final String JSON_PROPERTY_LOW = "low";
  private InlineResponse20072DataLow low;

  public static final String JSON_PROPERTY_VOLATILITY = "volatility";
  private BigDecimal volatility;

  public static final String JSON_PROPERTY_STATUS = "status";
  private InlineResponse20073Status status;

  public InlineResponse20077Data() { 
  }

  public InlineResponse20077Data id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Identifier of the notation.
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the notation.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(String id) {
    this.id = id;
  }


  public InlineResponse20077Data referenceDate(LocalDate referenceDate) {
    this.referenceDate = referenceDate;
    return this;
  }

   /**
   * Reference date of the time range.
   * @return referenceDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Reference date of the time range.")
  @JsonProperty(JSON_PROPERTY_REFERENCE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getReferenceDate() {
    return referenceDate;
  }


  @JsonProperty(JSON_PROPERTY_REFERENCE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReferenceDate(LocalDate referenceDate) {
    this.referenceDate = referenceDate;
  }


  public InlineResponse20077Data performance(InlineResponse20072DataPerformance performance) {
    this.performance = performance;
    return this;
  }

   /**
   * Get performance
   * @return performance
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PERFORMANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20072DataPerformance getPerformance() {
    return performance;
  }


  @JsonProperty(JSON_PROPERTY_PERFORMANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPerformance(InlineResponse20072DataPerformance performance) {
    this.performance = performance;
  }


  public InlineResponse20077Data high(InlineResponse20072DataHigh high) {
    this.high = high;
    return this;
  }

   /**
   * Get high
   * @return high
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_HIGH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20072DataHigh getHigh() {
    return high;
  }


  @JsonProperty(JSON_PROPERTY_HIGH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHigh(InlineResponse20072DataHigh high) {
    this.high = high;
  }


  public InlineResponse20077Data low(InlineResponse20072DataLow low) {
    this.low = low;
    return this;
  }

   /**
   * Get low
   * @return low
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20072DataLow getLow() {
    return low;
  }


  @JsonProperty(JSON_PROPERTY_LOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLow(InlineResponse20072DataLow low) {
    this.low = low;
  }


  public InlineResponse20077Data volatility(BigDecimal volatility) {
    this.volatility = volatility;
    return this;
  }

   /**
   * Volatility of the daily logarithmic returns, annualized assuming 256 trading days per year.
   * @return volatility
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Volatility of the daily logarithmic returns, annualized assuming 256 trading days per year.")
  @JsonProperty(JSON_PROPERTY_VOLATILITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getVolatility() {
    return volatility;
  }


  @JsonProperty(JSON_PROPERTY_VOLATILITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVolatility(BigDecimal volatility) {
    this.volatility = volatility;
  }


  public InlineResponse20077Data status(InlineResponse20073Status status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20073Status getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatus(InlineResponse20073Status status) {
    this.status = status;
  }


  /**
   * Return true if this inline_response_200_77_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20077Data inlineResponse20077Data = (InlineResponse20077Data) o;
    return Objects.equals(this.id, inlineResponse20077Data.id) &&
        Objects.equals(this.referenceDate, inlineResponse20077Data.referenceDate) &&
        Objects.equals(this.performance, inlineResponse20077Data.performance) &&
        Objects.equals(this.high, inlineResponse20077Data.high) &&
        Objects.equals(this.low, inlineResponse20077Data.low) &&
        Objects.equals(this.volatility, inlineResponse20077Data.volatility) &&
        Objects.equals(this.status, inlineResponse20077Data.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, referenceDate, performance, high, low, volatility, status);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20077Data {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    referenceDate: ").append(toIndentedString(referenceDate)).append("\n");
    sb.append("    performance: ").append(toIndentedString(performance)).append("\n");
    sb.append("    high: ").append(toIndentedString(high)).append("\n");
    sb.append("    low: ").append(toIndentedString(low)).append("\n");
    sb.append("    volatility: ").append(toIndentedString(volatility)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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
