/*
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20036FsymSecurity;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * Instrument-level FactSet identifier of the financial instrument used primarily in FactSet products other than the MDG.
 */
@ApiModel(description = "Instrument-level FactSet identifier of the financial instrument used primarily in FactSet products other than the MDG.")
@JsonPropertyOrder({
  InlineResponse20036Fsym.JSON_PROPERTY_SECURITY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20036Fsym implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SECURITY = "security";
  private InlineResponse20036FsymSecurity security;


  public InlineResponse20036Fsym security(InlineResponse20036FsymSecurity security) {
    this.security = security;
    return this;
  }

   /**
   * Get security
   * @return security
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SECURITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20036FsymSecurity getSecurity() {
    return security;
  }


  @JsonProperty(JSON_PROPERTY_SECURITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSecurity(InlineResponse20036FsymSecurity security) {
    this.security = security;
  }


  /**
   * Return true if this inline_response_200_36_fsym object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20036Fsym inlineResponse20036Fsym = (InlineResponse20036Fsym) o;
    return Objects.equals(this.security, inlineResponse20036Fsym.security);
  }

  @Override
  public int hashCode() {
    return Objects.hash(security);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20036Fsym {\n");
    sb.append("    security: ").append(toIndentedString(security)).append("\n");
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
