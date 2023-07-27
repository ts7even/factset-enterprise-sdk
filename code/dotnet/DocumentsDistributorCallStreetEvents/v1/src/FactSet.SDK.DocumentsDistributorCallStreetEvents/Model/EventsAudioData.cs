/*
 * Documents Distributor - CallStreet Events
 *
 * CallStreet Events contains all the Documents Distributor APIs that offer events data such as Events Audio and Near Real-Time Transcripts.  The  Events Audio API provides access to historical as well as the latest audio recordings of various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service. 
 *
 * The version of the OpenAPI document: 1.8.3
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
using OpenAPIDateConverter = FactSet.SDK.DocumentsDistributorCallStreetEvents.Client.OpenAPIDateConverter;

namespace FactSet.SDK.DocumentsDistributorCallStreetEvents.Model
{
    /// <summary>
    /// EventsAudioData
    /// </summary>
    [DataContract(Name = "Events_Audio_data")]
    public partial class EventsAudioData : IEquatable<EventsAudioData>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventsAudioData" /> class.
        /// </summary>
        /// <param name="url">Download link for the audio file..</param>
        /// <param name="fileName">The filename of the audio file..</param>
        /// <param name="durationSecs">Total duration of the recording in seconds based on startOffsetSeconds to endOffsetSeconds..</param>
        /// <param name="endOffsetSeconds">The delta in seconds between startTime to when FactSet marks the end of the call..</param>
        /// <param name="startOffsetSeconds">The delta in seconds between start of audio file to when FactSet marks the beginning of the call..</param>
        /// <param name="sourceCode">Identifies the method of how the event is recorded Below are the descriptions for each Source Code - * P &#x3D; Phone * W &#x3D; Webcast * V &#x3D; Vendor * I &#x3D; Webcast Replay * F &#x3D; Flash - identical to webcast; can merge with \&quot;W\&quot; in the future * R &#x3D; Replay (Phone Replay).</param>
        /// <param name="startTime">The official timestamp when FactSet begins the recording.  Note:- All the vendor and trimmed files would have default 1900-0101T00:00:00Z time stamp..</param>
        /// <param name="endTime">The official timestamp when FactSet ends the recording.  Note:- All the vendor and trimmed files would have default 1900-0101T00:00:00Z time stamp..</param>
        /// <param name="uploadTime">The official timestamp when FactSet publishes the audio file externally..</param>
        /// <param name="fileSize">Size of the Audio file, in bytes..</param>
        /// <param name="reportId">The unique ID of the audio file for an event. The same ID is used for the transcript of the same event. This report ID can also be used to map to the Event details in SDF tables..</param>
        /// <param name="ticker">Ticker-region identifier for the company hosting the event.  Note:- This field can have N/A value when the company is a private(non-equity company).</param>
        /// <param name="entityId">Factset entity level identifier for the company hosting the event..</param>
        /// <param name="trimmed">The trimmed attribute helps identify if the audio is the trimmed version. Note:- All the vendor generated files are trimmed regardless of the ‘trimmed’ attribute value in the response..</param>
        /// <param name="sampleRate">The number of samples of audio carried per second in Kbps.  Note:- The field can have value as -1 for the audio files without sampleRate metadata.</param>
        /// <param name="bitrate">The total number of bits of information stored per second of sound in Kbps.  Note:- The field can have value as -1 for the audio files without bitrate metadata.</param>
        /// <param name="audioSourceId">Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (Phone or Webcast or Vendor or Replay). One ReportID can have multiple AudioSourceIDs.  The audioSourceId identifier is available for audio calls since November 29, 2022. Note:- Only un-trimmed audio files contain an audioSourceId value. All the vendor and trimmed audio files will have an audioSourceId value of null..</param>
        public EventsAudioData(string url = default(string), string fileName = default(string), decimal? durationSecs = default(decimal?), decimal? endOffsetSeconds = default(decimal?), decimal? startOffsetSeconds = default(decimal?), string sourceCode = default(string), string startTime = default(string), string endTime = default(string), string uploadTime = default(string), decimal fileSize = default(decimal), int reportId = default(int), string ticker = default(string), string entityId = default(string), bool trimmed = default(bool), decimal? sampleRate = default(decimal?), decimal? bitrate = default(decimal?), int? audioSourceId = default(int?))
        {
            this.Url = url;
            this.FileName = fileName;
            this.DurationSecs = durationSecs;
            this.EndOffsetSeconds = endOffsetSeconds;
            this.StartOffsetSeconds = startOffsetSeconds;
            this.SourceCode = sourceCode;
            this.StartTime = startTime;
            this.EndTime = endTime;
            this.UploadTime = uploadTime;
            this.FileSize = fileSize;
            this.ReportId = reportId;
            this.Ticker = ticker;
            this.EntityId = entityId;
            this.Trimmed = trimmed;
            this.SampleRate = sampleRate;
            this.Bitrate = bitrate;
            this.AudioSourceId = audioSourceId;
        }

        /// <summary>
        /// Download link for the audio file.
        /// </summary>
        /// <value>Download link for the audio file.</value>
        [DataMember(Name = "url", EmitDefaultValue = false)]
        public string Url { get; set; }

        /// <summary>
        /// The filename of the audio file.
        /// </summary>
        /// <value>The filename of the audio file.</value>
        [DataMember(Name = "fileName", EmitDefaultValue = false)]
        public string FileName { get; set; }

        /// <summary>
        /// Total duration of the recording in seconds based on startOffsetSeconds to endOffsetSeconds.
        /// </summary>
        /// <value>Total duration of the recording in seconds based on startOffsetSeconds to endOffsetSeconds.</value>
        [DataMember(Name = "durationSecs", EmitDefaultValue = true)]
        public decimal? DurationSecs { get; set; }

        /// <summary>
        /// The delta in seconds between startTime to when FactSet marks the end of the call.
        /// </summary>
        /// <value>The delta in seconds between startTime to when FactSet marks the end of the call.</value>
        [DataMember(Name = "endOffsetSeconds", EmitDefaultValue = true)]
        public decimal? EndOffsetSeconds { get; set; }

        /// <summary>
        /// The delta in seconds between start of audio file to when FactSet marks the beginning of the call.
        /// </summary>
        /// <value>The delta in seconds between start of audio file to when FactSet marks the beginning of the call.</value>
        [DataMember(Name = "startOffsetSeconds", EmitDefaultValue = true)]
        public decimal? StartOffsetSeconds { get; set; }

        /// <summary>
        /// Identifies the method of how the event is recorded Below are the descriptions for each Source Code - * P &#x3D; Phone * W &#x3D; Webcast * V &#x3D; Vendor * I &#x3D; Webcast Replay * F &#x3D; Flash - identical to webcast; can merge with \&quot;W\&quot; in the future * R &#x3D; Replay (Phone Replay)
        /// </summary>
        /// <value>Identifies the method of how the event is recorded Below are the descriptions for each Source Code - * P &#x3D; Phone * W &#x3D; Webcast * V &#x3D; Vendor * I &#x3D; Webcast Replay * F &#x3D; Flash - identical to webcast; can merge with \&quot;W\&quot; in the future * R &#x3D; Replay (Phone Replay)</value>
        [DataMember(Name = "sourceCode", EmitDefaultValue = false)]
        public string SourceCode { get; set; }

        /// <summary>
        /// The official timestamp when FactSet begins the recording.  Note:- All the vendor and trimmed files would have default 1900-0101T00:00:00Z time stamp.
        /// </summary>
        /// <value>The official timestamp when FactSet begins the recording.  Note:- All the vendor and trimmed files would have default 1900-0101T00:00:00Z time stamp.</value>
        [DataMember(Name = "startTime", EmitDefaultValue = true)]
        public string StartTime { get; set; }

        /// <summary>
        /// The official timestamp when FactSet ends the recording.  Note:- All the vendor and trimmed files would have default 1900-0101T00:00:00Z time stamp.
        /// </summary>
        /// <value>The official timestamp when FactSet ends the recording.  Note:- All the vendor and trimmed files would have default 1900-0101T00:00:00Z time stamp.</value>
        [DataMember(Name = "endTime", EmitDefaultValue = true)]
        public string EndTime { get; set; }

        /// <summary>
        /// The official timestamp when FactSet publishes the audio file externally.
        /// </summary>
        /// <value>The official timestamp when FactSet publishes the audio file externally.</value>
        [DataMember(Name = "uploadTime", EmitDefaultValue = true)]
        public string UploadTime { get; set; }

        /// <summary>
        /// Size of the Audio file, in bytes.
        /// </summary>
        /// <value>Size of the Audio file, in bytes.</value>
        [DataMember(Name = "fileSize", EmitDefaultValue = false)]
        public decimal FileSize { get; set; }

        /// <summary>
        /// The unique ID of the audio file for an event. The same ID is used for the transcript of the same event. This report ID can also be used to map to the Event details in SDF tables.
        /// </summary>
        /// <value>The unique ID of the audio file for an event. The same ID is used for the transcript of the same event. This report ID can also be used to map to the Event details in SDF tables.</value>
        [DataMember(Name = "reportId", EmitDefaultValue = false)]
        public int ReportId { get; set; }

        /// <summary>
        /// Ticker-region identifier for the company hosting the event.  Note:- This field can have N/A value when the company is a private(non-equity company)
        /// </summary>
        /// <value>Ticker-region identifier for the company hosting the event.  Note:- This field can have N/A value when the company is a private(non-equity company)</value>
        [DataMember(Name = "ticker", EmitDefaultValue = true)]
        public string Ticker { get; set; }

        /// <summary>
        /// Factset entity level identifier for the company hosting the event.
        /// </summary>
        /// <value>Factset entity level identifier for the company hosting the event.</value>
        [DataMember(Name = "entityId", EmitDefaultValue = false)]
        public string EntityId { get; set; }

        /// <summary>
        /// The trimmed attribute helps identify if the audio is the trimmed version. Note:- All the vendor generated files are trimmed regardless of the ‘trimmed’ attribute value in the response.
        /// </summary>
        /// <value>The trimmed attribute helps identify if the audio is the trimmed version. Note:- All the vendor generated files are trimmed regardless of the ‘trimmed’ attribute value in the response.</value>
        [DataMember(Name = "trimmed", EmitDefaultValue = true)]
        public bool Trimmed { get; set; }

        /// <summary>
        /// The number of samples of audio carried per second in Kbps.  Note:- The field can have value as -1 for the audio files without sampleRate metadata
        /// </summary>
        /// <value>The number of samples of audio carried per second in Kbps.  Note:- The field can have value as -1 for the audio files without sampleRate metadata</value>
        [DataMember(Name = "sampleRate", EmitDefaultValue = true)]
        public decimal? SampleRate { get; set; }

        /// <summary>
        /// The total number of bits of information stored per second of sound in Kbps.  Note:- The field can have value as -1 for the audio files without bitrate metadata
        /// </summary>
        /// <value>The total number of bits of information stored per second of sound in Kbps.  Note:- The field can have value as -1 for the audio files without bitrate metadata</value>
        [DataMember(Name = "bitrate", EmitDefaultValue = true)]
        public decimal? Bitrate { get; set; }

        /// <summary>
        /// Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (Phone or Webcast or Vendor or Replay). One ReportID can have multiple AudioSourceIDs.  The audioSourceId identifier is available for audio calls since November 29, 2022. Note:- Only un-trimmed audio files contain an audioSourceId value. All the vendor and trimmed audio files will have an audioSourceId value of null.
        /// </summary>
        /// <value>Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from different source (Phone or Webcast or Vendor or Replay). One ReportID can have multiple AudioSourceIDs.  The audioSourceId identifier is available for audio calls since November 29, 2022. Note:- Only un-trimmed audio files contain an audioSourceId value. All the vendor and trimmed audio files will have an audioSourceId value of null.</value>
        [DataMember(Name = "audioSourceId", EmitDefaultValue = true)]
        public int? AudioSourceId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EventsAudioData {\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
            sb.Append("  FileName: ").Append(FileName).Append("\n");
            sb.Append("  DurationSecs: ").Append(DurationSecs).Append("\n");
            sb.Append("  EndOffsetSeconds: ").Append(EndOffsetSeconds).Append("\n");
            sb.Append("  StartOffsetSeconds: ").Append(StartOffsetSeconds).Append("\n");
            sb.Append("  SourceCode: ").Append(SourceCode).Append("\n");
            sb.Append("  StartTime: ").Append(StartTime).Append("\n");
            sb.Append("  EndTime: ").Append(EndTime).Append("\n");
            sb.Append("  UploadTime: ").Append(UploadTime).Append("\n");
            sb.Append("  FileSize: ").Append(FileSize).Append("\n");
            sb.Append("  ReportId: ").Append(ReportId).Append("\n");
            sb.Append("  Ticker: ").Append(Ticker).Append("\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  Trimmed: ").Append(Trimmed).Append("\n");
            sb.Append("  SampleRate: ").Append(SampleRate).Append("\n");
            sb.Append("  Bitrate: ").Append(Bitrate).Append("\n");
            sb.Append("  AudioSourceId: ").Append(AudioSourceId).Append("\n");
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
            return this.Equals(input as EventsAudioData);
        }

        /// <summary>
        /// Returns true if EventsAudioData instances are equal
        /// </summary>
        /// <param name="input">Instance of EventsAudioData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventsAudioData input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Url == input.Url ||
                    (this.Url != null &&
                    this.Url.Equals(input.Url))
                ) && 
                (
                    this.FileName == input.FileName ||
                    (this.FileName != null &&
                    this.FileName.Equals(input.FileName))
                ) && 
                (
                    this.DurationSecs == input.DurationSecs ||
                    (this.DurationSecs != null &&
                    this.DurationSecs.Equals(input.DurationSecs))
                ) && 
                (
                    this.EndOffsetSeconds == input.EndOffsetSeconds ||
                    (this.EndOffsetSeconds != null &&
                    this.EndOffsetSeconds.Equals(input.EndOffsetSeconds))
                ) && 
                (
                    this.StartOffsetSeconds == input.StartOffsetSeconds ||
                    (this.StartOffsetSeconds != null &&
                    this.StartOffsetSeconds.Equals(input.StartOffsetSeconds))
                ) && 
                (
                    this.SourceCode == input.SourceCode ||
                    (this.SourceCode != null &&
                    this.SourceCode.Equals(input.SourceCode))
                ) && 
                (
                    this.StartTime == input.StartTime ||
                    (this.StartTime != null &&
                    this.StartTime.Equals(input.StartTime))
                ) && 
                (
                    this.EndTime == input.EndTime ||
                    (this.EndTime != null &&
                    this.EndTime.Equals(input.EndTime))
                ) && 
                (
                    this.UploadTime == input.UploadTime ||
                    (this.UploadTime != null &&
                    this.UploadTime.Equals(input.UploadTime))
                ) && 
                (
                    this.FileSize == input.FileSize ||
                    this.FileSize.Equals(input.FileSize)
                ) && 
                (
                    this.ReportId == input.ReportId ||
                    this.ReportId.Equals(input.ReportId)
                ) && 
                (
                    this.Ticker == input.Ticker ||
                    (this.Ticker != null &&
                    this.Ticker.Equals(input.Ticker))
                ) && 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.Trimmed == input.Trimmed ||
                    this.Trimmed.Equals(input.Trimmed)
                ) && 
                (
                    this.SampleRate == input.SampleRate ||
                    (this.SampleRate != null &&
                    this.SampleRate.Equals(input.SampleRate))
                ) && 
                (
                    this.Bitrate == input.Bitrate ||
                    (this.Bitrate != null &&
                    this.Bitrate.Equals(input.Bitrate))
                ) && 
                (
                    this.AudioSourceId == input.AudioSourceId ||
                    (this.AudioSourceId != null &&
                    this.AudioSourceId.Equals(input.AudioSourceId))
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
                if (this.Url != null)
                {
                    hashCode = (hashCode * 59) + this.Url.GetHashCode();
                }
                if (this.FileName != null)
                {
                    hashCode = (hashCode * 59) + this.FileName.GetHashCode();
                }
                if (this.DurationSecs != null)
                {
                    hashCode = (hashCode * 59) + this.DurationSecs.GetHashCode();
                }
                if (this.EndOffsetSeconds != null)
                {
                    hashCode = (hashCode * 59) + this.EndOffsetSeconds.GetHashCode();
                }
                if (this.StartOffsetSeconds != null)
                {
                    hashCode = (hashCode * 59) + this.StartOffsetSeconds.GetHashCode();
                }
                if (this.SourceCode != null)
                {
                    hashCode = (hashCode * 59) + this.SourceCode.GetHashCode();
                }
                if (this.StartTime != null)
                {
                    hashCode = (hashCode * 59) + this.StartTime.GetHashCode();
                }
                if (this.EndTime != null)
                {
                    hashCode = (hashCode * 59) + this.EndTime.GetHashCode();
                }
                if (this.UploadTime != null)
                {
                    hashCode = (hashCode * 59) + this.UploadTime.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.FileSize.GetHashCode();
                hashCode = (hashCode * 59) + this.ReportId.GetHashCode();
                if (this.Ticker != null)
                {
                    hashCode = (hashCode * 59) + this.Ticker.GetHashCode();
                }
                if (this.EntityId != null)
                {
                    hashCode = (hashCode * 59) + this.EntityId.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Trimmed.GetHashCode();
                if (this.SampleRate != null)
                {
                    hashCode = (hashCode * 59) + this.SampleRate.GetHashCode();
                }
                if (this.Bitrate != null)
                {
                    hashCode = (hashCode * 59) + this.Bitrate.GetHashCode();
                }
                if (this.AudioSourceId != null)
                {
                    hashCode = (hashCode * 59) + this.AudioSourceId.GetHashCode();
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
