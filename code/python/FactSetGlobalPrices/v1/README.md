[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet Global Prices client library for Python

[![PyPi](https://img.shields.io/pypi/v/fds.sdk.FactSetGlobalPrices)](https://pypi.org/project/fds.sdk.FactSetGlobalPrices/)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p>


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.5.0
- Package version: 1.2.7
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements

* Python >= 3.7

## Installation

### Poetry

```shell
poetry add fds.sdk.utils fds.sdk.FactSetGlobalPrices==1.2.7
```

### pip

```shell
pip install fds.sdk.utils fds.sdk.FactSetGlobalPrices==1.2.7
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup Python environment.
   1. Install and activate python 3.7+. If you're using [pyenv](https://github.com/pyenv/pyenv):

      ```sh
      pyenv install 3.9.7
      pyenv shell 3.9.7
      ```

   2. (optional) [Install poetry](https://python-poetry.org/docs/#installation).
3. [Install dependencies](#installation).
4. Run the following:

```python
from fds.sdk.utils.authentication import ConfidentialClient

import fds.sdk.FactSetGlobalPrices
from fds.sdk.FactSetGlobalPrices.api import corporate_actions_api
from fds.sdk.FactSetGlobalPrices.models import *
from dateutil.parser import parse as dateutil_parser
from pprint import pprint

# See configuration.py for a list of all supported configuration parameters.

# Examples for each supported authentication method are below,
# choose one that satisfies your use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://github.com/FactSet/enterprise-sdk#oauth-20
# for information on how to create the app-config.json file
# See https://github.com/FactSet/enterprise-sdk-utils-python#authentication
# for more information on using the ConfidentialClient class
configuration = fds.sdk.FactSetGlobalPrices.Configuration(
    fds_oauth_client=ConfidentialClient('/path/to/app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://github.com/FactSet/enterprise-sdk#api-key
# for information how to create an API key
# configuration = fds.sdk.FactSetGlobalPrices.Configuration(
#     username='USERNAME-SERIAL',
#     password='API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.FactSetGlobalPrices.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = corporate_actions_api.CorporateActionsApi(api_client)
    # NOTE: The parameter variable defined below is just an example and may potentially contain non valid values. So please replace this with valid values.
    ids = ["AAPL-USA"] # [str] | The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  100 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
    # NOTE: The parameter variable defined below is just an example and may potentially contain non valid values. So please replace this with valid values.
    event_category = "ALL" # str | Selects the Event Category to include in the response.   * **CASH_DIVS** = Cash Dividends   * **STOCK_DIST** = Stock Distributions   * **SPINOFFS** = Spin Offs   * **RIGHTS** = Rights Issue   * **SPLITS** = Splits   * **ALL** = Returns all Event Types. If left blank the service will default to ALL.  (optional) if omitted the server will use the default value of "ALL"
    # NOTE: The parameter variable defined below is just an example and may potentially contain non valid values. So please replace this with valid values.
    fields = [
        "fields_example",
    ] # [str] | Request available Corporate Actions data fields to be included in the response. Default is all fields. _fsymId_, _effectiveDate_, _eventTypeCode_ and _requestId_ are always included.    |field|description|   |---|---|   |fsymId|Factset Regional Security Identifier|   |eventTypeCode|Character code that denotes the type of event|   |effectiveDate|The date when security is traded ex-dividend|   |requestId|Identifier that was used for the request.|  <h3>Common Fields</h3>   |field|description|   |---|---|   |eventId|Uniquely Identifies the event|   |eventTypeDesc|Description of the type of event|   |divTypeCode|Dividend type code. [OA#8764](https://my.apps.factset.com/oa/pages/8764)|   |announcementDate|Date the event was publicly announced|   |recordDate|Record date of the event|   |payDate|Payment date of the event| <h3>Dividend Fields</h3>   |field|description|   |---|---|   |currency|Currency ISO code associated with distribution amount converted into trading currency of the record.|   |amtDefNetGrossIndicator|Indicates whether the default amount is net or gross. G=Gross; N=Net.|   |amtDefTradingAdj|Cash distribution amount (net or gross) in the trading currency of the record. Amount is translated to the trading currency based on the exchange rate as of the effective date. The value is adjusted for splits.|   |amtDefTradingUnadj|Cash distribution amount (net or gross) in the trading currency of the record. Amount is translated to the trading currency based on the exchange rate as of the effective date. The value is not adjusted for splits. |   |amtNetTradingAdj|Net distribution amount in the trading currency of the record. Amount is translated to the trading currency based on the exchange rate as of the effective date.  The value is adjusted for splits.|   |amtNetTradingUnadj|Net distribution amount in the trading currency of the record. Amount is translated to the trading currency based on the exchange rate as of the effective date. The value is not adjusted for splits.|   |amtGrossTradingAdj|Gross distribution amount in the trading currency of the record. Amount is translated to the trading currency based on the exchange rate as of the effective date. The value is adjusted for splits.|   |amtGrossTradingUnadj|Gross distribution amount in the trading currency of the record. Amount is translated to the trading currency based on the exchange rate as of the effective date. The value is not adjusted for splits.|   |declaredCurrency|Currency ISO code associated with the declared amount. |   |amtDefDecAdj|Cash distribution amount (net or gross) in the currency it was declared in. The value is adjusted for splits.|   |amtDefDecUnadj|Cash distribution amount (net or gross) in the currency it was declared in. The value is not adjusted for splits.|   |amtNetDecAdj|Net cash distribution amount in the currency it was declared in. The value is adjusted for splits. |   |amtNetDecUnadj|Net cash distribution amount in the currency it was declared in. The value is not adjusted for splits.|   |amtGrossDecAdj|Gross cash distribution amount in the currency it was declared in. N/A is returned if the gross amount is not available. The value is adjusted for splits.|   |amtGrossDecUnadj|Gross cash distribution amount in the currency it was declared in. The value is not adjusted for splits.|   |dividendStatus|Identifies the cancelled dividends status( Active, Cancelled, Postponed, Partial Information) and helps to evaluate their price and portfolio performance.Its applicable to Dividend(DVC) and Dividend with DRP option(DVCD)|   |dividendActiveFlag|Identifies whether the dividend record is currently active(1) or inactive(0).Its applicable to Dividend(DVC) and Dividend with DRP option(DVCD)|   |dividendsSpecFlag|Indicates a special price implications exists, which may or may not include special dividends. Indicates whether an adjustment should be made to historical pricing.|   |dividendFrequencyDesc|Dividend Frequency for different event types in the form of a text as per the descriptions found here [OA#8764](https://my.apps.factset.com/oa/pages/8764#Frequency)|   |dividendFrequencyCode|Dividend Frequency for different event types in the form of a code as per the details found here [OA#8764](https://my.apps.factset.com/oa/pages/8764#Frequency)|   |frankDefTradingAdj|Split amount of dividend that is franked (subject to tax credit). Published in the trading currency of the input ID. Amount is translated to the trading currency based on the exchange rate as of the effective date.**Only applicable for Australian Securities**.|   |frankDefTradingUnadj|Unsplit amount of dividend that is franked (subject to tax credit). Published in the trading currency of the input ID. Amount is translated to the trading currency based on the exchange rate as of the effective date.**Only applicable for Australian Securities**.|   |frankDefDecAdj|Split amount of dividend that is franked (subject to tax credit). Published in the currency the dividend was declared in.Amount is translated to the trading currency based on the exchange rate as of the effective date. **Only applicable for Australian Securities**.|   |frankDefDecUnadj|Unsplit amount of dividend that is franked (subject to tax credit). Published in the currency the dividend was declared in.Amount is translated to the trading currency based on the exchange rate as of the effective date. **Only applicable for Australian Securities**.|   |frankPct|Percent of total dividend that is franked (subject to tax credit). **Only applicable for Australian Securities**.|   |taxRate|Domestic Withholding Tax Rate for a Resident Individual| <h3>Distribution Fields</h3>   |field|description|   |---|---|   |adjFactor|Factor applied to adjust historical prices. Calculation formulas are available on [OA#12619](https://my.apps.factset.com/oa/pages/12619)|   |adjFactorCombined|Combined adjustment factor for all distribution events on that day.|   |amtDefTradingAdj|Cash distribution amount (net or gross) in the trading currency of the record. Amount is translated to the trading currency based on the exchange rate as of the effective date. The value is adjusted for splits.|   |amtDefTradingUnadj|Cash distribution amount (net or gross) in the trading currency of the record. Amount is translated to the trading currency based on the exchange rate as of the effective date. The value is not adjusted for splits. |   |currency|Currency ISO code associated with distribution amount converted into trading currency of the record.|   |distPct|Distribution percentage of the event  (i.e. 10%). Typical for stock distributions.|   |distOldTerm|Component of distribution ratio- Number of shares held.|   |distNewTerm|Component of distribution ratio - Number of shares received.|   |rightsIssuePrice|Price of the rights issue. |   |rightsIssueCurrency|Currency the rights issue price was declared in.|   |shortDesc|Textual description identifying the event. Example- Split (Mandatory): 3 for 1.| <h3>Splits Fields</h3>   |field|description|   |---|---|   |adjFactor|Distribution percentage of the event  (i.e. 10%). Typical for stock distributions.|   |adjFactorCombined|Combined adjustment factor for all distribution events on that day.|   |distOldTerm|Component of distribution ratio- Number of shares held.|   |distNewTerm|Component of distribution ratio - Number of shares received.|   |distInstFsymId|Helps to identify an instrument representing the distributed company or security associated with ca event identifier. Its applicable for types like Bonus issue(BNS),Stock dividend(DVS),Rights issue (DSR), and spin off(SPO).|   |shortDesc|Textual description identifying the event. Example- Split (Mandatory): 3 for 1.|  (optional)
    # NOTE: The parameter variable defined below is just an example and may potentially contain non valid values. So please replace this with valid values.
    start_date = "2019-01-01" # str | The start date requested for a given date range in **YYYY-MM-DD** format. In the context of corporate actions, this filters the response to only include events within the date range. The frequency between the startDate and endDate is always set to the \"event\" frequency- meaning the service will return only events within those inclusive boundaries. Leaving both startDate and endDate blank will pull \"all\" events for each requested ids.  (optional)
    # NOTE: The parameter variable defined below is just an example and may potentially contain non valid values. So please replace this with valid values.
    end_date = "2019-12-31" # str | The end date requested for a given date range in **YYYY-MM-DD** format. In the context of corporate actions, this filters the response to only include events within the date range. The frequency between the startDate and endDate is always set to the \"event\" frequency- meaning the service will return only events within those inclusive boundaries. Leaving both startDate and endDate blank will pull \"all\" events for each requested ids.  (optional)
    # NOTE: The parameter variable defined below is just an example and may potentially contain non valid values. So please replace this with valid values.
    currency = "USD" # str | Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470). (optional)
    # NOTE: The parameter variable defined below is just an example and may potentially contain non valid values. So please replace this with valid values.
    cancelled_dividend = "exclude" # str | The cancelled dividend returns the dividend details whether they are cancelled or active.  (optional) if omitted the server will use the default value of "exclude"

    try:
        # Gets Corporate Actions information.
        # example passing only required values which don't have defaults set
        # and optional values
        api_response = api_instance.get_gpd_corporate_actions(ids, event_category=event_category, fields=fields, start_date=start_date, end_date=end_date, currency=currency, cancelled_dividend=cancelled_dividend)

        pprint(api_response)
    except fds.sdk.FactSetGlobalPrices.ApiException as e:
        print("Exception when calling CorporateActionsApi->get_gpd_corporate_actions: %s\n" % e)

    # # Get response, http status code and response headers
    # try:
    #     # Gets Corporate Actions information.
    #     api_response, http_status_code, response_headers = api_instance.get_gpd_corporate_actions_with_http_info(ids, event_category=event_category, fields=fields, start_date=start_date, end_date=end_date, currency=currency, cancelled_dividend=cancelled_dividend)


    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.FactSetGlobalPrices.ApiException as e:
    #     print("Exception when calling CorporateActionsApi->get_gpd_corporate_actions: %s\n" % e)

    # # Get response asynchronous
    # try:
    #     # Gets Corporate Actions information.
    #     async_result = api_instance.get_gpd_corporate_actions_async(ids, event_category=event_category, fields=fields, start_date=start_date, end_date=end_date, currency=currency, cancelled_dividend=cancelled_dividend)
    #     api_response = async_result.get()


    #     pprint(api_response)
    # except fds.sdk.FactSetGlobalPrices.ApiException as e:
    #     print("Exception when calling CorporateActionsApi->get_gpd_corporate_actions: %s\n" % e)

    # # Get response, http status code and response headers asynchronous
    # try:
    #     # Gets Corporate Actions information.
    #     async_result = api_instance.get_gpd_corporate_actions_with_http_info_async(ids, event_category=event_category, fields=fields, start_date=start_date, end_date=end_date, currency=currency, cancelled_dividend=cancelled_dividend)
    #     api_response, http_status_code, response_headers = async_result.get()


    #     pprint(api_response)
    #     pprint(http_status_code)
    #     pprint(response_headers)
    # except fds.sdk.FactSetGlobalPrices.ApiException as e:
    #     print("Exception when calling CorporateActionsApi->get_gpd_corporate_actions: %s\n" % e)

```

### Using Pandas

To convert an API response to a Pandas DataFrame, it is necessary to transform it first to a dictionary.
```python
import pandas as pd

response_dict = api_response.to_dict()['data']

simple_json_response = pd.DataFrame(response_dict)
nested_json_response = pd.json_normalize(response_dict)
```

### Debugging

The SDK uses the standard library [`logging`](https://docs.python.org/3/library/logging.html#module-logging) module.

Setting `debug` to `True` on an instance of the `Configuration` class sets the log-level of related packages to `DEBUG`
and enables additional logging in Pythons [HTTP Client](https://docs.python.org/3/library/http.client.html).

**Note**: This prints out sensitive information (e.g. the full request and response). Use with care.

```python
import logging
import fds.sdk.FactSetGlobalPrices

logging.basicConfig(level=logging.DEBUG)

configuration = fds.sdk.FactSetGlobalPrices.Configuration(...)
configuration.debug = True
```

### Configure a Proxy

You can pass proxy settings to the Configuration class:

* `proxy`: The URL of the proxy to use.
* `proxy_headers`: a dictionary to pass additional headers to the proxy (e.g. `Proxy-Authorization`).

```python
import fds.sdk.FactSetGlobalPrices

configuration = fds.sdk.FactSetGlobalPrices.Configuration(
    # ...
    proxy="http://secret:password@localhost:5050",
    proxy_headers={
        "Custom-Proxy-Header": "Custom-Proxy-Header-Value"
    }
)
```

### Custom SSL Certificate

TLS/SSL certificate verification can be configured with the following Configuration parameters:

* `ssl_ca_cert`: a path to the certificate to use for verification in `PEM` format.
* `verify_ssl`: setting this to `False` disables the verification of certificates.
  Disabling the verification is not recommended, but it might be useful during
  local development or testing.

```python
import fds.sdk.FactSetGlobalPrices

configuration = fds.sdk.FactSetGlobalPrices.Configuration(
    # ...
    ssl_ca_cert='/path/to/ca.pem'
)
```


## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CorporateActionsApi* | [**get_gpd_corporate_actions**](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/CorporateActionsApi.md#get_gpd_corporate_actions) | **GET** /factset-global-prices/v1/corporate-actions | Gets Corporate Actions information.
*CorporateActionsApi* | [**getannualized_dividends**](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/CorporateActionsApi.md#getannualized_dividends) | **GET** /factset-global-prices/v1/annualized-dividends | Gets Indicated Annualized Dividend information.
*CorporateActionsApi* | [**getannualized_dividends_for_list**](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/CorporateActionsApi.md#getannualized_dividends_for_list) | **POST** /factset-global-prices/v1/annualized-dividends | Gets Indicated Annualized Dividend information.
*CorporateActionsApi* | [**post_corporate_actions**](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/CorporateActionsApi.md#post_corporate_actions) | **POST** /factset-global-prices/v1/corporate-actions | Requests Corporate Actions information.
*PricesApi* | [**get_gpd_prices**](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/PricesApi.md#get_gpd_prices) | **GET** /factset-global-prices/v1/prices | Gets end-of-day Open, High, Low, Close for a list of securities.
*PricesApi* | [**get_security_prices_for_list**](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/PricesApi.md#get_security_prices_for_list) | **POST** /factset-global-prices/v1/prices | Requests end-of-day Open, High, Low, Close for a large list of securities.
*ReturnsApi* | [**get_returns**](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/ReturnsApi.md#get_returns) | **GET** /factset-global-prices/v1/returns | Gets Returns for a list of &#x60;ids&#x60; as of given date range.
*ReturnsApi* | [**get_returns_for_list**](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/ReturnsApi.md#get_returns_for_list) | **POST** /factset-global-prices/v1/returns | Gets Returns for a list of &#x60;ids&#x60; as of given date range.


## Documentation For Models

 - [Adjust](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/Adjust.md)
 - [AnnualizedDividendResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/AnnualizedDividendResponse.md)
 - [AnnualizedDividendsObject](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/AnnualizedDividendsObject.md)
 - [AnnualizedDividendsRequest](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/AnnualizedDividendsRequest.md)
 - [Calendar](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/Calendar.md)
 - [CancelledDividend](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/CancelledDividend.md)
 - [CashDividendsResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/CashDividendsResponse.md)
 - [CorporateActionsRequest](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/CorporateActionsRequest.md)
 - [CorporateActionsResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/CorporateActionsResponse.md)
 - [Distribution](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/Distribution.md)
 - [Dividend](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/Dividend.md)
 - [DividendAdjust](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/DividendAdjust.md)
 - [ErrorResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/ErrorResponseSubErrors.md)
 - [EventCategory](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/EventCategory.md)
 - [FieldsCorporateActions](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/FieldsCorporateActions.md)
 - [Frequency](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/Frequency.md)
 - [GlobalPricesRequest](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/GlobalPricesRequest.md)
 - [GlobalPricesResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/GlobalPricesResponse.md)
 - [IdsMax100](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/IdsMax100.md)
 - [IdsMax1000](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/IdsMax1000.md)
 - [IdsMax50](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/IdsMax50.md)
 - [Price](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/Price.md)
 - [PricesFields](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/PricesFields.md)
 - [Returns](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/Returns.md)
 - [ReturnsRequest](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/ReturnsRequest.md)
 - [ReturnsResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/ReturnsResponse.md)
 - [RightsIssueResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/RightsIssueResponse.md)
 - [SpinoffsResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/SpinoffsResponse.md)
 - [Split](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/Split.md)
 - [SplitsResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/SplitsResponse.md)
 - [StockDistributionsResponse](https://github.com/FactSet/enterprise-sdk/tree/main/code/python/FactSetGlobalPrices/v1/docs/StockDistributionsResponse.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.FactSetGlobalPrices.apis and fds.sdk.FactSetGlobalPrices.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.FactSetGlobalPrices.api.default_api import DefaultApi`
- `from fds.sdk.FactSetGlobalPrices.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.FactSetGlobalPrices
from fds.sdk.FactSetGlobalPrices.apis import *
from fds.sdk.FactSetGlobalPrices.models import *
```

## Contributing

Please refer to the [contributing guide](../../../../CONTRIBUTING.md).

## Copyright

Copyright 2022 FactSet Research Systems Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

