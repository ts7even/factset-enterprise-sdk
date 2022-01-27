# CommentsApi

All URIs are relative to *https://api-sandbox.factset.com/research/irn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComment**](CommentsApi.md#createComment) | **POST** /v1/notes/{noteId}/comments | Create a comment to a Note
[**createCommentAttachment**](CommentsApi.md#createCommentAttachment) | **POST** /v1/notes/{noteId}/comments/{commentId}/attachments | Create a comment attachment to a Note
[**deleteComment**](CommentsApi.md#deleteComment) | **DELETE** /v1/notes/{noteId}/comments/{commentId} | Delete a Comment from a Note
[**downloadCommentAttachmentForComment**](CommentsApi.md#downloadCommentAttachmentForComment) | **GET** /v1/notes/{noteId}/comments/{commentId}/attachments/{attachmentId}/download | Download single attachment detail of a comment belonging to a note
[**getComment**](CommentsApi.md#getComment) | **GET** /v1/notes/{noteId}/comments/{commentId} | Get details of a comment belonging to a note
[**getCommentAttachments**](CommentsApi.md#getCommentAttachments) | **GET** /v1/notes/{noteId}/comments/{commentId}/attachments | Get attachments summary of a comment belonging to a note
[**getComments**](CommentsApi.md#getComments) | **GET** /v1/notes/{noteId}/comments | Get all comments for a note
[**patchComment**](CommentsApi.md#patchComment) | **PATCH** /v1/notes/{noteId}/comments/{commentId} | Edit a comment for a note



## createComment

> NewItemDto createComment(noteId, createCommentDto)

Create a comment to a Note

### Example

```java
// Import classes:
import com.factset.sdk.IRNNotes.ApiClient;
import com.factset.sdk.IRNNotes.ApiException;
import com.factset.sdk.IRNNotes.Configuration;
import com.factset.sdk.IRNNotes.auth.*;
import com.factset.sdk.IRNNotes.model.*;
import com.factset.sdk.IRNNotes.api.CommentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/research/irn");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CommentsApi apiInstance = new CommentsApi(defaultClient);
        java.util.UUID noteId = new java.util.UUID(); // java.util.UUID | 
        CreateCommentDto createCommentDto = new CreateCommentDto(); // CreateCommentDto | 
        try {
            NewItemDto result = apiInstance.createComment(noteId, createCommentDto);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CommentsApi#createComment");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **java.util.UUID**|  |
 **createCommentDto** | [**CreateCommentDto**](CreateCommentDto.md)|  | [optional]

### Return type

[**NewItemDto**](NewItemDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Success |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Server Error |  -  |


## createCommentAttachment

> NewItemDto createCommentAttachment(noteId, commentId, file)

Create a comment attachment to a Note

### Example

```java
import java.io.File;
// Import classes:
import com.factset.sdk.IRNNotes.ApiClient;
import com.factset.sdk.IRNNotes.ApiException;
import com.factset.sdk.IRNNotes.Configuration;
import com.factset.sdk.IRNNotes.auth.*;
import com.factset.sdk.IRNNotes.model.*;
import com.factset.sdk.IRNNotes.api.CommentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/research/irn");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CommentsApi apiInstance = new CommentsApi(defaultClient);
        java.util.UUID noteId = new java.util.UUID(); // java.util.UUID | 
        java.util.UUID commentId = new java.util.UUID(); // java.util.UUID | 
        File file = new File("/path/to/file"); // File | 
        try {
            NewItemDto result = apiInstance.createCommentAttachment(noteId, commentId, file);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CommentsApi#createCommentAttachment");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **java.util.UUID**|  |
 **commentId** | **java.util.UUID**|  |
 **file** | **File**|  |

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
| **201** | Success |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Server Error |  -  |


## deleteComment

> deleteComment(noteId, commentId)

Delete a Comment from a Note

### Example

```java
// Import classes:
import com.factset.sdk.IRNNotes.ApiClient;
import com.factset.sdk.IRNNotes.ApiException;
import com.factset.sdk.IRNNotes.Configuration;
import com.factset.sdk.IRNNotes.auth.*;
import com.factset.sdk.IRNNotes.model.*;
import com.factset.sdk.IRNNotes.api.CommentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/research/irn");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CommentsApi apiInstance = new CommentsApi(defaultClient);
        java.util.UUID noteId = new java.util.UUID(); // java.util.UUID | 
        java.util.UUID commentId = new java.util.UUID(); // java.util.UUID | 
        try {
            apiInstance.deleteComment(noteId, commentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling CommentsApi#deleteComment");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **java.util.UUID**|  |
 **commentId** | **java.util.UUID**|  |

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
| **500** | Server Error |  -  |


## downloadCommentAttachmentForComment

> downloadCommentAttachmentForComment(noteId, commentId, attachmentId)

Download single attachment detail of a comment belonging to a note

### Example

```java
// Import classes:
import com.factset.sdk.IRNNotes.ApiClient;
import com.factset.sdk.IRNNotes.ApiException;
import com.factset.sdk.IRNNotes.Configuration;
import com.factset.sdk.IRNNotes.auth.*;
import com.factset.sdk.IRNNotes.model.*;
import com.factset.sdk.IRNNotes.api.CommentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/research/irn");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CommentsApi apiInstance = new CommentsApi(defaultClient);
        java.util.UUID noteId = new java.util.UUID(); // java.util.UUID | 
        java.util.UUID commentId = new java.util.UUID(); // java.util.UUID | 
        java.util.UUID attachmentId = new java.util.UUID(); // java.util.UUID | 
        try {
            apiInstance.downloadCommentAttachmentForComment(noteId, commentId, attachmentId);
        } catch (ApiException e) {
            System.err.println("Exception when calling CommentsApi#downloadCommentAttachmentForComment");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **java.util.UUID**|  |
 **commentId** | **java.util.UUID**|  |
 **attachmentId** | **java.util.UUID**|  |

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## getComment

> CommentDto getComment(noteId, commentId)

Get details of a comment belonging to a note

### Example

```java
// Import classes:
import com.factset.sdk.IRNNotes.ApiClient;
import com.factset.sdk.IRNNotes.ApiException;
import com.factset.sdk.IRNNotes.Configuration;
import com.factset.sdk.IRNNotes.auth.*;
import com.factset.sdk.IRNNotes.model.*;
import com.factset.sdk.IRNNotes.api.CommentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/research/irn");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CommentsApi apiInstance = new CommentsApi(defaultClient);
        java.util.UUID noteId = new java.util.UUID(); // java.util.UUID | 
        java.util.UUID commentId = new java.util.UUID(); // java.util.UUID | 
        try {
            CommentDto result = apiInstance.getComment(noteId, commentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CommentsApi#getComment");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **java.util.UUID**|  |
 **commentId** | **java.util.UUID**|  |

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
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## getCommentAttachments

> java.util.List&lt;AttachmentSummaryDto&gt; getCommentAttachments(noteId, commentId)

Get attachments summary of a comment belonging to a note

### Example

```java
// Import classes:
import com.factset.sdk.IRNNotes.ApiClient;
import com.factset.sdk.IRNNotes.ApiException;
import com.factset.sdk.IRNNotes.Configuration;
import com.factset.sdk.IRNNotes.auth.*;
import com.factset.sdk.IRNNotes.model.*;
import com.factset.sdk.IRNNotes.api.CommentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/research/irn");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CommentsApi apiInstance = new CommentsApi(defaultClient);
        java.util.UUID noteId = new java.util.UUID(); // java.util.UUID | 
        java.util.UUID commentId = new java.util.UUID(); // java.util.UUID | 
        try {
            java.util.List<AttachmentSummaryDto> result = apiInstance.getCommentAttachments(noteId, commentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CommentsApi#getCommentAttachments");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **java.util.UUID**|  |
 **commentId** | **java.util.UUID**|  |

### Return type

[**java.util.List&lt;AttachmentSummaryDto&gt;**](AttachmentSummaryDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## getComments

> java.util.List&lt;CommentSummaryDto&gt; getComments(noteId)

Get all comments for a note

### Example

```java
// Import classes:
import com.factset.sdk.IRNNotes.ApiClient;
import com.factset.sdk.IRNNotes.ApiException;
import com.factset.sdk.IRNNotes.Configuration;
import com.factset.sdk.IRNNotes.auth.*;
import com.factset.sdk.IRNNotes.model.*;
import com.factset.sdk.IRNNotes.api.CommentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/research/irn");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CommentsApi apiInstance = new CommentsApi(defaultClient);
        java.util.UUID noteId = new java.util.UUID(); // java.util.UUID | 
        try {
            java.util.List<CommentSummaryDto> result = apiInstance.getComments(noteId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CommentsApi#getComments");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **java.util.UUID**|  |

### Return type

[**java.util.List&lt;CommentSummaryDto&gt;**](CommentSummaryDto.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |


## patchComment

> patchComment(noteId, commentId, operation)

Edit a comment for a note

### Example

```java
// Import classes:
import com.factset.sdk.IRNNotes.ApiClient;
import com.factset.sdk.IRNNotes.ApiException;
import com.factset.sdk.IRNNotes.Configuration;
import com.factset.sdk.IRNNotes.auth.*;
import com.factset.sdk.IRNNotes.model.*;
import com.factset.sdk.IRNNotes.api.CommentsApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/research/irn");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CommentsApi apiInstance = new CommentsApi(defaultClient);
        java.util.UUID noteId = new java.util.UUID(); // java.util.UUID | 
        java.util.UUID commentId = new java.util.UUID(); // java.util.UUID | 
        java.util.List<Operation> operation = Arrays.asList(); // java.util.List<Operation> | 
        try {
            apiInstance.patchComment(noteId, commentId, operation);
        } catch (ApiException e) {
            System.err.println("Exception when calling CommentsApi#patchComment");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **noteId** | **java.util.UUID**|  |
 **commentId** | **java.util.UUID**|  |
 **operation** | [**List&lt;Operation&gt;**](Operation.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **404** | Not Found |  -  |
