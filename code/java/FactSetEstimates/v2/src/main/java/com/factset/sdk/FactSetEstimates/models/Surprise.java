/*
 * FactSet Estimates
 * Gain access to 20+ years of comprehensive estimates and statistics of over 250+ estimated metrics, including financial statement items, product segments, geosegments, and industry metrics. FactSet's consensus estimates are aggregated from a wide base of over 800+ contributors and cover over 19,000 active companies across 90+ countries. Data returned can be accessed on the data frequencies based on quarterly, fiscal years, and calendar years. FactSet Estimates updates on a real time basis intraday (every 5 minutes). Updating times vary based on earning season vs. non-earning season but the goal is to have the data available to the client within a few hours that FactSet receives updated information. Often times updates times can be much faster as FactSet has always been known as one of the fastest estimate providers in the market. 
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetEstimates.models;

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
import java.time.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetEstimates.JSON;


/**
 * Surprise
 */
@JsonPropertyOrder({
  Surprise.JSON_PROPERTY_FSYM_ID,
  Surprise.JSON_PROPERTY_DATE,
  Surprise.JSON_PROPERTY_CURRENCY,
  Surprise.JSON_PROPERTY_METRIC,
  Surprise.JSON_PROPERTY_STATISTIC,
  Surprise.JSON_PROPERTY_PERIODICITY,
  Surprise.JSON_PROPERTY_FISCAL_END_DATE,
  Surprise.JSON_PROPERTY_FISCAL_YEAR,
  Surprise.JSON_PROPERTY_FISCAL_PERIOD,
  Surprise.JSON_PROPERTY_SURPRISE_DATE,
  Surprise.JSON_PROPERTY_SURPRISE_AMOUNT,
  Surprise.JSON_PROPERTY_SURPRISE_PERCENT,
  Surprise.JSON_PROPERTY_SURPRISE_BEFORE,
  Surprise.JSON_PROPERTY_SURPRISE_AFTER,
  Surprise.JSON_PROPERTY_EVENT_DESCRIPTION,
  Surprise.JSON_PROPERTY_EVENT_FLAG,
  Surprise.JSON_PROPERTY_REQUEST_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Surprise implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_DATE = "date";
  private LocalDate date;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private String currency;

  public static final String JSON_PROPERTY_METRIC = "metric";
  private String metric;

  public static final String JSON_PROPERTY_STATISTIC = "statistic";
  private String statistic;

  public static final String JSON_PROPERTY_PERIODICITY = "periodicity";
  private String periodicity;

  public static final String JSON_PROPERTY_FISCAL_END_DATE = "fiscalEndDate";
  private LocalDate fiscalEndDate;

  public static final String JSON_PROPERTY_FISCAL_YEAR = "fiscalYear";
  private Integer fiscalYear;

  public static final String JSON_PROPERTY_FISCAL_PERIOD = "fiscalPeriod";
  private Integer fiscalPeriod;

  public static final String JSON_PROPERTY_SURPRISE_DATE = "surpriseDate";
  private LocalDate surpriseDate;

  public static final String JSON_PROPERTY_SURPRISE_AMOUNT = "surpriseAmount";
  private Double surpriseAmount;

  public static final String JSON_PROPERTY_SURPRISE_PERCENT = "surprisePercent";
  private Double surprisePercent;

  public static final String JSON_PROPERTY_SURPRISE_BEFORE = "surpriseBefore";
  private Double surpriseBefore;

  public static final String JSON_PROPERTY_SURPRISE_AFTER = "surpriseAfter";
  private Double surpriseAfter;

  public static final String JSON_PROPERTY_EVENT_DESCRIPTION = "eventDescription";
  private String eventDescription;

  public static final String JSON_PROPERTY_EVENT_FLAG = "eventFlag";
  private Integer eventFlag;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public Surprise() { 
  }

  public Surprise fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * Get fsymId
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SJY281-R", value = "")
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


  public Surprise date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Date for data expressed in YYYY-MM-DD format.
   * @return date
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Sun Dec 31 00:00:00 UTC 2017", value = "Date for data expressed in YYYY-MM-DD format.")
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


  public Surprise currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Currency used estimates in consensus calculations. Currency used estimates in consensus calculations. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Currency used estimates in consensus calculations. Currency used estimates in consensus calculations. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).")
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


  public Surprise metric(String metric) {
    this.metric = metric;
    return this;
  }

   /**
   * Company&#39;s Financial statement &#39;metric&#39; that is estimated. Use the factset-estimates/v#/metrics endpoint for a complete list. For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034).
   * @return metric
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SALES", value = "Company's Financial statement 'metric' that is estimated. Use the factset-estimates/v#/metrics endpoint for a complete list. For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034).")
  @JsonProperty(JSON_PROPERTY_METRIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getMetric() {
    return metric;
  }


  @JsonProperty(JSON_PROPERTY_METRIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMetric(String metric) {
    this.metric = metric;
  }


  public Surprise statistic(String statistic) {
    this.statistic = statistic;
    return this;
  }

   /**
   * Method of calculation for the consensus &#39;statistic&#39;. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114).
   * @return statistic
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "MEAN", value = "Method of calculation for the consensus 'statistic'. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114).")
  @JsonProperty(JSON_PROPERTY_STATISTIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getStatistic() {
    return statistic;
  }


  @JsonProperty(JSON_PROPERTY_STATISTIC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatistic(String statistic) {
    this.statistic = statistic;
  }


  public Surprise periodicity(String periodicity) {
    this.periodicity = periodicity;
    return this;
  }

   /**
   * Company&#39;s &#39;periodicity&#39; for the estimate record, reflecting Annual, Quarterly, or Semi-Annual report periods. Next-twelve-months (NTMA) and Last-twelve-months (LTMA) also supported.
   * @return periodicity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "ANN", value = "Company's 'periodicity' for the estimate record, reflecting Annual, Quarterly, or Semi-Annual report periods. Next-twelve-months (NTMA) and Last-twelve-months (LTMA) also supported.")
  @JsonProperty(JSON_PROPERTY_PERIODICITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getPeriodicity() {
    return periodicity;
  }


  @JsonProperty(JSON_PROPERTY_PERIODICITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPeriodicity(String periodicity) {
    this.periodicity = periodicity;
  }


  public Surprise fiscalEndDate(LocalDate fiscalEndDate) {
    this.fiscalEndDate = fiscalEndDate;
    return this;
  }

   /**
   * Company&#39;s &#39;fiscal end date&#39; for the estimate record expressed in YYYY-MM-DD format
   * @return fiscalEndDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Sun Dec 31 00:00:00 UTC 2017", value = "Company's 'fiscal end date' for the estimate record expressed in YYYY-MM-DD format")
  @JsonProperty(JSON_PROPERTY_FISCAL_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getFiscalEndDate() {
    return fiscalEndDate;
  }


  @JsonProperty(JSON_PROPERTY_FISCAL_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFiscalEndDate(LocalDate fiscalEndDate) {
    this.fiscalEndDate = fiscalEndDate;
  }


  public Surprise fiscalYear(Integer fiscalYear) {
    this.fiscalYear = fiscalYear;
    return this;
  }

   /**
   * Company&#39;s &#39;fiscal year&#39; for the estimate record
   * @return fiscalYear
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2018", value = "Company's 'fiscal year' for the estimate record")
  @JsonProperty(JSON_PROPERTY_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getFiscalYear() {
    return fiscalYear;
  }


  @JsonProperty(JSON_PROPERTY_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFiscalYear(Integer fiscalYear) {
    this.fiscalYear = fiscalYear;
  }


  public Surprise fiscalPeriod(Integer fiscalPeriod) {
    this.fiscalPeriod = fiscalPeriod;
    return this;
  }

   /**
   * Company&#39;s &#39;fiscal period&#39; for the estimate record.  &#39;Periodicity&#39; defines context for period.
   * @return fiscalPeriod
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "4", value = "Company's 'fiscal period' for the estimate record.  'Periodicity' defines context for period.")
  @JsonProperty(JSON_PROPERTY_FISCAL_PERIOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getFiscalPeriod() {
    return fiscalPeriod;
  }


  @JsonProperty(JSON_PROPERTY_FISCAL_PERIOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFiscalPeriod(Integer fiscalPeriod) {
    this.fiscalPeriod = fiscalPeriod;
  }


  public Surprise surpriseDate(LocalDate surpriseDate) {
    this.surpriseDate = surpriseDate;
    return this;
  }

   /**
   * Date of the reported event expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16601](https://oa.apps.factset.com/pages/16601).
   * @return surpriseDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Fri Feb 24 00:00:00 UTC 2017", value = "Date of the reported event expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16601](https://oa.apps.factset.com/pages/16601).")
  @JsonProperty(JSON_PROPERTY_SURPRISE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getSurpriseDate() {
    return surpriseDate;
  }


  @JsonProperty(JSON_PROPERTY_SURPRISE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSurpriseDate(LocalDate surpriseDate) {
    this.surpriseDate = surpriseDate;
  }


  public Surprise surpriseAmount(Double surpriseAmount) {
    this.surpriseAmount = surpriseAmount;
    return this;
  }

   /**
   * Amount of difference between last consensus and actual. For more details, visit [Online Assistant Page #16145](https://oa.apps.factset.com/pages/16145).
   * @return surpriseAmount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.07951", value = "Amount of difference between last consensus and actual. For more details, visit [Online Assistant Page #16145](https://oa.apps.factset.com/pages/16145).")
  @JsonProperty(JSON_PROPERTY_SURPRISE_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getSurpriseAmount() {
    return surpriseAmount;
  }


  @JsonProperty(JSON_PROPERTY_SURPRISE_AMOUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSurpriseAmount(Double surpriseAmount) {
    this.surpriseAmount = surpriseAmount;
  }


  public Surprise surprisePercent(Double surprisePercent) {
    this.surprisePercent = surprisePercent;
    return this;
  }

   /**
   * Percent difference between last consensus and actual. For more details, visit [Online Assistant Page #16145](https://oa.apps.factset.com/pages/16145).
   * @return surprisePercent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "6.16", value = "Percent difference between last consensus and actual. For more details, visit [Online Assistant Page #16145](https://oa.apps.factset.com/pages/16145).")
  @JsonProperty(JSON_PROPERTY_SURPRISE_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getSurprisePercent() {
    return surprisePercent;
  }


  @JsonProperty(JSON_PROPERTY_SURPRISE_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSurprisePercent(Double surprisePercent) {
    this.surprisePercent = surprisePercent;
  }


  public Surprise surpriseBefore(Double surpriseBefore) {
    this.surpriseBefore = surpriseBefore;
    return this;
  }

   /**
   * Last consensus before event. For more details, visit [Online Assistant Page #16145](https://oa.apps.factset.com/pages/16145).
   * @return surpriseBefore
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1.2905", value = "Last consensus before event. For more details, visit [Online Assistant Page #16145](https://oa.apps.factset.com/pages/16145).")
  @JsonProperty(JSON_PROPERTY_SURPRISE_BEFORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getSurpriseBefore() {
    return surpriseBefore;
  }


  @JsonProperty(JSON_PROPERTY_SURPRISE_BEFORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSurpriseBefore(Double surpriseBefore) {
    this.surpriseBefore = surpriseBefore;
  }


  public Surprise surpriseAfter(Double surpriseAfter) {
    this.surpriseAfter = surpriseAfter;
    return this;
  }

   /**
   * Actual value after event. For more details, visit [Online Assistant Page #16145](https://oa.apps.factset.com/pages/16145).
   * @return surpriseAfter
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1.3653", value = "Actual value after event. For more details, visit [Online Assistant Page #16145](https://oa.apps.factset.com/pages/16145).")
  @JsonProperty(JSON_PROPERTY_SURPRISE_AFTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getSurpriseAfter() {
    return surpriseAfter;
  }


  @JsonProperty(JSON_PROPERTY_SURPRISE_AFTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSurpriseAfter(Double surpriseAfter) {
    this.surpriseAfter = surpriseAfter;
  }


  public Surprise eventDescription(String eventDescription) {
    this.eventDescription = eventDescription;
    return this;
  }

   /**
   * Description of event. For more details, visit [Online Assistant Page #16601](https://oa.apps.factset.com/pages/16601).
   * @return eventDescription
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Results for 2016", value = "Description of event. For more details, visit [Online Assistant Page #16601](https://oa.apps.factset.com/pages/16601).")
  @JsonProperty(JSON_PROPERTY_EVENT_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEventDescription() {
    return eventDescription;
  }


  @JsonProperty(JSON_PROPERTY_EVENT_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEventDescription(String eventDescription) {
    this.eventDescription = eventDescription;
  }


  public Surprise eventFlag(Integer eventFlag) {
    this.eventFlag = eventFlag;
    return this;
  }

   /**
   * Flag for event. Code of Event Flag, where 0 &#x3D; results and 1 &#x3D; profit warning. For more details, visit [Online Assistant Page #16601](https://oa.apps.factset.com/pages/16601).
   * @return eventFlag
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0", value = "Flag for event. Code of Event Flag, where 0 = results and 1 = profit warning. For more details, visit [Online Assistant Page #16601](https://oa.apps.factset.com/pages/16601).")
  @JsonProperty(JSON_PROPERTY_EVENT_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getEventFlag() {
    return eventFlag;
  }


  @JsonProperty(JSON_PROPERTY_EVENT_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEventFlag(Integer eventFlag) {
    this.eventFlag = eventFlag;
  }


  public Surprise requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Get requestId
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "IBM-US", value = "")
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


  /**
   * Return true if this surprise object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Surprise surprise = (Surprise) o;
    return Objects.equals(this.fsymId, surprise.fsymId) &&
        Objects.equals(this.date, surprise.date) &&
        Objects.equals(this.currency, surprise.currency) &&
        Objects.equals(this.metric, surprise.metric) &&
        Objects.equals(this.statistic, surprise.statistic) &&
        Objects.equals(this.periodicity, surprise.periodicity) &&
        Objects.equals(this.fiscalEndDate, surprise.fiscalEndDate) &&
        Objects.equals(this.fiscalYear, surprise.fiscalYear) &&
        Objects.equals(this.fiscalPeriod, surprise.fiscalPeriod) &&
        Objects.equals(this.surpriseDate, surprise.surpriseDate) &&
        Objects.equals(this.surpriseAmount, surprise.surpriseAmount) &&
        Objects.equals(this.surprisePercent, surprise.surprisePercent) &&
        Objects.equals(this.surpriseBefore, surprise.surpriseBefore) &&
        Objects.equals(this.surpriseAfter, surprise.surpriseAfter) &&
        Objects.equals(this.eventDescription, surprise.eventDescription) &&
        Objects.equals(this.eventFlag, surprise.eventFlag) &&
        Objects.equals(this.requestId, surprise.requestId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fsymId, date, currency, metric, statistic, periodicity, fiscalEndDate, fiscalYear, fiscalPeriod, surpriseDate, surpriseAmount, surprisePercent, surpriseBefore, surpriseAfter, eventDescription, eventFlag, requestId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Surprise {\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    statistic: ").append(toIndentedString(statistic)).append("\n");
    sb.append("    periodicity: ").append(toIndentedString(periodicity)).append("\n");
    sb.append("    fiscalEndDate: ").append(toIndentedString(fiscalEndDate)).append("\n");
    sb.append("    fiscalYear: ").append(toIndentedString(fiscalYear)).append("\n");
    sb.append("    fiscalPeriod: ").append(toIndentedString(fiscalPeriod)).append("\n");
    sb.append("    surpriseDate: ").append(toIndentedString(surpriseDate)).append("\n");
    sb.append("    surpriseAmount: ").append(toIndentedString(surpriseAmount)).append("\n");
    sb.append("    surprisePercent: ").append(toIndentedString(surprisePercent)).append("\n");
    sb.append("    surpriseBefore: ").append(toIndentedString(surpriseBefore)).append("\n");
    sb.append("    surpriseAfter: ").append(toIndentedString(surpriseAfter)).append("\n");
    sb.append("    eventDescription: ").append(toIndentedString(eventDescription)).append("\n");
    sb.append("    eventFlag: ").append(toIndentedString(eventFlag)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
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

