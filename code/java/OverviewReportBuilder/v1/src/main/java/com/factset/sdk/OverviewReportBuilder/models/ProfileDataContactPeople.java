/*
 * FactSet Overview Report Builder API
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
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
import com.factset.sdk.OverviewReportBuilder.models.ProfileDataBusinessIndustry;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OverviewReportBuilder.JSON;


/**
 * ProfileDataContactPeople
 */
@JsonPropertyOrder({
  ProfileDataContactPeople.JSON_PROPERTY_TITLE,
  ProfileDataContactPeople.JSON_PROPERTY_NAME,
  ProfileDataContactPeople.JSON_PROPERTY_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ProfileDataContactPeople implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TITLE = "title";
  private ProfileDataBusinessIndustry title;

  public static final String JSON_PROPERTY_NAME = "name";
  private ProfileDataBusinessIndustry name;

  public static final String JSON_PROPERTY_ID = "id";
  private ProfileDataBusinessIndustry id;

  public ProfileDataContactPeople() { 
  }

  @JsonCreator
  public ProfileDataContactPeople(
    @JsonProperty(value=JSON_PROPERTY_TITLE, required=true) ProfileDataBusinessIndustry title, 
    @JsonProperty(value=JSON_PROPERTY_NAME, required=true) ProfileDataBusinessIndustry name, 
    @JsonProperty(value=JSON_PROPERTY_ID, required=true) ProfileDataBusinessIndustry id
  ) {
    this();
    this.title = title;
    this.name = name;
    this.id = id;
  }

  public ProfileDataContactPeople title(ProfileDataBusinessIndustry title) {
    this.title = title;
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ProfileDataBusinessIndustry getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTitle(ProfileDataBusinessIndustry title) {
    this.title = title;
  }


  public ProfileDataContactPeople name(ProfileDataBusinessIndustry name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ProfileDataBusinessIndustry getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(ProfileDataBusinessIndustry name) {
    this.name = name;
  }


  public ProfileDataContactPeople id(ProfileDataBusinessIndustry id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ProfileDataBusinessIndustry getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setId(ProfileDataBusinessIndustry id) {
    this.id = id;
  }


  /**
   * Return true if this ProfileData_contact_people object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProfileDataContactPeople profileDataContactPeople = (ProfileDataContactPeople) o;
    return Objects.equals(this.title, profileDataContactPeople.title) &&
        Objects.equals(this.name, profileDataContactPeople.name) &&
        Objects.equals(this.id, profileDataContactPeople.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(title, name, id);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProfileDataContactPeople {\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
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

