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
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentIssuerSearchDataCountry;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentIssuerSearchDataMarket;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentIssuerSearchDataMinimumRatingGrade;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentIssuerSearchDataName;
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
 * The data member contains the request&#39;s primary data.
 */
@ApiModel(description = "The data member contains the request's primary data.")
@JsonPropertyOrder({
  DebtInstrumentIssuerSearchData.JSON_PROPERTY_NAME,
  DebtInstrumentIssuerSearchData.JSON_PROPERTY_MINIMUM_RATING_GRADE,
  DebtInstrumentIssuerSearchData.JSON_PROPERTY_COUNTRY,
  DebtInstrumentIssuerSearchData.JSON_PROPERTY_MARKET
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentIssuerSearchData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  private DebtInstrumentIssuerSearchDataName name;

  public static final String JSON_PROPERTY_MINIMUM_RATING_GRADE = "minimumRatingGrade";
  private DebtInstrumentIssuerSearchDataMinimumRatingGrade minimumRatingGrade;

  public static final String JSON_PROPERTY_COUNTRY = "country";
  private DebtInstrumentIssuerSearchDataCountry country;

  public static final String JSON_PROPERTY_MARKET = "market";
  private DebtInstrumentIssuerSearchDataMarket market;


  public DebtInstrumentIssuerSearchData name(DebtInstrumentIssuerSearchDataName name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentIssuerSearchDataName getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(DebtInstrumentIssuerSearchDataName name) {
    this.name = name;
  }


  public DebtInstrumentIssuerSearchData minimumRatingGrade(DebtInstrumentIssuerSearchDataMinimumRatingGrade minimumRatingGrade) {
    this.minimumRatingGrade = minimumRatingGrade;
    return this;
  }

   /**
   * Get minimumRatingGrade
   * @return minimumRatingGrade
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MINIMUM_RATING_GRADE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentIssuerSearchDataMinimumRatingGrade getMinimumRatingGrade() {
    return minimumRatingGrade;
  }


  @JsonProperty(JSON_PROPERTY_MINIMUM_RATING_GRADE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMinimumRatingGrade(DebtInstrumentIssuerSearchDataMinimumRatingGrade minimumRatingGrade) {
    this.minimumRatingGrade = minimumRatingGrade;
  }


  public DebtInstrumentIssuerSearchData country(DebtInstrumentIssuerSearchDataCountry country) {
    this.country = country;
    return this;
  }

   /**
   * Get country
   * @return country
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentIssuerSearchDataCountry getCountry() {
    return country;
  }


  @JsonProperty(JSON_PROPERTY_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCountry(DebtInstrumentIssuerSearchDataCountry country) {
    this.country = country;
  }


  public DebtInstrumentIssuerSearchData market(DebtInstrumentIssuerSearchDataMarket market) {
    this.market = market;
    return this;
  }

   /**
   * Get market
   * @return market
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MARKET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentIssuerSearchDataMarket getMarket() {
    return market;
  }


  @JsonProperty(JSON_PROPERTY_MARKET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMarket(DebtInstrumentIssuerSearchDataMarket market) {
    this.market = market;
  }


  /**
   * Return true if this _debtInstrument_issuer_search_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentIssuerSearchData debtInstrumentIssuerSearchData = (DebtInstrumentIssuerSearchData) o;
    return Objects.equals(this.name, debtInstrumentIssuerSearchData.name) &&
        Objects.equals(this.minimumRatingGrade, debtInstrumentIssuerSearchData.minimumRatingGrade) &&
        Objects.equals(this.country, debtInstrumentIssuerSearchData.country) &&
        Objects.equals(this.market, debtInstrumentIssuerSearchData.market);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, minimumRatingGrade, country, market);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentIssuerSearchData {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    minimumRatingGrade: ").append(toIndentedString(minimumRatingGrade)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    market: ").append(toIndentedString(market)).append("\n");
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
