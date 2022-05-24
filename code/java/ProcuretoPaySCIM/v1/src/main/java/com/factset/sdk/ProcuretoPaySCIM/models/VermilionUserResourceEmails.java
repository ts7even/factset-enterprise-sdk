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
 * Email addresses for the user. The value SHOULD be canonicalized by the service provider, e.g., &#39;bjensen@example.com&#39; instead of &#39;bjensen@EXAMPLE.COM&#39;. Canonical type values of &#39;work&#39;, &#39;home&#39;, and &#39;other&#39;.
 */
@ApiModel(description = "Email addresses for the user. The value SHOULD be canonicalized by the service provider, e.g., 'bjensen@example.com' instead of 'bjensen@EXAMPLE.COM'. Canonical type values of 'work', 'home', and 'other'.")
@JsonPropertyOrder({
  VermilionUserResourceEmails.JSON_PROPERTY_VALUE,
  VermilionUserResourceEmails.JSON_PROPERTY_DISPLAY,
  VermilionUserResourceEmails.JSON_PROPERTY_TYPE,
  VermilionUserResourceEmails.JSON_PROPERTY_PRIMARY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class VermilionUserResourceEmails implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_VALUE = "value";
  private String value;

  public static final String JSON_PROPERTY_DISPLAY = "display";
  private String display;

  public static final String JSON_PROPERTY_TYPE = "type";
  private String type;

  public static final String JSON_PROPERTY_PRIMARY = "primary";
  private Boolean primary;

  public VermilionUserResourceEmails() { 
  }

  public VermilionUserResourceEmails value(String value) {
    this.value = value;
    return this;
  }

   /**
   * Email addresses for the user. The value SHOULD be canonicalized by the service provider, e.g., &#39;bjensen@example.com&#39; instead of &#39;bjensen@EXAMPLE.COM&#39;. Canonical type values of &#39;work&#39;, &#39;home&#39;, and &#39;other&#39;.
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "john.doe@example.com", value = "Email addresses for the user. The value SHOULD be canonicalized by the service provider, e.g., 'bjensen@example.com' instead of 'bjensen@EXAMPLE.COM'. Canonical type values of 'work', 'home', and 'other'.")
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


  public VermilionUserResourceEmails display(String display) {
    this.display = display;
    return this;
  }

   /**
   * A human-readable name, primarily used for display purposes.  READ-ONLY.
   * @return display
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "john.doe@example.com", value = "A human-readable name, primarily used for display purposes.  READ-ONLY.")
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


  public VermilionUserResourceEmails type(String type) {
    this.type = type;
    return this;
  }

   /**
   * A label indicating the attribute&#39;s function, e.g., &#39;work&#39; or &#39;home&#39;.
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "work", value = "A label indicating the attribute's function, e.g., 'work' or 'home'.")
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


  public VermilionUserResourceEmails primary(Boolean primary) {
    this.primary = primary;
    return this;
  }

   /**
   * A Boolean value indicating the &#39;primary&#39; or preferred attribute value for this attribute, e.g., the psreferred mailing address or primary email address.  The primary attribute value &#39;true&#39; MUST appear no more than once.
   * @return primary
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "true", value = "A Boolean value indicating the 'primary' or preferred attribute value for this attribute, e.g., the psreferred mailing address or primary email address.  The primary attribute value 'true' MUST appear no more than once.")
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
   * Return true if this VermilionUserResource_emails object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VermilionUserResourceEmails vermilionUserResourceEmails = (VermilionUserResourceEmails) o;
    return Objects.equals(this.value, vermilionUserResourceEmails.value) &&
        Objects.equals(this.display, vermilionUserResourceEmails.display) &&
        Objects.equals(this.type, vermilionUserResourceEmails.type) &&
        Objects.equals(this.primary, vermilionUserResourceEmails.primary);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, display, type, primary);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VermilionUserResourceEmails {\n");
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
