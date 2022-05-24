/*
 * FactSet Overview Report Builder API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OverviewReportBuilder.models;

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
import java.math.BigDecimal;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OverviewReportBuilder.JSON;


/**
 * ProfileDataStageCrunchbaseRank
 */
@JsonPropertyOrder({
  ProfileDataStageCrunchbaseRank.JSON_PROPERTY_VALUE,
  ProfileDataStageCrunchbaseRank.JSON_PROPERTY_NOTE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ProfileDataStageCrunchbaseRank implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_VALUE = "value";
  private BigDecimal value;

  public static final String JSON_PROPERTY_NOTE = "note";
  private String note;

  public ProfileDataStageCrunchbaseRank() { 
  }

  @JsonCreator
  public ProfileDataStageCrunchbaseRank(
    @JsonProperty(value=JSON_PROPERTY_VALUE, required=true) BigDecimal value, 
    @JsonProperty(value=JSON_PROPERTY_NOTE, required=true) String note
  ) {
    this();
    this.value = value;
    this.note = note;
  }

  public ProfileDataStageCrunchbaseRank value(BigDecimal value) {
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public BigDecimal getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setValue(BigDecimal value) {
    this.value = value;
  }


  public ProfileDataStageCrunchbaseRank note(String note) {
    this.note = note;
    return this;
  }

   /**
   * Get note
   * @return note
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_NOTE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getNote() {
    return note;
  }


  @JsonProperty(JSON_PROPERTY_NOTE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setNote(String note) {
    this.note = note;
  }


  /**
   * Return true if this ProfileData_stage_crunchbaseRank object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProfileDataStageCrunchbaseRank profileDataStageCrunchbaseRank = (ProfileDataStageCrunchbaseRank) o;
    return Objects.equals(this.value, profileDataStageCrunchbaseRank.value) &&
        Objects.equals(this.note, profileDataStageCrunchbaseRank.note);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, note);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProfileDataStageCrunchbaseRank {\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    note: ").append(toIndentedString(note)).append("\n");
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
