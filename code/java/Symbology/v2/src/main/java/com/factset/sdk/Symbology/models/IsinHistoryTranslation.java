/*
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and Bloomberg FIGIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as of a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time.</p> 
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Symbology.models;

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
import java.time.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.Symbology.JSON;


/**
 * ISIN History Translation data object.
 */
@ApiModel(description = "ISIN History Translation data object.")
@JsonPropertyOrder({
  IsinHistoryTranslation.JSON_PROPERTY_FSYM_ID,
  IsinHistoryTranslation.JSON_PROPERTY_NAME,
  IsinHistoryTranslation.JSON_PROPERTY_ISIN,
  IsinHistoryTranslation.JSON_PROPERTY_ISIN_EFFECTIVE_START_DATE,
  IsinHistoryTranslation.JSON_PROPERTY_ISIN_EFFECTIVE_END_DATE,
  IsinHistoryTranslation.JSON_PROPERTY_AS_OF_DATE,
  IsinHistoryTranslation.JSON_PROPERTY_REQUEST_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class IsinHistoryTranslation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_ISIN = "isin";
  private String isin;

  public static final String JSON_PROPERTY_ISIN_EFFECTIVE_START_DATE = "isinEffectiveStartDate";
  private LocalDate isinEffectiveStartDate;

  public static final String JSON_PROPERTY_ISIN_EFFECTIVE_END_DATE = "isinEffectiveEndDate";
  private LocalDate isinEffectiveEndDate;

  public static final String JSON_PROPERTY_AS_OF_DATE = "asOfDate";
  private LocalDate asOfDate;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public IsinHistoryTranslation() { 
  }

  public IsinHistoryTranslation fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * FactSet Default Permanent Identifier. Regional and Composite (-USA) request &#x60;ids&#x60; will use a Regional ID &#39;-R&#39;, Listing specific ids &#39;-NYS&#39; will use Listing ids &#39;-L&#39;, Entities will use &#39;-E&#39;, and FI will use security &#39;-S&#39; ids. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "HTM0LK-R", value = "FactSet Default Permanent Identifier. Regional and Composite (-USA) request `ids` will use a Regional ID '-R', Listing specific ids '-NYS' will use Listing ids '-L', Entities will use '-E', and FI will use security '-S' ids. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)")
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


  public IsinHistoryTranslation name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Proper Name of company or issuer.
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Alphabet Inc. Class A", value = "Proper Name of company or issuer.")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public IsinHistoryTranslation isin(String isin) {
    this.isin = isin;
    return this;
  }

   /**
   * ISIN
   * @return isin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "US38259P5089", value = "ISIN")
  @JsonProperty(JSON_PROPERTY_ISIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getIsin() {
    return isin;
  }


  @JsonProperty(JSON_PROPERTY_ISIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsin(String isin) {
    this.isin = isin;
  }


  public IsinHistoryTranslation isinEffectiveStartDate(LocalDate isinEffectiveStartDate) {
    this.isinEffectiveStartDate = isinEffectiveStartDate;
    return this;
  }

   /**
   * ISIN effective start date in YYYY-MM-DD format.
   * @return isinEffectiveStartDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Thu Aug 19 00:00:00 UTC 2004", value = "ISIN effective start date in YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_ISIN_EFFECTIVE_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getIsinEffectiveStartDate() {
    return isinEffectiveStartDate;
  }


  @JsonProperty(JSON_PROPERTY_ISIN_EFFECTIVE_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsinEffectiveStartDate(LocalDate isinEffectiveStartDate) {
    this.isinEffectiveStartDate = isinEffectiveStartDate;
  }


  public IsinHistoryTranslation isinEffectiveEndDate(LocalDate isinEffectiveEndDate) {
    this.isinEffectiveEndDate = isinEffectiveEndDate;
    return this;
  }

   /**
   * ISIN effective end date in YYYY-MM-DD format. Null if still active.
   * @return isinEffectiveEndDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Mon Oct 05 00:00:00 UTC 2015", value = "ISIN effective end date in YYYY-MM-DD format. Null if still active.")
  @JsonProperty(JSON_PROPERTY_ISIN_EFFECTIVE_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getIsinEffectiveEndDate() {
    return isinEffectiveEndDate;
  }


  @JsonProperty(JSON_PROPERTY_ISIN_EFFECTIVE_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsinEffectiveEndDate(LocalDate isinEffectiveEndDate) {
    this.isinEffectiveEndDate = isinEffectiveEndDate;
  }


  public IsinHistoryTranslation asOfDate(LocalDate asOfDate) {
    this.asOfDate = asOfDate;
    return this;
  }

   /**
   * As of Date in YYYY-MM-DD format.
   * @return asOfDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Fri Dec 31 00:00:00 UTC 2010", value = "As of Date in YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_AS_OF_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getAsOfDate() {
    return asOfDate;
  }


  @JsonProperty(JSON_PROPERTY_AS_OF_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAsOfDate(LocalDate asOfDate) {
    this.asOfDate = asOfDate;
  }


  public IsinHistoryTranslation requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier specified in the request
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "GOOGL", value = "Identifier specified in the request")
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


  /**
   * Return true if this isinHistoryTranslation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IsinHistoryTranslation isinHistoryTranslation = (IsinHistoryTranslation) o;
    return Objects.equals(this.fsymId, isinHistoryTranslation.fsymId) &&
        Objects.equals(this.name, isinHistoryTranslation.name) &&
        Objects.equals(this.isin, isinHistoryTranslation.isin) &&
        Objects.equals(this.isinEffectiveStartDate, isinHistoryTranslation.isinEffectiveStartDate) &&
        Objects.equals(this.isinEffectiveEndDate, isinHistoryTranslation.isinEffectiveEndDate) &&
        Objects.equals(this.asOfDate, isinHistoryTranslation.asOfDate) &&
        Objects.equals(this.requestId, isinHistoryTranslation.requestId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fsymId, name, isin, isinEffectiveStartDate, isinEffectiveEndDate, asOfDate, requestId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IsinHistoryTranslation {\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    isin: ").append(toIndentedString(isin)).append("\n");
    sb.append("    isinEffectiveStartDate: ").append(toIndentedString(isinEffectiveStartDate)).append("\n");
    sb.append("    isinEffectiveEndDate: ").append(toIndentedString(isinEffectiveEndDate)).append("\n");
    sb.append("    asOfDate: ").append(toIndentedString(asOfDate)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
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

