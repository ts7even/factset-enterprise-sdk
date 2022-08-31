/*
 * FactSet Options API
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetOptions.models;

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
import java.time.LocalDate;
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetOptions.JSON;


/**
 * Greeks Response fields
 */
@ApiModel(description = "Greeks Response fields")
@JsonPropertyOrder({
  Greeks.JSON_PROPERTY_DELTA,
  Greeks.JSON_PROPERTY_FSYM_ID,
  Greeks.JSON_PROPERTY_GAMMA,
  Greeks.JSON_PROPERTY_REQUEST_ID,
  Greeks.JSON_PROPERTY_RHO,
  Greeks.JSON_PROPERTY_THETA,
  Greeks.JSON_PROPERTY_VEGA,
  Greeks.JSON_PROPERTY_DATE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Greeks implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DELTA = "delta";
  private JsonNullable<Double> delta = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private JsonNullable<String> fsymId = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_GAMMA = "gamma";
  private JsonNullable<Double> gamma = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_RHO = "rho";
  private JsonNullable<Double> rho = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_THETA = "theta";
  private JsonNullable<Double> theta = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_VEGA = "vega";
  private JsonNullable<Double> vega = JsonNullable.<Double>undefined();

  public static final String JSON_PROPERTY_DATE = "date";
  private JsonNullable<LocalDate> date = JsonNullable.<LocalDate>undefined();

  public Greeks() { 
  }

  public Greeks delta(Double delta) {
    this.delta = JsonNullable.<Double>of(delta);
    return this;
  }

   /**
   * The delta value of the option. Refer to the &#x60;greeks&#x60; endpoint description for more details
   * @return delta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.973638814832741", value = "The delta value of the option. Refer to the `greeks` endpoint description for more details")
  @JsonIgnore

  public Double getDelta() {
        return delta.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_DELTA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getDelta_JsonNullable() {
    return delta;
  }
  
  @JsonProperty(JSON_PROPERTY_DELTA)
  public void setDelta_JsonNullable(JsonNullable<Double> delta) {
    this.delta = delta;
  }

  public void setDelta(Double delta) {
    this.delta = JsonNullable.<Double>of(delta);
  }


  public Greeks fsymId(String fsymId) {
    this.fsymId = JsonNullable.<String>of(fsymId);
    return this;
  }

   /**
   * FactSet&#39;s Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options)
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "TSLA.US#C00LP", value = "FactSet's Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options)")
  @JsonIgnore

  public String getFsymId() {
        return fsymId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getFsymId_JsonNullable() {
    return fsymId;
  }
  
  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  public void setFsymId_JsonNullable(JsonNullable<String> fsymId) {
    this.fsymId = fsymId;
  }

  public void setFsymId(String fsymId) {
    this.fsymId = JsonNullable.<String>of(fsymId);
  }


  public Greeks gamma(Double gamma) {
    this.gamma = JsonNullable.<Double>of(gamma);
    return this;
  }

   /**
   * The gamma value of the option. Refer to the &#x60;greeks&#x60; endpoint description for more details
   * @return gamma
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.0000276813921231278", value = "The gamma value of the option. Refer to the `greeks` endpoint description for more details")
  @JsonIgnore

  public Double getGamma() {
        return gamma.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_GAMMA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getGamma_JsonNullable() {
    return gamma;
  }
  
  @JsonProperty(JSON_PROPERTY_GAMMA)
  public void setGamma_JsonNullable(JsonNullable<Double> gamma) {
    this.gamma = gamma;
  }

  public void setGamma(Double gamma) {
    this.gamma = JsonNullable.<Double>of(gamma);
  }


  public Greeks requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * The requested identifier submitted in the query.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "TSLA.US#C00LP", value = "The requested identifier submitted in the query.")
  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRequestId() {
    return requestId;
  }


  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequestId(String requestId) {
    this.requestId = requestId;
  }


  public Greeks rho(Double rho) {
    this.rho = JsonNullable.<Double>of(rho);
    return this;
  }

   /**
   * The rho value of the option. Refer to the &#x60;greeks&#x60; endpoint description for more details
   * @return rho
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.094465131548418", value = "The rho value of the option. Refer to the `greeks` endpoint description for more details")
  @JsonIgnore

  public Double getRho() {
        return rho.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_RHO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getRho_JsonNullable() {
    return rho;
  }
  
  @JsonProperty(JSON_PROPERTY_RHO)
  public void setRho_JsonNullable(JsonNullable<Double> rho) {
    this.rho = rho;
  }

  public void setRho(Double rho) {
    this.rho = JsonNullable.<Double>of(rho);
  }


  public Greeks theta(Double theta) {
    this.theta = JsonNullable.<Double>of(theta);
    return this;
  }

   /**
   * The theta value of the option. Refer to the &#x60;greeks&#x60; endpoint description for more details
   * @return theta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.473699140972176", value = "The theta value of the option. Refer to the `greeks` endpoint description for more details")
  @JsonIgnore

  public Double getTheta() {
        return theta.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_THETA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getTheta_JsonNullable() {
    return theta;
  }
  
  @JsonProperty(JSON_PROPERTY_THETA)
  public void setTheta_JsonNullable(JsonNullable<Double> theta) {
    this.theta = theta;
  }

  public void setTheta(Double theta) {
    this.theta = JsonNullable.<Double>of(theta);
  }


  public Greeks vega(Double vega) {
    this.vega = JsonNullable.<Double>of(vega);
    return this;
  }

   /**
   * The vega value of the option. Refer to the &#x60;greeks&#x60; endpoint description for more details
   * @return vega
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.246816993561083", value = "The vega value of the option. Refer to the `greeks` endpoint description for more details")
  @JsonIgnore

  public Double getVega() {
        return vega.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_VEGA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Double> getVega_JsonNullable() {
    return vega;
  }
  
  @JsonProperty(JSON_PROPERTY_VEGA)
  public void setVega_JsonNullable(JsonNullable<Double> vega) {
    this.vega = vega;
  }

  public void setVega(Double vega) {
    this.vega = JsonNullable.<Double>of(vega);
  }


  public Greeks date(LocalDate date) {
    this.date = JsonNullable.<LocalDate>of(date);
    return this;
  }

   /**
   * The date the data is as of in YYYY-MM-DD format.
   * @return date
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Fri May 07 00:00:00 UTC 2021", value = "The date the data is as of in YYYY-MM-DD format.")
  @JsonIgnore

  public LocalDate getDate() {
        return date.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<LocalDate> getDate_JsonNullable() {
    return date;
  }
  
  @JsonProperty(JSON_PROPERTY_DATE)
  public void setDate_JsonNullable(JsonNullable<LocalDate> date) {
    this.date = date;
  }

  public void setDate(LocalDate date) {
    this.date = JsonNullable.<LocalDate>of(date);
  }


  /**
   * Return true if this greeks object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Greeks greeks = (Greeks) o;
    return equalsNullable(this.delta, greeks.delta) &&
        equalsNullable(this.fsymId, greeks.fsymId) &&
        equalsNullable(this.gamma, greeks.gamma) &&
        Objects.equals(this.requestId, greeks.requestId) &&
        equalsNullable(this.rho, greeks.rho) &&
        equalsNullable(this.theta, greeks.theta) &&
        equalsNullable(this.vega, greeks.vega) &&
        equalsNullable(this.date, greeks.date);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(delta), hashCodeNullable(fsymId), hashCodeNullable(gamma), requestId, hashCodeNullable(rho), hashCodeNullable(theta), hashCodeNullable(vega), hashCodeNullable(date));
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
    sb.append("class Greeks {\n");
    sb.append("    delta: ").append(toIndentedString(delta)).append("\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    gamma: ").append(toIndentedString(gamma)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    rho: ").append(toIndentedString(rho)).append("\n");
    sb.append("    theta: ").append(toIndentedString(theta)).append("\n");
    sb.append("    vega: ").append(toIndentedString(vega)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
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

