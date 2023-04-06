/*
 * Stocks API For Digital Portals
 * The Stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years. Search criteria also include benchmark-related attributes (beta, correlation, outperformance), and ESG parameters, based on FactSet’s Truvalue ESG scores.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with daily updates).  This API is fully integrated with the corresponding [Quotes API](https://developer.factset.com/api-catalog/quotes-api-digital-portals), allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals).  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the [Bonds API](https://developer.factset.com/api-catalog/bonds-api-digital-portals) and the [Securitized Derivatives API](https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals) for details.  See also the recipe [\"Enrich Your Digital Portal with Flexible Equity Screening\"](https://developer.factset.com/recipe-catalog/enrich-your-digital-portal-flexible-equity-screening). 
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.StocksAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependentPerShare;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * Currency-dependent key figures.
 */
@ApiModel(description = "Currency-dependent key figures.")
@JsonPropertyOrder({
  InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent.JSON_PROPERTY_MARKET_CAPITALIZATION_SHARES_OUTSTANDING,
  InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent.JSON_PROPERTY_PER_SHARE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_MARKET_CAPITALIZATION_SHARES_OUTSTANDING = "marketCapitalizationSharesOutstanding";
  private JsonNullable<BigDecimal> marketCapitalizationSharesOutstanding = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_PER_SHARE = "perShare";
  private InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependentPerShare perShare;

  public InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent() { 
  }

  public InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent marketCapitalizationSharesOutstanding(BigDecimal marketCapitalizationSharesOutstanding) {
    this.marketCapitalizationSharesOutstanding = JsonNullable.<BigDecimal>of(marketCapitalizationSharesOutstanding);
    return this;
  }

   /**
   * Market capitalization based on the number of outstanding shares.
   * @return marketCapitalizationSharesOutstanding
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Market capitalization based on the number of outstanding shares.")
  @JsonIgnore

  public BigDecimal getMarketCapitalizationSharesOutstanding() {
        return marketCapitalizationSharesOutstanding.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MARKET_CAPITALIZATION_SHARES_OUTSTANDING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getMarketCapitalizationSharesOutstanding_JsonNullable() {
    return marketCapitalizationSharesOutstanding;
  }
  
  @JsonProperty(JSON_PROPERTY_MARKET_CAPITALIZATION_SHARES_OUTSTANDING)
  public void setMarketCapitalizationSharesOutstanding_JsonNullable(JsonNullable<BigDecimal> marketCapitalizationSharesOutstanding) {
    this.marketCapitalizationSharesOutstanding = marketCapitalizationSharesOutstanding;
  }

  public void setMarketCapitalizationSharesOutstanding(BigDecimal marketCapitalizationSharesOutstanding) {
    this.marketCapitalizationSharesOutstanding = JsonNullable.<BigDecimal>of(marketCapitalizationSharesOutstanding);
  }


  public InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent perShare(InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependentPerShare perShare) {
    this.perShare = perShare;
    return this;
  }

   /**
   * Get perShare
   * @return perShare
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PER_SHARE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependentPerShare getPerShare() {
    return perShare;
  }


  @JsonProperty(JSON_PROPERTY_PER_SHARE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPerShare(InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependentPerShare perShare) {
    this.perShare = perShare;
  }


  /**
   * Return true if this inline_response_200_14_currentKeyFigures_company_currencyDependent object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent inlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent = (InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent) o;
    return equalsNullable(this.marketCapitalizationSharesOutstanding, inlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent.marketCapitalizationSharesOutstanding) &&
        Objects.equals(this.perShare, inlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent.perShare);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(marketCapitalizationSharesOutstanding), perShare);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20014CurrentKeyFiguresCompanyCurrencyDependent {\n");
    sb.append("    marketCapitalizationSharesOutstanding: ").append(toIndentedString(marketCapitalizationSharesOutstanding)).append("\n");
    sb.append("    perShare: ").append(toIndentedString(perShare)).append("\n");
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
