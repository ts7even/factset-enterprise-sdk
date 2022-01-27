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


package com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models;

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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.JSON;


/**
 * Parameters related to the exercise.
 */
@ApiModel(description = "Parameters related to the exercise.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise.JSON_PROPERTY_RIGHT,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise.JSON_PROPERTY_STYLE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * Code of the exercise right.
   */
  public enum RightEnum {
    PUT("put"),
    
    CALL("call");

    private String value;

    RightEnum(String value) {
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
    public static RightEnum fromValue(String value) {
      for (RightEnum b : RightEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_RIGHT = "right";
  private RightEnum right;

  /**
   * Code of the exercise style.
   */
  public enum StyleEnum {
    AMERICAN("american"),
    
    EUROPEAN("european"),
    
    BERMUDAN("bermudan");

    private String value;

    StyleEnum(String value) {
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
    public static StyleEnum fromValue(String value) {
      for (StyleEnum b : StyleEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_STYLE = "style";
  private StyleEnum style;


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise right(RightEnum right) {
    this.right = right;
    return this;
  }

   /**
   * Code of the exercise right.
   * @return right
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Code of the exercise right.")
  @JsonProperty(JSON_PROPERTY_RIGHT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public RightEnum getRight() {
    return right;
  }


  @JsonProperty(JSON_PROPERTY_RIGHT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRight(RightEnum right) {
    this.right = right;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise style(StyleEnum style) {
    this.style = style;
    return this;
  }

   /**
   * Code of the exercise style.
   * @return style
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Code of the exercise style.")
  @JsonProperty(JSON_PROPERTY_STYLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StyleEnum getStyle() {
    return style;
  }


  @JsonProperty(JSON_PROPERTY_STYLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStyle(StyleEnum style) {
    this.style = style;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_exercise object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise securitizedDerivativeNotationScreenerValueRangesGetDataExercise = (SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise) o;
    return Objects.equals(this.right, securitizedDerivativeNotationScreenerValueRangesGetDataExercise.right) &&
        Objects.equals(this.style, securitizedDerivativeNotationScreenerValueRangesGetDataExercise.style);
  }

  @Override
  public int hashCode() {
    return Objects.hash(right, style);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataExercise {\n");
    sb.append("    right: ").append(toIndentedString(right)).append("\n");
    sb.append("    style: ").append(toIndentedString(style)).append("\n");
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
