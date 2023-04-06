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
import java.time.OffsetDateTime;
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetConcordance.JSON;


/**
 * Concordance People Mapping object. Shows the mapping detail related to user&#39;s universe. 
 */
@ApiModel(description = "Concordance People Mapping object. Shows the mapping detail related to user's universe. ")
@JsonPropertyOrder({
  PeopleMapping.JSON_PROPERTY_CLIENT_ENTITY,
  PeopleMapping.JSON_PROPERTY_CLIENT_FIRST_NAME,
  PeopleMapping.JSON_PROPERTY_CLIENT_ID,
  PeopleMapping.JSON_PROPERTY_CLIENT_LAST_NAME,
  PeopleMapping.JSON_PROPERTY_CLIENT_MIDDLE_NAME,
  PeopleMapping.JSON_PROPERTY_CLIENT_PERSON_NAME,
  PeopleMapping.JSON_PROPERTY_CLIENT_PRIORITY,
  PeopleMapping.JSON_PROPERTY_CLIENT_SALUTATION,
  PeopleMapping.JSON_PROPERTY_CLIENT_SUFFIX,
  PeopleMapping.JSON_PROPERTY_CREATED_TIME,
  PeopleMapping.JSON_PROPERTY_MAP_STATUS,
  PeopleMapping.JSON_PROPERTY_PERSON_ID,
  PeopleMapping.JSON_PROPERTY_PERSON_NAME,
  PeopleMapping.JSON_PROPERTY_UNIVERSE_ID,
  PeopleMapping.JSON_PROPERTY_UPDATED_TIME
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class PeopleMapping implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_CLIENT_ENTITY = "clientEntity";
  private JsonNullable<String> clientEntity = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CLIENT_FIRST_NAME = "clientFirstName";
  private JsonNullable<String> clientFirstName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CLIENT_ID = "clientId";
  private JsonNullable<String> clientId = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CLIENT_LAST_NAME = "clientLastName";
  private JsonNullable<String> clientLastName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CLIENT_MIDDLE_NAME = "clientMiddleName";
  private JsonNullable<String> clientMiddleName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CLIENT_PERSON_NAME = "clientPersonName";
  private JsonNullable<String> clientPersonName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CLIENT_PRIORITY = "clientPriority";
  private JsonNullable<String> clientPriority = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CLIENT_SALUTATION = "clientSalutation";
  private JsonNullable<String> clientSalutation = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CLIENT_SUFFIX = "clientSuffix";
  private JsonNullable<String> clientSuffix = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CREATED_TIME = "createdTime";
  private JsonNullable<OffsetDateTime> createdTime = JsonNullable.<OffsetDateTime>undefined();

  /**
   * Current status of the people mapping.
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
      return null;
    }
  }

  public static final String JSON_PROPERTY_MAP_STATUS = "mapStatus";
  private JsonNullable<MapStatusEnum> mapStatus = JsonNullable.<MapStatusEnum>undefined();

  public static final String JSON_PROPERTY_PERSON_ID = "personId";
  private JsonNullable<String> personId = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_PERSON_NAME = "personName";
  private JsonNullable<String> personName = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_UNIVERSE_ID = "universeId";
  private JsonNullable<Integer> universeId = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_UPDATED_TIME = "updatedTime";
  private JsonNullable<OffsetDateTime> updatedTime = JsonNullable.<OffsetDateTime>undefined();

  public PeopleMapping() { 
  }

  public PeopleMapping clientEntity(String clientEntity) {
    this.clientEntity = JsonNullable.<String>of(clientEntity);
    return this;
  }

   /**
   * It describes the name of the company
   * @return clientEntity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Microsoft", value = "It describes the name of the company")
  @JsonIgnore

  public String getClientEntity() {
        return clientEntity.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_ENTITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientEntity_JsonNullable() {
    return clientEntity;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_ENTITY)
  public void setClientEntity_JsonNullable(JsonNullable<String> clientEntity) {
    this.clientEntity = clientEntity;
  }

  public void setClientEntity(String clientEntity) {
    this.clientEntity = JsonNullable.<String>of(clientEntity);
  }


  public PeopleMapping clientFirstName(String clientFirstName) {
    this.clientFirstName = JsonNullable.<String>of(clientFirstName);
    return this;
  }

   /**
   * It indicates the full name of the client.
   * @return clientFirstName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "William", value = "It indicates the full name of the client.")
  @JsonIgnore

  public String getClientFirstName() {
        return clientFirstName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_FIRST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientFirstName_JsonNullable() {
    return clientFirstName;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_FIRST_NAME)
  public void setClientFirstName_JsonNullable(JsonNullable<String> clientFirstName) {
    this.clientFirstName = clientFirstName;
  }

  public void setClientFirstName(String clientFirstName) {
    this.clientFirstName = JsonNullable.<String>of(clientFirstName);
  }


  public PeopleMapping clientId(String clientId) {
    this.clientId = JsonNullable.<String>of(clientId);
    return this;
  }

   /**
   * User-defined unique identifier provided by the user in the request
   * @return clientId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "BGA-123", value = "User-defined unique identifier provided by the user in the request")
  @JsonIgnore

  public String getClientId() {
        return clientId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientId_JsonNullable() {
    return clientId;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_ID)
  public void setClientId_JsonNullable(JsonNullable<String> clientId) {
    this.clientId = clientId;
  }

  public void setClientId(String clientId) {
    this.clientId = JsonNullable.<String>of(clientId);
  }


  public PeopleMapping clientLastName(String clientLastName) {
    this.clientLastName = JsonNullable.<String>of(clientLastName);
    return this;
  }

   /**
   * It indicates last name of the client.
   * @return clientLastName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Gates", value = "It indicates last name of the client.")
  @JsonIgnore

  public String getClientLastName() {
        return clientLastName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_LAST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientLastName_JsonNullable() {
    return clientLastName;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_LAST_NAME)
  public void setClientLastName_JsonNullable(JsonNullable<String> clientLastName) {
    this.clientLastName = clientLastName;
  }

  public void setClientLastName(String clientLastName) {
    this.clientLastName = JsonNullable.<String>of(clientLastName);
  }


  public PeopleMapping clientMiddleName(String clientMiddleName) {
    this.clientMiddleName = JsonNullable.<String>of(clientMiddleName);
    return this;
  }

   /**
   * It indicates middle name of the client.
   * @return clientMiddleName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Henry", value = "It indicates middle name of the client.")
  @JsonIgnore

  public String getClientMiddleName() {
        return clientMiddleName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_MIDDLE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientMiddleName_JsonNullable() {
    return clientMiddleName;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_MIDDLE_NAME)
  public void setClientMiddleName_JsonNullable(JsonNullable<String> clientMiddleName) {
    this.clientMiddleName = clientMiddleName;
  }

  public void setClientMiddleName(String clientMiddleName) {
    this.clientMiddleName = JsonNullable.<String>of(clientMiddleName);
  }


  public PeopleMapping clientPersonName(String clientPersonName) {
    this.clientPersonName = JsonNullable.<String>of(clientPersonName);
    return this;
  }

   /**
   * It indiactes the name of the client
   * @return clientPersonName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Bill Gates", value = "It indiactes the name of the client")
  @JsonIgnore

  public String getClientPersonName() {
        return clientPersonName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_PERSON_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientPersonName_JsonNullable() {
    return clientPersonName;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_PERSON_NAME)
  public void setClientPersonName_JsonNullable(JsonNullable<String> clientPersonName) {
    this.clientPersonName = clientPersonName;
  }

  public void setClientPersonName(String clientPersonName) {
    this.clientPersonName = JsonNullable.<String>of(clientPersonName);
  }


  public PeopleMapping clientPriority(String clientPriority) {
    this.clientPriority = JsonNullable.<String>of(clientPriority);
    return this;
  }

   /**
   * It indiactes the priority value of the client.
   * @return clientPriority
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "HIGH", value = "It indiactes the priority value of the client.")
  @JsonIgnore

  public String getClientPriority() {
        return clientPriority.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_PRIORITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientPriority_JsonNullable() {
    return clientPriority;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_PRIORITY)
  public void setClientPriority_JsonNullable(JsonNullable<String> clientPriority) {
    this.clientPriority = clientPriority;
  }

  public void setClientPriority(String clientPriority) {
    this.clientPriority = JsonNullable.<String>of(clientPriority);
  }


  public PeopleMapping clientSalutation(String clientSalutation) {
    this.clientSalutation = JsonNullable.<String>of(clientSalutation);
    return this;
  }

   /**
   * It indicates the client&#39;s salutation.
   * @return clientSalutation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Mr", value = "It indicates the client's salutation.")
  @JsonIgnore

  public String getClientSalutation() {
        return clientSalutation.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_SALUTATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientSalutation_JsonNullable() {
    return clientSalutation;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_SALUTATION)
  public void setClientSalutation_JsonNullable(JsonNullable<String> clientSalutation) {
    this.clientSalutation = clientSalutation;
  }

  public void setClientSalutation(String clientSalutation) {
    this.clientSalutation = JsonNullable.<String>of(clientSalutation);
  }


  public PeopleMapping clientSuffix(String clientSuffix) {
    this.clientSuffix = JsonNullable.<String>of(clientSuffix);
    return this;
  }

   /**
   * It indicates the suffix for the client.
   * @return clientSuffix
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "III", value = "It indicates the suffix for the client.")
  @JsonIgnore

  public String getClientSuffix() {
        return clientSuffix.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CLIENT_SUFFIX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getClientSuffix_JsonNullable() {
    return clientSuffix;
  }
  
  @JsonProperty(JSON_PROPERTY_CLIENT_SUFFIX)
  public void setClientSuffix_JsonNullable(JsonNullable<String> clientSuffix) {
    this.clientSuffix = clientSuffix;
  }

  public void setClientSuffix(String clientSuffix) {
    this.clientSuffix = JsonNullable.<String>of(clientSuffix);
  }


  public PeopleMapping createdTime(OffsetDateTime createdTime) {
    this.createdTime = JsonNullable.<OffsetDateTime>of(createdTime);
    return this;
  }

   /**
   * It indicates the time of the creation
   * @return createdTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2020-06-24T22:02:21Z", value = "It indicates the time of the creation")
  @JsonIgnore

  public OffsetDateTime getCreatedTime() {
        return createdTime.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CREATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<OffsetDateTime> getCreatedTime_JsonNullable() {
    return createdTime;
  }
  
  @JsonProperty(JSON_PROPERTY_CREATED_TIME)
  public void setCreatedTime_JsonNullable(JsonNullable<OffsetDateTime> createdTime) {
    this.createdTime = createdTime;
  }

  public void setCreatedTime(OffsetDateTime createdTime) {
    this.createdTime = JsonNullable.<OffsetDateTime>of(createdTime);
  }


  public PeopleMapping mapStatus(MapStatusEnum mapStatus) {
    this.mapStatus = JsonNullable.<MapStatusEnum>of(mapStatus);
    return this;
  }

   /**
   * Current status of the people mapping.
   * @return mapStatus
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "MAPPED", value = "Current status of the people mapping.")
  @JsonIgnore

  public MapStatusEnum getMapStatus() {
        return mapStatus.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_MAP_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<MapStatusEnum> getMapStatus_JsonNullable() {
    return mapStatus;
  }
  
  @JsonProperty(JSON_PROPERTY_MAP_STATUS)
  public void setMapStatus_JsonNullable(JsonNullable<MapStatusEnum> mapStatus) {
    this.mapStatus = mapStatus;
  }

  public void setMapStatus(MapStatusEnum mapStatus) {
    this.mapStatus = JsonNullable.<MapStatusEnum>of(mapStatus);
  }


  public PeopleMapping personId(String personId) {
    this.personId = JsonNullable.<String>of(personId);
    return this;
  }

   /**
   * Helps to identify a person by using an unique indiactor 
   * @return personId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "00118X-E", value = "Helps to identify a person by using an unique indiactor ")
  @JsonIgnore

  public String getPersonId() {
        return personId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PERSON_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getPersonId_JsonNullable() {
    return personId;
  }
  
  @JsonProperty(JSON_PROPERTY_PERSON_ID)
  public void setPersonId_JsonNullable(JsonNullable<String> personId) {
    this.personId = personId;
  }

  public void setPersonId(String personId) {
    this.personId = JsonNullable.<String>of(personId);
  }


  public PeopleMapping personName(String personName) {
    this.personName = JsonNullable.<String>of(personName);
    return this;
  }

   /**
   * It indiactes the full name of the client
   * @return personName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "GATES WILLIAM H III", value = "It indiactes the full name of the client")
  @JsonIgnore

  public String getPersonName() {
        return personName.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PERSON_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getPersonName_JsonNullable() {
    return personName;
  }
  
  @JsonProperty(JSON_PROPERTY_PERSON_NAME)
  public void setPersonName_JsonNullable(JsonNullable<String> personName) {
    this.personName = personName;
  }

  public void setPersonName(String personName) {
    this.personName = JsonNullable.<String>of(personName);
  }


  public PeopleMapping universeId(Integer universeId) {
    this.universeId = JsonNullable.<Integer>of(universeId);
    return this;
  }

   /**
   * The universe this mapping belongs to. Only set in v2 endpoints 
   * @return universeId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "The universe this mapping belongs to. Only set in v2 endpoints ")
  @JsonIgnore

  public Integer getUniverseId() {
        return universeId.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_UNIVERSE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getUniverseId_JsonNullable() {
    return universeId;
  }
  
  @JsonProperty(JSON_PROPERTY_UNIVERSE_ID)
  public void setUniverseId_JsonNullable(JsonNullable<Integer> universeId) {
    this.universeId = universeId;
  }

  public void setUniverseId(Integer universeId) {
    this.universeId = JsonNullable.<Integer>of(universeId);
  }


  public PeopleMapping updatedTime(OffsetDateTime updatedTime) {
    this.updatedTime = JsonNullable.<OffsetDateTime>of(updatedTime);
    return this;
  }

   /**
   * It indicates the time of the updation
   * @return updatedTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2020-06-24T22:02:21Z", value = "It indicates the time of the updation")
  @JsonIgnore

  public OffsetDateTime getUpdatedTime() {
        return updatedTime.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_UPDATED_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<OffsetDateTime> getUpdatedTime_JsonNullable() {
    return updatedTime;
  }
  
  @JsonProperty(JSON_PROPERTY_UPDATED_TIME)
  public void setUpdatedTime_JsonNullable(JsonNullable<OffsetDateTime> updatedTime) {
    this.updatedTime = updatedTime;
  }

  public void setUpdatedTime(OffsetDateTime updatedTime) {
    this.updatedTime = JsonNullable.<OffsetDateTime>of(updatedTime);
  }


  /**
   * Return true if this PeopleMapping object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PeopleMapping peopleMapping = (PeopleMapping) o;
    return equalsNullable(this.clientEntity, peopleMapping.clientEntity) &&
        equalsNullable(this.clientFirstName, peopleMapping.clientFirstName) &&
        equalsNullable(this.clientId, peopleMapping.clientId) &&
        equalsNullable(this.clientLastName, peopleMapping.clientLastName) &&
        equalsNullable(this.clientMiddleName, peopleMapping.clientMiddleName) &&
        equalsNullable(this.clientPersonName, peopleMapping.clientPersonName) &&
        equalsNullable(this.clientPriority, peopleMapping.clientPriority) &&
        equalsNullable(this.clientSalutation, peopleMapping.clientSalutation) &&
        equalsNullable(this.clientSuffix, peopleMapping.clientSuffix) &&
        equalsNullable(this.createdTime, peopleMapping.createdTime) &&
        equalsNullable(this.mapStatus, peopleMapping.mapStatus) &&
        equalsNullable(this.personId, peopleMapping.personId) &&
        equalsNullable(this.personName, peopleMapping.personName) &&
        equalsNullable(this.universeId, peopleMapping.universeId) &&
        equalsNullable(this.updatedTime, peopleMapping.updatedTime);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(clientEntity), hashCodeNullable(clientFirstName), hashCodeNullable(clientId), hashCodeNullable(clientLastName), hashCodeNullable(clientMiddleName), hashCodeNullable(clientPersonName), hashCodeNullable(clientPriority), hashCodeNullable(clientSalutation), hashCodeNullable(clientSuffix), hashCodeNullable(createdTime), hashCodeNullable(mapStatus), hashCodeNullable(personId), hashCodeNullable(personName), hashCodeNullable(universeId), hashCodeNullable(updatedTime));
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
    sb.append("class PeopleMapping {\n");
    sb.append("    clientEntity: ").append(toIndentedString(clientEntity)).append("\n");
    sb.append("    clientFirstName: ").append(toIndentedString(clientFirstName)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    clientLastName: ").append(toIndentedString(clientLastName)).append("\n");
    sb.append("    clientMiddleName: ").append(toIndentedString(clientMiddleName)).append("\n");
    sb.append("    clientPersonName: ").append(toIndentedString(clientPersonName)).append("\n");
    sb.append("    clientPriority: ").append(toIndentedString(clientPriority)).append("\n");
    sb.append("    clientSalutation: ").append(toIndentedString(clientSalutation)).append("\n");
    sb.append("    clientSuffix: ").append(toIndentedString(clientSuffix)).append("\n");
    sb.append("    createdTime: ").append(toIndentedString(createdTime)).append("\n");
    sb.append("    mapStatus: ").append(toIndentedString(mapStatus)).append("\n");
    sb.append("    personId: ").append(toIndentedString(personId)).append("\n");
    sb.append("    personName: ").append(toIndentedString(personName)).append("\n");
    sb.append("    universeId: ").append(toIndentedString(universeId)).append("\n");
    sb.append("    updatedTime: ").append(toIndentedString(updatedTime)).append("\n");
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

