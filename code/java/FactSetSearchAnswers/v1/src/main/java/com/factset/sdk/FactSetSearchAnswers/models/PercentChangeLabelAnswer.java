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
import com.factset.sdk.FactSetSearchAnswers.models.AnswerWithTitle;
import com.factset.sdk.FactSetSearchAnswers.models.PercentChangeLabelAnswerAllOf;
import com.factset.sdk.FactSetSearchAnswers.models.PercentChangeLabelTemplateData;
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
 * PercentChangeLabelAnswer
 */
@JsonPropertyOrder({
  PercentChangeLabelAnswer.JSON_PROPERTY_TEMPLATE,
  PercentChangeLabelAnswer.JSON_PROPERTY_TITLE,
  PercentChangeLabelAnswer.JSON_PROPERTY_TEMPLATE_DATA
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class PercentChangeLabelAnswer implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TEMPLATE = "template";
  private String template;

  public static final String JSON_PROPERTY_TITLE = "title";
  private String title;

  public static final String JSON_PROPERTY_TEMPLATE_DATA = "templateData";
  private PercentChangeLabelTemplateData templateData;

  public PercentChangeLabelAnswer() { 
  }

  @JsonCreator
  public PercentChangeLabelAnswer(
    @JsonProperty(value=JSON_PROPERTY_TEMPLATE, required=true) String template, 
    @JsonProperty(value=JSON_PROPERTY_TITLE, required=true) String title, 
    @JsonProperty(value=JSON_PROPERTY_TEMPLATE_DATA, required=true) PercentChangeLabelTemplateData templateData
  ) {
    this();
    this.template = template;
    this.title = title;
    this.templateData = templateData;
  }

  public PercentChangeLabelAnswer template(String template) {
    this.template = template;
    return this;
  }

   /**
   * Get template
   * @return template
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_TEMPLATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getTemplate() {
    return template;
  }


  @JsonProperty(JSON_PROPERTY_TEMPLATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTemplate(String template) {
    this.template = template;
  }


  public PercentChangeLabelAnswer title(String title) {
    this.title = title;
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTitle(String title) {
    this.title = title;
  }


  public PercentChangeLabelAnswer templateData(PercentChangeLabelTemplateData templateData) {
    this.templateData = templateData;
    return this;
  }

   /**
   * Get templateData
   * @return templateData
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_TEMPLATE_DATA)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public PercentChangeLabelTemplateData getTemplateData() {
    return templateData;
  }


  @JsonProperty(JSON_PROPERTY_TEMPLATE_DATA)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setTemplateData(PercentChangeLabelTemplateData templateData) {
    this.templateData = templateData;
  }


  /**
   * Return true if this PercentChangeLabelAnswer object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PercentChangeLabelAnswer percentChangeLabelAnswer = (PercentChangeLabelAnswer) o;
    return Objects.equals(this.template, percentChangeLabelAnswer.template) &&
        Objects.equals(this.title, percentChangeLabelAnswer.title) &&
        Objects.equals(this.templateData, percentChangeLabelAnswer.templateData);
  }

  @Override
  public int hashCode() {
    return Objects.hash(template, title, templateData);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PercentChangeLabelAnswer {\n");
    sb.append("    template: ").append(toIndentedString(template)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    templateData: ").append(toIndentedString(templateData)).append("\n");
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
