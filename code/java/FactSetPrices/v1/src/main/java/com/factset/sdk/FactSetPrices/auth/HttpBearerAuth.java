/*
 * FactSet Prices API
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetPrices.auth;

import com.factset.sdk.FactSetPrices.Pair;
import com.factset.sdk.FactSetPrices.ApiException;

import java.net.URI;
import java.util.Map;
import java.util.List;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class HttpBearerAuth implements Authentication {
  private final String scheme;
  private String bearerToken;

  public HttpBearerAuth(String scheme) {
    this.scheme = scheme;
  }

  /**
   * Gets the token, which together with the scheme, will be sent as the value of the Authorization header.
   *
   * @return The bearer token
   */
  public String getBearerToken() {
    return bearerToken;
  }

  /**
   * Sets the token, which together with the scheme, will be sent as the value of the Authorization header.
   *
   * @param bearerToken The bearer token to send in the Authorization header
   */
  public void setBearerToken(String bearerToken) {
    this.bearerToken = bearerToken;
  }

  @Override
  public void applyToParams(List<Pair> queryParams, Map<String, String> headerParams, Map<String, String> cookieParams, String payload, String method, URI uri) throws ApiException {
    if(bearerToken == null) {
      return;
    }

    headerParams.put("Authorization", (scheme != null ? upperCaseBearer(scheme) + " " : "") + bearerToken);
  }

  private static String upperCaseBearer(String scheme) {
    return ("bearer".equalsIgnoreCase(scheme)) ? "Bearer" : scheme;
  }
}