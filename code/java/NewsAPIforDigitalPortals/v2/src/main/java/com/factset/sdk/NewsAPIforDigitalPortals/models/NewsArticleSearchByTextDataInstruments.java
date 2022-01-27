/*
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.NewsAPIforDigitalPortals.models;

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
import com.factset.sdk.NewsAPIforDigitalPortals.JSON;


/**
 * Set of stock instruments related to the article. The set is not updated in the course of corporate actions, e.g. when the related company obtains a new instrument after a spin-off.
 */
@ApiModel(description = "Set of stock instruments related to the article. The set is not updated in the course of corporate actions, e.g. when the related company obtains a new instrument after a spin-off.")
@JsonPropertyOrder({
  NewsArticleSearchByTextDataInstruments.JSON_PROPERTY_IDS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class NewsArticleSearchByTextDataInstruments implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_IDS = "ids";
  private java.util.Set<String> ids = null;


  public NewsArticleSearchByTextDataInstruments ids(java.util.Set<String> ids) {
    this.ids = ids;
    return this;
  }

  public NewsArticleSearchByTextDataInstruments addIdsItem(String idsItem) {
    if (this.ids == null) {
      this.ids = new java.util.LinkedHashSet<>();
    }
    this.ids.add(idsItem);
    return this;
  }

   /**
   * Identifiers of the instruments.
   * @return ids
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifiers of the instruments.")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Set<String> getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIds(java.util.Set<String> ids) {
    this.ids = ids;
  }


  /**
   * Return true if this _news_article_searchByText_data_instruments object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NewsArticleSearchByTextDataInstruments newsArticleSearchByTextDataInstruments = (NewsArticleSearchByTextDataInstruments) o;
    return Objects.equals(this.ids, newsArticleSearchByTextDataInstruments.ids);
  }

  @Override
  public int hashCode() {
    return Objects.hash(ids);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NewsArticleSearchByTextDataInstruments {\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
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
