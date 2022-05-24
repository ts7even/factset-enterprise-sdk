/*
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.IRNCustomSymbols.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.IRNCustomSymbols.models.OperationType;
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
import com.factset.sdk.IRNCustomSymbols.JSON;


/**
 * Operation
 */
@JsonPropertyOrder({
  Operation.JSON_PROPERTY_OPERATION_TYPE,
  Operation.JSON_PROPERTY_PATH,
  Operation.JSON_PROPERTY_OP,
  Operation.JSON_PROPERTY_FROM,
  Operation.JSON_PROPERTY_VALUE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Operation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OPERATION_TYPE = "operationType";
  private OperationType operationType;

  public static final String JSON_PROPERTY_PATH = "path";
  private JsonNullable<String> path = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_OP = "op";
  private JsonNullable<String> op = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_FROM = "from";
  private JsonNullable<String> from = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_VALUE = "value";
  private JsonNullable<Object> value = JsonNullable.<Object>of(null);

  public Operation() { 
  }

  public Operation operationType(OperationType operationType) {
    this.operationType = operationType;
    return this;
  }

   /**
   * Get operationType
   * @return operationType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_OPERATION_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OperationType getOperationType() {
    return operationType;
  }


  @JsonProperty(JSON_PROPERTY_OPERATION_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOperationType(OperationType operationType) {
    this.operationType = operationType;
  }


  public Operation path(String path) {
    this.path = JsonNullable.<String>of(path);
    return this;
  }

   /**
   * Get path
   * @return path
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getPath() {
        return path.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PATH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getPath_JsonNullable() {
    return path;
  }
  
  @JsonProperty(JSON_PROPERTY_PATH)
  public void setPath_JsonNullable(JsonNullable<String> path) {
    this.path = path;
  }

  public void setPath(String path) {
    this.path = JsonNullable.<String>of(path);
  }


  public Operation op(String op) {
    this.op = JsonNullable.<String>of(op);
    return this;
  }

   /**
   * Get op
   * @return op
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getOp() {
        return op.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_OP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getOp_JsonNullable() {
    return op;
  }
  
  @JsonProperty(JSON_PROPERTY_OP)
  public void setOp_JsonNullable(JsonNullable<String> op) {
    this.op = op;
  }

  public void setOp(String op) {
    this.op = JsonNullable.<String>of(op);
  }


  public Operation from(String from) {
    this.from = JsonNullable.<String>of(from);
    return this;
  }

   /**
   * Get from
   * @return from
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getFrom() {
        return from.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_FROM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getFrom_JsonNullable() {
    return from;
  }
  
  @JsonProperty(JSON_PROPERTY_FROM)
  public void setFrom_JsonNullable(JsonNullable<String> from) {
    this.from = from;
  }

  public void setFrom(String from) {
    this.from = JsonNullable.<String>of(from);
  }


  public Operation value(Object value) {
    this.value = JsonNullable.<Object>of(value);
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public Object getValue() {
        return value.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Object> getValue_JsonNullable() {
    return value;
  }
  
  @JsonProperty(JSON_PROPERTY_VALUE)
  public void setValue_JsonNullable(JsonNullable<Object> value) {
    this.value = value;
  }

  public void setValue(Object value) {
    this.value = JsonNullable.<Object>of(value);
  }


  /**
   * Return true if this Operation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Operation operation = (Operation) o;
    return Objects.equals(this.operationType, operation.operationType) &&
        equalsNullable(this.path, operation.path) &&
        equalsNullable(this.op, operation.op) &&
        equalsNullable(this.from, operation.from) &&
        equalsNullable(this.value, operation.value);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(operationType, hashCodeNullable(path), hashCodeNullable(op), hashCodeNullable(from), hashCodeNullable(value));
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
    sb.append("class Operation {\n");
    sb.append("    operationType: ").append(toIndentedString(operationType)).append("\n");
    sb.append("    path: ").append(toIndentedString(path)).append("\n");
    sb.append("    op: ").append(toIndentedString(op)).append("\n");
    sb.append("    from: ").append(toIndentedString(from)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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

