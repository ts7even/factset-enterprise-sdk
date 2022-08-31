/*
 * FactSet Global Prices API
 * The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p> 
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetGlobalPrices.models;

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
import com.factset.sdk.FactSetGlobalPrices.JSON;


/**
 * Distribution
 */
@JsonPropertyOrder({
  Distribution.JSON_PROPERTY_FSYM_ID,
  Distribution.JSON_PROPERTY_EVENT_ID,
  Distribution.JSON_PROPERTY_EVENT_TYPE_CODE,
  Distribution.JSON_PROPERTY_EVENT_TYPE_DESC,
  Distribution.JSON_PROPERTY_ANNOUNCEMENT_DATE,
  Distribution.JSON_PROPERTY_RECORD_DATE,
  Distribution.JSON_PROPERTY_PAY_DATE,
  Distribution.JSON_PROPERTY_EFFECTIVE_DATE,
  Distribution.JSON_PROPERTY_ADJ_FACTOR,
  Distribution.JSON_PROPERTY_ADJ_FACTOR_COMBINED,
  Distribution.JSON_PROPERTY_AMT_DEF_TRADING_ADJ,
  Distribution.JSON_PROPERTY_AMT_DEF_TRADING_UNADJ,
  Distribution.JSON_PROPERTY_CURRENCY,
  Distribution.JSON_PROPERTY_DIST_PCT,
  Distribution.JSON_PROPERTY_DIST_OLD_TERM,
  Distribution.JSON_PROPERTY_DIST_NEW_TERM,
  Distribution.JSON_PROPERTY_RIGHTS_ISSUE_PRICE,
  Distribution.JSON_PROPERTY_RIGHTS_ISSUE_CURRENCY,
  Distribution.JSON_PROPERTY_SHORT_DESC,
  Distribution.JSON_PROPERTY_REQUEST_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Distribution implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_EVENT_ID = "eventId";
  private String eventId;

  /**
   * Corporate Actions Event type code.
   */
  public enum EventTypeCodeEnum {
    DVS("DVS"),
    
    DVSS("DVSS"),
    
    BNS("BNS"),
    
    BNSS("BNSS"),
    
    SPO("SPO"),
    
    DSR("DSR");

    private String value;

    EventTypeCodeEnum(String value) {
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
    public static EventTypeCodeEnum fromValue(String value) {
      for (EventTypeCodeEnum b : EventTypeCodeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_EVENT_TYPE_CODE = "eventTypeCode";
  private EventTypeCodeEnum eventTypeCode;

  public static final String JSON_PROPERTY_EVENT_TYPE_DESC = "eventTypeDesc";
  private String eventTypeDesc;

  public static final String JSON_PROPERTY_ANNOUNCEMENT_DATE = "announcementDate";
  private String announcementDate;

  public static final String JSON_PROPERTY_RECORD_DATE = "recordDate";
  private String recordDate;

  public static final String JSON_PROPERTY_PAY_DATE = "payDate";
  private String payDate;

  public static final String JSON_PROPERTY_EFFECTIVE_DATE = "effectiveDate";
  private String effectiveDate;

  public static final String JSON_PROPERTY_ADJ_FACTOR = "adjFactor";
  private Double adjFactor;

  public static final String JSON_PROPERTY_ADJ_FACTOR_COMBINED = "adjFactorCombined";
  private Double adjFactorCombined;

  public static final String JSON_PROPERTY_AMT_DEF_TRADING_ADJ = "amtDefTradingAdj";
  private Double amtDefTradingAdj;

  public static final String JSON_PROPERTY_AMT_DEF_TRADING_UNADJ = "amtDefTradingUnadj";
  private Double amtDefTradingUnadj;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private String currency;

  public static final String JSON_PROPERTY_DIST_PCT = "distPct";
  private Double distPct;

  public static final String JSON_PROPERTY_DIST_OLD_TERM = "distOldTerm";
  private Double distOldTerm;

  public static final String JSON_PROPERTY_DIST_NEW_TERM = "distNewTerm";
  private Double distNewTerm;

  public static final String JSON_PROPERTY_RIGHTS_ISSUE_PRICE = "rightsIssuePrice";
  private Double rightsIssuePrice;

  public static final String JSON_PROPERTY_RIGHTS_ISSUE_CURRENCY = "rightsIssueCurrency";
  private String rightsIssueCurrency;

  public static final String JSON_PROPERTY_SHORT_DESC = "shortDesc";
  private String shortDesc;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public Distribution() { 
  }

  public Distribution fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security&#39;s best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SJY281-R", value = "Factset Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security's best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet.")
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


  public Distribution eventId(String eventId) {
    this.eventId = eventId;
    return this;
  }

   /**
   * FactSet identifier that uniquely identifies the Event.
   * @return eventId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "JTHPFN-A", value = "FactSet identifier that uniquely identifies the Event.")
  @JsonProperty(JSON_PROPERTY_EVENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEventId() {
    return eventId;
  }


  @JsonProperty(JSON_PROPERTY_EVENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEventId(String eventId) {
    this.eventId = eventId;
  }


  public Distribution eventTypeCode(EventTypeCodeEnum eventTypeCode) {
    this.eventTypeCode = eventTypeCode;
    return this;
  }

   /**
   * Corporate Actions Event type code.
   * @return eventTypeCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Corporate Actions Event type code.")
  @JsonProperty(JSON_PROPERTY_EVENT_TYPE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public EventTypeCodeEnum getEventTypeCode() {
    return eventTypeCode;
  }


  @JsonProperty(JSON_PROPERTY_EVENT_TYPE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEventTypeCode(EventTypeCodeEnum eventTypeCode) {
    this.eventTypeCode = eventTypeCode;
  }


  public Distribution eventTypeDesc(String eventTypeDesc) {
    this.eventTypeDesc = eventTypeDesc;
    return this;
  }

   /**
   * Corporate Actions Event type description.
   * @return eventTypeDesc
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Stock Dividend, Special", value = "Corporate Actions Event type description.")
  @JsonProperty(JSON_PROPERTY_EVENT_TYPE_DESC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEventTypeDesc() {
    return eventTypeDesc;
  }


  @JsonProperty(JSON_PROPERTY_EVENT_TYPE_DESC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEventTypeDesc(String eventTypeDesc) {
    this.eventTypeDesc = eventTypeDesc;
  }


  public Distribution announcementDate(String announcementDate) {
    this.announcementDate = announcementDate;
    return this;
  }

   /**
   * Date Event was announced in YYYY-MM-DD format.
   * @return announcementDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date Event was announced in YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_ANNOUNCEMENT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAnnouncementDate() {
    return announcementDate;
  }


  @JsonProperty(JSON_PROPERTY_ANNOUNCEMENT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAnnouncementDate(String announcementDate) {
    this.announcementDate = announcementDate;
  }


  public Distribution recordDate(String recordDate) {
    this.recordDate = recordDate;
    return this;
  }

   /**
   * Date of Record for distribution in YYYY-MM-DD format.
   * @return recordDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date of Record for distribution in YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_RECORD_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRecordDate() {
    return recordDate;
  }


  @JsonProperty(JSON_PROPERTY_RECORD_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRecordDate(String recordDate) {
    this.recordDate = recordDate;
  }


  public Distribution payDate(String payDate) {
    this.payDate = payDate;
    return this;
  }

   /**
   * Date of Payment for distribution in YYYY-MM-DD format.
   * @return payDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date of Payment for distribution in YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_PAY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getPayDate() {
    return payDate;
  }


  @JsonProperty(JSON_PROPERTY_PAY_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPayDate(String payDate) {
    this.payDate = payDate;
  }


  public Distribution effectiveDate(String effectiveDate) {
    this.effectiveDate = effectiveDate;
    return this;
  }

   /**
   * Effective Date or Ex-Date of distribution in YYYY-MM-DD format.
   * @return effectiveDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Effective Date or Ex-Date of distribution in YYYY-MM-DD format.")
  @JsonProperty(JSON_PROPERTY_EFFECTIVE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEffectiveDate() {
    return effectiveDate;
  }


  @JsonProperty(JSON_PROPERTY_EFFECTIVE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEffectiveDate(String effectiveDate) {
    this.effectiveDate = effectiveDate;
  }


  public Distribution adjFactor(Double adjFactor) {
    this.adjFactor = adjFactor;
    return this;
  }

   /**
   * Factor for adjusting price and shares. A 2-for-1 split returns .50, the number you would multiply the stock price by to adjust for the split. 
   * @return adjFactor
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.997262", value = "Factor for adjusting price and shares. A 2-for-1 split returns .50, the number you would multiply the stock price by to adjust for the split. ")
  @JsonProperty(JSON_PROPERTY_ADJ_FACTOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getAdjFactor() {
    return adjFactor;
  }


  @JsonProperty(JSON_PROPERTY_ADJ_FACTOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAdjFactor(Double adjFactor) {
    this.adjFactor = adjFactor;
  }


  public Distribution adjFactorCombined(Double adjFactorCombined) {
    this.adjFactorCombined = adjFactorCombined;
    return this;
  }

   /**
   * Combined adjustment factor for all distribution events on that day.
   * @return adjFactorCombined
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.997262", value = "Combined adjustment factor for all distribution events on that day.")
  @JsonProperty(JSON_PROPERTY_ADJ_FACTOR_COMBINED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getAdjFactorCombined() {
    return adjFactorCombined;
  }


  @JsonProperty(JSON_PROPERTY_ADJ_FACTOR_COMBINED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAdjFactorCombined(Double adjFactorCombined) {
    this.adjFactorCombined = adjFactorCombined;
  }


  public Distribution amtDefTradingAdj(Double amtDefTradingAdj) {
    this.amtDefTradingAdj = amtDefTradingAdj;
    return this;
  }

   /**
   * Default Amount - Trading Currency, Split Adjusted
   * @return amtDefTradingAdj
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Default Amount - Trading Currency, Split Adjusted")
  @JsonProperty(JSON_PROPERTY_AMT_DEF_TRADING_ADJ)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getAmtDefTradingAdj() {
    return amtDefTradingAdj;
  }


  @JsonProperty(JSON_PROPERTY_AMT_DEF_TRADING_ADJ)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAmtDefTradingAdj(Double amtDefTradingAdj) {
    this.amtDefTradingAdj = amtDefTradingAdj;
  }


  public Distribution amtDefTradingUnadj(Double amtDefTradingUnadj) {
    this.amtDefTradingUnadj = amtDefTradingUnadj;
    return this;
  }

   /**
   * Default Amount - Trading Currency, Unadjusted
   * @return amtDefTradingUnadj
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Default Amount - Trading Currency, Unadjusted")
  @JsonProperty(JSON_PROPERTY_AMT_DEF_TRADING_UNADJ)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getAmtDefTradingUnadj() {
    return amtDefTradingUnadj;
  }


  @JsonProperty(JSON_PROPERTY_AMT_DEF_TRADING_UNADJ)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAmtDefTradingUnadj(Double amtDefTradingUnadj) {
    this.amtDefTradingUnadj = amtDefTradingUnadj;
  }


  public Distribution currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).")
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCurrency() {
    return currency;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public Distribution distPct(Double distPct) {
    this.distPct = distPct;
    return this;
  }

   /**
   * Distribution percentage of the event  (i.e. 10%). Typical for stock distributions.
   * @return distPct
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.27455", value = "Distribution percentage of the event  (i.e. 10%). Typical for stock distributions.")
  @JsonProperty(JSON_PROPERTY_DIST_PCT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getDistPct() {
    return distPct;
  }


  @JsonProperty(JSON_PROPERTY_DIST_PCT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistPct(Double distPct) {
    this.distPct = distPct;
  }


  public Distribution distOldTerm(Double distOldTerm) {
    this.distOldTerm = distOldTerm;
    return this;
  }

   /**
   * Component of distribution ratio -  Number of shares held.
   * @return distOldTerm
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "Component of distribution ratio -  Number of shares held.")
  @JsonProperty(JSON_PROPERTY_DIST_OLD_TERM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getDistOldTerm() {
    return distOldTerm;
  }


  @JsonProperty(JSON_PROPERTY_DIST_OLD_TERM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistOldTerm(Double distOldTerm) {
    this.distOldTerm = distOldTerm;
  }


  public Distribution distNewTerm(Double distNewTerm) {
    this.distNewTerm = distNewTerm;
    return this;
  }

   /**
   * Component of distribution ratio -  Number of shares received.
   * @return distNewTerm
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0.05", value = "Component of distribution ratio -  Number of shares received.")
  @JsonProperty(JSON_PROPERTY_DIST_NEW_TERM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getDistNewTerm() {
    return distNewTerm;
  }


  @JsonProperty(JSON_PROPERTY_DIST_NEW_TERM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistNewTerm(Double distNewTerm) {
    this.distNewTerm = distNewTerm;
  }


  public Distribution rightsIssuePrice(Double rightsIssuePrice) {
    this.rightsIssuePrice = rightsIssuePrice;
    return this;
  }

   /**
   * Description
   * @return rightsIssuePrice
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Description")
  @JsonProperty(JSON_PROPERTY_RIGHTS_ISSUE_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getRightsIssuePrice() {
    return rightsIssuePrice;
  }


  @JsonProperty(JSON_PROPERTY_RIGHTS_ISSUE_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRightsIssuePrice(Double rightsIssuePrice) {
    this.rightsIssuePrice = rightsIssuePrice;
  }


  public Distribution rightsIssueCurrency(String rightsIssueCurrency) {
    this.rightsIssueCurrency = rightsIssueCurrency;
    return this;
  }

   /**
   * Description
   * @return rightsIssueCurrency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Description")
  @JsonProperty(JSON_PROPERTY_RIGHTS_ISSUE_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRightsIssueCurrency() {
    return rightsIssueCurrency;
  }


  @JsonProperty(JSON_PROPERTY_RIGHTS_ISSUE_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRightsIssueCurrency(String rightsIssueCurrency) {
    this.rightsIssueCurrency = rightsIssueCurrency;
  }


  public Distribution shortDesc(String shortDesc) {
    this.shortDesc = shortDesc;
    return this;
  }

   /**
   * Textual description identifying the event.
   * @return shortDesc
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Spin off (Company)- For every 1 share held of General Electric Co. (CUSIP- 369604103; SEDOL- 2380498), receive 0.005371 share of Wabtec Rg (CUSIP- 929740108; SEDOL- 2955733)\" ", value = "Textual description identifying the event.")
  @JsonProperty(JSON_PROPERTY_SHORT_DESC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getShortDesc() {
    return shortDesc;
  }


  @JsonProperty(JSON_PROPERTY_SHORT_DESC)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShortDesc(String shortDesc) {
    this.shortDesc = shortDesc;
  }


  public Distribution requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier that was used for the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "GOOG-US", value = "Identifier that was used for the request.")
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
   * Return true if this Distribution object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Distribution distribution = (Distribution) o;
    return Objects.equals(this.fsymId, distribution.fsymId) &&
        Objects.equals(this.eventId, distribution.eventId) &&
        Objects.equals(this.eventTypeCode, distribution.eventTypeCode) &&
        Objects.equals(this.eventTypeDesc, distribution.eventTypeDesc) &&
        Objects.equals(this.announcementDate, distribution.announcementDate) &&
        Objects.equals(this.recordDate, distribution.recordDate) &&
        Objects.equals(this.payDate, distribution.payDate) &&
        Objects.equals(this.effectiveDate, distribution.effectiveDate) &&
        Objects.equals(this.adjFactor, distribution.adjFactor) &&
        Objects.equals(this.adjFactorCombined, distribution.adjFactorCombined) &&
        Objects.equals(this.amtDefTradingAdj, distribution.amtDefTradingAdj) &&
        Objects.equals(this.amtDefTradingUnadj, distribution.amtDefTradingUnadj) &&
        Objects.equals(this.currency, distribution.currency) &&
        Objects.equals(this.distPct, distribution.distPct) &&
        Objects.equals(this.distOldTerm, distribution.distOldTerm) &&
        Objects.equals(this.distNewTerm, distribution.distNewTerm) &&
        Objects.equals(this.rightsIssuePrice, distribution.rightsIssuePrice) &&
        Objects.equals(this.rightsIssueCurrency, distribution.rightsIssueCurrency) &&
        Objects.equals(this.shortDesc, distribution.shortDesc) &&
        Objects.equals(this.requestId, distribution.requestId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fsymId, eventId, eventTypeCode, eventTypeDesc, announcementDate, recordDate, payDate, effectiveDate, adjFactor, adjFactorCombined, amtDefTradingAdj, amtDefTradingUnadj, currency, distPct, distOldTerm, distNewTerm, rightsIssuePrice, rightsIssueCurrency, shortDesc, requestId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Distribution {\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    eventId: ").append(toIndentedString(eventId)).append("\n");
    sb.append("    eventTypeCode: ").append(toIndentedString(eventTypeCode)).append("\n");
    sb.append("    eventTypeDesc: ").append(toIndentedString(eventTypeDesc)).append("\n");
    sb.append("    announcementDate: ").append(toIndentedString(announcementDate)).append("\n");
    sb.append("    recordDate: ").append(toIndentedString(recordDate)).append("\n");
    sb.append("    payDate: ").append(toIndentedString(payDate)).append("\n");
    sb.append("    effectiveDate: ").append(toIndentedString(effectiveDate)).append("\n");
    sb.append("    adjFactor: ").append(toIndentedString(adjFactor)).append("\n");
    sb.append("    adjFactorCombined: ").append(toIndentedString(adjFactorCombined)).append("\n");
    sb.append("    amtDefTradingAdj: ").append(toIndentedString(amtDefTradingAdj)).append("\n");
    sb.append("    amtDefTradingUnadj: ").append(toIndentedString(amtDefTradingUnadj)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    distPct: ").append(toIndentedString(distPct)).append("\n");
    sb.append("    distOldTerm: ").append(toIndentedString(distOldTerm)).append("\n");
    sb.append("    distNewTerm: ").append(toIndentedString(distNewTerm)).append("\n");
    sb.append("    rightsIssuePrice: ").append(toIndentedString(rightsIssuePrice)).append("\n");
    sb.append("    rightsIssueCurrency: ").append(toIndentedString(rightsIssueCurrency)).append("\n");
    sb.append("    shortDesc: ").append(toIndentedString(shortDesc)).append("\n");
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

