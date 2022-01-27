# fds.sdk.FactSetPrices.SplitsApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_security_splits**](SplitsApi.md#get_security_splits) | **GET** /factset-prices/v1/splits | Gets full history of security Splits for a list of &#x60;ids&#x60;
[**get_security_splits_for_list**](SplitsApi.md#get_security_splits_for_list) | **POST** /factset-prices/v1/splits | Requests splits for a list of &#x60;ids&#x60;


# **get_security_splits**
> SplitsResponse get_security_splits(ids)

Gets full history of security Splits for a list of `ids`

Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetPrices
from fds.sdk.FactSetPrices.api import splits_api
from fds.sdk.FactSetPrices.model.error_response import ErrorResponse
from fds.sdk.FactSetPrices.model.splits_response import SplitsResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetPrices.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetPrices.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetPrices.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetPrices.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = splits_api.SplitsApi(api_client)
    ids = ["AAPL-USA"] # [str] | The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*

    # example passing only required values which don't have defaults set
    try:
        # Gets full history of security Splits for a list of `ids`
        api_response = api_instance.get_security_splits(ids)
        pprint(api_response)
    except fds.sdk.FactSetPrices.ApiException as e:
        print("Exception when calling SplitsApi->get_security_splits: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **[str]**| The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;* |

### Return type

[**SplitsResponse**](SplitsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of security splits |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_security_splits_for_list**
> SplitsResponse get_security_splits_for_list(splits_request)

Requests splits for a list of `ids`

Gets the entire history of splits for a given list of identifiers. Information returned includes the split factor, a plain text comment regarding the type of split, and the event date.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetPrices
from fds.sdk.FactSetPrices.api import splits_api
from fds.sdk.FactSetPrices.model.splits_request import SplitsRequest
from fds.sdk.FactSetPrices.model.error_response import ErrorResponse
from fds.sdk.FactSetPrices.model.splits_response import SplitsResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetPrices.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetPrices.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetPrices.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetPrices.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = splits_api.SplitsApi(api_client)
    splits_request = SplitsRequest(
        ids=IdsMax2000(["FDS-US"]),
    ) # SplitsRequest | Request object for `Security` split factors.

    # example passing only required values which don't have defaults set
    try:
        # Requests splits for a list of `ids`
        api_response = api_instance.get_security_splits_for_list(splits_request)
        pprint(api_response)
    except fds.sdk.FactSetPrices.ApiException as e:
        print("Exception when calling SplitsApi->get_security_splits_for_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **splits_request** | [**SplitsRequest**](SplitsRequest.md)| Request object for &#x60;Security&#x60; split factors. |

### Return type

[**SplitsResponse**](SplitsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Splits objects |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
