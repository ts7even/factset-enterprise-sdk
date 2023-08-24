/*
 * Tick History
 * Tick History provides dynamic access to historical tick data for a specific security for specific dates or date range.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetTickHistory.models;

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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetTickHistory.JSON;


/**
 * Date-Time &lt;p&gt; NOTE: Using start and end parameters within dateTimeRange will fetch the data on particular days in between the timestamps given.&lt;/p&gt;. 
 */
@ApiModel(description = "Date-Time <p> NOTE: Using start and end parameters within dateTimeRange will fetch the data on particular days in between the timestamps given.</p>. ")
@JsonPropertyOrder({
  DateTimePeriod.JSON_PROPERTY_START,
  DateTimePeriod.JSON_PROPERTY_END
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DateTimePeriod implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_START = "start";
  private OffsetDateTime start;

  public static final String JSON_PROPERTY_END = "end";
  private OffsetDateTime end;

  public DateTimePeriod() { 
  }

  public DateTimePeriod start(OffsetDateTime start) {
    this.start = start;
    return this;
  }

   /**
   * The date for (or from which) the data is required. Supports in YYYY-MM-DDTHH:MM:SSZ format. 
   * @return start
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2012-01-01T11:00Z", value = "The date for (or from which) the data is required. Supports in YYYY-MM-DDTHH:MM:SSZ format. ")
  @JsonProperty(JSON_PROPERTY_START)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getStart() {
    return start;
  }


  @JsonProperty(JSON_PROPERTY_START)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStart(OffsetDateTime start) {
    this.start = start;
  }


  public DateTimePeriod end(OffsetDateTime end) {
    this.end = end;
    return this;
  }

   /**
   * The date to which data is required. Supports in YYYY-MM-DDTHH:MM:SSZ format. 
   * @return end
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2012-01-30T11:20:30Z", value = "The date to which data is required. Supports in YYYY-MM-DDTHH:MM:SSZ format. ")
  @JsonProperty(JSON_PROPERTY_END)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getEnd() {
    return end;
  }


  @JsonProperty(JSON_PROPERTY_END)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnd(OffsetDateTime end) {
    this.end = end;
  }


  /**
   * Return true if this dateTimePeriod object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DateTimePeriod dateTimePeriod = (DateTimePeriod) o;
    return Objects.equals(this.start, dateTimePeriod.start) &&
        Objects.equals(this.end, dateTimePeriod.end);
  }

  @Override
  public int hashCode() {
    return Objects.hash(start, end);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DateTimePeriod {\n");
    sb.append("    start: ").append(toIndentedString(start)).append("\n");
    sb.append("    end: ").append(toIndentedString(end)).append("\n");
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

