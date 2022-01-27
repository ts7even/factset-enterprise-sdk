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
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Parameters related to the presence and age of the most recent trade price.
 */
@ApiModel(description = "Parameters related to the presence and age of the most recent trade price.")
@JsonPropertyOrder({
  DebtInstrumentNotationScreenerSearchDataValidationPricesLatest.JSON_PROPERTY_AVAILABLE_ONLY,
  DebtInstrumentNotationScreenerSearchDataValidationPricesLatest.JSON_PROPERTY_MINIMUM_DATE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentNotationScreenerSearchDataValidationPricesLatest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_AVAILABLE_ONLY = "availableOnly";
  private Boolean availableOnly;

  public static final String JSON_PROPERTY_MINIMUM_DATE = "minimumDate";
  private LocalDate minimumDate;


  public DebtInstrumentNotationScreenerSearchDataValidationPricesLatest availableOnly(Boolean availableOnly) {
    this.availableOnly = availableOnly;
    return this;
  }

   /**
   * If &#x60;true&#x60;, only notations for which a trade price (even an outdated one) is available will be returned.
   * @return availableOnly
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "If `true`, only notations for which a trade price (even an outdated one) is available will be returned.")
  @JsonProperty(JSON_PROPERTY_AVAILABLE_ONLY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getAvailableOnly() {
    return availableOnly;
  }


  @JsonProperty(JSON_PROPERTY_AVAILABLE_ONLY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAvailableOnly(Boolean availableOnly) {
    this.availableOnly = availableOnly;
  }


  public DebtInstrumentNotationScreenerSearchDataValidationPricesLatest minimumDate(LocalDate minimumDate) {
    this.minimumDate = minimumDate;
    return this;
  }

   /**
   * Earliest admissible date of the most recent trade price.
   * @return minimumDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Earliest admissible date of the most recent trade price.")
  @JsonProperty(JSON_PROPERTY_MINIMUM_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getMinimumDate() {
    return minimumDate;
  }


  @JsonProperty(JSON_PROPERTY_MINIMUM_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMinimumDate(LocalDate minimumDate) {
    this.minimumDate = minimumDate;
  }


  /**
   * Return true if this _debtInstrument_notation_screener_search_data_validation_prices_latest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentNotationScreenerSearchDataValidationPricesLatest debtInstrumentNotationScreenerSearchDataValidationPricesLatest = (DebtInstrumentNotationScreenerSearchDataValidationPricesLatest) o;
    return Objects.equals(this.availableOnly, debtInstrumentNotationScreenerSearchDataValidationPricesLatest.availableOnly) &&
        Objects.equals(this.minimumDate, debtInstrumentNotationScreenerSearchDataValidationPricesLatest.minimumDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(availableOnly, minimumDate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentNotationScreenerSearchDataValidationPricesLatest {\n");
    sb.append("    availableOnly: ").append(toIndentedString(availableOnly)).append("\n");
    sb.append("    minimumDate: ").append(toIndentedString(minimumDate)).append("\n");
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
