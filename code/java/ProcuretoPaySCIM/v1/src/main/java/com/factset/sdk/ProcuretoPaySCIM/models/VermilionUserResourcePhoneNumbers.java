/*
 * FactSet SCIM API
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.ProcuretoPaySCIM.models;

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
import com.factset.sdk.ProcuretoPaySCIM.JSON;


/**
 * VermilionUserResourcePhoneNumbers
 */
@JsonPropertyOrder({
  VermilionUserResourcePhoneNumbers.JSON_PROPERTY_VALUE,
  VermilionUserResourcePhoneNumbers.JSON_PROPERTY_DISPLAY,
  VermilionUserResourcePhoneNumbers.JSON_PROPERTY_TYPE,
  VermilionUserResourcePhoneNumbers.JSON_PROPERTY_PRIMARY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class VermilionUserResourcePhoneNumbers implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_VALUE = "value";
  private String value;

  public static final String JSON_PROPERTY_DISPLAY = "display";
  private String display;

  public static final String JSON_PROPERTY_TYPE = "type";
  private String type;

  public static final String JSON_PROPERTY_PRIMARY = "primary";
  private Boolean primary;

  public VermilionUserResourcePhoneNumbers() { 
  }

  public VermilionUserResourcePhoneNumbers value(String value) {
    this.value = value;
    return this;
  }

   /**
   * Phone number of the User.
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "tel:5558675309", value = "Phone number of the User.")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValue(String value) {
    this.value = value;
  }


  public VermilionUserResourcePhoneNumbers display(String display) {
    this.display = display;
    return this;
  }

   /**
   * A human-readable name, primarily used for display purposes.  READ-ONLY.
   * @return display
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "(555) 867-5309", value = "A human-readable name, primarily used for display purposes.  READ-ONLY.")
  @JsonProperty(JSON_PROPERTY_DISPLAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDisplay() {
    return display;
  }


  @JsonProperty(JSON_PROPERTY_DISPLAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDisplay(String display) {
    this.display = display;
  }


  public VermilionUserResourcePhoneNumbers type(String type) {
    this.type = type;
    return this;
  }

   /**
   * A label indicating the attribute&#39;s function, e.g., &#39;work&#39;, &#39;home&#39;, &#39;mobile&#39;.
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "work", value = "A label indicating the attribute's function, e.g., 'work', 'home', 'mobile'.")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(String type) {
    this.type = type;
  }


  public VermilionUserResourcePhoneNumbers primary(Boolean primary) {
    this.primary = primary;
    return this;
  }

   /**
   * A Boolean value indicating the &#39;primary&#39; or preferred attribute value for this attribute, e.g., the preferred phone number or primary phone number. The primary attribute value &#39;true&#39; MUST appear no more than once.
   * @return primary
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "A Boolean value indicating the 'primary' or preferred attribute value for this attribute, e.g., the preferred phone number or primary phone number. The primary attribute value 'true' MUST appear no more than once.")
  @JsonProperty(JSON_PROPERTY_PRIMARY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getPrimary() {
    return primary;
  }


  @JsonProperty(JSON_PROPERTY_PRIMARY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrimary(Boolean primary) {
    this.primary = primary;
  }


  /**
   * Return true if this VermilionUserResource_phoneNumbers object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VermilionUserResourcePhoneNumbers vermilionUserResourcePhoneNumbers = (VermilionUserResourcePhoneNumbers) o;
    return Objects.equals(this.value, vermilionUserResourcePhoneNumbers.value) &&
        Objects.equals(this.display, vermilionUserResourcePhoneNumbers.display) &&
        Objects.equals(this.type, vermilionUserResourcePhoneNumbers.type) &&
        Objects.equals(this.primary, vermilionUserResourcePhoneNumbers.primary);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, display, type, primary);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VermilionUserResourcePhoneNumbers {\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    display: ").append(toIndentedString(display)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    primary: ").append(toIndentedString(primary)).append("\n");
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
