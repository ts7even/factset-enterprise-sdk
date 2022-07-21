<img alt="FactSet" src="https://www.factset.com/hubfs/Assets/images/factset-logo.svg" height="56" width="290">

# FactSet Intraday Tick History client library for .NET

[![Nuget](https://img.shields.io/nuget/v/FactSet.SDK.FactSetIntradayTickHistory)](https://www.nuget.org/packages/FactSet.SDK.FactSetIntradayTickHistory)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)


<p>FactSet’s Tick History provides cost-effective access to real-time and delayed global exchange data. Proprietary technology normalizes over 200 global exchanges and 19 tick history fields. Asset types integrated include equities, futures, options, fixed income, mutual funds, ETFs, indices, commodities, and FX rates.</p><p>Tick History provides dynamic access to tick data for a specific security intra-day or historically via standard HTTPS protocol. History is available for all quotes and trades for a trailing 6 months or 1-year, respectively. Quotes and trade data for Options is available for 30 days. Tick History data is also available in a separate end-of-day feed.</p>
 


This .NET package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.21.0
- Build package: com.factset.sdk.codegen.FactSetCSharpNetCoreClientCodegen

## Requirements

* .NET Standard >= 2.0

## Installation

### .NET CLI

```bash
dotnet add package FactSet.SDK.Utils
dotnet add package FactSet.SDK.FactSetIntradayTickHistory
```

### NuGet

```bash
nuget install FactSet.SDK.Utils
nuget install FactSet.SDK.FactSetIntradayTickHistory
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup [.NET Standard 2.0](https://docs.microsoft.com/en-us/dotnet/standard/net-standard?tabs=net-standard-2-0) compatible environment.
3. [Install dependencies](#installation).
4. Run the following:

```csharp

using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.FactSetIntradayTickHistory.Api;
using FactSet.SDK.FactSetIntradayTickHistory.Client;
using FactSet.SDK.FactSetIntradayTickHistory.Model;

namespace Example
{
    public static class TickHistoryFirsttradeGetExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.FactSetIntradayTickHistory.Client.Configuration();

            // Examples for each supported authentication method are below,
            // choose one that satisfies your use case.

            /* (Preferred) OAuth 2.0: FactSetOAuth2 */
            // See https://github.com/FactSet/enterprise-sdk#oauth-20
            // for information on how to create the app-config.json file
            // See https://github.com/FactSet/enterprise-sdk-utils-dotnet#authentication
            // for more information on using the ConfidentialClient class
            ConfidentialClient confidentialClient = await ConfidentialClient.CreateAsync("/path/to/app-config.json");
            config.OAuth2Client = confidentialClient;

            /* Basic authentication: FactSetApiKey */
            // See https://github.com/FactSet/enterprise-sdk#api-key
            // for information how to create an API key
            // config.Username = "USERNAME-SERIAL";
            // config.Password = "API-KEY";

            var apiInstance = new FirstTradeApi(config);
            var id = "id_example";  // string | Requested symbol or security. The symbol can be a FactSet exchange symbol, CUSIP, or SEDOL. **NOTE**: Only one identifier can be requested per request.<P>**TRY IT OUT** - Choose One from - BABA-USA,WALMEX-MX,7203-TKS,VOD-LON,NPN-JSE,MABAX,NZF,SPY-USA,AGG-USA,GLD-USA,AOR-USA,MNA-USA,UUP-USA,SP50-SPX,ESX-STX,XAO-ASX,WD-MSX,NG00-USA,GC00-USA,CC00-USA,C00-USA,FC00-USA,ER00-USA,EURUSD-FX1,USDMXN-FX1,AUDJPY-FX1,EURCZK-FX1,USDILS-FX1,USDZAR-FX1,US10YY-TU1,FDS#190621C00145000-USA,FDS#190621P00145000-USA
            var reqId = "reqId_example";  // string | Request Identification String. Can be used by the application to keep track of requests. The id is not used by this service, however, it is included in the XML response. (optional) 
            var startDate = "startDate_example";  // string | This is the start date for the Snapshot History. Requests should be made in the format YYYYMMDD Default is current business day. Field can be sd or date. TRY IT OUT Cannot use current day. (optional) 
            var startTime = "\"040000\"";  // string | This is the start time for the snapshot history requested. Requests should be made in a **HHMMSSS** format.Range from 000000 - 235959. **TRY IT OUT** Cannot use current day (optional)  (default to "040000")
            var format = "XML";  // string | The format of the output file. TRY IT OUT Choose from JSON, CSV, CSV_NO_HEADER (optional)  (default to XML)
            var includeRequest = "true";  // string | Flag to include request id and key in the CSV output. (optional)  (default to false)
            var dataset = "";  // string | Decides what type of trades to return, default is all trades and quotes, alternatively charting can be selected which will filter out unofficial trades. (optional) 

            try
            {
                // Request returns data for the first trade (official and unofficial) after the specified time
                TickhistoryResponse result = apiInstance.TickHistoryFirsttradeGet(id, reqId, startDate, startTime, format, includeRequest, dataset);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling FirstTradeApi.TickHistoryFirsttradeGet: " + e.Message );
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
        }
    }
}

```

### Using a Proxy

To use the API client with a HTTP proxy, setup a `System.Net.WebProxy`

```csharp
Configuration c = new Configuration();
System.Net.WebProxy webProxy = new System.Net.WebProxy("http://myProxyUrl:80/");
webProxy.Credentials = System.Net.CredentialCache.DefaultCredentials;
c.Proxy = webProxy;
```

## Documentation for API Endpoints

All URIs are relative to *https://api-sandbox.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*FirstTradeApi* | [**TickHistoryFirsttradeGet**](docs/FirstTradeApi.md#tickhistoryfirsttradeget) | **GET** /TickHistory/firsttrade | Request returns data for the first trade (official and unofficial) after the specified time
*LastTradeApi* | [**TickHistoryLasttradeGet**](docs/LastTradeApi.md#tickhistorylasttradeget) | **GET** /TickHistory/lasttrade | Request returns data for the last trade and associated quotes before the specified time
*QuoteAtTimeApi* | [**TickHistoryQatGet**](docs/QuoteAtTimeApi.md#tickhistoryqatget) | **GET** /TickHistory/qat | Request returns a quote at the specified time
*TickHistoryApi* | [**GetTickHistory**](docs/TickHistoryApi.md#gettickhistory) | **GET** /TickHistory/history | Tick History service returns trade data and associated quotes for a client specified interval and time period
*TradesAtTimeApi* | [**TickHistoryTradesattimeGet**](docs/TradesAtTimeApi.md#tickhistorytradesattimeget) | **GET** /TickHistory/tradesattime | Request returns the before and after trade data along with the associated quotes for the specified time


## Documentation for Models

 - [Model.Fields](docs/Fields.md)
 - [Model.Intervals](docs/Intervals.md)
 - [Model.Specialfield](docs/Specialfield.md)
 - [Model.TickhistoryResponse](docs/TickhistoryResponse.md)


## Documentation for Authorization


### FactSetApiKey

- **Type**: HTTP basic authentication


### FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Contributing

Please refer to the [contributing guide](../../../../CONTRIBUTING.md).

## Copyright

Copyright 2022 FactSet Research Systems Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.