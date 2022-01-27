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
 * Selection of the effective underlying using instrument identifiers.
 */
@ApiModel(description = "Selection of the effective underlying using instrument identifiers.")
@JsonPropertyOrder({
  SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument.JSON_PROPERTY_IDS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_IDS = "ids";
  private java.util.Set<String> ids = null;


  public SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument ids(java.util.Set<String> ids) {
    this.ids = ids;
    return this;
  }

  public SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument addIdsItem(String idsItem) {
    if (this.ids == null) {
      this.ids = new java.util.LinkedHashSet<>();
    }
    this.ids.add(idsItem);
    return this;
  }

   /**
   * List of instrument identifiers.
   * @return ids
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of instrument identifiers.")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Set<String> getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIds(java.util.Set<String> ids) {
    this.ids = ids;
  }


  /**
   * Return true if this _securitizedDerivative_issuer_search_data_factorCertificates_effectiveUnderlying_instrument object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument securitizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument = (SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument) o;
    return Objects.equals(this.ids, securitizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument.ids);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ids);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeIssuerSearchDataFactorCertificatesEffectiveUnderlyingInstrument {\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
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
