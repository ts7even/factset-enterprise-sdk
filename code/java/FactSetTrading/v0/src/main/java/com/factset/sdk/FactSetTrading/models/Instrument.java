/*
 * EMS API
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetTrading.models;

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
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetTrading.JSON;


/**
 * Instrument
 */
@JsonPropertyOrder({
  Instrument.JSON_PROPERTY_SYMBOL,
  Instrument.JSON_PROPERTY_SECURITY_TYPE,
  Instrument.JSON_PROPERTY_CFI_CODE,
  Instrument.JSON_PROPERTY_SECURITY_EXCHANGE,
  Instrument.JSON_PROPERTY_ISSUER,
  Instrument.JSON_PROPERTY_SECURITY_DESCRIPTION,
  Instrument.JSON_PROPERTY_MATURITY_MONTH_YEAR,
  Instrument.JSON_PROPERTY_MATURITY_DAY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Instrument implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SYMBOL = "symbol";
  private String symbol;

  public static final String JSON_PROPERTY_SECURITY_TYPE = "securityType";
  private JsonNullable<String> securityType = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CFI_CODE = "cfiCode";
  private JsonNullable<String> cfiCode = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_SECURITY_EXCHANGE = "securityExchange";
  private JsonNullable<String> securityExchange = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_ISSUER = "issuer";
  private JsonNullable<String> issuer = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_SECURITY_DESCRIPTION = "securityDescription";
  private JsonNullable<String> securityDescription = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_MATURITY_MONTH_YEAR = "maturityMonthYear";
  private JsonNullable<String> maturityMonthYear = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_MATURITY_DAY = "maturityDay";
  private JsonNullable<String> maturityDay = JsonNullable.<String>undefined();

  public Instrument() { 
  }

  @JsonCreator
  public Instrument(
    @JsonProperty(value=JSON_PROPERTY_SYMBOL, required=true) String symbol
  ) {
    this();
    this.symbol = symbol;
  }

  public Instrument symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Symbol
   * @return symbol
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "TATAMOTORS", required = true, value = "Symbol")
  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getSymbol() {
    return symbol;
  }


  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }


  public Instrument securityType(String securityType) {
    this.securityType = JsonNullable.<String>of(securityType);
    return this;
  }

   /**
   * Security Type
   * @return securityType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Security Type")
  @JsonIgnore

  public String getSecurityType() {
        return securityType.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_SECURITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getSecurityType_JsonNullable() {
    return securityType;
  }
  
  @JsonProperty(JSON_PROPERTY_SECURITY_TYPE)
  public void setSecurityType_JsonNullable(JsonNullable<String> securityType) {
    this.securityType = securityType;
  }

  public void setSecurityType(String securityType) {
    this.securityType = JsonNullable.<String>of(securityType);
  }


  public Instrument cfiCode(String cfiCode) {
    this.cfiCode = JsonNullable.<String>of(cfiCode);
    return this;
  }

   /**
   * Cfi Code
   * @return cfiCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Cfi Code")
  @JsonIgnore

  public String getCfiCode() {
        return cfiCode.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CFI_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getCfiCode_JsonNullable() {
    return cfiCode;
  }
  
  @JsonProperty(JSON_PROPERTY_CFI_CODE)
  public void setCfiCode_JsonNullable(JsonNullable<String> cfiCode) {
    this.cfiCode = cfiCode;
  }

  public void setCfiCode(String cfiCode) {
    this.cfiCode = JsonNullable.<String>of(cfiCode);
  }


  public Instrument securityExchange(String securityExchange) {
    this.securityExchange = JsonNullable.<String>of(securityExchange);
    return this;
  }

   /**
   * Security exchange
   * @return securityExchange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Security exchange")
  @JsonIgnore

  public String getSecurityExchange() {
        return securityExchange.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_SECURITY_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getSecurityExchange_JsonNullable() {
    return securityExchange;
  }
  
  @JsonProperty(JSON_PROPERTY_SECURITY_EXCHANGE)
  public void setSecurityExchange_JsonNullable(JsonNullable<String> securityExchange) {
    this.securityExchange = securityExchange;
  }

  public void setSecurityExchange(String securityExchange) {
    this.securityExchange = JsonNullable.<String>of(securityExchange);
  }


  public Instrument issuer(String issuer) {
    this.issuer = JsonNullable.<String>of(issuer);
    return this;
  }

   /**
   * Issuer
   * @return issuer
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Issuer")
  @JsonIgnore

  public String getIssuer() {
        return issuer.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_ISSUER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getIssuer_JsonNullable() {
    return issuer;
  }
  
  @JsonProperty(JSON_PROPERTY_ISSUER)
  public void setIssuer_JsonNullable(JsonNullable<String> issuer) {
    this.issuer = issuer;
  }

  public void setIssuer(String issuer) {
    this.issuer = JsonNullable.<String>of(issuer);
  }


  public Instrument securityDescription(String securityDescription) {
    this.securityDescription = JsonNullable.<String>of(securityDescription);
    return this;
  }

   /**
   * Security Description
   * @return securityDescription
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Security Description")
  @JsonIgnore

  public String getSecurityDescription() {
        return securityDescription.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_SECURITY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getSecurityDescription_JsonNullable() {
    return securityDescription;
  }
  
  @JsonProperty(JSON_PROPERTY_SECURITY_DESCRIPTION)
  public void setSecurityDescription_JsonNullable(JsonNullable<String> securityDescription) {
    this.securityDescription = securityDescription;
  }

  public void setSecurityDescription(String securityDescription) {
    this.securityDescription = JsonNullable.<String>of(securityDescription);
  }


  public Instrument maturityMonthYear(String maturityMonthYear) {
    this.maturityMonthYear = JsonNullable.<String>of(maturityMonthYear);
    return this;
  }

   /**
   * Maturity month year
   * @return maturityMonthYear
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Maturity month year")
  @JsonIgnore

  public String getMaturityMonthYear() {
        return maturityMonthYear.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MATURITY_MONTH_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getMaturityMonthYear_JsonNullable() {
    return maturityMonthYear;
  }
  
  @JsonProperty(JSON_PROPERTY_MATURITY_MONTH_YEAR)
  public void setMaturityMonthYear_JsonNullable(JsonNullable<String> maturityMonthYear) {
    this.maturityMonthYear = maturityMonthYear;
  }

  public void setMaturityMonthYear(String maturityMonthYear) {
    this.maturityMonthYear = JsonNullable.<String>of(maturityMonthYear);
  }


  public Instrument maturityDay(String maturityDay) {
    this.maturityDay = JsonNullable.<String>of(maturityDay);
    return this;
  }

   /**
   * Maturity day
   * @return maturityDay
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Maturity day")
  @JsonIgnore

  public String getMaturityDay() {
        return maturityDay.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MATURITY_DAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getMaturityDay_JsonNullable() {
    return maturityDay;
  }
  
  @JsonProperty(JSON_PROPERTY_MATURITY_DAY)
  public void setMaturityDay_JsonNullable(JsonNullable<String> maturityDay) {
    this.maturityDay = maturityDay;
  }

  public void setMaturityDay(String maturityDay) {
    this.maturityDay = JsonNullable.<String>of(maturityDay);
  }


  /**
   * Return true if this Instrument object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Instrument instrument = (Instrument) o;
    return Objects.equals(this.symbol, instrument.symbol) &&
        equalsNullable(this.securityType, instrument.securityType) &&
        equalsNullable(this.cfiCode, instrument.cfiCode) &&
        equalsNullable(this.securityExchange, instrument.securityExchange) &&
        equalsNullable(this.issuer, instrument.issuer) &&
        equalsNullable(this.securityDescription, instrument.securityDescription) &&
        equalsNullable(this.maturityMonthYear, instrument.maturityMonthYear) &&
        equalsNullable(this.maturityDay, instrument.maturityDay);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(symbol, hashCodeNullable(securityType), hashCodeNullable(cfiCode), hashCodeNullable(securityExchange), hashCodeNullable(issuer), hashCodeNullable(securityDescription), hashCodeNullable(maturityMonthYear), hashCodeNullable(maturityDay));
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
    sb.append("class Instrument {\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    securityType: ").append(toIndentedString(securityType)).append("\n");
    sb.append("    cfiCode: ").append(toIndentedString(cfiCode)).append("\n");
    sb.append("    securityExchange: ").append(toIndentedString(securityExchange)).append("\n");
    sb.append("    issuer: ").append(toIndentedString(issuer)).append("\n");
    sb.append("    securityDescription: ").append(toIndentedString(securityDescription)).append("\n");
    sb.append("    maturityMonthYear: ").append(toIndentedString(maturityMonthYear)).append("\n");
    sb.append("    maturityDay: ").append(toIndentedString(maturityDay)).append("\n");
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

