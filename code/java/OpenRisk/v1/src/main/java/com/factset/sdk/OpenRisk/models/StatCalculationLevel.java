/*
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OpenRisk.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import io.swagger.annotations.ApiModel;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OpenRisk.JSON;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Stat levels available for calculation
 */
public enum StatCalculationLevel {
  
  PORTFOLIO("Portfolio"),
  
  SECURITY("Security"),
  
  SECURITYGROUP("SecurityGroup"),
  
  SECURITYSECURITY("SecuritySecurity"),
  
  FACTOR("Factor"),
  
  FACTORGROUP("FactorGroup"),
  
  FACTORFACTOR("FactorFactor"),
  
  FACTORSECURITY("FactorSecurity"),
  
  FACTORGROUPSECURITY("FactorGroupSecurity"),
  
  FACTORSECURITYGROUP("FactorSecurityGroup"),
  
  FACTORGROUPSECURITYGROUP("FactorGroupSecurityGroup");

  private String value;

  StatCalculationLevel(String value) {
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
  public static StatCalculationLevel fromValue(String value) {
    for (StatCalculationLevel b : StatCalculationLevel.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }
}
