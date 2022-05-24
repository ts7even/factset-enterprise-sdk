/*
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.ETFProfileandPrices.models;

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
import com.factset.sdk.ETFProfileandPrices.JSON;


/**
 * Strategy.
 */
@ApiModel(description = "Strategy.")
@JsonPropertyOrder({
  InlineResponse20029Data.JSON_PROPERTY_DESCRIPTION,
  InlineResponse20029Data.JSON_PROPERTY_GROUP,
  InlineResponse20029Data.JSON_PROPERTY_CLUSTER,
  InlineResponse20029Data.JSON_PROPERTY_SELECT_CRITERIA,
  InlineResponse20029Data.JSON_PROPERTY_WEIGHTING,
  InlineResponse20029Data.JSON_PROPERTY_SEGMENT,
  InlineResponse20029Data.JSON_PROPERTY_IS_TRANSPARENT,
  InlineResponse20029Data.JSON_PROPERTY_FUND_OF_FUNDS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20029Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_GROUP = "group";
  private String group;

  public static final String JSON_PROPERTY_CLUSTER = "cluster";
  private String cluster;

  public static final String JSON_PROPERTY_SELECT_CRITERIA = "selectCriteria";
  private String selectCriteria;

  public static final String JSON_PROPERTY_WEIGHTING = "weighting";
  private String weighting;

  public static final String JSON_PROPERTY_SEGMENT = "segment";
  private String segment;

  public static final String JSON_PROPERTY_IS_TRANSPARENT = "isTransparent";
  private Boolean isTransparent;

  public static final String JSON_PROPERTY_FUND_OF_FUNDS = "fundOfFunds";
  private String fundOfFunds;

  public InlineResponse20029Data() { 
  }

  public InlineResponse20029Data description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Descriptive Summary of the methods used by a ETP or its index in selection and weighting of its holdings, text and standardized value available. This data is available for the US and Canada regions.
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Descriptive Summary of the methods used by a ETP or its index in selection and weighting of its holdings, text and standardized value available. This data is available for the US and Canada regions.")
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


  public InlineResponse20029Data group(String group) {
    this.group = group;
    return this;
  }

   /**
   * Factset&#39;s strategy group is the broadest way sort ETPs with a similar investment strategy. This data is available for the US and Canada regions.
   * @return group
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Factset's strategy group is the broadest way sort ETPs with a similar investment strategy. This data is available for the US and Canada regions.")
  @JsonProperty(JSON_PROPERTY_GROUP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getGroup() {
    return group;
  }


  @JsonProperty(JSON_PROPERTY_GROUP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGroup(String group) {
    this.group = group;
  }


  public InlineResponse20029Data cluster(String cluster) {
    this.cluster = cluster;
    return this;
  }

   /**
   * Factset&#39;s strategy cluster is a collection of ETPs with a similar investment strategy, yet smaller than strategy group. This data item is more granular and narrow than the strategy group yet bigger than strategy group. This data is available for the US and Canada regions.
   * @return cluster
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Factset's strategy cluster is a collection of ETPs with a similar investment strategy, yet smaller than strategy group. This data item is more granular and narrow than the strategy group yet bigger than strategy group. This data is available for the US and Canada regions.")
  @JsonProperty(JSON_PROPERTY_CLUSTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCluster() {
    return cluster;
  }


  @JsonProperty(JSON_PROPERTY_CLUSTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCluster(String cluster) {
    this.cluster = cluster;
  }


  public InlineResponse20029Data selectCriteria(String selectCriteria) {
    this.selectCriteria = selectCriteria;
    return this;
  }

   /**
   * Description of the security selection criteria used by the ETP or its index (e.g., Market Cap, Earnings, Dividends), text and standardized value available. This data is available for all the regions.
   * @return selectCriteria
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Description of the security selection criteria used by the ETP or its index (e.g., Market Cap, Earnings, Dividends), text and standardized value available. This data is available for all the regions.")
  @JsonProperty(JSON_PROPERTY_SELECT_CRITERIA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSelectCriteria() {
    return selectCriteria;
  }


  @JsonProperty(JSON_PROPERTY_SELECT_CRITERIA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSelectCriteria(String selectCriteria) {
    this.selectCriteria = selectCriteria;
  }


  public InlineResponse20029Data weighting(String weighting) {
    this.weighting = weighting;
    return this;
  }

   /**
   * Text that specifies the weighting selection criteria used by the ETP or its index (e.g., Market Cap, Equal, Momentum, Fundamental) , text and standardized value available. This data is available for all the regions.
   * @return weighting
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Text that specifies the weighting selection criteria used by the ETP or its index (e.g., Market Cap, Equal, Momentum, Fundamental) , text and standardized value available. This data is available for all the regions.")
  @JsonProperty(JSON_PROPERTY_WEIGHTING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getWeighting() {
    return weighting;
  }


  @JsonProperty(JSON_PROPERTY_WEIGHTING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWeighting(String weighting) {
    this.weighting = weighting;
  }


  public InlineResponse20029Data segment(String segment) {
    this.segment = segment;
    return this;
  }

   /**
   * Determines the unique segment the ETP falls into, based on FactSet ETP Analytics rules-based classification system determined by geography, category, focus, and niche. Text and standardized value available for this data item. This data is available for the US regions. See endpoint /factset/etf/strategy/segment/list for possible values.
   * @return segment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Determines the unique segment the ETP falls into, based on FactSet ETP Analytics rules-based classification system determined by geography, category, focus, and niche. Text and standardized value available for this data item. This data is available for the US regions. See endpoint /factset/etf/strategy/segment/list for possible values.")
  @JsonProperty(JSON_PROPERTY_SEGMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSegment() {
    return segment;
  }


  @JsonProperty(JSON_PROPERTY_SEGMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSegment(String segment) {
    this.segment = segment;
  }


  public InlineResponse20029Data isTransparent(Boolean isTransparent) {
    this.isTransparent = isTransparent;
    return this;
  }

   /**
   * Description that States whether or not the methodology behind the underlying index can be clearly understood from offering documents. This data is available for the US and Canada regions.
   * @return isTransparent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Description that States whether or not the methodology behind the underlying index can be clearly understood from offering documents. This data is available for the US and Canada regions.")
  @JsonProperty(JSON_PROPERTY_IS_TRANSPARENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIsTransparent() {
    return isTransparent;
  }


  @JsonProperty(JSON_PROPERTY_IS_TRANSPARENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsTransparent(Boolean isTransparent) {
    this.isTransparent = isTransparent;
  }


  public InlineResponse20029Data fundOfFunds(String fundOfFunds) {
    this.fundOfFunds = fundOfFunds;
    return this;
  }

   /**
   * Description of the ETP that holds a portfolio of other ETPs. This data is available for the Canada regions.
   * @return fundOfFunds
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Description of the ETP that holds a portfolio of other ETPs. This data is available for the Canada regions.")
  @JsonProperty(JSON_PROPERTY_FUND_OF_FUNDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFundOfFunds() {
    return fundOfFunds;
  }


  @JsonProperty(JSON_PROPERTY_FUND_OF_FUNDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFundOfFunds(String fundOfFunds) {
    this.fundOfFunds = fundOfFunds;
  }


  /**
   * Return true if this inline_response_200_29_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20029Data inlineResponse20029Data = (InlineResponse20029Data) o;
    return Objects.equals(this.description, inlineResponse20029Data.description) &&
        Objects.equals(this.group, inlineResponse20029Data.group) &&
        Objects.equals(this.cluster, inlineResponse20029Data.cluster) &&
        Objects.equals(this.selectCriteria, inlineResponse20029Data.selectCriteria) &&
        Objects.equals(this.weighting, inlineResponse20029Data.weighting) &&
        Objects.equals(this.segment, inlineResponse20029Data.segment) &&
        Objects.equals(this.isTransparent, inlineResponse20029Data.isTransparent) &&
        Objects.equals(this.fundOfFunds, inlineResponse20029Data.fundOfFunds);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, group, cluster, selectCriteria, weighting, segment, isTransparent, fundOfFunds);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20029Data {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    group: ").append(toIndentedString(group)).append("\n");
    sb.append("    cluster: ").append(toIndentedString(cluster)).append("\n");
    sb.append("    selectCriteria: ").append(toIndentedString(selectCriteria)).append("\n");
    sb.append("    weighting: ").append(toIndentedString(weighting)).append("\n");
    sb.append("    segment: ").append(toIndentedString(segment)).append("\n");
    sb.append("    isTransparent: ").append(toIndentedString(isTransparent)).append("\n");
    sb.append("    fundOfFunds: ").append(toIndentedString(fundOfFunds)).append("\n");
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
