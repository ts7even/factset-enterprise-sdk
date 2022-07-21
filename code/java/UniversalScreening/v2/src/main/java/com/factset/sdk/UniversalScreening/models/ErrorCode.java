/*
 * Universal Screening API
 * Through the Universal Screening API, you can access the power of FactSet's Universal Screening Application. Calculate and return the results of your saved Universal Screens.
 *
 * The version of the OpenAPI document: 2.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.UniversalScreening.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import io.swagger.annotations.ApiModel;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.UniversalScreening.JSON;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/**
 * Factset API specific error codes
 */
public enum ErrorCode {
  
  NOTAUTHENTICATED("notAuthenticated"),
  
  NOTAUTHORIZED("notAuthorized"),
  
  NOTFOUND("notFound"),
  
  ENDPOINTNOTFOUND("endpointNotFound"),
  
  PARAMETERERROR("parameterError"),
  
  GENERICSERVERERROR("genericServerError"),
  
  RESOURCEGONE("resourceGone"),
  
  QUANTITYLIMITSEXCEEDED("quantityLimitsExceeded"),
  
  UNIVERSAL_SCREENING_PARAMETERERROR("universal_screening_parameterError"),
  
  UNIVERSAL_SCREENING_PARAMETERWARNING("universal_screening_parameterWarning");

  private String value;

  ErrorCode(String value) {
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
  public static ErrorCode fromValue(String value) {
    for (ErrorCode b : ErrorCode.values()) {
      if (b.value.equals(value)) {
        return b;
      }
    }
    throw new IllegalArgumentException("Unexpected value '" + value + "'");
  }
}
