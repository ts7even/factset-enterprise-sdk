# FactSet.SDK.FactSetFundamentals.Api.FactSetFundamentalsApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetFdsFundamentals**](FactSetFundamentalsApi.md#getfdsfundamentals) | **GET** /factset-fundamentals/v1/fundamentals | Returns the Company Fundamental Data.
[**GetFdsFundamentalsForList**](FactSetFundamentalsApi.md#getfdsfundamentalsforlist) | **POST** /factset-fundamentals/v1/fundamentals | Returns the Company Fundamental Data.


<a name="getfdsfundamentals"></a>
# **GetFdsFundamentals**
> FundamentalsResponse GetFdsFundamentals (List<string> ids, List<string> metrics, string periodicity = null, string fiscalPeriodStart = null, string fiscalPeriodEnd = null, string currency = null, string restated = null)

Returns the Company Fundamental Data.

Retrieves FactSet Fundamental standardized data for an individual security. Use the /metrics endpoint to retrieve a full list of valid metrics or data items. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using FactSet.SDK.Utils.Authentication;
using Microsoft.IdentityModel.Tokens;
using FactSet.SDK.FactSetFundamentals.Api;
using FactSet.SDK.FactSetFundamentals.Client;
using FactSet.SDK.FactSetFundamentals.Model;

namespace Example
{
    public class GetFdsFundamentalsExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.factset.com/content";
            // Configure HTTP basic authorization: FactSetApiKey
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";
            // Configure OAuth2 access token for authorization: FactSetOAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // Configure FactSet Authentication Client to automatically retrieve token for: FactSetOAuth2

            // using path to configuration:
            String pathToConfig = "";   // String contining absolute path to your configuration
            config.OAuth2Client = new ConfidentialClient(pathToConfig);

            // OR

            // If your configuration information is not within a file, you will provide the following information to create a new configuration.
            //   `name` - "Application Name registered with the FactSet Developer Portal",
            //   `clientId` - "Client ID registered with the FactSet Developer Portal",
            //   `clientAuthType` - For confidential client this will be "Confidential",
            //   `owners` - new List<string>() { "Owner ID(s) of this configuration" },
            //   `jwk` - new JsonWebKey(@"{
            //                     'kty': 'RSA',
            //                     'use': 'sig',
            //                     'alg': 'RS256',
            //                     'kid': 'Key ID',
            //                     'd': 'ECC Private Key',
            //                     'n': 'Modulus',
            //                     'e': 'Exponent',
            //                     'p': 'First Prime Factor',
            //                     'q': 'Second Prime Factor',
            //                     'dp': 'First Factor CRT Exponent',
            //                     'dq': 'Second Factor CRT Exponent',
            //                      'qi': 'First CRT Coefficient',
            //           }");

            // `NB`: Within the JWK parameters kty, alg, use, kid, n, e, d, p, q, dp, dq, qi are required for authorization.
            
            var config = new FactSet.SDK.Utils.Authentication.Configuration(name, clientId, clientAuthType, owners, jwk);
            config.OAuth2Client = new ConfidentialClient(config);

            var apiInstance = new FactSetFundamentalsApi(config);
            var ids = new List<string>(); // List<string> | Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted as input. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
            var metrics = new List<string>(); // List<string> | Requested List of Financial Statement Items or Ratios. Use /metrics endpoint for a complete list of available FF_* metric items. <p>*When requesting multiple metrics, you cannot mix metric data types (e.g. strings and floats). Please use /metrics endpoints for context on metric dataType to avoid null data.*</p> <p>***metrics limit** =  1600 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of metrics, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
            var periodicity = ANN;  // string | Periodicity or frequency of the fiscal periods, where   * **ANN**  = Annual - Original,   * **ANN_R** = Annual - Latest - *Includes Restatements*,   * **QTR**  = Quarterly - Original,   * **QTR_R** = Quarterly - Latest - *Includes Restatements*,   * **SEMI** = Semi-Annual,   * **LTM**  = Last Twelve Months,   * **LTMSG** = Last Twelve Months Global [OA17959](https://my.apps.factset.com/oa/pages/17959),   * **YTD** = Year-to-date.  (optional)  (default to QTR)
            var fiscalPeriodStart = 2017-09-01;  // string | Fiscal period start expressed as YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution.  (optional) 
            var fiscalPeriodEnd = 2018-03-01;  // string | Fiscal period end expressed YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution.  (optional) 
            var currency = USD;  // string | Currency code for currency values. For a list of currency ISO codes, visit Online Assistant Page [OA1470](https://my.apps.factset.com/oa/pages/1470).  (optional)  (default to "LOCAL")
            var restated = RP;  // string | Update Status Flag:   * **RP** = Include preliminary data,   * **RF** = Only final data  (optional)  (default to RP)

            try
            {
                // Returns the Company Fundamental Data.
                FundamentalsResponse result = apiInstance.GetFdsFundamentals(ids, metrics, periodicity, fiscalPeriodStart, fiscalPeriodEnd, currency, restated);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FactSetFundamentalsApi.GetFdsFundamentals: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List&lt;string&gt;**](string.md)| Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted as input. &lt;p&gt;***ids limit** &#x3D;  1000 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*  | 
 **metrics** | [**List&lt;string&gt;**](string.md)| Requested List of Financial Statement Items or Ratios. Use /metrics endpoint for a complete list of available FF_* metric items. &lt;p&gt;*When requesting multiple metrics, you cannot mix metric data types (e.g. strings and floats). Please use /metrics endpoints for context on metric dataType to avoid null data.*&lt;/p&gt; &lt;p&gt;***metrics limit** &#x3D;  1600 per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of metrics, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*  | 
 **periodicity** | **string**| Periodicity or frequency of the fiscal periods, where   * **ANN**  &#x3D; Annual - Original,   * **ANN_R** &#x3D; Annual - Latest - *Includes Restatements*,   * **QTR**  &#x3D; Quarterly - Original,   * **QTR_R** &#x3D; Quarterly - Latest - *Includes Restatements*,   * **SEMI** &#x3D; Semi-Annual,   * **LTM**  &#x3D; Last Twelve Months,   * **LTMSG** &#x3D; Last Twelve Months Global [OA17959](https://my.apps.factset.com/oa/pages/17959),   * **YTD** &#x3D; Year-to-date.  | [optional] [default to QTR]
 **fiscalPeriodStart** | **string**| Fiscal period start expressed as YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution.  | [optional] 
 **fiscalPeriodEnd** | **string**| Fiscal period end expressed YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution.  | [optional] 
 **currency** | **string**| Currency code for currency values. For a list of currency ISO codes, visit Online Assistant Page [OA1470](https://my.apps.factset.com/oa/pages/1470).  | [optional] [default to &quot;LOCAL&quot;]
 **restated** | **string**| Update Status Flag:   * **RP** &#x3D; Include preliminary data,   * **RF** &#x3D; Only final data  | [optional] [default to RP]

### Return type

[**FundamentalsResponse**](FundamentalsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Fundamental data items |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getfdsfundamentalsforlist"></a>
# **GetFdsFundamentalsForList**
> FundamentalsResponse GetFdsFundamentalsForList (FundamentalsRequest fundamentalsRequest)

Returns the Company Fundamental Data.

Retrieves FactSet Fundamental standardized data for an individual security. Use the /metrics endpoint to retrieve a full list of valid metrics or data items.   

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using FactSet.SDK.Utils.Authentication;
using Microsoft.IdentityModel.Tokens;
using FactSet.SDK.FactSetFundamentals.Api;
using FactSet.SDK.FactSetFundamentals.Client;
using FactSet.SDK.FactSetFundamentals.Model;

namespace Example
{
    public class GetFdsFundamentalsForListExample
    {
        public static void Main()
        {
            Configuration config = new Configuration();
            config.BasePath = "https://api.factset.com/content";
            // Configure HTTP basic authorization: FactSetApiKey
            config.Username = "YOUR_USERNAME";
            config.Password = "YOUR_PASSWORD";
            // Configure OAuth2 access token for authorization: FactSetOAuth2
            config.AccessToken = "YOUR_ACCESS_TOKEN";

            // Configure FactSet Authentication Client to automatically retrieve token for: FactSetOAuth2

            // using path to configuration:
            String pathToConfig = "";   // String contining absolute path to your configuration
            config.OAuth2Client = new ConfidentialClient(pathToConfig);

            // OR

            // If your configuration information is not within a file, you will provide the following information to create a new configuration.
            //   `name` - "Application Name registered with the FactSet Developer Portal",
            //   `clientId` - "Client ID registered with the FactSet Developer Portal",
            //   `clientAuthType` - For confidential client this will be "Confidential",
            //   `owners` - new List<string>() { "Owner ID(s) of this configuration" },
            //   `jwk` - new JsonWebKey(@"{
            //                     'kty': 'RSA',
            //                     'use': 'sig',
            //                     'alg': 'RS256',
            //                     'kid': 'Key ID',
            //                     'd': 'ECC Private Key',
            //                     'n': 'Modulus',
            //                     'e': 'Exponent',
            //                     'p': 'First Prime Factor',
            //                     'q': 'Second Prime Factor',
            //                     'dp': 'First Factor CRT Exponent',
            //                     'dq': 'Second Factor CRT Exponent',
            //                      'qi': 'First CRT Coefficient',
            //           }");

            // `NB`: Within the JWK parameters kty, alg, use, kid, n, e, d, p, q, dp, dq, qi are required for authorization.
            
            var config = new FactSet.SDK.Utils.Authentication.Configuration(name, clientId, clientAuthType, owners, jwk);
            config.OAuth2Client = new ConfidentialClient(config);

            var apiInstance = new FactSetFundamentalsApi(config);
            var fundamentalsRequest = new FundamentalsRequest(); // FundamentalsRequest | Request object for requesting fundamentals data

            try
            {
                // Returns the Company Fundamental Data.
                FundamentalsResponse result = apiInstance.GetFdsFundamentalsForList(fundamentalsRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling FactSetFundamentalsApi.GetFdsFundamentalsForList: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fundamentalsRequest** | [**FundamentalsRequest**](FundamentalsRequest.md)| Request object for requesting fundamentals data | 

### Return type

[**FundamentalsResponse**](FundamentalsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Fundamental data items |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
