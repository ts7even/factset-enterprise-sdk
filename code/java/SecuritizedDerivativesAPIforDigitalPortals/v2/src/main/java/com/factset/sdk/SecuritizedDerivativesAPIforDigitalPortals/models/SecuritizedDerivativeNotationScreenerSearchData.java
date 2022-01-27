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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataIssuer;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerSearchDataValidation;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtection;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlowCurrency;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataCategory;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataCurrentInterestRate;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataFactorCertificates;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFigures;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycle;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataNominalCurrency;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataUnderlying;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataVolatility;
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
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_VALIDATION,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_CATEGORY,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_REGISTRATION_COUNTRY,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_LIFE_CYCLE,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_ISSUER,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_EXERCISE,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_SETTLEMENT,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_COLLATERALIZED,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_QUANTO,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_CAPITAL_PROTECTION,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_UNDERLYING,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_CASH_FLOW_CURRENCY,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_SINGLE_BARRIERS,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_RANGE_BARRIERS,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_FACTOR_CERTIFICATES,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_NOMINAL_CURRENCY,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_CURRENT_INTEREST_RATE,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_KEY_FIGURES,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_PERFORMANCE,
  SecuritizedDerivativeNotationScreenerSearchData.JSON_PROPERTY_VOLATILITY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerSearchData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_VALIDATION = "validation";
  private SecuritizedDerivativeNotationScreenerSearchDataValidation validation;

  public static final String JSON_PROPERTY_CATEGORY = "category";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataCategory category;

  public static final String JSON_PROPERTY_REGISTRATION_COUNTRY = "registrationCountry";
  private SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry registrationCountry;

  public static final String JSON_PROPERTY_LIFE_CYCLE = "lifeCycle";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycle lifeCycle;

  public static final String JSON_PROPERTY_ISSUER = "issuer";
  private SecuritizedDerivativeNotationRankingIntradayListDataIssuer issuer;

  public static final String JSON_PROPERTY_EXERCISE = "exercise";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise exercise;

  /**
   * Settlement of the securitized derivative. It concerns the fulfillment of the issuer&#39;s contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.
   */
  public enum SettlementEnum {
    CASH("cash"),
    
    PHYSICAL("physical"),
    
    EITHER("either");

    private String value;

    SettlementEnum(String value) {
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
    public static SettlementEnum fromValue(String value) {
      for (SettlementEnum b : SettlementEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_SETTLEMENT = "settlement";
  private SettlementEnum settlement;

  public static final String JSON_PROPERTY_COLLATERALIZED = "collateralized";
  private Boolean collateralized;

  public static final String JSON_PROPERTY_QUANTO = "quanto";
  private Boolean quanto;

  public static final String JSON_PROPERTY_CAPITAL_PROTECTION = "capitalProtection";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtection capitalProtection;

  public static final String JSON_PROPERTY_UNDERLYING = "underlying";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataUnderlying underlying;

  public static final String JSON_PROPERTY_CASH_FLOW_CURRENCY = "cashFlowCurrency";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlowCurrency cashFlowCurrency;

  public static final String JSON_PROPERTY_SINGLE_BARRIERS = "singleBarriers";
  private java.util.List<SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers> singleBarriers = null;

  public static final String JSON_PROPERTY_RANGE_BARRIERS = "rangeBarriers";
  private java.util.List<SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers> rangeBarriers = null;

  public static final String JSON_PROPERTY_FACTOR_CERTIFICATES = "factorCertificates";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataFactorCertificates factorCertificates;

  public static final String JSON_PROPERTY_NOMINAL_CURRENCY = "nominalCurrency";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataNominalCurrency nominalCurrency;

  public static final String JSON_PROPERTY_CURRENT_INTEREST_RATE = "currentInterestRate";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataCurrentInterestRate currentInterestRate;

  public static final String JSON_PROPERTY_KEY_FIGURES = "keyFigures";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFigures keyFigures;

  public static final String JSON_PROPERTY_PERFORMANCE = "performance";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance performance;

  public static final String JSON_PROPERTY_VOLATILITY = "volatility";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataVolatility volatility;


  public SecuritizedDerivativeNotationScreenerSearchData validation(SecuritizedDerivativeNotationScreenerSearchDataValidation validation) {
    this.validation = validation;
    return this;
  }

   /**
   * Get validation
   * @return validation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VALIDATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerSearchDataValidation getValidation() {
    return validation;
  }


  @JsonProperty(JSON_PROPERTY_VALIDATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValidation(SecuritizedDerivativeNotationScreenerSearchDataValidation validation) {
    this.validation = validation;
  }


  public SecuritizedDerivativeNotationScreenerSearchData category(SecuritizedDerivativeNotationScreenerValueRangesGetDataCategory category) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataCategory getCategory() {
    return category;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCategory(SecuritizedDerivativeNotationScreenerValueRangesGetDataCategory category) {
    this.category = category;
  }


  public SecuritizedDerivativeNotationScreenerSearchData registrationCountry(SecuritizedDerivativeNotationRankingIntradayListDataRegistrationCountry registrationCountry) {
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


  public SecuritizedDerivativeNotationScreenerSearchData lifeCycle(SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycle lifeCycle) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycle getLifeCycle() {
    return lifeCycle;
  }


  @JsonProperty(JSON_PROPERTY_LIFE_CYCLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLifeCycle(SecuritizedDerivativeNotationScreenerValueRangesGetDataLifeCycle lifeCycle) {
    this.lifeCycle = lifeCycle;
  }


  public SecuritizedDerivativeNotationScreenerSearchData issuer(SecuritizedDerivativeNotationRankingIntradayListDataIssuer issuer) {
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


  public SecuritizedDerivativeNotationScreenerSearchData exercise(SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise exercise) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise getExercise() {
    return exercise;
  }


  @JsonProperty(JSON_PROPERTY_EXERCISE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExercise(SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise exercise) {
    this.exercise = exercise;
  }


  public SecuritizedDerivativeNotationScreenerSearchData settlement(SettlementEnum settlement) {
    this.settlement = settlement;
    return this;
  }

   /**
   * Settlement of the securitized derivative. It concerns the fulfillment of the issuer&#39;s contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.
   * @return settlement
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Settlement of the securitized derivative. It concerns the fulfillment of the issuer's contractual obligations arising from the securitized derivative. Depending on the terms, the underlying asset may be delivered physically or its equivalent monetary value may be payed out.")
  @JsonProperty(JSON_PROPERTY_SETTLEMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SettlementEnum getSettlement() {
    return settlement;
  }


  @JsonProperty(JSON_PROPERTY_SETTLEMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSettlement(SettlementEnum settlement) {
    this.settlement = settlement;
  }


  public SecuritizedDerivativeNotationScreenerSearchData collateralized(Boolean collateralized) {
    this.collateralized = collateralized;
    return this;
  }

   /**
   * Restricts the result to securitized derivatives that are collateralized (&#x60;true&#x60;) or are  not collateralized (&#x60;false&#x60;). A collateralized securitized derivative is protected against an  issuer default by collateral.
   * @return collateralized
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Restricts the result to securitized derivatives that are collateralized (`true`) or are  not collateralized (`false`). A collateralized securitized derivative is protected against an  issuer default by collateral.")
  @JsonProperty(JSON_PROPERTY_COLLATERALIZED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getCollateralized() {
    return collateralized;
  }


  @JsonProperty(JSON_PROPERTY_COLLATERALIZED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCollateralized(Boolean collateralized) {
    this.collateralized = collateralized;
  }


  public SecuritizedDerivativeNotationScreenerSearchData quanto(Boolean quanto) {
    this.quanto = quanto;
    return this;
  }

   /**
   * Restricts the result to securitized derivatives that are hedged (&#x60;true&#x60;) or are not hedged (&#x60;false&#x60;) against fluctuations of the foreign exchange rate between the value unit of the underlying and the value unit of the cash flows.
   * @return quanto
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Restricts the result to securitized derivatives that are hedged (`true`) or are not hedged (`false`) against fluctuations of the foreign exchange rate between the value unit of the underlying and the value unit of the cash flows.")
  @JsonProperty(JSON_PROPERTY_QUANTO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getQuanto() {
    return quanto;
  }


  @JsonProperty(JSON_PROPERTY_QUANTO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQuanto(Boolean quanto) {
    this.quanto = quanto;
  }


  public SecuritizedDerivativeNotationScreenerSearchData capitalProtection(SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtection capitalProtection) {
    this.capitalProtection = capitalProtection;
    return this;
  }

   /**
   * Get capitalProtection
   * @return capitalProtection
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CAPITAL_PROTECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtection getCapitalProtection() {
    return capitalProtection;
  }


  @JsonProperty(JSON_PROPERTY_CAPITAL_PROTECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCapitalProtection(SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtection capitalProtection) {
    this.capitalProtection = capitalProtection;
  }


  public SecuritizedDerivativeNotationScreenerSearchData underlying(SecuritizedDerivativeNotationScreenerValueRangesGetDataUnderlying underlying) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataUnderlying getUnderlying() {
    return underlying;
  }


  @JsonProperty(JSON_PROPERTY_UNDERLYING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUnderlying(SecuritizedDerivativeNotationScreenerValueRangesGetDataUnderlying underlying) {
    this.underlying = underlying;
  }


  public SecuritizedDerivativeNotationScreenerSearchData cashFlowCurrency(SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlowCurrency cashFlowCurrency) {
    this.cashFlowCurrency = cashFlowCurrency;
    return this;
  }

   /**
   * Get cashFlowCurrency
   * @return cashFlowCurrency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CASH_FLOW_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlowCurrency getCashFlowCurrency() {
    return cashFlowCurrency;
  }


  @JsonProperty(JSON_PROPERTY_CASH_FLOW_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCashFlowCurrency(SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlowCurrency cashFlowCurrency) {
    this.cashFlowCurrency = cashFlowCurrency;
  }


  public SecuritizedDerivativeNotationScreenerSearchData singleBarriers(java.util.List<SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers> singleBarriers) {
    this.singleBarriers = singleBarriers;
    return this;
  }

  public SecuritizedDerivativeNotationScreenerSearchData addSingleBarriersItem(SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers singleBarriersItem) {
    if (this.singleBarriers == null) {
      this.singleBarriers = new java.util.ArrayList<>();
    }
    this.singleBarriers.add(singleBarriersItem);
    return this;
  }

   /**
   * Single barriers. Barriers of this kind represent either a lower or an upper bound derived from the exercise right of the securitized derivative. Multiple barrier types may be used in one request.
   * @return singleBarriers
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Single barriers. Barriers of this kind represent either a lower or an upper bound derived from the exercise right of the securitized derivative. Multiple barrier types may be used in one request.")
  @JsonProperty(JSON_PROPERTY_SINGLE_BARRIERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers> getSingleBarriers() {
    return singleBarriers;
  }


  @JsonProperty(JSON_PROPERTY_SINGLE_BARRIERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSingleBarriers(java.util.List<SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers> singleBarriers) {
    this.singleBarriers = singleBarriers;
  }


  public SecuritizedDerivativeNotationScreenerSearchData rangeBarriers(java.util.List<SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers> rangeBarriers) {
    this.rangeBarriers = rangeBarriers;
    return this;
  }

  public SecuritizedDerivativeNotationScreenerSearchData addRangeBarriersItem(SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers rangeBarriersItem) {
    if (this.rangeBarriers == null) {
      this.rangeBarriers = new java.util.ArrayList<>();
    }
    this.rangeBarriers.add(rangeBarriersItem);
    return this;
  }

   /**
   * Range barriers. Barriers of this kind represent a range with a lower and an upper bound.
   * @return rangeBarriers
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Range barriers. Barriers of this kind represent a range with a lower and an upper bound.")
  @JsonProperty(JSON_PROPERTY_RANGE_BARRIERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers> getRangeBarriers() {
    return rangeBarriers;
  }


  @JsonProperty(JSON_PROPERTY_RANGE_BARRIERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRangeBarriers(java.util.List<SecuritizedDerivativeNotationScreenerValueRangesGetDataRangeBarriers> rangeBarriers) {
    this.rangeBarriers = rangeBarriers;
  }


  public SecuritizedDerivativeNotationScreenerSearchData factorCertificates(SecuritizedDerivativeNotationScreenerValueRangesGetDataFactorCertificates factorCertificates) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataFactorCertificates getFactorCertificates() {
    return factorCertificates;
  }


  @JsonProperty(JSON_PROPERTY_FACTOR_CERTIFICATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFactorCertificates(SecuritizedDerivativeNotationScreenerValueRangesGetDataFactorCertificates factorCertificates) {
    this.factorCertificates = factorCertificates;
  }


  public SecuritizedDerivativeNotationScreenerSearchData nominalCurrency(SecuritizedDerivativeNotationScreenerValueRangesGetDataNominalCurrency nominalCurrency) {
    this.nominalCurrency = nominalCurrency;
    return this;
  }

   /**
   * Get nominalCurrency
   * @return nominalCurrency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NOMINAL_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataNominalCurrency getNominalCurrency() {
    return nominalCurrency;
  }


  @JsonProperty(JSON_PROPERTY_NOMINAL_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNominalCurrency(SecuritizedDerivativeNotationScreenerValueRangesGetDataNominalCurrency nominalCurrency) {
    this.nominalCurrency = nominalCurrency;
  }


  public SecuritizedDerivativeNotationScreenerSearchData currentInterestRate(SecuritizedDerivativeNotationScreenerValueRangesGetDataCurrentInterestRate currentInterestRate) {
    this.currentInterestRate = currentInterestRate;
    return this;
  }

   /**
   * Get currentInterestRate
   * @return currentInterestRate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CURRENT_INTEREST_RATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataCurrentInterestRate getCurrentInterestRate() {
    return currentInterestRate;
  }


  @JsonProperty(JSON_PROPERTY_CURRENT_INTEREST_RATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrentInterestRate(SecuritizedDerivativeNotationScreenerValueRangesGetDataCurrentInterestRate currentInterestRate) {
    this.currentInterestRate = currentInterestRate;
  }


  public SecuritizedDerivativeNotationScreenerSearchData keyFigures(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFigures keyFigures) {
    this.keyFigures = keyFigures;
    return this;
  }

   /**
   * Get keyFigures
   * @return keyFigures
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_KEY_FIGURES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFigures getKeyFigures() {
    return keyFigures;
  }


  @JsonProperty(JSON_PROPERTY_KEY_FIGURES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setKeyFigures(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFigures keyFigures) {
    this.keyFigures = keyFigures;
  }


  public SecuritizedDerivativeNotationScreenerSearchData performance(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance performance) {
    this.performance = performance;
    return this;
  }

   /**
   * Get performance
   * @return performance
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PERFORMANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance getPerformance() {
    return performance;
  }


  @JsonProperty(JSON_PROPERTY_PERFORMANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPerformance(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance performance) {
    this.performance = performance;
  }


  public SecuritizedDerivativeNotationScreenerSearchData volatility(SecuritizedDerivativeNotationScreenerValueRangesGetDataVolatility volatility) {
    this.volatility = volatility;
    return this;
  }

   /**
   * Get volatility
   * @return volatility
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VOLATILITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataVolatility getVolatility() {
    return volatility;
  }


  @JsonProperty(JSON_PROPERTY_VOLATILITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setVolatility(SecuritizedDerivativeNotationScreenerValueRangesGetDataVolatility volatility) {
    this.volatility = volatility;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_search_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerSearchData securitizedDerivativeNotationScreenerSearchData = (SecuritizedDerivativeNotationScreenerSearchData) o;
    return Objects.equals(this.validation, securitizedDerivativeNotationScreenerSearchData.validation) &&
        Objects.equals(this.category, securitizedDerivativeNotationScreenerSearchData.category) &&
        Objects.equals(this.registrationCountry, securitizedDerivativeNotationScreenerSearchData.registrationCountry) &&
        Objects.equals(this.lifeCycle, securitizedDerivativeNotationScreenerSearchData.lifeCycle) &&
        Objects.equals(this.issuer, securitizedDerivativeNotationScreenerSearchData.issuer) &&
        Objects.equals(this.exercise, securitizedDerivativeNotationScreenerSearchData.exercise) &&
        Objects.equals(this.settlement, securitizedDerivativeNotationScreenerSearchData.settlement) &&
        Objects.equals(this.collateralized, securitizedDerivativeNotationScreenerSearchData.collateralized) &&
        Objects.equals(this.quanto, securitizedDerivativeNotationScreenerSearchData.quanto) &&
        Objects.equals(this.capitalProtection, securitizedDerivativeNotationScreenerSearchData.capitalProtection) &&
        Objects.equals(this.underlying, securitizedDerivativeNotationScreenerSearchData.underlying) &&
        Objects.equals(this.cashFlowCurrency, securitizedDerivativeNotationScreenerSearchData.cashFlowCurrency) &&
        Objects.equals(this.singleBarriers, securitizedDerivativeNotationScreenerSearchData.singleBarriers) &&
        Objects.equals(this.rangeBarriers, securitizedDerivativeNotationScreenerSearchData.rangeBarriers) &&
        Objects.equals(this.factorCertificates, securitizedDerivativeNotationScreenerSearchData.factorCertificates) &&
        Objects.equals(this.nominalCurrency, securitizedDerivativeNotationScreenerSearchData.nominalCurrency) &&
        Objects.equals(this.currentInterestRate, securitizedDerivativeNotationScreenerSearchData.currentInterestRate) &&
        Objects.equals(this.keyFigures, securitizedDerivativeNotationScreenerSearchData.keyFigures) &&
        Objects.equals(this.performance, securitizedDerivativeNotationScreenerSearchData.performance) &&
        Objects.equals(this.volatility, securitizedDerivativeNotationScreenerSearchData.volatility);
  }

  @Override
  public int hashCode() {
    return Objects.hash(validation, category, registrationCountry, lifeCycle, issuer, exercise, settlement, collateralized, quanto, capitalProtection, underlying, cashFlowCurrency, singleBarriers, rangeBarriers, factorCertificates, nominalCurrency, currentInterestRate, keyFigures, performance, volatility);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerSearchData {\n");
    sb.append("    validation: ").append(toIndentedString(validation)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    registrationCountry: ").append(toIndentedString(registrationCountry)).append("\n");
    sb.append("    lifeCycle: ").append(toIndentedString(lifeCycle)).append("\n");
    sb.append("    issuer: ").append(toIndentedString(issuer)).append("\n");
    sb.append("    exercise: ").append(toIndentedString(exercise)).append("\n");
    sb.append("    settlement: ").append(toIndentedString(settlement)).append("\n");
    sb.append("    collateralized: ").append(toIndentedString(collateralized)).append("\n");
    sb.append("    quanto: ").append(toIndentedString(quanto)).append("\n");
    sb.append("    capitalProtection: ").append(toIndentedString(capitalProtection)).append("\n");
    sb.append("    underlying: ").append(toIndentedString(underlying)).append("\n");
    sb.append("    cashFlowCurrency: ").append(toIndentedString(cashFlowCurrency)).append("\n");
    sb.append("    singleBarriers: ").append(toIndentedString(singleBarriers)).append("\n");
    sb.append("    rangeBarriers: ").append(toIndentedString(rangeBarriers)).append("\n");
    sb.append("    factorCertificates: ").append(toIndentedString(factorCertificates)).append("\n");
    sb.append("    nominalCurrency: ").append(toIndentedString(nominalCurrency)).append("\n");
    sb.append("    currentInterestRate: ").append(toIndentedString(currentInterestRate)).append("\n");
    sb.append("    keyFigures: ").append(toIndentedString(keyFigures)).append("\n");
    sb.append("    performance: ").append(toIndentedString(performance)).append("\n");
    sb.append("    volatility: ").append(toIndentedString(volatility)).append("\n");
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
