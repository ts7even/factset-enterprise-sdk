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
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentIssuerSearchDataMinimumRatingGradeDebtInstrument;
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
 * Minimum rating grade requirements for the issuers or their debt instruments. In either case, only one identifier per rating system is allowed. See endpoint &#x60;/rating/grade/listBySystem&#x60; for valid values.
 */
@ApiModel(description = "Minimum rating grade requirements for the issuers or their debt instruments. In either case, only one identifier per rating system is allowed. See endpoint `/rating/grade/listBySystem` for valid values.")
@JsonPropertyOrder({
  DebtInstrumentIssuerSearchDataMinimumRatingGrade.JSON_PROPERTY_DEBT_INSTRUMENT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentIssuerSearchDataMinimumRatingGrade implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DEBT_INSTRUMENT = "debtInstrument";
  private DebtInstrumentIssuerSearchDataMinimumRatingGradeDebtInstrument debtInstrument;


  public DebtInstrumentIssuerSearchDataMinimumRatingGrade debtInstrument(DebtInstrumentIssuerSearchDataMinimumRatingGradeDebtInstrument debtInstrument) {
    this.debtInstrument = debtInstrument;
    return this;
  }

   /**
   * Get debtInstrument
   * @return debtInstrument
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DEBT_INSTRUMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentIssuerSearchDataMinimumRatingGradeDebtInstrument getDebtInstrument() {
    return debtInstrument;
  }


  @JsonProperty(JSON_PROPERTY_DEBT_INSTRUMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDebtInstrument(DebtInstrumentIssuerSearchDataMinimumRatingGradeDebtInstrument debtInstrument) {
    this.debtInstrument = debtInstrument;
  }


  /**
   * Return true if this _debtInstrument_issuer_search_data_minimumRatingGrade object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentIssuerSearchDataMinimumRatingGrade debtInstrumentIssuerSearchDataMinimumRatingGrade = (DebtInstrumentIssuerSearchDataMinimumRatingGrade) o;
    return Objects.equals(this.debtInstrument, debtInstrumentIssuerSearchDataMinimumRatingGrade.debtInstrument);
  }

  @Override
  public int hashCode() {
    return Objects.hash(debtInstrument);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentIssuerSearchDataMinimumRatingGrade {\n");
    sb.append("    debtInstrument: ").append(toIndentedString(debtInstrument)).append("\n");
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
