/*
 * FactSet Benchmarks API
 * FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon. 
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetBenchmarks.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FactSetBenchmarks.models.FamilyFilter;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetBenchmarks.JSON;


/**
 * BenchmarkIdListRequest
 */
@JsonPropertyOrder({
  BenchmarkIdListRequest.JSON_PROPERTY_FAMILY_FILTER
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class BenchmarkIdListRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FAMILY_FILTER = "familyFilter";
  private FamilyFilter familyFilter;


  public BenchmarkIdListRequest familyFilter(FamilyFilter familyFilter) {
    this.familyFilter = familyFilter;
    return this;
  }

   /**
   * Get familyFilter
   * @return familyFilter
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FAMILY_FILTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public FamilyFilter getFamilyFilter() {
    return familyFilter;
  }


  @JsonProperty(JSON_PROPERTY_FAMILY_FILTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFamilyFilter(FamilyFilter familyFilter) {
    this.familyFilter = familyFilter;
  }


  /**
   * Return true if this benchmarkIdListRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BenchmarkIdListRequest benchmarkIdListRequest = (BenchmarkIdListRequest) o;
    return Objects.equals(this.familyFilter, benchmarkIdListRequest.familyFilter);
  }

  @Override
  public int hashCode() {
    return Objects.hash(familyFilter);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BenchmarkIdListRequest {\n");
    sb.append("    familyFilter: ").append(toIndentedString(familyFilter)).append("\n");
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
