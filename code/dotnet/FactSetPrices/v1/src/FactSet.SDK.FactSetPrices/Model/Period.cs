/*
 * FactSet Prices API
 *
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.2.1
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
using OpenAPIDateConverter = FactSet.SDK.FactSetPrices.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetPrices.Model
{
    /// <summary>
    /// Period of measure for Prices High Low. This does not change display &#x60;frequency&#x60; but rather the underlying return calculation period. All periods are referencing actual periods of measure, not period-ends. For example, 1M rolling period will go back to that date the previous month, which is not always the month-end date.
    /// </summary>
    /// <value>Period of measure for Prices High Low. This does not change display &#x60;frequency&#x60; but rather the underlying return calculation period. All periods are referencing actual periods of measure, not period-ends. For example, 1M rolling period will go back to that date the previous month, which is not always the month-end date.</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum Period
    {
        /// <summary>
        /// Enum _1D for value: 1D
        /// </summary>
        [EnumMember(Value = "1D")]
        _1D = 1,

        /// <summary>
        /// Enum _1W for value: 1W
        /// </summary>
        [EnumMember(Value = "1W")]
        _1W = 2,

        /// <summary>
        /// Enum _1M for value: 1M
        /// </summary>
        [EnumMember(Value = "1M")]
        _1M = 3,

        /// <summary>
        /// Enum _3M for value: 3M
        /// </summary>
        [EnumMember(Value = "3M")]
        _3M = 4,

        /// <summary>
        /// Enum _6M for value: 6M
        /// </summary>
        [EnumMember(Value = "6M")]
        _6M = 5,

        /// <summary>
        /// Enum _52W for value: 52W
        /// </summary>
        [EnumMember(Value = "52W")]
        _52W = 6,

        /// <summary>
        /// Enum _2Y for value: 2Y
        /// </summary>
        [EnumMember(Value = "2Y")]
        _2Y = 7,

        /// <summary>
        /// Enum _3Y for value: 3Y
        /// </summary>
        [EnumMember(Value = "3Y")]
        _3Y = 8,

        /// <summary>
        /// Enum _5Y for value: 5Y
        /// </summary>
        [EnumMember(Value = "5Y")]
        _5Y = 9,

        /// <summary>
        /// Enum _10Y for value: 10Y
        /// </summary>
        [EnumMember(Value = "10Y")]
        _10Y = 10

    }

}