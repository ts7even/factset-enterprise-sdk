# fds.sdk.AxiomaFixedIncomeOptimizer
Allow clients to fetch Analytics through APIs.

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v3
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
import fds.sdk.AxiomaFixedIncomeOptimizer
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import fds.sdk.AxiomaFixedIncomeOptimizer
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.AxiomaFixedIncomeOptimizer
from pprint import pprint
from fds.sdk.AxiomaFixedIncomeOptimizer.api import afi_optimizer_api
from fds.sdk.AxiomaFixedIncomeOptimizer.model.afi_optimization_parameters_root import AFIOptimizationParametersRoot
from fds.sdk.AxiomaFixedIncomeOptimizer.model.calculation_info_root import CalculationInfoRoot
from fds.sdk.AxiomaFixedIncomeOptimizer.model.client_error_response import ClientErrorResponse
from fds.sdk.AxiomaFixedIncomeOptimizer.model.object_root import ObjectRoot
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.AxiomaFixedIncomeOptimizer.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.AxiomaFixedIncomeOptimizer.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.AxiomaFixedIncomeOptimizer.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )


# Enter a context with an instance of the API client
with fds.sdk.AxiomaFixedIncomeOptimizer.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = afi_optimizer_api.AFIOptimizerApi(api_client)
    id = "id_example" # str | from url, provided from the location header in the Create and Run AFI optimization endpoint

    try:
        # Cancel AFI optimization by id
        api_instance.cancel_optimization_by_id(id)
    except fds.sdk.AxiomaFixedIncomeOptimizer.ApiException as e:
        print("Exception when calling AFIOptimizerApi->cancel_optimization_by_id: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AFIOptimizerApi* | [**cancel_optimization_by_id**](docs/AFIOptimizerApi.md#cancel_optimization_by_id) | **DELETE** /analytics/engines/afi/v3/optimizations/{id} | Cancel AFI optimization by id
*AFIOptimizerApi* | [**get_optimization_parameters**](docs/AFIOptimizerApi.md#get_optimization_parameters) | **GET** /analytics/engines/afi/v3/optimizations/{id} | Get AFI optimization parameters by id
*AFIOptimizerApi* | [**get_optimization_result**](docs/AFIOptimizerApi.md#get_optimization_result) | **GET** /analytics/engines/afi/v3/optimizations/{id}/result | Get AFI optimization result by id
*AFIOptimizerApi* | [**get_optimization_status_by_id**](docs/AFIOptimizerApi.md#get_optimization_status_by_id) | **GET** /analytics/engines/afi/v3/optimizations/{id}/status | Get AFI optimization status by id
*AFIOptimizerApi* | [**post_and_optimize**](docs/AFIOptimizerApi.md#post_and_optimize) | **POST** /analytics/engines/afi/v3/optimizations | Create and Run AFI optimization
*AFIOptimizerApi* | [**put_and_optimize**](docs/AFIOptimizerApi.md#put_and_optimize) | **PUT** /analytics/engines/afi/v3/optimizations/{id} | Create or Update AFI optimization and run it.
*StrategyDocumentsApi* | [**get_axioma_fi_strategy_documents**](docs/StrategyDocumentsApi.md#get_axioma_fi_strategy_documents) | **GET** /analytics/engines/afi/v3/strategies/{path} | Get Axioma FI strategy documents and sub-directories in a directory


## Documentation For Models

 - [AFIOptimizationParameters](docs/AFIOptimizationParameters.md)
 - [AFIOptimizationParametersRoot](docs/AFIOptimizationParametersRoot.md)
 - [AFIOptimizerStrategy](docs/AFIOptimizerStrategy.md)
 - [AFIOptimizerStrategyOverrides](docs/AFIOptimizerStrategyOverrides.md)
 - [CalculationInfo](docs/CalculationInfo.md)
 - [CalculationInfoRoot](docs/CalculationInfoRoot.md)
 - [ClientErrorResponse](docs/ClientErrorResponse.md)
 - [DocumentDirectories](docs/DocumentDirectories.md)
 - [DocumentDirectoriesRoot](docs/DocumentDirectoriesRoot.md)
 - [Error](docs/Error.md)
 - [ErrorSource](docs/ErrorSource.md)
 - [ObjectRoot](docs/ObjectRoot.md)
 - [OptimalPortfolio](docs/OptimalPortfolio.md)
 - [Optimization](docs/Optimization.md)
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
If the OpenAPI document is large, imports in fds.sdk.AxiomaFixedIncomeOptimizer.apis and fds.sdk.AxiomaFixedIncomeOptimizer.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.AxiomaFixedIncomeOptimizer.api.default_api import DefaultApi`
- `from fds.sdk.AxiomaFixedIncomeOptimizer.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.AxiomaFixedIncomeOptimizer
from fds.sdk.AxiomaFixedIncomeOptimizer.apis import *
from fds.sdk.AxiomaFixedIncomeOptimizer.models import *
```
