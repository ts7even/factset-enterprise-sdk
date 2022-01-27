# vault.CalculationsApi

All URIs are relative to *https://api-sandbox.factset.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelCalculationById**](CalculationsApi.md#cancelCalculationById) | **DELETE** /analytics/engines/v2/calculations/{id} | Cancel calculation by id
[**getCalculationStatusById**](CalculationsApi.md#getCalculationStatusById) | **GET** /analytics/engines/v2/calculations/{id} | Get calculation status by id
[**getCalculationStatusSummaries**](CalculationsApi.md#getCalculationStatusSummaries) | **GET** /analytics/engines/v2/calculations | Get all calculation statuses
[**runCalculation**](CalculationsApi.md#runCalculation) | **POST** /analytics/engines/v2/calculations | Run calculation



## cancelCalculationById

> cancelCalculationById(id)

Cancel calculation by id

This is the endpoint to cancel a previously submitted calculation request.  Instead of doing a GET on the getCalculationById URL, cancel the calculation by doing a DELETE.  All individual calculation units within the calculation will be canceled if they have not already finished.

### Example

```javascript
const { ApiClient, CalculationsApi } = require('@factset/sdk-vault');
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

const apiInstance = new CalculationsApi();
const id = "id_example"; // String | From url, provided from the location header in the Run Multiple Calculations endpoint.

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
 **id** | **String**| From url, provided from the location header in the Run Multiple Calculations endpoint. | 

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCalculationStatusById

> CalculationStatus getCalculationStatusById(id)

Get calculation status by id

This is the endpoint to check on the progress of a previous calculation request.  Response body contains status information of the entire request and each individual calculation unit.

### Example

```javascript
const { ApiClient, CalculationsApi } = require('@factset/sdk-vault');
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

const apiInstance = new CalculationsApi();
const id = "id_example"; // String | From url, provided from the location header in the Run Multiple Calculations endpoint.

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
 **id** | **String**| From url, provided from the location header in the Run Multiple Calculations endpoint. | 

### Return type

[**CalculationStatus**](CalculationStatus.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCalculationStatusSummaries

> {String: CalculationStatusSummary} getCalculationStatusSummaries()

Get all calculation statuses

This endpoints returns all active calculation requests.

### Example

```javascript
const { ApiClient, CalculationsApi } = require('@factset/sdk-vault');
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

const apiInstance = new CalculationsApi();

// Call api endpoint
apiInstance.getCalculationStatusSummaries().then(
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

This endpoint does not need any parameter.

### Return type

[**{String: CalculationStatusSummary}**](CalculationStatusSummary.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runCalculation

> runCalculation(opts)

Run calculation

This endpoint creates a new calculation and runs the set of calculation units specified in the POST body.  This must be used first before get status or cancelling endpoints with a calculation id.   A successful response will contain the URL to check the status of the calculation request.    Remarks:  * Maximum 500 units allowed across all simultaneous calculations. (Refer API documentation for more information)                * Any settings in POST body will act as a one-time override over the settings saved in the PA/SPAR/Vault template.

### Example

```javascript
const { ApiClient, CalculationsApi } = require('@factset/sdk-vault');
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

const apiInstance = new CalculationsApi();
const opts = {
  'calculation': {"vault":{"5":{"componentid":"7CF4BCEB46020A5D3C78344108905FF73A4937F5E37CFF6BD97EC29545341935","account":{"id":"CLIENT:/MAC/DEMO/DEMO_PS_EQ_EM_COUNTRY_ALPHA.ACCT"},"dates":{"startdate":"20180501","enddate":"20180601","frequency":"Monthly"},"configid":"e95ef921-b4d4-4bb7-93ba-60eca8e3247a"},"6":{"componentid":"BF70A64ECFE1B2E58860B74D6FFB9952B5AAAFEAD411F830FC26C281E4983ACF","account":{"id":"CLIENT:/MAC/DEMO/DEMO_PS_EQ_EM_COUNTRY_ALPHA.ACCT"},"configid":"E522DF7D-C286-4EF1-AE34-0AA104AF602F"}}} // Calculation | 
};

// Call api endpoint
apiInstance.runCalculation(opts).then(
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
 **calculation** | [**Calculation**](Calculation.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined
