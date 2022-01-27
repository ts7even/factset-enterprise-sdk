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


package com.factset.sdk.BondsAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.BondsAPIforDigitalPortals.models.InlineResponse2004DataComplianceGermany;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Compliance properties.
 */
@ApiModel(description = "Compliance properties.")
@JsonPropertyOrder({
  InlineResponse2004DataCompliance.JSON_PROPERTY_GERMANY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2004DataCompliance implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_GERMANY = "germany";
  private InlineResponse2004DataComplianceGermany germany;


  public InlineResponse2004DataCompliance germany(InlineResponse2004DataComplianceGermany germany) {
    this.germany = germany;
    return this;
  }

   /**
   * Get germany
   * @return germany
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_GERMANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2004DataComplianceGermany getGermany() {
    return germany;
  }


  @JsonProperty(JSON_PROPERTY_GERMANY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGermany(InlineResponse2004DataComplianceGermany germany) {
    this.germany = germany;
  }


  /**
   * Return true if this inline_response_200_4_data_compliance object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2004DataCompliance inlineResponse2004DataCompliance = (InlineResponse2004DataCompliance) o;
    return Objects.equals(this.germany, inlineResponse2004DataCompliance.germany);
  }

  @Override
  public int hashCode() {
    return Objects.hash(germany);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2004DataCompliance {\n");
    sb.append("    germany: ").append(toIndentedString(germany)).append("\n");
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
