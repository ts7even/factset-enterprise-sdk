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
import com.factset.sdk.NewsAPIforDigitalPortals.models.InlineResponse2001Categories;
import com.factset.sdk.NewsAPIforDigitalPortals.models.InlineResponse2001Chain;
import com.factset.sdk.NewsAPIforDigitalPortals.models.InlineResponse2001Distributor;
import com.factset.sdk.NewsAPIforDigitalPortals.models.InlineResponse2001Language;
import com.factset.sdk.NewsAPIforDigitalPortals.models.InlineResponse2001Publisher;
import com.factset.sdk.NewsAPIforDigitalPortals.models.InlineResponse2001Types;
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
 * InlineResponse2001Data
 */
@JsonPropertyOrder({
  InlineResponse2001Data.JSON_PROPERTY_CODE,
  InlineResponse2001Data.JSON_PROPERTY_TIME,
  InlineResponse2001Data.JSON_PROPERTY_HEADLINE,
  InlineResponse2001Data.JSON_PROPERTY_TYPES,
  InlineResponse2001Data.JSON_PROPERTY_LANGUAGE,
  InlineResponse2001Data.JSON_PROPERTY_DISTRIBUTOR,
  InlineResponse2001Data.JSON_PROPERTY_PUBLISHER,
  InlineResponse2001Data.JSON_PROPERTY_CATEGORIES,
  InlineResponse2001Data.JSON_PROPERTY_CHAIN
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2001Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CODE = "code";
  private String code;

  public static final String JSON_PROPERTY_TIME = "time";
  private String time;

  public static final String JSON_PROPERTY_HEADLINE = "headline";
  private String headline;

  public static final String JSON_PROPERTY_TYPES = "types";
  private java.util.List<InlineResponse2001Types> types = null;

  public static final String JSON_PROPERTY_LANGUAGE = "language";
  private InlineResponse2001Language language;

  public static final String JSON_PROPERTY_DISTRIBUTOR = "distributor";
  private InlineResponse2001Distributor distributor;

  public static final String JSON_PROPERTY_PUBLISHER = "publisher";
  private InlineResponse2001Publisher publisher;

  public static final String JSON_PROPERTY_CATEGORIES = "categories";
  private java.util.List<InlineResponse2001Categories> categories = null;

  public static final String JSON_PROPERTY_CHAIN = "chain";
  private InlineResponse2001Chain chain;


  public InlineResponse2001Data code(String code) {
    this.code = code;
    return this;
  }

   /**
   * Identifier of the news article.
   * @return code
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the news article.")
  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCode() {
    return code;
  }


  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCode(String code) {
    this.code = code;
  }


  public InlineResponse2001Data time(String time) {
    this.time = time;
    return this;
  }

   /**
   * Date and time of the news article.
   * @return time
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date and time of the news article.")
  @JsonProperty(JSON_PROPERTY_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getTime() {
    return time;
  }


  @JsonProperty(JSON_PROPERTY_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTime(String time) {
    this.time = time;
  }


  public InlineResponse2001Data headline(String headline) {
    this.headline = headline;
    return this;
  }

   /**
   * Headline of the news article represented as text with HTML entity encoding but without HTML tags.
   * @return headline
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Headline of the news article represented as text with HTML entity encoding but without HTML tags.")
  @JsonProperty(JSON_PROPERTY_HEADLINE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getHeadline() {
    return headline;
  }


  @JsonProperty(JSON_PROPERTY_HEADLINE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHeadline(String headline) {
    this.headline = headline;
  }


  public InlineResponse2001Data types(java.util.List<InlineResponse2001Types> types) {
    this.types = types;
    return this;
  }

  public InlineResponse2001Data addTypesItem(InlineResponse2001Types typesItem) {
    if (this.types == null) {
      this.types = new java.util.ArrayList<>();
    }
    this.types.add(typesItem);
    return this;
  }

   /**
   * Types of news article. See endpoint &#x60;/news/article/type/list&#x60; for possible values.
   * @return types
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Types of news article. See endpoint `/news/article/type/list` for possible values.")
  @JsonProperty(JSON_PROPERTY_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2001Types> getTypes() {
    return types;
  }


  @JsonProperty(JSON_PROPERTY_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTypes(java.util.List<InlineResponse2001Types> types) {
    this.types = types;
  }


  public InlineResponse2001Data language(InlineResponse2001Language language) {
    this.language = language;
    return this;
  }

   /**
   * Get language
   * @return language
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LANGUAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2001Language getLanguage() {
    return language;
  }


  @JsonProperty(JSON_PROPERTY_LANGUAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLanguage(InlineResponse2001Language language) {
    this.language = language;
  }


  public InlineResponse2001Data distributor(InlineResponse2001Distributor distributor) {
    this.distributor = distributor;
    return this;
  }

   /**
   * Get distributor
   * @return distributor
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DISTRIBUTOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2001Distributor getDistributor() {
    return distributor;
  }


  @JsonProperty(JSON_PROPERTY_DISTRIBUTOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistributor(InlineResponse2001Distributor distributor) {
    this.distributor = distributor;
  }


  public InlineResponse2001Data publisher(InlineResponse2001Publisher publisher) {
    this.publisher = publisher;
    return this;
  }

   /**
   * Get publisher
   * @return publisher
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PUBLISHER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2001Publisher getPublisher() {
    return publisher;
  }


  @JsonProperty(JSON_PROPERTY_PUBLISHER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPublisher(InlineResponse2001Publisher publisher) {
    this.publisher = publisher;
  }


  public InlineResponse2001Data categories(java.util.List<InlineResponse2001Categories> categories) {
    this.categories = categories;
    return this;
  }

  public InlineResponse2001Data addCategoriesItem(InlineResponse2001Categories categoriesItem) {
    if (this.categories == null) {
      this.categories = new java.util.ArrayList<>();
    }
    this.categories.add(categoriesItem);
    return this;
  }

   /**
   * Categories related to the news article. See endpoint &#x60;/category/list&#x60; for possible values.
   * @return categories
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Categories related to the news article. See endpoint `/category/list` for possible values.")
  @JsonProperty(JSON_PROPERTY_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2001Categories> getCategories() {
    return categories;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCategories(java.util.List<InlineResponse2001Categories> categories) {
    this.categories = categories;
  }


  public InlineResponse2001Data chain(InlineResponse2001Chain chain) {
    this.chain = chain;
    return this;
  }

   /**
   * Get chain
   * @return chain
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CHAIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2001Chain getChain() {
    return chain;
  }


  @JsonProperty(JSON_PROPERTY_CHAIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setChain(InlineResponse2001Chain chain) {
    this.chain = chain;
  }


  /**
   * Return true if this inline_response_200_1_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2001Data inlineResponse2001Data = (InlineResponse2001Data) o;
    return Objects.equals(this.code, inlineResponse2001Data.code) &&
        Objects.equals(this.time, inlineResponse2001Data.time) &&
        Objects.equals(this.headline, inlineResponse2001Data.headline) &&
        Objects.equals(this.types, inlineResponse2001Data.types) &&
        Objects.equals(this.language, inlineResponse2001Data.language) &&
        Objects.equals(this.distributor, inlineResponse2001Data.distributor) &&
        Objects.equals(this.publisher, inlineResponse2001Data.publisher) &&
        Objects.equals(this.categories, inlineResponse2001Data.categories) &&
        Objects.equals(this.chain, inlineResponse2001Data.chain);
  }

  @Override
  public int hashCode() {
    return Objects.hash(code, time, headline, types, language, distributor, publisher, categories, chain);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2001Data {\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    time: ").append(toIndentedString(time)).append("\n");
    sb.append("    headline: ").append(toIndentedString(headline)).append("\n");
    sb.append("    types: ").append(toIndentedString(types)).append("\n");
    sb.append("    language: ").append(toIndentedString(language)).append("\n");
    sb.append("    distributor: ").append(toIndentedString(distributor)).append("\n");
    sb.append("    publisher: ").append(toIndentedString(publisher)).append("\n");
    sb.append("    categories: ").append(toIndentedString(categories)).append("\n");
    sb.append("    chain: ").append(toIndentedString(chain)).append("\n");
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
