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
import com.factset.sdk.FactSetSearchAnswers.models.AnswerWithoutDataAllOf;
import com.factset.sdk.FactSetSearchAnswers.models.AnswerWithoutDataAllOfTemplateData;
import com.factset.sdk.FactSetSearchAnswers.models.NoAnswersFound;
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
 * AnswerWithoutData
 */
@JsonPropertyOrder({
  AnswerWithoutData.JSON_PROPERTY_TEMPLATE,
  AnswerWithoutData.JSON_PROPERTY_MESSAGE,
  AnswerWithoutData.JSON_PROPERTY_QUERY_SUGGESTIONS,
  AnswerWithoutData.JSON_PROPERTY_TITLE,
  AnswerWithoutData.JSON_PROPERTY_TEMPLATE_DATA
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AnswerWithoutData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TEMPLATE = "template";
  private String template;

  public static final String JSON_PROPERTY_MESSAGE = "message";
  private String message;

  public static final String JSON_PROPERTY_QUERY_SUGGESTIONS = "querySuggestions";
  private java.util.List<String> querySuggestions = new java.util.ArrayList<>();

  public static final String JSON_PROPERTY_TITLE = "title";
  private String title;

  public static final String JSON_PROPERTY_TEMPLATE_DATA = "templateData";
  private AnswerWithoutDataAllOfTemplateData templateData;


  public AnswerWithoutData template(String template) {
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


  public AnswerWithoutData message(String message) {
    this.message = message;
    return this;
  }

   /**
   * Get message
   * @return message
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getMessage() {
    return message;
  }


  @JsonProperty(JSON_PROPERTY_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMessage(String message) {
    this.message = message;
  }


  public AnswerWithoutData querySuggestions(java.util.List<String> querySuggestions) {
    this.querySuggestions = querySuggestions;
    return this;
  }

  public AnswerWithoutData addQuerySuggestionsItem(String querySuggestionsItem) {
    this.querySuggestions.add(querySuggestionsItem);
    return this;
  }

   /**
   * Get querySuggestions
   * @return querySuggestions
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_QUERY_SUGGESTIONS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<String> getQuerySuggestions() {
    return querySuggestions;
  }


  @JsonProperty(JSON_PROPERTY_QUERY_SUGGESTIONS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setQuerySuggestions(java.util.List<String> querySuggestions) {
    this.querySuggestions = querySuggestions;
  }


  public AnswerWithoutData title(String title) {
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


  public AnswerWithoutData templateData(AnswerWithoutDataAllOfTemplateData templateData) {
    this.templateData = templateData;
    return this;
  }

   /**
   * Get templateData
   * @return templateData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TEMPLATE_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public AnswerWithoutDataAllOfTemplateData getTemplateData() {
    return templateData;
  }


  @JsonProperty(JSON_PROPERTY_TEMPLATE_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTemplateData(AnswerWithoutDataAllOfTemplateData templateData) {
    this.templateData = templateData;
  }


  /**
   * Return true if this AnswerWithoutData object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AnswerWithoutData answerWithoutData = (AnswerWithoutData) o;
    return Objects.equals(this.template, answerWithoutData.template) &&
        Objects.equals(this.message, answerWithoutData.message) &&
        Objects.equals(this.querySuggestions, answerWithoutData.querySuggestions) &&
        Objects.equals(this.title, answerWithoutData.title) &&
        Objects.equals(this.templateData, answerWithoutData.templateData);
  }

  @Override
  public int hashCode() {
    return Objects.hash(template, message, querySuggestions, title, templateData);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AnswerWithoutData {\n");
    sb.append("    template: ").append(toIndentedString(template)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    querySuggestions: ").append(toIndentedString(querySuggestions)).append("\n");
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
