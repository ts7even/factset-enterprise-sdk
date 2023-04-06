/*
 * FactSet Formula API
 *  **FactSet Formula API**  FactSet’s Formula API is a modern, flexible, formula-based API that enables users to access FactSet’s wide range of financial data and content. The API offers two endpoints, one optimized for time-series analysis and one designed for cross-sectional analysis, providing users a simplified interface into FactSet’s expansive offering. By providing two endpoints, it allows for the optimization of user workflows, while reducing complexity.  Leverage the power and flexibility of the Formula API to -   * Pull data from across most content sets that a user has access to in a single request   * Include business logic and mathematical operations in request   * Submit a dynamic universe in both endpoints   * Return the fsymId to easily combine with other FactSet content / products   * Set the trading calendar   * Define custom display names  **Formula API Request Builder**  The Formula API Request Builder provides users everything they need to form a Formula API request. In the Request Builder, you can select identifiers, build a universe expression, select FQL or Screening formulas, easily apply business logic and mathematical functions to the FQL or Screening formulas, specify optional parameters, and construct a GET or POST request. The Request Builder eliminates the need to have previous FQL and Screening knowledge and allows you to quickly find your desired data items and form the request.  The Formula API Request Builder can be accessed by navigating to [https://developer.factset.com/formula-api-request-builder](https://developer.factset.com/formula-api-request-builder) and logging in using your FactSet.net ID. When using the Request Builder to construct requests for the one of the Formula API's endpoints, be sure to toggle to the correct endpoint at the top of the page.  **How to Check the Health and Availability of the Formula API**  Please use the below endpoint to check the health and availability of the Formula API. You must be authorized for this API to use the Health endpoint.  [https://api.factset.com/formula-api/health](https://api.factset.com/formula-api/health)  **How to Programmatically Download API Specification File**  You can download the FactSet Formula API Specification File in .yaml. using the \"Download Spec\" button to the right of the version number. This specification can then be used for Codegen to create your own SDKs. 
 *
 * The version of the OpenAPI document: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Formula.models;

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
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.Formula.JSON;


/**
 * An object returning the results for a single identifier and formula. This is the base of the response object. The result attribute depends on the formula requested. Response objects with the various result attribute types are outlined in separate schemas.
 */
@ApiModel(description = "An object returning the results for a single identifier and formula. This is the base of the response object. The result attribute depends on the formula requested. Response objects with the various result attribute types are outlined in separate schemas.")
@JsonPropertyOrder({
  TimeSeriesResultObjectNonflattenedBase.JSON_PROPERTY_ERROR,
  TimeSeriesResultObjectNonflattenedBase.JSON_PROPERTY_ERROR_MESSAGE,
  TimeSeriesResultObjectNonflattenedBase.JSON_PROPERTY_FORMULA,
  TimeSeriesResultObjectNonflattenedBase.JSON_PROPERTY_DISPLAY_NAME,
  TimeSeriesResultObjectNonflattenedBase.JSON_PROPERTY_REQUEST_ID,
  TimeSeriesResultObjectNonflattenedBase.JSON_PROPERTY_FSYM_ID,
  TimeSeriesResultObjectNonflattenedBase.JSON_PROPERTY_DATA_TYPE,
  TimeSeriesResultObjectNonflattenedBase.JSON_PROPERTY_OBJECT_TYPE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class TimeSeriesResultObjectNonflattenedBase implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ERROR = "error";
  private Integer error;

  public static final String JSON_PROPERTY_ERROR_MESSAGE = "errorMessage";
  private JsonNullable<String> errorMessage = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_FORMULA = "formula";
  private String formula;

  public static final String JSON_PROPERTY_DISPLAY_NAME = "displayName";
  private JsonNullable<String> displayName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private JsonNullable<String> fsymId = JsonNullable.<String>undefined();

  /**
   * Type of data returned in &#x60;result&#x60;
   */
  public enum DataTypeEnum {
    STRING("STRING"),
    
    INTEGER("INTEGER"),
    
    DOUBLE("DOUBLE");

    private String value;

    DataTypeEnum(String value) {
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
    public static DataTypeEnum fromValue(String value) {
      for (DataTypeEnum b : DataTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      return null;
    }
  }

  public static final String JSON_PROPERTY_DATA_TYPE = "dataType";
  private DataTypeEnum dataType;

  /**
   * Type of object returned in &#x60;result&#x60;
   */
  public enum ObjectTypeEnum {
    SCALAR("SCALAR"),
    
    ARRAY("ARRAY"),
    
    MATRIX("MATRIX"),
    
    TIMESERIES("TIMESERIES");

    private String value;

    ObjectTypeEnum(String value) {
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
    public static ObjectTypeEnum fromValue(String value) {
      for (ObjectTypeEnum b : ObjectTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_OBJECT_TYPE = "objectType";
  private ObjectTypeEnum objectType;

  public TimeSeriesResultObjectNonflattenedBase() { 
  }

  @JsonCreator
  public TimeSeriesResultObjectNonflattenedBase(
    @JsonProperty(value=JSON_PROPERTY_ERROR, required=true) Integer error, 
    @JsonProperty(value=JSON_PROPERTY_FORMULA, required=true) String formula, 
    @JsonProperty(value=JSON_PROPERTY_REQUEST_ID, required=true) String requestId, 
    @JsonProperty(value=JSON_PROPERTY_DATA_TYPE, required=true) DataTypeEnum dataType, 
    @JsonProperty(value=JSON_PROPERTY_OBJECT_TYPE, required=true) ObjectTypeEnum objectType
  ) {
    this();
    this.error = error;
    this.formula = formula;
    this.requestId = requestId;
    this.dataType = dataType;
    this.objectType = objectType;
  }

  public TimeSeriesResultObjectNonflattenedBase error(Integer error) {
    this.error = error;
    return this;
  }

   /**
   * Indicates that there was an error in the execution of the FQL Formula. * Zero – success * Non-zero – failure 
   * @return error
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "0", required = true, value = "Indicates that there was an error in the execution of the FQL Formula. * Zero – success * Non-zero – failure ")
  @JsonProperty(JSON_PROPERTY_ERROR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getError() {
    return error;
  }


  @JsonProperty(JSON_PROPERTY_ERROR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setError(Integer error) {
    this.error = error;
  }


  public TimeSeriesResultObjectNonflattenedBase errorMessage(String errorMessage) {
    this.errorMessage = JsonNullable.<String>of(errorMessage);
    return this;
  }

   /**
   * If error is non-zero, errorMessage will display the FQL formula error.
   * @return errorMessage
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "parse error, unexpected ',' ", value = "If error is non-zero, errorMessage will display the FQL formula error.")
  @JsonIgnore

  public String getErrorMessage() {
        return errorMessage.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_ERROR_MESSAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getErrorMessage_JsonNullable() {
    return errorMessage;
  }
  
  @JsonProperty(JSON_PROPERTY_ERROR_MESSAGE)
  public void setErrorMessage_JsonNullable(JsonNullable<String> errorMessage) {
    this.errorMessage = errorMessage;
  }

  public void setErrorMessage(String errorMessage) {
    this.errorMessage = JsonNullable.<String>of(errorMessage);
  }


  public TimeSeriesResultObjectNonflattenedBase formula(String formula) {
    this.formula = formula;
    return this;
  }

   /**
   * FQL formula requested.
   * @return formula
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "P_PRICE(0,-1,D)", required = true, value = "FQL formula requested.")
  @JsonProperty(JSON_PROPERTY_FORMULA)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getFormula() {
    return formula;
  }


  @JsonProperty(JSON_PROPERTY_FORMULA)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setFormula(String formula) {
    this.formula = formula;
  }


  public TimeSeriesResultObjectNonflattenedBase displayName(String displayName) {
    this.displayName = JsonNullable.<String>of(displayName);
    return this;
  }

   /**
   * Display Name.
   * @return displayName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "PRICE", value = "Display Name.")
  @JsonIgnore

  public String getDisplayName() {
        return displayName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_DISPLAY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getDisplayName_JsonNullable() {
    return displayName;
  }
  
  @JsonProperty(JSON_PROPERTY_DISPLAY_NAME)
  public void setDisplayName_JsonNullable(JsonNullable<String> displayName) {
    this.displayName = displayName;
  }

  public void setDisplayName(String displayName) {
    this.displayName = JsonNullable.<String>of(displayName);
  }


  public TimeSeriesResultObjectNonflattenedBase requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier requested.
   * @return requestId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "IBM-US", required = true, value = "Identifier requested.")
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


  public TimeSeriesResultObjectNonflattenedBase fsymId(String fsymId) {
    this.fsymId = JsonNullable.<String>of(fsymId);
    return this;
  }

   /**
   * The **fsymId** field returned is the FactSet Default Permanent Identifier for the &#x60;requestId&#x60;. For all supported &#x60;requestId&#x60; symbol types, the &#x60;fsymId&#x60; parameter will return the Regional Level PermId &#39;-R&#39; which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted &#x60;requestId&#x60; symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). Included only if the &#x60;fsymId&#x60; parameter is set to Y. 
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SJY281-R", value = "The **fsymId** field returned is the FactSet Default Permanent Identifier for the `requestId`. For all supported `requestId` symbol types, the `fsymId` parameter will return the Regional Level PermId '-R' which identifies the security’s best regional security data series per currency. Currently, the fsymId parameter only supports equities. Accepted `requestId` symbol types include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. Further documentation can be found at this [Online Assistant attachment](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881). Included only if the `fsymId` parameter is set to Y. ")
  @JsonIgnore

  public String getFsymId() {
        return fsymId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getFsymId_JsonNullable() {
    return fsymId;
  }
  
  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  public void setFsymId_JsonNullable(JsonNullable<String> fsymId) {
    this.fsymId = fsymId;
  }

  public void setFsymId(String fsymId) {
    this.fsymId = JsonNullable.<String>of(fsymId);
  }


  public TimeSeriesResultObjectNonflattenedBase dataType(DataTypeEnum dataType) {
    this.dataType = dataType;
    return this;
  }

   /**
   * Type of data returned in &#x60;result&#x60;
   * @return dataType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "STRING", required = true, value = "Type of data returned in `result`")
  @JsonProperty(JSON_PROPERTY_DATA_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public DataTypeEnum getDataType() {
    return dataType;
  }


  @JsonProperty(JSON_PROPERTY_DATA_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDataType(DataTypeEnum dataType) {
    this.dataType = dataType;
  }


  public TimeSeriesResultObjectNonflattenedBase objectType(ObjectTypeEnum objectType) {
    this.objectType = objectType;
    return this;
  }

   /**
   * Type of object returned in &#x60;result&#x60;
   * @return objectType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "ARRAY", required = true, value = "Type of object returned in `result`")
  @JsonProperty(JSON_PROPERTY_OBJECT_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public ObjectTypeEnum getObjectType() {
    return objectType;
  }


  @JsonProperty(JSON_PROPERTY_OBJECT_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setObjectType(ObjectTypeEnum objectType) {
    this.objectType = objectType;
  }


  /**
   * Return true if this time_series_result_object_nonflattened_base object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TimeSeriesResultObjectNonflattenedBase timeSeriesResultObjectNonflattenedBase = (TimeSeriesResultObjectNonflattenedBase) o;
    return Objects.equals(this.error, timeSeriesResultObjectNonflattenedBase.error) &&
        equalsNullable(this.errorMessage, timeSeriesResultObjectNonflattenedBase.errorMessage) &&
        Objects.equals(this.formula, timeSeriesResultObjectNonflattenedBase.formula) &&
        equalsNullable(this.displayName, timeSeriesResultObjectNonflattenedBase.displayName) &&
        Objects.equals(this.requestId, timeSeriesResultObjectNonflattenedBase.requestId) &&
        equalsNullable(this.fsymId, timeSeriesResultObjectNonflattenedBase.fsymId) &&
        Objects.equals(this.dataType, timeSeriesResultObjectNonflattenedBase.dataType) &&
        Objects.equals(this.objectType, timeSeriesResultObjectNonflattenedBase.objectType);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(error, hashCodeNullable(errorMessage), formula, hashCodeNullable(displayName), requestId, hashCodeNullable(fsymId), dataType, objectType);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TimeSeriesResultObjectNonflattenedBase {\n");
    sb.append("    error: ").append(toIndentedString(error)).append("\n");
    sb.append("    errorMessage: ").append(toIndentedString(errorMessage)).append("\n");
    sb.append("    formula: ").append(toIndentedString(formula)).append("\n");
    sb.append("    displayName: ").append(toIndentedString(displayName)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    dataType: ").append(toIndentedString(dataType)).append("\n");
    sb.append("    objectType: ").append(toIndentedString(objectType)).append("\n");
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

