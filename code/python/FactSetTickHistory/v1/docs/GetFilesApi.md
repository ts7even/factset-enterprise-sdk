# fds.sdk.FactSetTickHistory.GetFilesApi

All URIs are relative to *https://api-sandbox.factset.com/bulk-documents/tickhistory*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1_get_files_get**](GetFilesApi.md#v1_get_files_get) | **GET** /v1/get-files | Returns the files from tickhistory endpoint for the specified date range


# **v1_get_files_get**
> GetFilesResponse v1_get_files_get(request_id)

Returns the files from tickhistory endpoint for the specified date range

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetTickHistory
from fds.sdk.FactSetTickHistory.api import get_files_api
from fds.sdk.FactSetTickHistory.model.get_files_response import GetFilesResponse
from fds.sdk.FactSetTickHistory.model.get_files_status import GetFilesStatus
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/bulk-documents/tickhistory
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetTickHistory.Configuration(
    host = "https://api-sandbox.factset.com/bulk-documents/tickhistory"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetTickHistory.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetTickHistory.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetTickHistory.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = get_files_api.GetFilesApi(api_client)
    request_id = "requestId_example" # str | RequestId returned by request-files endpoint to poll and collect results of the query
    pagination_limit = 20 # int | Specifies the maximum number of results to return per response page (optional) if omitted the server will use the default value of 20
    pagination_offset = 0 # int | Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results (optional) if omitted the server will use the default value of 0

    # example passing only required values which don't have defaults set
    try:
        # Returns the files from tickhistory endpoint for the specified date range
        api_response = api_instance.v1_get_files_get(request_id)
        pprint(api_response)
    except fds.sdk.FactSetTickHistory.ApiException as e:
        print("Exception when calling GetFilesApi->v1_get_files_get: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Returns the files from tickhistory endpoint for the specified date range
        api_response = api_instance.v1_get_files_get(request_id, pagination_limit=pagination_limit, pagination_offset=pagination_offset)
        pprint(api_response)
    except fds.sdk.FactSetTickHistory.ApiException as e:
        print("Exception when calling GetFilesApi->v1_get_files_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request_id** | **str**| RequestId returned by request-files endpoint to poll and collect results of the query |
 **pagination_limit** | **int**| Specifies the maximum number of results to return per response page | [optional] if omitted the server will use the default value of 20
 **pagination_offset** | **int**| Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results | [optional] if omitted the server will use the default value of 0

### Return type

[**GetFilesResponse**](GetFilesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success&lt;/p&gt; **To download the output file copy the response url in a browser** |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
