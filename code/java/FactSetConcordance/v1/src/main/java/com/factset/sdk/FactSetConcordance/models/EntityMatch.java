/*
 * FactSet Concordance API
 * The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p> 
 *
 * The version of the OpenAPI document: 1.1.0
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
 * Entity Match object showing the decision reached for each Entity. 
 */
@ApiModel(description = "Entity Match object showing the decision reached for each Entity. ")
@JsonPropertyOrder({
  EntityMatch.JSON_PROPERTY_TASK_ID,
  EntityMatch.JSON_PROPERTY_ROW_INDEX,
  EntityMatch.JSON_PROPERTY_MATCH_FLAG,
  EntityMatch.JSON_PROPERTY_ENTITY_ID,
  EntityMatch.JSON_PROPERTY_ENTITY_NAME,
  EntityMatch.JSON_PROPERTY_URL,
  EntityMatch.JSON_PROPERTY_MAP_STATUS,
  EntityMatch.JSON_PROPERTY_SIMILARITY_SCORE,
  EntityMatch.JSON_PROPERTY_CONFIDENCE_SCORE,
  EntityMatch.JSON_PROPERTY_COUNTRY_CODE,
  EntityMatch.JSON_PROPERTY_COUNTRY_NAME,
  EntityMatch.JSON_PROPERTY_STATE_CODE,
  EntityMatch.JSON_PROPERTY_STATE_NAME,
  EntityMatch.JSON_PROPERTY_SIC_CODE,
  EntityMatch.JSON_PROPERTY_ENTITY_TYPE_CODE,
  EntityMatch.JSON_PROPERTY_ENTITY_TYPE_DESCRIPTION,
  EntityMatch.JSON_PROPERTY_ENTITY_SUB_TYPE_CODE,
  EntityMatch.JSON_PROPERTY_LOCATION_CITY,
  EntityMatch.JSON_PROPERTY_REGION_NAME,
  EntityMatch.JSON_PROPERTY_FACTSET_INDUSTRY_CODE,
  EntityMatch.JSON_PROPERTY_FACTSET_INDUSTRY_NAME,
  EntityMatch.JSON_PROPERTY_FACTSET_SECTOR_CODE,
  EntityMatch.JSON_PROPERTY_FACTSET_SECTOR_NAME,
  EntityMatch.JSON_PROPERTY_PARENT_NAME,
  EntityMatch.JSON_PROPERTY_PARENT_MATCH_FLAG,
  EntityMatch.JSON_PROPERTY_CLIENT_ID,
  EntityMatch.JSON_PROPERTY_CLIENT_NAME,
  EntityMatch.JSON_PROPERTY_CLIENT_COUNTRY,
  EntityMatch.JSON_PROPERTY_CLIENT_STATE,
  EntityMatch.JSON_PROPERTY_CLIENT_URL,
  EntityMatch.JSON_PROPERTY_NAME_MATCH_STRING,
  EntityMatch.JSON_PROPERTY_NAME_MATCH_SOURCE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EntityMatch implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TASK_ID = "taskId";
  private Integer taskId;

  public static final String JSON_PROPERTY_ROW_INDEX = "rowIndex";
  private Integer rowIndex;

  public static final String JSON_PROPERTY_MATCH_FLAG = "matchFlag";
  private Boolean matchFlag;

  public static final String JSON_PROPERTY_ENTITY_ID = "entityId";
  private String entityId;

  public static final String JSON_PROPERTY_ENTITY_NAME = "entityName";
  private String entityName;

  public static final String JSON_PROPERTY_URL = "url";
  private String url;

  /**
   * Concordance status of the submitted, where -    * MAPPED - The requested Entity Name is successfully mapped to a FactSet Entity Id (-E)   * UNMAPPED - The requested Entity Name is unmapped by FactSet.   * INDETERMINATE - The requested Entity Name has unable to make a mapping. 
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
  private MapStatusEnum mapStatus;

  public static final String JSON_PROPERTY_SIMILARITY_SCORE = "similarityScore";
  private Double similarityScore;

  public static final String JSON_PROPERTY_CONFIDENCE_SCORE = "confidenceScore";
  private Double confidenceScore;

  public static final String JSON_PROPERTY_COUNTRY_CODE = "countryCode";
  private String countryCode;

  public static final String JSON_PROPERTY_COUNTRY_NAME = "countryName";
  private String countryName;

  public static final String JSON_PROPERTY_STATE_CODE = "stateCode";
  private String stateCode;

  public static final String JSON_PROPERTY_STATE_NAME = "stateName";
  private String stateName;

  public static final String JSON_PROPERTY_SIC_CODE = "sicCode";
  private String sicCode;

  public static final String JSON_PROPERTY_ENTITY_TYPE_CODE = "entityTypeCode";
  private String entityTypeCode;

  public static final String JSON_PROPERTY_ENTITY_TYPE_DESCRIPTION = "entityTypeDescription";
  private String entityTypeDescription;

  public static final String JSON_PROPERTY_ENTITY_SUB_TYPE_CODE = "entitySubTypeCode";
  private String entitySubTypeCode;

  public static final String JSON_PROPERTY_LOCATION_CITY = "locationCity";
  private String locationCity;

  public static final String JSON_PROPERTY_REGION_NAME = "regionName";
  private String regionName;

  public static final String JSON_PROPERTY_FACTSET_INDUSTRY_CODE = "factsetIndustryCode";
  private String factsetIndustryCode;

  public static final String JSON_PROPERTY_FACTSET_INDUSTRY_NAME = "factsetIndustryName";
  private String factsetIndustryName;

  public static final String JSON_PROPERTY_FACTSET_SECTOR_CODE = "factsetSectorCode";
  private String factsetSectorCode;

  public static final String JSON_PROPERTY_FACTSET_SECTOR_NAME = "factsetSectorName";
  private String factsetSectorName;

  public static final String JSON_PROPERTY_PARENT_NAME = "parentName";
  private String parentName;

  public static final String JSON_PROPERTY_PARENT_MATCH_FLAG = "parentMatchFlag";
  private Boolean parentMatchFlag;

  public static final String JSON_PROPERTY_CLIENT_ID = "clientId";
  private String clientId;

  public static final String JSON_PROPERTY_CLIENT_NAME = "clientName";
  private String clientName;

  public static final String JSON_PROPERTY_CLIENT_COUNTRY = "clientCountry";
  private String clientCountry;

  public static final String JSON_PROPERTY_CLIENT_STATE = "clientState";
  private String clientState;

  public static final String JSON_PROPERTY_CLIENT_URL = "clientUrl";
  private String clientUrl;

  public static final String JSON_PROPERTY_NAME_MATCH_STRING = "nameMatchString";
  private String nameMatchString;

  public static final String JSON_PROPERTY_NAME_MATCH_SOURCE = "nameMatchSource";
  private String nameMatchSource;


  public EntityMatch taskId(Integer taskId) {
    this.taskId = taskId;
    return this;
  }

   /**
   * Identifier denoting a specific Concordance task submitted by the user. This value will be null for /entity-match endpoint responses and is only available when using the \&quot;Bulk\&quot; workflow. 
   * @return taskId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "31", value = "Identifier denoting a specific Concordance task submitted by the user. This value will be null for /entity-match endpoint responses and is only available when using the \"Bulk\" workflow. ")
  @JsonProperty(JSON_PROPERTY_TASK_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getTaskId() {
    return taskId;
  }


  @JsonProperty(JSON_PROPERTY_TASK_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTaskId(Integer taskId) {
    this.taskId = taskId;
  }


  public EntityMatch rowIndex(Integer rowIndex) {
    this.rowIndex = rowIndex;
    return this;
  }

   /**
   * Row number for match in the request or input file.
   * @return rowIndex
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Row number for match in the request or input file.")
  @JsonProperty(JSON_PROPERTY_ROW_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getRowIndex() {
    return rowIndex;
  }


  @JsonProperty(JSON_PROPERTY_ROW_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRowIndex(Integer rowIndex) {
    this.rowIndex = rowIndex;
  }


  public EntityMatch matchFlag(Boolean matchFlag) {
    this.matchFlag = matchFlag;
    return this;
  }

   /**
   * Flag denoting if the row is a match.
   * @return matchFlag
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Flag denoting if the row is a match.")
  @JsonProperty(JSON_PROPERTY_MATCH_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getMatchFlag() {
    return matchFlag;
  }


  @JsonProperty(JSON_PROPERTY_MATCH_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMatchFlag(Boolean matchFlag) {
    this.matchFlag = matchFlag;
  }


  public EntityMatch entityId(String entityId) {
    this.entityId = entityId;
    return this;
  }

   /**
   * FactSet Entity Identifier of the entity matched respective to the requested Name submitted. For more detail, visit [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881) 
   * @return entityId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "FactSet Entity Identifier of the entity matched respective to the requested Name submitted. For more detail, visit [FactSet Permanent Security Identifier](https://oa.apps.factset.com/cms/oaAttachment/64c3213a-f415-4c27-a336-92c73a72deed/24881) ")
  @JsonProperty(JSON_PROPERTY_ENTITY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEntityId() {
    return entityId;
  }


  @JsonProperty(JSON_PROPERTY_ENTITY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntityId(String entityId) {
    this.entityId = entityId;
  }


  public EntityMatch entityName(String entityName) {
    this.entityName = entityName;
    return this;
  }

   /**
   * Full name corresponding to the matched entity.
   * @return entityName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "FactSet Research Systems, Inc.", value = "Full name corresponding to the matched entity.")
  @JsonProperty(JSON_PROPERTY_ENTITY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEntityName() {
    return entityName;
  }


  @JsonProperty(JSON_PROPERTY_ENTITY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntityName(String entityName) {
    this.entityName = entityName;
  }


  public EntityMatch url(String url) {
    this.url = url;
    return this;
  }

   /**
   * URL of the matched entity.
   * @return url
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "www.factset.com", value = "URL of the matched entity.")
  @JsonProperty(JSON_PROPERTY_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getUrl() {
    return url;
  }


  @JsonProperty(JSON_PROPERTY_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUrl(String url) {
    this.url = url;
  }


  public EntityMatch mapStatus(MapStatusEnum mapStatus) {
    this.mapStatus = mapStatus;
    return this;
  }

   /**
   * Concordance status of the submitted, where -    * MAPPED - The requested Entity Name is successfully mapped to a FactSet Entity Id (-E)   * UNMAPPED - The requested Entity Name is unmapped by FactSet.   * INDETERMINATE - The requested Entity Name has unable to make a mapping. 
   * @return mapStatus
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "MAPPED", value = "Concordance status of the submitted, where -    * MAPPED - The requested Entity Name is successfully mapped to a FactSet Entity Id (-E)   * UNMAPPED - The requested Entity Name is unmapped by FactSet.   * INDETERMINATE - The requested Entity Name has unable to make a mapping. ")
  @JsonProperty(JSON_PROPERTY_MAP_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public MapStatusEnum getMapStatus() {
    return mapStatus;
  }


  @JsonProperty(JSON_PROPERTY_MAP_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMapStatus(MapStatusEnum mapStatus) {
    this.mapStatus = mapStatus;
  }


  public EntityMatch similarityScore(Double similarityScore) {
    this.similarityScore = similarityScore;
    return this;
  }

   /**
   * Probability of the match being similar to the entity requested as determined by the Concordance algorithm. A similarityScore of 1 is the highest level of similarity. 
   * @return similarityScore
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "Probability of the match being similar to the entity requested as determined by the Concordance algorithm. A similarityScore of 1 is the highest level of similarity. ")
  @JsonProperty(JSON_PROPERTY_SIMILARITY_SCORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getSimilarityScore() {
    return similarityScore;
  }


  @JsonProperty(JSON_PROPERTY_SIMILARITY_SCORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSimilarityScore(Double similarityScore) {
    this.similarityScore = similarityScore;
  }


  public EntityMatch confidenceScore(Double confidenceScore) {
    this.confidenceScore = confidenceScore;
    return this;
  }

   /**
   * Additional statistic calculated by the algorithm that is used to ensure the validity of the match result. A confidenceScore of 1 is the highest level of confidence. 
   * @return confidenceScore
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "Additional statistic calculated by the algorithm that is used to ensure the validity of the match result. A confidenceScore of 1 is the highest level of confidence. ")
  @JsonProperty(JSON_PROPERTY_CONFIDENCE_SCORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getConfidenceScore() {
    return confidenceScore;
  }


  @JsonProperty(JSON_PROPERTY_CONFIDENCE_SCORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConfidenceScore(Double confidenceScore) {
    this.confidenceScore = confidenceScore;
  }


  public EntityMatch countryCode(String countryCode) {
    this.countryCode = countryCode;
    return this;
  }

   /**
   * ISO2 country code corresponding to the location of the matched entity.
   * @return countryCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "US", value = "ISO2 country code corresponding to the location of the matched entity.")
  @JsonProperty(JSON_PROPERTY_COUNTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCountryCode() {
    return countryCode;
  }


  @JsonProperty(JSON_PROPERTY_COUNTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCountryCode(String countryCode) {
    this.countryCode = countryCode;
  }


  public EntityMatch countryName(String countryName) {
    this.countryName = countryName;
    return this;
  }

   /**
   * Country name corresponding to the location of the matched entity
   * @return countryName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "United States", value = "Country name corresponding to the location of the matched entity")
  @JsonProperty(JSON_PROPERTY_COUNTRY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCountryName() {
    return countryName;
  }


  @JsonProperty(JSON_PROPERTY_COUNTRY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCountryName(String countryName) {
    this.countryName = countryName;
  }


  public EntityMatch stateCode(String stateCode) {
    this.stateCode = stateCode;
    return this;
  }

   /**
   * Two character state code corresponding to the location of the matched entity.
   * @return stateCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "CT", value = "Two character state code corresponding to the location of the matched entity.")
  @JsonProperty(JSON_PROPERTY_STATE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getStateCode() {
    return stateCode;
  }


  @JsonProperty(JSON_PROPERTY_STATE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStateCode(String stateCode) {
    this.stateCode = stateCode;
  }


  public EntityMatch stateName(String stateName) {
    this.stateName = stateName;
    return this;
  }

   /**
   * State name corresponding to the location of the matched entity.
   * @return stateName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Connecticut", value = "State name corresponding to the location of the matched entity.")
  @JsonProperty(JSON_PROPERTY_STATE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getStateName() {
    return stateName;
  }


  @JsonProperty(JSON_PROPERTY_STATE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStateName(String stateName) {
    this.stateName = stateName;
  }


  public EntityMatch sicCode(String sicCode) {
    this.sicCode = sicCode;
    return this;
  }

   /**
   * Standard Industrial Classification (SIC) Code of the matched entity.
   * @return sicCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "7374", value = "Standard Industrial Classification (SIC) Code of the matched entity.")
  @JsonProperty(JSON_PROPERTY_SIC_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSicCode() {
    return sicCode;
  }


  @JsonProperty(JSON_PROPERTY_SIC_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSicCode(String sicCode) {
    this.sicCode = sicCode;
  }


  public EntityMatch entityTypeCode(String entityTypeCode) {
    this.entityTypeCode = entityTypeCode;
    return this;
  }

   /**
   * Code representing the entity type of the matched entity. See the related request parameter for a table of all Codes and their respective descriptions.
   * @return entityTypeCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "PUB", value = "Code representing the entity type of the matched entity. See the related request parameter for a table of all Codes and their respective descriptions.")
  @JsonProperty(JSON_PROPERTY_ENTITY_TYPE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEntityTypeCode() {
    return entityTypeCode;
  }


  @JsonProperty(JSON_PROPERTY_ENTITY_TYPE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntityTypeCode(String entityTypeCode) {
    this.entityTypeCode = entityTypeCode;
  }


  public EntityMatch entityTypeDescription(String entityTypeDescription) {
    this.entityTypeDescription = entityTypeDescription;
    return this;
  }

   /**
   * Description of of the matched entity&#39;s type.
   * @return entityTypeDescription
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Public Company", value = "Description of of the matched entity's type.")
  @JsonProperty(JSON_PROPERTY_ENTITY_TYPE_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEntityTypeDescription() {
    return entityTypeDescription;
  }


  @JsonProperty(JSON_PROPERTY_ENTITY_TYPE_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntityTypeDescription(String entityTypeDescription) {
    this.entityTypeDescription = entityTypeDescription;
  }


  public EntityMatch entitySubTypeCode(String entitySubTypeCode) {
    this.entitySubTypeCode = entitySubTypeCode;
    return this;
  }

   /**
   * Code representing the entity subtype of the matched entity. See the related request parameter for a table of all Codes and their respective descriptions.
   * @return entitySubTypeCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "PR", value = "Code representing the entity subtype of the matched entity. See the related request parameter for a table of all Codes and their respective descriptions.")
  @JsonProperty(JSON_PROPERTY_ENTITY_SUB_TYPE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEntitySubTypeCode() {
    return entitySubTypeCode;
  }


  @JsonProperty(JSON_PROPERTY_ENTITY_SUB_TYPE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntitySubTypeCode(String entitySubTypeCode) {
    this.entitySubTypeCode = entitySubTypeCode;
  }


  public EntityMatch locationCity(String locationCity) {
    this.locationCity = locationCity;
    return this;
  }

   /**
   * City where the matched entity is located.
   * @return locationCity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Norwalk", value = "City where the matched entity is located.")
  @JsonProperty(JSON_PROPERTY_LOCATION_CITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getLocationCity() {
    return locationCity;
  }


  @JsonProperty(JSON_PROPERTY_LOCATION_CITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLocationCity(String locationCity) {
    this.locationCity = locationCity;
  }


  public EntityMatch regionName(String regionName) {
    this.regionName = regionName;
    return this;
  }

   /**
   * Region where the matched entity is located.
   * @return regionName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "North America", value = "Region where the matched entity is located.")
  @JsonProperty(JSON_PROPERTY_REGION_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRegionName() {
    return regionName;
  }


  @JsonProperty(JSON_PROPERTY_REGION_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRegionName(String regionName) {
    this.regionName = regionName;
  }


  public EntityMatch factsetIndustryCode(String factsetIndustryCode) {
    this.factsetIndustryCode = factsetIndustryCode;
    return this;
  }

   /**
   * FactSet Industry Classification Code of the matched entity.
   * @return factsetIndustryCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "3305", value = "FactSet Industry Classification Code of the matched entity.")
  @JsonProperty(JSON_PROPERTY_FACTSET_INDUSTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFactsetIndustryCode() {
    return factsetIndustryCode;
  }


  @JsonProperty(JSON_PROPERTY_FACTSET_INDUSTRY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFactsetIndustryCode(String factsetIndustryCode) {
    this.factsetIndustryCode = factsetIndustryCode;
  }


  public EntityMatch factsetIndustryName(String factsetIndustryName) {
    this.factsetIndustryName = factsetIndustryName;
    return this;
  }

   /**
   * Name of the matched entity&#39;s FactSet Industry Classification.
   * @return factsetIndustryName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Data Processing Services", value = "Name of the matched entity's FactSet Industry Classification.")
  @JsonProperty(JSON_PROPERTY_FACTSET_INDUSTRY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFactsetIndustryName() {
    return factsetIndustryName;
  }


  @JsonProperty(JSON_PROPERTY_FACTSET_INDUSTRY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFactsetIndustryName(String factsetIndustryName) {
    this.factsetIndustryName = factsetIndustryName;
  }


  public EntityMatch factsetSectorCode(String factsetSectorCode) {
    this.factsetSectorCode = factsetSectorCode;
    return this;
  }

   /**
   * Name of the matched entity&#39;s FactSet Sector Classification Code.
   * @return factsetSectorCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "3300", value = "Name of the matched entity's FactSet Sector Classification Code.")
  @JsonProperty(JSON_PROPERTY_FACTSET_SECTOR_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFactsetSectorCode() {
    return factsetSectorCode;
  }


  @JsonProperty(JSON_PROPERTY_FACTSET_SECTOR_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFactsetSectorCode(String factsetSectorCode) {
    this.factsetSectorCode = factsetSectorCode;
  }


  public EntityMatch factsetSectorName(String factsetSectorName) {
    this.factsetSectorName = factsetSectorName;
    return this;
  }

   /**
   * Name of the matched entity&#39;s FactSet Sector Classification.
   * @return factsetSectorName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Technology Services", value = "Name of the matched entity's FactSet Sector Classification.")
  @JsonProperty(JSON_PROPERTY_FACTSET_SECTOR_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFactsetSectorName() {
    return factsetSectorName;
  }


  @JsonProperty(JSON_PROPERTY_FACTSET_SECTOR_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFactsetSectorName(String factsetSectorName) {
    this.factsetSectorName = factsetSectorName;
  }


  public EntityMatch parentName(String parentName) {
    this.parentName = parentName;
    return this;
  }

   /**
   * Name of the matched entity&#39;s parent entity.
   * @return parentName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Name of the matched entity's parent entity.")
  @JsonProperty(JSON_PROPERTY_PARENT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getParentName() {
    return parentName;
  }


  @JsonProperty(JSON_PROPERTY_PARENT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setParentName(String parentName) {
    this.parentName = parentName;
  }


  public EntityMatch parentMatchFlag(Boolean parentMatchFlag) {
    this.parentMatchFlag = parentMatchFlag;
    return this;
  }

   /**
   * Flag denoting that the matched entity is the parent of another match.
   * @return parentMatchFlag
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "false", value = "Flag denoting that the matched entity is the parent of another match.")
  @JsonProperty(JSON_PROPERTY_PARENT_MATCH_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getParentMatchFlag() {
    return parentMatchFlag;
  }


  @JsonProperty(JSON_PROPERTY_PARENT_MATCH_FLAG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setParentMatchFlag(Boolean parentMatchFlag) {
    this.parentMatchFlag = parentMatchFlag;
  }


  public EntityMatch clientId(String clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * Unique Identifer provided by the user in the request to represent the entity Name being requested.
   * @return clientId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "abc-123", value = "Unique Identifer provided by the user in the request to represent the entity Name being requested.")
  @JsonProperty(JSON_PROPERTY_CLIENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getClientId() {
    return clientId;
  }


  @JsonProperty(JSON_PROPERTY_CLIENT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClientId(String clientId) {
    this.clientId = clientId;
  }


  public EntityMatch clientName(String clientName) {
    this.clientName = clientName;
    return this;
  }

   /**
   * Name of the entity to match as specified in the request
   * @return clientName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "factset", value = "Name of the entity to match as specified in the request")
  @JsonProperty(JSON_PROPERTY_CLIENT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getClientName() {
    return clientName;
  }


  @JsonProperty(JSON_PROPERTY_CLIENT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClientName(String clientName) {
    this.clientName = clientName;
  }


  public EntityMatch clientCountry(String clientCountry) {
    this.clientCountry = clientCountry;
    return this;
  }

   /**
   * ISO2 country code specified in the request.
   * @return clientCountry
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "US", value = "ISO2 country code specified in the request.")
  @JsonProperty(JSON_PROPERTY_CLIENT_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getClientCountry() {
    return clientCountry;
  }


  @JsonProperty(JSON_PROPERTY_CLIENT_COUNTRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClientCountry(String clientCountry) {
    this.clientCountry = clientCountry;
  }


  public EntityMatch clientState(String clientState) {
    this.clientState = clientState;
    return this;
  }

   /**
   * State code specified in the request.
   * @return clientState
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "CT", value = "State code specified in the request.")
  @JsonProperty(JSON_PROPERTY_CLIENT_STATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getClientState() {
    return clientState;
  }


  @JsonProperty(JSON_PROPERTY_CLIENT_STATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClientState(String clientState) {
    this.clientState = clientState;
  }


  public EntityMatch clientUrl(String clientUrl) {
    this.clientUrl = clientUrl;
    return this;
  }

   /**
   * URL specified in the request.
   * @return clientUrl
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "www.factset.com", value = "URL specified in the request.")
  @JsonProperty(JSON_PROPERTY_CLIENT_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getClientUrl() {
    return clientUrl;
  }


  @JsonProperty(JSON_PROPERTY_CLIENT_URL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setClientUrl(String clientUrl) {
    this.clientUrl = clientUrl;
  }


  public EntityMatch nameMatchString(String nameMatchString) {
    this.nameMatchString = nameMatchString;
    return this;
  }

   /**
   * String on which the Concordance algorithm mapped the submitted entity.
   * @return nameMatchString
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "factset", value = "String on which the Concordance algorithm mapped the submitted entity.")
  @JsonProperty(JSON_PROPERTY_NAME_MATCH_STRING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getNameMatchString() {
    return nameMatchString;
  }


  @JsonProperty(JSON_PROPERTY_NAME_MATCH_STRING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNameMatchString(String nameMatchString) {
    this.nameMatchString = nameMatchString;
  }


  public EntityMatch nameMatchSource(String nameMatchSource) {
    this.nameMatchSource = nameMatchSource;
    return this;
  }

   /**
   * Type of name that the nameMatchString matched.
   * @return nameMatchSource
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Domain Name", value = "Type of name that the nameMatchString matched.")
  @JsonProperty(JSON_PROPERTY_NAME_MATCH_SOURCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getNameMatchSource() {
    return nameMatchSource;
  }


  @JsonProperty(JSON_PROPERTY_NAME_MATCH_SOURCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNameMatchSource(String nameMatchSource) {
    this.nameMatchSource = nameMatchSource;
  }


  /**
   * Return true if this EntityMatch object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EntityMatch entityMatch = (EntityMatch) o;
    return Objects.equals(this.taskId, entityMatch.taskId) &&
        Objects.equals(this.rowIndex, entityMatch.rowIndex) &&
        Objects.equals(this.matchFlag, entityMatch.matchFlag) &&
        Objects.equals(this.entityId, entityMatch.entityId) &&
        Objects.equals(this.entityName, entityMatch.entityName) &&
        Objects.equals(this.url, entityMatch.url) &&
        Objects.equals(this.mapStatus, entityMatch.mapStatus) &&
        Objects.equals(this.similarityScore, entityMatch.similarityScore) &&
        Objects.equals(this.confidenceScore, entityMatch.confidenceScore) &&
        Objects.equals(this.countryCode, entityMatch.countryCode) &&
        Objects.equals(this.countryName, entityMatch.countryName) &&
        Objects.equals(this.stateCode, entityMatch.stateCode) &&
        Objects.equals(this.stateName, entityMatch.stateName) &&
        Objects.equals(this.sicCode, entityMatch.sicCode) &&
        Objects.equals(this.entityTypeCode, entityMatch.entityTypeCode) &&
        Objects.equals(this.entityTypeDescription, entityMatch.entityTypeDescription) &&
        Objects.equals(this.entitySubTypeCode, entityMatch.entitySubTypeCode) &&
        Objects.equals(this.locationCity, entityMatch.locationCity) &&
        Objects.equals(this.regionName, entityMatch.regionName) &&
        Objects.equals(this.factsetIndustryCode, entityMatch.factsetIndustryCode) &&
        Objects.equals(this.factsetIndustryName, entityMatch.factsetIndustryName) &&
        Objects.equals(this.factsetSectorCode, entityMatch.factsetSectorCode) &&
        Objects.equals(this.factsetSectorName, entityMatch.factsetSectorName) &&
        Objects.equals(this.parentName, entityMatch.parentName) &&
        Objects.equals(this.parentMatchFlag, entityMatch.parentMatchFlag) &&
        Objects.equals(this.clientId, entityMatch.clientId) &&
        Objects.equals(this.clientName, entityMatch.clientName) &&
        Objects.equals(this.clientCountry, entityMatch.clientCountry) &&
        Objects.equals(this.clientState, entityMatch.clientState) &&
        Objects.equals(this.clientUrl, entityMatch.clientUrl) &&
        Objects.equals(this.nameMatchString, entityMatch.nameMatchString) &&
        Objects.equals(this.nameMatchSource, entityMatch.nameMatchSource);
  }

  @Override
  public int hashCode() {
    return Objects.hash(taskId, rowIndex, matchFlag, entityId, entityName, url, mapStatus, similarityScore, confidenceScore, countryCode, countryName, stateCode, stateName, sicCode, entityTypeCode, entityTypeDescription, entitySubTypeCode, locationCity, regionName, factsetIndustryCode, factsetIndustryName, factsetSectorCode, factsetSectorName, parentName, parentMatchFlag, clientId, clientName, clientCountry, clientState, clientUrl, nameMatchString, nameMatchSource);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EntityMatch {\n");
    sb.append("    taskId: ").append(toIndentedString(taskId)).append("\n");
    sb.append("    rowIndex: ").append(toIndentedString(rowIndex)).append("\n");
    sb.append("    matchFlag: ").append(toIndentedString(matchFlag)).append("\n");
    sb.append("    entityId: ").append(toIndentedString(entityId)).append("\n");
    sb.append("    entityName: ").append(toIndentedString(entityName)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    mapStatus: ").append(toIndentedString(mapStatus)).append("\n");
    sb.append("    similarityScore: ").append(toIndentedString(similarityScore)).append("\n");
    sb.append("    confidenceScore: ").append(toIndentedString(confidenceScore)).append("\n");
    sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
    sb.append("    countryName: ").append(toIndentedString(countryName)).append("\n");
    sb.append("    stateCode: ").append(toIndentedString(stateCode)).append("\n");
    sb.append("    stateName: ").append(toIndentedString(stateName)).append("\n");
    sb.append("    sicCode: ").append(toIndentedString(sicCode)).append("\n");
    sb.append("    entityTypeCode: ").append(toIndentedString(entityTypeCode)).append("\n");
    sb.append("    entityTypeDescription: ").append(toIndentedString(entityTypeDescription)).append("\n");
    sb.append("    entitySubTypeCode: ").append(toIndentedString(entitySubTypeCode)).append("\n");
    sb.append("    locationCity: ").append(toIndentedString(locationCity)).append("\n");
    sb.append("    regionName: ").append(toIndentedString(regionName)).append("\n");
    sb.append("    factsetIndustryCode: ").append(toIndentedString(factsetIndustryCode)).append("\n");
    sb.append("    factsetIndustryName: ").append(toIndentedString(factsetIndustryName)).append("\n");
    sb.append("    factsetSectorCode: ").append(toIndentedString(factsetSectorCode)).append("\n");
    sb.append("    factsetSectorName: ").append(toIndentedString(factsetSectorName)).append("\n");
    sb.append("    parentName: ").append(toIndentedString(parentName)).append("\n");
    sb.append("    parentMatchFlag: ").append(toIndentedString(parentMatchFlag)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    clientName: ").append(toIndentedString(clientName)).append("\n");
    sb.append("    clientCountry: ").append(toIndentedString(clientCountry)).append("\n");
    sb.append("    clientState: ").append(toIndentedString(clientState)).append("\n");
    sb.append("    clientUrl: ").append(toIndentedString(clientUrl)).append("\n");
    sb.append("    nameMatchString: ").append(toIndentedString(nameMatchString)).append("\n");
    sb.append("    nameMatchSource: ").append(toIndentedString(nameMatchSource)).append("\n");
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
