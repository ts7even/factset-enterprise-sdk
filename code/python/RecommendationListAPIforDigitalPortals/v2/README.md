# fds.sdk.RecommendationListAPIforDigitalPortals
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
import fds.sdk.RecommendationListAPIforDigitalPortals
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import fds.sdk.RecommendationListAPIforDigitalPortals
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.RecommendationListAPIforDigitalPortals
from pprint import pprint
from fds.sdk.RecommendationListAPIforDigitalPortals.api import recommendation_list_api
from fds.sdk.RecommendationListAPIforDigitalPortals.model.inline_object import InlineObject
from fds.sdk.RecommendationListAPIforDigitalPortals.model.inline_response200 import InlineResponse200
from fds.sdk.RecommendationListAPIforDigitalPortals.model.inline_response2001 import InlineResponse2001
from fds.sdk.RecommendationListAPIforDigitalPortals.model.inline_response2002 import InlineResponse2002
from fds.sdk.RecommendationListAPIforDigitalPortals.model.inline_response2003 import InlineResponse2003
from fds.sdk.RecommendationListAPIforDigitalPortals.model.inline_response2004 import InlineResponse2004
from fds.sdk.RecommendationListAPIforDigitalPortals.model.inline_response2005 import InlineResponse2005
# Defining the host is optional and defaults to http://api.factset.com/wealth/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.RecommendationListAPIforDigitalPortals.Configuration(
    host = "http://api.factset.com/wealth/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.RecommendationListAPIforDigitalPortals.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.RecommendationListAPIforDigitalPortals.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )


# Enter a context with an instance of the API client
with fds.sdk.RecommendationListAPIforDigitalPortals.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = recommendation_list_api.RecommendationListApi(api_client)
    id = 3.14 # float | Identifier of the list.
attributes = [
        "_attributes_example",
    ] # [str] | Limit the attributes returned in the response to the specified set. (optional)
language = "_language_example" # str | ISO 639-1 code of the language. (optional)

    try:
        # Attributes of a single list.
        api_response = api_instance.get_recommendation_list_get(id, attributes=attributes, language=language)
        pprint(api_response)
    except fds.sdk.RecommendationListAPIforDigitalPortals.ApiException as e:
        print("Exception when calling RecommendationListApi->get_recommendation_list_get: %s\n" % e)
```

## Documentation for API Endpoints

All URIs are relative to *http://api.factset.com/wealth/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RecommendationListApi* | [**get_recommendation_list_get**](docs/RecommendationListApi.md#get_recommendation_list_get) | **GET** /recommendationList/get | Attributes of a single list.
*RecommendationListApi* | [**get_recommendation_list_revision_element_list**](docs/RecommendationListApi.md#get_recommendation_list_revision_element_list) | **GET** /recommendationList/revision/element/list | List of elements of a given revision.
*RecommendationListApi* | [**get_recommendation_list_revision_get**](docs/RecommendationListApi.md#get_recommendation_list_revision_get) | **GET** /recommendationList/revision/get | Attributes of a single revision.
*RecommendationListApi* | [**get_recommendation_list_revision_search**](docs/RecommendationListApi.md#get_recommendation_list_revision_search) | **GET** /recommendationList/revision/search | Search for revisions of a recommendation list.
*RecommendationListApi* | [**get_recommendation_list_search**](docs/RecommendationListApi.md#get_recommendation_list_search) | **GET** /recommendationList/search | Search for recommendation lists.
*RecommendationListApi* | [**post_recommendation_list_revision_list**](docs/RecommendationListApi.md#post_recommendation_list_revision_list) | **POST** /recommendationList/revision/list | List of revisions of a recommendation list.


## Documentation For Models

 - [AttributesMember](docs/AttributesMember.md)
 - [CursorBasedPaginationOutputObject](docs/CursorBasedPaginationOutputObject.md)
 - [CursorBasedPaginationOutputObjectWithoutTotal](docs/CursorBasedPaginationOutputObjectWithoutTotal.md)
 - [ErrorMetaObject](docs/ErrorMetaObject.md)
 - [ErrorObject](docs/ErrorObject.md)
 - [InlineObject](docs/InlineObject.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse2001](docs/InlineResponse2001.md)
 - [InlineResponse2001ActiveRange](docs/InlineResponse2001ActiveRange.md)
 - [InlineResponse2001Data](docs/InlineResponse2001Data.md)
 - [InlineResponse2002](docs/InlineResponse2002.md)
 - [InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [InlineResponse2002DataInstrument](docs/InlineResponse2002DataInstrument.md)
 - [InlineResponse2002DataRecommendationList](docs/InlineResponse2002DataRecommendationList.md)
 - [InlineResponse2002DataTypes](docs/InlineResponse2002DataTypes.md)
 - [InlineResponse2003](docs/InlineResponse2003.md)
 - [InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [InlineResponse2004](docs/InlineResponse2004.md)
 - [InlineResponse2004Data](docs/InlineResponse2004Data.md)
 - [InlineResponse2005](docs/InlineResponse2005.md)
 - [InlineResponse2005Data](docs/InlineResponse2005Data.md)
 - [InlineResponse2005Description](docs/InlineResponse2005Description.md)
 - [InlineResponse2005Notation](docs/InlineResponse2005Notation.md)
 - [InlineResponse2005NotationInstrument](docs/InlineResponse2005NotationInstrument.md)
 - [InlineResponse2005NotationInstrumentType](docs/InlineResponse2005NotationInstrumentType.md)
 - [InlineResponse2005NotationMarket](docs/InlineResponse2005NotationMarket.md)
 - [InlineResponse2005RecommendationClass](docs/InlineResponse2005RecommendationClass.md)
 - [InlineResponse200Data](docs/InlineResponse200Data.md)
 - [InlineResponse200DataActiveRange](docs/InlineResponse200DataActiveRange.md)
 - [InlineResponse200DataActiveRevision](docs/InlineResponse200DataActiveRevision.md)
 - [InlineResponse200DataActiveRevisionActiveRange](docs/InlineResponse200DataActiveRevisionActiveRange.md)
 - [InlineResponse200Meta](docs/InlineResponse200Meta.md)
 - [LanguageMember](docs/LanguageMember.md)
 - [OffsetBasedPaginationOutputObject](docs/OffsetBasedPaginationOutputObject.md)
 - [OffsetBasedPaginationOutputObjectWithoutTotal](docs/OffsetBasedPaginationOutputObjectWithoutTotal.md)
 - [PartialOutputObject](docs/PartialOutputObject.md)
 - [RecommendationListRevisionListData](docs/RecommendationListRevisionListData.md)
 - [RecommendationListRevisionListDataActiveRange](docs/RecommendationListRevisionListDataActiveRange.md)
 - [RecommendationListRevisionListMeta](docs/RecommendationListRevisionListMeta.md)
 - [StatusObject](docs/StatusObject.md)


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
If the OpenAPI document is large, imports in fds.sdk.RecommendationListAPIforDigitalPortals.apis and fds.sdk.RecommendationListAPIforDigitalPortals.models may fail with a
RecursionError indicating the maximum recursion limit has been exceeded. In that case, there are a couple of solutions:

Solution 1:
Use specific imports for apis and models like:
- `from fds.sdk.RecommendationListAPIforDigitalPortals.api.default_api import DefaultApi`
- `from fds.sdk.RecommendationListAPIforDigitalPortals.model.pet import Pet`

Solution 2:
Before importing the package, adjust the maximum recursion limit as shown below:
```
import sys
sys.setrecursionlimit(1500)
import fds.sdk.RecommendationListAPIforDigitalPortals
from fds.sdk.RecommendationListAPIforDigitalPortals.apis import *
from fds.sdk.RecommendationListAPIforDigitalPortals.models import *
```
