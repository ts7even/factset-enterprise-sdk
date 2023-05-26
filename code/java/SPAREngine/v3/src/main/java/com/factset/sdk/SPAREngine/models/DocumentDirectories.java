/*
 * SPAR Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.13.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.SPAREngine.models;

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
import com.factset.sdk.SPAREngine.JSON;


/**
 * DocumentDirectories
 */
@JsonPropertyOrder({
  DocumentDirectories.JSON_PROPERTY_DOCUMENTS,
  DocumentDirectories.JSON_PROPERTY_DIRECTORIES
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DocumentDirectories implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DOCUMENTS = "documents";
  private JsonNullable<java.util.List<String>> documents = JsonNullable.<java.util.List<String>>undefined();

  public static final String JSON_PROPERTY_DIRECTORIES = "directories";
  private JsonNullable<java.util.List<String>> directories = JsonNullable.<java.util.List<String>>undefined();

  public DocumentDirectories() { 
  }

  public DocumentDirectories documents(java.util.List<String> documents) {
    this.documents = JsonNullable.<java.util.List<String>>of(documents);
    return this;
  }

  public DocumentDirectories addDocumentsItem(String documentsItem) {
    if (this.documents == null || !this.documents.isPresent()) {
      this.documents = JsonNullable.<java.util.List<String>>of(new java.util.ArrayList<>());
    }
    try {
      this.documents.get().add(documentsItem);
    } catch (java.util.NoSuchElementException e) {
      // this can never happen, as we make sure above that the value is present
    }
    return this;
  }

   /**
   * List of documents
   * @return documents
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of documents")
  @JsonIgnore

  public java.util.List<String> getDocuments() {
        return documents.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_DOCUMENTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<java.util.List<String>> getDocuments_JsonNullable() {
    return documents;
  }
  
  @JsonProperty(JSON_PROPERTY_DOCUMENTS)
  public void setDocuments_JsonNullable(JsonNullable<java.util.List<String>> documents) {
    this.documents = documents;
  }

  public void setDocuments(java.util.List<String> documents) {
    this.documents = JsonNullable.<java.util.List<String>>of(documents);
  }


  public DocumentDirectories directories(java.util.List<String> directories) {
    this.directories = JsonNullable.<java.util.List<String>>of(directories);
    return this;
  }

  public DocumentDirectories addDirectoriesItem(String directoriesItem) {
    if (this.directories == null || !this.directories.isPresent()) {
      this.directories = JsonNullable.<java.util.List<String>>of(new java.util.ArrayList<>());
    }
    try {
      this.directories.get().add(directoriesItem);
    } catch (java.util.NoSuchElementException e) {
      // this can never happen, as we make sure above that the value is present
    }
    return this;
  }

   /**
   * List of directories.
   * @return directories
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "List of directories.")
  @JsonIgnore

  public java.util.List<String> getDirectories() {
        return directories.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_DIRECTORIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<java.util.List<String>> getDirectories_JsonNullable() {
    return directories;
  }
  
  @JsonProperty(JSON_PROPERTY_DIRECTORIES)
  public void setDirectories_JsonNullable(JsonNullable<java.util.List<String>> directories) {
    this.directories = directories;
  }

  public void setDirectories(java.util.List<String> directories) {
    this.directories = JsonNullable.<java.util.List<String>>of(directories);
  }


  /**
   * Return true if this DocumentDirectories object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DocumentDirectories documentDirectories = (DocumentDirectories) o;
    return equalsNullable(this.documents, documentDirectories.documents) &&
        equalsNullable(this.directories, documentDirectories.directories);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(documents), hashCodeNullable(directories));
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
    sb.append("class DocumentDirectories {\n");
    sb.append("    documents: ").append(toIndentedString(documents)).append("\n");
    sb.append("    directories: ").append(toIndentedString(directories)).append("\n");
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

