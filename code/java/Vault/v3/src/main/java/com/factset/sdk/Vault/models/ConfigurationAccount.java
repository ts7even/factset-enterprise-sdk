/*
 * Vault API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.12.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Vault.models;

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
import com.factset.sdk.Vault.JSON;


/**
 * ConfigurationAccount
 */
@JsonPropertyOrder({
  ConfigurationAccount.JSON_PROPERTY_BENCHMARK_CODE,
  ConfigurationAccount.JSON_PROPERTY_BENCHMARK_NAME,
  ConfigurationAccount.JSON_PROPERTY_MAX_END_DATE,
  ConfigurationAccount.JSON_PROPERTY_MIN_START_DATE,
  ConfigurationAccount.JSON_PROPERTY_LOCKING_DATE,
  ConfigurationAccount.JSON_PROPERTY_NAME
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ConfigurationAccount implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BENCHMARK_CODE = "benchmarkCode";
  private JsonNullable<String> benchmarkCode = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_BENCHMARK_NAME = "benchmarkName";
  private JsonNullable<String> benchmarkName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_MAX_END_DATE = "maxEndDate";
  private JsonNullable<String> maxEndDate = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_MIN_START_DATE = "minStartDate";
  private JsonNullable<String> minStartDate = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_LOCKING_DATE = "lockingDate";
  private JsonNullable<String> lockingDate = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_NAME = "name";
  private JsonNullable<String> name = JsonNullable.<String>undefined();

  public ConfigurationAccount() { 
  }

  public ConfigurationAccount benchmarkCode(String benchmarkCode) {
    this.benchmarkCode = JsonNullable.<String>of(benchmarkCode);
    return this;
  }

   /**
   * Benchmark code.
   * @return benchmarkCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Benchmark code.")
  @JsonIgnore

  public String getBenchmarkCode() {
        return benchmarkCode.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_BENCHMARK_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getBenchmarkCode_JsonNullable() {
    return benchmarkCode;
  }
  
  @JsonProperty(JSON_PROPERTY_BENCHMARK_CODE)
  public void setBenchmarkCode_JsonNullable(JsonNullable<String> benchmarkCode) {
    this.benchmarkCode = benchmarkCode;
  }

  public void setBenchmarkCode(String benchmarkCode) {
    this.benchmarkCode = JsonNullable.<String>of(benchmarkCode);
  }


  public ConfigurationAccount benchmarkName(String benchmarkName) {
    this.benchmarkName = JsonNullable.<String>of(benchmarkName);
    return this;
  }

   /**
   * Benchmark name.
   * @return benchmarkName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Benchmark name.")
  @JsonIgnore

  public String getBenchmarkName() {
        return benchmarkName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_BENCHMARK_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getBenchmarkName_JsonNullable() {
    return benchmarkName;
  }
  
  @JsonProperty(JSON_PROPERTY_BENCHMARK_NAME)
  public void setBenchmarkName_JsonNullable(JsonNullable<String> benchmarkName) {
    this.benchmarkName = benchmarkName;
  }

  public void setBenchmarkName(String benchmarkName) {
    this.benchmarkName = JsonNullable.<String>of(benchmarkName);
  }


  public ConfigurationAccount maxEndDate(String maxEndDate) {
    this.maxEndDate = JsonNullable.<String>of(maxEndDate);
    return this;
  }

   /**
   * Maximum end date.
   * @return maxEndDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Maximum end date.")
  @JsonIgnore

  public String getMaxEndDate() {
        return maxEndDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MAX_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getMaxEndDate_JsonNullable() {
    return maxEndDate;
  }
  
  @JsonProperty(JSON_PROPERTY_MAX_END_DATE)
  public void setMaxEndDate_JsonNullable(JsonNullable<String> maxEndDate) {
    this.maxEndDate = maxEndDate;
  }

  public void setMaxEndDate(String maxEndDate) {
    this.maxEndDate = JsonNullable.<String>of(maxEndDate);
  }


  public ConfigurationAccount minStartDate(String minStartDate) {
    this.minStartDate = JsonNullable.<String>of(minStartDate);
    return this;
  }

   /**
   * Minimum start date.
   * @return minStartDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Minimum start date.")
  @JsonIgnore

  public String getMinStartDate() {
        return minStartDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MIN_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getMinStartDate_JsonNullable() {
    return minStartDate;
  }
  
  @JsonProperty(JSON_PROPERTY_MIN_START_DATE)
  public void setMinStartDate_JsonNullable(JsonNullable<String> minStartDate) {
    this.minStartDate = minStartDate;
  }

  public void setMinStartDate(String minStartDate) {
    this.minStartDate = JsonNullable.<String>of(minStartDate);
  }


  public ConfigurationAccount lockingDate(String lockingDate) {
    this.lockingDate = JsonNullable.<String>of(lockingDate);
    return this;
  }

   /**
   * Locking date.
   * @return lockingDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Locking date.")
  @JsonIgnore

  public String getLockingDate() {
        return lockingDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_LOCKING_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getLockingDate_JsonNullable() {
    return lockingDate;
  }
  
  @JsonProperty(JSON_PROPERTY_LOCKING_DATE)
  public void setLockingDate_JsonNullable(JsonNullable<String> lockingDate) {
    this.lockingDate = lockingDate;
  }

  public void setLockingDate(String lockingDate) {
    this.lockingDate = JsonNullable.<String>of(lockingDate);
  }


  public ConfigurationAccount name(String name) {
    this.name = JsonNullable.<String>of(name);
    return this;
  }

   /**
   * Account name.
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Account name.")
  @JsonIgnore

  public String getName() {
        return name.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getName_JsonNullable() {
    return name;
  }
  
  @JsonProperty(JSON_PROPERTY_NAME)
  public void setName_JsonNullable(JsonNullable<String> name) {
    this.name = name;
  }

  public void setName(String name) {
    this.name = JsonNullable.<String>of(name);
  }


  /**
   * Return true if this ConfigurationAccount object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ConfigurationAccount configurationAccount = (ConfigurationAccount) o;
    return equalsNullable(this.benchmarkCode, configurationAccount.benchmarkCode) &&
        equalsNullable(this.benchmarkName, configurationAccount.benchmarkName) &&
        equalsNullable(this.maxEndDate, configurationAccount.maxEndDate) &&
        equalsNullable(this.minStartDate, configurationAccount.minStartDate) &&
        equalsNullable(this.lockingDate, configurationAccount.lockingDate) &&
        equalsNullable(this.name, configurationAccount.name);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(benchmarkCode), hashCodeNullable(benchmarkName), hashCodeNullable(maxEndDate), hashCodeNullable(minStartDate), hashCodeNullable(lockingDate), hashCodeNullable(name));
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
    sb.append("class ConfigurationAccount {\n");
    sb.append("    benchmarkCode: ").append(toIndentedString(benchmarkCode)).append("\n");
    sb.append("    benchmarkName: ").append(toIndentedString(benchmarkName)).append("\n");
    sb.append("    maxEndDate: ").append(toIndentedString(maxEndDate)).append("\n");
    sb.append("    minStartDate: ").append(toIndentedString(minStartDate)).append("\n");
    sb.append("    lockingDate: ").append(toIndentedString(lockingDate)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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

