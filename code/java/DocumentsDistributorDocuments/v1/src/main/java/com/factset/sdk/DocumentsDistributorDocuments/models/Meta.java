/*
 * Documents Distributor - Documents API
 * Documents APIs that provide filings such as Global Filings and XML files such as StreetAccount    Global Filings API provides the capability to search and download filings documents from various exchanges around the world. The API also provides relevant metadata such as document source, company identifiers and form type around each filings document. Filings providers currently include EDGAR and SYMEX WebDisclosure.      StreetAccount XML API provides access to historical StreetAccount (SA) news. SA provides a summary for various corporate and market news written by journalist with background in financial markets.    The API delivers SA stories in XML format based on user-specified date input parameters. When the API request is completed, output files will be made available back to the users through a secure URL. This API has three endpoints (1) Request Files (2) Check Status (3) Get Files.   Files delivered contain both metadata and content body in each file. This eliminates the need to make multiple requests through multiple services to get all the information.  
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.DocumentsDistributorDocuments.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.DocumentsDistributorDocuments.models.IsPartialitems;
import com.factset.sdk.DocumentsDistributorDocuments.models.PaginationItems;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.DocumentsDistributorDocuments.JSON;


/**
 * Array of metadata objects
 */
@ApiModel(description = "Array of metadata objects")
@JsonPropertyOrder({
  Meta.JSON_PROPERTY_SORT,
  Meta.JSON_PROPERTY_PAGINATION,
  Meta.JSON_PROPERTY_PARTIAL
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Meta implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SORT = "sort";
  private java.util.List<String> sort = null;

  public static final String JSON_PROPERTY_PAGINATION = "pagination";
  private PaginationItems pagination;

  public static final String JSON_PROPERTY_PARTIAL = "partial";
  private IsPartialitems partial;


  public Meta sort(java.util.List<String> sort) {
    this.sort = sort;
    return this;
  }

  public Meta addSortItem(String sortItem) {
    if (this.sort == null) {
      this.sort = new java.util.ArrayList<>();
    }
    this.sort.add(sortItem);
    return this;
  }

   /**
   * The value in _sort parameter if used in the request
   * @return sort
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The value in _sort parameter if used in the request")
  @JsonProperty(JSON_PROPERTY_SORT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getSort() {
    return sort;
  }


  @JsonProperty(JSON_PROPERTY_SORT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSort(java.util.List<String> sort) {
    this.sort = sort;
  }


  public Meta pagination(PaginationItems pagination) {
    this.pagination = pagination;
    return this;
  }

   /**
   * Get pagination
   * @return pagination
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PAGINATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public PaginationItems getPagination() {
    return pagination;
  }


  @JsonProperty(JSON_PROPERTY_PAGINATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPagination(PaginationItems pagination) {
    this.pagination = pagination;
  }


  public Meta partial(IsPartialitems partial) {
    this.partial = partial;
    return this;
  }

   /**
   * Get partial
   * @return partial
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PARTIAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public IsPartialitems getPartial() {
    return partial;
  }


  @JsonProperty(JSON_PROPERTY_PARTIAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPartial(IsPartialitems partial) {
    this.partial = partial;
  }


  /**
   * Return true if this meta object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Meta meta = (Meta) o;
    return Objects.equals(this.sort, meta.sort) &&
        Objects.equals(this.pagination, meta.pagination) &&
        Objects.equals(this.partial, meta.partial);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sort, pagination, partial);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Meta {\n");
    sb.append("    sort: ").append(toIndentedString(sort)).append("\n");
    sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
    sb.append("    partial: ").append(toIndentedString(partial)).append("\n");
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
