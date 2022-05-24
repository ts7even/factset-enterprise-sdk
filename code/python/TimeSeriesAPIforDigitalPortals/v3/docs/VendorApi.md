# fds.sdk.TimeSeriesAPIforDigitalPortals.VendorApi

All URIs are relative to *http://api.factset.com/wealth/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_vendor_chart_iq_time_series_eod_list**](VendorApi.md#post_vendor_chart_iq_time_series_eod_list) | **POST** /vendor/chartIQ/timeSeries/eod/list | End-of-day time series data for a notation.
[**post_vendor_chart_iq_time_series_eod_subsample_get**](VendorApi.md#post_vendor_chart_iq_time_series_eod_subsample_get) | **POST** /vendor/chartIQ/timeSeries/eod/subsample/get | Single subsample end-of-day data for a notation.
[**post_vendor_chart_iq_time_series_eod_subsample_list**](VendorApi.md#post_vendor_chart_iq_time_series_eod_subsample_list) | **POST** /vendor/chartIQ/timeSeries/eod/subsample/list | Subsampled end-of-day time series data for a notation.
[**post_vendor_chart_iq_time_series_intraday_subsample_get**](VendorApi.md#post_vendor_chart_iq_time_series_intraday_subsample_get) | **POST** /vendor/chartIQ/timeSeries/intraday/subsample/get | Single subsample intraday data for a notation.
[**post_vendor_chart_iq_time_series_intraday_subsample_list**](VendorApi.md#post_vendor_chart_iq_time_series_intraday_subsample_list) | **POST** /vendor/chartIQ/timeSeries/intraday/subsample/list | Subsampled intraday time series data for a notation.


# **post_vendor_chart_iq_time_series_eod_list**
> InlineResponse200 post_vendor_chart_iq_time_series_eod_list(body)

End-of-day time series data for a notation.

End-of-day time series data for a notation. The resulting time series is always adjusted for currency changes.<br><br>Pagination to a previous page is not supported and `pagination.previous` is always `null`.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.TimeSeriesAPIforDigitalPortals
from fds.sdk.TimeSeriesAPIforDigitalPortals.api import vendor_api
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response200 import InlineResponse200
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object import InlineObject
from pprint import pprint

# See configuration.py for a list of all supported configuration parameters.

# Examples for each supported authentication method are below,
# choose one that satisfies your use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://github.com/FactSet/enterprise-sdk#oauth-20
# for information on how to create the app-config.json file
# See https://github.com/FactSet/enterprise-sdk-utils-python#authentication
# for more information on using the ConfidentialClient class
configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.TimeSeriesAPIforDigitalPortals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vendor_api.VendorApi(api_client)

    body = InlineObject(
        data=VendorChartIQTimeSeriesEodListData(
            id="id_example",
            type="trade",
            quality="DLY",
            range=VendorChartIQTimeSeriesEodListDataRange(
                start=dateutil_parser('1970-01-01').date(),
                end=dateutil_parser('1970-01-01').date(),
            ),
            adjustments=VendorChartIQTimeSeriesEodListDataAdjustments(
                payout=False,
                split=True,
            ),
        ),
        meta=VendorChartIQTimeSeriesEodListMeta(
            attributes=AttributesMember([
                "attributes_example",
            ]),
            pagination=VendorChartIQTimeSeriesEodListMetaPagination(
                cursor="cursor_example",
                limit=0,
            ),
        ),
    ) # InlineObject | 

    try:
        # End-of-day time series data for a notation.
        api_response = api_instance.post_vendor_chart_iq_time_series_eod_list(body)
        pprint(api_response)

    except fds.sdk.TimeSeriesAPIforDigitalPortals.ApiException as e:
        print("Exception when calling VendorApi->post_vendor_chart_iq_time_series_eod_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject**](InlineObject.md)|  |

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_vendor_chart_iq_time_series_eod_subsample_get**
> InlineResponse2001 post_vendor_chart_iq_time_series_eod_subsample_get(body)

Single subsample end-of-day data for a notation.

Single subsample end-of-day data for a notation. The sample is always adjusted for currency changes. The subsample may exceed the entitled date range, but will be based only on days that are in the entitled range.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.TimeSeriesAPIforDigitalPortals
from fds.sdk.TimeSeriesAPIforDigitalPortals.api import vendor_api
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object1 import InlineObject1
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2001 import InlineResponse2001
from pprint import pprint

# See configuration.py for a list of all supported configuration parameters.

# Examples for each supported authentication method are below,
# choose one that satisfies your use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://github.com/FactSet/enterprise-sdk#oauth-20
# for information on how to create the app-config.json file
# See https://github.com/FactSet/enterprise-sdk-utils-python#authentication
# for more information on using the ConfidentialClient class
configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.TimeSeriesAPIforDigitalPortals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vendor_api.VendorApi(api_client)

    body = InlineObject1(
        data=VendorChartIQTimeSeriesEodSubsampleGetData(
            id="id_example",
            type="trade",
            quality="DLY",
            interval=VendorChartIQTimeSeriesEodSubsampleGetDataInterval(
                start=dateutil_parser('1970-01-01').date(),
                end=dateutil_parser('1970-01-01').date(),
            ),
            adjustments=VendorChartIQTimeSeriesEodListDataAdjustments(
                payout=False,
                split=True,
            ),
        ),
        meta=VendorChartIQTimeSeriesEodSubsampleGetMeta(
            attributes=AttributesMember([
                "attributes_example",
            ]),
        ),
    ) # InlineObject1 | 

    try:
        # Single subsample end-of-day data for a notation.
        api_response = api_instance.post_vendor_chart_iq_time_series_eod_subsample_get(body)
        pprint(api_response)

    except fds.sdk.TimeSeriesAPIforDigitalPortals.ApiException as e:
        print("Exception when calling VendorApi->post_vendor_chart_iq_time_series_eod_subsample_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject1**](InlineObject1.md)|  |

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_vendor_chart_iq_time_series_eod_subsample_list**
> InlineResponse2002 post_vendor_chart_iq_time_series_eod_subsample_list(body)

Subsampled end-of-day time series data for a notation.

Subsampled end-of-day time series data for a notation. The resulting time series is always adjusted for currency changes. If a subsample's date range is not entirely within the maximally entitled date range, the subsample is excluded from the response.<br><br>Pagination to a previous page is not supported and `pagination.previous` is always `null`.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.TimeSeriesAPIforDigitalPortals
from fds.sdk.TimeSeriesAPIforDigitalPortals.api import vendor_api
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2002 import InlineResponse2002
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object2 import InlineObject2
from pprint import pprint

# See configuration.py for a list of all supported configuration parameters.

# Examples for each supported authentication method are below,
# choose one that satisfies your use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://github.com/FactSet/enterprise-sdk#oauth-20
# for information on how to create the app-config.json file
# See https://github.com/FactSet/enterprise-sdk-utils-python#authentication
# for more information on using the ConfidentialClient class
configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.TimeSeriesAPIforDigitalPortals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vendor_api.VendorApi(api_client)

    body = InlineObject2(
        data=VendorChartIQTimeSeriesEodSubsampleListData(
            id="id_example",
            type="trade",
            quality="DLY",
            intervals=[
                dateutil_parser('1970-01-01').date(),
            ],
            adjustments=VendorChartIQTimeSeriesEodListDataAdjustments(
                payout=False,
                split=True,
            ),
        ),
        meta=VendorChartIQTimeSeriesEodListMeta(
            attributes=AttributesMember([
                "attributes_example",
            ]),
            pagination=VendorChartIQTimeSeriesEodListMetaPagination(
                cursor="cursor_example",
                limit=0,
            ),
        ),
    ) # InlineObject2 | 

    try:
        # Subsampled end-of-day time series data for a notation.
        api_response = api_instance.post_vendor_chart_iq_time_series_eod_subsample_list(body)
        pprint(api_response)

    except fds.sdk.TimeSeriesAPIforDigitalPortals.ApiException as e:
        print("Exception when calling VendorApi->post_vendor_chart_iq_time_series_eod_subsample_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject2**](InlineObject2.md)|  |

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_vendor_chart_iq_time_series_intraday_subsample_get**
> InlineResponse2003 post_vendor_chart_iq_time_series_intraday_subsample_get(body)

Single subsample intraday data for a notation.

Single subsample intraday data for a notation. The subsample may exceed the entitled time range, but will be based only on ticks that are in the entitled range.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.TimeSeriesAPIforDigitalPortals
from fds.sdk.TimeSeriesAPIforDigitalPortals.api import vendor_api
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object3 import InlineObject3
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2003 import InlineResponse2003
from pprint import pprint

# See configuration.py for a list of all supported configuration parameters.

# Examples for each supported authentication method are below,
# choose one that satisfies your use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://github.com/FactSet/enterprise-sdk#oauth-20
# for information on how to create the app-config.json file
# See https://github.com/FactSet/enterprise-sdk-utils-python#authentication
# for more information on using the ConfidentialClient class
configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.TimeSeriesAPIforDigitalPortals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vendor_api.VendorApi(api_client)

    body = InlineObject3(
        data=VendorChartIQTimeSeriesIntradaySubsampleGetData(
            id="id_example",
            type="trade",
            quality="DLY",
            _from="_from_example",
            granularity="1h",
            adjustments=VendorChartIQTimeSeriesIntradaySubsampleGetDataAdjustments(
                split=True,
            ),
        ),
        meta=VendorChartIQTimeSeriesEodSubsampleGetMeta(
            attributes=AttributesMember([
                "attributes_example",
            ]),
        ),
    ) # InlineObject3 | 

    try:
        # Single subsample intraday data for a notation.
        api_response = api_instance.post_vendor_chart_iq_time_series_intraday_subsample_get(body)
        pprint(api_response)

    except fds.sdk.TimeSeriesAPIforDigitalPortals.ApiException as e:
        print("Exception when calling VendorApi->post_vendor_chart_iq_time_series_intraday_subsample_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject3**](InlineObject3.md)|  |

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_vendor_chart_iq_time_series_intraday_subsample_list**
> InlineResponse2004 post_vendor_chart_iq_time_series_intraday_subsample_list(body)

Subsampled intraday time series data for a notation.

Subsampled intraday time series data for a notation. If a subsample's time range is not entirely within the maximally entitled time range, the subsample is excluded from the response.<br><br>Pagination to a previous page is not supported and `pagination.previous` is always `null`.

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.TimeSeriesAPIforDigitalPortals
from fds.sdk.TimeSeriesAPIforDigitalPortals.api import vendor_api
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object4 import InlineObject4
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2004 import InlineResponse2004
from pprint import pprint

# See configuration.py for a list of all supported configuration parameters.

# Examples for each supported authentication method are below,
# choose one that satisfies your use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://github.com/FactSet/enterprise-sdk#oauth-20
# for information on how to create the app-config.json file
# See https://github.com/FactSet/enterprise-sdk-utils-python#authentication
# for more information on using the ConfidentialClient class
configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.TimeSeriesAPIforDigitalPortals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = vendor_api.VendorApi(api_client)

    body = InlineObject4(
        data=VendorChartIQTimeSeriesIntradaySubsampleListData(
            id="id_example",
            type="trade",
            quality="DLY",
            range=VendorChartIQTimeSeriesIntradaySubsampleListDataRange(
                start="start_example",
                end="end_example",
            ),
            granularity="1h",
            adjustments=VendorChartIQTimeSeriesIntradaySubsampleGetDataAdjustments(
                split=True,
            ),
        ),
        meta=VendorChartIQTimeSeriesEodListMeta(
            attributes=AttributesMember([
                "attributes_example",
            ]),
            pagination=VendorChartIQTimeSeriesEodListMetaPagination(
                cursor="cursor_example",
                limit=0,
            ),
        ),
    ) # InlineObject4 | 

    try:
        # Subsampled intraday time series data for a notation.
        api_response = api_instance.post_vendor_chart_iq_time_series_intraday_subsample_list(body)
        pprint(api_response)

    except fds.sdk.TimeSeriesAPIforDigitalPortals.ApiException as e:
        print("Exception when calling VendorApi->post_vendor_chart_iq_time_series_intraday_subsample_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InlineObject4**](InlineObject4.md)|  |

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
