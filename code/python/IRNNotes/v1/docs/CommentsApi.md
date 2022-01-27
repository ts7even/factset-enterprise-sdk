# fds.sdk.IRNNotes.CommentsApi

All URIs are relative to *https://api-sandbox.factset.com/research/irn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_comment**](CommentsApi.md#create_comment) | **POST** /v1/notes/{noteId}/comments | Create a comment to a Note
[**create_comment_attachment**](CommentsApi.md#create_comment_attachment) | **POST** /v1/notes/{noteId}/comments/{commentId}/attachments | Create a comment attachment to a Note
[**delete_comment**](CommentsApi.md#delete_comment) | **DELETE** /v1/notes/{noteId}/comments/{commentId} | Delete a Comment from a Note
[**download_comment_attachment_for_comment**](CommentsApi.md#download_comment_attachment_for_comment) | **GET** /v1/notes/{noteId}/comments/{commentId}/attachments/{attachmentId}/download | Download single attachment detail of a comment belonging to a note
[**get_comment**](CommentsApi.md#get_comment) | **GET** /v1/notes/{noteId}/comments/{commentId} | Get details of a comment belonging to a note
[**get_comment_attachments**](CommentsApi.md#get_comment_attachments) | **GET** /v1/notes/{noteId}/comments/{commentId}/attachments | Get attachments summary of a comment belonging to a note
[**get_comments**](CommentsApi.md#get_comments) | **GET** /v1/notes/{noteId}/comments | Get all comments for a note
[**patch_comment**](CommentsApi.md#patch_comment) | **PATCH** /v1/notes/{noteId}/comments/{commentId} | Edit a comment for a note


# **create_comment**
> NewItemDto create_comment(note_id)

Create a comment to a Note

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNNotes
from fds.sdk.IRNNotes.api import comments_api
from fds.sdk.IRNNotes.model.new_item_dto import NewItemDto
from fds.sdk.IRNNotes.model.problem_details import ProblemDetails
from fds.sdk.IRNNotes.model.create_comment_dto import CreateCommentDto
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNNotes.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNNotes.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNNotes.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNNotes.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = comments_api.CommentsApi(api_client)
    note_id = "noteId_example" # str | 
    create_comment_dto = CreateCommentDto(
        author_id="author_id_example",
        parent_comment_id="parent_comment_id_example",
        body="body_example",
    ) # CreateCommentDto |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Create a comment to a Note
        api_response = api_instance.create_comment(note_id)
        pprint(api_response)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->create_comment: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create a comment to a Note
        api_response = api_instance.create_comment(note_id, create_comment_dto=create_comment_dto)
        pprint(api_response)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->create_comment: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**|  |
 **create_comment_dto** | [**CreateCommentDto**](CreateCommentDto.md)|  | [optional]

### Return type

[**NewItemDto**](NewItemDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_comment_attachment**
> NewItemDto create_comment_attachment(note_id, comment_id, file)

Create a comment attachment to a Note

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNNotes
from fds.sdk.IRNNotes.api import comments_api
from fds.sdk.IRNNotes.model.new_item_dto import NewItemDto
from fds.sdk.IRNNotes.model.problem_details import ProblemDetails
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNNotes.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNNotes.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNNotes.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNNotes.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = comments_api.CommentsApi(api_client)
    note_id = "noteId_example" # str | 
    comment_id = "commentId_example" # str | 
    file = open('/path/to/file', 'rb') # file_type | 

    # example passing only required values which don't have defaults set
    try:
        # Create a comment attachment to a Note
        api_response = api_instance.create_comment_attachment(note_id, comment_id, file)
        pprint(api_response)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->create_comment_attachment: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**|  |
 **comment_id** | **str**|  |
 **file** | **file_type**|  |

### Return type

[**NewItemDto**](NewItemDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_comment**
> delete_comment(note_id, comment_id)

Delete a Comment from a Note

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNNotes
from fds.sdk.IRNNotes.api import comments_api
from fds.sdk.IRNNotes.model.problem_details import ProblemDetails
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNNotes.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNNotes.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNNotes.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNNotes.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = comments_api.CommentsApi(api_client)
    note_id = "noteId_example" # str | 
    comment_id = "commentId_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Delete a Comment from a Note
        api_instance.delete_comment(note_id, comment_id)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->delete_comment: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**|  |
 **comment_id** | **str**|  |

### Return type

void (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_comment_attachment_for_comment**
> download_comment_attachment_for_comment(note_id, comment_id, attachment_id)

Download single attachment detail of a comment belonging to a note

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNNotes
from fds.sdk.IRNNotes.api import comments_api
from fds.sdk.IRNNotes.model.problem_details import ProblemDetails
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNNotes.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNNotes.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNNotes.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNNotes.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = comments_api.CommentsApi(api_client)
    note_id = "noteId_example" # str | 
    comment_id = "commentId_example" # str | 
    attachment_id = "attachmentId_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Download single attachment detail of a comment belonging to a note
        api_instance.download_comment_attachment_for_comment(note_id, comment_id, attachment_id)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->download_comment_attachment_for_comment: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**|  |
 **comment_id** | **str**|  |
 **attachment_id** | **str**|  |

### Return type

void (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_comment**
> CommentDto get_comment(note_id, comment_id)

Get details of a comment belonging to a note

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNNotes
from fds.sdk.IRNNotes.api import comments_api
from fds.sdk.IRNNotes.model.comment_dto import CommentDto
from fds.sdk.IRNNotes.model.problem_details import ProblemDetails
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNNotes.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNNotes.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNNotes.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNNotes.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = comments_api.CommentsApi(api_client)
    note_id = "noteId_example" # str | 
    comment_id = "commentId_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get details of a comment belonging to a note
        api_response = api_instance.get_comment(note_id, comment_id)
        pprint(api_response)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->get_comment: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**|  |
 **comment_id** | **str**|  |

### Return type

[**CommentDto**](CommentDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_comment_attachments**
> [AttachmentSummaryDto] get_comment_attachments(note_id, comment_id)

Get attachments summary of a comment belonging to a note

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNNotes
from fds.sdk.IRNNotes.api import comments_api
from fds.sdk.IRNNotes.model.attachment_summary_dto import AttachmentSummaryDto
from fds.sdk.IRNNotes.model.problem_details import ProblemDetails
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNNotes.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNNotes.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNNotes.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNNotes.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = comments_api.CommentsApi(api_client)
    note_id = "noteId_example" # str | 
    comment_id = "commentId_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get attachments summary of a comment belonging to a note
        api_response = api_instance.get_comment_attachments(note_id, comment_id)
        pprint(api_response)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->get_comment_attachments: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**|  |
 **comment_id** | **str**|  |

### Return type

[**[AttachmentSummaryDto]**](AttachmentSummaryDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_comments**
> [CommentSummaryDto] get_comments(note_id)

Get all comments for a note

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNNotes
from fds.sdk.IRNNotes.api import comments_api
from fds.sdk.IRNNotes.model.problem_details import ProblemDetails
from fds.sdk.IRNNotes.model.comment_summary_dto import CommentSummaryDto
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNNotes.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNNotes.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNNotes.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNNotes.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = comments_api.CommentsApi(api_client)
    note_id = "noteId_example" # str | 

    # example passing only required values which don't have defaults set
    try:
        # Get all comments for a note
        api_response = api_instance.get_comments(note_id)
        pprint(api_response)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->get_comments: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**|  |

### Return type

[**[CommentSummaryDto]**](CommentSummaryDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_comment**
> patch_comment(note_id, comment_id)

Edit a comment for a note

### Example

* Basic Authentication (FactSetApiKey):
* OAuth Authentication (FactSetOAuth2):

```python
import time
from fds.sdk.utils.authentication import ConfidentialClient
import fds.sdk.IRNNotes
from fds.sdk.IRNNotes.api import comments_api
from fds.sdk.IRNNotes.model.operation import Operation
from fds.sdk.IRNNotes.model.problem_details import ProblemDetails
from pprint import pprint
# Defining the host is optional and defaults to https://api-sandbox.factset.com/research/irn
# See configuration.py for a list of all supported configuration parameters.
configuration = fds.sdk.IRNNotes.Configuration(
    host = "https://api-sandbox.factset.com/research/irn"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# (Preferred) OAuth 2.0: FactSetOAuth2
# See https://developer.factset.com/applications
configuration = fds.sdk.IRNNotes.Configuration(
     fds_oauth_client = ConfidentialClient('app-config.json')
)

# Basic authentication: FactSetApiKey
# See https://developer.factset.com/manage-api-keys
# configuration = fds.sdk.IRNNotes.Configuration(
#     username = 'USERNAME-SERIAL',
#     password = 'API-KEY'
# )

# Enter a context with an instance of the API client
with fds.sdk.IRNNotes.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = comments_api.CommentsApi(api_client)
    note_id = "noteId_example" # str | 
    comment_id = "commentId_example" # str | 
    operation = [
        Operation(
            value={},
            path="path_example",
            op="op_example",
            _from="_from_example",
        ),
    ] # [Operation] |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Edit a comment for a note
        api_instance.patch_comment(note_id, comment_id)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->patch_comment: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Edit a comment for a note
        api_instance.patch_comment(note_id, comment_id, operation=operation)
    except fds.sdk.IRNNotes.ApiException as e:
        print("Exception when calling CommentsApi->patch_comment: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **note_id** | **str**|  |
 **comment_id** | **str**|  |
 **operation** | [**[Operation]**](Operation.md)|  | [optional]

### Return type

void (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
