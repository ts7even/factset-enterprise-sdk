/*
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.IRNCustomSymbols.models;

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
import com.factset.sdk.IRNCustomSymbols.JSON;


/**
 * CustomSymbolContact
 */
@JsonPropertyOrder({
  CustomSymbolContact.JSON_PROPERTY_ID,
  CustomSymbolContact.JSON_PROPERTY_NAME,
  CustomSymbolContact.JSON_PROPERTY_EMPLOYER_NAME,
  CustomSymbolContact.JSON_PROPERTY_ROLE_NAME,
  CustomSymbolContact.JSON_PROPERTY_IS_DELETED,
  CustomSymbolContact.JSON_PROPERTY_IRN_PERSON_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CustomSymbolContact implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private java.util.UUID id;

  public static final String JSON_PROPERTY_NAME = "name";
  private JsonNullable<String> name = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_EMPLOYER_NAME = "employerName";
  private JsonNullable<String> employerName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_ROLE_NAME = "roleName";
  private JsonNullable<String> roleName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_IS_DELETED = "isDeleted";
  private Boolean isDeleted;

  public static final String JSON_PROPERTY_IRN_PERSON_ID = "irnPersonId";
  private JsonNullable<String> irnPersonId = JsonNullable.<String>undefined();

  public CustomSymbolContact() { 
  }

  public CustomSymbolContact id(java.util.UUID id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.UUID getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(java.util.UUID id) {
    this.id = id;
  }


  public CustomSymbolContact name(String name) {
    this.name = JsonNullable.<String>of(name);
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getName() {
        return name.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getName_JsonNullable() {
    return name;
  }
  
  @JsonProperty(JSON_PROPERTY_NAME)
  public void setName_JsonNullable(JsonNullable<String> name) {
    this.name = name;
  }

  public void setName(String name) {
    this.name = JsonNullable.<String>of(name);
  }


  public CustomSymbolContact employerName(String employerName) {
    this.employerName = JsonNullable.<String>of(employerName);
    return this;
  }

   /**
   * Get employerName
   * @return employerName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getEmployerName() {
        return employerName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_EMPLOYER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getEmployerName_JsonNullable() {
    return employerName;
  }
  
  @JsonProperty(JSON_PROPERTY_EMPLOYER_NAME)
  public void setEmployerName_JsonNullable(JsonNullable<String> employerName) {
    this.employerName = employerName;
  }

  public void setEmployerName(String employerName) {
    this.employerName = JsonNullable.<String>of(employerName);
  }


  public CustomSymbolContact roleName(String roleName) {
    this.roleName = JsonNullable.<String>of(roleName);
    return this;
  }

   /**
   * Get roleName
   * @return roleName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getRoleName() {
        return roleName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_ROLE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getRoleName_JsonNullable() {
    return roleName;
  }
  
  @JsonProperty(JSON_PROPERTY_ROLE_NAME)
  public void setRoleName_JsonNullable(JsonNullable<String> roleName) {
    this.roleName = roleName;
  }

  public void setRoleName(String roleName) {
    this.roleName = JsonNullable.<String>of(roleName);
  }


  public CustomSymbolContact isDeleted(Boolean isDeleted) {
    this.isDeleted = isDeleted;
    return this;
  }

   /**
   * Get isDeleted
   * @return isDeleted
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_IS_DELETED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIsDeleted() {
    return isDeleted;
  }


  @JsonProperty(JSON_PROPERTY_IS_DELETED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsDeleted(Boolean isDeleted) {
    this.isDeleted = isDeleted;
  }


  public CustomSymbolContact irnPersonId(String irnPersonId) {
    this.irnPersonId = JsonNullable.<String>of(irnPersonId);
    return this;
  }

   /**
   * Get irnPersonId
   * @return irnPersonId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getIrnPersonId() {
        return irnPersonId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_IRN_PERSON_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getIrnPersonId_JsonNullable() {
    return irnPersonId;
  }
  
  @JsonProperty(JSON_PROPERTY_IRN_PERSON_ID)
  public void setIrnPersonId_JsonNullable(JsonNullable<String> irnPersonId) {
    this.irnPersonId = irnPersonId;
  }

  public void setIrnPersonId(String irnPersonId) {
    this.irnPersonId = JsonNullable.<String>of(irnPersonId);
  }


  /**
   * Return true if this CustomSymbolContact object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CustomSymbolContact customSymbolContact = (CustomSymbolContact) o;
    return Objects.equals(this.id, customSymbolContact.id) &&
        equalsNullable(this.name, customSymbolContact.name) &&
        equalsNullable(this.employerName, customSymbolContact.employerName) &&
        equalsNullable(this.roleName, customSymbolContact.roleName) &&
        Objects.equals(this.isDeleted, customSymbolContact.isDeleted) &&
        equalsNullable(this.irnPersonId, customSymbolContact.irnPersonId);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, hashCodeNullable(name), hashCodeNullable(employerName), hashCodeNullable(roleName), isDeleted, hashCodeNullable(irnPersonId));
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
    sb.append("class CustomSymbolContact {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    employerName: ").append(toIndentedString(employerName)).append("\n");
    sb.append("    roleName: ").append(toIndentedString(roleName)).append("\n");
    sb.append("    isDeleted: ").append(toIndentedString(isDeleted)).append("\n");
    sb.append("    irnPersonId: ").append(toIndentedString(irnPersonId)).append("\n");
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

