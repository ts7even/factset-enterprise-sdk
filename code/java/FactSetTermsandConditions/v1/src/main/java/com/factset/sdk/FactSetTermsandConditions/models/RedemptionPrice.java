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
 * Redemption Price Data Items for a Fixed Income security.
 */
@ApiModel(description = "Redemption Price Data Items for a Fixed Income security.")
@JsonPropertyOrder({
  RedemptionPrice.JSON_PROPERTY_REQUEST_ID,
  RedemptionPrice.JSON_PROPERTY_FSYM_ID,
  RedemptionPrice.JSON_PROPERTY_DATE,
  RedemptionPrice.JSON_PROPERTY_CATEGORY,
  RedemptionPrice.JSON_PROPERTY_MIN_AMT,
  RedemptionPrice.JSON_PROPERTY_PRICE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class RedemptionPrice implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_DATE = "date";
  private LocalDate date;

  /**
   * Redemption Price Category - * **CALL** &#x3D; Call prices. * **PUT** &#x3D; Put prices. * **SF** &#x3D; Sinking Fund prices. 
   */
  public enum CategoryEnum {
    CALL("CALL"),
    
    PUT("PUT"),
    
    SF("SF");

    private String value;

    CategoryEnum(String value) {
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
    public static CategoryEnum fromValue(String value) {
      for (CategoryEnum b : CategoryEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_CATEGORY = "category";
  private CategoryEnum category;

  public static final String JSON_PROPERTY_MIN_AMT = "minAmt";
  private Double minAmt;

  public static final String JSON_PROPERTY_PRICE = "price";
  private Double price;


  public RedemptionPrice requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Security identifier used in the request.
   * @return requestId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Security identifier used in the request.")
  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getRequestId() {
    return requestId;
  }


  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRequestId(String requestId) {
    this.requestId = requestId;
  }


  public RedemptionPrice fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * FactSet Permanent Security Identifier.
   * @return fsymId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "FactSet Permanent Security Identifier.")
  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getFsymId() {
    return fsymId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setFsymId(String fsymId) {
    this.fsymId = fsymId;
  }


  public RedemptionPrice date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Date of the Redemption Price.
   * @return date
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Date of the Redemption Price.")
  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public LocalDate getDate() {
    return date;
  }


  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDate(LocalDate date) {
    this.date = date;
  }


  public RedemptionPrice category(CategoryEnum category) {
    this.category = category;
    return this;
  }

   /**
   * Redemption Price Category - * **CALL** &#x3D; Call prices. * **PUT** &#x3D; Put prices. * **SF** &#x3D; Sinking Fund prices. 
   * @return category
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Redemption Price Category - * **CALL** = Call prices. * **PUT** = Put prices. * **SF** = Sinking Fund prices. ")
  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public CategoryEnum getCategory() {
    return category;
  }


  @JsonProperty(JSON_PROPERTY_CATEGORY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCategory(CategoryEnum category) {
    this.category = category;
  }


  public RedemptionPrice minAmt(Double minAmt) {
    this.minAmt = minAmt;
    return this;
  }

   /**
   * Sinking Fund minimum amount.
   * @return minAmt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Sinking Fund minimum amount.")
  @JsonProperty(JSON_PROPERTY_MIN_AMT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getMinAmt() {
    return minAmt;
  }


  @JsonProperty(JSON_PROPERTY_MIN_AMT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMinAmt(Double minAmt) {
    this.minAmt = minAmt;
  }


  public RedemptionPrice price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * Redemption price for the category.
   * @return price
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Redemption price for the category.")
  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getPrice() {
    return price;
  }


  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrice(Double price) {
    this.price = price;
  }


  /**
   * Return true if this redemptionPrice object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RedemptionPrice redemptionPrice = (RedemptionPrice) o;
    return Objects.equals(this.requestId, redemptionPrice.requestId) &&
        Objects.equals(this.fsymId, redemptionPrice.fsymId) &&
        Objects.equals(this.date, redemptionPrice.date) &&
        Objects.equals(this.category, redemptionPrice.category) &&
        Objects.equals(this.minAmt, redemptionPrice.minAmt) &&
        Objects.equals(this.price, redemptionPrice.price);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestId, fsymId, date, category, minAmt, price);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RedemptionPrice {\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    minAmt: ").append(toIndentedString(minAmt)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
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
