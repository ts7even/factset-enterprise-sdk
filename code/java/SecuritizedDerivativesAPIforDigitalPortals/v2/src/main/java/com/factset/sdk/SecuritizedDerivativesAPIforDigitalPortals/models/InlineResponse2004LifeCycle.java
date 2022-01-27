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


package com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2004LifeCycleMaturity;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.JSON;


/**
 * Important dates of the securitized derivative.
 */
@ApiModel(description = "Important dates of the securitized derivative.")
@JsonPropertyOrder({
  InlineResponse2004LifeCycle.JSON_PROPERTY_MATURITY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2004LifeCycle implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_MATURITY = "maturity";
  private InlineResponse2004LifeCycleMaturity maturity;


  public InlineResponse2004LifeCycle maturity(InlineResponse2004LifeCycleMaturity maturity) {
    this.maturity = maturity;
    return this;
  }

   /**
   * Get maturity
   * @return maturity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MATURITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2004LifeCycleMaturity getMaturity() {
    return maturity;
  }


  @JsonProperty(JSON_PROPERTY_MATURITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaturity(InlineResponse2004LifeCycleMaturity maturity) {
    this.maturity = maturity;
  }


  /**
   * Return true if this inline_response_200_4_lifeCycle object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2004LifeCycle inlineResponse2004LifeCycle = (InlineResponse2004LifeCycle) o;
    return Objects.equals(this.maturity, inlineResponse2004LifeCycle.maturity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(maturity);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2004LifeCycle {\n");
    sb.append("    maturity: ").append(toIndentedString(maturity)).append("\n");
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
