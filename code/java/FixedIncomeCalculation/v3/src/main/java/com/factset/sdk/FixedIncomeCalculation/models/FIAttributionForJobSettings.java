/*
 * FI API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.11.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FixedIncomeCalculation.models;

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
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FixedIncomeCalculation.JSON;


/**
 * FIAttributionForJobSettings
 */
@JsonPropertyOrder({
  FIAttributionForJobSettings.JSON_PROPERTY_START_DATE,
  FIAttributionForJobSettings.JSON_PROPERTY_END_DATE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class FIAttributionForJobSettings implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_START_DATE = "startDate";
  private JsonNullable<String> startDate = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_END_DATE = "endDate";
  private JsonNullable<String> endDate = JsonNullable.<String>undefined();

  public FIAttributionForJobSettings() { 
  }

  public FIAttributionForJobSettings startDate(String startDate) {
    this.startDate = JsonNullable.<String>of(startDate);
    return this;
  }

   /**
   * Start Date
   * @return startDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Start Date")
  @JsonIgnore

  public String getStartDate() {
        return startDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getStartDate_JsonNullable() {
    return startDate;
  }
  
  @JsonProperty(JSON_PROPERTY_START_DATE)
  public void setStartDate_JsonNullable(JsonNullable<String> startDate) {
    this.startDate = startDate;
  }

  public void setStartDate(String startDate) {
    this.startDate = JsonNullable.<String>of(startDate);
  }


  public FIAttributionForJobSettings endDate(String endDate) {
    this.endDate = JsonNullable.<String>of(endDate);
    return this;
  }

   /**
   * End Date
   * @return endDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "End Date")
  @JsonIgnore

  public String getEndDate() {
        return endDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getEndDate_JsonNullable() {
    return endDate;
  }
  
  @JsonProperty(JSON_PROPERTY_END_DATE)
  public void setEndDate_JsonNullable(JsonNullable<String> endDate) {
    this.endDate = endDate;
  }

  public void setEndDate(String endDate) {
    this.endDate = JsonNullable.<String>of(endDate);
  }


  /**
   * Return true if this FIAttributionForJobSettings object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FIAttributionForJobSettings fiAttributionForJobSettings = (FIAttributionForJobSettings) o;
    return equalsNullable(this.startDate, fiAttributionForJobSettings.startDate) &&
        equalsNullable(this.endDate, fiAttributionForJobSettings.endDate);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(startDate), hashCodeNullable(endDate));
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FIAttributionForJobSettings {\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
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
