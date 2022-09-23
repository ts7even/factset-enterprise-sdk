/*
 * FactSet Private Markets API
 * FactSet Private Markets API encompasses Private Company Financials data to start. Private Company firmographics can be found in the FactSet Entity API. The future plans of this service will include additional Private Markets data, such as Private Equity/Venture Capital. 
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetPrivateMarkets.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FactSetPrivateMarkets.models.EntityMatchRequestInput;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetPrivateMarkets.JSON;


/**
 * Request object for a requesting multiple Entity Matches.
 */
@ApiModel(description = "Request object for a requesting multiple Entity Matches.")
@JsonPropertyOrder({
  EntityMatchRequest.JSON_PROPERTY_INPUT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EntityMatchRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_INPUT = "input";
  private java.util.List<EntityMatchRequestInput> input = new java.util.ArrayList<>();

  public EntityMatchRequest() { 
  }

  @JsonCreator
  public EntityMatchRequest(
    @JsonProperty(value=JSON_PROPERTY_INPUT, required=true) java.util.List<EntityMatchRequestInput> input
  ) {
    this();
    this.input = input;
  }

  public EntityMatchRequest input(java.util.List<EntityMatchRequestInput> input) {
    this.input = input;
    return this;
  }

  public EntityMatchRequest addInputItem(EntityMatchRequestInput inputItem) {
    this.input.add(inputItem);
    return this;
  }

   /**
   * Get input
   * @return input
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_INPUT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<EntityMatchRequestInput> getInput() {
    return input;
  }


  @JsonProperty(JSON_PROPERTY_INPUT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setInput(java.util.List<EntityMatchRequestInput> input) {
    this.input = input;
  }


  /**
   * Return true if this EntityMatchRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EntityMatchRequest entityMatchRequest = (EntityMatchRequest) o;
    return Objects.equals(this.input, entityMatchRequest.input);
  }

  @Override
  public int hashCode() {
    return Objects.hash(input);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EntityMatchRequest {\n");
    sb.append("    input: ").append(toIndentedString(input)).append("\n");
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
