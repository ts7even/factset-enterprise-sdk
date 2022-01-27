/*
 * FactSet Procure to Pay API
 * Allows for Provisioning and Entitlement of FactSet accounts.     Authentication is provided via FactSet's [API Key System](https://developer.factset.com/authentication)    Please note that the on-page \"Try it out\" features do not function. You must authorize against our API and make requests directly againt the endpoints.    
 *
 * The version of the OpenAPI document: 1S
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.ProcuretoPayProvisioning.models;

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
import com.factset.sdk.ProcuretoPayProvisioning.JSON;


/**
 * ManageProductIds
 */
@JsonPropertyOrder({
  ManageProductIds.JSON_PROPERTY_UNIQUE_ID,
  ManageProductIds.JSON_PROPERTY_PRODUCT_IDS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ManageProductIds implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_UNIQUE_ID = "uniqueId";
  private String uniqueId;

  public static final String JSON_PROPERTY_PRODUCT_IDS = "productIds";
  private java.util.List<String> productIds = null;


  public ManageProductIds uniqueId(String uniqueId) {
    this.uniqueId = uniqueId;
    return this;
  }

   /**
   * Get uniqueId
   * @return uniqueId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_UNIQUE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getUniqueId() {
    return uniqueId;
  }


  @JsonProperty(JSON_PROPERTY_UNIQUE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUniqueId(String uniqueId) {
    this.uniqueId = uniqueId;
  }


  public ManageProductIds productIds(java.util.List<String> productIds) {
    this.productIds = productIds;
    return this;
  }

  public ManageProductIds addProductIdsItem(String productIdsItem) {
    if (this.productIds == null) {
      this.productIds = new java.util.ArrayList<>();
    }
    this.productIds.add(productIdsItem);
    return this;
  }

   /**
   * Get productIds
   * @return productIds
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getProductIds() {
    return productIds;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductIds(java.util.List<String> productIds) {
    this.productIds = productIds;
  }


  /**
   * Return true if this manageProductIds object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ManageProductIds manageProductIds = (ManageProductIds) o;
    return Objects.equals(this.uniqueId, manageProductIds.uniqueId) &&
        Objects.equals(this.productIds, manageProductIds.productIds);
  }

  @Override
  public int hashCode() {
    return Objects.hash(uniqueId, productIds);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ManageProductIds {\n");
    sb.append("    uniqueId: ").append(toIndentedString(uniqueId)).append("\n");
    sb.append("    productIds: ").append(toIndentedString(productIds)).append("\n");
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
