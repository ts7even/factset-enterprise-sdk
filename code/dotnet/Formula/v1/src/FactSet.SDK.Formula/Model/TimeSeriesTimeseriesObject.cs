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
    /// The &#x60;result&#x60; attribute in the Time-Series Non-Flattened Response Object will be a TIMESERIES object. A TIMESERIES object has a values attribute and a dates attribute that contain arrays of equal length so that the values and dates can be align to form a time series.
    /// </summary>
    [DataContract(Name = "time_series_timeseries_object")]
    public partial class TimeSeriesTimeseriesObject : IEquatable<TimeSeriesTimeseriesObject>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TimeSeriesTimeseriesObject" /> class.
        /// </summary>
        /// <param name="values">Representing the data returned from the requested FQL formula for the requestId.</param>
        /// <param name="dates">Representing the dates corresponding the requested FQL formula for the requestId.</param>
        public TimeSeriesTimeseriesObject(List<TimeSeriesScalarValue> values = default(List<TimeSeriesScalarValue>), List<DateTime?> dates = default(List<DateTime?>))
        {
            this.Values = values;
            this.Dates = dates;
        }

        /// <summary>
        /// Representing the data returned from the requested FQL formula for the requestId
        /// </summary>
        /// <value>Representing the data returned from the requested FQL formula for the requestId</value>
        [DataMember(Name = "values", EmitDefaultValue = false)]
        public List<TimeSeriesScalarValue> Values { get; set; }

        /// <summary>
        /// Representing the dates corresponding the requested FQL formula for the requestId
        /// </summary>
        /// <value>Representing the dates corresponding the requested FQL formula for the requestId</value>
        [DataMember(Name = "dates", EmitDefaultValue = false)]
        public List<DateTime?> Dates { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TimeSeriesTimeseriesObject {\n");
            sb.Append("  Values: ").Append(Values).Append("\n");
            sb.Append("  Dates: ").Append(Dates).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as TimeSeriesTimeseriesObject);
        }

        /// <summary>
        /// Returns true if TimeSeriesTimeseriesObject instances are equal
        /// </summary>
        /// <param name="input">Instance of TimeSeriesTimeseriesObject to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TimeSeriesTimeseriesObject input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Values == input.Values ||
                    this.Values != null &&
                    input.Values != null &&
                    this.Values.SequenceEqual(input.Values)
                ) && 
                (
                    this.Dates == input.Dates ||
                    this.Dates != null &&
                    input.Dates != null &&
                    this.Dates.SequenceEqual(input.Dates)
                );
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
                if (this.Values != null)
                {
                    hashCode = (hashCode * 59) + this.Values.GetHashCode();
                }
                if (this.Dates != null)
                {
                    hashCode = (hashCode * 59) + this.Dates.GetHashCode();
                }
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
