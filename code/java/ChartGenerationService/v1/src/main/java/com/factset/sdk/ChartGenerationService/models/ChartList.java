/*
 * Chart Generation Service
 * This is a service for generating charts in a node environment that were created using web charting and get back images in form of `PNGs` and `JPEGs` as response.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.ChartGenerationService.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.ChartGenerationService.models.ChartInput;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.ChartGenerationService.JSON;


/**
 * ChartList
 */
@JsonPropertyOrder({
  ChartList.JSON_PROPERTY_NAME,
  ChartList.JSON_PROPERTY_DESCRIPTION,
  ChartList.JSON_PROPERTY_TAGS,
  ChartList.JSON_PROPERTY_INPUTS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ChartList implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_TAGS = "tags";
  private java.util.List<String> tags = null;

  public static final String JSON_PROPERTY_INPUTS = "inputs";
  private java.util.List<ChartInput> inputs = null;


  public ChartList name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the chart
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "RSI", value = "Name of the chart")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public ChartList description(String description) {
    this.description = description;
    return this;
  }

   /**
   * A short description about the chart and its contents
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "This chart requires a ticker", value = "A short description about the chart and its contents")
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


  public ChartList tags(java.util.List<String> tags) {
    this.tags = tags;
    return this;
  }

  public ChartList addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new java.util.ArrayList<>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * A list of tags to classify the chart. This is being done so that users can easily group them if required.
   * @return tags
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"price\",\"intraday\"]", value = "A list of tags to classify the chart. This is being done so that users can easily group them if required.")
  @JsonProperty(JSON_PROPERTY_TAGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getTags() {
    return tags;
  }


  @JsonProperty(JSON_PROPERTY_TAGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTags(java.util.List<String> tags) {
    this.tags = tags;
  }


  public ChartList inputs(java.util.List<ChartInput> inputs) {
    this.inputs = inputs;
    return this;
  }

  public ChartList addInputsItem(ChartInput inputsItem) {
    if (this.inputs == null) {
      this.inputs = new java.util.ArrayList<>();
    }
    this.inputs.add(inputsItem);
    return this;
  }

   /**
   * List of additional inputs for the chart
   * @return inputs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of additional inputs for the chart")
  @JsonProperty(JSON_PROPERTY_INPUTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<ChartInput> getInputs() {
    return inputs;
  }


  @JsonProperty(JSON_PROPERTY_INPUTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInputs(java.util.List<ChartInput> inputs) {
    this.inputs = inputs;
  }


  /**
   * Return true if this ChartList object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ChartList chartList = (ChartList) o;
    return Objects.equals(this.name, chartList.name) &&
        Objects.equals(this.description, chartList.description) &&
        Objects.equals(this.tags, chartList.tags) &&
        Objects.equals(this.inputs, chartList.inputs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, description, tags, inputs);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ChartList {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    inputs: ").append(toIndentedString(inputs)).append("\n");
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
