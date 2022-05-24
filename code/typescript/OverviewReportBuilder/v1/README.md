<img alt="FactSet" src="https://www.factset.com/hubfs/Assets/images/factset-logo.svg" height="56" width="290">

# Overview Report Builder client library for JavaScript

[![npm](https://img.shields.io/npm/v/@factset/sdk-overviewreportbuilder)](https://www.npmjs.com/package/@factset/sdk-overviewreportbuilder)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This TypeScript/JavaScript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.20.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Requirements

* Node.js >= 12

## Installation

### npm

```shell
npm install @factset/sdk-utils @factset/sdk-overviewreportbuilder
```

### yarn

```shell
yarn add @factset/sdk-utils @factset/sdk-overviewreportbuilder
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup Node.js environment
   1. Install and activate Node.js >=12. If you're using [nvm](https://github.com/nvm-sh/nvm):

      ```sh
      nvm install 16
      nvm use 16
      ```

   2. (optional) [Install yarn](https://yarnpkg.com/getting-started/install).
3. [Install dependencies](#installation).
4. Run the following:

```javascript
const { ApiClient, CompanyApi } = require('@factset/sdk-overviewreportbuilder');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Examples for each supported authentication method are below,
// choose one that satisfies your use case.

// (Preferred) OAuth 2.0: FactSetOAuth2
// See https://github.com/FactSet/enterprise-sdk#oauth-20
// for information on how to create the app-config.json file
// See https://github.com/FactSet/enterprise-sdk-utils-typescript#authentication
// for more information on using the ConfidentialClient class
apiClient.factsetOauth2Client = new ConfidentialClient('/path/to/app-config.json');

// Basic authentication: FactSetApiKey
// See https://github.com/FactSet/enterprise-sdk#api-key
// for information how to create an API key
// const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
// FactSetApiKey.username = 'USERNAME-SERIAL';
// FactSetApiKey.password = 'API-KEY';

const apiInstance = new CompanyApi();
const id = FDS; // String | Company ticker

// Call api endpoint
apiInstance.currentCapGet(id).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/report/overview/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*overviewreportbuilder.CompanyApi* | [**currentCapGet**](docs/CompanyApi.md#currentCapGet) | **GET** /current-cap | Current Capitalization
*overviewreportbuilder.CompanyApi* | [**financialHighlightsGet**](docs/CompanyApi.md#financialHighlightsGet) | **GET** /financial-highlights | Financial / Estimate Highlights
*overviewreportbuilder.CompanyApi* | [**getProfileProfile**](docs/CompanyApi.md#getProfileProfile) | **GET** /profile | Overview Profile
*overviewreportbuilder.CompanyApi* | [**peerListGet**](docs/CompanyApi.md#peerListGet) | **GET** /peer-list | Peer List
*overviewreportbuilder.CompanyApi* | [**transactionsGet**](docs/CompanyApi.md#transactionsGet) | **GET** /transactions | Transactions


## Documentation for Models

 - [overviewreportbuilder.Category](docs/Category.md)
 - [overviewreportbuilder.CategoryCategory](docs/CategoryCategory.md)
 - [overviewreportbuilder.CurrencyCode](docs/CurrencyCode.md)
 - [overviewreportbuilder.CurrencyCodeCurrencyCode](docs/CurrencyCodeCurrencyCode.md)
 - [overviewreportbuilder.CurrencySymbol](docs/CurrencySymbol.md)
 - [overviewreportbuilder.CurrencySymbolCurrencySymbol](docs/CurrencySymbolCurrencySymbol.md)
 - [overviewreportbuilder.DataPointMeta](docs/DataPointMeta.md)
 - [overviewreportbuilder.DataPointMetaAnyOf](docs/DataPointMetaAnyOf.md)
 - [overviewreportbuilder.Description](docs/Description.md)
 - [overviewreportbuilder.DescriptionDescription](docs/DescriptionDescription.md)
 - [overviewreportbuilder.ErrorObject](docs/ErrorObject.md)
 - [overviewreportbuilder.ErrorObjectLinks](docs/ErrorObjectLinks.md)
 - [overviewreportbuilder.ErrorObjectSource](docs/ErrorObjectSource.md)
 - [overviewreportbuilder.ErrorResponse](docs/ErrorResponse.md)
 - [overviewreportbuilder.Frequency](docs/Frequency.md)
 - [overviewreportbuilder.FrequencyFrequency](docs/FrequencyFrequency.md)
 - [overviewreportbuilder.MetadataEntry](docs/MetadataEntry.md)
 - [overviewreportbuilder.Metric](docs/Metric.md)
 - [overviewreportbuilder.MetricMetric](docs/MetricMetric.md)
 - [overviewreportbuilder.PeerListData](docs/PeerListData.md)
 - [overviewreportbuilder.PeerListObject](docs/PeerListObject.md)
 - [overviewreportbuilder.PeerListResponse](docs/PeerListResponse.md)
 - [overviewreportbuilder.ProfileData](docs/ProfileData.md)
 - [overviewreportbuilder.ProfileDataBusiness](docs/ProfileDataBusiness.md)
 - [overviewreportbuilder.ProfileDataBusinessCrunchbaseCategories](docs/ProfileDataBusinessCrunchbaseCategories.md)
 - [overviewreportbuilder.ProfileDataBusinessCrunchbaseUrl](docs/ProfileDataBusinessCrunchbaseUrl.md)
 - [overviewreportbuilder.ProfileDataBusinessDescription](docs/ProfileDataBusinessDescription.md)
 - [overviewreportbuilder.ProfileDataBusinessIndustry](docs/ProfileDataBusinessIndustry.md)
 - [overviewreportbuilder.ProfileDataContact](docs/ProfileDataContact.md)
 - [overviewreportbuilder.ProfileDataContactPeople](docs/ProfileDataContactPeople.md)
 - [overviewreportbuilder.ProfileDataSize](docs/ProfileDataSize.md)
 - [overviewreportbuilder.ProfileDataSizeEmployeeNumber](docs/ProfileDataSizeEmployeeNumber.md)
 - [overviewreportbuilder.ProfileDataSizeEv](docs/ProfileDataSizeEv.md)
 - [overviewreportbuilder.ProfileDataSizeRevenue](docs/ProfileDataSizeRevenue.md)
 - [overviewreportbuilder.ProfileDataStage](docs/ProfileDataStage.md)
 - [overviewreportbuilder.ProfileDataStageCrunchbaseRank](docs/ProfileDataStageCrunchbaseRank.md)
 - [overviewreportbuilder.ProfileDataStagePeActiveFirmNumber](docs/ProfileDataStagePeActiveFirmNumber.md)
 - [overviewreportbuilder.ProfileDataStagePeActiveFirms](docs/ProfileDataStagePeActiveFirms.md)
 - [overviewreportbuilder.ProfileDataStageTradeDateRange](docs/ProfileDataStageTradeDateRange.md)
 - [overviewreportbuilder.ProfileResponse](docs/ProfileResponse.md)
 - [overviewreportbuilder.Scale](docs/Scale.md)
 - [overviewreportbuilder.ScaleScale](docs/ScaleScale.md)
 - [overviewreportbuilder.StachTableResponse](docs/StachTableResponse.md)
 - [overviewreportbuilder.TransactionId](docs/TransactionId.md)
 - [overviewreportbuilder.TransactionIdTransactionId](docs/TransactionIdTransactionId.md)
 - [overviewreportbuilder.TransactionType](docs/TransactionType.md)
 - [overviewreportbuilder.TransactionTypeTransactionType](docs/TransactionTypeTransactionType.md)
 - [overviewreportbuilder.Units](docs/Units.md)
 - [overviewreportbuilder.UnitsUnits](docs/UnitsUnits.md)
 - [overviewreportbuilder.ValueType](docs/ValueType.md)
 - [overviewreportbuilder.ValueTypeValueType](docs/ValueTypeValueType.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


# Contributing

Please refer to the [contributing guide](../../../../CONTRIBUTING.md).

# Copyright

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