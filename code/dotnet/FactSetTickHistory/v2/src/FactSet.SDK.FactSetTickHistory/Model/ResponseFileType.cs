/*
 * Tick History
 *
 * Tick History provides dynamic access to historical tick data for a specific security for specific dates or date range.
 *
 * The version of the OpenAPI document: 2.0.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetTickHistory.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetTickHistory.Model
{
    /// <summary>
    /// Specifies the fileType
    /// </summary>
    /// <value>Specifies the fileType</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ResponseFileType
    {
        /// <summary>
        /// Enum Csv for value: csv
        /// </summary>
        [EnumMember(Value = "csv")]
        Csv = 1,

        /// <summary>
        /// Enum Parquet for value: parquet
        /// </summary>
        [EnumMember(Value = "parquet")]
        Parquet = 2

    }

}
