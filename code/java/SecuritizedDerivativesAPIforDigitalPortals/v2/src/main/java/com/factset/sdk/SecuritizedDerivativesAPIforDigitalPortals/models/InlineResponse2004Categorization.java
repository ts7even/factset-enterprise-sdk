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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2004CategorizationDdv;
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
 * Categorization of the securitized derivative. Not all securitized derivatives have an assignement to all category systems. For each category system, the categories are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity.
 */
@ApiModel(description = "Categorization of the securitized derivative. Not all securitized derivatives have an assignement to all category systems. For each category system, the categories are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity.")
@JsonPropertyOrder({
  InlineResponse2004Categorization.JSON_PROPERTY_DDV,
  InlineResponse2004Categorization.JSON_PROPERTY_EUSIPA
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2004Categorization implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DDV = "ddv";
  private java.util.List<InlineResponse2004CategorizationDdv> ddv = null;

  public static final String JSON_PROPERTY_EUSIPA = "eusipa";
  private java.util.List<InlineResponse2004CategorizationDdv> eusipa = null;


  public InlineResponse2004Categorization ddv(java.util.List<InlineResponse2004CategorizationDdv> ddv) {
    this.ddv = ddv;
    return this;
  }

  public InlineResponse2004Categorization addDdvItem(InlineResponse2004CategorizationDdv ddvItem) {
    if (this.ddv == null) {
      this.ddv = new java.util.ArrayList<>();
    }
    this.ddv.add(ddvItem);
    return this;
  }

   /**
   * Categorization based on the DDV (Deutscher Derivate Verband, German for German Derivatives Association) product classification. This category system covers securitized derivatives traded in Germany except exchange trade commodities (ETC) and exchange traded notes (ETN). See endpoint &#x60;/category/listBySystem&#x60; for category system 23 for possible values.
   * @return ddv
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Categorization based on the DDV (Deutscher Derivate Verband, German for German Derivatives Association) product classification. This category system covers securitized derivatives traded in Germany except exchange trade commodities (ETC) and exchange traded notes (ETN). See endpoint `/category/listBySystem` for category system 23 for possible values.")
  @JsonProperty(JSON_PROPERTY_DDV)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2004CategorizationDdv> getDdv() {
    return ddv;
  }


  @JsonProperty(JSON_PROPERTY_DDV)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDdv(java.util.List<InlineResponse2004CategorizationDdv> ddv) {
    this.ddv = ddv;
  }


  public InlineResponse2004Categorization eusipa(java.util.List<InlineResponse2004CategorizationDdv> eusipa) {
    this.eusipa = eusipa;
    return this;
  }

  public InlineResponse2004Categorization addEusipaItem(InlineResponse2004CategorizationDdv eusipaItem) {
    if (this.eusipa == null) {
      this.eusipa = new java.util.ArrayList<>();
    }
    this.eusipa.add(eusipaItem);
    return this;
  }

   /**
   * Categorization based on the EUSIPA (European Structured Investment Products Association) product classification. This category system  covers all securitized derivatives. See endpoint &#x60;/category/listBySystem&#x60; for category system 18 for possible values.
   * @return eusipa
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Categorization based on the EUSIPA (European Structured Investment Products Association) product classification. This category system  covers all securitized derivatives. See endpoint `/category/listBySystem` for category system 18 for possible values.")
  @JsonProperty(JSON_PROPERTY_EUSIPA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2004CategorizationDdv> getEusipa() {
    return eusipa;
  }


  @JsonProperty(JSON_PROPERTY_EUSIPA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEusipa(java.util.List<InlineResponse2004CategorizationDdv> eusipa) {
    this.eusipa = eusipa;
  }


  /**
   * Return true if this inline_response_200_4_categorization object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2004Categorization inlineResponse2004Categorization = (InlineResponse2004Categorization) o;
    return Objects.equals(this.ddv, inlineResponse2004Categorization.ddv) &&
        Objects.equals(this.eusipa, inlineResponse2004Categorization.eusipa);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ddv, eusipa);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2004Categorization {\n");
    sb.append("    ddv: ").append(toIndentedString(ddv)).append("\n");
    sb.append("    eusipa: ").append(toIndentedString(eusipa)).append("\n");
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
