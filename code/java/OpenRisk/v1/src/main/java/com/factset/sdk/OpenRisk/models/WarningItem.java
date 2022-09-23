/*
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OpenRisk.models;

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
import com.factset.sdk.OpenRisk.JSON;


/**
 * Warning information for a particular occurrence of a non-failure problem with human-readable details describing the cause
 */
@ApiModel(description = "Warning information for a particular occurrence of a non-failure problem with human-readable details describing the cause")
@JsonPropertyOrder({
  WarningItem.JSON_PROPERTY_ID,
  WarningItem.JSON_PROPERTY_CODE,
  WarningItem.JSON_PROPERTY_TITLE,
  WarningItem.JSON_PROPERTY_DETAIL
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class WarningItem implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_CODE = "code";
  private String code;

  public static final String JSON_PROPERTY_TITLE = "title";
  private String title;

  public static final String JSON_PROPERTY_DETAIL = "detail";
  private String detail;

  public WarningItem() { 
  }

  @JsonCreator
  public WarningItem(
    @JsonProperty(value=JSON_PROPERTY_ID, required=true) String id, 
    @JsonProperty(value=JSON_PROPERTY_CODE, required=true) String code, 
    @JsonProperty(value=JSON_PROPERTY_TITLE, required=true) String title
  ) {
    this();
    this.id = id;
    this.code = code;
    this.title = title;
  }

  public WarningItem id(String id) {
    this.id = id;
    return this;
  }

   /**
   * UUID for the particular occurrence of the non-failure problem
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "UUID for the particular occurrence of the non-failure problem")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setId(String id) {
    this.id = id;
  }


  public WarningItem code(String code) {
    this.code = code;
    return this;
  }

   /**
   * Warning code for the non-failure problem type
   * @return code
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "requestBodyExtraData", required = true, value = "Warning code for the non-failure problem type")
  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getCode() {
    return code;
  }


  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCode(String code) {
    this.code = code;
  }


  public WarningItem title(String title) {
    this.title = title;
    return this;
  }

   /**
   * Human-readable summary of the non-failure problem tied to the warning code and not specific to the particular occurrence of the problem
   * @return title
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Factor grouping contains extra factor(s).", required = true, value = "Human-readable summary of the non-failure problem tied to the warning code and not specific to the particular occurrence of the problem")
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTitle(String title) {
    this.title = title;
  }


  public WarningItem detail(String detail) {
    this.detail = detail;
    return this;
  }

   /**
   * Human-readable explanation of the non-failure problem specific to the particular occurrence
   * @return detail
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Extra Factors: [*EF2, *EF1, *EF3]", value = "Human-readable explanation of the non-failure problem specific to the particular occurrence")
  @JsonProperty(JSON_PROPERTY_DETAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDetail() {
    return detail;
  }


  @JsonProperty(JSON_PROPERTY_DETAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDetail(String detail) {
    this.detail = detail;
  }


  /**
   * Return true if this WarningItem object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WarningItem warningItem = (WarningItem) o;
    return Objects.equals(this.id, warningItem.id) &&
        Objects.equals(this.code, warningItem.code) &&
        Objects.equals(this.title, warningItem.title) &&
        Objects.equals(this.detail, warningItem.detail);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, code, title, detail);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WarningItem {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    detail: ").append(toIndentedString(detail)).append("\n");
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
