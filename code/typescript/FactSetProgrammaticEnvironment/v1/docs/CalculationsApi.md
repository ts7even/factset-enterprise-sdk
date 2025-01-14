# factsetprogrammaticenvironment.CalculationsApi

All URIs are relative to *https://api.factset.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsQuantFpeV1CalculationsIdGet**](CalculationsApi.md#analyticsQuantFpeV1CalculationsIdGet) | **GET** /analytics/quant/fpe/v1/calculations/{id} | Get calculation status by id
[**analyticsQuantFpeV1CalculationsIdLogGet**](CalculationsApi.md#analyticsQuantFpeV1CalculationsIdLogGet) | **GET** /analytics/quant/fpe/v1/calculations/{id}/log | Get calculation log for a specific calculation
[**analyticsQuantFpeV1CalculationsIdOutputGet**](CalculationsApi.md#analyticsQuantFpeV1CalculationsIdOutputGet) | **GET** /analytics/quant/fpe/v1/calculations/{id}/output | Get calculation output for a specific calculation
[**analyticsQuantFpeV1CalculationsPost**](CalculationsApi.md#analyticsQuantFpeV1CalculationsPost) | **POST** /analytics/quant/fpe/v1/calculations | Starts a new script calculation



## analyticsQuantFpeV1CalculationsIdGet

> CalculationStatus analyticsQuantFpeV1CalculationsIdGet(id)

Get calculation status by id

This is the endpoint to check on the progress of a previous calculation request.

### Example

```javascript
const { ApiClient, CalculationsApi } = require('@factset/sdk-factsetprogrammaticenvironment');
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

const apiInstance = new CalculationsApi();
const id = "id_example"; // String | From url, provided by location header or response body in the calculation start endpoint

// Call api endpoint
apiInstance.analyticsQuantFpeV1CalculationsIdGet(id).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| From url, provided by location header or response body in the calculation start endpoint | 

### Return type

[**CalculationStatus**](CalculationStatus.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## analyticsQuantFpeV1CalculationsIdLogGet

> File analyticsQuantFpeV1CalculationsIdLogGet(id)

Get calculation log for a specific calculation

This endpoint returns the log from the calculation.

### Example

```javascript
const { ApiClient, CalculationsApi } = require('@factset/sdk-factsetprogrammaticenvironment');
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

const apiInstance = new CalculationsApi();
const id = "id_example"; // String | From url, provided by location header or response body in the calculation start endpoint

// Call api endpoint
apiInstance.analyticsQuantFpeV1CalculationsIdLogGet(id).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| From url, provided by location header or response body in the calculation start endpoint | 

### Return type

**File**

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## analyticsQuantFpeV1CalculationsIdOutputGet

> File analyticsQuantFpeV1CalculationsIdOutputGet(id)

Get calculation output for a specific calculation

This endpoint returns the specified output from the calculation.

### Example

```javascript
const { ApiClient, CalculationsApi } = require('@factset/sdk-factsetprogrammaticenvironment');
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

const apiInstance = new CalculationsApi();
const id = "id_example"; // String | From url, provided by location header or response body in the calculation start endpoint

// Call api endpoint
apiInstance.analyticsQuantFpeV1CalculationsIdOutputGet(id).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| From url, provided by location header or response body in the calculation start endpoint | 

### Return type

**File**

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: *


## analyticsQuantFpeV1CalculationsPost

> CalculationStatus analyticsQuantFpeV1CalculationsPost(opts)

Starts a new script calculation

This endpoint takes a python script and starts executing it within FPE

### Example

```javascript
const { ApiClient, CalculationsApi } = require('@factset/sdk-factsetprogrammaticenvironment');
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

const apiInstance = new CalculationsApi();
const opts = {
  'calculation': new factsetprogrammaticenvironment.Calculation() // Calculation | 
};

// Call api endpoint
apiInstance.analyticsQuantFpeV1CalculationsPost(opts).then(
  data => {

    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculation** | [**Calculation**](Calculation.md)|  | [optional] 

### Return type

[**CalculationStatus**](CalculationStatus.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

