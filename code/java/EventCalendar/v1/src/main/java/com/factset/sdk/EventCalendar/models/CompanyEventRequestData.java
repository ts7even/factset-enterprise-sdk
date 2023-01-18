/*
 * Event Calendar API
 * Retrieves events for companies
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.EventCalendar.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.EventCalendar.models.CompanyEventRequestDataDate;
import com.factset.sdk.EventCalendar.models.CompanyEventRequestDataUniverse;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.EventCalendar.JSON;


/**
 * CompanyEventRequestData
 */
@JsonPropertyOrder({
  CompanyEventRequestData.JSON_PROPERTY_DATE,
  CompanyEventRequestData.JSON_PROPERTY_UNIVERSE,
  CompanyEventRequestData.JSON_PROPERTY_TYPES
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CompanyEventRequestData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DATE = "date";
  private CompanyEventRequestDataDate date;

  public static final String JSON_PROPERTY_UNIVERSE = "universe";
  private CompanyEventRequestDataUniverse universe;

  /**
   * Gets or Sets types
   */
  public enum TypesEnum {
    E("E"),
    
    SA("SA"),
    
    G("G"),
    
    AM("AM"),
    
    SM("SM"),
    
    SS("SS"),
    
    CP("CP"),
    
    CONFIRMEDER("confirmedER"),
    
    SR("SR"),
    
    PROJECTEDER("projectedER"),
    
    S("S"),
    
    D("D");

    private String value;

    TypesEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static TypesEnum fromValue(String value) {
      for (TypesEnum b : TypesEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_TYPES = "types";
  private java.util.List<TypesEnum> types = null;

  public CompanyEventRequestData() { 
  }

  public CompanyEventRequestData date(CompanyEventRequestDataDate date) {
    this.date = date;
    return this;
  }

   /**
   * Get date
   * @return date
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public CompanyEventRequestDataDate getDate() {
    return date;
  }


  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDate(CompanyEventRequestDataDate date) {
    this.date = date;
  }


  public CompanyEventRequestData universe(CompanyEventRequestDataUniverse universe) {
    this.universe = universe;
    return this;
  }

   /**
   * Get universe
   * @return universe
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_UNIVERSE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public CompanyEventRequestDataUniverse getUniverse() {
    return universe;
  }


  @JsonProperty(JSON_PROPERTY_UNIVERSE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUniverse(CompanyEventRequestDataUniverse universe) {
    this.universe = universe;
  }


  public CompanyEventRequestData types(java.util.List<TypesEnum> types) {
    this.types = types;
    return this;
  }

  public CompanyEventRequestData addTypesItem(TypesEnum typesItem) {
    if (this.types == null) {
      this.types = new java.util.ArrayList<>();
    }
    this.types.add(typesItem);
    return this;
  }

   /**
   * The type of events returned in the response
   * @return types
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The type of events returned in the response")
  @JsonProperty(JSON_PROPERTY_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<TypesEnum> getTypes() {
    return types;
  }


  @JsonProperty(JSON_PROPERTY_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTypes(java.util.List<TypesEnum> types) {
    this.types = types;
  }


  /**
   * Return true if this companyEventRequest_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CompanyEventRequestData companyEventRequestData = (CompanyEventRequestData) o;
    return Objects.equals(this.date, companyEventRequestData.date) &&
        Objects.equals(this.universe, companyEventRequestData.universe) &&
        Objects.equals(this.types, companyEventRequestData.types);
  }

  @Override
  public int hashCode() {
    return Objects.hash(date, universe, types);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CompanyEventRequestData {\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    universe: ").append(toIndentedString(universe)).append("\n");
    sb.append("    types: ").append(toIndentedString(types)).append("\n");
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

