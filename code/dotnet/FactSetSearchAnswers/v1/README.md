<img alt="FactSet" src="https://www.factset.com/hubfs/Assets/images/factset-logo.svg" height="56" width="290">

# FactSet Search Answers client library for .NET

[![Nuget](https://img.shields.io/nuget/v/FactSet.SDK.FactSetSearchAnswers)](https://www.nuget.org/packages/FactSet.SDK.FactSetSearchAnswers)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.

This .NET package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.9.1
- Build package: com.factset.sdk.codegen.FactsetCsharpNetcoreCodegen

## Requirements

* .NET Standard >= 2.0

## Installation

### .NET CLI

```bash
dotnet add package FactSet.SDK.Utils
dotnet add package FactSet.SDK.FactSetSearchAnswers
```

### NuGet

```bash
nuget install FactSet.SDK.Utils
nuget install FactSet.SDK.FactSetSearchAnswers
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
using FactSet.SDK.FactSetSearchAnswers.Api;
using FactSet.SDK.FactSetSearchAnswers.Client;
using FactSet.SDK.FactSetSearchAnswers.Model;

namespace Example
{ 
    public static class SearchForAdaptiveCardAnswerExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.PAEngine.Client.Configuration();

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

            var apiInstance = new AnswersApi(config);
            var query = query_example;  // string | Query for desired answer (e.g., \"fds price\")
            var includeThumbnail = true;  // bool? | Includes thumbnail of Adaptive Card in response (optional)  (default to false)
            var disableNoAnswerResponses = true;  // bool? | Disables no-result answer responses (no-results and answer without data) (optional)  (default to true)

            try
            {
                // Fetch FactSet answer in Adaptive Card format
                AdaptiveCardAnswerSuccessResponse result = apiInstance.SearchForAdaptiveCardAnswer(query, includeThumbnail, disableNoAnswerResponses);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling AnswersApi.SearchForAdaptiveCardAnswer: " + e.Message );
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

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AnswersApi* | [**SearchForAdaptiveCardAnswer**](docs/AnswersApi.md#searchforadaptivecardanswer) | **GET** /search/answers/v1/adaptive-card | Fetch FactSet answer in Adaptive Card format
*AnswersApi* | [**SearchForDataAnswer**](docs/AnswersApi.md#searchfordataanswer) | **GET** /search/answers/v1/data | Fetch FactSet answer in data format


## Documentation for Models

 - [Model.AdaptiveCardAnswerSuccessResponse](docs/AdaptiveCardAnswerSuccessResponse.md)
 - [Model.AdaptiveCardDataItem](docs/AdaptiveCardDataItem.md)
 - [Model.AdaptiveCardWithThumbnail](docs/AdaptiveCardWithThumbnail.md)
 - [Model.Answer](docs/Answer.md)
 - [Model.AnswerAllOf](docs/AnswerAllOf.md)
 - [Model.AnswerFailureResponse](docs/AnswerFailureResponse.md)
 - [Model.AnswerWithoutData](docs/AnswerWithoutData.md)
 - [Model.AnswerWithoutDataAllOf](docs/AnswerWithoutDataAllOf.md)
 - [Model.AnswerWithoutDataAllOfTemplateData](docs/AnswerWithoutDataAllOfTemplateData.md)
 - [Model.ApplicationLink](docs/ApplicationLink.md)
 - [Model.ChangeColor](docs/ChangeColor.md)
 - [Model.ColoredValue](docs/ColoredValue.md)
 - [Model.ColoredValueLabelDateTemplate](docs/ColoredValueLabelDateTemplate.md)
 - [Model.ColoredValueLabelDateTemplateAllOf](docs/ColoredValueLabelDateTemplateAllOf.md)
 - [Model.CountryID](docs/CountryID.md)
 - [Model.DataAnswer](docs/DataAnswer.md)
 - [Model.DataAnswerData](docs/DataAnswerData.md)
 - [Model.DataAnswerSuccessResponse](docs/DataAnswerSuccessResponse.md)
 - [Model.DataPair](docs/DataPair.md)
 - [Model.Error](docs/Error.md)
 - [Model.ErrorLink](docs/ErrorLink.md)
 - [Model.ErrorSource](docs/ErrorSource.md)
 - [Model.Fdc3Context](docs/Fdc3Context.md)
 - [Model.Fdc3Country](docs/Fdc3Country.md)
 - [Model.Fdc3Instrument](docs/Fdc3Instrument.md)
 - [Model.InstrumentID](docs/InstrumentID.md)
 - [Model.LabelValueChangeLabelValueChangeTemplate](docs/LabelValueChangeLabelValueChangeTemplate.md)
 - [Model.LabelValueChangeLabelValueChangeTemplateAllOf](docs/LabelValueChangeLabelValueChangeTemplateAllOf.md)
 - [Model.LinkTextBlockTemplate](docs/LinkTextBlockTemplate.md)
 - [Model.LinkTextBlockTemplateAllOf](docs/LinkTextBlockTemplateAllOf.md)
 - [Model.NoAnswersFound](docs/NoAnswersFound.md)
 - [Model.NoAnswersFoundAllOf](docs/NoAnswersFoundAllOf.md)
 - [Model.PercentChange](docs/PercentChange.md)
 - [Model.PercentChangeLabelTemplate](docs/PercentChangeLabelTemplate.md)
 - [Model.PercentChangeLabelTemplateAllOf](docs/PercentChangeLabelTemplateAllOf.md)
 - [Model.RankedTable](docs/RankedTable.md)
 - [Model.RankedTableEntity](docs/RankedTableEntity.md)
 - [Model.RankedTableRow](docs/RankedTableRow.md)
 - [Model.RankedTableTemplate](docs/RankedTableTemplate.md)
 - [Model.RankedTableTemplateAllOf](docs/RankedTableTemplateAllOf.md)
 - [Model.Table](docs/Table.md)
 - [Model.TableTableTemplate](docs/TableTableTemplate.md)
 - [Model.TableTableTemplateAllOf](docs/TableTableTemplateAllOf.md)
 - [Model.TableTemplate](docs/TableTemplate.md)
 - [Model.TableTemplateAllOf](docs/TableTemplateAllOf.md)
 - [Model.Template](docs/Template.md)
 - [Model.TemplateData](docs/TemplateData.md)
 - [Model.TemplateWithLinks](docs/TemplateWithLinks.md)
 - [Model.TemplateWithLinksAllOf](docs/TemplateWithLinksAllOf.md)
 - [Model.TextBlockFootingTemplate](docs/TextBlockFootingTemplate.md)
 - [Model.TextBlockFootingTemplateAllOf](docs/TextBlockFootingTemplateAllOf.md)
 - [Model.TitledTextBlock](docs/TitledTextBlock.md)
 - [Model.ValueChange](docs/ValueChange.md)
 - [Model.ValueChangeDateLabelTemplate](docs/ValueChangeDateLabelTemplate.md)
 - [Model.ValueChangeDateLabelTemplateAllOf](docs/ValueChangeDateLabelTemplateAllOf.md)
 - [Model.ValueColor](docs/ValueColor.md)
 - [Model.ValueLabelDateDataPairListTemplate](docs/ValueLabelDateDataPairListTemplate.md)
 - [Model.ValueLabelDateDataPairListTemplateAllOf](docs/ValueLabelDateDataPairListTemplateAllOf.md)
 - [Model.ValueLabelDateTemplate](docs/ValueLabelDateTemplate.md)
 - [Model.ValueLabelDateTemplateAllOf](docs/ValueLabelDateTemplateAllOf.md)
 - [Model.ValueLabelDateTextBlockTemplate](docs/ValueLabelDateTextBlockTemplate.md)
 - [Model.ValueLabelDateTextBlockTemplateAllOf](docs/ValueLabelDateTextBlockTemplateAllOf.md)
 - [Model.ValueLabelTemplate](docs/ValueLabelTemplate.md)
 - [Model.ValueLabelTemplateAllOf](docs/ValueLabelTemplateAllOf.md)


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