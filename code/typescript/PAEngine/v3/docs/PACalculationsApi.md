# paengine.PACalculationsApi

All URIs are relative to *https://api.factset.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelCalculationById**](PACalculationsApi.md#cancelCalculationById) | **DELETE** /analytics/engines/pa/v3/calculations/{id} | Cancel PA calculation by id
[**getCalculationParameters**](PACalculationsApi.md#getCalculationParameters) | **GET** /analytics/engines/pa/v3/calculations/{id} | Get PA calculation parameters by id
[**getCalculationStatusById**](PACalculationsApi.md#getCalculationStatusById) | **GET** /analytics/engines/pa/v3/calculations/{id}/status | Get PA calculation status by id
[**getCalculationUnitResultById**](PACalculationsApi.md#getCalculationUnitResultById) | **GET** /analytics/engines/pa/v3/calculations/{id}/units/{unitId}/result | Get PA calculation result by id
[**postAndCalculate**](PACalculationsApi.md#postAndCalculate) | **POST** /analytics/engines/pa/v3/calculations | Create and Run PA calculation
[**putAndCalculate**](PACalculationsApi.md#putAndCalculate) | **PUT** /analytics/engines/pa/v3/calculations/{id} | Create or Update PA calculation and run it.



## cancelCalculationById

> cancelCalculationById(id)

Cancel PA calculation by id

This is the endpoint to cancel a previously submitted calculation.

### Example

```javascript
const { ApiClient, PACalculationsApi } = require('@factset/sdk-paengine');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new PACalculationsApi();
const id = "id_example"; // String | from url, provided from the location header in the Create and Run PA calculation endpoint

// Call api endpoint
apiInstance.cancelCalculationById(id).then(
  () => {
    console.log('API called successfully.');
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| from url, provided from the location header in the Create and Run PA calculation endpoint | 

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getCalculationParameters

> PACalculationParametersRoot getCalculationParameters(id)

Get PA calculation parameters by id

This is the endpoint that returns the calculation parameters passed for a calculation.

### Example

```javascript
const { ApiClient, PACalculationsApi } = require('@factset/sdk-paengine');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new PACalculationsApi();
const id = "id_example"; // String | from url, provided from the location header in the Create and Run PA calculation endpoint

// Call api endpoint
apiInstance.getCalculationParameters(id).then(
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
 **id** | **String**| from url, provided from the location header in the Create and Run PA calculation endpoint | 

### Return type

[**PACalculationParametersRoot**](PACalculationParametersRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCalculationStatusById

> CalculationStatusRoot getCalculationStatusById(id)

Get PA calculation status by id

This is the endpoint to check on the progress of a previously requested calculation.  If the calculation has finished computing, the location header will point to the result url.  Otherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage.

### Example

```javascript
const { ApiClient, PACalculationsApi } = require('@factset/sdk-paengine');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new PACalculationsApi();
const id = "id_example"; // String | from url, provided from the location header in the Create and Run PA calculation endpoint

// Call api endpoint
apiInstance.getCalculationStatusById(id).then(
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
 **id** | **String**| from url, provided from the location header in the Create and Run PA calculation endpoint | 

### Return type

[**CalculationStatusRoot**](CalculationStatusRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCalculationUnitResultById

> ObjectRoot getCalculationUnitResultById(id, unitId)

Get PA calculation result by id

This is the endpoint to get the result of a previously requested calculation.  If the calculation has finished computing, the body of the response will contain the requested document in JSON.

### Example

```javascript
const { ApiClient, PACalculationsApi } = require('@factset/sdk-paengine');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new PACalculationsApi();
const id = "id_example"; // String | from url, provided from the location header in the Get PA calculation status by id endpoint
const unitId = "unitId_example"; // String | from url, provided from the location header in the Get PA calculation status by id endpoint

// Call api endpoint
apiInstance.getCalculationUnitResultById(id, unitId).then(
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
 **id** | **String**| from url, provided from the location header in the Get PA calculation status by id endpoint | 
 **unitId** | **String**| from url, provided from the location header in the Get PA calculation status by id endpoint | 

### Return type

[**ObjectRoot**](ObjectRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-protobuf


## postAndCalculate

> CalculationStatusRoot postAndCalculate(opts)

Create and Run PA calculation

This endpoint runs the PA calculation specified in the POST body parameters.  It can take one or more calculation units as input.    Remarks:    * Any settings in POST body will act as a one-time override over the settings saved in the PA template.

### Example

```javascript
const { ApiClient, PACalculationsApi } = require('@factset/sdk-paengine');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new PACalculationsApi();
const opts = {
  'xFactSetApiLongRunningDeadline': 56, // Number | Long running deadline in seconds when only one unit is passed in the POST body.
  'cacheControl': "cacheControl_example", // String | Standard HTTP header.  Accepts max-stale.
  'pACalculationParametersRoot': new paengine.PACalculationParametersRoot() // PACalculationParametersRoot | Calculation Parameters
};

// Call api endpoint
apiInstance.postAndCalculate(opts).then(
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
 **xFactSetApiLongRunningDeadline** | **Number**| Long running deadline in seconds when only one unit is passed in the POST body. | [optional] 
 **cacheControl** | **String**| Standard HTTP header.  Accepts max-stale. | [optional] 
 **pACalculationParametersRoot** | [**PACalculationParametersRoot**](PACalculationParametersRoot.md)| Calculation Parameters | [optional] 

### Return type

[**CalculationStatusRoot**](CalculationStatusRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/x-protobuf


## putAndCalculate

> CalculationStatusRoot putAndCalculate(id, opts)

Create or Update PA calculation and run it.

This endpoint updates and run the PA calculation specified in the PUT body parameters. This also allows creating new PA calculations with custom ids.  It can take one or more calculation units as input.    Remarks:    * Any settings in PUT body will act as a one-time override over the settings saved in the PA template.

### Example

```javascript
const { ApiClient, PACalculationsApi } = require('@factset/sdk-paengine');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new PACalculationsApi();
const id = "id_example"; // String | from url, provided from the location header in the Create and Run PA calculation endpoint
const opts = {
  'xFactSetApiLongRunningDeadline': 56, // Number | Long running deadline in seconds when only one unit is passed in the PUT body.
  'cacheControl': "cacheControl_example", // String | Standard HTTP header.  Accepts max-stale.
  'pACalculationParametersRoot': new paengine.PACalculationParametersRoot() // PACalculationParametersRoot | Calculation Parameters
};

// Call api endpoint
apiInstance.putAndCalculate(id, opts).then(
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
 **id** | **String**| from url, provided from the location header in the Create and Run PA calculation endpoint | 
 **xFactSetApiLongRunningDeadline** | **Number**| Long running deadline in seconds when only one unit is passed in the PUT body. | [optional] 
 **cacheControl** | **String**| Standard HTTP header.  Accepts max-stale. | [optional] 
 **pACalculationParametersRoot** | [**PACalculationParametersRoot**](PACalculationParametersRoot.md)| Calculation Parameters | [optional] 

### Return type

[**CalculationStatusRoot**](CalculationStatusRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/x-protobuf
