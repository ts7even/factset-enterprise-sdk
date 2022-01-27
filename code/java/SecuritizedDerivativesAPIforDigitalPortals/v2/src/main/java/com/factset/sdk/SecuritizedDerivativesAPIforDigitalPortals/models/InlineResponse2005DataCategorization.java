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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataCategorizationDdv;
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
 * Lists of categories of the securitized derivatives. Starting with the most coarse level (one), for each level of the category system, the list of categories of the securitized derivatives, matching the parameters, is returned. See endpoint &#x60;/category/listBySystem&#x60; for possible values.
 */
@ApiModel(description = "Lists of categories of the securitized derivatives. Starting with the most coarse level (one), for each level of the category system, the list of categories of the securitized derivatives, matching the parameters, is returned. See endpoint `/category/listBySystem` for possible values.")
@JsonPropertyOrder({
  InlineResponse2005DataCategorization.JSON_PROPERTY_DDV,
  InlineResponse2005DataCategorization.JSON_PROPERTY_EUSIPA
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2005DataCategorization implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DDV = "ddv";
  private java.util.List<InlineResponse2005DataCategorizationDdv> ddv = null;

  public static final String JSON_PROPERTY_EUSIPA = "eusipa";
  private java.util.List<InlineResponse2005DataCategorizationDdv> eusipa = null;


  public InlineResponse2005DataCategorization ddv(java.util.List<InlineResponse2005DataCategorizationDdv> ddv) {
    this.ddv = ddv;
    return this;
  }

  public InlineResponse2005DataCategorization addDdvItem(InlineResponse2005DataCategorizationDdv ddvItem) {
    if (this.ddv == null) {
      this.ddv = new java.util.ArrayList<>();
    }
    this.ddv.add(ddvItem);
    return this;
  }

   /**
   * Categorization based on the DDV (Deutscher Derivate Verband, German for German Derivatives Association) product classification. This category system (&#x60;id&#x3D;23&#x60;) covers securitized derivatives traded in Germany except exchange trade commodities (ETC) and exchange traded notes (ETN).
   * @return ddv
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Categorization based on the DDV (Deutscher Derivate Verband, German for German Derivatives Association) product classification. This category system (`id=23`) covers securitized derivatives traded in Germany except exchange trade commodities (ETC) and exchange traded notes (ETN).")
  @JsonProperty(JSON_PROPERTY_DDV)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2005DataCategorizationDdv> getDdv() {
    return ddv;
  }


  @JsonProperty(JSON_PROPERTY_DDV)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDdv(java.util.List<InlineResponse2005DataCategorizationDdv> ddv) {
    this.ddv = ddv;
  }


  public InlineResponse2005DataCategorization eusipa(java.util.List<InlineResponse2005DataCategorizationDdv> eusipa) {
    this.eusipa = eusipa;
    return this;
  }

  public InlineResponse2005DataCategorization addEusipaItem(InlineResponse2005DataCategorizationDdv eusipaItem) {
    if (this.eusipa == null) {
      this.eusipa = new java.util.ArrayList<>();
    }
    this.eusipa.add(eusipaItem);
    return this;
  }

   /**
   * Categorization based on the EUSIPA (European Structured Investment Products Association) product classification. This category system (&#x60;id&#x3D;18&#x60;) covers all securitized derivatives.
   * @return eusipa
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Categorization based on the EUSIPA (European Structured Investment Products Association) product classification. This category system (`id=18`) covers all securitized derivatives.")
  @JsonProperty(JSON_PROPERTY_EUSIPA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2005DataCategorizationDdv> getEusipa() {
    return eusipa;
  }


  @JsonProperty(JSON_PROPERTY_EUSIPA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEusipa(java.util.List<InlineResponse2005DataCategorizationDdv> eusipa) {
    this.eusipa = eusipa;
  }


  /**
   * Return true if this inline_response_200_5_data_categorization object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2005DataCategorization inlineResponse2005DataCategorization = (InlineResponse2005DataCategorization) o;
    return Objects.equals(this.ddv, inlineResponse2005DataCategorization.ddv) &&
        Objects.equals(this.eusipa, inlineResponse2005DataCategorization.eusipa);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ddv, eusipa);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2005DataCategorization {\n");
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
