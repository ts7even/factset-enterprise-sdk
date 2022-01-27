# fds.sdk.Symbology.BloombergFIGIApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_translate_bloomberg**](BloombergFIGIApi.md#batch_translate_bloomberg) | **POST** /symbology/v1/bloomberg | Translate market security symbols into Bloomberg Identifiers.
[**translate_bloomberg**](BloombergFIGIApi.md#translate_bloomberg) | **GET** /symbology/v1/bloomberg | Translate FactSet symbols into Bloomberg Identifiers.


# **batch_translate_bloomberg**
> BloombergTranslationResponse batch_translate_bloomberg(bloomberg_translation_request)

Translate market security symbols into Bloomberg Identifiers.

Returns the current security, composite, and regional identifiers from Bloomberg. <p>This method is best for requesting **large universes** of `ids`.</p><p>**This endpoint is included with all other Content API packages.**</p>

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.Symbology
from fds.sdk.Symbology.api import bloomberg_figi_api
from fds.sdk.Symbology.model.error_response import ErrorResponse
from fds.sdk.Symbology.model.bloomberg_translation_response import BloombergTranslationResponse
from fds.sdk.Symbology.model.bloomberg_translation_request import BloombergTranslationRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.Symbology.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.Symbology.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.Symbology.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.Symbology.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = bloomberg_figi_api.BloombergFIGIApi(api_client)
    bloomberg_translation_request = BloombergTranslationRequest(
        ids=GetIds(["GOOGL-US"]),
    ) # BloombergTranslationRequest | Request Body for Bloomberg FIGIs.

    # example passing only required values which don't have defaults set
    try:
        # Translate market security symbols into Bloomberg Identifiers.
        api_response = api_instance.batch_translate_bloomberg(bloomberg_translation_request)
        pprint(api_response)
    except fds.sdk.Symbology.ApiException as e:
        print("Exception when calling BloombergFIGIApi->batch_translate_bloomberg: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bloomberg_translation_request** | [**BloombergTranslationRequest**](BloombergTranslationRequest.md)| Request Body for Bloomberg FIGIs. |

### Return type

[**BloombergTranslationResponse**](BloombergTranslationResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Symbol Translation objects. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivty 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_bloomberg**
> BloombergTranslationResponse translate_bloomberg(ids)

Translate FactSet symbols into Bloomberg Identifiers.

Returns the current security, composite, regional Bloomberg (FIGI) unique identifiers.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.Symbology
from fds.sdk.Symbology.api import bloomberg_figi_api
from fds.sdk.Symbology.model.error_response import ErrorResponse
from fds.sdk.Symbology.model.bloomberg_translation_response import BloombergTranslationResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.Symbology.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.Symbology.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.Symbology.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.Symbology.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = bloomberg_figi_api.BloombergFIGIApi(api_client)
    ids = ["GOOGL-US"] # [str] | Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.

    # example passing only required values which don't have defaults set
    try:
        # Translate FactSet symbols into Bloomberg Identifiers.
        api_response = api_instance.translate_bloomberg(ids)
        pprint(api_response)
    except fds.sdk.Symbology.ApiException as e:
        print("Exception when calling BloombergFIGIApi->translate_bloomberg: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **[str]**| Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, &#x60;requestId&#x60;. |

### Return type

[**BloombergTranslationResponse**](BloombergTranslationResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response of Ticker-Exchange or Ticker-Region for a given security. |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivty 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
