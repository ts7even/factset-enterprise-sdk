/*
 * FactSet Terms & Conditions API
 * The FactSet Terms & Conditions API exposes Terms & Conditions data for Fixed Income Corporate, Governement & Agency securities. The FactSet Corporate Government & Agency Terms & Conditions library provides descriptive data on the issue level, such as offering details, redemption information, and coupon schedules. Issuer level data is also available. Coverage is global and includes corporate, sovereign, and agency issues. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetTermsandConditions.models;

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
import org.threeten.bp.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetTermsandConditions.JSON;


/**
 * Convertible Details for a Fixed Income security.
 */
@ApiModel(description = "Convertible Details for a Fixed Income security.")
@JsonPropertyOrder({
  ConvertibleHistory.JSON_PROPERTY_REQUEST_ID,
  ConvertibleHistory.JSON_PROPERTY_FSYM_ID,
  ConvertibleHistory.JSON_PROPERTY_CONV_EFF_DATE,
  ConvertibleHistory.JSON_PROPERTY_CONV_PRICE,
  ConvertibleHistory.JSON_PROPERTY_CONV_RATIO,
  ConvertibleHistory.JSON_PROPERTY_CONV_ULY_FSYM_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ConvertibleHistory implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_CONV_EFF_DATE = "convEffDate";
  private LocalDate convEffDate;

  public static final String JSON_PROPERTY_CONV_PRICE = "convPrice";
  private Double convPrice;

  public static final String JSON_PROPERTY_CONV_RATIO = "convRatio";
  private Double convRatio;

  public static final String JSON_PROPERTY_CONV_ULY_FSYM_ID = "convUlyFsymId";
  private String convUlyFsymId;


  public ConvertibleHistory requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Security identifier used in the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Security identifier used in the request.")
  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRequestId() {
    return requestId;
  }


  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequestId(String requestId) {
    this.requestId = requestId;
  }


  public ConvertibleHistory fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * FactSet Permanent Security Identifier.
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "FactSet Permanent Security Identifier.")
  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymId() {
    return fsymId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymId(String fsymId) {
    this.fsymId = fsymId;
  }


  public ConvertibleHistory convEffDate(LocalDate convEffDate) {
    this.convEffDate = convEffDate;
    return this;
  }

   /**
   * Convertible Effective Date
   * @return convEffDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Convertible Effective Date")
  @JsonProperty(JSON_PROPERTY_CONV_EFF_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getConvEffDate() {
    return convEffDate;
  }


  @JsonProperty(JSON_PROPERTY_CONV_EFF_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConvEffDate(LocalDate convEffDate) {
    this.convEffDate = convEffDate;
  }


  public ConvertibleHistory convPrice(Double convPrice) {
    this.convPrice = convPrice;
    return this;
  }

   /**
   * Convertibles Price
   * @return convPrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Convertibles Price")
  @JsonProperty(JSON_PROPERTY_CONV_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getConvPrice() {
    return convPrice;
  }


  @JsonProperty(JSON_PROPERTY_CONV_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConvPrice(Double convPrice) {
    this.convPrice = convPrice;
  }


  public ConvertibleHistory convRatio(Double convRatio) {
    this.convRatio = convRatio;
    return this;
  }

   /**
   * Convertibles Ratio
   * @return convRatio
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Convertibles Ratio")
  @JsonProperty(JSON_PROPERTY_CONV_RATIO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getConvRatio() {
    return convRatio;
  }


  @JsonProperty(JSON_PROPERTY_CONV_RATIO)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConvRatio(Double convRatio) {
    this.convRatio = convRatio;
  }


  public ConvertibleHistory convUlyFsymId(String convUlyFsymId) {
    this.convUlyFsymId = convUlyFsymId;
    return this;
  }

   /**
   * Convertibles Underlying FactSet Permanent Identifier
   * @return convUlyFsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Convertibles Underlying FactSet Permanent Identifier")
  @JsonProperty(JSON_PROPERTY_CONV_ULY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getConvUlyFsymId() {
    return convUlyFsymId;
  }


  @JsonProperty(JSON_PROPERTY_CONV_ULY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConvUlyFsymId(String convUlyFsymId) {
    this.convUlyFsymId = convUlyFsymId;
  }


  /**
   * Return true if this convertibleHistory object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ConvertibleHistory convertibleHistory = (ConvertibleHistory) o;
    return Objects.equals(this.requestId, convertibleHistory.requestId) &&
        Objects.equals(this.fsymId, convertibleHistory.fsymId) &&
        Objects.equals(this.convEffDate, convertibleHistory.convEffDate) &&
        Objects.equals(this.convPrice, convertibleHistory.convPrice) &&
        Objects.equals(this.convRatio, convertibleHistory.convRatio) &&
        Objects.equals(this.convUlyFsymId, convertibleHistory.convUlyFsymId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestId, fsymId, convEffDate, convPrice, convRatio, convUlyFsymId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ConvertibleHistory {\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    convEffDate: ").append(toIndentedString(convEffDate)).append("\n");
    sb.append("    convPrice: ").append(toIndentedString(convPrice)).append("\n");
    sb.append("    convRatio: ").append(toIndentedString(convRatio)).append("\n");
    sb.append("    convUlyFsymId: ").append(toIndentedString(convUlyFsymId)).append("\n");
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
