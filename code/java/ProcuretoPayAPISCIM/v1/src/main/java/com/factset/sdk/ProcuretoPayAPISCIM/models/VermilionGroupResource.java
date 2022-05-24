/*
 * FactSet SCIM API
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.ProcuretoPayAPISCIM.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.ProcuretoPayAPISCIM.models.VermilionGroupResourceMembers;
import com.factset.sdk.ProcuretoPayAPISCIM.models.VermilionGroupResourceMeta;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.ProcuretoPayAPISCIM.JSON;


/**
 * VermilionGroupResource
 */
@JsonPropertyOrder({
  VermilionGroupResource.JSON_PROPERTY_SCHEMAS,
  VermilionGroupResource.JSON_PROPERTY_ID,
  VermilionGroupResource.JSON_PROPERTY_EXTERNAL_ID,
  VermilionGroupResource.JSON_PROPERTY_DISPLAY_NAME,
  VermilionGroupResource.JSON_PROPERTY_MEMBERS,
  VermilionGroupResource.JSON_PROPERTY_TENANT,
  VermilionGroupResource.JSON_PROPERTY_DOMAIN_CODE,
  VermilionGroupResource.JSON_PROPERTY_META
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class VermilionGroupResource implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SCHEMAS = "schemas";
  private java.util.List<String> schemas = null;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_EXTERNAL_ID = "externalId";
  private String externalId;

  public static final String JSON_PROPERTY_DISPLAY_NAME = "displayName";
  private String displayName;

  public static final String JSON_PROPERTY_MEMBERS = "members";
  private java.util.List<VermilionGroupResourceMembers> members = null;

  public static final String JSON_PROPERTY_TENANT = "tenant";
  private String tenant;

  public static final String JSON_PROPERTY_DOMAIN_CODE = "domainCode";
  private String domainCode;

  public static final String JSON_PROPERTY_META = "meta";
  private VermilionGroupResourceMeta meta;

  public VermilionGroupResource() { 
  }

  @JsonCreator
  public VermilionGroupResource(
    @JsonProperty(JSON_PROPERTY_ID) String id
  ) {
    this();
    this.id = id;
  }

  public VermilionGroupResource schemas(java.util.List<String> schemas) {
    this.schemas = schemas;
    return this;
  }

  public VermilionGroupResource addSchemasItem(String schemasItem) {
    if (this.schemas == null) {
      this.schemas = new java.util.ArrayList<>();
    }
    this.schemas.add(schemasItem);
    return this;
  }

   /**
   * Get schemas
   * @return schemas
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"urn:scim:schemas:extension:FactSet:VRS:1.0:Group\"]", value = "")
  @JsonProperty(JSON_PROPERTY_SCHEMAS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getSchemas() {
    return schemas;
  }


  @JsonProperty(JSON_PROPERTY_SCHEMAS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSchemas(java.util.List<String> schemas) {
    this.schemas = schemas;
  }


   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "vrsqa-jrs-01:431", value = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getId() {
    return id;
  }




  public VermilionGroupResource externalId(String externalId) {
    this.externalId = externalId;
    return this;
  }

   /**
   * A String that is an identifier for the resource as defined by the provisioning client.The service provider MUST always interpret the externalId as scoped to the provisioning domain.
   * @return externalId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A String that is an identifier for the resource as defined by the provisioning client.The service provider MUST always interpret the externalId as scoped to the provisioning domain.")
  @JsonProperty(JSON_PROPERTY_EXTERNAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getExternalId() {
    return externalId;
  }


  @JsonProperty(JSON_PROPERTY_EXTERNAL_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExternalId(String externalId) {
    this.externalId = externalId;
  }


  public VermilionGroupResource displayName(String displayName) {
    this.displayName = displayName;
    return this;
  }

   /**
   * A human-readable name for the Group. REQUIRED.
   * @return displayName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "System Admin", required = true, value = "A human-readable name for the Group. REQUIRED.")
  @JsonProperty(JSON_PROPERTY_DISPLAY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getDisplayName() {
    return displayName;
  }


  @JsonProperty(JSON_PROPERTY_DISPLAY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }


  public VermilionGroupResource members(java.util.List<VermilionGroupResourceMembers> members) {
    this.members = members;
    return this;
  }

  public VermilionGroupResource addMembersItem(VermilionGroupResourceMembers membersItem) {
    if (this.members == null) {
      this.members = new java.util.ArrayList<>();
    }
    this.members.add(membersItem);
    return this;
  }

   /**
   * A list of members of the Group.
   * @return members
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A list of members of the Group.")
  @JsonProperty(JSON_PROPERTY_MEMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<VermilionGroupResourceMembers> getMembers() {
    return members;
  }


  @JsonProperty(JSON_PROPERTY_MEMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMembers(java.util.List<VermilionGroupResourceMembers> members) {
    this.members = members;
  }


  public VermilionGroupResource tenant(String tenant) {
    this.tenant = tenant;
    return this;
  }

   /**
   * The tenant this role is in
   * @return tenant
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "QA", value = "The tenant this role is in")
  @JsonProperty(JSON_PROPERTY_TENANT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getTenant() {
    return tenant;
  }


  @JsonProperty(JSON_PROPERTY_TENANT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTenant(String tenant) {
    this.tenant = tenant;
  }


  public VermilionGroupResource domainCode(String domainCode) {
    this.domainCode = domainCode;
    return this;
  }

   /**
   * Domain code of Enterprise Hosting pod in which user resides. REQUIRED.
   * @return domainCode
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "vrsqa-jrs-01", required = true, value = "Domain code of Enterprise Hosting pod in which user resides. REQUIRED.")
  @JsonProperty(JSON_PROPERTY_DOMAIN_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getDomainCode() {
    return domainCode;
  }


  @JsonProperty(JSON_PROPERTY_DOMAIN_CODE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDomainCode(String domainCode) {
    this.domainCode = domainCode;
  }


  public VermilionGroupResource meta(VermilionGroupResourceMeta meta) {
    this.meta = meta;
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_META)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public VermilionGroupResourceMeta getMeta() {
    return meta;
  }


  @JsonProperty(JSON_PROPERTY_META)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMeta(VermilionGroupResourceMeta meta) {
    this.meta = meta;
  }


  /**
   * Return true if this VermilionGroupResource object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    VermilionGroupResource vermilionGroupResource = (VermilionGroupResource) o;
    return Objects.equals(this.schemas, vermilionGroupResource.schemas) &&
        Objects.equals(this.id, vermilionGroupResource.id) &&
        Objects.equals(this.externalId, vermilionGroupResource.externalId) &&
        Objects.equals(this.displayName, vermilionGroupResource.displayName) &&
        Objects.equals(this.members, vermilionGroupResource.members) &&
        Objects.equals(this.tenant, vermilionGroupResource.tenant) &&
        Objects.equals(this.domainCode, vermilionGroupResource.domainCode) &&
        Objects.equals(this.meta, vermilionGroupResource.meta);
  }

  @Override
  public int hashCode() {
    return Objects.hash(schemas, id, externalId, displayName, members, tenant, domainCode, meta);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class VermilionGroupResource {\n");
    sb.append("    schemas: ").append(toIndentedString(schemas)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    externalId: ").append(toIndentedString(externalId)).append("\n");
    sb.append("    displayName: ").append(toIndentedString(displayName)).append("\n");
    sb.append("    members: ").append(toIndentedString(members)).append("\n");
    sb.append("    tenant: ").append(toIndentedString(tenant)).append("\n");
    sb.append("    domainCode: ").append(toIndentedString(domainCode)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
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
