# SubjectsApi

All URIs are relative to *https://api-sandbox.factset.com/research/irn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SubjectsGet**](SubjectsApi.md#v1SubjectsGet) | **GET** /v1/subjects | Get all Subjects
[**v1SubjectsSubjectIdGet**](SubjectsApi.md#v1SubjectsSubjectIdGet) | **GET** /v1/subjects/{subjectId} | Get Subject details for the given Id provided



## v1SubjectsGet

> java.util.List&lt;SubjectSummaryDto&gt; v1SubjectsGet(xIRNIgnorePermissions)

Get all Subjects

### Example

```java
// Import classes:
import com.factset.sdk.IRNConfiguration.ApiClient;
import com.factset.sdk.IRNConfiguration.ApiException;
import com.factset.sdk.IRNConfiguration.Configuration;
import com.factset.sdk.IRNConfiguration.auth.*;
import com.factset.sdk.IRNConfiguration.model.*;
import com.factset.sdk.IRNConfiguration.api.SubjectsApi;

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

        SubjectsApi apiInstance = new SubjectsApi(defaultClient);
        Boolean xIRNIgnorePermissions = false; // Boolean | 
        try {
            java.util.List<SubjectSummaryDto> result = apiInstance.v1SubjectsGet(xIRNIgnorePermissions);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubjectsApi#v1SubjectsGet");
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
 **xIRNIgnorePermissions** | **Boolean**|  | [optional] [default to false]

### Return type

[**java.util.List&lt;SubjectSummaryDto&gt;**](SubjectSummaryDto.md)

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


## v1SubjectsSubjectIdGet

> SubjectConfigDto v1SubjectsSubjectIdGet(subjectId, xIRNIgnorePermissions)

Get Subject details for the given Id provided

### Example

```java
// Import classes:
import com.factset.sdk.IRNConfiguration.ApiClient;
import com.factset.sdk.IRNConfiguration.ApiException;
import com.factset.sdk.IRNConfiguration.Configuration;
import com.factset.sdk.IRNConfiguration.auth.*;
import com.factset.sdk.IRNConfiguration.model.*;
import com.factset.sdk.IRNConfiguration.api.SubjectsApi;

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

        SubjectsApi apiInstance = new SubjectsApi(defaultClient);
        java.util.UUID subjectId = new java.util.UUID(); // java.util.UUID | Id
        Boolean xIRNIgnorePermissions = false; // Boolean | 
        try {
            SubjectConfigDto result = apiInstance.v1SubjectsSubjectIdGet(subjectId, xIRNIgnorePermissions);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SubjectsApi#v1SubjectsSubjectIdGet");
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
 **subjectId** | **java.util.UUID**| Id |
 **xIRNIgnorePermissions** | **Boolean**|  | [optional] [default to false]

### Return type

[**SubjectConfigDto**](SubjectConfigDto.md)

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
