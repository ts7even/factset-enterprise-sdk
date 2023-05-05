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
 * DetailEstimate
 */
@JsonPropertyOrder({
  DetailEstimate.JSON_PROPERTY_FSYM_ID,
  DetailEstimate.JSON_PROPERTY_METRIC,
  DetailEstimate.JSON_PROPERTY_PERIODICITY,
  DetailEstimate.JSON_PROPERTY_FISCAL_YEAR,
  DetailEstimate.JSON_PROPERTY_FISCAL_PERIOD,
  DetailEstimate.JSON_PROPERTY_FISCAL_END_DATE,
  DetailEstimate.JSON_PROPERTY_RELATIVE_PERIOD,
  DetailEstimate.JSON_PROPERTY_CURRENCY,
  DetailEstimate.JSON_PROPERTY_ESTIMATE_DATE,
  DetailEstimate.JSON_PROPERTY_ESTIMATE_VALUE,
  DetailEstimate.JSON_PROPERTY_ANALYST_ID,
  DetailEstimate.JSON_PROPERTY_ANALYST_NAME,
  DetailEstimate.JSON_PROPERTY_BROKER_ID,
  DetailEstimate.JSON_PROPERTY_BROKER_NAME,
  DetailEstimate.JSON_PROPERTY_PREV_ESTIMATE_DATE,
  DetailEstimate.JSON_PROPERTY_PREV_ESTIMATE_VALUE,
  DetailEstimate.JSON_PROPERTY_SECTION,
  DetailEstimate.JSON_PROPERTY_STATUS_CODE,
  DetailEstimate.JSON_PROPERTY_STATUS_TEXT,
  DetailEstimate.JSON_PROPERTY_REQUEST_ID,
  DetailEstimate.JSON_PROPERTY_INPUT_DATE_TIME
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DetailEstimate implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_METRIC = "metric";
  private String metric;

  public static final String JSON_PROPERTY_PERIODICITY = "periodicity";
  private String periodicity;

  public static final String JSON_PROPERTY_FISCAL_YEAR = "fiscalYear";
  private Integer fiscalYear;

  public static final String JSON_PROPERTY_FISCAL_PERIOD = "fiscalPeriod";
  private Integer fiscalPeriod;

  public static final String JSON_PROPERTY_FISCAL_END_DATE = "fiscalEndDate";
  private LocalDate fiscalEndDate;

  public static final String JSON_PROPERTY_RELATIVE_PERIOD = "relativePeriod";
  private Integer relativePeriod;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private String currency;

  public static final String JSON_PROPERTY_ESTIMATE_DATE = "estimateDate";
  private LocalDate estimateDate;

  public static final String JSON_PROPERTY_ESTIMATE_VALUE = "estimateValue";
  private Double estimateValue;

  public static final String JSON_PROPERTY_ANALYST_ID = "analystId";
  private String analystId;

  public static final String JSON_PROPERTY_ANALYST_NAME = "analystName";
  private String analystName;

  public static final String JSON_PROPERTY_BROKER_ID = "brokerId";
  private String brokerId;

  public static final String JSON_PROPERTY_BROKER_NAME = "brokerName";
  private String brokerName;

  public static final String JSON_PROPERTY_PREV_ESTIMATE_DATE = "prevEstimateDate";
  private LocalDate prevEstimateDate;

  public static final String JSON_PROPERTY_PREV_ESTIMATE_VALUE = "prevEstimateValue";
  private Double prevEstimateValue;

  public static final String JSON_PROPERTY_SECTION = "section";
  private String section;

  public static final String JSON_PROPERTY_STATUS_CODE = "statusCode";
  private Integer statusCode;

  public static final String JSON_PROPERTY_STATUS_TEXT = "statusText";
  private String statusText;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_INPUT_DATE_TIME = "inputDateTime";
  private String inputDateTime;

  public DetailEstimate() { 
  }

  public DetailEstimate fsymId(String fsymId) {
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


  public DetailEstimate metric(String metric) {
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


  public DetailEstimate periodicity(String periodicity) {
    this.periodicity = periodicity;
    return this;
  }

   /**
   * Company&#39;s &#39;periodicity&#39; for the estimate record, reflecting Annual, Quarterly, or Semi-Annual report periods.
   * @return periodicity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "ANN", value = "Company's 'periodicity' for the estimate record, reflecting Annual, Quarterly, or Semi-Annual report periods.")
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


  public DetailEstimate fiscalYear(Integer fiscalYear) {
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


  public DetailEstimate fiscalPeriod(Integer fiscalPeriod) {
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


  public DetailEstimate fiscalEndDate(LocalDate fiscalEndDate) {
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


  public DetailEstimate relativePeriod(Integer relativePeriod) {
    this.relativePeriod = relativePeriod;
    return this;
  }

   /**
   * &#39;Fiscal period&#39; based on relationship to &#39;estimate date&#39;. This is not applicable for fixed-consensus endpoint. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)
   * @return relativePeriod
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2", value = "'Fiscal period' based on relationship to 'estimate date'. This is not applicable for fixed-consensus endpoint. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)")
  @JsonProperty(JSON_PROPERTY_RELATIVE_PERIOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getRelativePeriod() {
    return relativePeriod;
  }


  @JsonProperty(JSON_PROPERTY_RELATIVE_PERIOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRelativePeriod(Integer relativePeriod) {
    this.relativePeriod = relativePeriod;
  }


  public DetailEstimate currency(String currency) {
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


  public DetailEstimate estimateDate(LocalDate estimateDate) {
    this.estimateDate = estimateDate;
    return this;
  }

   /**
   * Date of estimate expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)
   * @return estimateDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Mon Jul 24 00:00:00 UTC 2017", value = "Date of estimate expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)")
  @JsonProperty(JSON_PROPERTY_ESTIMATE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getEstimateDate() {
    return estimateDate;
  }


  @JsonProperty(JSON_PROPERTY_ESTIMATE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEstimateDate(LocalDate estimateDate) {
    this.estimateDate = estimateDate;
  }


  public DetailEstimate estimateValue(Double estimateValue) {
    this.estimateValue = estimateValue;
    return this;
  }

   /**
   * The value of the estimate.
   * @return estimateValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "23456", value = "The value of the estimate.")
  @JsonProperty(JSON_PROPERTY_ESTIMATE_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getEstimateValue() {
    return estimateValue;
  }


  @JsonProperty(JSON_PROPERTY_ESTIMATE_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEstimateValue(Double estimateValue) {
    this.estimateValue = estimateValue;
  }


  public DetailEstimate analystId(String analystId) {
    this.analystId = analystId;
    return this;
  }

   /**
   * The FactSet Entity Identifier for the analyst making the estimate.
   * @return analystId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0DXTST-E", value = "The FactSet Entity Identifier for the analyst making the estimate.")
  @JsonProperty(JSON_PROPERTY_ANALYST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAnalystId() {
    return analystId;
  }


  @JsonProperty(JSON_PROPERTY_ANALYST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAnalystId(String analystId) {
    this.analystId = analystId;
  }


  public DetailEstimate analystName(String analystName) {
    this.analystName = analystName;
    return this;
  }

   /**
   * The name of the analyst making the estimate.
   * @return analystName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Josh Baer", value = "The name of the analyst making the estimate.")
  @JsonProperty(JSON_PROPERTY_ANALYST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAnalystName() {
    return analystName;
  }


  @JsonProperty(JSON_PROPERTY_ANALYST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAnalystName(String analystName) {
    this.analystName = analystName;
  }


  public DetailEstimate brokerId(String brokerId) {
    this.brokerId = brokerId;
    return this;
  }

   /**
   * The FactSet Entity Identifier for the broker making the estimate.
   * @return brokerId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "05FBK7-E", value = "The FactSet Entity Identifier for the broker making the estimate.")
  @JsonProperty(JSON_PROPERTY_BROKER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getBrokerId() {
    return brokerId;
  }


  @JsonProperty(JSON_PROPERTY_BROKER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBrokerId(String brokerId) {
    this.brokerId = brokerId;
  }


  public DetailEstimate brokerName(String brokerName) {
    this.brokerName = brokerName;
    return this;
  }

   /**
   * The name of the broker making the estimate.
   * @return brokerName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Morgan Stanley", value = "The name of the broker making the estimate.")
  @JsonProperty(JSON_PROPERTY_BROKER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getBrokerName() {
    return brokerName;
  }


  @JsonProperty(JSON_PROPERTY_BROKER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBrokerName(String brokerName) {
    this.brokerName = brokerName;
  }


  public DetailEstimate prevEstimateDate(LocalDate prevEstimateDate) {
    this.prevEstimateDate = prevEstimateDate;
    return this;
  }

   /**
   * Date the previous estimate was made expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)
   * @return prevEstimateDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Tue May 02 00:00:00 UTC 2017", value = "Date the previous estimate was made expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)")
  @JsonProperty(JSON_PROPERTY_PREV_ESTIMATE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getPrevEstimateDate() {
    return prevEstimateDate;
  }


  @JsonProperty(JSON_PROPERTY_PREV_ESTIMATE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrevEstimateDate(LocalDate prevEstimateDate) {
    this.prevEstimateDate = prevEstimateDate;
  }


  public DetailEstimate prevEstimateValue(Double prevEstimateValue) {
    this.prevEstimateValue = prevEstimateValue;
    return this;
  }

   /**
   * The value of the previous estimate.
   * @return prevEstimateValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "22336", value = "The value of the previous estimate.")
  @JsonProperty(JSON_PROPERTY_PREV_ESTIMATE_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getPrevEstimateValue() {
    return prevEstimateValue;
  }


  @JsonProperty(JSON_PROPERTY_PREV_ESTIMATE_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrevEstimateValue(Double prevEstimateValue) {
    this.prevEstimateValue = prevEstimateValue;
  }


  public DetailEstimate section(String section) {
    this.section = section;
    return this;
  }

   /**
   * Section of the estimate.Returns the details of brokers inlcuded and excluded in the consensus
   * @return section
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Included", value = "Section of the estimate.Returns the details of brokers inlcuded and excluded in the consensus")
  @JsonProperty(JSON_PROPERTY_SECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSection() {
    return section;
  }


  @JsonProperty(JSON_PROPERTY_SECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSection(String section) {
    this.section = section;
  }


  public DetailEstimate statusCode(Integer statusCode) {
    this.statusCode = statusCode;
    return this;
  }

   /**
   * Status code of the estimate.
   * @return statusCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0", value = "Status code of the estimate.")
  @JsonProperty(JSON_PROPERTY_STATUS_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getStatusCode() {
    return statusCode;
  }


  @JsonProperty(JSON_PROPERTY_STATUS_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatusCode(Integer statusCode) {
    this.statusCode = statusCode;
  }


  public DetailEstimate statusText(String statusText) {
    this.statusText = statusText;
    return this;
  }

   /**
   * Status description of the estimate.
   * @return statusText
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "", value = "Status description of the estimate.")
  @JsonProperty(JSON_PROPERTY_STATUS_TEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getStatusText() {
    return statusText;
  }


  @JsonProperty(JSON_PROPERTY_STATUS_TEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatusText(String statusText) {
    this.statusText = statusText;
  }


  public DetailEstimate requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier that was used for the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "IBM-US", value = "Identifier that was used for the request.")
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


  public DetailEstimate inputDateTime(String inputDateTime) {
    this.inputDateTime = inputDateTime;
    return this;
  }

   /**
   * Date and time when the data is available at the source.
   * @return inputDateTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2022-10-25T22:40:09", value = "Date and time when the data is available at the source.")
  @JsonProperty(JSON_PROPERTY_INPUT_DATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getInputDateTime() {
    return inputDateTime;
  }


  @JsonProperty(JSON_PROPERTY_INPUT_DATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInputDateTime(String inputDateTime) {
    this.inputDateTime = inputDateTime;
  }


  /**
   * Return true if this detailEstimate object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DetailEstimate detailEstimate = (DetailEstimate) o;
    return Objects.equals(this.fsymId, detailEstimate.fsymId) &&
        Objects.equals(this.metric, detailEstimate.metric) &&
        Objects.equals(this.periodicity, detailEstimate.periodicity) &&
        Objects.equals(this.fiscalYear, detailEstimate.fiscalYear) &&
        Objects.equals(this.fiscalPeriod, detailEstimate.fiscalPeriod) &&
        Objects.equals(this.fiscalEndDate, detailEstimate.fiscalEndDate) &&
        Objects.equals(this.relativePeriod, detailEstimate.relativePeriod) &&
        Objects.equals(this.currency, detailEstimate.currency) &&
        Objects.equals(this.estimateDate, detailEstimate.estimateDate) &&
        Objects.equals(this.estimateValue, detailEstimate.estimateValue) &&
        Objects.equals(this.analystId, detailEstimate.analystId) &&
        Objects.equals(this.analystName, detailEstimate.analystName) &&
        Objects.equals(this.brokerId, detailEstimate.brokerId) &&
        Objects.equals(this.brokerName, detailEstimate.brokerName) &&
        Objects.equals(this.prevEstimateDate, detailEstimate.prevEstimateDate) &&
        Objects.equals(this.prevEstimateValue, detailEstimate.prevEstimateValue) &&
        Objects.equals(this.section, detailEstimate.section) &&
        Objects.equals(this.statusCode, detailEstimate.statusCode) &&
        Objects.equals(this.statusText, detailEstimate.statusText) &&
        Objects.equals(this.requestId, detailEstimate.requestId) &&
        Objects.equals(this.inputDateTime, detailEstimate.inputDateTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fsymId, metric, periodicity, fiscalYear, fiscalPeriod, fiscalEndDate, relativePeriod, currency, estimateDate, estimateValue, analystId, analystName, brokerId, brokerName, prevEstimateDate, prevEstimateValue, section, statusCode, statusText, requestId, inputDateTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DetailEstimate {\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    periodicity: ").append(toIndentedString(periodicity)).append("\n");
    sb.append("    fiscalYear: ").append(toIndentedString(fiscalYear)).append("\n");
    sb.append("    fiscalPeriod: ").append(toIndentedString(fiscalPeriod)).append("\n");
    sb.append("    fiscalEndDate: ").append(toIndentedString(fiscalEndDate)).append("\n");
    sb.append("    relativePeriod: ").append(toIndentedString(relativePeriod)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    estimateDate: ").append(toIndentedString(estimateDate)).append("\n");
    sb.append("    estimateValue: ").append(toIndentedString(estimateValue)).append("\n");
    sb.append("    analystId: ").append(toIndentedString(analystId)).append("\n");
    sb.append("    analystName: ").append(toIndentedString(analystName)).append("\n");
    sb.append("    brokerId: ").append(toIndentedString(brokerId)).append("\n");
    sb.append("    brokerName: ").append(toIndentedString(brokerName)).append("\n");
    sb.append("    prevEstimateDate: ").append(toIndentedString(prevEstimateDate)).append("\n");
    sb.append("    prevEstimateValue: ").append(toIndentedString(prevEstimateValue)).append("\n");
    sb.append("    section: ").append(toIndentedString(section)).append("\n");
    sb.append("    statusCode: ").append(toIndentedString(statusCode)).append("\n");
    sb.append("    statusText: ").append(toIndentedString(statusText)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    inputDateTime: ").append(toIndentedString(inputDateTime)).append("\n");
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

