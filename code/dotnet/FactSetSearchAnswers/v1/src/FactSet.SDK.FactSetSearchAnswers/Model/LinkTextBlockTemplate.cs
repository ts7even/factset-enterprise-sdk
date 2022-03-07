/*
 * FactSet Search Answers API
 *
 * The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: FactSearch.Team@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.FactSetSearchAnswers.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetSearchAnswers.Model
{
    /// <summary>
    /// LinkTextBlockTemplate
    /// </summary>
    [DataContract(Name = "LinkTextBlockTemplate")]
    public partial class LinkTextBlockTemplate : IEquatable<LinkTextBlockTemplate>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LinkTextBlockTemplate" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected LinkTextBlockTemplate() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="LinkTextBlockTemplate" /> class.
        /// </summary>
        /// <param name="headline">headline (required).</param>
        /// <param name="footer">footer.</param>
        /// <param name="fdc3Context">fdc3Context.</param>
        /// <param name="applicationLinks">applicationLinks.</param>
        /// <param name="link">link.</param>
        /// <param name="blurb">blurb.</param>
        public LinkTextBlockTemplate(string headline = default(string), string footer = default(string), Fdc3Context fdc3Context = default(Fdc3Context), List<ApplicationLink> applicationLinks = default(List<ApplicationLink>), string link = default(string), string blurb = default(string))
        {
            // to ensure "headline" is required (not null)
            if (headline == null) {
                throw new ArgumentNullException("headline is a required property for LinkTextBlockTemplate and cannot be null");
            }
            this.Headline = headline;
            this.Footer = footer;
            this.Fdc3Context = fdc3Context;
            this.ApplicationLinks = applicationLinks;
            this.Link = link;
            this.Blurb = blurb;
        }

        /// <summary>
        /// Gets or Sets Headline
        /// </summary>
        [DataMember(Name = "headline", IsRequired = true, EmitDefaultValue = false)]
        public string Headline { get; set; }

        /// <summary>
        /// Gets or Sets Footer
        /// </summary>
        [DataMember(Name = "footer", EmitDefaultValue = false)]
        public string Footer { get; set; }

        /// <summary>
        /// Gets or Sets Fdc3Context
        /// </summary>
        [DataMember(Name = "fdc3Context", EmitDefaultValue = false)]
        public Fdc3Context Fdc3Context { get; set; }

        /// <summary>
        /// Gets or Sets ApplicationLinks
        /// </summary>
        [DataMember(Name = "applicationLinks", EmitDefaultValue = false)]
        public List<ApplicationLink> ApplicationLinks { get; set; }

        /// <summary>
        /// Gets or Sets Link
        /// </summary>
        [DataMember(Name = "link", EmitDefaultValue = false)]
        public string Link { get; set; }

        /// <summary>
        /// Gets or Sets Blurb
        /// </summary>
        [DataMember(Name = "blurb", EmitDefaultValue = false)]
        public string Blurb { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class LinkTextBlockTemplate {\n");
            sb.Append("  Headline: ").Append(Headline).Append("\n");
            sb.Append("  Footer: ").Append(Footer).Append("\n");
            sb.Append("  Fdc3Context: ").Append(Fdc3Context).Append("\n");
            sb.Append("  ApplicationLinks: ").Append(ApplicationLinks).Append("\n");
            sb.Append("  Link: ").Append(Link).Append("\n");
            sb.Append("  Blurb: ").Append(Blurb).Append("\n");
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
            return this.Equals(input as LinkTextBlockTemplate);
        }

        /// <summary>
        /// Returns true if LinkTextBlockTemplate instances are equal
        /// </summary>
        /// <param name="input">Instance of LinkTextBlockTemplate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(LinkTextBlockTemplate input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Headline == input.Headline ||
                    (this.Headline != null &&
                    this.Headline.Equals(input.Headline))
                ) && 
                (
                    this.Footer == input.Footer ||
                    (this.Footer != null &&
                    this.Footer.Equals(input.Footer))
                ) && 
                (
                    this.Fdc3Context == input.Fdc3Context ||
                    (this.Fdc3Context != null &&
                    this.Fdc3Context.Equals(input.Fdc3Context))
                ) && 
                (
                    this.ApplicationLinks == input.ApplicationLinks ||
                    this.ApplicationLinks != null &&
                    input.ApplicationLinks != null &&
                    this.ApplicationLinks.SequenceEqual(input.ApplicationLinks)
                ) && 
                (
                    this.Link == input.Link ||
                    (this.Link != null &&
                    this.Link.Equals(input.Link))
                ) && 
                (
                    this.Blurb == input.Blurb ||
                    (this.Blurb != null &&
                    this.Blurb.Equals(input.Blurb))
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
                if (this.Headline != null)
                    hashCode = hashCode * 59 + this.Headline.GetHashCode();
                if (this.Footer != null)
                    hashCode = hashCode * 59 + this.Footer.GetHashCode();
                if (this.Fdc3Context != null)
                    hashCode = hashCode * 59 + this.Fdc3Context.GetHashCode();
                if (this.ApplicationLinks != null)
                    hashCode = hashCode * 59 + this.ApplicationLinks.GetHashCode();
                if (this.Link != null)
                    hashCode = hashCode * 59 + this.Link.GetHashCode();
                if (this.Blurb != null)
                    hashCode = hashCode * 59 + this.Blurb.GetHashCode();
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