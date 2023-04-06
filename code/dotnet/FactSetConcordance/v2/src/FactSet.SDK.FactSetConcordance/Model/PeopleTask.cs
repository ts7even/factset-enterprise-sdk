/*
 * FactSet Concordance API
 *
 *    The FactSet Concordance API enables Application Developers and Data Scientists to programmatically discover the FactSet Identifier for a specific Entity or Person based on attributes, such as name, URL, and location.FactSet Identifiers are mapped to industry-standard identifiers, as well as to a comprehensive set of reference data and unique content, to enhance the ability to quickly connect content sets.<p>     Using the submitted attributes, the FactSet Concordance API leverages FactSet’s extensive Entity Master, People, and Symbology databases to return potential candidate matches and a proposed match. The result is a concorded FactSet Identifier that can then be used as input throughout FactSet's expanding catalog of Content using our Content APIs or Standard DataFeeds.</p>    <b>There are two types of workflows supported in the API:</b>    <b>Entity & People Match:</b> The first workflow follows traditional API conventions in that a request is accepted and a response is returned synchronously enabling the concordance of up to 25 names in a single request. The response returns a list of 20 candidates as well as a proposed match.    <b>Entity & People Match - Bulk:</b> The second workflow allows you to input a large list of names within a .CSV file in a single request With this workflow, a task is created for uploading a set of queries. Once the task has completed, the client retrieves the concordance results through the /entity-decisions or /people-decisions endpoint. Note that in the Bulk workflow, only the matches for the records are returned. Candidates are not included.    Once the service has provided a list of concorded FactSet Identifiers, you can then use our Entity Mappings and People Mappings endpoints to further review the universe of mapped identifiers or modify existing records. </p> 
 *
 * The version of the OpenAPI document: 2.5.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetConcordance.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetConcordance.Model
{
    /// <summary>
    /// Concordance People Task object. Shows the settings and status of a taskId and some statistics on the matches. 
    /// </summary>
    [DataContract(Name = "PeopleTask")]
    public partial class PeopleTask : IEquatable<PeopleTask>, IValidatableObject
    {
        /// <summary>
        /// Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results.
        /// </summary>
        /// <value>Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum StatusEnum
        {
            /// <summary>
            /// Enum PENDING for value: PENDING
            /// </summary>
            [EnumMember(Value = "PENDING")]
            PENDING = 1,

            /// <summary>
            /// Enum INPROGRESS for value: IN_PROGRESS
            /// </summary>
            [EnumMember(Value = "IN_PROGRESS")]
            INPROGRESS = 2,

            /// <summary>
            /// Enum SUCCESS for value: SUCCESS
            /// </summary>
            [EnumMember(Value = "SUCCESS")]
            SUCCESS = 3,

            /// <summary>
            /// Enum FAILURE for value: FAILURE
            /// </summary>
            [EnumMember(Value = "FAILURE")]
            FAILURE = 4,

            /// <summary>
            /// Enum BADREQUEST for value: BAD_REQUEST
            /// </summary>
            [EnumMember(Value = "BAD_REQUEST")]
            BADREQUEST = 5,

            /// <summary>
            /// Enum ABORTED for value: ABORTED
            /// </summary>
            [EnumMember(Value = "ABORTED")]
            ABORTED = 6

        }


        /// <summary>
        /// Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results.
        /// </summary>
        /// <value>Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results.</value>
        [DataMember(Name = "status", EmitDefaultValue = true)]
        public StatusEnum? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PeopleTask" /> class.
        /// </summary>
        /// <param name="clientIdColumn">The number of columns of client. .</param>
        /// <param name="personNameColumn">The person name as provided in request..</param>
        /// <param name="firstNameColumn">The first name of the client..</param>
        /// <param name="lastNameColumn">The last name of the person..</param>
        /// <param name="middleNameColumn">The middle name of the client..</param>
        /// <param name="priorityColumn">The middle name of the client..</param>
        /// <param name="salutationColumn">The salutation of the person..</param>
        /// <param name="hasResult">Whether the result is available..</param>
        /// <param name="taskAction">Action status for the Concordance Task process..</param>
        /// <param name="inputFile">The input file is posted as a file object in the form. .</param>
        /// <param name="entityColumn">Full name corresponding to the matched entity..</param>
        /// <param name="status">Status of the Concordance Task. If the value is \&quot;SUCCESS\&quot;, you can move to the subsequent /entity-decisions endpoint to retrieve the results..</param>
        /// <param name="suffixColumn">Name of the column in the input file that contains the person&#39;s suffix. .</param>
        /// <param name="taskSubmitTime">Time the Task was submitted in UTC..</param>
        /// <param name="unmappedCount">Number of records with status of UNMAPPED the Input File..</param>
        /// <param name="tryCount">Number of tries made so far for the request..</param>
        /// <param name="decisionRate">Percentage of mapped entities in the Input File..</param>
        /// <param name="processStartTime">Process start time in UTC..</param>
        /// <param name="processDuration">Process duration in seconds..</param>
        /// <param name="mappedCount">Number of records with status of MAPPED the Input File..</param>
        /// <param name="message">Textual message for the status..</param>
        /// <param name="error">error.</param>
        /// <param name="errorTitle">errorTitle.</param>
        /// <param name="inputCount">Number of records in the Input File..</param>
        /// <param name="indeterminateCount">Number of records with status of INDETERMINATE the Input File..</param>
        /// <param name="taskId">The task identifier.</param>
        /// <param name="taskName">The task name.</param>
        /// <param name="universeId">The universe identifier.</param>
        /// <param name="universeName">Full name of the person associated with the &#x60;userSerial&#x60;. .</param>
        /// <param name="userFullName">Full name of the person associated with the &#x60;userSerial&#x60;. .</param>
        /// <param name="userSerial">user-serial of the person who initiated the people task .</param>
        public PeopleTask(string clientIdColumn = default(string), string personNameColumn = default(string), string firstNameColumn = default(string), string lastNameColumn = default(string), string middleNameColumn = default(string), string priorityColumn = default(string), string salutationColumn = default(string), bool? hasResult = default(bool?), string taskAction = default(string), string inputFile = default(string), string entityColumn = default(string), StatusEnum? status = default(StatusEnum?), string suffixColumn = default(string), DateTime? taskSubmitTime = default(DateTime?), int? unmappedCount = default(int?), int? tryCount = default(int?), double? decisionRate = default(double?), DateTime? processStartTime = default(DateTime?), double? processDuration = default(double?), int? mappedCount = default(int?), string message = default(string), string error = default(string), string errorTitle = default(string), int? inputCount = default(int?), int? indeterminateCount = default(int?), int? taskId = default(int?), string taskName = default(string), int? universeId = default(int?), string universeName = default(string), string userFullName = default(string), string userSerial = default(string))
        {
            this.ClientIdColumn = clientIdColumn;
            this.PersonNameColumn = personNameColumn;
            this.FirstNameColumn = firstNameColumn;
            this.LastNameColumn = lastNameColumn;
            this.MiddleNameColumn = middleNameColumn;
            this.PriorityColumn = priorityColumn;
            this.SalutationColumn = salutationColumn;
            this.HasResult = hasResult;
            this.TaskAction = taskAction;
            this.InputFile = inputFile;
            this.EntityColumn = entityColumn;
            this.Status = status;
            this.SuffixColumn = suffixColumn;
            this.TaskSubmitTime = taskSubmitTime;
            this.UnmappedCount = unmappedCount;
            this.TryCount = tryCount;
            this.DecisionRate = decisionRate;
            this.ProcessStartTime = processStartTime;
            this.ProcessDuration = processDuration;
            this.MappedCount = mappedCount;
            this.Message = message;
            this.Error = error;
            this.ErrorTitle = errorTitle;
            this.InputCount = inputCount;
            this.IndeterminateCount = indeterminateCount;
            this.TaskId = taskId;
            this.TaskName = taskName;
            this.UniverseId = universeId;
            this.UniverseName = universeName;
            this.UserFullName = userFullName;
            this.UserSerial = userSerial;
        }

        /// <summary>
        /// The number of columns of client. 
        /// </summary>
        /// <value>The number of columns of client. </value>
        [DataMember(Name = "clientIdColumn", EmitDefaultValue = true)]
        public string ClientIdColumn { get; set; }

        /// <summary>
        /// The person name as provided in request.
        /// </summary>
        /// <value>The person name as provided in request.</value>
        [DataMember(Name = "personNameColumn", EmitDefaultValue = true)]
        public string PersonNameColumn { get; set; }

        /// <summary>
        /// The first name of the client.
        /// </summary>
        /// <value>The first name of the client.</value>
        [DataMember(Name = "firstNameColumn", EmitDefaultValue = true)]
        public string FirstNameColumn { get; set; }

        /// <summary>
        /// The last name of the person.
        /// </summary>
        /// <value>The last name of the person.</value>
        [DataMember(Name = "lastNameColumn", EmitDefaultValue = true)]
        public string LastNameColumn { get; set; }

        /// <summary>
        /// The middle name of the client.
        /// </summary>
        /// <value>The middle name of the client.</value>
        [DataMember(Name = "middleNameColumn", EmitDefaultValue = true)]
        public string MiddleNameColumn { get; set; }

        /// <summary>
        /// The middle name of the client.
        /// </summary>
        /// <value>The middle name of the client.</value>
        [DataMember(Name = "priorityColumn", EmitDefaultValue = true)]
        public string PriorityColumn { get; set; }

        /// <summary>
        /// The salutation of the person.
        /// </summary>
        /// <value>The salutation of the person.</value>
        [DataMember(Name = "salutationColumn", EmitDefaultValue = true)]
        public string SalutationColumn { get; set; }

        /// <summary>
        /// Whether the result is available.
        /// </summary>
        /// <value>Whether the result is available.</value>
        [DataMember(Name = "hasResult", EmitDefaultValue = true)]
        public bool? HasResult { get; set; }

        /// <summary>
        /// Action status for the Concordance Task process.
        /// </summary>
        /// <value>Action status for the Concordance Task process.</value>
        [DataMember(Name = "taskAction", EmitDefaultValue = true)]
        public string TaskAction { get; set; }

        /// <summary>
        /// The input file is posted as a file object in the form. 
        /// </summary>
        /// <value>The input file is posted as a file object in the form. </value>
        [DataMember(Name = "inputFile", EmitDefaultValue = true)]
        public string InputFile { get; set; }

        /// <summary>
        /// Full name corresponding to the matched entity.
        /// </summary>
        /// <value>Full name corresponding to the matched entity.</value>
        [DataMember(Name = "entityColumn", EmitDefaultValue = true)]
        public string EntityColumn { get; set; }

        /// <summary>
        /// Name of the column in the input file that contains the person&#39;s suffix. 
        /// </summary>
        /// <value>Name of the column in the input file that contains the person&#39;s suffix. </value>
        [DataMember(Name = "suffixColumn", EmitDefaultValue = true)]
        public string SuffixColumn { get; set; }

        /// <summary>
        /// Time the Task was submitted in UTC.
        /// </summary>
        /// <value>Time the Task was submitted in UTC.</value>
        [DataMember(Name = "taskSubmitTime", EmitDefaultValue = true)]
        public DateTime? TaskSubmitTime { get; set; }

        /// <summary>
        /// Number of records with status of UNMAPPED the Input File.
        /// </summary>
        /// <value>Number of records with status of UNMAPPED the Input File.</value>
        [DataMember(Name = "unmappedCount", EmitDefaultValue = true)]
        public int? UnmappedCount { get; set; }

        /// <summary>
        /// Number of tries made so far for the request.
        /// </summary>
        /// <value>Number of tries made so far for the request.</value>
        [DataMember(Name = "tryCount", EmitDefaultValue = true)]
        public int? TryCount { get; set; }

        /// <summary>
        /// Percentage of mapped entities in the Input File.
        /// </summary>
        /// <value>Percentage of mapped entities in the Input File.</value>
        [DataMember(Name = "decisionRate", EmitDefaultValue = true)]
        public double? DecisionRate { get; set; }

        /// <summary>
        /// Process start time in UTC.
        /// </summary>
        /// <value>Process start time in UTC.</value>
        [DataMember(Name = "processStartTime", EmitDefaultValue = true)]
        public DateTime? ProcessStartTime { get; set; }

        /// <summary>
        /// Process duration in seconds.
        /// </summary>
        /// <value>Process duration in seconds.</value>
        [DataMember(Name = "processDuration", EmitDefaultValue = true)]
        public double? ProcessDuration { get; set; }

        /// <summary>
        /// Number of records with status of MAPPED the Input File.
        /// </summary>
        /// <value>Number of records with status of MAPPED the Input File.</value>
        [DataMember(Name = "mappedCount", EmitDefaultValue = true)]
        public int? MappedCount { get; set; }

        /// <summary>
        /// Textual message for the status.
        /// </summary>
        /// <value>Textual message for the status.</value>
        [DataMember(Name = "message", EmitDefaultValue = true)]
        public string Message { get; set; }

        /// <summary>
        /// Gets or Sets Error
        /// </summary>
        [DataMember(Name = "error", EmitDefaultValue = true)]
        public string Error { get; set; }

        /// <summary>
        /// Gets or Sets ErrorTitle
        /// </summary>
        [DataMember(Name = "errorTitle", EmitDefaultValue = true)]
        public string ErrorTitle { get; set; }

        /// <summary>
        /// Number of records in the Input File.
        /// </summary>
        /// <value>Number of records in the Input File.</value>
        [DataMember(Name = "inputCount", EmitDefaultValue = true)]
        public int? InputCount { get; set; }

        /// <summary>
        /// Number of records with status of INDETERMINATE the Input File.
        /// </summary>
        /// <value>Number of records with status of INDETERMINATE the Input File.</value>
        [DataMember(Name = "indeterminateCount", EmitDefaultValue = true)]
        public int? IndeterminateCount { get; set; }

        /// <summary>
        /// The task identifier
        /// </summary>
        /// <value>The task identifier</value>
        [DataMember(Name = "taskId", EmitDefaultValue = true)]
        public int? TaskId { get; set; }

        /// <summary>
        /// The task name
        /// </summary>
        /// <value>The task name</value>
        [DataMember(Name = "taskName", EmitDefaultValue = true)]
        public string TaskName { get; set; }

        /// <summary>
        /// The universe identifier
        /// </summary>
        /// <value>The universe identifier</value>
        [DataMember(Name = "universeId", EmitDefaultValue = true)]
        public int? UniverseId { get; set; }

        /// <summary>
        /// Full name of the person associated with the &#x60;userSerial&#x60;. 
        /// </summary>
        /// <value>Full name of the person associated with the &#x60;userSerial&#x60;. </value>
        [DataMember(Name = "universeName", EmitDefaultValue = true)]
        public string UniverseName { get; set; }

        /// <summary>
        /// Full name of the person associated with the &#x60;userSerial&#x60;. 
        /// </summary>
        /// <value>Full name of the person associated with the &#x60;userSerial&#x60;. </value>
        [DataMember(Name = "userFullName", EmitDefaultValue = true)]
        public string UserFullName { get; set; }

        /// <summary>
        /// user-serial of the person who initiated the people task 
        /// </summary>
        /// <value>user-serial of the person who initiated the people task </value>
        [DataMember(Name = "userSerial", EmitDefaultValue = true)]
        public string UserSerial { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PeopleTask {\n");
            sb.Append("  ClientIdColumn: ").Append(ClientIdColumn).Append("\n");
            sb.Append("  PersonNameColumn: ").Append(PersonNameColumn).Append("\n");
            sb.Append("  FirstNameColumn: ").Append(FirstNameColumn).Append("\n");
            sb.Append("  LastNameColumn: ").Append(LastNameColumn).Append("\n");
            sb.Append("  MiddleNameColumn: ").Append(MiddleNameColumn).Append("\n");
            sb.Append("  PriorityColumn: ").Append(PriorityColumn).Append("\n");
            sb.Append("  SalutationColumn: ").Append(SalutationColumn).Append("\n");
            sb.Append("  HasResult: ").Append(HasResult).Append("\n");
            sb.Append("  TaskAction: ").Append(TaskAction).Append("\n");
            sb.Append("  InputFile: ").Append(InputFile).Append("\n");
            sb.Append("  EntityColumn: ").Append(EntityColumn).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  SuffixColumn: ").Append(SuffixColumn).Append("\n");
            sb.Append("  TaskSubmitTime: ").Append(TaskSubmitTime).Append("\n");
            sb.Append("  UnmappedCount: ").Append(UnmappedCount).Append("\n");
            sb.Append("  TryCount: ").Append(TryCount).Append("\n");
            sb.Append("  DecisionRate: ").Append(DecisionRate).Append("\n");
            sb.Append("  ProcessStartTime: ").Append(ProcessStartTime).Append("\n");
            sb.Append("  ProcessDuration: ").Append(ProcessDuration).Append("\n");
            sb.Append("  MappedCount: ").Append(MappedCount).Append("\n");
            sb.Append("  Message: ").Append(Message).Append("\n");
            sb.Append("  Error: ").Append(Error).Append("\n");
            sb.Append("  ErrorTitle: ").Append(ErrorTitle).Append("\n");
            sb.Append("  InputCount: ").Append(InputCount).Append("\n");
            sb.Append("  IndeterminateCount: ").Append(IndeterminateCount).Append("\n");
            sb.Append("  TaskId: ").Append(TaskId).Append("\n");
            sb.Append("  TaskName: ").Append(TaskName).Append("\n");
            sb.Append("  UniverseId: ").Append(UniverseId).Append("\n");
            sb.Append("  UniverseName: ").Append(UniverseName).Append("\n");
            sb.Append("  UserFullName: ").Append(UserFullName).Append("\n");
            sb.Append("  UserSerial: ").Append(UserSerial).Append("\n");
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
            return this.Equals(input as PeopleTask);
        }

        /// <summary>
        /// Returns true if PeopleTask instances are equal
        /// </summary>
        /// <param name="input">Instance of PeopleTask to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PeopleTask input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ClientIdColumn == input.ClientIdColumn ||
                    (this.ClientIdColumn != null &&
                    this.ClientIdColumn.Equals(input.ClientIdColumn))
                ) && 
                (
                    this.PersonNameColumn == input.PersonNameColumn ||
                    (this.PersonNameColumn != null &&
                    this.PersonNameColumn.Equals(input.PersonNameColumn))
                ) && 
                (
                    this.FirstNameColumn == input.FirstNameColumn ||
                    (this.FirstNameColumn != null &&
                    this.FirstNameColumn.Equals(input.FirstNameColumn))
                ) && 
                (
                    this.LastNameColumn == input.LastNameColumn ||
                    (this.LastNameColumn != null &&
                    this.LastNameColumn.Equals(input.LastNameColumn))
                ) && 
                (
                    this.MiddleNameColumn == input.MiddleNameColumn ||
                    (this.MiddleNameColumn != null &&
                    this.MiddleNameColumn.Equals(input.MiddleNameColumn))
                ) && 
                (
                    this.PriorityColumn == input.PriorityColumn ||
                    (this.PriorityColumn != null &&
                    this.PriorityColumn.Equals(input.PriorityColumn))
                ) && 
                (
                    this.SalutationColumn == input.SalutationColumn ||
                    (this.SalutationColumn != null &&
                    this.SalutationColumn.Equals(input.SalutationColumn))
                ) && 
                (
                    this.HasResult == input.HasResult ||
                    (this.HasResult != null &&
                    this.HasResult.Equals(input.HasResult))
                ) && 
                (
                    this.TaskAction == input.TaskAction ||
                    (this.TaskAction != null &&
                    this.TaskAction.Equals(input.TaskAction))
                ) && 
                (
                    this.InputFile == input.InputFile ||
                    (this.InputFile != null &&
                    this.InputFile.Equals(input.InputFile))
                ) && 
                (
                    this.EntityColumn == input.EntityColumn ||
                    (this.EntityColumn != null &&
                    this.EntityColumn.Equals(input.EntityColumn))
                ) && 
                (
                    this.Status == input.Status ||
                    this.Status.Equals(input.Status)
                ) && 
                (
                    this.SuffixColumn == input.SuffixColumn ||
                    (this.SuffixColumn != null &&
                    this.SuffixColumn.Equals(input.SuffixColumn))
                ) && 
                (
                    this.TaskSubmitTime == input.TaskSubmitTime ||
                    (this.TaskSubmitTime != null &&
                    this.TaskSubmitTime.Equals(input.TaskSubmitTime))
                ) && 
                (
                    this.UnmappedCount == input.UnmappedCount ||
                    (this.UnmappedCount != null &&
                    this.UnmappedCount.Equals(input.UnmappedCount))
                ) && 
                (
                    this.TryCount == input.TryCount ||
                    (this.TryCount != null &&
                    this.TryCount.Equals(input.TryCount))
                ) && 
                (
                    this.DecisionRate == input.DecisionRate ||
                    (this.DecisionRate != null &&
                    this.DecisionRate.Equals(input.DecisionRate))
                ) && 
                (
                    this.ProcessStartTime == input.ProcessStartTime ||
                    (this.ProcessStartTime != null &&
                    this.ProcessStartTime.Equals(input.ProcessStartTime))
                ) && 
                (
                    this.ProcessDuration == input.ProcessDuration ||
                    (this.ProcessDuration != null &&
                    this.ProcessDuration.Equals(input.ProcessDuration))
                ) && 
                (
                    this.MappedCount == input.MappedCount ||
                    (this.MappedCount != null &&
                    this.MappedCount.Equals(input.MappedCount))
                ) && 
                (
                    this.Message == input.Message ||
                    (this.Message != null &&
                    this.Message.Equals(input.Message))
                ) && 
                (
                    this.Error == input.Error ||
                    (this.Error != null &&
                    this.Error.Equals(input.Error))
                ) && 
                (
                    this.ErrorTitle == input.ErrorTitle ||
                    (this.ErrorTitle != null &&
                    this.ErrorTitle.Equals(input.ErrorTitle))
                ) && 
                (
                    this.InputCount == input.InputCount ||
                    (this.InputCount != null &&
                    this.InputCount.Equals(input.InputCount))
                ) && 
                (
                    this.IndeterminateCount == input.IndeterminateCount ||
                    (this.IndeterminateCount != null &&
                    this.IndeterminateCount.Equals(input.IndeterminateCount))
                ) && 
                (
                    this.TaskId == input.TaskId ||
                    (this.TaskId != null &&
                    this.TaskId.Equals(input.TaskId))
                ) && 
                (
                    this.TaskName == input.TaskName ||
                    (this.TaskName != null &&
                    this.TaskName.Equals(input.TaskName))
                ) && 
                (
                    this.UniverseId == input.UniverseId ||
                    (this.UniverseId != null &&
                    this.UniverseId.Equals(input.UniverseId))
                ) && 
                (
                    this.UniverseName == input.UniverseName ||
                    (this.UniverseName != null &&
                    this.UniverseName.Equals(input.UniverseName))
                ) && 
                (
                    this.UserFullName == input.UserFullName ||
                    (this.UserFullName != null &&
                    this.UserFullName.Equals(input.UserFullName))
                ) && 
                (
                    this.UserSerial == input.UserSerial ||
                    (this.UserSerial != null &&
                    this.UserSerial.Equals(input.UserSerial))
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
                if (this.ClientIdColumn != null)
                {
                    hashCode = (hashCode * 59) + this.ClientIdColumn.GetHashCode();
                }
                if (this.PersonNameColumn != null)
                {
                    hashCode = (hashCode * 59) + this.PersonNameColumn.GetHashCode();
                }
                if (this.FirstNameColumn != null)
                {
                    hashCode = (hashCode * 59) + this.FirstNameColumn.GetHashCode();
                }
                if (this.LastNameColumn != null)
                {
                    hashCode = (hashCode * 59) + this.LastNameColumn.GetHashCode();
                }
                if (this.MiddleNameColumn != null)
                {
                    hashCode = (hashCode * 59) + this.MiddleNameColumn.GetHashCode();
                }
                if (this.PriorityColumn != null)
                {
                    hashCode = (hashCode * 59) + this.PriorityColumn.GetHashCode();
                }
                if (this.SalutationColumn != null)
                {
                    hashCode = (hashCode * 59) + this.SalutationColumn.GetHashCode();
                }
                if (this.HasResult != null)
                {
                    hashCode = (hashCode * 59) + this.HasResult.GetHashCode();
                }
                if (this.TaskAction != null)
                {
                    hashCode = (hashCode * 59) + this.TaskAction.GetHashCode();
                }
                if (this.InputFile != null)
                {
                    hashCode = (hashCode * 59) + this.InputFile.GetHashCode();
                }
                if (this.EntityColumn != null)
                {
                    hashCode = (hashCode * 59) + this.EntityColumn.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Status.GetHashCode();
                if (this.SuffixColumn != null)
                {
                    hashCode = (hashCode * 59) + this.SuffixColumn.GetHashCode();
                }
                if (this.TaskSubmitTime != null)
                {
                    hashCode = (hashCode * 59) + this.TaskSubmitTime.GetHashCode();
                }
                if (this.UnmappedCount != null)
                {
                    hashCode = (hashCode * 59) + this.UnmappedCount.GetHashCode();
                }
                if (this.TryCount != null)
                {
                    hashCode = (hashCode * 59) + this.TryCount.GetHashCode();
                }
                if (this.DecisionRate != null)
                {
                    hashCode = (hashCode * 59) + this.DecisionRate.GetHashCode();
                }
                if (this.ProcessStartTime != null)
                {
                    hashCode = (hashCode * 59) + this.ProcessStartTime.GetHashCode();
                }
                if (this.ProcessDuration != null)
                {
                    hashCode = (hashCode * 59) + this.ProcessDuration.GetHashCode();
                }
                if (this.MappedCount != null)
                {
                    hashCode = (hashCode * 59) + this.MappedCount.GetHashCode();
                }
                if (this.Message != null)
                {
                    hashCode = (hashCode * 59) + this.Message.GetHashCode();
                }
                if (this.Error != null)
                {
                    hashCode = (hashCode * 59) + this.Error.GetHashCode();
                }
                if (this.ErrorTitle != null)
                {
                    hashCode = (hashCode * 59) + this.ErrorTitle.GetHashCode();
                }
                if (this.InputCount != null)
                {
                    hashCode = (hashCode * 59) + this.InputCount.GetHashCode();
                }
                if (this.IndeterminateCount != null)
                {
                    hashCode = (hashCode * 59) + this.IndeterminateCount.GetHashCode();
                }
                if (this.TaskId != null)
                {
                    hashCode = (hashCode * 59) + this.TaskId.GetHashCode();
                }
                if (this.TaskName != null)
                {
                    hashCode = (hashCode * 59) + this.TaskName.GetHashCode();
                }
                if (this.UniverseId != null)
                {
                    hashCode = (hashCode * 59) + this.UniverseId.GetHashCode();
                }
                if (this.UniverseName != null)
                {
                    hashCode = (hashCode * 59) + this.UniverseName.GetHashCode();
                }
                if (this.UserFullName != null)
                {
                    hashCode = (hashCode * 59) + this.UserFullName.GetHashCode();
                }
                if (this.UserSerial != null)
                {
                    hashCode = (hashCode * 59) + this.UserSerial.GetHashCode();
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
