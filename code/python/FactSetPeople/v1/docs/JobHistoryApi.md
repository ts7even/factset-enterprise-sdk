# fds.sdk.FactSetPeople.JobHistoryApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_people_jobs**](JobHistoryApi.md#get_people_jobs) | **GET** /factset-people/v1/jobs | Returns the Job history of the person.
[**get_people_jobs_for_list**](JobHistoryApi.md#get_people_jobs_for_list) | **POST** /factset-people/v1/jobs | Returns the Job history for the large list of people.


# **get_people_jobs**
> PeopleJobsResponse get_people_jobs(ids)

Returns the Job history of the person.

Returns the `Job` history of the person referenced by the entityId specified in the request. 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetPeople
from fds.sdk.FactSetPeople.api import job_history_api
from fds.sdk.FactSetPeople.model.people_jobs_response import PeopleJobsResponse
from fds.sdk.FactSetPeople.model.error_response import ErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetPeople.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetPeople.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetPeople.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetPeople.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = job_history_api.JobHistoryApi(api_client)
    ids = ["0DPHLH-E","07MZV9-E"] # [str] | List of FactSet Person Entity identifier.
    status = "ALL" # str | Select only Jobs with a certain status primary, active, or inactive. (optional) if omitted the server will use the default value of "ALL"
    level = "DETAIL" # str | Select the level of detail only main Jobs or include other Jobs at a company. (optional) if omitted the server will use the default value of "DETAIL"
    type = "ALL" # str | Select only Jobs of a certain type board member or employee. (optional) if omitted the server will use the default value of "ALL"

    # example passing only required values which don't have defaults set
    try:
        # Returns the Job history of the person.
        api_response = api_instance.get_people_jobs(ids)
        pprint(api_response)
    except fds.sdk.FactSetPeople.ApiException as e:
        print("Exception when calling JobHistoryApi->get_people_jobs: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Returns the Job history of the person.
        api_response = api_instance.get_people_jobs(ids, status=status, level=level, type=type)
        pprint(api_response)
    except fds.sdk.FactSetPeople.ApiException as e:
        print("Exception when calling JobHistoryApi->get_people_jobs: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **[str]**| List of FactSet Person Entity identifier. |
 **status** | **str**| Select only Jobs with a certain status primary, active, or inactive. | [optional] if omitted the server will use the default value of "ALL"
 **level** | **str**| Select the level of detail only main Jobs or include other Jobs at a company. | [optional] if omitted the server will use the default value of "DETAIL"
 **type** | **str**| Select only Jobs of a certain type board member or employee. | [optional] if omitted the server will use the default value of "ALL"

### Return type

[**PeopleJobsResponse**](PeopleJobsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Job objects. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_people_jobs_for_list**
> PeopleJobsResponse get_people_jobs_for_list(people_jobs_request)

Returns the Job history for the large list of people.

Returns the `Job` history of the person referenced by the entityId specified in the request. 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetPeople
from fds.sdk.FactSetPeople.api import job_history_api
from fds.sdk.FactSetPeople.model.people_jobs_response import PeopleJobsResponse
from fds.sdk.FactSetPeople.model.people_jobs_request import PeopleJobsRequest
from fds.sdk.FactSetPeople.model.error_response import ErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetPeople.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetPeople.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetPeople.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetPeople.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = job_history_api.JobHistoryApi(api_client)
    people_jobs_request = PeopleJobsRequest(
        ids=Ids(["0DPHLH-E"]),
        status=Status("ALL"),
        level=Level("DETAIL"),
        type=Type("ALL"),
    ) # PeopleJobsRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Returns the Job history for the large list of people.
        api_response = api_instance.get_people_jobs_for_list(people_jobs_request)
        pprint(api_response)
    except fds.sdk.FactSetPeople.ApiException as e:
        print("Exception when calling JobHistoryApi->get_people_jobs_for_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **people_jobs_request** | [**PeopleJobsRequest**](PeopleJobsRequest.md)|  |

### Return type

[**PeopleJobsResponse**](PeopleJobsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of Job objects. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
