/*
 * Prime Developer Trial
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
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
using OpenAPIDateConverter = FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Model
{
    /// <summary>
    /// Categorization based on the DDV (Deutscher Derivate Verband, German for German Derivatives Association) product classification. This category system (id&#x3D;23) covers securitized derivatives traded in Germany except exchange trade commodities (ETC) and exchange traded notes (ETN).
    /// </summary>
    [DataContract(Name = "inline_response_200_6_instrument_categorization_ddv")]
    public partial class InlineResponse2006InstrumentCategorizationDdv : IEquatable<InlineResponse2006InstrumentCategorizationDdv>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2006InstrumentCategorizationDdv" /> class.
        /// </summary>
        /// <param name="level1">level1.</param>
        /// <param name="level2">level2.</param>
        /// <param name="level3">level3.</param>
        public InlineResponse2006InstrumentCategorizationDdv(InlineResponse2006InstrumentCategorizationDdvLevel1 level1 = default(InlineResponse2006InstrumentCategorizationDdvLevel1), InlineResponse2006InstrumentCategorizationDdvLevel2 level2 = default(InlineResponse2006InstrumentCategorizationDdvLevel2), InlineResponse2006InstrumentCategorizationDdvLevel3 level3 = default(InlineResponse2006InstrumentCategorizationDdvLevel3))
        {
            this.Level1 = level1;
            this.Level2 = level2;
            this.Level3 = level3;
        }

        /// <summary>
        /// Gets or Sets Level1
        /// </summary>
        [DataMember(Name = "level1", EmitDefaultValue = false)]
        public InlineResponse2006InstrumentCategorizationDdvLevel1 Level1 { get; set; }

        /// <summary>
        /// Gets or Sets Level2
        /// </summary>
        [DataMember(Name = "level2", EmitDefaultValue = false)]
        public InlineResponse2006InstrumentCategorizationDdvLevel2 Level2 { get; set; }

        /// <summary>
        /// Gets or Sets Level3
        /// </summary>
        [DataMember(Name = "level3", EmitDefaultValue = false)]
        public InlineResponse2006InstrumentCategorizationDdvLevel3 Level3 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2006InstrumentCategorizationDdv {\n");
            sb.Append("  Level1: ").Append(Level1).Append("\n");
            sb.Append("  Level2: ").Append(Level2).Append("\n");
            sb.Append("  Level3: ").Append(Level3).Append("\n");
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
            return this.Equals(input as InlineResponse2006InstrumentCategorizationDdv);
        }

        /// <summary>
        /// Returns true if InlineResponse2006InstrumentCategorizationDdv instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2006InstrumentCategorizationDdv to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2006InstrumentCategorizationDdv input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Level1 == input.Level1 ||
                    (this.Level1 != null &&
                    this.Level1.Equals(input.Level1))
                ) && 
                (
                    this.Level2 == input.Level2 ||
                    (this.Level2 != null &&
                    this.Level2.Equals(input.Level2))
                ) && 
                (
                    this.Level3 == input.Level3 ||
                    (this.Level3 != null &&
                    this.Level3.Equals(input.Level3))
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
                if (this.Level1 != null)
                    hashCode = hashCode * 59 + this.Level1.GetHashCode();
                if (this.Level2 != null)
                    hashCode = hashCode * 59 + this.Level2.GetHashCode();
                if (this.Level3 != null)
                    hashCode = hashCode * 59 + this.Level3.GetHashCode();
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