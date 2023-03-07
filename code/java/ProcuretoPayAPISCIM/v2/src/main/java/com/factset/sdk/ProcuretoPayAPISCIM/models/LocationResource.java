/*
 * FactSet SCIM API
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.ProcuretoPayAPISCIM.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.ProcuretoPayAPISCIM.models.LocationResourceMeta;
import com.factset.sdk.ProcuretoPayAPISCIM.models.LocationResourceReference;
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
import com.factset.sdk.ProcuretoPayAPISCIM.JSON;


/**
 * LocationResource
 */
@JsonPropertyOrder({
  LocationResource.JSON_PROPERTY_SCHEMAS,
  LocationResource.JSON_PROPERTY_ID,
  LocationResource.JSON_PROPERTY_EXTERNAL_ID,
  LocationResource.JSON_PROPERTY_NAME,
  LocationResource.JSON_PROPERTY_DESCRIPTION,
  LocationResource.JSON_PROPERTY_ADDRESS1,
  LocationResource.JSON_PROPERTY_ADDRESS2,
  LocationResource.JSON_PROPERTY_ADDRESS3,
  LocationResource.JSON_PROPERTY_LOCALITY,
  LocationResource.JSON_PROPERTY_REGION,
  LocationResource.JSON_PROPERTY_POSTAL_CODE,
  LocationResource.JSON_PROPERTY_COUNTRY,
  LocationResource.JSON_PROPERTY_PHONE_NUMBER,
  LocationResource.JSON_PROPERTY_MAIN_LOCATION,
  LocationResource.JSON_PROPERTY_META
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class LocationResource implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SCHEMAS = "schemas";
  private java.util.List<String> schemas = null;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_EXTERNAL_ID = "externalId";
  private String externalId;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_ADDRESS1 = "address1";
  private String address1;

  public static final String JSON_PROPERTY_ADDRESS2 = "address2";
  private String address2;

  public static final String JSON_PROPERTY_ADDRESS3 = "address3";
  private String address3;

  public static final String JSON_PROPERTY_LOCALITY = "locality";
  private String locality;

  public static final String JSON_PROPERTY_REGION = "region";
  private String region;

  public static final String JSON_PROPERTY_POSTAL_CODE = "postalCode";
  private String postalCode;

  public static final String JSON_PROPERTY_COUNTRY = "country";
  private String country;

  public static final String JSON_PROPERTY_PHONE_NUMBER = "phoneNumber";
  private String phoneNumber;

  public static final String JSON_PROPERTY_MAIN_LOCATION = "mainLocation";
  private JsonNullable<LocationResourceReference> mainLocation = JsonNullable.<LocationResourceReference>undefined();

  public static final String JSON_PROPERTY_META = "meta";
  private LocationResourceMeta meta;

  public LocationResource() { 
  }

  @JsonCreator
  public LocationResource(
    @JsonProperty(JSON_PROPERTY_ID) String id, 
    @JsonProperty(JSON_PROPERTY_NAME) String name, 
    @JsonProperty(JSON_PROPERTY_DESCRIPTION) String description, 
    @JsonProperty(JSON_PROPERTY_ADDRESS1) String address1, 
    @JsonProperty(JSON_PROPERTY_ADDRESS2) String address2, 
    @JsonProperty(JSON_PROPERTY_ADDRESS3) String address3, 
    @JsonProperty(JSON_PROPERTY_LOCALITY) String locality, 
    @JsonProperty(JSON_PROPERTY_REGION) String region, 
    @JsonProperty(JSON_PROPERTY_POSTAL_CODE) String postalCode, 
    @JsonProperty(JSON_PROPERTY_COUNTRY) String country, 
    @JsonProperty(JSON_PROPERTY_PHONE_NUMBER) String phoneNumber
  ) {
    this();
    this.id = id;
    this.name = name;
    this.description = description;
    this.address1 = address1;
    this.address2 = address2;
    this.address3 = address3;
    this.locality = locality;
    this.region = region;
    this.postalCode = postalCode;
    this.country = country;
    this.phoneNumber = phoneNumber;
  }

  public LocationResource schemas(java.util.List<String> schemas) {
    this.schemas = schemas;
    return this;
  }

  public LocationResource addSchemasItem(String schemasItem) {
    if (this.schemas == null) {
      this.schemas = new java.util.ArrayList<>();
    }
    this.schemas.add(schemasItem);
    return this;
  }

   /**
   * Get schemas
   * @return schemas
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"urn:scim:schemas:extension:FactSet:Core:1.0:Location\"]", value = "")
  @JsonProperty(JSON_PROPERTY_SCHEMAS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getSchemas() {
    return schemas;
  }


  @JsonProperty(JSON_PROPERTY_SCHEMAS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSchemas(java.util.List<String> schemas) {
    this.schemas = schemas;
  }


   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1598276", value = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getId() {
    return id;
  }




  public LocationResource externalId(String externalId) {
    this.externalId = externalId;
    return this;
  }

   /**
   * Get externalId
   * @return externalId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1598276", value = "")
  @JsonProperty(JSON_PROPERTY_EXTERNAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getExternalId() {
    return externalId;
  }


  @JsonProperty(JSON_PROPERTY_EXTERNAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExternalId(String externalId) {
    this.externalId = externalId;
  }


   /**
   * Name of the location.
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "FIN Wealth Management", value = "Name of the location.")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }




   /**
   * Description of the location.
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Description of the location.")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDescription() {
    return description;
  }




   /**
   * First line of location&#39;s address.
   * @return address1
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "601 Main Avenue", value = "First line of location's address.")
  @JsonProperty(JSON_PROPERTY_ADDRESS1)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAddress1() {
    return address1;
  }




   /**
   * Second line of location&#39;s address.
   * @return address2
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Factset - First Floor", value = "Second line of location's address.")
  @JsonProperty(JSON_PROPERTY_ADDRESS2)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAddress2() {
    return address2;
  }




   /**
   * Third line of location&#39;s address.
   * @return address3
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Third line of location's address.")
  @JsonProperty(JSON_PROPERTY_ADDRESS3)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAddress3() {
    return address3;
  }




   /**
   * City of location.
   * @return locality
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Norwalk", value = "City of location.")
  @JsonProperty(JSON_PROPERTY_LOCALITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getLocality() {
    return locality;
  }




   /**
   * State or province of location.
   * @return region
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Connecticut", value = "State or province of location.")
  @JsonProperty(JSON_PROPERTY_REGION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRegion() {
    return region;
  }




   /**
   * Postal code of location.
   * @return postalCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "06850", value = "Postal code of location.")
  @JsonProperty(JSON_PROPERTY_POSTAL_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getPostalCode() {
    return postalCode;
  }




   /**
   * Country of location.
   * @return country
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "United States", value = "Country of location.")
  @JsonProperty(JSON_PROPERTY_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCountry() {
    return country;
  }




   /**
   * Phone number of location.
   * @return phoneNumber
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Phone number of location.")
  @JsonProperty(JSON_PROPERTY_PHONE_NUMBER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getPhoneNumber() {
    return phoneNumber;
  }




  public LocationResource mainLocation(LocationResourceReference mainLocation) {
    this.mainLocation = JsonNullable.<LocationResourceReference>of(mainLocation);
    return this;
  }

   /**
   * Get mainLocation
   * @return mainLocation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public LocationResourceReference getMainLocation() {
        return mainLocation.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MAIN_LOCATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<LocationResourceReference> getMainLocation_JsonNullable() {
    return mainLocation;
  }
  
  @JsonProperty(JSON_PROPERTY_MAIN_LOCATION)
  public void setMainLocation_JsonNullable(JsonNullable<LocationResourceReference> mainLocation) {
    this.mainLocation = mainLocation;
  }

  public void setMainLocation(LocationResourceReference mainLocation) {
    this.mainLocation = JsonNullable.<LocationResourceReference>of(mainLocation);
  }


  public LocationResource meta(LocationResourceMeta meta) {
    this.meta = meta;
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_META)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocationResourceMeta getMeta() {
    return meta;
  }


  @JsonProperty(JSON_PROPERTY_META)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMeta(LocationResourceMeta meta) {
    this.meta = meta;
  }


  /**
   * Return true if this LocationResource object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LocationResource locationResource = (LocationResource) o;
    return Objects.equals(this.schemas, locationResource.schemas) &&
        Objects.equals(this.id, locationResource.id) &&
        Objects.equals(this.externalId, locationResource.externalId) &&
        Objects.equals(this.name, locationResource.name) &&
        Objects.equals(this.description, locationResource.description) &&
        Objects.equals(this.address1, locationResource.address1) &&
        Objects.equals(this.address2, locationResource.address2) &&
        Objects.equals(this.address3, locationResource.address3) &&
        Objects.equals(this.locality, locationResource.locality) &&
        Objects.equals(this.region, locationResource.region) &&
        Objects.equals(this.postalCode, locationResource.postalCode) &&
        Objects.equals(this.country, locationResource.country) &&
        Objects.equals(this.phoneNumber, locationResource.phoneNumber) &&
        equalsNullable(this.mainLocation, locationResource.mainLocation) &&
        Objects.equals(this.meta, locationResource.meta);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(schemas, id, externalId, name, description, address1, address2, address3, locality, region, postalCode, country, phoneNumber, hashCodeNullable(mainLocation), meta);
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
    sb.append("class LocationResource {\n");
    sb.append("    schemas: ").append(toIndentedString(schemas)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    externalId: ").append(toIndentedString(externalId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    address1: ").append(toIndentedString(address1)).append("\n");
    sb.append("    address2: ").append(toIndentedString(address2)).append("\n");
    sb.append("    address3: ").append(toIndentedString(address3)).append("\n");
    sb.append("    locality: ").append(toIndentedString(locality)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
    sb.append("    postalCode: ").append(toIndentedString(postalCode)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    phoneNumber: ").append(toIndentedString(phoneNumber)).append("\n");
    sb.append("    mainLocation: ").append(toIndentedString(mainLocation)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
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

