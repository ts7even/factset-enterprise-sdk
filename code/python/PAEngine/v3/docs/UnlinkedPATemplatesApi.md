# fds.sdk.PAEngine.UnlinkedPATemplatesApi

All URIs are relative to *https://api.factset.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_unlinked_pa_templates**](UnlinkedPATemplatesApi.md#create_unlinked_pa_templates) | **POST** /analytics/engines/pa/v3/unlinked-templates | Create unlinked PA template
[**delete_unlinked_pa_templates**](UnlinkedPATemplatesApi.md#delete_unlinked_pa_templates) | **DELETE** /analytics/engines/pa/v3/unlinked-templates/{id} | Delete unlinked PA template
[**get_default_unlinked_pa_template_types**](UnlinkedPATemplatesApi.md#get_default_unlinked_pa_template_types) | **GET** /analytics/engines/pa/v3/unlinked-templates/template-types | Get default unlinked PA template types.
[**get_details_type**](UnlinkedPATemplatesApi.md#get_details_type) | **GET** /analytics/engines/pa/v3/unlinked-templates/template-types/{id} | Get unlinked PA template type details by id.
[**get_unlinked_pa_templates**](UnlinkedPATemplatesApi.md#get_unlinked_pa_templates) | **GET** /analytics/engines/pa/v3/unlinked-templates | Get unlinked PA templates
[**get_unlinked_pa_templates_by_id**](UnlinkedPATemplatesApi.md#get_unlinked_pa_templates_by_id) | **GET** /analytics/engines/pa/v3/unlinked-templates/{id} | Get unlinked PA template details by id
[**update_unlinked_pa_templates**](UnlinkedPATemplatesApi.md#update_unlinked_pa_templates) | **PUT** /analytics/engines/pa/v3/unlinked-templates/{id} | Update unlinked PA template


# **create_unlinked_pa_templates**
> UnlinkedPATemplatePostSummaryRoot create_unlinked_pa_templates(unlinked_pa_template_parameters_root)

Create unlinked PA template

This endpoint creates a template which is not linked to any specific PA3 tile.     Remarks:    *   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary.       If no mandatory fields are passed, then we can use the template as a component and skip the component creation.        *   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"dates\", \"currencyisocode\" and \"componentdetail\".    *   We cannot override the Locked fields when creating the Component.    *   Mandatory and locked strings are mutually exclusive.    *   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.    *   Multi-horizon frequencies are not supported through this endpoint.    *   Componentdetail supports securities, groups, and totals as well but if we don't pass anything that defaults to securities.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.PAEngine
from fds.sdk.PAEngine.api import unlinked_pa_templates_api
from fds.sdk.PAEngine.model.unlinked_pa_template_post_summary_root import UnlinkedPATemplatePostSummaryRoot
from fds.sdk.PAEngine.model.unlinked_pa_template_parameters_root import UnlinkedPATemplateParametersRoot
from fds.sdk.PAEngine.model.client_error_response import ClientErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.PAEngine.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.PAEngine.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.PAEngine.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.PAEngine.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unlinked_pa_templates_api.UnlinkedPATemplatesApi(api_client)
    unlinked_pa_template_parameters_root = UnlinkedPATemplateParametersRoot(
        data=UnlinkedPATemplateParameters(
            directory="directory_example",
            template_type_id="template_type_id_example",
            description="description_example",
            accounts=[
                PAIdentifier(
                    id="id_example",
                    holdingsmode="holdingsmode_example",
                ),
            ],
            benchmarks=[
                PAIdentifier(
                    id="id_example",
                    holdingsmode="holdingsmode_example",
                ),
            ],
            columns=[
                PACalculationColumn(
                    id="id_example",
                    statistics=[
                        "statistics_example",
                    ],
                ),
            ],
            dates=PADateParameters(
                startdate="startdate_example",
                enddate="enddate_example",
                frequency="frequency_example",
            ),
            groups=[
                PACalculationGroup(
                    id="id_example",
                ),
            ],
            currencyisocode="currencyisocode_example",
            componentdetail="componentdetail_example",
            content=TemplateContentTypes(
                mandatory=[
                    "mandatory_example",
                ],
                optional=[
                    "optional_example",
                ],
                locked=[
                    "locked_example",
                ],
            ),
        ),
        meta=None,
    ) # UnlinkedPATemplateParametersRoot | Request Parameters

    # example passing only required values which don't have defaults set
    try:
        # Create unlinked PA template
        api_response = api_instance.create_unlinked_pa_templates(unlinked_pa_template_parameters_root)
        pprint(api_response)
    except fds.sdk.PAEngine.ApiException as e:
        print("Exception when calling UnlinkedPATemplatesApi->create_unlinked_pa_templates: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unlinked_pa_template_parameters_root** | [**UnlinkedPATemplateParametersRoot**](UnlinkedPATemplateParametersRoot.md)| Request Parameters |

### Return type

[**UnlinkedPATemplatePostSummaryRoot**](UnlinkedPATemplatePostSummaryRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Expected response, created a unlinked PA template. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**400** | Invalid data provided. Please check the request parameters before attempting again. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**401** | Missing or invalid authentication. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**403** | User is forbidden with current credentials |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**406** | Unsupported Accept header. Header needs to be set to application/json. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**429** | Rate limit reached. Wait till the time specified in Retry-After header value to make further requests. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * Retry-After - Time to wait in seconds before making a new request as the rate limit has reached. <br>  |
**500** | Server error. Log the X-DataDirect-Request-Key header to assist in troubleshooting. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**503** | Request timed out. Retry the request in sometime. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_unlinked_pa_templates**
> delete_unlinked_pa_templates()

Delete unlinked PA template

This endpoint deletes an existing unliked PA template.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.PAEngine
from fds.sdk.PAEngine.api import unlinked_pa_templates_api
from fds.sdk.PAEngine.model.client_error_response import ClientErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.PAEngine.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.PAEngine.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.PAEngine.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.PAEngine.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unlinked_pa_templates_api.UnlinkedPATemplatesApi(api_client)

    # example passing only required values which don't have defaults set
    try:
        # Delete unlinked PA template
        api_instance.delete_unlinked_pa_templates()
    except fds.sdk.PAEngine.ApiException as e:
        print("Exception when calling UnlinkedPATemplatesApi->delete_unlinked_pa_templates: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique identifier for an unlinked PA template | defaults to "01234567890123456789012345678901"

### Return type

void (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Expected response, deleted the unlinked PA template successfully. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**400** | Invalid data provided. Please check the request parameters before attempting again. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**401** | Missing or invalid authentication. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**403** | User is forbidden with current credentials |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**404** | Template not found. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**406** | Unsupported Accept header. Header needs to be set to application/json. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**429** | Rate limit reached. Wait till the time specified in Retry-After header value to make further requests. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * Retry-After - Time to wait in seconds before making a new request as the rate limit has reached. <br>  |
**500** | Server error. Log the X-DataDirect-Request-Key header to assist in troubleshooting. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**503** | Request timed out. Retry the request in sometime. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_default_unlinked_pa_template_types**
> UnlinkedPATemplateCategoryAndTypeRoot get_default_unlinked_pa_template_types()

Get default unlinked PA template types.

This endpoint fetches default unlinked PA template types.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.PAEngine
from fds.sdk.PAEngine.api import unlinked_pa_templates_api
from fds.sdk.PAEngine.model.unlinked_pa_template_category_and_type_root import UnlinkedPATemplateCategoryAndTypeRoot
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.PAEngine.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.PAEngine.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.PAEngine.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.PAEngine.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unlinked_pa_templates_api.UnlinkedPATemplatesApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get default unlinked PA template types.
        api_response = api_instance.get_default_unlinked_pa_template_types()
        pprint(api_response)
    except fds.sdk.PAEngine.ApiException as e:
        print("Exception when calling UnlinkedPATemplatesApi->get_default_unlinked_pa_template_types: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**UnlinkedPATemplateCategoryAndTypeRoot**](UnlinkedPATemplateCategoryAndTypeRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response, default unlinked PA template types |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**401** | Missing or invalid authentication. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**403** | User is forbidden with current credentials |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**406** | Unsupported Accept header. Header needs to be set to application/json. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**429** | Rate limit reached. Wait till the time specified in Retry-After header value to make further requests. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * Retry-After - Time to wait in seconds before making a new request as the rate limit has reached. <br>  |
**500** | Server error. Log the X-DataDirect-Request-Key header to assist in troubleshooting. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**503** | Request timed out. Retry the request in sometime. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_details_type**
> UnlinkedPATemplateCategoryAndTypeDetailsRoot get_details_type(id)

Get unlinked PA template type details by id.

This endpoint fetches the unlinked PA template type details.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.PAEngine
from fds.sdk.PAEngine.api import unlinked_pa_templates_api
from fds.sdk.PAEngine.model.unlinked_pa_template_category_and_type_details_root import UnlinkedPATemplateCategoryAndTypeDetailsRoot
from fds.sdk.PAEngine.model.client_error_response import ClientErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.PAEngine.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.PAEngine.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.PAEngine.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.PAEngine.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unlinked_pa_templates_api.UnlinkedPATemplatesApi(api_client)
    id = "id_example" # str | Unique identifier for an unlinked PA template type

    # example passing only required values which don't have defaults set
    try:
        # Get unlinked PA template type details by id.
        api_response = api_instance.get_details_type(id)
        pprint(api_response)
    except fds.sdk.PAEngine.ApiException as e:
        print("Exception when calling UnlinkedPATemplatesApi->get_details_type: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique identifier for an unlinked PA template type |

### Return type

[**UnlinkedPATemplateCategoryAndTypeDetailsRoot**](UnlinkedPATemplateCategoryAndTypeDetailsRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response, details of the unlinked PA template type |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**400** | Invalid data provided. Please check the request parameters before attempting again. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**401** | Missing or invalid authentication. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**403** | User is forbidden with current credentials |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**404** | Unlinked PA template type not found. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**406** | Unsupported Accept header. Header needs to be set to application/json. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**429** | Rate limit reached. Wait till the time specified in Retry-After header value to make further requests. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * Retry-After - Time to wait in seconds before making a new request as the rate limit has reached. <br>  |
**500** | Server error. Log the X-DataDirect-Request-Key header to assist in troubleshooting. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**503** | Request timed out. Retry the request in sometime. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_unlinked_pa_templates**
> UnlinkedPATemplateSummaryRoot get_unlinked_pa_templates()

Get unlinked PA templates

This endpoint returns the list of unlinked PA templates.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.PAEngine
from fds.sdk.PAEngine.api import unlinked_pa_templates_api
from fds.sdk.PAEngine.model.unlinked_pa_template_summary_root import UnlinkedPATemplateSummaryRoot
from fds.sdk.PAEngine.model.client_error_response import ClientErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.PAEngine.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.PAEngine.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.PAEngine.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.PAEngine.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unlinked_pa_templates_api.UnlinkedPATemplatesApi(api_client)
    directory = "Personal:UninkedPATemplates/" # str | Get unlinked PA templates in path. (optional) if omitted the server will use the default value of "Personal:UninkedPATemplates/"
    category = "Weights" # str | Get unlinked PA templates by category. (optional) if omitted the server will use the default value of "Weights"

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get unlinked PA templates
        api_response = api_instance.get_unlinked_pa_templates(directory=directory, category=category)
        pprint(api_response)
    except fds.sdk.PAEngine.ApiException as e:
        print("Exception when calling UnlinkedPATemplatesApi->get_unlinked_pa_templates: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **str**| Get unlinked PA templates in path. | [optional] if omitted the server will use the default value of "Personal:UninkedPATemplates/"
 **category** | **str**| Get unlinked PA templates by category. | [optional] if omitted the server will use the default value of "Weights"

### Return type

[**UnlinkedPATemplateSummaryRoot**](UnlinkedPATemplateSummaryRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response, returns a list of unlinked PA templates. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**400** | Invalid data provided. Please check the request parameters before attempting again. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**401** | Missing or invalid authentication. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**403** | User is forbidden with current credentials |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**406** | Unsupported Accept header. Header needs to be set to application/json. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**429** | Rate limit reached. Wait till the time specified in Retry-After header value to make further requests. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * Retry-After - Time to wait in seconds before making a new request as the rate limit has reached. <br>  |
**500** | Server error. Log the X-DataDirect-Request-Key header to assist in troubleshooting. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**503** | Request timed out. Retry the request in sometime. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_unlinked_pa_templates_by_id**
> UnlinkedPATemplateRoot get_unlinked_pa_templates_by_id()

Get unlinked PA template details by id

This endpoint fetches the template settings.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.PAEngine
from fds.sdk.PAEngine.api import unlinked_pa_templates_api
from fds.sdk.PAEngine.model.unlinked_pa_template_root import UnlinkedPATemplateRoot
from fds.sdk.PAEngine.model.client_error_response import ClientErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.PAEngine.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.PAEngine.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.PAEngine.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.PAEngine.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unlinked_pa_templates_api.UnlinkedPATemplatesApi(api_client)

    # example passing only required values which don't have defaults set
    try:
        # Get unlinked PA template details by id
        api_response = api_instance.get_unlinked_pa_templates_by_id()
        pprint(api_response)
    except fds.sdk.PAEngine.ApiException as e:
        print("Exception when calling UnlinkedPATemplatesApi->get_unlinked_pa_templates_by_id: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Unique identifier for an unlinked PA template | defaults to "01234567890123456789012345678901"

### Return type

[**UnlinkedPATemplateRoot**](UnlinkedPATemplateRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response, get details of the unlinked PA template. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**400** | Invalid data provided. Please check the request parameters before attempting again. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**401** | Missing or invalid authentication. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**403** | User is forbidden with current credentials |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**404** | Template not found. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**406** | Unsupported Accept header. Header needs to be set to application/json. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**429** | Rate limit reached. Wait till the time specified in Retry-After header value to make further requests. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * Retry-After - Time to wait in seconds before making a new request as the rate limit has reached. <br>  |
**500** | Server error. Log the X-DataDirect-Request-Key header to assist in troubleshooting. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**503** | Request timed out. Retry the request in sometime. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_unlinked_pa_templates**
> UnlinkedPATemplatePostSummaryRoot update_unlinked_pa_templates(unlinked_pa_template_update_parameters_root)

Update unlinked PA template

This endpoint updates an existing unlinked PA template.    Remarks:                *   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary.       If no mandatory fields are passed, then we can use the template as a component and skip the component creation.        *   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"dates\", \"currencyisocode\" and \"componentdetail\".    *   We cannot override the Locked fields when creating the Component.    *   Mandatory and locked strings are mutually exclusive.    *   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.    *   Multi-horizon frequencies are not supported through this endpoint.    *   Componentdetail supports securities, groups, and totals as well but if we don't pass anything that defaults to securities.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.PAEngine
from fds.sdk.PAEngine.api import unlinked_pa_templates_api
from fds.sdk.PAEngine.model.unlinked_pa_template_post_summary_root import UnlinkedPATemplatePostSummaryRoot
from fds.sdk.PAEngine.model.unlinked_pa_template_update_parameters_root import UnlinkedPATemplateUpdateParametersRoot
from fds.sdk.PAEngine.model.client_error_response import ClientErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.PAEngine.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.PAEngine.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.PAEngine.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.PAEngine.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unlinked_pa_templates_api.UnlinkedPATemplatesApi(api_client)
    unlinked_pa_template_update_parameters_root = UnlinkedPATemplateUpdateParametersRoot(
        data=UnlinkedPATemplateUpdateParameters(
            description="description_example",
            accounts=[
                PAIdentifier(
                    id="id_example",
                    holdingsmode="holdingsmode_example",
                ),
            ],
            benchmarks=[
                PAIdentifier(
                    id="id_example",
                    holdingsmode="holdingsmode_example",
                ),
            ],
            columns=[
                PACalculationColumn(
                    id="id_example",
                    statistics=[
                        "statistics_example",
                    ],
                ),
            ],
            dates=PADateParameters(
                startdate="startdate_example",
                enddate="enddate_example",
                frequency="frequency_example",
            ),
            groups=[
                PACalculationGroup(
                    id="id_example",
                ),
            ],
            currencyisocode="currencyisocode_example",
            componentdetail="componentdetail_example",
            content=TemplateContentTypes(
                mandatory=[
                    "mandatory_example",
                ],
                optional=[
                    "optional_example",
                ],
                locked=[
                    "locked_example",
                ],
            ),
        ),
        meta=None,
    ) # UnlinkedPATemplateUpdateParametersRoot | Request Parameters

    # example passing only required values which don't have defaults set
    try:
        # Update unlinked PA template
        api_response = api_instance.update_unlinked_pa_templates(unlinked_pa_template_update_parameters_root)
        pprint(api_response)
    except fds.sdk.PAEngine.ApiException as e:
        print("Exception when calling UnlinkedPATemplatesApi->update_unlinked_pa_templates: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unlinked_pa_template_update_parameters_root** | [**UnlinkedPATemplateUpdateParametersRoot**](UnlinkedPATemplateUpdateParametersRoot.md)| Request Parameters |
 **id** | **str**| Unique identifier for an unlinked PA template | defaults to "01234567890123456789012345678901"

### Return type

[**UnlinkedPATemplatePostSummaryRoot**](UnlinkedPATemplatePostSummaryRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Expected response, updated the unlinked PA template. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**400** | Invalid data provided. Please check the request parameters before attempting again. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**401** | Missing or invalid authentication. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**403** | User is forbidden with current credentials |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**404** | Template not found. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**406** | Unsupported Accept header. Header needs to be set to application/json. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * X-FactSet-Api-RateLimit-Limit - Number of allowed requests for the time window. <br>  * X-FactSet-Api-RateLimit-Remaining - Number of requests left for the time window. <br>  * X-FactSet-Api-RateLimit-Reset - Number of seconds remaining till rate limit resets. <br>  |
**429** | Rate limit reached. Wait till the time specified in Retry-After header value to make further requests. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  * Retry-After - Time to wait in seconds before making a new request as the rate limit has reached. <br>  |
**500** | Server error. Log the X-DataDirect-Request-Key header to assist in troubleshooting. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |
**503** | Request timed out. Retry the request in sometime. |  * X-DataDirect-Request-Key - FactSet&#39;s request key header. <br>  * X-FactSet-Api-Request-Key - Key to uniquely identify an Analytics API request. Only available after successful authentication. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
