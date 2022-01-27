/*
 * FactSet Estimates
 * Gain access to 20+ years of comprehensive estimates and statistics of over 250+ estimated metrics, including financial statement items, product segments, geosegments, and industry metrics. FactSet's consensus estimates are aggregated from a wide base of over 800+ contributors and cover over 19,000 active companies across 90+ countries. Data returned can be accessed on the data frequencies based on quarterly, fiscal years, and calendar years. FactSet Estimates updates on a real time basis intraday (every 5 minutes). Updating times vary based on earning season vs. non-earning season but the goal is to have the data available to the client within a few hours that FactSet receives updated information. Often times updates times can be much faster as FactSet has always been known as one of the fastest estimate providers in the market. 
 *
 * The version of the OpenAPI document: 2.3.0
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
import org.threeten.bp.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetEstimates.JSON;


/**
 * SegmentsEstimate
 */
@JsonPropertyOrder({
  SegmentsEstimate.JSON_PROPERTY_REQUEST_ID,
  SegmentsEstimate.JSON_PROPERTY_FSYM_ID,
  SegmentsEstimate.JSON_PROPERTY_SEGMENT_TYPE,
  SegmentsEstimate.JSON_PROPERTY_METRIC,
  SegmentsEstimate.JSON_PROPERTY_FISCAL_PERIOD,
  SegmentsEstimate.JSON_PROPERTY_FISCAL_YEAR,
  SegmentsEstimate.JSON_PROPERTY_SEGMENT_LABEL,
  SegmentsEstimate.JSON_PROPERTY_SEGMENT_LEVEL,
  SegmentsEstimate.JSON_PROPERTY_FISCAL_END_DATE,
  SegmentsEstimate.JSON_PROPERTY_ESTIMATE_DATE,
  SegmentsEstimate.JSON_PROPERTY_CURRENCY,
  SegmentsEstimate.JSON_PROPERTY_MEAN,
  SegmentsEstimate.JSON_PROPERTY_MEDIAN,
  SegmentsEstimate.JSON_PROPERTY_STANDARD_DEVIATION,
  SegmentsEstimate.JSON_PROPERTY_HIGH,
  SegmentsEstimate.JSON_PROPERTY_LOW,
  SegmentsEstimate.JSON_PROPERTY_ESTIMATE_COUNT,
  SegmentsEstimate.JSON_PROPERTY_UP,
  SegmentsEstimate.JSON_PROPERTY_DOWN
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SegmentsEstimate implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_SEGMENT_TYPE = "segmentType";
  private String segmentType;

  public static final String JSON_PROPERTY_METRIC = "metric";
  private String metric;

  public static final String JSON_PROPERTY_FISCAL_PERIOD = "fiscalPeriod";
  private Integer fiscalPeriod;

  public static final String JSON_PROPERTY_FISCAL_YEAR = "fiscalYear";
  private Integer fiscalYear;

  public static final String JSON_PROPERTY_SEGMENT_LABEL = "segmentLabel";
  private String segmentLabel;

  public static final String JSON_PROPERTY_SEGMENT_LEVEL = "segmentLevel";
  private String segmentLevel;

  public static final String JSON_PROPERTY_FISCAL_END_DATE = "fiscalEndDate";
  private LocalDate fiscalEndDate;

  public static final String JSON_PROPERTY_ESTIMATE_DATE = "estimateDate";
  private LocalDate estimateDate;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private String currency;

  public static final String JSON_PROPERTY_MEAN = "mean";
  private Double mean;

  public static final String JSON_PROPERTY_MEDIAN = "median";
  private Double median;

  public static final String JSON_PROPERTY_STANDARD_DEVIATION = "standardDeviation";
  private Double standardDeviation;

  public static final String JSON_PROPERTY_HIGH = "high";
  private Double high;

  public static final String JSON_PROPERTY_LOW = "low";
  private Double low;

  public static final String JSON_PROPERTY_ESTIMATE_COUNT = "estimateCount";
  private Integer estimateCount;

  public static final String JSON_PROPERTY_UP = "up";
  private Integer up;

  public static final String JSON_PROPERTY_DOWN = "down";
  private Integer down;


  public SegmentsEstimate requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier that was used for the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "AAPL", value = "Identifier that was used for the request.")
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


  public SegmentsEstimate fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security’s best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SJY281-R", value = "Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security’s best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.")
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


  public SegmentsEstimate segmentType(String segmentType) {
    this.segmentType = segmentType;
    return this;
  }

   /**
   * Segment selected
   * @return segmentType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "BUS", value = "Segment selected")
  @JsonProperty(JSON_PROPERTY_SEGMENT_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSegmentType() {
    return segmentType;
  }


  @JsonProperty(JSON_PROPERTY_SEGMENT_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSegmentType(String segmentType) {
    this.segmentType = segmentType;
  }


  public SegmentsEstimate metric(String metric) {
    this.metric = metric;
    return this;
  }

   /**
   * Company&#39;s Financial statement &#39;metric&#39; that is estimated. Use the factset-estimates/v#/metrics endpoint for a complete list. For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034)
   * @return metric
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SALES", value = "Company's Financial statement 'metric' that is estimated. Use the factset-estimates/v#/metrics endpoint for a complete list. For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034)")
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


  public SegmentsEstimate fiscalPeriod(Integer fiscalPeriod) {
    this.fiscalPeriod = fiscalPeriod;
    return this;
  }

   /**
   * Company&#39;s &#39;fiscal period&#39; for the estimate record. Periods for periodicity of ANN &#x3D; 1, and SEMI &#x3D; 2. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598).
   * @return fiscalPeriod
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "Company's 'fiscal period' for the estimate record. Periods for periodicity of ANN = 1, and SEMI = 2. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598).")
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


  public SegmentsEstimate fiscalYear(Integer fiscalYear) {
    this.fiscalYear = fiscalYear;
    return this;
  }

   /**
   * Company&#39;s &#39;fiscal year&#39; for the estimate record. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)
   * @return fiscalYear
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2018", value = "Company's 'fiscal year' for the estimate record. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)")
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


  public SegmentsEstimate segmentLabel(String segmentLabel) {
    this.segmentLabel = segmentLabel;
    return this;
  }

   /**
   * Displays the specific label of the segment.
   * @return segmentLabel
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "iPhone", value = "Displays the specific label of the segment.")
  @JsonProperty(JSON_PROPERTY_SEGMENT_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSegmentLabel() {
    return segmentLabel;
  }


  @JsonProperty(JSON_PROPERTY_SEGMENT_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSegmentLabel(String segmentLabel) {
    this.segmentLabel = segmentLabel;
  }


  public SegmentsEstimate segmentLevel(String segmentLevel) {
    this.segmentLevel = segmentLevel;
    return this;
  }

   /**
   * Returns the level of the segment item as either P &#x3D; Parent or S &#x3D; Subordinate
   * @return segmentLevel
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "S", value = "Returns the level of the segment item as either P = Parent or S = Subordinate")
  @JsonProperty(JSON_PROPERTY_SEGMENT_LEVEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSegmentLevel() {
    return segmentLevel;
  }


  @JsonProperty(JSON_PROPERTY_SEGMENT_LEVEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSegmentLevel(String segmentLevel) {
    this.segmentLevel = segmentLevel;
  }


  public SegmentsEstimate fiscalEndDate(LocalDate fiscalEndDate) {
    this.fiscalEndDate = fiscalEndDate;
    return this;
  }

   /**
   * Company&#39;s &#39;fiscal end date&#39; for the estimate record expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)
   * @return fiscalEndDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Thu Sep 30 00:00:00 UTC 2021", value = "Company's 'fiscal end date' for the estimate record expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)")
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


  public SegmentsEstimate estimateDate(LocalDate estimateDate) {
    this.estimateDate = estimateDate;
    return this;
  }

   /**
   * The date the estimates are as of in YYYY-MM-DD format.
   * @return estimateDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Thu Jul 01 00:00:00 UTC 2021", value = "The date the estimates are as of in YYYY-MM-DD format.")
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


  public SegmentsEstimate currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Currency used estimates in consensus calculations. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Currency used estimates in consensus calculations. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).")
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


  public SegmentsEstimate mean(Double mean) {
    this.mean = mean;
    return this;
  }

   /**
   * Mean of estimates in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)
   * @return mean
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "12345.01", value = "Mean of estimates in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)")
  @JsonProperty(JSON_PROPERTY_MEAN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getMean() {
    return mean;
  }


  @JsonProperty(JSON_PROPERTY_MEAN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMean(Double mean) {
    this.mean = mean;
  }


  public SegmentsEstimate median(Double median) {
    this.median = median;
    return this;
  }

   /**
   * Median of estimates in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)
   * @return median
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "12346.01", value = "Median of estimates in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)")
  @JsonProperty(JSON_PROPERTY_MEDIAN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getMedian() {
    return median;
  }


  @JsonProperty(JSON_PROPERTY_MEDIAN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMedian(Double median) {
    this.median = median;
  }


  public SegmentsEstimate standardDeviation(Double standardDeviation) {
    this.standardDeviation = standardDeviation;
    return this;
  }

   /**
   * Standard deviation of estimates in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)
   * @return standardDeviation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.011034", value = "Standard deviation of estimates in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)")
  @JsonProperty(JSON_PROPERTY_STANDARD_DEVIATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getStandardDeviation() {
    return standardDeviation;
  }


  @JsonProperty(JSON_PROPERTY_STANDARD_DEVIATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStandardDeviation(Double standardDeviation) {
    this.standardDeviation = standardDeviation;
  }


  public SegmentsEstimate high(Double high) {
    this.high = high;
    return this;
  }

   /**
   * Highest estimate in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114).
   * @return high
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "12349.01", value = "Highest estimate in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114).")
  @JsonProperty(JSON_PROPERTY_HIGH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getHigh() {
    return high;
  }


  @JsonProperty(JSON_PROPERTY_HIGH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHigh(Double high) {
    this.high = high;
  }


  public SegmentsEstimate low(Double low) {
    this.low = low;
    return this;
  }

   /**
   * Lowest estimate in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)
   * @return low
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "12344.01", value = "Lowest estimate in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)")
  @JsonProperty(JSON_PROPERTY_LOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getLow() {
    return low;
  }


  @JsonProperty(JSON_PROPERTY_LOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLow(Double low) {
    this.low = low;
  }


  public SegmentsEstimate estimateCount(Integer estimateCount) {
    this.estimateCount = estimateCount;
    return this;
  }

   /**
   * Count or NEST of estimates in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)
   * @return estimateCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "20", value = "Count or NEST of estimates in consensus calculation. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114)")
  @JsonProperty(JSON_PROPERTY_ESTIMATE_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getEstimateCount() {
    return estimateCount;
  }


  @JsonProperty(JSON_PROPERTY_ESTIMATE_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEstimateCount(Integer estimateCount) {
    this.estimateCount = estimateCount;
  }


  public SegmentsEstimate up(Integer up) {
    this.up = up;
    return this;
  }

   /**
   * Number of Up Revisions within the consensus for the metric and period. The default window size is 100 days For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114).
   * @return up
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "6", value = "Number of Up Revisions within the consensus for the metric and period. The default window size is 100 days For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114).")
  @JsonProperty(JSON_PROPERTY_UP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getUp() {
    return up;
  }


  @JsonProperty(JSON_PROPERTY_UP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUp(Integer up) {
    this.up = up;
  }


  public SegmentsEstimate down(Integer down) {
    this.down = down;
    return this;
  }

   /**
   * Number of Up Revisions within the consensus for the metric and period. The default window size is 100 days. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114).
   * @return down
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "4", value = "Number of Up Revisions within the consensus for the metric and period. The default window size is 100 days. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16114).")
  @JsonProperty(JSON_PROPERTY_DOWN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getDown() {
    return down;
  }


  @JsonProperty(JSON_PROPERTY_DOWN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDown(Integer down) {
    this.down = down;
  }


  /**
   * Return true if this segmentsEstimate object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SegmentsEstimate segmentsEstimate = (SegmentsEstimate) o;
    return Objects.equals(this.requestId, segmentsEstimate.requestId) &&
        Objects.equals(this.fsymId, segmentsEstimate.fsymId) &&
        Objects.equals(this.segmentType, segmentsEstimate.segmentType) &&
        Objects.equals(this.metric, segmentsEstimate.metric) &&
        Objects.equals(this.fiscalPeriod, segmentsEstimate.fiscalPeriod) &&
        Objects.equals(this.fiscalYear, segmentsEstimate.fiscalYear) &&
        Objects.equals(this.segmentLabel, segmentsEstimate.segmentLabel) &&
        Objects.equals(this.segmentLevel, segmentsEstimate.segmentLevel) &&
        Objects.equals(this.fiscalEndDate, segmentsEstimate.fiscalEndDate) &&
        Objects.equals(this.estimateDate, segmentsEstimate.estimateDate) &&
        Objects.equals(this.currency, segmentsEstimate.currency) &&
        Objects.equals(this.mean, segmentsEstimate.mean) &&
        Objects.equals(this.median, segmentsEstimate.median) &&
        Objects.equals(this.standardDeviation, segmentsEstimate.standardDeviation) &&
        Objects.equals(this.high, segmentsEstimate.high) &&
        Objects.equals(this.low, segmentsEstimate.low) &&
        Objects.equals(this.estimateCount, segmentsEstimate.estimateCount) &&
        Objects.equals(this.up, segmentsEstimate.up) &&
        Objects.equals(this.down, segmentsEstimate.down);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestId, fsymId, segmentType, metric, fiscalPeriod, fiscalYear, segmentLabel, segmentLevel, fiscalEndDate, estimateDate, currency, mean, median, standardDeviation, high, low, estimateCount, up, down);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SegmentsEstimate {\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    segmentType: ").append(toIndentedString(segmentType)).append("\n");
    sb.append("    metric: ").append(toIndentedString(metric)).append("\n");
    sb.append("    fiscalPeriod: ").append(toIndentedString(fiscalPeriod)).append("\n");
    sb.append("    fiscalYear: ").append(toIndentedString(fiscalYear)).append("\n");
    sb.append("    segmentLabel: ").append(toIndentedString(segmentLabel)).append("\n");
    sb.append("    segmentLevel: ").append(toIndentedString(segmentLevel)).append("\n");
    sb.append("    fiscalEndDate: ").append(toIndentedString(fiscalEndDate)).append("\n");
    sb.append("    estimateDate: ").append(toIndentedString(estimateDate)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    mean: ").append(toIndentedString(mean)).append("\n");
    sb.append("    median: ").append(toIndentedString(median)).append("\n");
    sb.append("    standardDeviation: ").append(toIndentedString(standardDeviation)).append("\n");
    sb.append("    high: ").append(toIndentedString(high)).append("\n");
    sb.append("    low: ").append(toIndentedString(low)).append("\n");
    sb.append("    estimateCount: ").append(toIndentedString(estimateCount)).append("\n");
    sb.append("    up: ").append(toIndentedString(up)).append("\n");
    sb.append("    down: ").append(toIndentedString(down)).append("\n");
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
