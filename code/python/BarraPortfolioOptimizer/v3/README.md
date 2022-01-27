# fds.sdk.BarraPortfolioOptimizer
Allow clients to fetch Analytics through APIs.

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen
For more information, please visit [https://developer.factset.com/contact](https://developer.factset.com/contact)

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
import fds.sdk.BarraPortfolioOptimizer
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import fds.sdk.BarraPortfolioOptimizer
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.BarraPortfolioOptimizer
from pprint import pprint
from fds.sdk.BarraPortfolioOptimizer.api import accounts_api
from fds.sdk.BarraPortfolioOptimizer.model.account_directories_root import AccountDirectoriesRoot
from fds.sdk.BarraPortfolioOptimizer.model.client_error_response import ClientErrorResponse
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.BarraPortfolioOptimizer.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.BarraPortfolioOptimizer.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.BarraPortfolioOptimizer.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )


# Enter a context with an instance of the API client
with fds.sdk.BarraPortfolioOptimizer.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = accounts_api.AccountsApi(api_client)
    path = "Client:Foo/Bar" # str | The directory to get the accounts and sub-directories in (default to "Client:Foo/Bar")

    try:
        # Get accounts and sub-directories in a directory
        api_response = api_instance.get_accounts(path)
        pprint(api_response)
    except fds.sdk.BarraPortfolioOptimizer.ApiException as e:
        print("Exception when calling AccountsApi->get_accounts: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountsApi* | [**get_accounts**](docs/AccountsApi.md#get_accounts) | **GET** /analytics/lookups/v3/accounts/{path} | Get accounts and sub-directories in a directory
*BPMOptimizerApi* | [**cancel_optimization_by_id**](docs/BPMOptimizerApi.md#cancel_optimization_by_id) | **DELETE** /analytics/engines/bpm/v3/optimizations/{id} | Cancel BPM optimization by id
*BPMOptimizerApi* | [**get_optimization_parameters**](docs/BPMOptimizerApi.md#get_optimization_parameters) | **GET** /analytics/engines/bpm/v3/optimizations/{id} | Get BPM optimization parameters by id
*BPMOptimizerApi* | [**get_optimization_result**](docs/BPMOptimizerApi.md#get_optimization_result) | **GET** /analytics/engines/bpm/v3/optimizations/{id}/result | Get BPM optimization result by id
*BPMOptimizerApi* | [**get_optimization_status_by_id**](docs/BPMOptimizerApi.md#get_optimization_status_by_id) | **GET** /analytics/engines/bpm/v3/optimizations/{id}/status | Get BPM optimization status by id
*BPMOptimizerApi* | [**post_and_optimize**](docs/BPMOptimizerApi.md#post_and_optimize) | **POST** /analytics/engines/bpm/v3/optimizations | Create and Run BPM optimization
*BPMOptimizerApi* | [**put_and_optimize**](docs/BPMOptimizerApi.md#put_and_optimize) | **PUT** /analytics/engines/bpm/v3/optimizations/{id} | Create or Update BPM optimization and run it.
*CurrenciesApi* | [**get_currencies**](docs/CurrenciesApi.md#get_currencies) | **GET** /analytics/lookups/v3/currencies | Get currencies
*StrategyDocumentsApi* | [**get_barra_strategy_documents**](docs/StrategyDocumentsApi.md#get_barra_strategy_documents) | **GET** /analytics/engines/bpm/v3/strategies/{path} | Get Barra strategy documents and sub-directories in a directory


## Documentation For Models

 - [AccountDirectories](docs/AccountDirectories.md)
 - [AccountDirectoriesRoot](docs/AccountDirectoriesRoot.md)
 - [BPMOptimization](docs/BPMOptimization.md)
 - [BPMOptimizationParameters](docs/BPMOptimizationParameters.md)
 - [BPMOptimizationParametersRoot](docs/BPMOptimizationParametersRoot.md)
 - [BPMOptimizerStrategy](docs/BPMOptimizerStrategy.md)
 - [BPMOptimizerStrategyAlphaOverride](docs/BPMOptimizerStrategyAlphaOverride.md)
 - [BPMOptimizerStrategyOverrides](docs/BPMOptimizerStrategyOverrides.md)
 - [CalculationInfo](docs/CalculationInfo.md)
 - [CalculationInfoRoot](docs/CalculationInfoRoot.md)
 - [ClientErrorResponse](docs/ClientErrorResponse.md)
 - [ConstraintAction](docs/ConstraintAction.md)
 - [Currency](docs/Currency.md)
 - [CurrencyRoot](docs/CurrencyRoot.md)
 - [DocumentDirectories](docs/DocumentDirectories.md)
 - [DocumentDirectoriesRoot](docs/DocumentDirectoriesRoot.md)
 - [Error](docs/Error.md)
 - [ErrorSource](docs/ErrorSource.md)
 - [ObjectRoot](docs/ObjectRoot.md)
 - [OptimalPortfolio](docs/OptimalPortfolio.md)
 - [OptimizerAccount](docs/OptimizerAccount.md)
 - [OptimizerAccountOverrides](docs/OptimizerAccountOverrides.md)
 - [OptimizerOptimalHoldings](docs/OptimizerOptimalHoldings.md)
 - [OptimizerOutputTypes](docs/OptimizerOutputTypes.md)
 - [OptimizerTradesList](docs/OptimizerTradesList.md)


## Documentation For Authorization


## FactSetApiKey

- **Type**: HTTP basic authentication


## FactSetOAuth2

- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Author

analytics.api.support@factset.com


## Notes for Large OpenAPI documents
If the OpenAPI document is large, imports in fds.sdk.BarraPortfolioOptimizer.apis and fds.sdk.BarraPortfolioOptimizer.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.BarraPortfolioOptimizer.api.default_api import DefaultApi`
- `from fds.sdk.BarraPortfolioOptimizer.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.BarraPortfolioOptimizer
from fds.sdk.BarraPortfolioOptimizer.apis import *
from fds.sdk.BarraPortfolioOptimizer.models import *
```
