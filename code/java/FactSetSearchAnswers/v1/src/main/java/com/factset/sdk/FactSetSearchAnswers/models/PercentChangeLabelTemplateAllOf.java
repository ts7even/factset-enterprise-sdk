/*
 * FactSet Search Answers API
 * The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: FactSearch.Team@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetSearchAnswers.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FactSetSearchAnswers.models.PercentChange;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetSearchAnswers.JSON;


/**
 * PercentChangeLabelTemplateAllOf
 */
@JsonPropertyOrder({
  PercentChangeLabelTemplateAllOf.JSON_PROPERTY_PERCENT_CHANGE,
  PercentChangeLabelTemplateAllOf.JSON_PROPERTY_LABEL
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class PercentChangeLabelTemplateAllOf implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_PERCENT_CHANGE = "percentChange";
  private PercentChange percentChange;

  public static final String JSON_PROPERTY_LABEL = "label";
  private String label;


  public PercentChangeLabelTemplateAllOf percentChange(PercentChange percentChange) {
    this.percentChange = percentChange;
    return this;
  }

   /**
   * Get percentChange
   * @return percentChange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PERCENT_CHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public PercentChange getPercentChange() {
    return percentChange;
  }


  @JsonProperty(JSON_PROPERTY_PERCENT_CHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPercentChange(PercentChange percentChange) {
    this.percentChange = percentChange;
  }


  public PercentChangeLabelTemplateAllOf label(String label) {
    this.label = label;
    return this;
  }

   /**
   * Get label
   * @return label
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLabel(String label) {
    this.label = label;
  }


  /**
   * Return true if this PercentChangeLabelTemplate_allOf object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PercentChangeLabelTemplateAllOf percentChangeLabelTemplateAllOf = (PercentChangeLabelTemplateAllOf) o;
    return Objects.equals(this.percentChange, percentChangeLabelTemplateAllOf.percentChange) &&
        Objects.equals(this.label, percentChangeLabelTemplateAllOf.label);
  }

  @Override
  public int hashCode() {
    return Objects.hash(percentChange, label);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PercentChangeLabelTemplateAllOf {\n");
    sb.append("    percentChange: ").append(toIndentedString(percentChange)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
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

