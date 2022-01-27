# FactSet.SDK.AxiomaEquityOptimizer - the C# library for the Axioma Equity API

Allow clients to fetch Analytics through APIs.

This C# SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3
- SDK version: 0.9.0
- Build package: com.factset.sdk.codegen.FactsetCsharpNetcoreCodegen
    For more information, please visit [https://developer.factset.com/contact](https://developer.factset.com/contact)

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
using FactSet.SDK.AxiomaEquityOptimizer.Api;
using FactSet.SDK.AxiomaEquityOptimizer.Client;
using FactSet.SDK.AxiomaEquityOptimizer.Model;
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
using FactSet.SDK.AxiomaEquityOptimizer.Api;
using FactSet.SDK.AxiomaEquityOptimizer.Client;
using FactSet.SDK.AxiomaEquityOptimizer.Model;

namespace Example
{
    public class Example
    {
        public static void Main()
        {

            Configuration config = new Configuration();
            config.BasePath = "https://api.factset.com";
            // Configure HTTP basic authorization: FactSetApiKey
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";
            // Configure OAuth2 access token for authorization: FactSetOAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AXPOptimizerApi(config);
            var id = id_example;  // string | from url, provided from the location header in the Create and Run Axioma optimization endpoint

            try
            {
                // Cancel Axioma optimization by id
                apiInstance.CancelOptimizationById(id);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AXPOptimizerApi.CancelOptimizationById: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }

        }
    }
}
```

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AXPOptimizerApi* | [**CancelOptimizationById**](docs/AXPOptimizerApi.md#canceloptimizationbyid) | **DELETE** /analytics/engines/axp/v3/optimizations/{id} | Cancel Axioma optimization by id
*AXPOptimizerApi* | [**GetOptimizationParameters**](docs/AXPOptimizerApi.md#getoptimizationparameters) | **GET** /analytics/engines/axp/v3/optimizations/{id} | Get Axioma optimization parameters by id
*AXPOptimizerApi* | [**GetOptimizationResult**](docs/AXPOptimizerApi.md#getoptimizationresult) | **GET** /analytics/engines/axp/v3/optimizations/{id}/result | Get Axioma optimization result by id
*AXPOptimizerApi* | [**GetOptimizationStatusById**](docs/AXPOptimizerApi.md#getoptimizationstatusbyid) | **GET** /analytics/engines/axp/v3/optimizations/{id}/status | Get Axioma optimization status by id
*AXPOptimizerApi* | [**PostAndOptimize**](docs/AXPOptimizerApi.md#postandoptimize) | **POST** /analytics/engines/axp/v3/optimizations | Create and Run Axioma optimization
*AXPOptimizerApi* | [**PutAndOptimize**](docs/AXPOptimizerApi.md#putandoptimize) | **PUT** /analytics/engines/axp/v3/optimizations/{id} | Create or Update Axioma optimization and run it.
*AccountsApi* | [**GetAccounts**](docs/AccountsApi.md#getaccounts) | **GET** /analytics/lookups/v3/accounts/{path} | Get accounts and sub-directories in a directory
*CurrenciesApi* | [**GetCurrencies**](docs/CurrenciesApi.md#getcurrencies) | **GET** /analytics/lookups/v3/currencies | Get currencies
*StrategyDocumentsApi* | [**GetAxiomaEquityStrategyDocuments**](docs/StrategyDocumentsApi.md#getaxiomaequitystrategydocuments) | **GET** /analytics/engines/axp/v3/strategies/{path} | Get Axioma Equity strategy documents and sub-directories in a directory


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.AccountDirectories](docs/AccountDirectories.md)
 - [Model.AccountDirectoriesRoot](docs/AccountDirectoriesRoot.md)
 - [Model.AxiomaEquityOptimizationParameters](docs/AxiomaEquityOptimizationParameters.md)
 - [Model.AxiomaEquityOptimizationParametersRoot](docs/AxiomaEquityOptimizationParametersRoot.md)
 - [Model.CalculationInfo](docs/CalculationInfo.md)
 - [Model.CalculationInfoRoot](docs/CalculationInfoRoot.md)
 - [Model.ClientErrorResponse](docs/ClientErrorResponse.md)
 - [Model.Currency](docs/Currency.md)
 - [Model.CurrencyRoot](docs/CurrencyRoot.md)
 - [Model.DocumentDirectories](docs/DocumentDirectories.md)
 - [Model.DocumentDirectoriesRoot](docs/DocumentDirectoriesRoot.md)
 - [Model.Error](docs/Error.md)
 - [Model.ErrorSource](docs/ErrorSource.md)
 - [Model.ObjectRoot](docs/ObjectRoot.md)
 - [Model.OptimalPortfolio](docs/OptimalPortfolio.md)
 - [Model.Optimization](docs/Optimization.md)
 - [Model.OptimizerAccount](docs/OptimizerAccount.md)
 - [Model.OptimizerAccountOverrides](docs/OptimizerAccountOverrides.md)
 - [Model.OptimizerOptimalHoldings](docs/OptimizerOptimalHoldings.md)
 - [Model.OptimizerOutputTypes](docs/OptimizerOutputTypes.md)
 - [Model.OptimizerStrategy](docs/OptimizerStrategy.md)
 - [Model.OptimizerStrategyOverrides](docs/OptimizerStrategyOverrides.md)
 - [Model.OptimizerTradesList](docs/OptimizerTradesList.md)


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
