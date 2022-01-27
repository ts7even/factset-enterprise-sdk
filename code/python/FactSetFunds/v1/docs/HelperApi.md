# fds.sdk.FactSetFunds.HelperApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_statuses**](HelperApi.md#get_statuses) | **GET** /factset-funds/v1/status | Get Fund&#39;s current status and database availability
[**get_statuses_for_list**](HelperApi.md#get_statuses_for_list) | **POST** /factset-funds/v1/status | Get Fund&#39;s current status and database availability for large list of ids.


# **get_statuses**
> StatusesResponse get_statuses(ids)

Get Fund's current status and database availability

Get the funds active status, share class status, and database availability. Most common use is for coverage checks and id resolution checks. 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetFunds
from fds.sdk.FactSetFunds.api import helper_api
from fds.sdk.FactSetFunds.model.error_response import ErrorResponse
from fds.sdk.FactSetFunds.model.statuses_response import StatusesResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetFunds.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetFunds.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetFunds.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetFunds.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = helper_api.HelperApi(api_client)
    ids = ["MABAX-US"] # [str] | The requested fund identifier. FactSet Identifiers, tickers, CUSIP, SEDOL, and ISIN are accepted inputs. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 

    # example passing only required values which don't have defaults set
    try:
        # Get Fund's current status and database availability
        api_response = api_instance.get_statuses(ids)
        pprint(api_response)
    except fds.sdk.FactSetFunds.ApiException as e:
        print("Exception when calling HelperApi->get_statuses: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **[str]**| The requested fund identifier. FactSet Identifiers, tickers, CUSIP, SEDOL, and ISIN are accepted inputs. &lt;p&gt;***ids limit** &#x3D;  1000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*  |

### Return type

[**StatusesResponse**](StatusesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Statuses response object. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_statuses_for_list**
> StatusesResponse get_statuses_for_list(statuses_request)

Get Fund's current status and database availability for large list of ids.

Get the funds active status, share class status, and database availability. Most common use is for coverage checks and id resolution checks. 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetFunds
from fds.sdk.FactSetFunds.api import helper_api
from fds.sdk.FactSetFunds.model.error_response import ErrorResponse
from fds.sdk.FactSetFunds.model.statuses_response import StatusesResponse
from fds.sdk.FactSetFunds.model.statuses_request import StatusesRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetFunds.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetFunds.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetFunds.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetFunds.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = helper_api.HelperApi(api_client)
    statuses_request = StatusesRequest(
        ids=Ids(["MABAX","FCNTX"]),
    ) # StatusesRequest | The Statuses request body, allowing the user to specify a list of ids.

    # example passing only required values which don't have defaults set
    try:
        # Get Fund's current status and database availability for large list of ids.
        api_response = api_instance.get_statuses_for_list(statuses_request)
        pprint(api_response)
    except fds.sdk.FactSetFunds.ApiException as e:
        print("Exception when calling HelperApi->get_statuses_for_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statuses_request** | [**StatusesRequest**](StatusesRequest.md)| The Statuses request body, allowing the user to specify a list of ids. |

### Return type

[**StatusesResponse**](StatusesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Statuses response object. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
