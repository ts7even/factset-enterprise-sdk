<img alt="FactSet" src="https://www.factset.com/hubfs/Assets/images/factset-logo.svg" height="56" width="290">

# Time Series API for Digital Portals client library for JavaScript

[![npm](https://img.shields.io/npm/v/@factset/sdk-timeseriesapifordigitalportals)](https://www.npmjs.com/package/@factset/sdk-timeseriesapifordigitalportals)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

Time series data, end-of-day or intraday, tick-by-tick or subsampled.
Additional vendor-specific endpoints provide a modified interface for seamless integration with the ChartIQ chart library.

This TypeScript/JavaScript package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2
- Package version: 0.10.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Requirements

* Node.js >= 12

## Installation

### npm

```shell
npm install @factset/sdk-utils @factset/sdk-timeseriesapifordigitalportals
```

### yarn

```shell
yarn add @factset/sdk-utils @factset/sdk-timeseriesapifordigitalportals
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
const { ApiClient, PricesApi } = require('@factset/sdk-timeseriesapifordigitalportals');
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

const apiInstance = new PricesApi();
const body = new timeseriesapifordigitalportals.InlineObject5(); // InlineObject5 | 

// Call api endpoint
apiInstance.postPricesTimeSeriesEodList(body).then(
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

All URIs are relative to *http://api.factset.com/wealth/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*timeseriesapifordigitalportals.PricesApi* | [**postPricesTimeSeriesEodList**](docs/PricesApi.md#postPricesTimeSeriesEodList) | **POST** /prices/timeSeries/eod/list | End-of-day time series data for a notation.
*timeseriesapifordigitalportals.PricesApi* | [**postPricesTimeSeriesEodSubsampleGet**](docs/PricesApi.md#postPricesTimeSeriesEodSubsampleGet) | **POST** /prices/timeSeries/eod/subsample/get | Single subsample end-of-day data for a notation.
*timeseriesapifordigitalportals.PricesApi* | [**postPricesTimeSeriesEodSubsampleList**](docs/PricesApi.md#postPricesTimeSeriesEodSubsampleList) | **POST** /prices/timeSeries/eod/subsample/list | Subsampled end-of-day time series data for a notation.
*timeseriesapifordigitalportals.PricesApi* | [**postPricesTimeSeriesIntradayList**](docs/PricesApi.md#postPricesTimeSeriesIntradayList) | **POST** /prices/timeSeries/intraday/list | Intraday time series data for a notation.
*timeseriesapifordigitalportals.PricesApi* | [**postPricesTimeSeriesIntradaySubsampleGet**](docs/PricesApi.md#postPricesTimeSeriesIntradaySubsampleGet) | **POST** /prices/timeSeries/intraday/subsample/get | Single subsample intraday data for a notation.
*timeseriesapifordigitalportals.PricesApi* | [**postPricesTimeSeriesIntradaySubsampleList**](docs/PricesApi.md#postPricesTimeSeriesIntradaySubsampleList) | **POST** /prices/timeSeries/intraday/subsample/list | Subsampled intraday time series data for a notation.
*timeseriesapifordigitalportals.VendorApi* | [**postVendorChartIQTimeSeriesEodList**](docs/VendorApi.md#postVendorChartIQTimeSeriesEodList) | **POST** /vendor/chartIQ/timeSeries/eod/list | End-of-day time series data for a notation.
*timeseriesapifordigitalportals.VendorApi* | [**postVendorChartIQTimeSeriesEodSubsampleGet**](docs/VendorApi.md#postVendorChartIQTimeSeriesEodSubsampleGet) | **POST** /vendor/chartIQ/timeSeries/eod/subsample/get | Single subsample end-of-day data for a notation.
*timeseriesapifordigitalportals.VendorApi* | [**postVendorChartIQTimeSeriesEodSubsampleList**](docs/VendorApi.md#postVendorChartIQTimeSeriesEodSubsampleList) | **POST** /vendor/chartIQ/timeSeries/eod/subsample/list | Subsampled end-of-day time series data for a notation.
*timeseriesapifordigitalportals.VendorApi* | [**postVendorChartIQTimeSeriesIntradaySubsampleGet**](docs/VendorApi.md#postVendorChartIQTimeSeriesIntradaySubsampleGet) | **POST** /vendor/chartIQ/timeSeries/intraday/subsample/get | Single subsample intraday data for a notation.
*timeseriesapifordigitalportals.VendorApi* | [**postVendorChartIQTimeSeriesIntradaySubsampleList**](docs/VendorApi.md#postVendorChartIQTimeSeriesIntradaySubsampleList) | **POST** /vendor/chartIQ/timeSeries/intraday/subsample/list | Subsampled intraday time series data for a notation.


## Documentation for Models

 - [timeseriesapifordigitalportals.CursorBasedPaginationOutputObject](docs/CursorBasedPaginationOutputObject.md)
 - [timeseriesapifordigitalportals.CursorBasedPaginationOutputObjectWithoutTotal](docs/CursorBasedPaginationOutputObjectWithoutTotal.md)
 - [timeseriesapifordigitalportals.ErrorMetaObject](docs/ErrorMetaObject.md)
 - [timeseriesapifordigitalportals.InlineObject](docs/InlineObject.md)
 - [timeseriesapifordigitalportals.InlineObject1](docs/InlineObject1.md)
 - [timeseriesapifordigitalportals.InlineObject10](docs/InlineObject10.md)
 - [timeseriesapifordigitalportals.InlineObject2](docs/InlineObject2.md)
 - [timeseriesapifordigitalportals.InlineObject3](docs/InlineObject3.md)
 - [timeseriesapifordigitalportals.InlineObject4](docs/InlineObject4.md)
 - [timeseriesapifordigitalportals.InlineObject5](docs/InlineObject5.md)
 - [timeseriesapifordigitalportals.InlineObject6](docs/InlineObject6.md)
 - [timeseriesapifordigitalportals.InlineObject7](docs/InlineObject7.md)
 - [timeseriesapifordigitalportals.InlineObject8](docs/InlineObject8.md)
 - [timeseriesapifordigitalportals.InlineObject9](docs/InlineObject9.md)
 - [timeseriesapifordigitalportals.InlineResponse200](docs/InlineResponse200.md)
 - [timeseriesapifordigitalportals.InlineResponse2001](docs/InlineResponse2001.md)
 - [timeseriesapifordigitalportals.InlineResponse20010](docs/InlineResponse20010.md)
 - [timeseriesapifordigitalportals.InlineResponse20010Data](docs/InlineResponse20010Data.md)
 - [timeseriesapifordigitalportals.InlineResponse20010DataSubsamples](docs/InlineResponse20010DataSubsamples.md)
 - [timeseriesapifordigitalportals.InlineResponse2001Data](docs/InlineResponse2001Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2001Meta](docs/InlineResponse2001Meta.md)
 - [timeseriesapifordigitalportals.InlineResponse2002](docs/InlineResponse2002.md)
 - [timeseriesapifordigitalportals.InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2003](docs/InlineResponse2003.md)
 - [timeseriesapifordigitalportals.InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2004](docs/InlineResponse2004.md)
 - [timeseriesapifordigitalportals.InlineResponse2004Data](docs/InlineResponse2004Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2004DataRange](docs/InlineResponse2004DataRange.md)
 - [timeseriesapifordigitalportals.InlineResponse2005](docs/InlineResponse2005.md)
 - [timeseriesapifordigitalportals.InlineResponse2005Data](docs/InlineResponse2005Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2005DataPrices](docs/InlineResponse2005DataPrices.md)
 - [timeseriesapifordigitalportals.InlineResponse2006](docs/InlineResponse2006.md)
 - [timeseriesapifordigitalportals.InlineResponse2006Data](docs/InlineResponse2006Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2006DataSubsample](docs/InlineResponse2006DataSubsample.md)
 - [timeseriesapifordigitalportals.InlineResponse2007](docs/InlineResponse2007.md)
 - [timeseriesapifordigitalportals.InlineResponse2007Data](docs/InlineResponse2007Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2007DataSubsamples](docs/InlineResponse2007DataSubsamples.md)
 - [timeseriesapifordigitalportals.InlineResponse2008](docs/InlineResponse2008.md)
 - [timeseriesapifordigitalportals.InlineResponse2008Data](docs/InlineResponse2008Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2008DataPrices](docs/InlineResponse2008DataPrices.md)
 - [timeseriesapifordigitalportals.InlineResponse2009](docs/InlineResponse2009.md)
 - [timeseriesapifordigitalportals.InlineResponse2009Data](docs/InlineResponse2009Data.md)
 - [timeseriesapifordigitalportals.InlineResponse2009DataSubsample](docs/InlineResponse2009DataSubsample.md)
 - [timeseriesapifordigitalportals.InlineResponse200Data](docs/InlineResponse200Data.md)
 - [timeseriesapifordigitalportals.InlineResponse200DataRange](docs/InlineResponse200DataRange.md)
 - [timeseriesapifordigitalportals.InlineResponse200Meta](docs/InlineResponse200Meta.md)
 - [timeseriesapifordigitalportals.OffsetBasedPaginationOutputObject](docs/OffsetBasedPaginationOutputObject.md)
 - [timeseriesapifordigitalportals.OffsetBasedPaginationOutputObjectWithoutTotal](docs/OffsetBasedPaginationOutputObjectWithoutTotal.md)
 - [timeseriesapifordigitalportals.PartialOutputObject](docs/PartialOutputObject.md)
 - [timeseriesapifordigitalportals.PricesTimeSeriesEodSubsampleGetData](docs/PricesTimeSeriesEodSubsampleGetData.md)
 - [timeseriesapifordigitalportals.PricesTimeSeriesEodSubsampleGetDataInterval](docs/PricesTimeSeriesEodSubsampleGetDataInterval.md)
 - [timeseriesapifordigitalportals.PricesTimeSeriesEodSubsampleListData](docs/PricesTimeSeriesEodSubsampleListData.md)
 - [timeseriesapifordigitalportals.PricesTimeSeriesIntradayListData](docs/PricesTimeSeriesIntradayListData.md)
 - [timeseriesapifordigitalportals.PricesTimeSeriesIntradayListDataRange](docs/PricesTimeSeriesIntradayListDataRange.md)
 - [timeseriesapifordigitalportals.PricesTimeSeriesIntradayListMeta](docs/PricesTimeSeriesIntradayListMeta.md)
 - [timeseriesapifordigitalportals.PricesTimeSeriesIntradayListMetaPagination](docs/PricesTimeSeriesIntradayListMetaPagination.md)
 - [timeseriesapifordigitalportals.StatusObject](docs/StatusObject.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodListData](docs/VendorChartIQTimeSeriesEodListData.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodListDataAdjustments](docs/VendorChartIQTimeSeriesEodListDataAdjustments.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodListDataRange](docs/VendorChartIQTimeSeriesEodListDataRange.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodListMeta](docs/VendorChartIQTimeSeriesEodListMeta.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodListMetaPagination](docs/VendorChartIQTimeSeriesEodListMetaPagination.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodSubsampleGetData](docs/VendorChartIQTimeSeriesEodSubsampleGetData.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodSubsampleGetDataInterval](docs/VendorChartIQTimeSeriesEodSubsampleGetDataInterval.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodSubsampleGetMeta](docs/VendorChartIQTimeSeriesEodSubsampleGetMeta.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesEodSubsampleListData](docs/VendorChartIQTimeSeriesEodSubsampleListData.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesIntradaySubsampleGetData](docs/VendorChartIQTimeSeriesIntradaySubsampleGetData.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesIntradaySubsampleGetDataAdjustments](docs/VendorChartIQTimeSeriesIntradaySubsampleGetDataAdjustments.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesIntradaySubsampleListData](docs/VendorChartIQTimeSeriesIntradaySubsampleListData.md)
 - [timeseriesapifordigitalportals.VendorChartIQTimeSeriesIntradaySubsampleListDataRange](docs/VendorChartIQTimeSeriesIntradaySubsampleListDataRange.md)


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