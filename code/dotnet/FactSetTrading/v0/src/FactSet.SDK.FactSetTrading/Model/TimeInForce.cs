/*
 * EMS API
 *
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.FactSetTrading.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetTrading.Model
{
    /// <summary>
    /// TimeInForce
    /// </summary>
    [DataContract(Name = "TimeInForce")]
    public partial class TimeInForce : IEquatable<TimeInForce>, IValidatableObject
    {
        /// <summary>
        /// Time in force: if GTD, then Expire Time or Expire Date is a required field
        /// </summary>
        /// <value>Time in force: if GTD, then Expire Time or Expire Date is a required field</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TifEnum
        {
            /// <summary>
            /// Enum DAY for value: DAY
            /// </summary>
            [EnumMember(Value = "DAY")]
            DAY = 1,

            /// <summary>
            /// Enum GTC for value: GTC
            /// </summary>
            [EnumMember(Value = "GTC")]
            GTC = 2,

            /// <summary>
            /// Enum OPG for value: OPG
            /// </summary>
            [EnumMember(Value = "OPG")]
            OPG = 3,

            /// <summary>
            /// Enum IOC for value: IOC
            /// </summary>
            [EnumMember(Value = "IOC")]
            IOC = 4,

            /// <summary>
            /// Enum FOK for value: FOK
            /// </summary>
            [EnumMember(Value = "FOK")]
            FOK = 5,

            /// <summary>
            /// Enum GTX for value: GTX
            /// </summary>
            [EnumMember(Value = "GTX")]
            GTX = 6,

            /// <summary>
            /// Enum GTD for value: GTD
            /// </summary>
            [EnumMember(Value = "GTD")]
            GTD = 7,

            /// <summary>
            /// Enum ATC for value: ATC
            /// </summary>
            [EnumMember(Value = "ATC")]
            ATC = 8

        }


        /// <summary>
        /// Time in force: if GTD, then Expire Time or Expire Date is a required field
        /// </summary>
        /// <value>Time in force: if GTD, then Expire Time or Expire Date is a required field</value>
        [DataMember(Name = "tif", EmitDefaultValue = false)]
        public TifEnum? Tif { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="TimeInForce" /> class.
        /// </summary>
        /// <param name="tif">Time in force: if GTD, then Expire Time or Expire Date is a required field.</param>
        /// <param name="expireDate">Expire date in YYYYMMDD format expressed in UTC.</param>
        /// <param name="expireTime">Expire time in YYYYMMDD-HH:MM:SS format expressed in UTC.</param>
        public TimeInForce(TifEnum? tif = default(TifEnum?), string expireDate = default(string), string expireTime = default(string))
        {
            this.Tif = tif;
            this.ExpireDate = expireDate;
            this.ExpireTime = expireTime;
        }

        /// <summary>
        /// Expire date in YYYYMMDD format expressed in UTC
        /// </summary>
        /// <value>Expire date in YYYYMMDD format expressed in UTC</value>
        [DataMember(Name = "expireDate", EmitDefaultValue = true)]
        public string ExpireDate { get; set; }

        /// <summary>
        /// Expire time in YYYYMMDD-HH:MM:SS format expressed in UTC
        /// </summary>
        /// <value>Expire time in YYYYMMDD-HH:MM:SS format expressed in UTC</value>
        [DataMember(Name = "expireTime", EmitDefaultValue = true)]
        public string ExpireTime { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TimeInForce {\n");
            sb.Append("  Tif: ").Append(Tif).Append("\n");
            sb.Append("  ExpireDate: ").Append(ExpireDate).Append("\n");
            sb.Append("  ExpireTime: ").Append(ExpireTime).Append("\n");
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
            return this.Equals(input as TimeInForce);
        }

        /// <summary>
        /// Returns true if TimeInForce instances are equal
        /// </summary>
        /// <param name="input">Instance of TimeInForce to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TimeInForce input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Tif == input.Tif ||
                    this.Tif.Equals(input.Tif)
                ) && 
                (
                    this.ExpireDate == input.ExpireDate ||
                    (this.ExpireDate != null &&
                    this.ExpireDate.Equals(input.ExpireDate))
                ) && 
                (
                    this.ExpireTime == input.ExpireTime ||
                    (this.ExpireTime != null &&
                    this.ExpireTime.Equals(input.ExpireTime))
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
                hashCode = (hashCode * 59) + this.Tif.GetHashCode();
                if (this.ExpireDate != null)
                {
                    hashCode = (hashCode * 59) + this.ExpireDate.GetHashCode();
                }
                if (this.ExpireTime != null)
                {
                    hashCode = (hashCode * 59) + this.ExpireTime.GetHashCode();
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
