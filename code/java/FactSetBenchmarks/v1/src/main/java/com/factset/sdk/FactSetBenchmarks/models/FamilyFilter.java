/*
 * FactSet Benchmarks API
 * FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon. 
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetBenchmarks.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import io.swagger.annotations.ApiModel;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetBenchmarks.JSON;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Highest Level Filter to search by common Benchmark Families, such as S&amp;P, MSCI, or Russell. This will retrieve all related benchmark ids. For further filtering, use the response items such as the categoryDescription field. Leave blank if you wish to see a full sample list of ids. requested- * **CHINA &amp; HK INDICES** - Major Hong Kong and China Indices, such as Hang Seng Index (HSI-HKX) * **DOW JONES** - Dow Jones Global, Regions, Countries, Titans. * **FACTSET MARKET INDICES** - Regional and Country Indices defined by FactSet * **FTSE** - FTSE Global, UK, Global All Cap, World, Xinhua, European, GWA, JSE, Multinationals, and Style indices * **GLOBAL INDICES** - A mix of major indices across the globe. * **MSCI** - MSCI All Country, Asia Pacific, Thematic &amp; Strategy, Emerging, Developed, US. * **RUSSELL** - US, Global, and Nomura. * **S&amp;P** - US, ASX, Select Industry, BMI, Global, Thematic, Emerging, TSX. * **STOXX** - Total Market, Europe, and Nordic * **TOPIX** - Topix Indices, such as TOPIX 500 (182301) 
 */
public enum FamilyFilter {
  
  CHINA_HK_INDICES("CHINA_HK_INDICES"),
  
  DOW_JONES("DOW_JONES"),
  
  FACTSET_MARKET_INDICES("FACTSET_MARKET_INDICES"),
  
  FTSE("FTSE"),
  
  GLOBAL_INDICES("GLOBAL_INDICES"),
  
  MSCI("MSCI"),
  
  RUSSELL("RUSSELL"),
  
  SP("SP"),
  
  STOXX("STOXX"),
  
  TOPIX("TOPIX");

  private String value;

  FamilyFilter(String value) {
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
  public static FamilyFilter fromValue(String value) {
    for (FamilyFilter b : FamilyFilter.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }
}
