# paengine.ColumnsApi

All URIs are relative to *https://api.factset.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPAColumnById**](ColumnsApi.md#getPAColumnById) | **GET** /analytics/engines/pa/v3/columns/{id} | Get PA column settings
[**getPAColumns**](ColumnsApi.md#getPAColumns) | **GET** /analytics/engines/pa/v3/columns | Get PA columns



## getPAColumnById

> ColumnRoot getPAColumnById(id)

Get PA column settings

This endpoint returns the default settings of a PA column.

### Example

```javascript
const { ApiClient, ColumnsApi } = require('@factset/sdk-paengine');
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

const apiInstance = new ColumnsApi();
const id = "'2B729FA4EQAEA58B330055A5D064FC4FA32491DAF9D169C3DAD9793880F5'"; // String | Unique identifier for a column

// Call api endpoint
apiInstance.getPAColumnById(id).then(
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
 **id** | **String**| Unique identifier for a column | [default to &#39;2B729FA4EQAEA58B330055A5D064FC4FA32491DAF9D169C3DAD9793880F5&#39;]

### Return type

[**ColumnRoot**](ColumnRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPAColumns

> ColumnSummaryRoot getPAColumns(opts)

Get PA columns

This endpoint lists all the PA columns that can be applied to a calculation.

### Example

```javascript
const { ApiClient, ColumnsApi } = require('@factset/sdk-paengine');
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

const apiInstance = new ColumnsApi();
const opts = {
  'name': "''", // String | Column name
  'category': "''", // String | Column category
  'directory': "''" // String | The directory to get the columns in
};

// Call api endpoint
apiInstance.getPAColumns(opts).then(
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
 **name** | **String**| Column name | [optional] [default to &#39;&#39;]
 **category** | **String**| Column category | [optional] [default to &#39;&#39;]
 **directory** | **String**| The directory to get the columns in | [optional] [default to &#39;&#39;]

### Return type

[**ColumnSummaryRoot**](ColumnSummaryRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
