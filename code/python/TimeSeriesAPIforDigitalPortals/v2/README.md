# fds.sdk.TimeSeriesAPIforDigitalPortals
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python >= 3.6

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import fds.sdk.TimeSeriesAPIforDigitalPortals
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import fds.sdk.TimeSeriesAPIforDigitalPortals
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.TimeSeriesAPIforDigitalPortals
from pprint import pprint
from fds.sdk.TimeSeriesAPIforDigitalPortals.api import prices_api
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object4 import InlineObject4
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object5 import InlineObject5
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object6 import InlineObject6
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object7 import InlineObject7
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_object8 import InlineObject8
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response20010 import InlineResponse20010
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2005 import InlineResponse2005
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2006 import InlineResponse2006
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2007 import InlineResponse2007
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2008 import InlineResponse2008
from fds.sdk.TimeSeriesAPIforDigitalPortals.model.inline_response2009 import InlineResponse2009
# Defining the host is optional and defaults to http://api.factset.com/wealth/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
    host = "http://api.factset.com/wealth/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.TimeSeriesAPIforDigitalPortals.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )


# Enter a context with an instance of the API client
with fds.sdk.TimeSeriesAPIforDigitalPortals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = prices_api.PricesApi(api_client)
    id = "id_example" # str | Identifier of the notation.
_from = "from_example" # str | Date and time of the start point of the subsample (inclusive). `from` must be aligned to `granularity`. That is, the numerical value is an integral multiple of the time span value represented by `granularity`. The data accessible in the past is limited to a few weeks at most. Dates in the future are not allowed.
type = "trade" # str | Type of the price as configured for the customer. (optional) (default to "trade")
quality = "DLY" # str | Quality of the price. (optional) (default to "DLY")
granularity = "1h" # str | Subsample granularities suitable for intraday data. (optional) (default to "1h")
attributes = [
        "_attributes_example",
    ] # [str] | Limit the attributes returned in the response to the specified set. (optional)

    try:
        # Single subsample intraday data for a notation.
        api_response = api_instance.get_prices_time_series_intraday_subsample_get(id, _from, type=type, quality=quality, granularity=granularity, attributes=attributes)
        pprint(api_response)
    except fds.sdk.TimeSeriesAPIforDigitalPortals.ApiException as e:
        print("Exception when calling PricesApi->get_prices_time_series_intraday_subsample_get: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *http://api.factset.com/wealth/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PricesApi* | [**get_prices_time_series_intraday_subsample_get**](docs/PricesApi.md#get_prices_time_series_intraday_subsample_get) | **GET** /prices/timeSeries/intraday/subsample/get | Single subsample intraday data for a notation.
*PricesApi* | [**post_prices_time_series_eod_list**](docs/PricesApi.md#post_prices_time_series_eod_list) | **POST** /prices/timeSeries/eod/list | End-of-day time series data for a notation.
*PricesApi* | [**post_prices_time_series_eod_subsample_get**](docs/PricesApi.md#post_prices_time_series_eod_subsample_get) | **POST** /prices/timeSeries/eod/subsample/get | Single subsample end-of-day data for a notation.
*PricesApi* | [**post_prices_time_series_eod_subsample_list**](docs/PricesApi.md#post_prices_time_series_eod_subsample_list) | **POST** /prices/timeSeries/eod/subsample/list | Subsampled end-of-day time series data for a notation.
*PricesApi* | [**post_prices_time_series_intraday_list**](docs/PricesApi.md#post_prices_time_series_intraday_list) | **POST** /prices/timeSeries/intraday/list | Intraday time series data for a notation.
*PricesApi* | [**post_prices_time_series_intraday_subsample_list**](docs/PricesApi.md#post_prices_time_series_intraday_subsample_list) | **POST** /prices/timeSeries/intraday/subsample/list | Subsampled intraday time series data for a notation.
*VendorApi* | [**get_vendor_chart_iq_time_series_intraday_subsample_get**](docs/VendorApi.md#get_vendor_chart_iq_time_series_intraday_subsample_get) | **GET** /vendor/chartIQ/timeSeries/intraday/subsample/get | Single subsample intraday data for a notation.
*VendorApi* | [**post_vendor_chart_iq_time_series_eod_list**](docs/VendorApi.md#post_vendor_chart_iq_time_series_eod_list) | **POST** /vendor/chartIQ/timeSeries/eod/list | End-of-day time series data for a notation.
*VendorApi* | [**post_vendor_chart_iq_time_series_eod_subsample_get**](docs/VendorApi.md#post_vendor_chart_iq_time_series_eod_subsample_get) | **POST** /vendor/chartIQ/timeSeries/eod/subsample/get | Single subsample end-of-day data for a notation.
*VendorApi* | [**post_vendor_chart_iq_time_series_eod_subsample_list**](docs/VendorApi.md#post_vendor_chart_iq_time_series_eod_subsample_list) | **POST** /vendor/chartIQ/timeSeries/eod/subsample/list | Subsampled end-of-day time series data for a notation.
*VendorApi* | [**post_vendor_chart_iq_time_series_intraday_subsample_list**](docs/VendorApi.md#post_vendor_chart_iq_time_series_intraday_subsample_list) | **POST** /vendor/chartIQ/timeSeries/intraday/subsample/list | Subsampled intraday time series data for a notation.


## Documentation For Models

 - [AttributesMember](docs/AttributesMember.md)
 - [CursorBasedPaginationOutputObject](docs/CursorBasedPaginationOutputObject.md)
 - [CursorBasedPaginationOutputObjectWithoutTotal](docs/CursorBasedPaginationOutputObjectWithoutTotal.md)
 - [ErrorMetaObject](docs/ErrorMetaObject.md)
 - [ErrorObject](docs/ErrorObject.md)
 - [InlineObject](docs/InlineObject.md)
 - [InlineObject1](docs/InlineObject1.md)
 - [InlineObject2](docs/InlineObject2.md)
 - [InlineObject3](docs/InlineObject3.md)
 - [InlineObject4](docs/InlineObject4.md)
 - [InlineObject5](docs/InlineObject5.md)
 - [InlineObject6](docs/InlineObject6.md)
 - [InlineObject7](docs/InlineObject7.md)
 - [InlineObject8](docs/InlineObject8.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse2001](docs/InlineResponse2001.md)
 - [InlineResponse20010](docs/InlineResponse20010.md)
 - [InlineResponse20010Data](docs/InlineResponse20010Data.md)
 - [InlineResponse20010DataSubsamples](docs/InlineResponse20010DataSubsamples.md)
 - [InlineResponse2001Data](docs/InlineResponse2001Data.md)
 - [InlineResponse2001Meta](docs/InlineResponse2001Meta.md)
 - [InlineResponse2002](docs/InlineResponse2002.md)
 - [InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [InlineResponse2003](docs/InlineResponse2003.md)
 - [InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [InlineResponse2004](docs/InlineResponse2004.md)
 - [InlineResponse2004Data](docs/InlineResponse2004Data.md)
 - [InlineResponse2004DataRange](docs/InlineResponse2004DataRange.md)
 - [InlineResponse2005](docs/InlineResponse2005.md)
 - [InlineResponse2005Data](docs/InlineResponse2005Data.md)
 - [InlineResponse2005DataPrices](docs/InlineResponse2005DataPrices.md)
 - [InlineResponse2006](docs/InlineResponse2006.md)
 - [InlineResponse2006Data](docs/InlineResponse2006Data.md)
 - [InlineResponse2006DataSubsample](docs/InlineResponse2006DataSubsample.md)
 - [InlineResponse2007](docs/InlineResponse2007.md)
 - [InlineResponse2007Data](docs/InlineResponse2007Data.md)
 - [InlineResponse2007DataSubsamples](docs/InlineResponse2007DataSubsamples.md)
 - [InlineResponse2008](docs/InlineResponse2008.md)
 - [InlineResponse2008Data](docs/InlineResponse2008Data.md)
 - [InlineResponse2008DataPrices](docs/InlineResponse2008DataPrices.md)
 - [InlineResponse2009](docs/InlineResponse2009.md)
 - [InlineResponse2009Data](docs/InlineResponse2009Data.md)
 - [InlineResponse2009DataSubsample](docs/InlineResponse2009DataSubsample.md)
 - [InlineResponse200Data](docs/InlineResponse200Data.md)
 - [InlineResponse200DataRange](docs/InlineResponse200DataRange.md)
 - [InlineResponse200Meta](docs/InlineResponse200Meta.md)
 - [LanguageMember](docs/LanguageMember.md)
 - [OffsetBasedPaginationOutputObject](docs/OffsetBasedPaginationOutputObject.md)
 - [OffsetBasedPaginationOutputObjectWithoutTotal](docs/OffsetBasedPaginationOutputObjectWithoutTotal.md)
 - [PartialOutputObject](docs/PartialOutputObject.md)
 - [PricesTimeSeriesEodSubsampleGetData](docs/PricesTimeSeriesEodSubsampleGetData.md)
 - [PricesTimeSeriesEodSubsampleGetDataInterval](docs/PricesTimeSeriesEodSubsampleGetDataInterval.md)
 - [PricesTimeSeriesEodSubsampleListData](docs/PricesTimeSeriesEodSubsampleListData.md)
 - [PricesTimeSeriesIntradayListData](docs/PricesTimeSeriesIntradayListData.md)
 - [PricesTimeSeriesIntradayListDataRange](docs/PricesTimeSeriesIntradayListDataRange.md)
 - [PricesTimeSeriesIntradayListMeta](docs/PricesTimeSeriesIntradayListMeta.md)
 - [PricesTimeSeriesIntradayListMetaPagination](docs/PricesTimeSeriesIntradayListMetaPagination.md)
 - [StatusObject](docs/StatusObject.md)
 - [VendorChartIQTimeSeriesEodListData](docs/VendorChartIQTimeSeriesEodListData.md)
 - [VendorChartIQTimeSeriesEodListDataAdjustments](docs/VendorChartIQTimeSeriesEodListDataAdjustments.md)
 - [VendorChartIQTimeSeriesEodListDataRange](docs/VendorChartIQTimeSeriesEodListDataRange.md)
 - [VendorChartIQTimeSeriesEodListMeta](docs/VendorChartIQTimeSeriesEodListMeta.md)
 - [VendorChartIQTimeSeriesEodListMetaPagination](docs/VendorChartIQTimeSeriesEodListMetaPagination.md)
 - [VendorChartIQTimeSeriesEodSubsampleGetData](docs/VendorChartIQTimeSeriesEodSubsampleGetData.md)
 - [VendorChartIQTimeSeriesEodSubsampleGetDataInterval](docs/VendorChartIQTimeSeriesEodSubsampleGetDataInterval.md)
 - [VendorChartIQTimeSeriesEodSubsampleGetMeta](docs/VendorChartIQTimeSeriesEodSubsampleGetMeta.md)
 - [VendorChartIQTimeSeriesEodSubsampleListData](docs/VendorChartIQTimeSeriesEodSubsampleListData.md)
 - [VendorChartIQTimeSeriesIntradaySubsampleListData](docs/VendorChartIQTimeSeriesIntradaySubsampleListData.md)
 - [VendorChartIQTimeSeriesIntradaySubsampleListDataRange](docs/VendorChartIQTimeSeriesIntradaySubsampleListDataRange.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Author




## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.TimeSeriesAPIforDigitalPortals.apis and fds.sdk.TimeSeriesAPIforDigitalPortals.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.TimeSeriesAPIforDigitalPortals.api.default_api import DefaultApi`
- `from fds.sdk.TimeSeriesAPIforDigitalPortals.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.TimeSeriesAPIforDigitalPortals
from fds.sdk.TimeSeriesAPIforDigitalPortals.apis import *
from fds.sdk.TimeSeriesAPIforDigitalPortals.models import *
```
