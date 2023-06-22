/*
 * FactSet Benchmarks API
 *
 * FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon. 
 *
 * The version of the OpenAPI document: 1.8.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetBenchmarks.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetBenchmarks.Model
{
    /// <summary>
    /// The return type adjustment used in returns response items. Adjustment can be made for GROSS and NET dividends that will be included in the return calculation. The service will default to GROSS.
    /// </summary>
    /// <value>The return type adjustment used in returns response items. Adjustment can be made for GROSS and NET dividends that will be included in the return calculation. The service will default to GROSS.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum ReturnType
    {
        /// <summary>
        /// Enum GROSS for value: GROSS
        /// </summary>
        [EnumMember(Value = "GROSS")]
        GROSS = 1,

        /// <summary>
        /// Enum NET for value: NET
        /// </summary>
        [EnumMember(Value = "NET")]
        NET = 2

    }

}
