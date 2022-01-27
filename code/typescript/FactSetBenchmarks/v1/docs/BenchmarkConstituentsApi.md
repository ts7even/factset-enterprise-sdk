# factsetbenchmarks.BenchmarkConstituentsApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBenchmarkConstituents**](BenchmarkConstituentsApi.md#getBenchmarkConstituents) | **GET** /factset-benchmarks/v1/constituents | Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.
[**getBenchmarkConstituentsForList**](BenchmarkConstituentsApi.md#getBenchmarkConstituentsForList) | **POST** /factset-benchmarks/v1/constituents | Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.
[**getFIBenchmarkConstituents**](BenchmarkConstituentsApi.md#getFIBenchmarkConstituents) | **GET** /factset-benchmarks/v1/fixed-income-constituents | Returns the requested Fixed Income Benchmark Constituents and respective Weights, Price and Market Value.
[**getFIBenchmarkConstituentsForList**](BenchmarkConstituentsApi.md#getFIBenchmarkConstituentsForList) | **POST** /factset-benchmarks/v1/fixed-income-constituents | Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.



## getBenchmarkConstituents

> BenchmarkConstituentsResponse getBenchmarkConstituents(ids, opts)

Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.

Returns the requested Benchmark Constituents and respective Weights, Price and Market Value. You must be authorized for the &#x60;ids&#x60; requested. Use the helper endpoint **_/id-list** for valid identifiers.   

### Example

```javascript
const { ApiClient, BenchmarkConstituentsApi } = require('@factset/sdk-factsetbenchmarks');
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

const apiInstance = new BenchmarkConstituentsApi();
const ids = ["null"]; // [String] | Benchmark Identifiers. Reference the helper endpoint **_/id-list** to get a sample list of  valid identifiers. You must be authorized for the `ids` requested, otherwise you will receive an error. <p>***ids limit** =  1 per request*</p>
const opts = {
  'date': "date_example", // String | Date of holding expressed in YYYY-MM-DD format.
  'currency': "currency_example" // String | Currency for response.
};

// Call api endpoint
apiInstance.getBenchmarkConstituents(ids, opts).then(
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
 **ids** | [**[String]**](String.md)| Benchmark Identifiers. Reference the helper endpoint **_/id-list** to get a sample list of  valid identifiers. You must be authorized for the &#x60;ids&#x60; requested, otherwise you will receive an error. &lt;p&gt;***ids limit** &#x3D;  1 per request*&lt;/p&gt; | 
 **date** | **String**| Date of holding expressed in YYYY-MM-DD format. | [optional] 
 **currency** | **String**| Currency for response. | [optional] 

### Return type

[**BenchmarkConstituentsResponse**](BenchmarkConstituentsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBenchmarkConstituentsForList

> BenchmarkConstituentsResponse getBenchmarkConstituentsForList(benchmarkConstituentsRequest)

Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.

Returns the requested Benchmark Constituents and respective Weights, Price and Market Value. You must be authorized for the &#x60;ids&#x60; requested. Use the helper endpoint **_/id-list** for valid identifiers. 

### Example

```javascript
const { ApiClient, BenchmarkConstituentsApi } = require('@factset/sdk-factsetbenchmarks');
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

const apiInstance = new BenchmarkConstituentsApi();
const benchmarkConstituentsRequest = new factsetbenchmarks.BenchmarkConstituentsRequest(); // BenchmarkConstituentsRequest | Requests Benchmark Constituents for the given identifier and date.

// Call api endpoint
apiInstance.getBenchmarkConstituentsForList(benchmarkConstituentsRequest).then(
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
 **benchmarkConstituentsRequest** | [**BenchmarkConstituentsRequest**](BenchmarkConstituentsRequest.md)| Requests Benchmark Constituents for the given identifier and date. | 

### Return type

[**BenchmarkConstituentsResponse**](BenchmarkConstituentsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getFIBenchmarkConstituents

> FixedIncomeBenchmarkConstituentsResponse getFIBenchmarkConstituents(ids, opts)

Returns the requested Fixed Income Benchmark Constituents and respective Weights, Price and Market Value.

Returns the requested Fixed Income Benchmark Constituents and respective Weights, Price and Market Value. You must be authorized for the &#x60;ids&#x60; requested. 

### Example

```javascript
const { ApiClient, BenchmarkConstituentsApi } = require('@factset/sdk-factsetbenchmarks');
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

const apiInstance = new BenchmarkConstituentsApi();
const ids = LHMN0001; // [String] | Fixed Income Benchmark Identifiers. You must be authorized for the `ids` requested, otherwise you will receive an error. <p>***ids limit** =  1 per request*</p>
const opts = {
  'date': "date_example", // String | Date of holding expressed in YYYY-MM-DD format.
  'currency': "currency_example" // String | Currency for response.
};

// Call api endpoint
apiInstance.getFIBenchmarkConstituents(ids, opts).then(
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
 **ids** | [**[String]**](String.md)| Fixed Income Benchmark Identifiers. You must be authorized for the &#x60;ids&#x60; requested, otherwise you will receive an error. &lt;p&gt;***ids limit** &#x3D;  1 per request*&lt;/p&gt; | 
 **date** | **String**| Date of holding expressed in YYYY-MM-DD format. | [optional] 
 **currency** | **String**| Currency for response. | [optional] 

### Return type

[**FixedIncomeBenchmarkConstituentsResponse**](FixedIncomeBenchmarkConstituentsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFIBenchmarkConstituentsForList

> FixedIncomeBenchmarkConstituentsResponse getFIBenchmarkConstituentsForList(fixedIncomeBenchmarkConstituentsRequest)

Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.

Returns the requested Fixed Income Benchmark Constituents and respective Weights, Price and Market Value. You must be authorized for the &#x60;ids&#x60; requested. 

### Example

```javascript
const { ApiClient, BenchmarkConstituentsApi } = require('@factset/sdk-factsetbenchmarks');
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

const apiInstance = new BenchmarkConstituentsApi();
const fixedIncomeBenchmarkConstituentsRequest = new factsetbenchmarks.FixedIncomeBenchmarkConstituentsRequest(); // FixedIncomeBenchmarkConstituentsRequest | Requests Fixed Income Benchmark Constituents for the given identifier and date.

// Call api endpoint
apiInstance.getFIBenchmarkConstituentsForList(fixedIncomeBenchmarkConstituentsRequest).then(
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
 **fixedIncomeBenchmarkConstituentsRequest** | [**FixedIncomeBenchmarkConstituentsRequest**](FixedIncomeBenchmarkConstituentsRequest.md)| Requests Fixed Income Benchmark Constituents for the given identifier and date. | 

### Return type

[**FixedIncomeBenchmarkConstituentsResponse**](FixedIncomeBenchmarkConstituentsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
