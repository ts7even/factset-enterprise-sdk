/*
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
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
import com.factset.sdk.OpenRisk.models.ResolvedDates;
import com.factset.sdk.OpenRisk.models.SecurityOnlyLabels;
import com.factset.sdk.OpenRisk.models.WarningItem;
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
 * The &#39;meta&#39; object in HTTP 200 success responses
 */
@ApiModel(description = "The 'meta' object in HTTP 200 success responses")
@JsonPropertyOrder({
  SecurityOnlySuccessResponseMeta.JSON_PROPERTY_LABELS,
  SecurityOnlySuccessResponseMeta.JSON_PROPERTY_RESOLVED_DATES,
  SecurityOnlySuccessResponseMeta.JSON_PROPERTY_WARNINGS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecurityOnlySuccessResponseMeta implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LABELS = "labels";
  private SecurityOnlyLabels labels;

  public static final String JSON_PROPERTY_RESOLVED_DATES = "resolvedDates";
  private ResolvedDates resolvedDates;

  public static final String JSON_PROPERTY_WARNINGS = "warnings";
  private java.util.List<WarningItem> warnings = null;

  public SecurityOnlySuccessResponseMeta() { 
  }

  @JsonCreator
  public SecurityOnlySuccessResponseMeta(
    @JsonProperty(value=JSON_PROPERTY_LABELS, required=true) SecurityOnlyLabels labels, 
    @JsonProperty(value=JSON_PROPERTY_RESOLVED_DATES, required=true) ResolvedDates resolvedDates
  ) {
    this();
    this.labels = labels;
    this.resolvedDates = resolvedDates;
  }

  public SecurityOnlySuccessResponseMeta labels(SecurityOnlyLabels labels) {
    this.labels = labels;
    return this;
  }

   /**
   * Get labels
   * @return labels
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_LABELS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public SecurityOnlyLabels getLabels() {
    return labels;
  }


  @JsonProperty(JSON_PROPERTY_LABELS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLabels(SecurityOnlyLabels labels) {
    this.labels = labels;
  }


  public SecurityOnlySuccessResponseMeta resolvedDates(ResolvedDates resolvedDates) {
    this.resolvedDates = resolvedDates;
    return this;
  }

   /**
   * Get resolvedDates
   * @return resolvedDates
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_RESOLVED_DATES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ResolvedDates getResolvedDates() {
    return resolvedDates;
  }


  @JsonProperty(JSON_PROPERTY_RESOLVED_DATES)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setResolvedDates(ResolvedDates resolvedDates) {
    this.resolvedDates = resolvedDates;
  }


  public SecurityOnlySuccessResponseMeta warnings(java.util.List<WarningItem> warnings) {
    this.warnings = warnings;
    return this;
  }

  public SecurityOnlySuccessResponseMeta addWarningsItem(WarningItem warningsItem) {
    if (this.warnings == null) {
      this.warnings = new java.util.ArrayList<>();
    }
    this.warnings.add(warningsItem);
    return this;
  }

   /**
   * Get warnings
   * @return warnings
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_WARNINGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<WarningItem> getWarnings() {
    return warnings;
  }


  @JsonProperty(JSON_PROPERTY_WARNINGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWarnings(java.util.List<WarningItem> warnings) {
    this.warnings = warnings;
  }


  /**
   * Return true if this SecurityOnlySuccessResponseMeta object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecurityOnlySuccessResponseMeta securityOnlySuccessResponseMeta = (SecurityOnlySuccessResponseMeta) o;
    return Objects.equals(this.labels, securityOnlySuccessResponseMeta.labels) &&
        Objects.equals(this.resolvedDates, securityOnlySuccessResponseMeta.resolvedDates) &&
        Objects.equals(this.warnings, securityOnlySuccessResponseMeta.warnings);
  }

  @Override
  public int hashCode() {
    return Objects.hash(labels, resolvedDates, warnings);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecurityOnlySuccessResponseMeta {\n");
    sb.append("    labels: ").append(toIndentedString(labels)).append("\n");
    sb.append("    resolvedDates: ").append(toIndentedString(resolvedDates)).append("\n");
    sb.append("    warnings: ").append(toIndentedString(warnings)).append("\n");
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

