/*
 * FactSet Overview Report Builder API
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OverviewReportBuilder.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.OverviewReportBuilder.models.DataPointMetaAnyOf;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OverviewReportBuilder.JSON;


import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.factset.sdk.OverviewReportBuilder.JSON;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
@JsonDeserialize(using=DataPointMeta.DataPointMetaDeserializer.class)
@JsonSerialize(using = DataPointMeta.DataPointMetaSerializer.class)
public class DataPointMeta extends AbstractOpenApiSchema implements Serializable {
    private static final Logger log = Logger.getLogger(DataPointMeta.class.getName());

    public static class DataPointMetaSerializer extends StdSerializer<DataPointMeta> {
        public DataPointMetaSerializer(Class<DataPointMeta> t) {
            super(t);
        }

        public DataPointMetaSerializer() {
            this(null);
        }

        @Override
        public void serialize(DataPointMeta value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
            jgen.writeObject(value.getActualInstance());
        }
    }

    public static class DataPointMetaDeserializer extends StdDeserializer<DataPointMeta> {
        public DataPointMetaDeserializer() {
            this(DataPointMeta.class);
        }

        public DataPointMetaDeserializer(Class<?> vc) {
            super(vc);
        }

        @Override
        public DataPointMeta deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
            JsonNode tree = jp.readValueAsTree();

            Object deserialized = null;
            // deserialize DataPointMetaAnyOf
            try {
                deserialized = tree.traverse(jp.getCodec()).readValueAs(DataPointMetaAnyOf.class);
                DataPointMeta ret = new DataPointMeta();
                ret.setActualInstance(deserialized);
                return ret;
            } catch (Exception e) {
                // deserialization failed, continue, log to help debugging
                log.log(Level.FINER, "Input data does not match 'DataPointMeta'", e);
            }

            throw new IOException(String.format("Failed deserialization for DataPointMeta: no match found"));
        }

        /**
         * Handle deserialization of the 'null' value.
         */
        @Override
        public DataPointMeta getNullValue(DeserializationContext ctxt) throws JsonMappingException {
            throw new JsonMappingException(ctxt.getParser(), "DataPointMeta cannot be null");
        }
    }

    // store a list of schema names defined in anyOf
    public static final Map<String, GenericType> schemas = new HashMap<String, GenericType>();

    public DataPointMeta() {
        super("anyOf", Boolean.FALSE);
    }

    public DataPointMeta(DataPointMetaAnyOf o) {
        super("anyOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("DataPointMetaAnyOf", new GenericType<DataPointMetaAnyOf>() {
        });
        JSON.registerDescendants(DataPointMeta.class, Collections.unmodifiableMap(schemas));
    }

    @Override
    public Map<String, GenericType> getSchemas() {
        return DataPointMeta.schemas;
    }

    /**
     * Set the instance that matches the anyOf child schema, check
     * the instance parameter is valid against the anyOf child schemas:
     * DataPointMetaAnyOf
     *
     * It could be an instance of the 'anyOf' schemas.
     * The anyOf child schemas may themselves be a composed schema (allOf, anyOf, anyOf).
     */
    @Override
    public void setActualInstance(Object instance) {
        if (JSON.isInstanceOf(DataPointMetaAnyOf.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be DataPointMetaAnyOf");
    }

    /**
     * Get the actual instance, which can be the following:
     * DataPointMetaAnyOf
     *
     * @return The actual instance (DataPointMetaAnyOf)
     */
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `DataPointMetaAnyOf`. If the actual instance is not `DataPointMetaAnyOf`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `DataPointMetaAnyOf`
     * @throws ClassCastException if the instance is not `DataPointMetaAnyOf`
     */
    public DataPointMetaAnyOf getDataPointMetaAnyOf() throws ClassCastException {
        return (DataPointMetaAnyOf)super.getActualInstance();
    }

}

