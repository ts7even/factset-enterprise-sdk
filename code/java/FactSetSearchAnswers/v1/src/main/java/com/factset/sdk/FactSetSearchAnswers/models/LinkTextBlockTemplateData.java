/*
 * FactSet Search Answers API
 * The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: FactSearch.Team@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetSearchAnswers.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FactSetSearchAnswers.models.ApplicationLink;
import com.factset.sdk.FactSetSearchAnswers.models.Fdc3Context;
import com.factset.sdk.FactSetSearchAnswers.models.LinkTextBlockTemplateDataAllOf;
import com.factset.sdk.FactSetSearchAnswers.models.TemplateWithLinks;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetSearchAnswers.JSON;


/**
 * LinkTextBlockTemplateData
 */
@JsonPropertyOrder({
  LinkTextBlockTemplateData.JSON_PROPERTY_HEADLINE,
  LinkTextBlockTemplateData.JSON_PROPERTY_FOOTER,
  LinkTextBlockTemplateData.JSON_PROPERTY_FDC3_CONTEXT,
  LinkTextBlockTemplateData.JSON_PROPERTY_APPLICATION_LINKS,
  LinkTextBlockTemplateData.JSON_PROPERTY_LINK,
  LinkTextBlockTemplateData.JSON_PROPERTY_TEXT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class LinkTextBlockTemplateData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_HEADLINE = "headline";
  private String headline;

  public static final String JSON_PROPERTY_FOOTER = "footer";
  private String footer;

  public static final String JSON_PROPERTY_FDC3_CONTEXT = "fdc3Context";
  private Fdc3Context fdc3Context;

  public static final String JSON_PROPERTY_APPLICATION_LINKS = "applicationLinks";
  private java.util.List<ApplicationLink> applicationLinks = null;

  public static final String JSON_PROPERTY_LINK = "link";
  private String link;

  public static final String JSON_PROPERTY_TEXT = "text";
  private String text;

  public LinkTextBlockTemplateData() { 
  }

  @JsonCreator
  public LinkTextBlockTemplateData(
    @JsonProperty(value=JSON_PROPERTY_HEADLINE, required=true) String headline
  ) {
    this();
    this.headline = headline;
  }

  public LinkTextBlockTemplateData headline(String headline) {
    this.headline = headline;
    return this;
  }

   /**
   * Get headline
   * @return headline
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_HEADLINE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getHeadline() {
    return headline;
  }


  @JsonProperty(JSON_PROPERTY_HEADLINE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setHeadline(String headline) {
    this.headline = headline;
  }


  public LinkTextBlockTemplateData footer(String footer) {
    this.footer = footer;
    return this;
  }

   /**
   * Get footer
   * @return footer
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FOOTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFooter() {
    return footer;
  }


  @JsonProperty(JSON_PROPERTY_FOOTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFooter(String footer) {
    this.footer = footer;
  }


  public LinkTextBlockTemplateData fdc3Context(Fdc3Context fdc3Context) {
    this.fdc3Context = fdc3Context;
    return this;
  }

   /**
   * Get fdc3Context
   * @return fdc3Context
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FDC3_CONTEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Fdc3Context getFdc3Context() {
    return fdc3Context;
  }


  @JsonProperty(JSON_PROPERTY_FDC3_CONTEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFdc3Context(Fdc3Context fdc3Context) {
    this.fdc3Context = fdc3Context;
  }


  public LinkTextBlockTemplateData applicationLinks(java.util.List<ApplicationLink> applicationLinks) {
    this.applicationLinks = applicationLinks;
    return this;
  }

  public LinkTextBlockTemplateData addApplicationLinksItem(ApplicationLink applicationLinksItem) {
    if (this.applicationLinks == null) {
      this.applicationLinks = new java.util.ArrayList<>();
    }
    this.applicationLinks.add(applicationLinksItem);
    return this;
  }

   /**
   * Get applicationLinks
   * @return applicationLinks
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_APPLICATION_LINKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<ApplicationLink> getApplicationLinks() {
    return applicationLinks;
  }


  @JsonProperty(JSON_PROPERTY_APPLICATION_LINKS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setApplicationLinks(java.util.List<ApplicationLink> applicationLinks) {
    this.applicationLinks = applicationLinks;
  }


  public LinkTextBlockTemplateData link(String link) {
    this.link = link;
    return this;
  }

   /**
   * Get link
   * @return link
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LINK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getLink() {
    return link;
  }


  @JsonProperty(JSON_PROPERTY_LINK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLink(String link) {
    this.link = link;
  }


  public LinkTextBlockTemplateData text(String text) {
    this.text = text;
    return this;
  }

   /**
   * Get text
   * @return text
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getText() {
    return text;
  }


  @JsonProperty(JSON_PROPERTY_TEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setText(String text) {
    this.text = text;
  }


  /**
   * Return true if this LinkTextBlockTemplateData object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LinkTextBlockTemplateData linkTextBlockTemplateData = (LinkTextBlockTemplateData) o;
    return Objects.equals(this.headline, linkTextBlockTemplateData.headline) &&
        Objects.equals(this.footer, linkTextBlockTemplateData.footer) &&
        Objects.equals(this.fdc3Context, linkTextBlockTemplateData.fdc3Context) &&
        Objects.equals(this.applicationLinks, linkTextBlockTemplateData.applicationLinks) &&
        Objects.equals(this.link, linkTextBlockTemplateData.link) &&
        Objects.equals(this.text, linkTextBlockTemplateData.text);
  }

  @Override
  public int hashCode() {
    return Objects.hash(headline, footer, fdc3Context, applicationLinks, link, text);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LinkTextBlockTemplateData {\n");
    sb.append("    headline: ").append(toIndentedString(headline)).append("\n");
    sb.append("    footer: ").append(toIndentedString(footer)).append("\n");
    sb.append("    fdc3Context: ").append(toIndentedString(fdc3Context)).append("\n");
    sb.append("    applicationLinks: ").append(toIndentedString(applicationLinks)).append("\n");
    sb.append("    link: ").append(toIndentedString(link)).append("\n");
    sb.append("    text: ").append(toIndentedString(text)).append("\n");
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
