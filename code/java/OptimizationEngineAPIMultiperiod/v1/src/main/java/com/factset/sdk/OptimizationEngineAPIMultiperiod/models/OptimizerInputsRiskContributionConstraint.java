/*
 * fpo_mp_input
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OptimizationEngineAPIMultiperiod.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsConstraintGroup;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsEConstraintLevelEnum;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsEConstraintRiskTypeEnum;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsEFPOConstraintAssetTypeEnum;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsValue;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.JSON;


/**
 * 17
 */
@ApiModel(description = "17")
@JsonPropertyOrder({
  OptimizerInputsRiskContributionConstraint.JSON_PROPERTY_NAME,
  OptimizerInputsRiskContributionConstraint.JSON_PROPERTY_MAX_PERCENT,
  OptimizerInputsRiskContributionConstraint.JSON_PROPERTY_CUSTOM_ASSET,
  OptimizerInputsRiskContributionConstraint.JSON_PROPERTY_GROUPS,
  OptimizerInputsRiskContributionConstraint.JSON_PROPERTY_LEVEL,
  OptimizerInputsRiskContributionConstraint.JSON_PROPERTY_ASSET_TYPE,
  OptimizerInputsRiskContributionConstraint.JSON_PROPERTY_RISK_TYPE,
  OptimizerInputsRiskContributionConstraint.JSON_PROPERTY_HIERARCHY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class OptimizerInputsRiskContributionConstraint implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_MAX_PERCENT = "max_percent";
  private OptimizerInputsValue maxPercent;

  public static final String JSON_PROPERTY_CUSTOM_ASSET = "custom_asset";
  private OptimizerInputsValue customAsset;

  public static final String JSON_PROPERTY_GROUPS = "groups";
  private java.util.List<OptimizerInputsConstraintGroup> groups = null;

  public static final String JSON_PROPERTY_LEVEL = "level";
  private OptimizerInputsEConstraintLevelEnum level;

  public static final String JSON_PROPERTY_ASSET_TYPE = "asset_type";
  private OptimizerInputsEFPOConstraintAssetTypeEnum assetType;

  public static final String JSON_PROPERTY_RISK_TYPE = "risk_type";
  private OptimizerInputsEConstraintRiskTypeEnum riskType;

  public static final String JSON_PROPERTY_HIERARCHY = "hierarchy";
  private Integer hierarchy;

  public OptimizerInputsRiskContributionConstraint() { 
  }

  public OptimizerInputsRiskContributionConstraint name(String name) {
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

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public OptimizerInputsRiskContributionConstraint maxPercent(OptimizerInputsValue maxPercent) {
    this.maxPercent = maxPercent;
    return this;
  }

   /**
   * Get maxPercent
   * @return maxPercent
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MAX_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsValue getMaxPercent() {
    return maxPercent;
  }


  @JsonProperty(JSON_PROPERTY_MAX_PERCENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaxPercent(OptimizerInputsValue maxPercent) {
    this.maxPercent = maxPercent;
  }


  public OptimizerInputsRiskContributionConstraint customAsset(OptimizerInputsValue customAsset) {
    this.customAsset = customAsset;
    return this;
  }

   /**
   * Get customAsset
   * @return customAsset
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CUSTOM_ASSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsValue getCustomAsset() {
    return customAsset;
  }


  @JsonProperty(JSON_PROPERTY_CUSTOM_ASSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCustomAsset(OptimizerInputsValue customAsset) {
    this.customAsset = customAsset;
  }


  public OptimizerInputsRiskContributionConstraint groups(java.util.List<OptimizerInputsConstraintGroup> groups) {
    this.groups = groups;
    return this;
  }

  public OptimizerInputsRiskContributionConstraint addGroupsItem(OptimizerInputsConstraintGroup groupsItem) {
    if (this.groups == null) {
      this.groups = new java.util.ArrayList<>();
    }
    this.groups.add(groupsItem);
    return this;
  }

   /**
   * Get groups
   * @return groups
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_GROUPS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<OptimizerInputsConstraintGroup> getGroups() {
    return groups;
  }


  @JsonProperty(JSON_PROPERTY_GROUPS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGroups(java.util.List<OptimizerInputsConstraintGroup> groups) {
    this.groups = groups;
  }


  public OptimizerInputsRiskContributionConstraint level(OptimizerInputsEConstraintLevelEnum level) {
    this.level = level;
    return this;
  }

   /**
   * Get level
   * @return level
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LEVEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsEConstraintLevelEnum getLevel() {
    return level;
  }


  @JsonProperty(JSON_PROPERTY_LEVEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLevel(OptimizerInputsEConstraintLevelEnum level) {
    this.level = level;
  }


  public OptimizerInputsRiskContributionConstraint assetType(OptimizerInputsEFPOConstraintAssetTypeEnum assetType) {
    this.assetType = assetType;
    return this;
  }

   /**
   * Get assetType
   * @return assetType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ASSET_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsEFPOConstraintAssetTypeEnum getAssetType() {
    return assetType;
  }


  @JsonProperty(JSON_PROPERTY_ASSET_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAssetType(OptimizerInputsEFPOConstraintAssetTypeEnum assetType) {
    this.assetType = assetType;
  }


  public OptimizerInputsRiskContributionConstraint riskType(OptimizerInputsEConstraintRiskTypeEnum riskType) {
    this.riskType = riskType;
    return this;
  }

   /**
   * Get riskType
   * @return riskType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RISK_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsEConstraintRiskTypeEnum getRiskType() {
    return riskType;
  }


  @JsonProperty(JSON_PROPERTY_RISK_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRiskType(OptimizerInputsEConstraintRiskTypeEnum riskType) {
    this.riskType = riskType;
  }


  public OptimizerInputsRiskContributionConstraint hierarchy(Integer hierarchy) {
    this.hierarchy = hierarchy;
    return this;
  }

   /**
   * Get hierarchy
   * @return hierarchy
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_HIERARCHY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getHierarchy() {
    return hierarchy;
  }


  @JsonProperty(JSON_PROPERTY_HIERARCHY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHierarchy(Integer hierarchy) {
    this.hierarchy = hierarchy;
  }


  /**
   * Return true if this optimizer.inputs.RiskContributionConstraint object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OptimizerInputsRiskContributionConstraint optimizerInputsRiskContributionConstraint = (OptimizerInputsRiskContributionConstraint) o;
    return Objects.equals(this.name, optimizerInputsRiskContributionConstraint.name) &&
        Objects.equals(this.maxPercent, optimizerInputsRiskContributionConstraint.maxPercent) &&
        Objects.equals(this.customAsset, optimizerInputsRiskContributionConstraint.customAsset) &&
        Objects.equals(this.groups, optimizerInputsRiskContributionConstraint.groups) &&
        Objects.equals(this.level, optimizerInputsRiskContributionConstraint.level) &&
        Objects.equals(this.assetType, optimizerInputsRiskContributionConstraint.assetType) &&
        Objects.equals(this.riskType, optimizerInputsRiskContributionConstraint.riskType) &&
        Objects.equals(this.hierarchy, optimizerInputsRiskContributionConstraint.hierarchy);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, maxPercent, customAsset, groups, level, assetType, riskType, hierarchy);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OptimizerInputsRiskContributionConstraint {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    maxPercent: ").append(toIndentedString(maxPercent)).append("\n");
    sb.append("    customAsset: ").append(toIndentedString(customAsset)).append("\n");
    sb.append("    groups: ").append(toIndentedString(groups)).append("\n");
    sb.append("    level: ").append(toIndentedString(level)).append("\n");
    sb.append("    assetType: ").append(toIndentedString(assetType)).append("\n");
    sb.append("    riskType: ").append(toIndentedString(riskType)).append("\n");
    sb.append("    hierarchy: ").append(toIndentedString(hierarchy)).append("\n");
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
