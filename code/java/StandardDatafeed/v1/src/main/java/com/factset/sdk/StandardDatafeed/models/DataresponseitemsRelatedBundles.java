/*
 * SDF Download API
 * The Standard DataFeed (SDF) Download API provides an alternative method for users to request and retrieve SDF packages (schemas & bundles). This service is not a direct replacement and does not have 100% feature parity with the Loader Application. This API provides an alternative for users who are unable to utilize the Loader application due to following reasons:   - Inability to install 3rd party executables due to Corporate Security policies     - Inability to utilize the Loader application due to limitations or restrictions with the environment used to consume Standard Datafeed   - Clients who are utilizing existing delivery method like FTP, who may want to use a more secured & modern solution     This API allows users to retrieve  - SDF packages(excluding Quant Factor Library) they have subscriptions for, going back to August 31, 2021,  - QFL - Quant Factor Library (Factor Family & Factor Groups) packages they have subscriptions for, going back to January 01, 1995.    Additional parameters are available to filter requests to get the exact files users are looking for.    QFL data is delivered through Content API & Bulk Data API (SDF API)  - Content API : Provides direct access to FactSet-hosted QFL data.  Suitable for interactive, ad hoc QFL requests.  Constraints on large extracts.  Costs are based on consumption, i.e. more calls can result in more costs.  - Bulk Data API : Provides access to download locations of zip files for client download. Suitable for production processes within a client environment. Cost is based on the use case and fixed unless scope changes (same as other SDFs).
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: teammustang@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.StandardDatafeed.models;

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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.StandardDatafeed.JSON;


/**
 * DataresponseitemsRelatedBundles
 */
@JsonPropertyOrder({
  DataresponseitemsRelatedBundles.JSON_PROPERTY_BUNDLE,
  DataresponseitemsRelatedBundles.JSON_PROPERTY_SEQUENCE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DataresponseitemsRelatedBundles implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BUNDLE = "bundle";
  private String bundle;

  public static final String JSON_PROPERTY_SEQUENCE = "sequence";
  private String sequence;

  public DataresponseitemsRelatedBundles() { 
  }

  public DataresponseitemsRelatedBundles bundle(String bundle) {
    this.bundle = bundle;
    return this;
  }

   /**
   * Get bundle
   * @return bundle
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_BUNDLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getBundle() {
    return bundle;
  }


  @JsonProperty(JSON_PROPERTY_BUNDLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBundle(String bundle) {
    this.bundle = bundle;
  }


  public DataresponseitemsRelatedBundles sequence(String sequence) {
    this.sequence = sequence;
    return this;
  }

   /**
   * Get sequence
   * @return sequence
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SEQUENCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSequence() {
    return sequence;
  }


  @JsonProperty(JSON_PROPERTY_SEQUENCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSequence(String sequence) {
    this.sequence = sequence;
  }


  /**
   * Return true if this dataresponseitems_related_bundles object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DataresponseitemsRelatedBundles dataresponseitemsRelatedBundles = (DataresponseitemsRelatedBundles) o;
    return Objects.equals(this.bundle, dataresponseitemsRelatedBundles.bundle) &&
        Objects.equals(this.sequence, dataresponseitemsRelatedBundles.sequence);
  }

  @Override
  public int hashCode() {
    return Objects.hash(bundle, sequence);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DataresponseitemsRelatedBundles {\n");
    sb.append("    bundle: ").append(toIndentedString(bundle)).append("\n");
    sb.append("    sequence: ").append(toIndentedString(sequence)).append("\n");
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

