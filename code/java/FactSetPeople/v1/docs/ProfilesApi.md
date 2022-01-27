# ProfilesApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPeopleProfiles**](ProfilesApi.md#getPeopleProfiles) | **GET** /factset-people/v1/profiles | Return information about the person with the specified entity ID.
[**getPeopleProfilesForList**](ProfilesApi.md#getPeopleProfilesForList) | **POST** /factset-people/v1/profiles | Returns profile information for a large list of people.



## getPeopleProfiles

> PeopleProfilesResponse getPeopleProfiles(ids)

Return information about the person with the specified entity ID.

Returns a summary of basic information about the person referenced by the entityId specified in the URI.


### Example

```java
// Import classes:
import com.factset.sdk.FactSetPeople.ApiClient;
import com.factset.sdk.FactSetPeople.ApiException;
import com.factset.sdk.FactSetPeople.Configuration;
import com.factset.sdk.FactSetPeople.auth.*;
import com.factset.sdk.FactSetPeople.model.*;
import com.factset.sdk.FactSetPeople.api.ProfilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.factset.com/content");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ProfilesApi apiInstance = new ProfilesApi(defaultClient);
        java.util.List<String> ids = Arrays.asList(); // java.util.List<String> | List of FactSet Person Entity identifier.
        try {
            PeopleProfilesResponse result = apiInstance.getPeopleProfiles(ids);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProfilesApi#getPeopleProfiles");
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
 **ids** | **List&lt;String&gt;**| List of FactSet Person Entity identifier. |

### Return type

[**PeopleProfilesResponse**](PeopleProfilesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of Profile Ojects |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |


## getPeopleProfilesForList

> PeopleProfilesResponse getPeopleProfilesForList(peopleProfilesRequest)

Returns profile information for a large list of people.

### Example

```java
// Import classes:
import com.factset.sdk.FactSetPeople.ApiClient;
import com.factset.sdk.FactSetPeople.ApiException;
import com.factset.sdk.FactSetPeople.Configuration;
import com.factset.sdk.FactSetPeople.auth.*;
import com.factset.sdk.FactSetPeople.model.*;
import com.factset.sdk.FactSetPeople.api.ProfilesApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.factset.com/content");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ProfilesApi apiInstance = new ProfilesApi(defaultClient);
        PeopleProfilesRequest peopleProfilesRequest = new PeopleProfilesRequest(); // PeopleProfilesRequest | 
        try {
            PeopleProfilesResponse result = apiInstance.getPeopleProfilesForList(peopleProfilesRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ProfilesApi#getPeopleProfilesForList");
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
 **peopleProfilesRequest** | [**PeopleProfilesRequest**](PeopleProfilesRequest.md)|  |

### Return type

[**PeopleProfilesResponse**](PeopleProfilesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of People Profile Objects |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |
