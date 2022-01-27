# factsetestimates.RatingsApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConsensusRatings**](RatingsApi.md#getConsensusRatings) | **GET** /factset-estimates/v2/consensus-ratings | Ratings consensus estimates to fetch Buy, Overweight, Hold, Underweight, and Sell.
[**getConsensusRatingsForList**](RatingsApi.md#getConsensusRatingsForList) | **POST** /factset-estimates/v2/consensus-ratings | Ratings consensus estimates to fetch Buy, Overweight, Hold, Underweight, and Sell.
[**getDetailRatings**](RatingsApi.md#getDetailRatings) | **GET** /factset-estimates/v2/detail-ratings | Broker Detail estimates to fetch Buy, Overweight, Hold, Underweight, and Sell.
[**getDetailRatingsForList**](RatingsApi.md#getDetailRatingsForList) | **POST** /factset-estimates/v2/detail-ratings | Broker Detail estimates to fetch Buy, Overweight, Hold, Underweight, and Sell.



## getConsensusRatings

> ConsensusRatingsResponse getConsensusRatings(ids, opts)

Ratings consensus estimates to fetch Buy, Overweight, Hold, Underweight, and Sell.

Returns ratings from the FactSet Estimates database for current and historical for an individual security using rolling fiscal dates as of a specific date. 

### Example

```javascript
const { ApiClient, RatingsApi } = require('@factset/sdk-factsetestimates');
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

const apiInstance = new RatingsApi();
const ids = ["AAPL-USA"]; // [String] | Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
const opts = {
  'startDate': 2019-07-30, // String | Start date for point in time of estimates expressed in YYYY-MM-DD format.
  'endDate': 2020-07-30, // String | End date for point in time of estimates expressed in YYYY-MM-DD format.
  'frequency': D // String | Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.  
};

// Call api endpoint
apiInstance.getConsensusRatings(ids, opts).then(
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
 **ids** | [**[String]**](String.md)| Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. &lt;p&gt;***ids limit** &#x3D;  3000 per request*&lt;/p&gt; * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. *  | 
 **startDate** | **String**| Start date for point in time of estimates expressed in YYYY-MM-DD format. | [optional] 
 **endDate** | **String**| End date for point in time of estimates expressed in YYYY-MM-DD format. | [optional] 
 **frequency** | **String**| Controls the frequency of the data returned.   * **D** &#x3D; Daily   * **W** &#x3D; Weekly, based on the last day of the week of the start date.   * **AM** &#x3D; Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** &#x3D; Quarterly, based on the start date.   * **AY** &#x3D; Actual Annual, based on the start date.   | [optional] [default to &#39;D&#39;]

### Return type

[**ConsensusRatingsResponse**](ConsensusRatingsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConsensusRatingsForList

> ConsensusRatingsResponse getConsensusRatingsForList(consensusRatingsRequest)

Ratings consensus estimates to fetch Buy, Overweight, Hold, Underweight, and Sell.

Returns ratings from the FactSet Estimates database for current and historical for an individual security using rolling fiscal dates as of a specific date. 

### Example

```javascript
const { ApiClient, RatingsApi } = require('@factset/sdk-factsetestimates');
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

const apiInstance = new RatingsApi();
const consensusRatingsRequest = new factsetestimates.ConsensusRatingsRequest(); // ConsensusRatingsRequest | Request object for Estimate Data Items.

// Call api endpoint
apiInstance.getConsensusRatingsForList(consensusRatingsRequest).then(
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
 **consensusRatingsRequest** | [**ConsensusRatingsRequest**](ConsensusRatingsRequest.md)| Request object for Estimate Data Items. | 

### Return type

[**ConsensusRatingsResponse**](ConsensusRatingsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getDetailRatings

> DetailRatingsResponse getDetailRatings(ids, opts)

Broker Detail estimates to fetch Buy, Overweight, Hold, Underweight, and Sell.

Retrieves the Broker Level ratings for the requested Id and date range. Ratings include Buy, Hold, Sell, Overweight, and Underweight. &lt;p&gt;The &#x60;startDate&#x60; and &#x60;endDate&#x60; parameters controls the range of perspective dates. By default, the service will return the range of estimateDates within the latest company&#39;s reporting period. As you expand the date range, additional full historical reporting periods and all ratings estimateDates per broker will be returned.&lt;/p&gt; 

### Example

```javascript
const { ApiClient, RatingsApi } = require('@factset/sdk-factsetestimates');
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

const apiInstance = new RatingsApi();
const ids = ["AAPL-USA"]; // [String] | Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
const opts = {
  'startDate': 2019-07-30, // String | Start date for point in time of estimates expressed in YYYY-MM-DD format.
  'endDate': 2020-07-30 // String | End date for point in time of estimates expressed in YYYY-MM-DD format.
};

// Call api endpoint
apiInstance.getDetailRatings(ids, opts).then(
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
 **ids** | [**[String]**](String.md)| Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. &lt;p&gt;***ids limit** &#x3D;  3000 per request*&lt;/p&gt; * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. *  | 
 **startDate** | **String**| Start date for point in time of estimates expressed in YYYY-MM-DD format. | [optional] 
 **endDate** | **String**| End date for point in time of estimates expressed in YYYY-MM-DD format. | [optional] 

### Return type

[**DetailRatingsResponse**](DetailRatingsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDetailRatingsForList

> DetailRatingsResponse getDetailRatingsForList(detailRatingsRequest)

Broker Detail estimates to fetch Buy, Overweight, Hold, Underweight, and Sell.

Retrieves the Broker Level ratings for the requested Id and date range. Ratings include Buy, Hold, Sell, Overweight, and Underweight. &lt;p&gt;The &#x60;startDate&#x60; and &#x60;endDate&#x60; parameters controls the range of perspective dates. By default, the service will return the range of estimateDates within the latest company&#39;s reporting period. As you expand the date range, additional full historical reporting periods and all ratings estimateDates per broker will be returned.&lt;/p&gt; 

### Example

```javascript
const { ApiClient, RatingsApi } = require('@factset/sdk-factsetestimates');
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

const apiInstance = new RatingsApi();
const detailRatingsRequest = new factsetestimates.DetailRatingsRequest(); // DetailRatingsRequest | Request object for Detail Reatings Data Items.

// Call api endpoint
apiInstance.getDetailRatingsForList(detailRatingsRequest).then(
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
 **detailRatingsRequest** | [**DetailRatingsRequest**](DetailRatingsRequest.md)| Request object for Detail Reatings Data Items. | 

### Return type

[**DetailRatingsResponse**](DetailRatingsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
