# FactSet.SDK.FactSetOwnership - the C# library for the FactSet Ownership API

FactSet’s Fund Ownership API gives access to both **Holdings** and **Holders** data.<p> Factset's Holdings endpoints gives access to all the underlying securities and their position detils held within a given fund. Fund Types supported include Open-End Mutual Funds, Closed-end Mutual Funds, and Exchange Traded Funds. Security Holders information retrieves all \"holder types\" and their positions across institutions, funds, insiders, and stakeholders.</p><p>The FactSet Ownership and Mutual Funds database collects global equity ownership data for approximately 50,000 institutions, 60,000 unique Mutual Fund portfolios, and 400,000 Insider/Stake holders from around 110 countries.  For more details review our [Data Collection](https://my.apps.factset.com/oa/cms/oaAttachment/87e162be-f2d1-4f40-a85b-bfb1b020d270/20079) methodology. </p>


This C# SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.0
- SDK version: 0.9.0
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
using FactSet.SDK.FactSetOwnership.Api;
using FactSet.SDK.FactSetOwnership.Client;
using FactSet.SDK.FactSetOwnership.Model;
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
using FactSet.SDK.FactSetOwnership.Api;
using FactSet.SDK.FactSetOwnership.Client;
using FactSet.SDK.FactSetOwnership.Model;

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

            var apiInstance = new FundHoldingsApi(config);
            var ids = new List<string>(); // List<string> | List of requested fund identifiers. <p>***ids limit** =  10 per request*</p>
            var date = 2019-12-31;  // string | Date of holdings expressed in YYYY-MM-DD format. The fund-holdings endpoint will default to latest month-end close. (optional) 
            var topn = 5;  // string | Limits number of holdings or holders displayed by the top *n* securities based on positions Market Value. Default is ALL, otherwise use number to limit number. (optional)  (default to "ALL")
            var assetType = EQ;  // string | Filter holdings by the following major asset classes -   * **EQ**  = Equity   * **FI** = Fixed Income   * **ALL** = ALL  (optional)  (default to EQ)
            var currency = USD;  // string | Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470). (optional) 

            try
            {
                // Get underlying holdings information for a requested fund identifer.
                FundHoldingsResponse result = apiInstance.GetOwnershipHoldings(ids, date, topn, assetType, currency);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FundHoldingsApi.GetOwnershipHoldings: " + e.Message );
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
*FundHoldingsApi* | [**GetOwnershipHoldings**](docs/FundHoldingsApi.md#getownershipholdings) | **GET** /factset-ownership/v1/fund-holdings | Get underlying holdings information for a requested fund identifer.
*FundHoldingsApi* | [**PostOwnershipHoldings**](docs/FundHoldingsApi.md#postownershipholdings) | **POST** /factset-ownership/v1/fund-holdings | Get holdings for a list of funds.
*SecurityHoldersApi* | [**GetSecurityHolders**](docs/SecurityHoldersApi.md#getsecurityholders) | **GET** /factset-ownership/v1/security-holders | Get security ownership data for requested security identifers.
*SecurityHoldersApi* | [**PostSecurityHolders**](docs/SecurityHoldersApi.md#postsecurityholders) | **POST** /factset-ownership/v1/security-holders | Get security ownership data for a list of requested securities.


<a name="documentation-for-models"></a>
## Documentation for Models

 - [Model.AssetType](docs/AssetType.md)
 - [Model.ErrorResponse](docs/ErrorResponse.md)
 - [Model.ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [Model.FundHolding](docs/FundHolding.md)
 - [Model.FundHoldingsRequest](docs/FundHoldingsRequest.md)
 - [Model.FundHoldingsResponse](docs/FundHoldingsResponse.md)
 - [Model.HolderType](docs/HolderType.md)
 - [Model.SecurityHolders](docs/SecurityHolders.md)
 - [Model.SecurityHoldersRequest](docs/SecurityHoldersRequest.md)
 - [Model.SecurityHoldersResponse](docs/SecurityHoldersResponse.md)


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
