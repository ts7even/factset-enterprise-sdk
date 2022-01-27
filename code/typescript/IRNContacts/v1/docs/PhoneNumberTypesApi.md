# irncontacts.PhoneNumberTypesApi

All URIs are relative to *https://api-sandbox.factset.com/research/irn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PhoneNumberTypesGet**](PhoneNumberTypesApi.md#v1PhoneNumberTypesGet) | **GET** /v1/phone-number-types | Get list of the phone types configured in your group
[**v1PhoneNumberTypesPhoneNumberTypeIdDelete**](PhoneNumberTypesApi.md#v1PhoneNumberTypesPhoneNumberTypeIdDelete) | **DELETE** /v1/phone-number-types/{phoneNumberTypeId} | Delete a phone type
[**v1PhoneNumberTypesPhoneNumberTypeIdPut**](PhoneNumberTypesApi.md#v1PhoneNumberTypesPhoneNumberTypeIdPut) | **PUT** /v1/phone-number-types/{phoneNumberTypeId} | Edit a phone type
[**v1PhoneNumberTypesPost**](PhoneNumberTypesApi.md#v1PhoneNumberTypesPost) | **POST** /v1/phone-number-types | Create a phone type



## v1PhoneNumberTypesGet

> [PhoneNumberTypeDto] v1PhoneNumberTypesGet()

Get list of the phone types configured in your group

### Example

```javascript
const { ApiClient, PhoneNumberTypesApi } = require('@factset/sdk-irncontacts');
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

const apiInstance = new PhoneNumberTypesApi();

// Call api endpoint
apiInstance.v1PhoneNumberTypesGet().then(
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

[**[PhoneNumberTypeDto]**](PhoneNumberTypeDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PhoneNumberTypesPhoneNumberTypeIdDelete

> v1PhoneNumberTypesPhoneNumberTypeIdDelete(phoneNumberTypeId)

Delete a phone type

### Example

```javascript
const { ApiClient, PhoneNumberTypesApi } = require('@factset/sdk-irncontacts');
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

const apiInstance = new PhoneNumberTypesApi();
const phoneNumberTypeId = "phoneNumberTypeId_example"; // String | phoneNumberTypeId for deleting associated record

// Call api endpoint
apiInstance.v1PhoneNumberTypesPhoneNumberTypeIdDelete(phoneNumberTypeId).then(
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
 **phoneNumberTypeId** | **String**| phoneNumberTypeId for deleting associated record | 

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PhoneNumberTypesPhoneNumberTypeIdPut

> v1PhoneNumberTypesPhoneNumberTypeIdPut(phoneNumberTypeId, body)

Edit a phone type

### Example

```javascript
const { ApiClient, PhoneNumberTypesApi } = require('@factset/sdk-irncontacts');
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

const apiInstance = new PhoneNumberTypesApi();
const phoneNumberTypeId = "phoneNumberTypeId_example"; // String | phoneNumberTypeId to update associated record
const body = "body_example"; // String | Update with phoneNumberType

// Call api endpoint
apiInstance.v1PhoneNumberTypesPhoneNumberTypeIdPut(phoneNumberTypeId, body).then(
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
 **phoneNumberTypeId** | **String**| phoneNumberTypeId to update associated record | 
 **body** | **String**| Update with phoneNumberType | 

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: application/json


## v1PhoneNumberTypesPost

> String v1PhoneNumberTypesPost(body)

Create a phone type

### Example

```javascript
const { ApiClient, PhoneNumberTypesApi } = require('@factset/sdk-irncontacts');
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

const apiInstance = new PhoneNumberTypesApi();
const body = "body_example"; // String | To add phoneNumberType

// Call api endpoint
apiInstance.v1PhoneNumberTypesPost(body).then(
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
 **body** | **String**| To add phoneNumberType | 

### Return type

**String**

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: application/json
