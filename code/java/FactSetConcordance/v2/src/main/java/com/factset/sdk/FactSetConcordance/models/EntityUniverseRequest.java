/*
 * FactSet Concordance API
 *    The FactSet Concordance API enables Application Developers and Data Scientists to programmatically discover the FactSet Identifier for a specific Entity or Person based on attributes, such as name, URL, and location.FactSet Identifiers are mapped to industry-standard identifiers, as well as to a comprehensive set of reference data and unique content, to enhance the ability to quickly connect content sets.<p>     Using the submitted attributes, the FactSet Concordance API leverages FactSet’s extensive Entity Master, People, and Symbology databases to return potential candidate matches and a proposed match. The result is a concorded FactSet Identifier that can then be used as input throughout FactSet's expanding catalog of Content using our Content APIs or Standard DataFeeds.</p>    <b>There are two types of workflows supported in the API:</b>    <b>Entity & People Match:</b> The first workflow follows traditional API conventions in that a request is accepted and a response is returned synchronously enabling the concordance of up to 25 names in a single request. The response returns a list of 20 candidates as well as a proposed match.    <b>Entity & People Match - Bulk:</b> The second workflow allows you to input a large list of names within a .CSV file in a single request With this workflow, a task is created for uploading a set of queries. Once the task has completed, the client retrieves the concordance results through the /entity-decisions or /people-decisions endpoint. Note that in the Bulk workflow, only the matches for the records are returned. Candidates are not included.    Once the service has provided a list of concorded FactSet Identifiers, you can then use our Entity Mappings and People Mappings endpoints to further review the universe of mapped identifiers or modify existing records. </p> 
 *
 * The version of the OpenAPI document: 2.5.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetConcordance.models;

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
import com.factset.sdk.FactSetConcordance.JSON;


/**
 * EntityUniverseRequest
 */
@JsonPropertyOrder({
  EntityUniverseRequest.JSON_PROPERTY_UNIVERSE_ID,
  EntityUniverseRequest.JSON_PROPERTY_OFFSET,
  EntityUniverseRequest.JSON_PROPERTY_LIMIT,
  EntityUniverseRequest.JSON_PROPERTY_MAP_STATUS,
  EntityUniverseRequest.JSON_PROPERTY_CLIENT_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EntityUniverseRequest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_UNIVERSE_ID = "universeId";
  private Integer universeId;

  public static final String JSON_PROPERTY_OFFSET = "offset";
  private Integer offset;

  public static final String JSON_PROPERTY_LIMIT = "limit";
  private Integer limit;

  /**
   * Gets or Sets mapStatus
   */
  public enum MapStatusEnum {
    MAPPED("MAPPED"),
    
    UNMAPPED("UNMAPPED"),
    
    INDETERMINATE("INDETERMINATE");

    private String value;

    MapStatusEnum(String value) {
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
    public static MapStatusEnum fromValue(String value) {
      for (MapStatusEnum b : MapStatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_MAP_STATUS = "mapStatus";
  private java.util.List<MapStatusEnum> mapStatus = null;

  public static final String JSON_PROPERTY_CLIENT_ID = "clientId";
  private java.util.List<String> clientId = null;

  public EntityUniverseRequest() { 
  }

  @JsonCreator
  public EntityUniverseRequest(
    @JsonProperty(value=JSON_PROPERTY_UNIVERSE_ID, required=true) Integer universeId
  ) {
    this();
    this.universeId = universeId;
  }

  public EntityUniverseRequest universeId(Integer universeId) {
    this.universeId = universeId;
    return this;
  }

   /**
   * the id of the universe that entities come from
   * @return universeId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "1", required = true, value = "the id of the universe that entities come from")
  @JsonProperty(JSON_PROPERTY_UNIVERSE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getUniverseId() {
    return universeId;
  }


  @JsonProperty(JSON_PROPERTY_UNIVERSE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setUniverseId(Integer universeId) {
    this.universeId = universeId;
  }


  public EntityUniverseRequest offset(Integer offset) {
    this.offset = offset;
    return this;
  }

   /**
   * starting row of the universe
   * @return offset
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0", value = "starting row of the universe")
  @JsonProperty(JSON_PROPERTY_OFFSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getOffset() {
    return offset;
  }


  @JsonProperty(JSON_PROPERTY_OFFSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOffset(Integer offset) {
    this.offset = offset;
  }


  public EntityUniverseRequest limit(Integer limit) {
    this.limit = limit;
    return this;
  }

   /**
   * Limits the number of records in the response.
   * maximum: 10000
   * @return limit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "10", value = "Limits the number of records in the response.")
  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getLimit() {
    return limit;
  }


  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLimit(Integer limit) {
    this.limit = limit;
  }


  public EntityUniverseRequest mapStatus(java.util.List<MapStatusEnum> mapStatus) {
    this.mapStatus = mapStatus;
    return this;
  }

  public EntityUniverseRequest addMapStatusItem(MapStatusEnum mapStatusItem) {
    if (this.mapStatus == null) {
      this.mapStatus = new java.util.ArrayList<>();
    }
    this.mapStatus.add(mapStatusItem);
    return this;
  }

   /**
   * Filter by the EPeople Decisions that have the specified mapStatus, where -       * MAPPED - The requested Entity Name is successfully mapped to a FactSet Entity Id (-E)       * UNMAPPED - The requested Entity Name is unmapped by FactSet.       * INDETERMINATE - The requested Entity Name was unable to make a mapping. 
   * @return mapStatus
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"MAPPED\"]", value = "Filter by the EPeople Decisions that have the specified mapStatus, where -       * MAPPED - The requested Entity Name is successfully mapped to a FactSet Entity Id (-E)       * UNMAPPED - The requested Entity Name is unmapped by FactSet.       * INDETERMINATE - The requested Entity Name was unable to make a mapping. ")
  @JsonProperty(JSON_PROPERTY_MAP_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<MapStatusEnum> getMapStatus() {
    return mapStatus;
  }


  @JsonProperty(JSON_PROPERTY_MAP_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMapStatus(java.util.List<MapStatusEnum> mapStatus) {
    this.mapStatus = mapStatus;
  }


  public EntityUniverseRequest clientId(java.util.List<String> clientId) {
    this.clientId = clientId;
    return this;
  }

  public EntityUniverseRequest addClientIdItem(String clientIdItem) {
    if (this.clientId == null) {
      this.clientId = new java.util.ArrayList<>();
    }
    this.clientId.add(clientIdItem);
    return this;
  }

   /**
   * fetch only the mappings that has client id included in the specified list.
   * @return clientId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"abc-123\",\"dfg-456\"]", value = "fetch only the mappings that has client id included in the specified list.")
  @JsonProperty(JSON_PROPERTY_CLIENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getClientId() {
    return clientId;
  }


  @JsonProperty(JSON_PROPERTY_CLIENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClientId(java.util.List<String> clientId) {
    this.clientId = clientId;
  }


  /**
   * Return true if this EntityUniverseRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EntityUniverseRequest entityUniverseRequest = (EntityUniverseRequest) o;
    return Objects.equals(this.universeId, entityUniverseRequest.universeId) &&
        Objects.equals(this.offset, entityUniverseRequest.offset) &&
        Objects.equals(this.limit, entityUniverseRequest.limit) &&
        Objects.equals(this.mapStatus, entityUniverseRequest.mapStatus) &&
        Objects.equals(this.clientId, entityUniverseRequest.clientId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(universeId, offset, limit, mapStatus, clientId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EntityUniverseRequest {\n");
    sb.append("    universeId: ").append(toIndentedString(universeId)).append("\n");
    sb.append("    offset: ").append(toIndentedString(offset)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
    sb.append("    mapStatus: ").append(toIndentedString(mapStatus)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
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

