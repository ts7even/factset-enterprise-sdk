# paengine.ColumnStatisticsApi

All URIs are relative to *https://api-sandbox.factset.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPAColumnStatistics**](ColumnStatisticsApi.md#getPAColumnStatistics) | **GET** /analytics/lookups/v2/engines/pa/columnstatistics | Get PA column statistics



## getPAColumnStatistics

> {String: ColumnStatistic} getPAColumnStatistics()

Get PA column statistics

This endpoint lists all the column statistics that can be applied to a PA column.

### Example

```javascript
const { ApiClient, ColumnStatisticsApi } = require('@factset/sdk-paengine');
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

const apiInstance = new ColumnStatisticsApi();

// Call api endpoint
apiInstance.getPAColumnStatistics().then(
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

[**{String: ColumnStatistic}**](ColumnStatistic.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
