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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataCategory;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataCurrency;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataExercise;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataIssuer;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataMarket;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataPrices;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataUnderlying;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataValueUnit;
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
 * The data member contains the request&#39;s primary data.
 */
@ApiModel(description = "The data member contains the request's primary data.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_PRICES,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_VALUE_UNIT,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_CURRENCY,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_MARKET,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_INSTRUMENT_RESTRICTION_LIST,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_NOTATION_RESTRICTION_LIST,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_CATEGORY,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_REGISTRATION_COUNTRY,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_LIFE_CYCLE,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_ISSUER,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_EXERCISE,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_UNDERLYING,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_FACTOR_CERTIFICATES,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_KNOCKED_OUT,
  SecuritizedDerivativeNotationRankingIntradayListData.JSON_PROPERTY_KNOCKED_IN
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationRankingIntradayListData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_PRICES = "prices";
  private SecuritizedDerivativeNotationRankingIntradayListDataPrices prices;

  public static final String JSON_PROPERTY_VALUE_UNIT = "valueUnit";
  private SecuritizedDerivativeNotationRankingIntradayListDataValueUnit valueUnit;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private SecuritizedDerivativeNotationRankingIntradayListDataCurrency currency;

  public static final String JSON_PROPERTY_MARKET = "market";
  private SecuritizedDerivativeNotationRankingIntradayListDataMarket market;

  public static final String JSON_PROPERTY_INSTRUMENT_RESTRICTION_LIST = "instrumentRestrictionList";
  private SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList instrumentRestrictionList;

  public static final String JSON_PROPERTY_NOTATION_RESTRICTION_LIST = "notationRestrictionList";
  private SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList notationRestrictionList;

  public static final String JSON_PROPERTY_CATEGORY = "category";
  private SecuritizedDerivativeNotationRankingIntradayListDataCategory category;

  public static final String JSON_PROPERTY_REGISTRATION_COUNTRY = "registrationCountry";
  private SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry registrationCountry;

  public static final String JSON_PROPERTY_LIFE_CYCLE = "lifeCycle";
  private SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle lifeCycle;

  public static final String JSON_PROPERTY_ISSUER = "issuer";
  private SecuritizedDerivativeNotationRankingIntradayListDataIssuer issuer;

  public static final String JSON_PROPERTY_EXERCISE = "exercise";
  private SecuritizedDerivativeNotationRankingIntradayListDataExercise exercise;

  public static final String JSON_PROPERTY_UNDERLYING = "underlying";
  private SecuritizedDerivativeNotationRankingIntradayListDataUnderlying underlying;

  public static final String JSON_PROPERTY_FACTOR_CERTIFICATES = "factorCertificates";
  private SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates factorCertificates;

  /**
   * Specifies whether knocked-out securitized derivatives are included in the response. Particularly relevant for knock-out certificates.
   */
  public enum KnockedOutEnum {
    ONLY("only"),
    
    INCLUDE("include"),
    
    EXCLUDE("exclude");

    private String value;

    KnockedOutEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static KnockedOutEnum fromValue(String value) {
      for (KnockedOutEnum b : KnockedOutEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_KNOCKED_OUT = "knockedOut";
  private KnockedOutEnum knockedOut = KnockedOutEnum.EXCLUDE;

  /**
   * Specifies whether knocked-in securitized derivatives are included in the response. Particularly relevant for bonus certificates but also for securitized derivatives that might have additional protection such as reverse convertible bonds, discount certificates, and capital-protection certificates.
   */
  public enum KnockedInEnum {
    ONLY("only"),
    
    INCLUDE("include"),
    
    EXCLUDE("exclude");

    private String value;

    KnockedInEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static KnockedInEnum fromValue(String value) {
      for (KnockedInEnum b : KnockedInEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_KNOCKED_IN = "knockedIn";
  private KnockedInEnum knockedIn = KnockedInEnum.EXCLUDE;


  public SecuritizedDerivativeNotationRankingIntradayListData prices(SecuritizedDerivativeNotationRankingIntradayListDataPrices prices) {
    this.prices = prices;
    return this;
  }

   /**
   * Get prices
   * @return prices
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataPrices getPrices() {
    return prices;
  }


  @JsonProperty(JSON_PROPERTY_PRICES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrices(SecuritizedDerivativeNotationRankingIntradayListDataPrices prices) {
    this.prices = prices;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData valueUnit(SecuritizedDerivativeNotationRankingIntradayListDataValueUnit valueUnit) {
    this.valueUnit = valueUnit;
    return this;
  }

   /**
   * Get valueUnit
   * @return valueUnit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VALUE_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataValueUnit getValueUnit() {
    return valueUnit;
  }


  @JsonProperty(JSON_PROPERTY_VALUE_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValueUnit(SecuritizedDerivativeNotationRankingIntradayListDataValueUnit valueUnit) {
    this.valueUnit = valueUnit;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData currency(SecuritizedDerivativeNotationRankingIntradayListDataCurrency currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Get currency
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataCurrency getCurrency() {
    return currency;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrency(SecuritizedDerivativeNotationRankingIntradayListDataCurrency currency) {
    this.currency = currency;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData market(SecuritizedDerivativeNotationRankingIntradayListDataMarket market) {
    this.market = market;
    return this;
  }

   /**
   * Get market
   * @return market
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_MARKET)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public SecuritizedDerivativeNotationRankingIntradayListDataMarket getMarket() {
    return market;
  }


  @JsonProperty(JSON_PROPERTY_MARKET)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMarket(SecuritizedDerivativeNotationRankingIntradayListDataMarket market) {
    this.market = market;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData instrumentRestrictionList(SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList instrumentRestrictionList) {
    this.instrumentRestrictionList = instrumentRestrictionList;
    return this;
  }

   /**
   * Get instrumentRestrictionList
   * @return instrumentRestrictionList
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_INSTRUMENT_RESTRICTION_LIST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList getInstrumentRestrictionList() {
    return instrumentRestrictionList;
  }


  @JsonProperty(JSON_PROPERTY_INSTRUMENT_RESTRICTION_LIST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInstrumentRestrictionList(SecuritizedDerivativeNotationRankingIntradayListDataInstrumentRestrictionList instrumentRestrictionList) {
    this.instrumentRestrictionList = instrumentRestrictionList;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData notationRestrictionList(SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList notationRestrictionList) {
    this.notationRestrictionList = notationRestrictionList;
    return this;
  }

   /**
   * Get notationRestrictionList
   * @return notationRestrictionList
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NOTATION_RESTRICTION_LIST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList getNotationRestrictionList() {
    return notationRestrictionList;
  }


  @JsonProperty(JSON_PROPERTY_NOTATION_RESTRICTION_LIST)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNotationRestrictionList(SecuritizedDerivativeNotationRankingIntradayListDataNotationRestrictionList notationRestrictionList) {
    this.notationRestrictionList = notationRestrictionList;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData category(SecuritizedDerivativeNotationRankingIntradayListDataCategory category) {
    this.category = category;
    return this;
  }

   /**
   * Get category
   * @return category
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataCategory getCategory() {
    return category;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCategory(SecuritizedDerivativeNotationRankingIntradayListDataCategory category) {
    this.category = category;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData registrationCountry(SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry registrationCountry) {
    this.registrationCountry = registrationCountry;
    return this;
  }

   /**
   * Get registrationCountry
   * @return registrationCountry
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_REGISTRATION_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry getRegistrationCountry() {
    return registrationCountry;
  }


  @JsonProperty(JSON_PROPERTY_REGISTRATION_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRegistrationCountry(SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry registrationCountry) {
    this.registrationCountry = registrationCountry;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData lifeCycle(SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle lifeCycle) {
    this.lifeCycle = lifeCycle;
    return this;
  }

   /**
   * Get lifeCycle
   * @return lifeCycle
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LIFE_CYCLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle getLifeCycle() {
    return lifeCycle;
  }


  @JsonProperty(JSON_PROPERTY_LIFE_CYCLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLifeCycle(SecuritizedDerivativeNotationRankingIntradayListDataLifeCycle lifeCycle) {
    this.lifeCycle = lifeCycle;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData issuer(SecuritizedDerivativeNotationRankingIntradayListDataIssuer issuer) {
    this.issuer = issuer;
    return this;
  }

   /**
   * Get issuer
   * @return issuer
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ISSUER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataIssuer getIssuer() {
    return issuer;
  }


  @JsonProperty(JSON_PROPERTY_ISSUER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIssuer(SecuritizedDerivativeNotationRankingIntradayListDataIssuer issuer) {
    this.issuer = issuer;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData exercise(SecuritizedDerivativeNotationRankingIntradayListDataExercise exercise) {
    this.exercise = exercise;
    return this;
  }

   /**
   * Get exercise
   * @return exercise
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_EXERCISE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataExercise getExercise() {
    return exercise;
  }


  @JsonProperty(JSON_PROPERTY_EXERCISE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExercise(SecuritizedDerivativeNotationRankingIntradayListDataExercise exercise) {
    this.exercise = exercise;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData underlying(SecuritizedDerivativeNotationRankingIntradayListDataUnderlying underlying) {
    this.underlying = underlying;
    return this;
  }

   /**
   * Get underlying
   * @return underlying
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_UNDERLYING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataUnderlying getUnderlying() {
    return underlying;
  }


  @JsonProperty(JSON_PROPERTY_UNDERLYING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUnderlying(SecuritizedDerivativeNotationRankingIntradayListDataUnderlying underlying) {
    this.underlying = underlying;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData factorCertificates(SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates factorCertificates) {
    this.factorCertificates = factorCertificates;
    return this;
  }

   /**
   * Get factorCertificates
   * @return factorCertificates
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FACTOR_CERTIFICATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates getFactorCertificates() {
    return factorCertificates;
  }


  @JsonProperty(JSON_PROPERTY_FACTOR_CERTIFICATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFactorCertificates(SecuritizedDerivativeNotationRankingIntradayListDataFactorCertificates factorCertificates) {
    this.factorCertificates = factorCertificates;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData knockedOut(KnockedOutEnum knockedOut) {
    this.knockedOut = knockedOut;
    return this;
  }

   /**
   * Specifies whether knocked-out securitized derivatives are included in the response. Particularly relevant for knock-out certificates.
   * @return knockedOut
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Specifies whether knocked-out securitized derivatives are included in the response. Particularly relevant for knock-out certificates.")
  @JsonProperty(JSON_PROPERTY_KNOCKED_OUT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public KnockedOutEnum getKnockedOut() {
    return knockedOut;
  }


  @JsonProperty(JSON_PROPERTY_KNOCKED_OUT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setKnockedOut(KnockedOutEnum knockedOut) {
    this.knockedOut = knockedOut;
  }


  public SecuritizedDerivativeNotationRankingIntradayListData knockedIn(KnockedInEnum knockedIn) {
    this.knockedIn = knockedIn;
    return this;
  }

   /**
   * Specifies whether knocked-in securitized derivatives are included in the response. Particularly relevant for bonus certificates but also for securitized derivatives that might have additional protection such as reverse convertible bonds, discount certificates, and capital-protection certificates.
   * @return knockedIn
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Specifies whether knocked-in securitized derivatives are included in the response. Particularly relevant for bonus certificates but also for securitized derivatives that might have additional protection such as reverse convertible bonds, discount certificates, and capital-protection certificates.")
  @JsonProperty(JSON_PROPERTY_KNOCKED_IN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public KnockedInEnum getKnockedIn() {
    return knockedIn;
  }


  @JsonProperty(JSON_PROPERTY_KNOCKED_IN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setKnockedIn(KnockedInEnum knockedIn) {
    this.knockedIn = knockedIn;
  }


  /**
   * Return true if this _securitizedDerivative_notation_ranking_intraday_list_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationRankingIntradayListData securitizedDerivativeNotationRankingIntradayListData = (SecuritizedDerivativeNotationRankingIntradayListData) o;
    return Objects.equals(this.prices, securitizedDerivativeNotationRankingIntradayListData.prices) &&
        Objects.equals(this.valueUnit, securitizedDerivativeNotationRankingIntradayListData.valueUnit) &&
        Objects.equals(this.currency, securitizedDerivativeNotationRankingIntradayListData.currency) &&
        Objects.equals(this.market, securitizedDerivativeNotationRankingIntradayListData.market) &&
        Objects.equals(this.instrumentRestrictionList, securitizedDerivativeNotationRankingIntradayListData.instrumentRestrictionList) &&
        Objects.equals(this.notationRestrictionList, securitizedDerivativeNotationRankingIntradayListData.notationRestrictionList) &&
        Objects.equals(this.category, securitizedDerivativeNotationRankingIntradayListData.category) &&
        Objects.equals(this.registrationCountry, securitizedDerivativeNotationRankingIntradayListData.registrationCountry) &&
        Objects.equals(this.lifeCycle, securitizedDerivativeNotationRankingIntradayListData.lifeCycle) &&
        Objects.equals(this.issuer, securitizedDerivativeNotationRankingIntradayListData.issuer) &&
        Objects.equals(this.exercise, securitizedDerivativeNotationRankingIntradayListData.exercise) &&
        Objects.equals(this.underlying, securitizedDerivativeNotationRankingIntradayListData.underlying) &&
        Objects.equals(this.factorCertificates, securitizedDerivativeNotationRankingIntradayListData.factorCertificates) &&
        Objects.equals(this.knockedOut, securitizedDerivativeNotationRankingIntradayListData.knockedOut) &&
        Objects.equals(this.knockedIn, securitizedDerivativeNotationRankingIntradayListData.knockedIn);
  }

  @Override
  public int hashCode() {
    return Objects.hash(prices, valueUnit, currency, market, instrumentRestrictionList, notationRestrictionList, category, registrationCountry, lifeCycle, issuer, exercise, underlying, factorCertificates, knockedOut, knockedIn);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationRankingIntradayListData {\n");
    sb.append("    prices: ").append(toIndentedString(prices)).append("\n");
    sb.append("    valueUnit: ").append(toIndentedString(valueUnit)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    market: ").append(toIndentedString(market)).append("\n");
    sb.append("    instrumentRestrictionList: ").append(toIndentedString(instrumentRestrictionList)).append("\n");
    sb.append("    notationRestrictionList: ").append(toIndentedString(notationRestrictionList)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    registrationCountry: ").append(toIndentedString(registrationCountry)).append("\n");
    sb.append("    lifeCycle: ").append(toIndentedString(lifeCycle)).append("\n");
    sb.append("    issuer: ").append(toIndentedString(issuer)).append("\n");
    sb.append("    exercise: ").append(toIndentedString(exercise)).append("\n");
    sb.append("    underlying: ").append(toIndentedString(underlying)).append("\n");
    sb.append("    factorCertificates: ").append(toIndentedString(factorCertificates)).append("\n");
    sb.append("    knockedOut: ").append(toIndentedString(knockedOut)).append("\n");
    sb.append("    knockedIn: ").append(toIndentedString(knockedIn)).append("\n");
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
