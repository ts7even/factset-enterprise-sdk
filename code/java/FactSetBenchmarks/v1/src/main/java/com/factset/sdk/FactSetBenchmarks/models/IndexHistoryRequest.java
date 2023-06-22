/*
 * FactSet Benchmarks API
 * FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon. 
 *
 * The version of the OpenAPI document: 1.8.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetBenchmarks.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FactSetBenchmarks.models.Calendar;
import com.factset.sdk.FactSetBenchmarks.models.Frequency;
import com.factset.sdk.FactSetBenchmarks.models.HedgeType;
import com.factset.sdk.FactSetBenchmarks.models.ImpliedDate;
import com.factset.sdk.FactSetBenchmarks.models.ReturnType;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetBenchmarks.JSON;


/**
 * IndexHistoryRequest
 */
@JsonPropertyOrder({
  IndexHistoryRequest.JSON_PROPERTY_IDS,
  IndexHistoryRequest.JSON_PROPERTY_START_DATE,
  IndexHistoryRequest.JSON_PROPERTY_END_DATE,
  IndexHistoryRequest.JSON_PROPERTY_FREQUENCY,
  IndexHistoryRequest.JSON_PROPERTY_RETURN_TYPE,
  IndexHistoryRequest.JSON_PROPERTY_HEDGE_TYPE,
  IndexHistoryRequest.JSON_PROPERTY_CURRENCY,
  IndexHistoryRequest.JSON_PROPERTY_CALENDAR,
  IndexHistoryRequest.JSON_PROPERTY_IMPLIED_DATE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class IndexHistoryRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_IDS = "ids";
  private java.util.List<String> ids = new java.util.ArrayList<>();

  public static final String JSON_PROPERTY_START_DATE = "startDate";
  private String startDate;

  public static final String JSON_PROPERTY_END_DATE = "endDate";
  private String endDate;

  public static final String JSON_PROPERTY_FREQUENCY = "frequency";
  private Frequency frequency = Frequency.CY;

  public static final String JSON_PROPERTY_RETURN_TYPE = "returnType";
  private ReturnType returnType = ReturnType.GROSS;

  public static final String JSON_PROPERTY_HEDGE_TYPE = "hedgeType";
  private HedgeType hedgeType = HedgeType.UNHEDGED;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private String currency;

  public static final String JSON_PROPERTY_CALENDAR = "calendar";
  private Calendar calendar = Calendar.FIVEDAY;

  public static final String JSON_PROPERTY_IMPLIED_DATE = "impliedDate";
  private ImpliedDate impliedDate = ImpliedDate.N;

  public IndexHistoryRequest() { 
  }

  @JsonCreator
  public IndexHistoryRequest(
    @JsonProperty(value=JSON_PROPERTY_IDS, required=true) java.util.List<String> ids
  ) {
    this();
    this.ids = ids;
  }

  public IndexHistoryRequest ids(java.util.List<String> ids) {
    this.ids = ids;
    return this;
  }

  public IndexHistoryRequest addIdsItem(String idsItem) {
    this.ids.add(idsItem);
    return this;
  }

   /**
   * Benchmark Identifiers. Reference the helper endpoint **_/id-list** to get a sample list of  valid identifiers.
   * @return ids
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "[\"SP50\"]", required = true, value = "Benchmark Identifiers. Reference the helper endpoint **_/id-list** to get a sample list of  valid identifiers.")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<String> getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setIds(java.util.List<String> ids) {
    this.ids = ids;
  }


  public IndexHistoryRequest startDate(String startDate) {
    this.startDate = startDate;
    return this;
  }

   /**
   * Requested start date expressed in YYYY-MM-DD format.
   * @return startDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2018-12-31", value = "Requested start date expressed in YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getStartDate() {
    return startDate;
  }


  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStartDate(String startDate) {
    this.startDate = startDate;
  }


  public IndexHistoryRequest endDate(String endDate) {
    this.endDate = endDate;
    return this;
  }

   /**
   * Requested end date for Range expressed in YYYY-MM-DD format.
   * @return endDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2019-12-31", value = "Requested end date for Range expressed in YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEndDate() {
    return endDate;
  }


  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndDate(String endDate) {
    this.endDate = endDate;
  }


  public IndexHistoryRequest frequency(Frequency frequency) {
    this.frequency = frequency;
    return this;
  }

   /**
   * Get frequency
   * @return frequency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Frequency getFrequency() {
    return frequency;
  }


  @JsonProperty(JSON_PROPERTY_FREQUENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFrequency(Frequency frequency) {
    this.frequency = frequency;
  }


  public IndexHistoryRequest returnType(ReturnType returnType) {
    this.returnType = returnType;
    return this;
  }

   /**
   * Get returnType
   * @return returnType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RETURN_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ReturnType getReturnType() {
    return returnType;
  }


  @JsonProperty(JSON_PROPERTY_RETURN_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReturnType(ReturnType returnType) {
    this.returnType = returnType;
  }


  public IndexHistoryRequest hedgeType(HedgeType hedgeType) {
    this.hedgeType = hedgeType;
    return this;
  }

   /**
   * Get hedgeType
   * @return hedgeType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_HEDGE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public HedgeType getHedgeType() {
    return hedgeType;
  }


  @JsonProperty(JSON_PROPERTY_HEDGE_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHedgeType(HedgeType hedgeType) {
    this.hedgeType = hedgeType;
  }


  public IndexHistoryRequest currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Currency for response.
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Currency for response.")
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCurrency() {
    return currency;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public IndexHistoryRequest calendar(Calendar calendar) {
    this.calendar = calendar;
    return this;
  }

   /**
   * Get calendar
   * @return calendar
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CALENDAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Calendar getCalendar() {
    return calendar;
  }


  @JsonProperty(JSON_PROPERTY_CALENDAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCalendar(Calendar calendar) {
    this.calendar = calendar;
  }


  public IndexHistoryRequest impliedDate(ImpliedDate impliedDate) {
    this.impliedDate = impliedDate;
    return this;
  }

   /**
   * Get impliedDate
   * @return impliedDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_IMPLIED_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ImpliedDate getImpliedDate() {
    return impliedDate;
  }


  @JsonProperty(JSON_PROPERTY_IMPLIED_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setImpliedDate(ImpliedDate impliedDate) {
    this.impliedDate = impliedDate;
  }


  /**
   * Return true if this indexHistoryRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IndexHistoryRequest indexHistoryRequest = (IndexHistoryRequest) o;
    return Objects.equals(this.ids, indexHistoryRequest.ids) &&
        Objects.equals(this.startDate, indexHistoryRequest.startDate) &&
        Objects.equals(this.endDate, indexHistoryRequest.endDate) &&
        Objects.equals(this.frequency, indexHistoryRequest.frequency) &&
        Objects.equals(this.returnType, indexHistoryRequest.returnType) &&
        Objects.equals(this.hedgeType, indexHistoryRequest.hedgeType) &&
        Objects.equals(this.currency, indexHistoryRequest.currency) &&
        Objects.equals(this.calendar, indexHistoryRequest.calendar) &&
        Objects.equals(this.impliedDate, indexHistoryRequest.impliedDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ids, startDate, endDate, frequency, returnType, hedgeType, currency, calendar, impliedDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IndexHistoryRequest {\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    frequency: ").append(toIndentedString(frequency)).append("\n");
    sb.append("    returnType: ").append(toIndentedString(returnType)).append("\n");
    sb.append("    hedgeType: ").append(toIndentedString(hedgeType)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    calendar: ").append(toIndentedString(calendar)).append("\n");
    sb.append("    impliedDate: ").append(toIndentedString(impliedDate)).append("\n");
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

