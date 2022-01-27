# fds.sdk.FactSetConcordance.ManageMappingsApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_entity_universe**](ManageMappingsApi.md#get_entity_universe) | **GET** /factset-concordance/v1/entity-universe | View Universe for the requesting user.
[**save_entity_mapping**](ManageMappingsApi.md#save_entity_mapping) | **POST** /factset-concordance/v1/entity-mapping | Saves a single-mapping specified by the client.


# **get_entity_universe**
> EntityUniverseResponse get_entity_universe()

View Universe for the requesting user.

Retrieves all entity mappings' history made by the current user, or for a list of clientIds. 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetConcordance
from fds.sdk.FactSetConcordance.api import manage_mappings_api
from fds.sdk.FactSetConcordance.model.error_response import ErrorResponse
from fds.sdk.FactSetConcordance.model.entity_universe_response import EntityUniverseResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetConcordance.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetConcordance.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetConcordance.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetConcordance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = manage_mappings_api.ManageMappingsApi(api_client)
    client_id = ["abc-123","def-456"] # [str] | Filter by the clientId(s) created by the user in a previous mapping.  (optional)
    map_status = [
        "MAPPED",
    ] # [str] | Filter by the Entity Decisions that have the specified mapStatus, where -   * MAPPED - The requested Entity Name is successfully mapped to a FactSet Entity Id (-E)   * UNMAPPED - The requested Entity Name is unmapped by FactSet.   * INDETERMINATE - The requested Entity Name was unable to make a mapping.  (optional)
    offset = 0 # int | Starting row for records to return or rows to skip. (optional) if omitted the server will use the default value of 0
    limit = 10 # int | Limits the number of records in the response. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # View Universe for the requesting user.
        api_response = api_instance.get_entity_universe(client_id=client_id, map_status=map_status, offset=offset, limit=limit)
        pprint(api_response)
    except fds.sdk.FactSetConcordance.ApiException as e:
        print("Exception when calling ManageMappingsApi->get_entity_universe: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **[str]**| Filter by the clientId(s) created by the user in a previous mapping.  | [optional]
 **map_status** | **[str]**| Filter by the Entity Decisions that have the specified mapStatus, where -   * MAPPED - The requested Entity Name is successfully mapped to a FactSet Entity Id (-E)   * UNMAPPED - The requested Entity Name is unmapped by FactSet.   * INDETERMINATE - The requested Entity Name was unable to make a mapping.  | [optional]
 **offset** | **int**| Starting row for records to return or rows to skip. | [optional] if omitted the server will use the default value of 0
 **limit** | **int**| Limits the number of records in the response. | [optional]

### Return type

[**EntityUniverseResponse**](EntityUniverseResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response object for FactSet Concordance Universe detail. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_entity_mapping**
> EntityResponse save_entity_mapping(entity_mapping_request)

Saves a single-mapping specified by the client.

Saves a Concordance Mapping to the client universe. When making a post, all exiting values are overwritten in the database with the values passed in the request. clientId and clientName are required. 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetConcordance
from fds.sdk.FactSetConcordance.api import manage_mappings_api
from fds.sdk.FactSetConcordance.model.error_response import ErrorResponse
from fds.sdk.FactSetConcordance.model.entity_mapping_request import EntityMappingRequest
from fds.sdk.FactSetConcordance.model.entity_response import EntityResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetConcordance.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetConcordance.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetConcordance.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetConcordance.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = manage_mappings_api.ManageMappingsApi(api_client)
    entity_mapping_request = EntityMappingRequest(
        client_id="FDS-USA",
        entity_id="0016YD-E",
        client_name="FactSet",
        client_country="US",
        client_state="CT",
        client_url="www.factset.com",
    ) # EntityMappingRequest | A request to create a single mapping.

    # example passing only required values which don't have defaults set
    try:
        # Saves a single-mapping specified by the client.
        api_response = api_instance.save_entity_mapping(entity_mapping_request)
        pprint(api_response)
    except fds.sdk.FactSetConcordance.ApiException as e:
        print("Exception when calling ManageMappingsApi->save_entity_mapping: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entity_mapping_request** | [**EntityMappingRequest**](EntityMappingRequest.md)| A request to create a single mapping. |

### Return type

[**EntityResponse**](EntityResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response object for FactSet Concordance Entity. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
