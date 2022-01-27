/*
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types. various market symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN,  SEDOL, Tickers, and Bloomberg FIGIs.   Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly  harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time. Additionally, the Symbology API provides  translation of market ids into Bloomberg FIGI. 
 *
 * The version of the OpenAPI document: 2.0.0
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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.Symbology.JSON;


/**
 * FactSet Translation data object.
 */
@ApiModel(description = "FactSet Translation data object.")
@JsonPropertyOrder({
  FactsetTranslation.JSON_PROPERTY_FSYM_ID,
  FactsetTranslation.JSON_PROPERTY_FSYM_SECURITY_ID,
  FactsetTranslation.JSON_PROPERTY_FSYM_REGIONAL_ID,
  FactsetTranslation.JSON_PROPERTY_FSYM_LISTING_ID,
  FactsetTranslation.JSON_PROPERTY_FSYM_ENTITY_ID,
  FactsetTranslation.JSON_PROPERTY_FSYM_TICKER_EXCHANGE,
  FactsetTranslation.JSON_PROPERTY_FSYM_TICKER_REGION,
  FactsetTranslation.JSON_PROPERTY_FREF_LISTING_EXCHANGE,
  FactsetTranslation.JSON_PROPERTY_CURRENCY,
  FactsetTranslation.JSON_PROPERTY_SECURITY_TYPE,
  FactsetTranslation.JSON_PROPERTY_NAME,
  FactsetTranslation.JSON_PROPERTY_REQUEST_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class FactsetTranslation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_FSYM_SECURITY_ID = "fsymSecurityId";
  private String fsymSecurityId;

  public static final String JSON_PROPERTY_FSYM_REGIONAL_ID = "fsymRegionalId";
  private String fsymRegionalId;

  public static final String JSON_PROPERTY_FSYM_LISTING_ID = "fsymListingId";
  private String fsymListingId;

  public static final String JSON_PROPERTY_FSYM_ENTITY_ID = "fsymEntityId";
  private String fsymEntityId;

  public static final String JSON_PROPERTY_FSYM_TICKER_EXCHANGE = "fsymTickerExchange";
  private String fsymTickerExchange;

  public static final String JSON_PROPERTY_FSYM_TICKER_REGION = "fsymTickerRegion";
  private String fsymTickerRegion;

  public static final String JSON_PROPERTY_FREF_LISTING_EXCHANGE = "frefListingExchange";
  private String frefListingExchange;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private String currency;

  public static final String JSON_PROPERTY_SECURITY_TYPE = "securityType";
  private String securityType;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;


  public FactsetTranslation fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * FactSet Default Permanent Identifier. Regional and Composite (-USA) request &#x60;ids&#x60; will use a Regional ID &#39;-R&#39;, Listing specific ids &#39;-NYS&#39; will use Listing ids &#39;-L&#39;, Entities will use &#39;-E&#39;, and FI will use security &#39;-S&#39; ids. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "NSXGVV-L", value = "FactSet Default Permanent Identifier. Regional and Composite (-USA) request `ids` will use a Regional ID '-R', Listing specific ids '-NYS' will use Listing ids '-L', Entities will use '-E', and FI will use security '-S' ids. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)")
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


  public FactsetTranslation fsymSecurityId(String fsymSecurityId) {
    this.fsymSecurityId = fsymSecurityId;
    return this;
  }

   /**
   * FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with an -S suffix (XXXXXX-S). All equity and fixed income securities that exist on FactSet are allocated a security-level permanent identifier. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)
   * @return fsymSecurityId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "X0MHD2-S", value = "FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with an -S suffix (XXXXXX-S). All equity and fixed income securities that exist on FactSet are allocated a security-level permanent identifier. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)")
  @JsonProperty(JSON_PROPERTY_FSYM_SECURITY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymSecurityId() {
    return fsymSecurityId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_SECURITY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymSecurityId(String fsymSecurityId) {
    this.fsymSecurityId = fsymSecurityId;
  }


  public FactsetTranslation fsymRegionalId(String fsymRegionalId) {
    this.fsymRegionalId = fsymRegionalId;
    return this;
  }

   /**
   * FactSet Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security’s best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)
   * @return fsymRegionalId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "BL5KVX-R", value = "FactSet Regional Security Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R). Identifies the security’s best regional security data series per currency. For equities, all primary listings per region and currency are allocated a regional-level permanent identifier. The regional-level permanent identifier will be available once a SEDOL representing the region/currency has been allocated and the identifiers are on FactSet. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)")
  @JsonProperty(JSON_PROPERTY_FSYM_REGIONAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymRegionalId() {
    return fsymRegionalId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_REGIONAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymRegionalId(String fsymRegionalId) {
    this.fsymRegionalId = fsymRegionalId;
  }


  public FactsetTranslation fsymListingId(String fsymListingId) {
    this.fsymListingId = fsymListingId;
    return this;
  }

   /**
   * FactSet Listing Security Identifier. Six alpha-numeric characters, vowels excluded, with an -L suffix (XXXXXX-L). The listing-level permanent identifier will be available prior to the end of trading on the first day of trading. Does not populate for composite ids (i.e. &#39;-USA&#39;) since these are not specified listing exchanges. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)
   * @return fsymListingId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "NSXGVV-L", value = "FactSet Listing Security Identifier. Six alpha-numeric characters, vowels excluded, with an -L suffix (XXXXXX-L). The listing-level permanent identifier will be available prior to the end of trading on the first day of trading. Does not populate for composite ids (i.e. '-USA') since these are not specified listing exchanges. [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)")
  @JsonProperty(JSON_PROPERTY_FSYM_LISTING_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymListingId() {
    return fsymListingId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_LISTING_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymListingId(String fsymListingId) {
    this.fsymListingId = fsymListingId;
  }


  public FactsetTranslation fsymEntityId(String fsymEntityId) {
    this.fsymEntityId = fsymEntityId;
    return this;
  }

   /**
   * FactSet Entity Identifier (-E). For more information on Entity Ids, visit [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)
   * @return fsymEntityId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "000F9X-E", value = "FactSet Entity Identifier (-E). For more information on Entity Ids, visit [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881)")
  @JsonProperty(JSON_PROPERTY_FSYM_ENTITY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymEntityId() {
    return fsymEntityId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_ENTITY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymEntityId(String fsymEntityId) {
    this.fsymEntityId = fsymEntityId;
  }


  public FactsetTranslation fsymTickerExchange(String fsymTickerExchange) {
    this.fsymTickerExchange = fsymTickerExchange;
    return this;
  }

   /**
   * FactSet exchange ticker symbol. For definitions of Exchange Codes, visit [Online Assistant Page #12544](https://oa.apps.factset.com/pages/12544).
   * @return fsymTickerExchange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "COST-USA", value = "FactSet exchange ticker symbol. For definitions of Exchange Codes, visit [Online Assistant Page #12544](https://oa.apps.factset.com/pages/12544).")
  @JsonProperty(JSON_PROPERTY_FSYM_TICKER_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymTickerExchange() {
    return fsymTickerExchange;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_TICKER_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymTickerExchange(String fsymTickerExchange) {
    this.fsymTickerExchange = fsymTickerExchange;
  }


  public FactsetTranslation fsymTickerRegion(String fsymTickerRegion) {
    this.fsymTickerRegion = fsymTickerRegion;
    return this;
  }

   /**
   * FactSet region ticker symbol. For details on Global Region Codes, visit [Online Assistant Page #13258](https://oa.apps.factset.com/pages/13258)
   * @return fsymTickerRegion
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "COST-US", value = "FactSet region ticker symbol. For details on Global Region Codes, visit [Online Assistant Page #13258](https://oa.apps.factset.com/pages/13258)")
  @JsonProperty(JSON_PROPERTY_FSYM_TICKER_REGION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymTickerRegion() {
    return fsymTickerRegion;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_TICKER_REGION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymTickerRegion(String fsymTickerRegion) {
    this.fsymTickerRegion = fsymTickerRegion;
  }


  public FactsetTranslation frefListingExchange(String frefListingExchange) {
    this.frefListingExchange = frefListingExchange;
    return this;
  }

   /**
   * Primary Listing Exchange Code. For details on Exchange Code Definitions, visit [Online Assistant Page #12544](https://oa.apps.factset.com/pages/12544) 
   * @return frefListingExchange
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "NAS", value = "Primary Listing Exchange Code. For details on Exchange Code Definitions, visit [Online Assistant Page #12544](https://oa.apps.factset.com/pages/12544) ")
  @JsonProperty(JSON_PROPERTY_FREF_LISTING_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFrefListingExchange() {
    return frefListingExchange;
  }


  @JsonProperty(JSON_PROPERTY_FREF_LISTING_EXCHANGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFrefListingExchange(String frefListingExchange) {
    this.frefListingExchange = frefListingExchange;
  }


  public FactsetTranslation currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Three character ISO Currency code. For details on ISO Currency Code definitions, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470)
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "USD", value = "Three character ISO Currency code. For details on ISO Currency Code definitions, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470)")
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


  public FactsetTranslation securityType(String securityType) {
    this.securityType = securityType;
    return this;
  }

   /**
   * Returns security types for equities. For definitions of Security Types, visit [Online Assistant Page #15776](https://oa.apps.factset.com/pages/15776)
   * @return securityType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SHARE", value = "Returns security types for equities. For definitions of Security Types, visit [Online Assistant Page #15776](https://oa.apps.factset.com/pages/15776)")
  @JsonProperty(JSON_PROPERTY_SECURITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSecurityType() {
    return securityType;
  }


  @JsonProperty(JSON_PROPERTY_SECURITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSecurityType(String securityType) {
    this.securityType = securityType;
  }


  public FactsetTranslation name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Proper Name of company or issuer.
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Costco Wholesale Corporation", value = "Proper Name of company or issuer.")
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


  public FactsetTranslation requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier specified in the &#x60;ids&#x60; parameter of the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "COST", value = "Identifier specified in the `ids` parameter of the request.")
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
   * Return true if this factsetTranslation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FactsetTranslation factsetTranslation = (FactsetTranslation) o;
    return Objects.equals(this.fsymId, factsetTranslation.fsymId) &&
        Objects.equals(this.fsymSecurityId, factsetTranslation.fsymSecurityId) &&
        Objects.equals(this.fsymRegionalId, factsetTranslation.fsymRegionalId) &&
        Objects.equals(this.fsymListingId, factsetTranslation.fsymListingId) &&
        Objects.equals(this.fsymEntityId, factsetTranslation.fsymEntityId) &&
        Objects.equals(this.fsymTickerExchange, factsetTranslation.fsymTickerExchange) &&
        Objects.equals(this.fsymTickerRegion, factsetTranslation.fsymTickerRegion) &&
        Objects.equals(this.frefListingExchange, factsetTranslation.frefListingExchange) &&
        Objects.equals(this.currency, factsetTranslation.currency) &&
        Objects.equals(this.securityType, factsetTranslation.securityType) &&
        Objects.equals(this.name, factsetTranslation.name) &&
        Objects.equals(this.requestId, factsetTranslation.requestId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fsymId, fsymSecurityId, fsymRegionalId, fsymListingId, fsymEntityId, fsymTickerExchange, fsymTickerRegion, frefListingExchange, currency, securityType, name, requestId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FactsetTranslation {\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    fsymSecurityId: ").append(toIndentedString(fsymSecurityId)).append("\n");
    sb.append("    fsymRegionalId: ").append(toIndentedString(fsymRegionalId)).append("\n");
    sb.append("    fsymListingId: ").append(toIndentedString(fsymListingId)).append("\n");
    sb.append("    fsymEntityId: ").append(toIndentedString(fsymEntityId)).append("\n");
    sb.append("    fsymTickerExchange: ").append(toIndentedString(fsymTickerExchange)).append("\n");
    sb.append("    fsymTickerRegion: ").append(toIndentedString(fsymTickerRegion)).append("\n");
    sb.append("    frefListingExchange: ").append(toIndentedString(frefListingExchange)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    securityType: ").append(toIndentedString(securityType)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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
