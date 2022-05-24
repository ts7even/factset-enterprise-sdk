/*
 * Stocks API For Digital Portals
 * The stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts: Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with potentially daily updates).  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the Bonds API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.StocksAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2009Notation;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2009Status;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * InlineResponse2009Data
 */
@JsonPropertyOrder({
  InlineResponse2009Data.JSON_PROPERTY_NOTATION,
  InlineResponse2009Data.JSON_PROPERTY_BETA,
  InlineResponse2009Data.JSON_PROPERTY_CORRELATION,
  InlineResponse2009Data.JSON_PROPERTY_OUTPERFORMANCE,
  InlineResponse2009Data.JSON_PROPERTY_STATUS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2009Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NOTATION = "notation";
  private InlineResponse2009Notation notation;

  public static final String JSON_PROPERTY_BETA = "beta";
  private BigDecimal beta;

  public static final String JSON_PROPERTY_CORRELATION = "correlation";
  private BigDecimal correlation;

  public static final String JSON_PROPERTY_OUTPERFORMANCE = "outperformance";
  private BigDecimal outperformance;

  public static final String JSON_PROPERTY_STATUS = "status";
  private InlineResponse2009Status status;

  public InlineResponse2009Data() { 
  }

  public InlineResponse2009Data notation(InlineResponse2009Notation notation) {
    this.notation = notation;
    return this;
  }

   /**
   * Get notation
   * @return notation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NOTATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2009Notation getNotation() {
    return notation;
  }


  @JsonProperty(JSON_PROPERTY_NOTATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNotation(InlineResponse2009Notation notation) {
    this.notation = notation;
  }


  public InlineResponse2009Data beta(BigDecimal beta) {
    this.beta = beta;
    return this;
  }

   /**
   * Beta of the notation.
   * @return beta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Beta of the notation.")
  @JsonProperty(JSON_PROPERTY_BETA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getBeta() {
    return beta;
  }


  @JsonProperty(JSON_PROPERTY_BETA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBeta(BigDecimal beta) {
    this.beta = beta;
  }


  public InlineResponse2009Data correlation(BigDecimal correlation) {
    this.correlation = correlation;
    return this;
  }

   /**
   * Correlation of the notation.
   * @return correlation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Correlation of the notation.")
  @JsonProperty(JSON_PROPERTY_CORRELATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getCorrelation() {
    return correlation;
  }


  @JsonProperty(JSON_PROPERTY_CORRELATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCorrelation(BigDecimal correlation) {
    this.correlation = correlation;
  }


  public InlineResponse2009Data outperformance(BigDecimal outperformance) {
    this.outperformance = outperformance;
    return this;
  }

   /**
   * Outperformance of the notation.
   * @return outperformance
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Outperformance of the notation.")
  @JsonProperty(JSON_PROPERTY_OUTPERFORMANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getOutperformance() {
    return outperformance;
  }


  @JsonProperty(JSON_PROPERTY_OUTPERFORMANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOutperformance(BigDecimal outperformance) {
    this.outperformance = outperformance;
  }


  public InlineResponse2009Data status(InlineResponse2009Status status) {
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

  public InlineResponse2009Status getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStatus(InlineResponse2009Status status) {
    this.status = status;
  }


  /**
   * Return true if this inline_response_200_9_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2009Data inlineResponse2009Data = (InlineResponse2009Data) o;
    return Objects.equals(this.notation, inlineResponse2009Data.notation) &&
        Objects.equals(this.beta, inlineResponse2009Data.beta) &&
        Objects.equals(this.correlation, inlineResponse2009Data.correlation) &&
        Objects.equals(this.outperformance, inlineResponse2009Data.outperformance) &&
        Objects.equals(this.status, inlineResponse2009Data.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(notation, beta, correlation, outperformance, status);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2009Data {\n");
    sb.append("    notation: ").append(toIndentedString(notation)).append("\n");
    sb.append("    beta: ").append(toIndentedString(beta)).append("\n");
    sb.append("    correlation: ").append(toIndentedString(correlation)).append("\n");
    sb.append("    outperformance: ").append(toIndentedString(outperformance)).append("\n");
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
