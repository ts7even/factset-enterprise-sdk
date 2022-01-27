# fds.sdk.QuantitativeResearchEnvironment
TBD

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.0
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
import fds.sdk.QuantitativeResearchEnvironment
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import fds.sdk.QuantitativeResearchEnvironment
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.QuantitativeResearchEnvironment
from pprint import pprint
from fds.sdk.QuantitativeResearchEnvironment.api import calculations_api
from fds.sdk.QuantitativeResearchEnvironment.model.calculation import Calculation
from fds.sdk.QuantitativeResearchEnvironment.model.calculation_status import CalculationStatus
# Defining the host is optional and defaults to https://api.factset.com
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.QuantitativeResearchEnvironment.Configuration(
    host = "https://api.factset.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.QuantitativeResearchEnvironment.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.QuantitativeResearchEnvironment.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )


# Enter a context with an instance of the API client
with fds.sdk.QuantitativeResearchEnvironment.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = calculations_api.CalculationsApi(api_client)
    id = "id_example" # str | From url, provided by location header or response body in the calculation start endpoint

    try:
        # Get calculation status by id
        api_response = api_instance.analytics_quant_qre_v1_calculations_id_get(id)
        pprint(api_response)
    except fds.sdk.QuantitativeResearchEnvironment.ApiException as e:
        print("Exception when calling CalculationsApi->analytics_quant_qre_v1_calculations_id_get: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CalculationsApi* | [**analytics_quant_qre_v1_calculations_id_get**](docs/CalculationsApi.md#analytics_quant_qre_v1_calculations_id_get) | **GET** /analytics/quant/qre/v1/calculations/{id} | Get calculation status by id
*CalculationsApi* | [**analytics_quant_qre_v1_calculations_id_log_get**](docs/CalculationsApi.md#analytics_quant_qre_v1_calculations_id_log_get) | **GET** /analytics/quant/qre/v1/calculations/{id}/log | Get calculation log for a specific calculation
*CalculationsApi* | [**analytics_quant_qre_v1_calculations_id_output_get**](docs/CalculationsApi.md#analytics_quant_qre_v1_calculations_id_output_get) | **GET** /analytics/quant/qre/v1/calculations/{id}/output | Get calculation output for a specific calculation
*CalculationsApi* | [**analytics_quant_qre_v1_calculations_post**](docs/CalculationsApi.md#analytics_quant_qre_v1_calculations_post) | **POST** /analytics/quant/qre/v1/calculations | Starts a new script calculation
*FilesApi* | [**analytics_quant_qre_v1_files_server_file_post**](docs/FilesApi.md#analytics_quant_qre_v1_files_server_file_post) | **POST** /analytics/quant/qre/v1/files/{server}/{file} | Starts a file upload
*FilesApi* | [**analytics_quant_qre_v1_files_uploads_id_get**](docs/FilesApi.md#analytics_quant_qre_v1_files_uploads_id_get) | **GET** /analytics/quant/qre/v1/files/uploads/{id} | Get upload status by id


## Documentation For Models

 - [Calculation](docs/Calculation.md)
 - [CalculationStatus](docs/CalculationStatus.md)
 - [FileUploadStatus](docs/FileUploadStatus.md)


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
If the OpenAPI document is large, imports in fds.sdk.QuantitativeResearchEnvironment.apis and fds.sdk.QuantitativeResearchEnvironment.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.QuantitativeResearchEnvironment.api.default_api import DefaultApi`
- `from fds.sdk.QuantitativeResearchEnvironment.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.QuantitativeResearchEnvironment
from fds.sdk.QuantitativeResearchEnvironment.apis import *
from fds.sdk.QuantitativeResearchEnvironment.models import *
```
