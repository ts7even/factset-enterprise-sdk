# fds.sdk.DocumentsDistributorDocuments.StreetAccountXMLAPIApi

All URIs are relative to *https://api.factset.com/bulk-documents*

Method | HTTP request | Description
------------- | ------------- | -------------
[**asynch_streetaccount_v1_check_status_get**](StreetAccountXMLAPIApi.md#asynch_streetaccount_v1_check_status_get) | **GET** /asynch/streetaccount/v1/check-status | Returns the status and percentDone of the requested jobID
[**asynch_streetaccount_v1_get_files_get**](StreetAccountXMLAPIApi.md#asynch_streetaccount_v1_get_files_get) | **GET** /asynch/streetaccount/v1/get-files | Returns the SA XML files for the specified daterange
[**asynch_streetaccount_v1_request_files_get**](StreetAccountXMLAPIApi.md#asynch_streetaccount_v1_request_files_get) | **GET** /asynch/streetaccount/v1/request-files | Returns the jobID


# **asynch_streetaccount_v1_check_status_get**
> CheckstatusResponse asynch_streetaccount_v1_check_status_get(job_id)

Returns the status and percentDone of the requested jobID

Need to plug-in the jobID got from /request-files into /check-status endpoint

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.DocumentsDistributorDocuments
from fds.sdk.DocumentsDistributorDocuments.api import street_account_xml_api_api
from fds.sdk.DocumentsDistributorDocuments.model.checkstatus_response import CheckstatusResponse
from fds.sdk.DocumentsDistributorDocuments.model.street_account_status import StreetAccountStatus
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/bulk-documents
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
    host = "https://api.factset.com/bulk-documents"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.DocumentsDistributorDocuments.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = street_account_xml_api_api.StreetAccountXMLAPIApi(api_client)
    job_id = "jobID_example" # str | jobID returned by the request-files endpoint to know the status and percentDone

    # example passing only required values which don't have defaults set
    try:
        # Returns the status and percentDone of the requested jobID
        api_response = api_instance.asynch_streetaccount_v1_check_status_get(job_id)
        pprint(api_response)
    except fds.sdk.DocumentsDistributorDocuments.ApiException as e:
        print("Exception when calling StreetAccountXMLAPIApi->asynch_streetaccount_v1_check_status_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **str**| jobID returned by the request-files endpoint to know the status and percentDone |

### Return type

[**CheckstatusResponse**](CheckstatusResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asynch_streetaccount_v1_get_files_get**
> GetfilesResponse asynch_streetaccount_v1_get_files_get(job_id)

Returns the SA XML files for the specified daterange

Need to plug-in the jobID got from /request-files into /check-status endpoint

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.DocumentsDistributorDocuments
from fds.sdk.DocumentsDistributorDocuments.api import street_account_xml_api_api
from fds.sdk.DocumentsDistributorDocuments.model.getfiles_response import GetfilesResponse
from fds.sdk.DocumentsDistributorDocuments.model.street_account_status import StreetAccountStatus
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/bulk-documents
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
    host = "https://api.factset.com/bulk-documents"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.DocumentsDistributorDocuments.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = street_account_xml_api_api.StreetAccountXMLAPIApi(api_client)
    job_id = "jobID_example" # str | jobID returned by the request-files endpoint to collect the results of the query

    # example passing only required values which don't have defaults set
    try:
        # Returns the SA XML files for the specified daterange
        api_response = api_instance.asynch_streetaccount_v1_get_files_get(job_id)
        pprint(api_response)
    except fds.sdk.DocumentsDistributorDocuments.ApiException as e:
        print("Exception when calling StreetAccountXMLAPIApi->asynch_streetaccount_v1_get_files_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **str**| jobID returned by the request-files endpoint to collect the results of the query |

### Return type

[**GetfilesResponse**](GetfilesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **asynch_streetaccount_v1_request_files_get**
> RequestfilesResponse asynch_streetaccount_v1_request_files_get(start_date, end_date)

Returns the jobID

Give the startDate and endDate parameters as request parameters in the /request-files endpoint, it returns the jobID. startDate and endDate should be in YYYY-MM-DDTHH:MM:SSZ format  This API only supports adhoc requests to retrieve historical files and does not support real-time       files and if you interested in require real-time push should consider the other three methods         (pushed via SFTP, to QNT account, or your Azure Storage) and Due to technical limitation, FactSet can only send out 10,000 files per request

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.DocumentsDistributorDocuments
from fds.sdk.DocumentsDistributorDocuments.api import street_account_xml_api_api
from fds.sdk.DocumentsDistributorDocuments.model.requestfiles_response import RequestfilesResponse
from fds.sdk.DocumentsDistributorDocuments.model.street_account_status import StreetAccountStatus
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/bulk-documents
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
    host = "https://api.factset.com/bulk-documents"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.DocumentsDistributorDocuments.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.DocumentsDistributorDocuments.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = street_account_xml_api_api.StreetAccountXMLAPIApi(api_client)
    start_date = dateutil_parser('1970-01-01').date() # date | Date from which data is required. Should be YYYY-MM-DDTHH:MM:SSZ format
    end_date = dateutil_parser('1970-01-01').date() # date | The date until which the data is to be fetched. Should be YYYY-MM-DDTHH:MM:SSZ format

    # example passing only required values which don't have defaults set
    try:
        # Returns the jobID
        api_response = api_instance.asynch_streetaccount_v1_request_files_get(start_date, end_date)
        pprint(api_response)
    except fds.sdk.DocumentsDistributorDocuments.ApiException as e:
        print("Exception when calling StreetAccountXMLAPIApi->asynch_streetaccount_v1_request_files_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **date**| Date from which data is required. Should be YYYY-MM-DDTHH:MM:SSZ format |
 **end_date** | **date**| The date until which the data is to be fetched. Should be YYYY-MM-DDTHH:MM:SSZ format |

### Return type

[**RequestfilesResponse**](RequestfilesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
