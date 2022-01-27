# fds.sdk.FactSetConcordance.SnowflakeApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_snowflake_entity_match_for_list**](SnowflakeApi.md#get_snowflake_entity_match_for_list) | **POST** /factset-concordance/v2/snowflake-entity-match | Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request.


# **get_snowflake_entity_match_for_list**
> SnowflakeEntityMatchResponse get_snowflake_entity_match_for_list(snowflake_entity_match_request)

Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request.

Finds the best candidate entities matching the given company name. Additional attributes can be supplied to narrow the search. *This endpoint is used natively within Snowflake and is not to be consumed directly by users. Reach out to your FactSet Account team to learn more about Concordance in Snowflake.* 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetConcordance
from fds.sdk.FactSetConcordance.api import snowflake_api
from fds.sdk.FactSetConcordance.model.snowflake_entity_match_request import SnowflakeEntityMatchRequest
from fds.sdk.FactSetConcordance.model.snowflake_entity_match_response import SnowflakeEntityMatchResponse
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
    api_instance = snowflake_api.SnowflakeApi(api_client)
    snowflake_entity_match_request = SnowflakeEntityMatchRequest(
        data=[0,"FactSet","US","CT","www.factset.com",1],
    ) # SnowflakeEntityMatchRequest | A request to match an entity name and its attributes within Snowflake.

    # example passing only required values which don't have defaults set
    try:
        # Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request.
        api_response = api_instance.get_snowflake_entity_match_for_list(snowflake_entity_match_request)
        pprint(api_response)
    except fds.sdk.FactSetConcordance.ApiException as e:
        print("Exception when calling SnowflakeApi->get_snowflake_entity_match_for_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snowflake_entity_match_request** | [**SnowflakeEntityMatchRequest**](SnowflakeEntityMatchRequest.md)| A request to match an entity name and its attributes within Snowflake. |

### Return type

[**SnowflakeEntityMatchResponse**](SnowflakeEntityMatchResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response object for the entity-match object in a snowflake friendly response model. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
