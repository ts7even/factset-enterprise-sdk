# fds.sdk.IRNMeetings.EventsApi

All URIs are relative to *https://api-sandbox.factset.com/research/irn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_events**](EventsApi.md#get_events) | **GET** /v1/meetings/{meetingId}/events | Get all the record events that belong to a meeting
[**get_record_event**](EventsApi.md#get_record_event) | **GET** /v1/meetings/{meetingId}/events/{recordEventId} | Get details of a record event of a meeting


# **get_events**
> [RecordEventSummaryDto] get_events(meeting_id)

Get all the record events that belong to a meeting

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNMeetings
from fds.sdk.IRNMeetings.api import events_api
from fds.sdk.IRNMeetings.model.problem_details import ProblemDetails
from fds.sdk.IRNMeetings.model.record_event_summary_dto import RecordEventSummaryDto
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNMeetings.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNMeetings.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNMeetings.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNMeetings.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = events_api.EventsApi(api_client)
    meeting_id = "meetingId_example" # str | Meeting Id

    # example passing only required values which don't have defaults set
    try:
        # Get all the record events that belong to a meeting
        api_response = api_instance.get_events(meeting_id)
        pprint(api_response)
    except fds.sdk.IRNMeetings.ApiException as e:
        print("Exception when calling EventsApi->get_events: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meeting_id** | **str**| Meeting Id |

### Return type

[**[RecordEventSummaryDto]**](RecordEventSummaryDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_record_event**
> MeetingEventDto get_record_event(meeting_id, record_event_id)

Get details of a record event of a meeting

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNMeetings
from fds.sdk.IRNMeetings.api import events_api
from fds.sdk.IRNMeetings.model.problem_details import ProblemDetails
from fds.sdk.IRNMeetings.model.meeting_event_dto import MeetingEventDto
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNMeetings.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNMeetings.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNMeetings.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNMeetings.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = events_api.EventsApi(api_client)
    meeting_id = "meetingId_example" # str | Meeting Id
    record_event_id = "recordEventId_example" # str | Record Event Id

    # example passing only required values which don't have defaults set
    try:
        # Get details of a record event of a meeting
        api_response = api_instance.get_record_event(meeting_id, record_event_id)
        pprint(api_response)
    except fds.sdk.IRNMeetings.ApiException as e:
        print("Exception when calling EventsApi->get_record_event: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **meeting_id** | **str**| Meeting Id |
 **record_event_id** | **str**| Record Event Id |

### Return type

[**MeetingEventDto**](MeetingEventDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
