# factsetfundamentals.SegmentsApi

All URIs are relative to *https://api.factset.com/content/factset-fundamentals/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFdsSegmentsForList**](SegmentsApi.md#getFdsSegmentsForList) | **POST** /segments | Returns Company Segment Data.



## getFdsSegmentsForList

> SegmentsResponse getFdsSegmentsForList(segmentsRequest)

Returns Company Segment Data.

Retrieves Sales Metrics data for specified companies.  The &#x60;&#x60;&#x60;/segments&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability.This 30000 id limit has been derived based on single metric for one day. This feature is available for all users. 

### Example

```javascript
const { ApiClient, SegmentsApi } = require('@factset/sdk-factsetfundamentals');
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

const apiInstance = new SegmentsApi();
const segmentsRequest = new factsetfundamentals.SegmentsRequest(); // SegmentsRequest | Request object for requesting segments data

// Call api endpoint
apiInstance.getFdsSegmentsForList(segmentsRequest).then(
  data => {

      // data is a responsewrapper: GetFdsSegmentsForListResponseWrapper
      switch (data.statusCode) {

          case 200:
             // SegmentsResponse
             console.log(data.getResponse200());
             break;

          case 202:
             // BatchStatusResponse
             console.log(data.getResponse202());
             break;

      }

  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentsRequest** | [**SegmentsRequest**](SegmentsRequest.md)| Request object for requesting segments data | 

### Return type

[**SegmentsResponse**](SegmentsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

