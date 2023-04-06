/*
 * FactSet Formula API
 *
 *  **FactSet Formula API**  FactSet’s Formula API is a modern, flexible, formula-based API that enables users to access FactSet’s wide range of financial data and content. The API offers two endpoints, one optimized for time-series analysis and one designed for cross-sectional analysis, providing users a simplified interface into FactSet’s expansive offering. By providing two endpoints, it allows for the optimization of user workflows, while reducing complexity.  Leverage the power and flexibility of the Formula API to -   * Pull data from across most content sets that a user has access to in a single request   * Include business logic and mathematical operations in request   * Submit a dynamic universe in both endpoints   * Return the fsymId to easily combine with other FactSet content / products   * Set the trading calendar   * Define custom display names  **Formula API Request Builder**  The Formula API Request Builder provides users everything they need to form a Formula API request. In the Request Builder, you can select identifiers, build a universe expression, select FQL or Screening formulas, easily apply business logic and mathematical functions to the FQL or Screening formulas, specify optional parameters, and construct a GET or POST request. The Request Builder eliminates the need to have previous FQL and Screening knowledge and allows you to quickly find your desired data items and form the request.  The Formula API Request Builder can be accessed by navigating to [https://developer.factset.com/formula-api-request-builder](https://developer.factset.com/formula-api-request-builder) and logging in using your FactSet.net ID. When using the Request Builder to construct requests for the one of the Formula API's endpoints, be sure to toggle to the correct endpoint at the top of the page.  **How to Check the Health and Availability of the Formula API**  Please use the below endpoint to check the health and availability of the Formula API. You must be authorized for this API to use the Health endpoint.  [https://api.factset.com/formula-api/health](https://api.factset.com/formula-api/health)  **How to Programmatically Download API Specification File**  You can download the FactSet Formula API Specification File in .yaml. using the \"Download Spec\" button to the right of the version number. This specification can then be used for Codegen to create your own SDKs. 
 *
 * The version of the OpenAPI document: 1.5.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = FactSet.SDK.Formula.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Formula.Model
{
    /// <summary>
    /// TimeSeriesResponseObjectItems
    /// </summary>
    [JsonConverter(typeof(TimeSeriesResponseObjectItemsJsonConverter))]
    [DataContract(Name = "time_series_response_object_items")]
    public partial class TimeSeriesResponseObjectItems : AbstractOpenAPISchema, IEquatable<TimeSeriesResponseObjectItems>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TimeSeriesResponseObjectItems" /> class
        /// with the <see cref="TimeSeriesResultObjectFlattened" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of TimeSeriesResultObjectFlattened.</param>
        public TimeSeriesResponseObjectItems(TimeSeriesResultObjectFlattened actualInstance)
        {
            this.IsNullable = false;
            this.SchemaType= "anyOf";
            this.ActualInstance = actualInstance ?? throw new ArgumentException("Invalid instance found. Must not be null.");
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="TimeSeriesResponseObjectItems" /> class
        /// with the <see cref="TimeSeriesResultObjectNonflattened" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of TimeSeriesResultObjectNonflattened.</param>
        public TimeSeriesResponseObjectItems(TimeSeriesResultObjectNonflattened actualInstance)
        {
            this.IsNullable = false;
            this.SchemaType= "anyOf";
            this.ActualInstance = actualInstance ?? throw new ArgumentException("Invalid instance found. Must not be null.");
        }


        private Object _actualInstance;

        /// <summary>
        /// Gets or Sets ActualInstance
        /// </summary>
        public override Object ActualInstance
        {
            get
            {
                return _actualInstance;
            }
            set
            {
                if (value.GetType() == typeof(TimeSeriesResultObjectFlattened))
                {
                    this._actualInstance = value;
                }
                else if (value.GetType() == typeof(TimeSeriesResultObjectNonflattened))
                {
                    this._actualInstance = value;
                }
                else
                {
                    throw new ArgumentException("Invalid instance found. Must be the following types: TimeSeriesResultObjectFlattened, TimeSeriesResultObjectNonflattened");
                }
            }
        }

        /// <summary>
        /// Get the actual instance of `TimeSeriesResultObjectFlattened`. If the actual instance is not `TimeSeriesResultObjectFlattened`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of TimeSeriesResultObjectFlattened</returns>
        public TimeSeriesResultObjectFlattened GetTimeSeriesResultObjectFlattened()
        {
            return (TimeSeriesResultObjectFlattened)this.ActualInstance;
        }

        /// <summary>
        /// Get the actual instance of `TimeSeriesResultObjectNonflattened`. If the actual instance is not `TimeSeriesResultObjectNonflattened`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of TimeSeriesResultObjectNonflattened</returns>
        public TimeSeriesResultObjectNonflattened GetTimeSeriesResultObjectNonflattened()
        {
            return (TimeSeriesResultObjectNonflattened)this.ActualInstance;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TimeSeriesResponseObjectItems {\n");
            sb.Append("  ActualInstance: ").Append(this.ActualInstance).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public override string ToJson()
        {
            return JsonConvert.SerializeObject(this.ActualInstance, TimeSeriesResponseObjectItems.SerializerSettings);
        }

        /// <summary>
        /// Converts the JSON string into an instance of TimeSeriesResponseObjectItems
        /// </summary>
        /// <param name="jsonString">JSON string</param>
        /// <returns>An instance of TimeSeriesResponseObjectItems</returns>
        public static TimeSeriesResponseObjectItems FromJson(string jsonString)
        {
            TimeSeriesResponseObjectItems newTimeSeriesResponseObjectItems = null;

            if (string.IsNullOrEmpty(jsonString))
            {
                return newTimeSeriesResponseObjectItems;
            }

            try
            {
                var hasAdditionalProperties = !(typeof(TimeSeriesResultObjectFlattened).GetProperty("AdditionalProperties") is null);
                newTimeSeriesResponseObjectItems = new TimeSeriesResponseObjectItems(JsonConvert.DeserializeObject<TimeSeriesResultObjectFlattened>(
                    jsonString, 
                    hasAdditionalProperties ? TimeSeriesResponseObjectItems.AdditionalPropertiesSerializerSettings : TimeSeriesResponseObjectItems.SerializerSettings
                )); 
                // deserialization is considered successful at this point if no exception has been thrown.
                return newTimeSeriesResponseObjectItems;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(string.Format("Failed to deserialize `{0}` into TimeSeriesResultObjectFlattened: {1}", jsonString, exception.ToString()));
            }

            try
            {
                var hasAdditionalProperties = !(typeof(TimeSeriesResultObjectNonflattened).GetProperty("AdditionalProperties") is null);
                newTimeSeriesResponseObjectItems = new TimeSeriesResponseObjectItems(JsonConvert.DeserializeObject<TimeSeriesResultObjectNonflattened>(
                    jsonString, 
                    hasAdditionalProperties ? TimeSeriesResponseObjectItems.AdditionalPropertiesSerializerSettings : TimeSeriesResponseObjectItems.SerializerSettings
                )); 
                // deserialization is considered successful at this point if no exception has been thrown.
                return newTimeSeriesResponseObjectItems;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(string.Format("Failed to deserialize `{0}` into TimeSeriesResultObjectNonflattened: {1}", jsonString, exception.ToString()));
            }

            // no match found, throw an exception
            throw new InvalidDataException("The JSON string `" + jsonString + "` cannot be deserialized into any schema defined.");
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as TimeSeriesResponseObjectItems);
        }

        /// <summary>
        /// Returns true if TimeSeriesResponseObjectItems instances are equal
        /// </summary>
        /// <param name="input">Instance of TimeSeriesResponseObjectItems to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TimeSeriesResponseObjectItems input)
        {
            if (input == null)
                return false;

            return this.ActualInstance.Equals(input.ActualInstance);
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.ActualInstance != null)
                    hashCode = hashCode * 59 + this.ActualInstance.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

    /// <summary>
    /// Custom JSON converter for TimeSeriesResponseObjectItems
    /// </summary>
    public class TimeSeriesResponseObjectItemsJsonConverter : JsonConverter
    {
        /// <summary>
        /// To write the JSON string
        /// </summary>
        /// <param name="writer">JSON writer</param>
        /// <param name="value">Object to be converted into a JSON string</param>
        /// <param name="serializer">JSON Serializer</param>
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteRawValue((string)(typeof(TimeSeriesResponseObjectItems).GetMethod("ToJson").Invoke(value, null)));
        }

        /// <summary>
        /// To convert a JSON string into an object
        /// </summary>
        /// <param name="reader">JSON reader</param>
        /// <param name="objectType">Object type</param>
        /// <param name="existingValue">Existing value</param>
        /// <param name="serializer">JSON Serializer</param>
        /// <returns>The object converted from the JSON string</returns>
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            if(reader.TokenType != JsonToken.Null)
            {
                return TimeSeriesResponseObjectItems.FromJson(JObject.Load(reader).ToString(Formatting.None));
            }
            return null;
        }

        /// <summary>
        /// Check if the object can be converted
        /// </summary>
        /// <param name="objectType">Object type</param>
        /// <returns>True if the object can be converted</returns>
        public override bool CanConvert(Type objectType)
        {
            return false;
        }
    }

}
