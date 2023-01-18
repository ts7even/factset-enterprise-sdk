/*
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and LEIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs.</p> 
 *
 * The version of the OpenAPI document: 3.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Symbology.models;

import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
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
import com.factset.sdk.Symbology.JSON;


/**
 * Identifier Resolution data object.
 */
@ApiModel(description = "Identifier Resolution data object.")
@JsonPropertyOrder({
  IdentifierResolution.JSON_PROPERTY_REQUEST_ID,
  IdentifierResolution.JSON_PROPERTY_INPUT_SYMBOL_TYPE,
  IdentifierResolution.JSON_PROPERTY_NAME,
  IdentifierResolution.JSON_PROPERTY_FREF_LISTING_EXCHANGE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class IdentifierResolution implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_INPUT_SYMBOL_TYPE = "inputSymbolType";
  private String inputSymbolType;

  public static final String JSON_PROPERTY_NAME = "name";
  private JsonNullable<String> name = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_FREF_LISTING_EXCHANGE = "frefListingExchange";
  private JsonNullable<String> frefListingExchange = JsonNullable.<String>undefined();

  public IdentifierResolution() { 
  }

  public IdentifierResolution requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier inputted in the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "GOOGL-US", value = "Identifier inputted in the request.")
  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRequestId() {
    return requestId;
  }


  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequestId(String requestId) {
    this.requestId = requestId;
  }


  public IdentifierResolution inputSymbolType(String inputSymbolType) {
    this.inputSymbolType = inputSymbolType;
    return this;
  }

   /**
   * The type of identifier inputted in the request
   * @return inputSymbolType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "tickerRegion", value = "The type of identifier inputted in the request")
  @JsonProperty(JSON_PROPERTY_INPUT_SYMBOL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getInputSymbolType() {
    return inputSymbolType;
  }


  @JsonProperty(JSON_PROPERTY_INPUT_SYMBOL_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInputSymbolType(String inputSymbolType) {
    this.inputSymbolType = inputSymbolType;
  }


  public IdentifierResolution name(String name) {
    this.name = JsonNullable.<String>of(name);
    return this;
  }

   /**
   * Name of the requested identifier
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Alphabet Inc. Class A", value = "Name of the requested identifier")
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


  public IdentifierResolution frefListingExchange(String frefListingExchange) {
    this.frefListingExchange = JsonNullable.<String>of(frefListingExchange);
    return this;
  }

   /**
   * The 3 digit fref exchange code for the primary exchange of the security
   * @return frefListingExchange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USA", value = "The 3 digit fref exchange code for the primary exchange of the security")
  @JsonIgnore

  public String getFrefListingExchange() {
        return frefListingExchange.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FREF_LISTING_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getFrefListingExchange_JsonNullable() {
    return frefListingExchange;
  }
  
  @JsonProperty(JSON_PROPERTY_FREF_LISTING_EXCHANGE)
  public void setFrefListingExchange_JsonNullable(JsonNullable<String> frefListingExchange) {
    this.frefListingExchange = frefListingExchange;
  }

  public void setFrefListingExchange(String frefListingExchange) {
    this.frefListingExchange = JsonNullable.<String>of(frefListingExchange);
  }

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  private Map<String, String> additionalProperties;

  /**
   * Set the additional (undeclared) property with the specified name and value.
   * If the property does not already exist, create it otherwise replace it.
   */
  @JsonAnySetter
  public IdentifierResolution putAdditionalProperty(String key, String value) {
    if (this.additionalProperties == null) {
        this.additionalProperties = new HashMap<String, String>();
    }
    this.additionalProperties.put(key, value);
    return this;
  }

  /**
   * Return the additional (undeclared) property.
   */
  @JsonAnyGetter
  public Map<String, String> getAdditionalProperties() {
    return additionalProperties;
  }

  /**
   * Return the additional (undeclared) property with the specified name.
   */
  public String getAdditionalProperty(String key) {
    if (this.additionalProperties == null) {
        return null;
    }
    return this.additionalProperties.get(key);
  }

  /**
   * Return true if this identifierResolution object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IdentifierResolution identifierResolution = (IdentifierResolution) o;
    return Objects.equals(this.requestId, identifierResolution.requestId) &&
        Objects.equals(this.inputSymbolType, identifierResolution.inputSymbolType) &&
        equalsNullable(this.name, identifierResolution.name) &&
        equalsNullable(this.frefListingExchange, identifierResolution.frefListingExchange)&&
        Objects.equals(this.additionalProperties, identifierResolution.additionalProperties);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestId, inputSymbolType, hashCodeNullable(name), hashCodeNullable(frefListingExchange), additionalProperties);
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
    sb.append("class IdentifierResolution {\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    inputSymbolType: ").append(toIndentedString(inputSymbolType)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    frefListingExchange: ").append(toIndentedString(frefListingExchange)).append("\n");
    sb.append("    additionalProperties: ").append(toIndentedString(additionalProperties)).append("\n");
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

