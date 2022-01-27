# FactSet.SDK.Symbology - the C# library for the FactSet Symbology API

The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology
types. various market symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, 
SEDOL, Tickers, and Bloomberg FIGIs. 

Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly 
harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as a point in time or for the entire
history of the requested id allowing Data Management workflows to normalize ids over time. Additionally, the Symbology API provides 
translation of market ids into Bloomberg FIGI.


This C# SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- SDK version: 0.8.0
- Build package: com.factset.sdk.codegen.FactsetCsharpNetcoreCodegen

<a name="frameworks-supported"></a>
## Frameworks supported
- .NET Core >=1.0
- .NET Framework >=4.6
- Mono/Xamarin >=vNext

<a name="dependencies"></a>
## Dependencies

- [RestSharp](https://www.nuget.org/packages/RestSharp) - 106.11.7 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 12.0.3 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.8.0 or later
- [System.ComponentModel.Annotations](https://www.nuget.org/packages/System.ComponentModel.Annotations) - 5.0.0 or later

The DLLs included in the package may not be the latest version. We recommend using [NuGet](https://docs.nuget.org/consume/installing-nuget) to obtain the latest version of the packages:
```
Install-Package RestSharp
Install-Package Newtonsoft.Json
Install-Package JsonSubTypes
Install-Package System.ComponentModel.Annotations
```

NOTE: RestSharp versions greater than 105.1.0 have a bug which causes file uploads to fail. See [RestSharp#742](https://github.com/restsharp/RestSharp/issues/742).
NOTE: RestSharp for .Net Core creates a new socket for each api call, which can lead to a socket exhaustion problem. See [RestSharp#1406](https://github.com/restsharp/RestSharp/issues/1406).

<a name="installation"></a>
## Installation
Generate the DLL using your preferred tool (e.g. `dotnet build`)

Then include the DLL (under the `bin` folder) in the C# project, and use the namespaces:
```csharp
using FactSet.SDK.Symbology.Api;
using FactSet.SDK.Symbology.Client;
using FactSet.SDK.Symbology.Model;
```
<a name="usage"></a>
## Usage

To use the API client with a HTTP proxy, setup a `System.Net.WebProxy`
```csharp
Configuration c = new Configuration();
System.Net.WebProxy webProxy = new System.Net.WebProxy("http://myProxyUrl:80/");
webProxy.Credentials = System.Net.CredentialCache.DefaultCredentials;
c.Proxy = webProxy;
```

<a name="getting-started"></a>
## Getting Started

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using FactSet.SDK.Symbology.Api;
using FactSet.SDK.Symbology.Client;
using FactSet.SDK.Symbology.Model;

namespace Example
{
    public class Example
    {
        public static void Main()
        {

            Configuration config = new Configuration();
            config.BasePath = "https://api.factset.com/content";
            // Configure HTTP basic authorization: FactSetApiKey
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";
            // Configure OAuth2 access token for authorization: FactSetOAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new BloombergFIGIApi(config);
            var bloombergTranslationRequest = new BloombergTranslationRequest(); // BloombergTranslationRequest | Request Body for Bloomberg FIGIs.

            try
            {
                // Translate market security symbols into Bloomberg Identifiers.
                BloombergTranslationResponse result = apiInstance.BatchTranslateBloomberg(bloombergTranslationRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling BloombergFIGIApi.BatchTranslateBloomberg: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }

        }
    }
}
```

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BloombergFIGIApi* | [**BatchTranslateBloomberg**](docs/BloombergFIGIApi.md#batchtranslatebloomberg) | **POST** /symbology/v1/bloomberg | Translate market security symbols into Bloomberg Identifiers.
*BloombergFIGIApi* | [**TranslateBloomberg**](docs/BloombergFIGIApi.md#translatebloomberg) | **GET** /symbology/v1/bloomberg | Translate FactSet symbols into Bloomberg Identifiers.
*CUSIPApi* | [**BatchCusipHistory**](docs/CUSIPApi.md#batchcusiphistory) | **POST** /symbology/v1/cusip-history | Retrieve the full history of CUSIP changes for the requested ID(s).
*CUSIPApi* | [**BatchTranslateCusips**](docs/CUSIPApi.md#batchtranslatecusips) | **POST** /symbology/v1/cusip | Translate market security symbols into CUSIP.
*CUSIPApi* | [**CusipHistory**](docs/CUSIPApi.md#cusiphistory) | **GET** /symbology/v1/cusip-history | Retrieve the full history of CUSIP changes for the requested ID(s).
*CUSIPApi* | [**TranslateCusip**](docs/CUSIPApi.md#translatecusip) | **GET** /symbology/v1/cusip | Translate market security symbols into CUSIP.
*FactSetApi* | [**BatchTranslateFactset**](docs/FactSetApi.md#batchtranslatefactset) | **POST** /symbology/v1/factset | Translate market security symbols into FactSet Permanent Identifiers.
*FactSetApi* | [**TranslateFactset**](docs/FactSetApi.md#translatefactset) | **GET** /symbology/v1/factset | Translate market security symbols into FactSet Permanent Identifiers.
*ISINApi* | [**BatchIsinHistory**](docs/ISINApi.md#batchisinhistory) | **POST** /symbology/v1/isin-history | Retrieve the full history or as of a specific date of ISIN changes for a requested ID.
*ISINApi* | [**BatchTranslateIsin**](docs/ISINApi.md#batchtranslateisin) | **POST** /symbology/v1/isin | Translate market security symbols into ISIN.
*ISINApi* | [**IsinHistory**](docs/ISINApi.md#isinhistory) | **GET** /symbology/v1/isin-history | Retrieve the full history or as of a specific date of ISIN changes for the requested ID(s).
*ISINApi* | [**TranslateIsin**](docs/ISINApi.md#translateisin) | **GET** /symbology/v1/isin | Translate market security symbols into ISIN.
*SEDOLApi* | [**BatchSedolHistory**](docs/SEDOLApi.md#batchsedolhistory) | **POST** /symbology/v1/sedol-history | Retrieve the full history SEDOL changes for a requested ID.
*SEDOLApi* | [**BatchTranslateSedol**](docs/SEDOLApi.md#batchtranslatesedol) | **POST** /symbology/v1/sedol | Translate market security symbols into SEDOL.
*SEDOLApi* | [**SedolHistory**](docs/SEDOLApi.md#sedolhistory) | **GET** /symbology/v1/sedol-history | Retrieve the full history of SEDOL changes for the requested ID(s).
*SEDOLApi* | [**TranslateSedol**](docs/SEDOLApi.md#translatesedol) | **GET** /symbology/v1/sedol | Translate market security symbols into SEDOL.
*TickerApi* | [**BatchTickerHistory**](docs/TickerApi.md#batchtickerhistory) | **POST** /symbology/v1/ticker-history | Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security.
*TickerApi* | [**BatchTranslateTicker**](docs/TickerApi.md#batchtranslateticker) | **POST** /symbology/v1/ticker | Returns the Ticker-Exchange or Ticker-Region for a given security.
*TickerApi* | [**TickerHistory**](docs/TickerApi.md#tickerhistory) | **GET** /symbology/v1/ticker-history | Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security.
*TickerApi* | [**TranslateTicker**](docs/TickerApi.md#translateticker) | **GET** /symbology/v1/ticker | Returns the Ticker-Exchange or Ticker-Region for a given security.


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.BloombergTranslation](docs/BloombergTranslation.md)
 - [Model.BloombergTranslationRequest](docs/BloombergTranslationRequest.md)
 - [Model.BloombergTranslationResponse](docs/BloombergTranslationResponse.md)
 - [Model.CusipHistoryTranslation](docs/CusipHistoryTranslation.md)
 - [Model.CusipHistoryTranslationRequest](docs/CusipHistoryTranslationRequest.md)
 - [Model.CusipHistoryTranslationResponse](docs/CusipHistoryTranslationResponse.md)
 - [Model.CusipTranslation](docs/CusipTranslation.md)
 - [Model.CusipTranslationRequest](docs/CusipTranslationRequest.md)
 - [Model.CusipTranslationResponse](docs/CusipTranslationResponse.md)
 - [Model.ErrorResponse](docs/ErrorResponse.md)
 - [Model.ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [Model.FactsetTranslation](docs/FactsetTranslation.md)
 - [Model.FactsetTranslationRequest](docs/FactsetTranslationRequest.md)
 - [Model.FactsetTranslationResponse](docs/FactsetTranslationResponse.md)
 - [Model.IsinHistoryTranslation](docs/IsinHistoryTranslation.md)
 - [Model.IsinHistoryTranslationRequest](docs/IsinHistoryTranslationRequest.md)
 - [Model.IsinHistoryTranslationResponse](docs/IsinHistoryTranslationResponse.md)
 - [Model.IsinTranslation](docs/IsinTranslation.md)
 - [Model.IsinTranslationRequest](docs/IsinTranslationRequest.md)
 - [Model.IsinTranslationResponse](docs/IsinTranslationResponse.md)
 - [Model.SedolHistoryTranslation](docs/SedolHistoryTranslation.md)
 - [Model.SedolHistoryTranslationRequest](docs/SedolHistoryTranslationRequest.md)
 - [Model.SedolHistoryTranslationResponse](docs/SedolHistoryTranslationResponse.md)
 - [Model.SedolTranslation](docs/SedolTranslation.md)
 - [Model.SedolTranslationRequest](docs/SedolTranslationRequest.md)
 - [Model.SedolTranslationResponse](docs/SedolTranslationResponse.md)
 - [Model.TickerHistoryTranslation](docs/TickerHistoryTranslation.md)
 - [Model.TickerHistoryTranslationRequest](docs/TickerHistoryTranslationRequest.md)
 - [Model.TickerHistoryTranslationResponse](docs/TickerHistoryTranslationResponse.md)
 - [Model.TickerTranslation](docs/TickerTranslation.md)
 - [Model.TickerTranslationRequest](docs/TickerTranslationRequest.md)
 - [Model.TickerTranslationResponse](docs/TickerTranslationResponse.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="FactSetApiKey"></a>
### FactSetApiKey

- **Type**: HTTP basic authentication

<a name="FactSetOAuth2"></a>
### FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
