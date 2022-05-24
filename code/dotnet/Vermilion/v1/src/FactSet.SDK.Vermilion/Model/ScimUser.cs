/*
 * VRS API documentation
 *
 * Documentation on all available end points in the VRSAPI
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
using OpenAPIDateConverter = FactSet.SDK.Vermilion.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Vermilion.Model
{
    /// <summary>
    /// ScimUser
    /// </summary>
    [DataContract(Name = "ScimUser")]
    public partial class ScimUser : IEquatable<ScimUser>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ScimUser" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="userName">userName.</param>
        /// <param name="name">name.</param>
        /// <param name="userType">userType.</param>
        /// <param name="active">active.</param>
        /// <param name="phoneNumbers">phoneNumbers.</param>
        /// <param name="emails">emails.</param>
        /// <param name="photos">photos.</param>
        /// <param name="domainCode">domainCode.</param>
        /// <param name="isAdministrator">isAdministrator.</param>
        /// <param name="tenant">tenant.</param>
        public ScimUser(int id = default(int), string userName = default(string), ScimUserName name = default(ScimUserName), string userType = default(string), bool active = default(bool), List<ScimPhone> phoneNumbers = default(List<ScimPhone>), List<ScimEmail> emails = default(List<ScimEmail>), List<ScimPhoto> photos = default(List<ScimPhoto>), string domainCode = default(string), bool isAdministrator = default(bool), string tenant = default(string))
        {
            this.Id = id;
            this.UserName = userName;
            this.Name = name;
            this.UserType = userType;
            this.Active = active;
            this.PhoneNumbers = phoneNumbers;
            this.Emails = emails;
            this.Photos = photos;
            this.DomainCode = domainCode;
            this.IsAdministrator = isAdministrator;
            this.Tenant = tenant;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public int Id { get; set; }

        /// <summary>
        /// Gets or Sets UserName
        /// </summary>
        [DataMember(Name = "userName", EmitDefaultValue = false)]
        public string UserName { get; set; }

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public ScimUserName Name { get; set; }

        /// <summary>
        /// Gets or Sets UserType
        /// </summary>
        [DataMember(Name = "userType", EmitDefaultValue = false)]
        public string UserType { get; set; }

        /// <summary>
        /// Gets or Sets Active
        /// </summary>
        [DataMember(Name = "active", EmitDefaultValue = true)]
        public bool Active { get; set; }

        /// <summary>
        /// Gets or Sets PhoneNumbers
        /// </summary>
        [DataMember(Name = "phoneNumbers", EmitDefaultValue = false)]
        public List<ScimPhone> PhoneNumbers { get; set; }

        /// <summary>
        /// Gets or Sets Emails
        /// </summary>
        [DataMember(Name = "emails", EmitDefaultValue = false)]
        public List<ScimEmail> Emails { get; set; }

        /// <summary>
        /// Gets or Sets Photos
        /// </summary>
        [DataMember(Name = "photos", EmitDefaultValue = false)]
        public List<ScimPhoto> Photos { get; set; }

        /// <summary>
        /// Gets or Sets DomainCode
        /// </summary>
        [DataMember(Name = "domainCode", EmitDefaultValue = false)]
        public string DomainCode { get; set; }

        /// <summary>
        /// Gets or Sets IsAdministrator
        /// </summary>
        [DataMember(Name = "isAdministrator", EmitDefaultValue = true)]
        public bool IsAdministrator { get; set; }

        /// <summary>
        /// Gets or Sets Tenant
        /// </summary>
        [DataMember(Name = "tenant", EmitDefaultValue = false)]
        public string Tenant { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ScimUser {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  UserName: ").Append(UserName).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  UserType: ").Append(UserType).Append("\n");
            sb.Append("  Active: ").Append(Active).Append("\n");
            sb.Append("  PhoneNumbers: ").Append(PhoneNumbers).Append("\n");
            sb.Append("  Emails: ").Append(Emails).Append("\n");
            sb.Append("  Photos: ").Append(Photos).Append("\n");
            sb.Append("  DomainCode: ").Append(DomainCode).Append("\n");
            sb.Append("  IsAdministrator: ").Append(IsAdministrator).Append("\n");
            sb.Append("  Tenant: ").Append(Tenant).Append("\n");
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
            return this.Equals(input as ScimUser);
        }

        /// <summary>
        /// Returns true if ScimUser instances are equal
        /// </summary>
        /// <param name="input">Instance of ScimUser to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ScimUser input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    this.Id.Equals(input.Id)
                ) && 
                (
                    this.UserName == input.UserName ||
                    (this.UserName != null &&
                    this.UserName.Equals(input.UserName))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.UserType == input.UserType ||
                    (this.UserType != null &&
                    this.UserType.Equals(input.UserType))
                ) && 
                (
                    this.Active == input.Active ||
                    this.Active.Equals(input.Active)
                ) && 
                (
                    this.PhoneNumbers == input.PhoneNumbers ||
                    this.PhoneNumbers != null &&
                    input.PhoneNumbers != null &&
                    this.PhoneNumbers.SequenceEqual(input.PhoneNumbers)
                ) && 
                (
                    this.Emails == input.Emails ||
                    this.Emails != null &&
                    input.Emails != null &&
                    this.Emails.SequenceEqual(input.Emails)
                ) && 
                (
                    this.Photos == input.Photos ||
                    this.Photos != null &&
                    input.Photos != null &&
                    this.Photos.SequenceEqual(input.Photos)
                ) && 
                (
                    this.DomainCode == input.DomainCode ||
                    (this.DomainCode != null &&
                    this.DomainCode.Equals(input.DomainCode))
                ) && 
                (
                    this.IsAdministrator == input.IsAdministrator ||
                    this.IsAdministrator.Equals(input.IsAdministrator)
                ) && 
                (
                    this.Tenant == input.Tenant ||
                    (this.Tenant != null &&
                    this.Tenant.Equals(input.Tenant))
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
                hashCode = (hashCode * 59) + this.Id.GetHashCode();
                if (this.UserName != null)
                {
                    hashCode = (hashCode * 59) + this.UserName.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.UserType != null)
                {
                    hashCode = (hashCode * 59) + this.UserType.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Active.GetHashCode();
                if (this.PhoneNumbers != null)
                {
                    hashCode = (hashCode * 59) + this.PhoneNumbers.GetHashCode();
                }
                if (this.Emails != null)
                {
                    hashCode = (hashCode * 59) + this.Emails.GetHashCode();
                }
                if (this.Photos != null)
                {
                    hashCode = (hashCode * 59) + this.Photos.GetHashCode();
                }
                if (this.DomainCode != null)
                {
                    hashCode = (hashCode * 59) + this.DomainCode.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.IsAdministrator.GetHashCode();
                if (this.Tenant != null)
                {
                    hashCode = (hashCode * 59) + this.Tenant.GetHashCode();
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