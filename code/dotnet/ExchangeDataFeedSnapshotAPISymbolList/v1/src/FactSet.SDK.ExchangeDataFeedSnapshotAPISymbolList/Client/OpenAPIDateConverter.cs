/*
 * Exchange DataFeed Snapshot
 *
 * FactSet’s Exchange DataFeed Snapshot API provides cost-effective access to real-time and delayed global exchange data. Proprietary technology normalizes over 200 global exchanges and 150+ data fields. Asset types integrated include equities, futures, options, warrants, fixed income, mutual funds, ETFs, indices, commodities, and FX rates. <p>Cutting-edge technology ensures reliability and provides scalability that allow applications to request multiple items at a time. To simplify client-side development an entire response can be placed in a matrix or table for effortless integration into internal and external applications. Using specified output formats (CSV, XML, JSON) receive all standard fields by default or customize the list based on specific needs.</p></p>Below are the current hosts:</p><p>Production: api.factset.com<p>Sandbox: api-sandbox.factset.com</p>
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using Newtonsoft.Json.Converters;

namespace FactSet.SDK.ExchangeDataFeedSnapshotAPISymbolList.Client
{
    /// <summary>
    /// Formatter for 'date' openapi formats ss defined by full-date - RFC3339
    /// see https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#data-types
    /// </summary>
    public class OpenAPIDateConverter : IsoDateTimeConverter
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OpenAPIDateConverter" /> class.
        /// </summary>
        public OpenAPIDateConverter()
        {
            // full-date   = date-fullyear "-" date-month "-" date-mday
            DateTimeFormat = "yyyy-MM-dd";
        }
    }
}