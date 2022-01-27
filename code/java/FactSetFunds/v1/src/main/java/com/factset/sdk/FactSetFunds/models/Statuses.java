/*
 * FactSet Funds API
 * FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage    * Fund descriptions    * A seven-tier classification system   * Leverage information   * Fees and expenses    * Portfolio managers       FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage    * Net asset value   * Fund flows    * Assets under management   * Total return  
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetFunds.models;

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
import com.factset.sdk.FactSetFunds.JSON;


/**
 * Statuses
 */
@JsonPropertyOrder({
  Statuses.JSON_PROPERTY_FSYM_ID,
  Statuses.JSON_PROPERTY_ACTIVE_FLAG,
  Statuses.JSON_PROPERTY_SHR_CLASS_ACTIVE_FLAG,
  Statuses.JSON_PROPERTY_ISON_F_F_D,
  Statuses.JSON_PROPERTY_REQUEST_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class Statuses implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_ACTIVE_FLAG = "activeFlag";
  private Integer activeFlag;

  public static final String JSON_PROPERTY_SHR_CLASS_ACTIVE_FLAG = "shrClassActiveFlag";
  private Integer shrClassActiveFlag;

  public static final String JSON_PROPERTY_ISON_F_F_D = "isonFFD";
  private Integer isonFFD;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;


  public Statuses fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with a -S suffix (XXXXXX-S), resolved from the requestId of the Fund requested.
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "FNK7XP-S", value = "FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with a -S suffix (XXXXXX-S), resolved from the requestId of the Fund requested.")
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


  public Statuses activeFlag(Integer activeFlag) {
    this.activeFlag = activeFlag;
    return this;
  }

   /**
   * Binary flag to indicate whether the fund is currently active, where 1 is active and 0 is inactive.
   * @return activeFlag
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "Binary flag to indicate whether the fund is currently active, where 1 is active and 0 is inactive.")
  @JsonProperty(JSON_PROPERTY_ACTIVE_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getActiveFlag() {
    return activeFlag;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActiveFlag(Integer activeFlag) {
    this.activeFlag = activeFlag;
  }


  public Statuses shrClassActiveFlag(Integer shrClassActiveFlag) {
    this.shrClassActiveFlag = shrClassActiveFlag;
    return this;
  }

   /**
   * Returns a binary indicator of whether the specified share class is currently active, where 1 is active and 0 is inactive.
   * @return shrClassActiveFlag
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "Returns a binary indicator of whether the specified share class is currently active, where 1 is active and 0 is inactive.")
  @JsonProperty(JSON_PROPERTY_SHR_CLASS_ACTIVE_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getShrClassActiveFlag() {
    return shrClassActiveFlag;
  }


  @JsonProperty(JSON_PROPERTY_SHR_CLASS_ACTIVE_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShrClassActiveFlag(Integer shrClassActiveFlag) {
    this.shrClassActiveFlag = shrClassActiveFlag;
  }


  public Statuses isonFFD(Integer isonFFD) {
    this.isonFFD = isonFFD;
    return this;
  }

   /**
   * Returns a binary indicator of whether the specified fund is available in the FactSet Funds Database (FFD).
   * @return isonFFD
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "Returns a binary indicator of whether the specified fund is available in the FactSet Funds Database (FFD).")
  @JsonProperty(JSON_PROPERTY_ISON_F_F_D)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getIsonFFD() {
    return isonFFD;
  }


  @JsonProperty(JSON_PROPERTY_ISON_F_F_D)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsonFFD(Integer isonFFD) {
    this.isonFFD = isonFFD;
  }


  public Statuses requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * The requested Id sent as input.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "MABAX", value = "The requested Id sent as input.")
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
   * Return true if this statuses object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Statuses statuses = (Statuses) o;
    return Objects.equals(this.fsymId, statuses.fsymId) &&
        Objects.equals(this.activeFlag, statuses.activeFlag) &&
        Objects.equals(this.shrClassActiveFlag, statuses.shrClassActiveFlag) &&
        Objects.equals(this.isonFFD, statuses.isonFFD) &&
        Objects.equals(this.requestId, statuses.requestId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fsymId, activeFlag, shrClassActiveFlag, isonFFD, requestId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Statuses {\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    activeFlag: ").append(toIndentedString(activeFlag)).append("\n");
    sb.append("    shrClassActiveFlag: ").append(toIndentedString(shrClassActiveFlag)).append("\n");
    sb.append("    isonFFD: ").append(toIndentedString(isonFFD)).append("\n");
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
