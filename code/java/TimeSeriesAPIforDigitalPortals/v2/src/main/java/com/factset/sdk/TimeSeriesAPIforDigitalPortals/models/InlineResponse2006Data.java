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


package com.factset.sdk.TimeSeriesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.TimeSeriesAPIforDigitalPortals.models.InlineResponse2006DataSubsample;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.TimeSeriesAPIforDigitalPortals.JSON;


/**
 * Subsample data for the notation.
 */
@ApiModel(description = "Subsample data for the notation.")
@JsonPropertyOrder({
  InlineResponse2006Data.JSON_PROPERTY_QUALITY,
  InlineResponse2006Data.JSON_PROPERTY_SUBSAMPLE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006Data implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * Quality of the price.
   */
  public enum QualityEnum {
    DLY("DLY"),
    
    EOD("EOD");

    private String value;

    QualityEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static QualityEnum fromValue(String value) {
      for (QualityEnum b : QualityEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_QUALITY = "quality";
  private QualityEnum quality;

  public static final String JSON_PROPERTY_SUBSAMPLE = "subsample";
  private InlineResponse2006DataSubsample subsample;


  public InlineResponse2006Data quality(QualityEnum quality) {
    this.quality = quality;
    return this;
  }

   /**
   * Quality of the price.
   * @return quality
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Quality of the price.")
  @JsonProperty(JSON_PROPERTY_QUALITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public QualityEnum getQuality() {
    return quality;
  }


  @JsonProperty(JSON_PROPERTY_QUALITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQuality(QualityEnum quality) {
    this.quality = quality;
  }


  public InlineResponse2006Data subsample(InlineResponse2006DataSubsample subsample) {
    this.subsample = subsample;
    return this;
  }

   /**
   * Get subsample
   * @return subsample
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SUBSAMPLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006DataSubsample getSubsample() {
    return subsample;
  }


  @JsonProperty(JSON_PROPERTY_SUBSAMPLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSubsample(InlineResponse2006DataSubsample subsample) {
    this.subsample = subsample;
  }


  /**
   * Return true if this inline_response_200_6_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006Data inlineResponse2006Data = (InlineResponse2006Data) o;
    return Objects.equals(this.quality, inlineResponse2006Data.quality) &&
        Objects.equals(this.subsample, inlineResponse2006Data.subsample);
  }

  @Override
  public int hashCode() {
    return Objects.hash(quality, subsample);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006Data {\n");
    sb.append("    quality: ").append(toIndentedString(quality)).append("\n");
    sb.append("    subsample: ").append(toIndentedString(subsample)).append("\n");
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
