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
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20050DataNotationInstrument;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20050DataNotationOperatingMIC;
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
 * Notation of the component. If there is no notation for the component, the object is null.
 */
@ApiModel(description = "Notation of the component. If there is no notation for the component, the object is null.")
@JsonPropertyOrder({
  InlineResponse20050DataNotation.JSON_PROPERTY_ID,
  InlineResponse20050DataNotation.JSON_PROPERTY_INSTRUMENT,
  InlineResponse20050DataNotation.JSON_PROPERTY_OPERATING_M_I_C
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20050DataNotation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_INSTRUMENT = "instrument";
  private InlineResponse20050DataNotationInstrument instrument;

  public static final String JSON_PROPERTY_OPERATING_M_I_C = "operatingMIC";
  private InlineResponse20050DataNotationOperatingMIC operatingMIC;


  public InlineResponse20050DataNotation id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Identifier of the notation.
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the notation.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(String id) {
    this.id = id;
  }


  public InlineResponse20050DataNotation instrument(InlineResponse20050DataNotationInstrument instrument) {
    this.instrument = instrument;
    return this;
  }

   /**
   * Get instrument
   * @return instrument
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_INSTRUMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20050DataNotationInstrument getInstrument() {
    return instrument;
  }


  @JsonProperty(JSON_PROPERTY_INSTRUMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInstrument(InlineResponse20050DataNotationInstrument instrument) {
    this.instrument = instrument;
  }


  public InlineResponse20050DataNotation operatingMIC(InlineResponse20050DataNotationOperatingMIC operatingMIC) {
    this.operatingMIC = operatingMIC;
    return this;
  }

   /**
   * Get operatingMIC
   * @return operatingMIC
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_OPERATING_M_I_C)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20050DataNotationOperatingMIC getOperatingMIC() {
    return operatingMIC;
  }


  @JsonProperty(JSON_PROPERTY_OPERATING_M_I_C)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOperatingMIC(InlineResponse20050DataNotationOperatingMIC operatingMIC) {
    this.operatingMIC = operatingMIC;
  }


  /**
   * Return true if this inline_response_200_50_data_notation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20050DataNotation inlineResponse20050DataNotation = (InlineResponse20050DataNotation) o;
    return Objects.equals(this.id, inlineResponse20050DataNotation.id) &&
        Objects.equals(this.instrument, inlineResponse20050DataNotation.instrument) &&
        Objects.equals(this.operatingMIC, inlineResponse20050DataNotation.operatingMIC);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, instrument, operatingMIC);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20050DataNotation {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    instrument: ").append(toIndentedString(instrument)).append("\n");
    sb.append("    operatingMIC: ").append(toIndentedString(operatingMIC)).append("\n");
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
