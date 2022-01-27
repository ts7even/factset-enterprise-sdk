# fds.sdk.FactSetPrices.ReturnsApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_returns_snapshot**](ReturnsApi.md#get_returns_snapshot) | **GET** /factset-prices/v1/returns-snapshot | Returns the price performance of the security and annualized compound total returns.
[**get_returns_snapshot_for_list**](ReturnsApi.md#get_returns_snapshot_for_list) | **POST** /factset-prices/v1/returns-snapshot | Returns the price performance of the security and annualized compound total returns.
[**get_security_returns**](ReturnsApi.md#get_security_returns) | **GET** /factset-prices/v1/returns | Gets Returns for a list of &#x60;ids&#x60; as of given date range and rolling Period
[**get_security_returns_for_list**](ReturnsApi.md#get_security_returns_for_list) | **POST** /factset-prices/v1/returns | Requests security returns for the given date range and rollingPeriod.


# **get_returns_snapshot**
> ReturnsSnapshotResponse get_returns_snapshot(ids)

Returns the price performance of the security and annualized compound total returns.

Retrieves various return periods as of a given date for a requested list of securities. This endpoint is very helpful for quickly retrieving a list of pre-calculated returns for application development.<p> Return periods include   * oneDay   * weekToDate   * monthToDate   * quarterToDate   * yearToDate   * oneMonth   * threeMonth   * sixMonth   * nineMonth   * oneYear   * twoYearAnnualized   * threeYearAnnualized   * fiveYearAnnualized   * tenYearAnnualized   * twentyYearAnnualized   * thirtyYearAnnualized   * ipoToDateAnnualized   </p> 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetPrices
from fds.sdk.FactSetPrices.api import returns_api
from fds.sdk.FactSetPrices.model.returns_snapshot_response import ReturnsSnapshotResponse
from fds.sdk.FactSetPrices.model.error_response import ErrorResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetPrices.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetPrices.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetPrices.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetPrices.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = returns_api.ReturnsApi(api_client)
    ids = ["AAPL-USA"] # [str] | The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
    date = "2019-07-07" # str | The date in **YYYY-MM-DD** format. This controls the perspective dates to the calculate the returns. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  (optional)
    calendar = "FIVEDAY" # str | Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (optional) if omitted the server will use the default value of "FIVEDAY"
    currency = "USD" # str | Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470). (optional)
    dividend_adjust = "PRICE" # str | Controls the dividend reinvestment for the returns calculation. Dividends will be reinvested on the date the dividends go ex (when the dividends belong to the seller rather than the buyer). Visit [OA 8748](https://my.apps.factset.com/oa/pages/8748) for calculation methodology.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested. Dividends accumulated throughout the specified period are added to the price at the end of the period.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate. Dividends accumulated throughout the specified period are used to buy more shares of stock in the company.  (optional) if omitted the server will use the default value of "PRICE"

    # example passing only required values which don't have defaults set
    try:
        # Returns the price performance of the security and annualized compound total returns.
        api_response = api_instance.get_returns_snapshot(ids)
        pprint(api_response)
    except fds.sdk.FactSetPrices.ApiException as e:
        print("Exception when calling ReturnsApi->get_returns_snapshot: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Returns the price performance of the security and annualized compound total returns.
        api_response = api_instance.get_returns_snapshot(ids, date=date, calendar=calendar, currency=currency, dividend_adjust=dividend_adjust)
        pprint(api_response)
    except fds.sdk.FactSetPrices.ApiException as e:
        print("Exception when calling ReturnsApi->get_returns_snapshot: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **[str]**| The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;* |
 **date** | **str**| The date in **YYYY-MM-DD** format. This controls the perspective dates to the calculate the returns. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  | [optional]
 **calendar** | **str**| Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities&#39; trading calendar which excludes date records for respective holiday periods. | [optional] if omitted the server will use the default value of "FIVEDAY"
 **currency** | **str**| Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470). | [optional]
 **dividend_adjust** | **str**| Controls the dividend reinvestment for the returns calculation. Dividends will be reinvested on the date the dividends go ex (when the dividends belong to the seller rather than the buyer). Visit [OA 8748](https://my.apps.factset.com/oa/pages/8748) for calculation methodology.   * **PRICE** &#x3D; Price Change - Dividends Excluded.   * **EXDATE** &#x3D; Simple Return - Dividends Received on exdate but not reinvested. Dividends accumulated throughout the specified period are added to the price at the end of the period.   * **EXDATE_C** &#x3D; Compound Return - Dividends reinvested on exdate. Dividends accumulated throughout the specified period are used to buy more shares of stock in the company.  | [optional] if omitted the server will use the default value of "PRICE"

### Return type

[**ReturnsSnapshotResponse**](ReturnsSnapshotResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of returns-snapshot objects for the list of ids requested |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_returns_snapshot_for_list**
> ReturnsSnapshotResponse get_returns_snapshot_for_list(returns_snapshot_request)

Returns the price performance of the security and annualized compound total returns.

Retrieves various return periods as of a given date for a requested list of securities. This endpoint is very helpful for quickly retrieving a list of pre-calculated returns for application development.<p> Return periods include   * oneDay   * weekToDate   * monthToDate   * quarterToDate   * yearToDate   * oneMonth   * threeMonth   * sixMonth   * nineMonth   * oneYear   * twoYearAnnualized   * threeYearAnnualized   * fiveYearAnnualized   * tenYearAnnualized   * twentyYearAnnualized   * thirtyYearAnnualized   * ipoToDateAnnualized   </p> 

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetPrices
from fds.sdk.FactSetPrices.api import returns_api
from fds.sdk.FactSetPrices.model.returns_snapshot_response import ReturnsSnapshotResponse
from fds.sdk.FactSetPrices.model.error_response import ErrorResponse
from fds.sdk.FactSetPrices.model.returns_snapshot_request import ReturnsSnapshotRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetPrices.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetPrices.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetPrices.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetPrices.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = returns_api.ReturnsApi(api_client)
    returns_snapshot_request = ReturnsSnapshotRequest(
        ids=IdsMax2000(["FDS-US"]),
        date="2019-12-31",
        currency="USD",
        calendar=Calendar("FIVEDAY"),
        dividend_adjust=DividendAdjustSnapshot("PRICE"),
    ) # ReturnsSnapshotRequest | Request object for Returns-Snapshot.

    # example passing only required values which don't have defaults set
    try:
        # Returns the price performance of the security and annualized compound total returns.
        api_response = api_instance.get_returns_snapshot_for_list(returns_snapshot_request)
        pprint(api_response)
    except fds.sdk.FactSetPrices.ApiException as e:
        print("Exception when calling ReturnsApi->get_returns_snapshot_for_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returns_snapshot_request** | [**ReturnsSnapshotRequest**](ReturnsSnapshotRequest.md)| Request object for Returns-Snapshot. |

### Return type

[**ReturnsSnapshotResponse**](ReturnsSnapshotResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of returns-snapshot objects for the list of ids requested |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_security_returns**
> ReturnsResponse get_security_returns(ids)

Gets Returns for a list of `ids` as of given date range and rolling Period

The simple or compound return for the requested frequency and/or rollingPeriod. Depending on the input parameters the return will adjust accordingly. If you simply use frequency and no rollingPeriod, the return value will represent the frequency period. If you use rollingPeriod, the values will be returned in actual period ends (e.g. actual month, actual week, daily, etc.). General Return Calculation Details found on [Online Assistant Page #8748](https://oa.apps.factset.com/pages/8748)

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetPrices
from fds.sdk.FactSetPrices.api import returns_api
from fds.sdk.FactSetPrices.model.error_response import ErrorResponse
from fds.sdk.FactSetPrices.model.returns_response import ReturnsResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetPrices.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetPrices.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetPrices.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetPrices.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = returns_api.ReturnsApi(api_client)
    ids = ["AAPL-USA"] # [str] | The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
    start_date = "2019-01-01" # str | The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  (optional)
    end_date = "2019-12-31" # str | The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  (optional)
    frequency = "D" # str | Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** = Fiscal Quarter of the company.   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.   * **FY** = Fiscal Annual, based on the last trading day of the company's fiscal year.  (optional) if omitted the server will use the default value of "D"
    calendar = "FIVEDAY" # str | Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (optional) if omitted the server will use the default value of "FIVEDAY"
    currency = "USD" # str | Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470). (optional)
    dividend_adjust = "PRICE" # str | Controls the dividend reinvestment for the returns calculation.   * **PRICE** = Price Change - Dividends Excluded   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested   * **PAYDATE** = Simple Return - Dividends Received on paydate but not reinvested   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate   * **PAYDATE_C** = Compound Return - Dividends reinvested on paydate.  (optional) if omitted the server will use the default value of "PRICE"
    rolling_period = "1D" # str | Period of measure for the rolling cumulative return. This does not change display `frequency` but rather the underlying return calculation period. All periods are referencing actual periods of measure, not period-ends. For example, 1M rolling period will go back to that date the previous month, which is not always the month-end date. (optional)

    # example passing only required values which don't have defaults set
    try:
        # Gets Returns for a list of `ids` as of given date range and rolling Period
        api_response = api_instance.get_security_returns(ids)
        pprint(api_response)
    except fds.sdk.FactSetPrices.ApiException as e:
        print("Exception when calling ReturnsApi->get_security_returns: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Gets Returns for a list of `ids` as of given date range and rolling Period
        api_response = api_instance.get_security_returns(ids, start_date=start_date, end_date=end_date, frequency=frequency, calendar=calendar, currency=currency, dividend_adjust=dividend_adjust, rolling_period=rolling_period)
        pprint(api_response)
    except fds.sdk.FactSetPrices.ApiException as e:
        print("Exception when calling ReturnsApi->get_security_returns: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **[str]**| The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. &lt;p&gt;***ids limit** &#x3D;  2000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;* |
 **start_date** | **str**| The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  | [optional]
 **end_date** | **str**| The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  | [optional]
 **frequency** | **str**| Controls the display frequency of the data returned.   * **D** &#x3D; Daily   * **W** &#x3D; Weekly, based on the last day of the week of the start date.   * **M** &#x3D; Monthly, based on the last trading day of the month.   * **AM** &#x3D; Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** &#x3D; Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** &#x3D; Fiscal Quarter of the company.   * **AY** &#x3D; Actual Annual, based on the start date.   * **CY** &#x3D; Calendar Annual, based on the last trading day of the calendar year.   * **FY** &#x3D; Fiscal Annual, based on the last trading day of the company&#39;s fiscal year.  | [optional] if omitted the server will use the default value of "D"
 **calendar** | **str**| Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities&#39; trading calendar which excludes date records for respective holiday periods. | [optional] if omitted the server will use the default value of "FIVEDAY"
 **currency** | **str**| Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470). | [optional]
 **dividend_adjust** | **str**| Controls the dividend reinvestment for the returns calculation.   * **PRICE** &#x3D; Price Change - Dividends Excluded   * **EXDATE** &#x3D; Simple Return - Dividends Received on exdate but not reinvested   * **PAYDATE** &#x3D; Simple Return - Dividends Received on paydate but not reinvested   * **EXDATE_C** &#x3D; Compound Return - Dividends reinvested on exdate   * **PAYDATE_C** &#x3D; Compound Return - Dividends reinvested on paydate.  | [optional] if omitted the server will use the default value of "PRICE"
 **rolling_period** | **str**| Period of measure for the rolling cumulative return. This does not change display &#x60;frequency&#x60; but rather the underlying return calculation period. All periods are referencing actual periods of measure, not period-ends. For example, 1M rolling period will go back to that date the previous month, which is not always the month-end date. | [optional]

### Return type

[**ReturnsResponse**](ReturnsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of security returns for the requested date range and rolling period |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_security_returns_for_list**
> ReturnsResponse get_security_returns_for_list(returns_request)

Requests security returns for the given date range and rollingPeriod.

The simple or compound return for the requested frequency and/or rollingPeriod. Depending on the input parameters the return will adjust accordingly. If you simply use frequency and no rollingPeriod, the return value will represent the frequency period. If you use rollingPeriod, the values will be returned in actual period ends (e.g. actual month, actual week, daily, etc.). General Return Calculation Details found on [Online Assistant Page #8748](https://oa.apps.factset.com/pages/8748)

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetPrices
from fds.sdk.FactSetPrices.api import returns_api
from fds.sdk.FactSetPrices.model.error_response import ErrorResponse
from fds.sdk.FactSetPrices.model.returns_response import ReturnsResponse
from fds.sdk.FactSetPrices.model.returns_request import ReturnsRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetPrices.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetPrices.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetPrices.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetPrices.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = returns_api.ReturnsApi(api_client)
    returns_request = ReturnsRequest(
        ids=IdsMax2000(["FDS-US"]),
        start_date="2019-01-01",
        end_date="2019-12-31",
        frequency=Frequency("M"),
        currency="USD",
        calendar=Calendar("FIVEDAY"),
        dividend_adjust=DividendAdjust("PRICE"),
        rolling_period=RollingPeriod("1D"),
    ) # ReturnsRequest | Request object for `Security` returns.

    # example passing only required values which don't have defaults set
    try:
        # Requests security returns for the given date range and rollingPeriod.
        api_response = api_instance.get_security_returns_for_list(returns_request)
        pprint(api_response)
    except fds.sdk.FactSetPrices.ApiException as e:
        print("Exception when calling ReturnsApi->get_security_returns_for_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **returns_request** | [**ReturnsRequest**](ReturnsRequest.md)| Request object for &#x60;Security&#x60; returns. |

### Return type

[**ReturnsResponse**](ReturnsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of security returns for the requested date range and rolling period |  -  |
**400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
**401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
**403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
**415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
**500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
