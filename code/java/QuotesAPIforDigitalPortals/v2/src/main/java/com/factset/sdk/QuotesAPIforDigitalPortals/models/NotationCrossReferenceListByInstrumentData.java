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


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.NotationCrossReferenceListByInstrumentDataFilter;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * The data member contains the request&#39;s primary data.
 */
@ApiModel(description = "The data member contains the request's primary data.")
@JsonPropertyOrder({
  NotationCrossReferenceListByInstrumentData.JSON_PROPERTY_ID,
  NotationCrossReferenceListByInstrumentData.JSON_PROPERTY_FILTER
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class NotationCrossReferenceListByInstrumentData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_FILTER = "filter";
  private NotationCrossReferenceListByInstrumentDataFilter filter;


  public NotationCrossReferenceListByInstrumentData id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Identifier of an instrument.
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Identifier of an instrument.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setId(String id) {
    this.id = id;
  }


  public NotationCrossReferenceListByInstrumentData filter(NotationCrossReferenceListByInstrumentDataFilter filter) {
    this.filter = filter;
    return this;
  }

   /**
   * Get filter
   * @return filter
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FILTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public NotationCrossReferenceListByInstrumentDataFilter getFilter() {
    return filter;
  }


  @JsonProperty(JSON_PROPERTY_FILTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFilter(NotationCrossReferenceListByInstrumentDataFilter filter) {
    this.filter = filter;
  }


  /**
   * Return true if this _notation_crossReference_listByInstrument_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NotationCrossReferenceListByInstrumentData notationCrossReferenceListByInstrumentData = (NotationCrossReferenceListByInstrumentData) o;
    return Objects.equals(this.id, notationCrossReferenceListByInstrumentData.id) &&
        Objects.equals(this.filter, notationCrossReferenceListByInstrumentData.filter);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, filter);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NotationCrossReferenceListByInstrumentData {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    filter: ").append(toIndentedString(filter)).append("\n");
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
