# FactSet.SDK.BarraPortfolioOptimizer - the C# library for the Barra Portfolio Optimizer API

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
using FactSet.SDK.BarraPortfolioOptimizer.Api;
using FactSet.SDK.BarraPortfolioOptimizer.Client;
using FactSet.SDK.BarraPortfolioOptimizer.Model;
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
using FactSet.SDK.BarraPortfolioOptimizer.Api;
using FactSet.SDK.BarraPortfolioOptimizer.Client;
using FactSet.SDK.BarraPortfolioOptimizer.Model;

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

            var apiInstance = new AccountsApi(config);
            var path = path_example;  // string | The directory to get the accounts and sub-directories in (default to "Client:Foo/Bar")

            try
            {
                // Get accounts and sub-directories in a directory
                AccountDirectoriesRoot result = apiInstance.GetAccounts(path);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountsApi.GetAccounts: " + e.Message );
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
*AccountsApi* | [**GetAccounts**](docs/AccountsApi.md#getaccounts) | **GET** /analytics/lookups/v3/accounts/{path} | Get accounts and sub-directories in a directory
*BPMOptimizerApi* | [**CancelOptimizationById**](docs/BPMOptimizerApi.md#canceloptimizationbyid) | **DELETE** /analytics/engines/bpm/v3/optimizations/{id} | Cancel BPM optimization by id
*BPMOptimizerApi* | [**GetOptimizationParameters**](docs/BPMOptimizerApi.md#getoptimizationparameters) | **GET** /analytics/engines/bpm/v3/optimizations/{id} | Get BPM optimization parameters by id
*BPMOptimizerApi* | [**GetOptimizationResult**](docs/BPMOptimizerApi.md#getoptimizationresult) | **GET** /analytics/engines/bpm/v3/optimizations/{id}/result | Get BPM optimization result by id
*BPMOptimizerApi* | [**GetOptimizationStatusById**](docs/BPMOptimizerApi.md#getoptimizationstatusbyid) | **GET** /analytics/engines/bpm/v3/optimizations/{id}/status | Get BPM optimization status by id
*BPMOptimizerApi* | [**PostAndOptimize**](docs/BPMOptimizerApi.md#postandoptimize) | **POST** /analytics/engines/bpm/v3/optimizations | Create and Run BPM optimization
*BPMOptimizerApi* | [**PutAndOptimize**](docs/BPMOptimizerApi.md#putandoptimize) | **PUT** /analytics/engines/bpm/v3/optimizations/{id} | Create or Update BPM optimization and run it.
*CurrenciesApi* | [**GetCurrencies**](docs/CurrenciesApi.md#getcurrencies) | **GET** /analytics/lookups/v3/currencies | Get currencies
*StrategyDocumentsApi* | [**GetBarraStrategyDocuments**](docs/StrategyDocumentsApi.md#getbarrastrategydocuments) | **GET** /analytics/engines/bpm/v3/strategies/{path} | Get Barra strategy documents and sub-directories in a directory


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.AccountDirectories](docs/AccountDirectories.md)
 - [Model.AccountDirectoriesRoot](docs/AccountDirectoriesRoot.md)
 - [Model.BPMOptimization](docs/BPMOptimization.md)
 - [Model.BPMOptimizationParameters](docs/BPMOptimizationParameters.md)
 - [Model.BPMOptimizationParametersRoot](docs/BPMOptimizationParametersRoot.md)
 - [Model.BPMOptimizerStrategy](docs/BPMOptimizerStrategy.md)
 - [Model.BPMOptimizerStrategyAlphaOverride](docs/BPMOptimizerStrategyAlphaOverride.md)
 - [Model.BPMOptimizerStrategyOverrides](docs/BPMOptimizerStrategyOverrides.md)
 - [Model.CalculationInfo](docs/CalculationInfo.md)
 - [Model.CalculationInfoRoot](docs/CalculationInfoRoot.md)
 - [Model.ClientErrorResponse](docs/ClientErrorResponse.md)
 - [Model.ConstraintAction](docs/ConstraintAction.md)
 - [Model.Currency](docs/Currency.md)
 - [Model.CurrencyRoot](docs/CurrencyRoot.md)
 - [Model.DocumentDirectories](docs/DocumentDirectories.md)
 - [Model.DocumentDirectoriesRoot](docs/DocumentDirectoriesRoot.md)
 - [Model.Error](docs/Error.md)
 - [Model.ErrorSource](docs/ErrorSource.md)
 - [Model.ObjectRoot](docs/ObjectRoot.md)
 - [Model.OptimalPortfolio](docs/OptimalPortfolio.md)
 - [Model.OptimizerAccount](docs/OptimizerAccount.md)
 - [Model.OptimizerAccountOverrides](docs/OptimizerAccountOverrides.md)
 - [Model.OptimizerOptimalHoldings](docs/OptimizerOptimalHoldings.md)
 - [Model.OptimizerOutputTypes](docs/OptimizerOutputTypes.md)
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
