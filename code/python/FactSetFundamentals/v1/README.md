# fds.sdk.FactSetFundamentals
Gain access to current, comprehensive, and comparative information on securities in worldwide developed and emerging markets. Composed of annual and interim/quarterly data, detailed historical financial statement content, per share data, and calculated ratios, FactSet Fundamentals provides you with the information you need for a global investment perspective.


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.2
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
import fds.sdk.FactSetFundamentals
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import fds.sdk.FactSetFundamentals
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.FactSetFundamentals
from pprint import pprint
from fds.sdk.FactSetFundamentals.api import data_items_api
from fds.sdk.FactSetFundamentals.model.error_response import ErrorResponse
from fds.sdk.FactSetFundamentals.model.metrics_request import MetricsRequest
from fds.sdk.FactSetFundamentals.model.metrics_response import MetricsResponse
# Defining the host is optional and defaults to https://api.factset.com/content
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.FactSetFundamentals.Configuration(
    host = "https://api.factset.com/content"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.FactSetFundamentals.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.FactSetFundamentals.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )


# Enter a context with an instance of the API client
with fds.sdk.FactSetFundamentals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = data_items_api.DataItemsApi(api_client)
    category = "INCOME_STATEMENT" # str | Filters the list of FF_* metrics by major category -   * **INCOME_STATEMENT** = Income Statement line items, such as Sales, Gross Profit, Net Income.   * **BALANCE_SHEET** = Balance Sheet line items, such as Assets, Liabilities, and Shareholders Equity.   * **CASH_FLOW** = Cash Flow Statement line items, such as Financing activities, Operation, and Per Share.   * **RATIOS** = Pre-calculated Ratios, including Financial, Growth Rates, Profitability, Liquidity, Size, and Valuation.   * **FINANCIAL_SERVICES** = Financial Statement Items modified for Financial Services companies.   * **INDUSTRY_METRICS** = Industry Specific Line Items or Modifications. View subcategory for list of Industries.   * **PENSION_AND_POSTRETIREMENT** = Accumulated Pension Benefit Obligations and related data.   * **MARKET_DATA** = General Market Data, such as Shares Outstanding. *Note - /factset-prices/prices/ endpoints may be better suited for pricing related market data.*   * **MISCELLANEOUS** = Corporation Data, Financial Records details, Indicators.   * **DATES** = Relevant Dates  (optional)
subcategory = "INCOME_STATEMENT" # str | Sub-Category Filter for the Primary Category Requested. Choose a related sub-category for the Category requested-   * **INCOME_STATEMENT** - INCOME_STATEMENT, NON-OPERATING, PER_SHARE, SUPPLEMENTAL   * **BALANCE_SHEET** - ASSETS, BALANCE_SHEET, HEALTHCARE, LIABILITIES, PER_SHARE, SHAREHOLDERS_EQUITY, SUPPLEMENTAL   * **CASH_FLOW** - CASH_FLOW, CHANGE_IN_CASH, FINANCING, INVESTING, OPERATING, PER_SHARE, SUPPLEMENTAL   * **RATIOS** - FINANCIAL, GROWTH_RATE, LIQUIDITY, PROFITABILITY, SIZE, VALUATION   * **FINANCIAL_SERVICES** - BALANCE_SHEET, INCOME_STATEMENT, SUPPLEMENTAL   * **INDUSTRY_METRICS** - AIRLINES, BANKING, HOTELS_AND_GAMING, METALS_AND_MINING, OIL_AND_GAS, PHARMACEUTICAL, REIT, RETAIL, BANK, INSURANCE, UTILITY   * **PENSION_AND_POSTRETIREMENT** - PENSION_AND_POSTRETIREMENT   * **MARKET_DATA** - MARKET_DATA   * **MISCELLANEOUS** - CLASSIFICATION, CORPORATE_DATA, FINANCIAL_RECORDS, INDICATOR, EMPLOYEES_AND_MANAGEMENT   * **DATES** - DATES  (optional)

    try:
        # Available fundamental metrics or ratios.
        api_response = api_instance.get_fds_fundamentals_metrics(category=category, subcategory=subcategory)
        pprint(api_response)
    except fds.sdk.FactSetFundamentals.ApiException as e:
        print("Exception when calling DataItemsApi->get_fds_fundamentals_metrics: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DataItemsApi* | [**get_fds_fundamentals_metrics**](docs/DataItemsApi.md#get_fds_fundamentals_metrics) | **GET** /factset-fundamentals/v1/metrics | Available fundamental metrics or ratios.
*DataItemsApi* | [**get_fds_fundamentals_metrics_for_list**](docs/DataItemsApi.md#get_fds_fundamentals_metrics_for_list) | **POST** /factset-fundamentals/v1/metrics | Available fundamental metrics or ratios.
*FactSetFundamentalsApi* | [**get_fds_fundamentals**](docs/FactSetFundamentalsApi.md#get_fds_fundamentals) | **GET** /factset-fundamentals/v1/fundamentals | Returns the Company Fundamental Data.
*FactSetFundamentalsApi* | [**get_fds_fundamentals_for_list**](docs/FactSetFundamentalsApi.md#get_fds_fundamentals_for_list) | **POST** /factset-fundamentals/v1/fundamentals | Returns the Company Fundamental Data.


## Documentation For Models

 - [Category](docs/Category.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [Fundamental](docs/Fundamental.md)
 - [FundamentalsRequest](docs/FundamentalsRequest.md)
 - [FundamentalsResponse](docs/FundamentalsResponse.md)
 - [Ids](docs/Ids.md)
 - [Metric](docs/Metric.md)
 - [Metrics](docs/Metrics.md)
 - [MetricsRequest](docs/MetricsRequest.md)
 - [MetricsResponse](docs/MetricsResponse.md)
 - [Periodicity](docs/Periodicity.md)
 - [Restated](docs/Restated.md)
 - [Subcategory](docs/Subcategory.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Author

api@factset.com


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.FactSetFundamentals.apis and fds.sdk.FactSetFundamentals.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.FactSetFundamentals.api.default_api import DefaultApi`
- `from fds.sdk.FactSetFundamentals.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.FactSetFundamentals
from fds.sdk.FactSetFundamentals.apis import *
from fds.sdk.FactSetFundamentals.models import *
```
