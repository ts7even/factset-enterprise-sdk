/*
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OpenRisk.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.OpenRisk.models.HoldingAllOf;
import com.factset.sdk.OpenRisk.models.IDsAndMarketValues;
import com.factset.sdk.OpenRisk.models.SecurityGroup;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OpenRisk.JSON;


/**
 * Security IDs and market values plus optional security grouping; the arrays must have the same number of items. Public security IDs such as SEDOL, CUSIP, ISIN, and Ticker are supported. If proprietary IDs are provided, they need to be mapped via composite assets. Market values are used to calculate weights and do not have to be normalized, but need to be denominated in the single same currency ISO.
 */
@ApiModel(description = "Security IDs and market values plus optional security grouping; the arrays must have the same number of items. Public security IDs such as SEDOL, CUSIP, ISIN, and Ticker are supported. If proprietary IDs are provided, they need to be mapped via composite assets. Market values are used to calculate weights and do not have to be normalized, but need to be denominated in the single same currency ISO.")
@JsonPropertyOrder({
  Holding.JSON_PROPERTY_IDS,
  Holding.JSON_PROPERTY_MARKET_VALUES,
  Holding.JSON_PROPERTY_GROUPING,
  Holding.JSON_PROPERTY_UNCOVERED_ASSETS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Holding implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_IDS = "ids";
  private java.util.List<String> ids = new java.util.ArrayList<>();

  public static final String JSON_PROPERTY_MARKET_VALUES = "marketValues";
  private java.util.List<Double> marketValues = new java.util.ArrayList<>();

  public static final String JSON_PROPERTY_GROUPING = "grouping";
  private SecurityGroup grouping;

  /**
   * Uncovered asset weight handling. Default values: &#39;portfolio&#39; -&gt; ExcludeToGlobalCash, &#39;benchmark&#39; -&gt; Normalize, &#39;market&#39; -&gt; Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix)
   */
  public enum UncoveredAssetsEnum {
    NORMALIZE("Normalize"),
    
    EXCLUDETOGLOBALCASH("ExcludeToGlobalCash"),
    
    NORMALIZEWITHGROUPCASH("NormalizeWithGroupCash"),
    
    EXCLUDETOCASHWITHINGROUP("ExcludeToCashWithinGroup"),
    
    NORMALIZEWITHINGROUP("NormalizeWithinGroup");

    private String value;

    UncoveredAssetsEnum(String value) {
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
    public static UncoveredAssetsEnum fromValue(String value) {
      for (UncoveredAssetsEnum b : UncoveredAssetsEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_UNCOVERED_ASSETS = "uncoveredAssets";
  private UncoveredAssetsEnum uncoveredAssets;

  public Holding() { 
  }

  @JsonCreator
  public Holding(
    @JsonProperty(value=JSON_PROPERTY_IDS, required=true) java.util.List<String> ids, 
    @JsonProperty(value=JSON_PROPERTY_MARKET_VALUES, required=true) java.util.List<Double> marketValues
  ) {
    this();
    this.ids = ids;
    this.marketValues = marketValues;
  }

  public Holding ids(java.util.List<String> ids) {
    this.ids = ids;
    return this;
  }

  public Holding addIdsItem(String idsItem) {
    this.ids.add(idsItem);
    return this;
  }

   /**
   * Get ids
   * @return ids
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<String> getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setIds(java.util.List<String> ids) {
    this.ids = ids;
  }


  public Holding marketValues(java.util.List<Double> marketValues) {
    this.marketValues = marketValues;
    return this;
  }

  public Holding addMarketValuesItem(Double marketValuesItem) {
    this.marketValues.add(marketValuesItem);
    return this;
  }

   /**
   * Get marketValues
   * @return marketValues
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_MARKET_VALUES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<Double> getMarketValues() {
    return marketValues;
  }


  @JsonProperty(JSON_PROPERTY_MARKET_VALUES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMarketValues(java.util.List<Double> marketValues) {
    this.marketValues = marketValues;
  }


  public Holding grouping(SecurityGroup grouping) {
    this.grouping = grouping;
    return this;
  }

   /**
   * Get grouping
   * @return grouping
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_GROUPING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecurityGroup getGrouping() {
    return grouping;
  }


  @JsonProperty(JSON_PROPERTY_GROUPING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGrouping(SecurityGroup grouping) {
    this.grouping = grouping;
  }


  public Holding uncoveredAssets(UncoveredAssetsEnum uncoveredAssets) {
    this.uncoveredAssets = uncoveredAssets;
    return this;
  }

   /**
   * Uncovered asset weight handling. Default values: &#39;portfolio&#39; -&gt; ExcludeToGlobalCash, &#39;benchmark&#39; -&gt; Normalize, &#39;market&#39; -&gt; Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix)
   * @return uncoveredAssets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Uncovered asset weight handling. Default values: 'portfolio' -> ExcludeToGlobalCash, 'benchmark' -> Normalize, 'market' -> Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix)")
  @JsonProperty(JSON_PROPERTY_UNCOVERED_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public UncoveredAssetsEnum getUncoveredAssets() {
    return uncoveredAssets;
  }


  @JsonProperty(JSON_PROPERTY_UNCOVERED_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUncoveredAssets(UncoveredAssetsEnum uncoveredAssets) {
    this.uncoveredAssets = uncoveredAssets;
  }


  /**
   * Return true if this Holding object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Holding holding = (Holding) o;
    return Objects.equals(this.ids, holding.ids) &&
        Objects.equals(this.marketValues, holding.marketValues) &&
        Objects.equals(this.grouping, holding.grouping) &&
        Objects.equals(this.uncoveredAssets, holding.uncoveredAssets);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ids, marketValues, grouping, uncoveredAssets);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Holding {\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
    sb.append("    marketValues: ").append(toIndentedString(marketValues)).append("\n");
    sb.append("    grouping: ").append(toIndentedString(grouping)).append("\n");
    sb.append("    uncoveredAssets: ").append(toIndentedString(uncoveredAssets)).append("\n");
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
