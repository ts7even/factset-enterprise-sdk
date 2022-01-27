/*
 * FactSet RIBCS
 * FactSet Revere Business Industry Classification System (RBICS) is a comprehensive structured taxonomy to classify companies by what they primarily do. It delivers a granular view for investors by classifying companies using a bottom-up approach according to the products and services they provide. By combining this approach with a top-level grouping based on companies' behavior similarities and stock co-movement, FactSet RBICS delivers unprecedented precision for 1,400+ sector groups.  RBICS Focus is a six level classification which highlights the companys main business. It is based on the company business line/s that stand for majority of a the revenue that the company generates. Updated monthly. For more details, visit [Online Assitant Page #20710](https://oa.apps.factset.com/pages/20710). 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetRBICS.models;

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
import com.factset.sdk.FactSetRBICS.JSON;


/**
 * Structure Request Body
 */
@ApiModel(description = "Structure Request Body")
@JsonPropertyOrder({
  StructureRequest.JSON_PROPERTY_RBICS_IDS,
  StructureRequest.JSON_PROPERTY_LEVEL,
  StructureRequest.JSON_PROPERTY_INCLUDE_NAMES,
  StructureRequest.JSON_PROPERTY_DATE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class StructureRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_RBICS_IDS = "rbicsIds";
  private java.util.List<String> rbicsIds = null;

  public static final String JSON_PROPERTY_LEVEL = "level";
  private Integer level;

  public static final String JSON_PROPERTY_INCLUDE_NAMES = "includeNames";
  private Boolean includeNames = true;

  public static final String JSON_PROPERTY_DATE = "date";
  private String date;


  public StructureRequest rbicsIds(java.util.List<String> rbicsIds) {
    this.rbicsIds = rbicsIds;
    return this;
  }

  public StructureRequest addRbicsIdsItem(String rbicsIdsItem) {
    if (this.rbicsIds == null) {
      this.rbicsIds = new java.util.ArrayList<>();
    }
    this.rbicsIds.add(rbicsIdsItem);
    return this;
  }

   /**
   * RBICS Taxonomy Id Filter. Use to lookup the structure details for the Id requested. 
   * @return rbicsIds
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"101010000000\",\"55\"]", value = "RBICS Taxonomy Id Filter. Use to lookup the structure details for the Id requested. ")
  @JsonProperty(JSON_PROPERTY_RBICS_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getRbicsIds() {
    return rbicsIds;
  }


  @JsonProperty(JSON_PROPERTY_RBICS_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRbicsIds(java.util.List<String> rbicsIds) {
    this.rbicsIds = rbicsIds;
  }


  public StructureRequest level(Integer level) {
    this.level = level;
    return this;
  }

   /**
   * RBICS industry levels to include in the response. All levels from 1-N will be returned. For example, &#39;3&#39; returns all levels 1,2 and 3. To request all levels, request level&#x3D;6. Level 1 is returned by default.   |Level|Description|Number of Groups|   |---|---|---|   |1|Economomy|14|   |2|Sector|37   |3|Sub-Sector|109|   |4|Industry Group|366|   |5|Inudstry|901|   |6|Sub-Industry|1629| 
   * minimum: 1
   * maximum: 6
   * @return level
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "3", value = "RBICS industry levels to include in the response. All levels from 1-N will be returned. For example, '3' returns all levels 1,2 and 3. To request all levels, request level=6. Level 1 is returned by default.   |Level|Description|Number of Groups|   |---|---|---|   |1|Economomy|14|   |2|Sector|37   |3|Sub-Sector|109|   |4|Industry Group|366|   |5|Inudstry|901|   |6|Sub-Industry|1629| ")
  @JsonProperty(JSON_PROPERTY_LEVEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getLevel() {
    return level;
  }


  @JsonProperty(JSON_PROPERTY_LEVEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLevel(Integer level) {
    this.level = level;
  }


  public StructureRequest includeNames(Boolean includeNames) {
    this.includeNames = includeNames;
    return this;
  }

   /**
   * Option to include or exclude industry Names and the L6 Description. True &#x3D; Include Names; False &#x3D; Exclude Names. 
   * @return includeNames
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "Option to include or exclude industry Names and the L6 Description. True = Include Names; False = Exclude Names. ")
  @JsonProperty(JSON_PROPERTY_INCLUDE_NAMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIncludeNames() {
    return includeNames;
  }


  @JsonProperty(JSON_PROPERTY_INCLUDE_NAMES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIncludeNames(Boolean includeNames) {
    this.includeNames = includeNames;
  }


  public StructureRequest date(String date) {
    this.date = date;
    return this;
  }

   /**
   * Effective date for data expressed in YYYY-MM-DD format. If no date is requested, the default behavior is to return the full history for the requested entity. 
   * @return date
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2020-09-30", value = "Effective date for data expressed in YYYY-MM-DD format. If no date is requested, the default behavior is to return the full history for the requested entity. ")
  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDate() {
    return date;
  }


  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDate(String date) {
    this.date = date;
  }


  /**
   * Return true if this structureRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StructureRequest structureRequest = (StructureRequest) o;
    return Objects.equals(this.rbicsIds, structureRequest.rbicsIds) &&
        Objects.equals(this.level, structureRequest.level) &&
        Objects.equals(this.includeNames, structureRequest.includeNames) &&
        Objects.equals(this.date, structureRequest.date);
  }

  @Override
  public int hashCode() {
    return Objects.hash(rbicsIds, level, includeNames, date);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StructureRequest {\n");
    sb.append("    rbicsIds: ").append(toIndentedString(rbicsIds)).append("\n");
    sb.append("    level: ").append(toIndentedString(level)).append("\n");
    sb.append("    includeNames: ").append(toIndentedString(includeNames)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
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
