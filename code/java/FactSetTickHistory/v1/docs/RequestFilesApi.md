# RequestFilesApi

All URIs are relative to *https://api-sandbox.factset.com/bulk-documents/tickhistory*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1RequestFilesGet**](RequestFilesApi.md#v1RequestFilesGet) | **GET** /v1/request-files | Returns the requestId and status



## v1RequestFilesGet

> RequestFilesResponse v1RequestFilesGet(startDate, endDate, ticker, isoCode, fields, startTime, endTime, single, regionalISOCode)

Returns the requestId and status

Try it Out - references a Sandbox environment to simulate live reponses.</p> **In Sandbox** data available from 20210101 to 20210131. Current date data is not available.</p> PROD has data from 20120101 to current date &</p> **available IDs is limited to..**</p> US Equity - IBM-USA, F-USA, AAPL-USA, GOOG-USA</p> ASX - CBA-ASX, BHP-ASX</p> LSE - HSBA-LON, VOD-LON</p> Tokyo - 7203-TKS, 4307-TKS</p> Swiss - NESN-SWX, COTN-SWX</p> Singapore - J36-SES &</p> Hong Kong - 700-HKG</p>

### Example

```java
import java.time.LocalDate;
// Import classes:
import com.factset.sdk.FactSetTickHistory.ApiClient;
import com.factset.sdk.FactSetTickHistory.ApiException;
import com.factset.sdk.FactSetTickHistory.Configuration;
import com.factset.sdk.FactSetTickHistory.auth.*;
import com.factset.sdk.FactSetTickHistory.models.*;
import com.factset.sdk.FactSetTickHistory.api.RequestFilesApi;

import com.factset.sdk.utils.authentication.ConfidentialClient;

public class Example {
    public static void main(String[] args) throws Exception {
        // Examples for each supported authentication method are below,
        // choose one that satisfies your use case.

        /* (Preferred) OAuth 2.0: FactSetOAuth2 */
        // See https://github.com/FactSet/enterprise-sdk#oauth-20
        // for information on how to create the app-config.json file
        // See https://github.com/FactSet/enterprise-sdk-utils-java#authentication
        // for more information on using the ConfidentialClient class
        ConfidentialClient confidentialClient = new ConfidentialClient("./path/to/config.json");
        ApiClient defaultClient = new ApiClient()
          .setFactSetOAuth2Client(confidentialClient);

        /* Basic authentication: FactSetApiKey */
        // See https://github.com/FactSet/enterprise-sdk#api-key
        // ApiClient defaultClient = new ApiClient()
        //   .setUsername("YOUR USERNAME")
        //   .setPassword("YOUR PASSWORD");

        RequestFilesApi apiInstance = new RequestFilesApi(defaultClient);
        LocalDate startDate = LocalDate.parse("2021-01-01"); // LocalDate | The date for (or from which) the data is required.</p> **In Sandbox, data available from 1st to 31st Jan'21 only**.
        LocalDate endDate = LocalDate.parse("2021-01-31"); // LocalDate | The date to which data is required.</p> **In Sandbox, data available from 1st to 31st Jan'21 only**.
        String ticker = "CBA,BHP"; // String | The requested list of security identifiers. <p>**Either ticker(s) + iso_code  (OR) product is allowed**</p> **NOTE**:Only one identifier can be requested per request
        String isoCode = "AUS"; // String | The requested ISO code. <p>ticker(s) + iso_code</p> <p>**Does not support multiple iso_codes**</p>
        String fields = "*"; // String | Fields for which data is requested. Refer <a href= \"https://developer.factset.com/api-catalog/factset-tick-history-api#apiDocumentation\">Output fields list</a>. for available fields.</p> **In trial default=all fields**
        String startTime = "10:20:30"; // String | The start time of the data being requested. The time should be in HH:MM:SS format.
        String endTime = "11:20:30"; // String | The end time of the data being requested. The time should be in HH:MM:SS format.
        String single = "true"; // String | Returns data in a single file when single=true. This parameter only works for smaller date/time requests where the file size is upto 128MB.
        String regionalISOCode = "ASX"; // String | Works in conjunction with iso_code parameter.<p>ticker(s) + iso_code + regionalISOCode</p> <p>**Does not support multiple regionalISOCodes**</p>
        try {
            RequestFilesResponse result = apiInstance.v1RequestFilesGet(startDate, endDate, ticker, isoCode, fields, startTime, endTime, single, regionalISOCode);
            System.out.println(result);

        } catch (ApiException e) {
            System.err.println("Exception when calling RequestFilesApi#v1RequestFilesGet");
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
 **startDate** | **LocalDate**| The date for (or from which) the data is required.&lt;/p&gt; **In Sandbox, data available from 1st to 31st Jan&#39;21 only**. |
 **endDate** | **LocalDate**| The date to which data is required.&lt;/p&gt; **In Sandbox, data available from 1st to 31st Jan&#39;21 only**. |
 **ticker** | **String**| The requested list of security identifiers. &lt;p&gt;**Either ticker(s) + iso_code  (OR) product is allowed**&lt;/p&gt; **NOTE**:Only one identifier can be requested per request | [optional]
 **isoCode** | **String**| The requested ISO code. &lt;p&gt;ticker(s) + iso_code&lt;/p&gt; &lt;p&gt;**Does not support multiple iso_codes**&lt;/p&gt; | [optional]
 **fields** | **String**| Fields for which data is requested. Refer &lt;a href&#x3D; \&quot;https://developer.factset.com/api-catalog/factset-tick-history-api#apiDocumentation\&quot;&gt;Output fields list&lt;/a&gt;. for available fields.&lt;/p&gt; **In trial default&#x3D;all fields** | [optional] [default to *]
 **startTime** | **String**| The start time of the data being requested. The time should be in HH:MM:SS format. | [optional]
 **endTime** | **String**| The end time of the data being requested. The time should be in HH:MM:SS format. | [optional]
 **single** | **String**| Returns data in a single file when single&#x3D;true. This parameter only works for smaller date/time requests where the file size is upto 128MB. | [optional] [default to false] [enum: true, false]
 **regionalISOCode** | **String**| Works in conjunction with iso_code parameter.&lt;p&gt;ticker(s) + iso_code + regionalISOCode&lt;/p&gt; &lt;p&gt;**Does not support multiple regionalISOCodes**&lt;/p&gt; | [optional]

### Return type

[**RequestFilesResponse**](RequestFilesResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successs |  -  |
| **400** | Bad Request |  -  |

