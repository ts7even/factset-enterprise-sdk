# FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Api.ABSDetailsApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetABSDetails**](ABSDetailsApi.md#getabsdetails) | **GET** /markit-bond-prices-and-analytics/v1/abs-details | Get Asset Backed Security Details for a list of securities
[**GetABSDetailsForList**](ABSDetailsApi.md#getabsdetailsforlist) | **POST** /markit-bond-prices-and-analytics/v1/abs-details | Request Asset Backed Security Details for a list of securities



<a name="getabsdetails"></a>
# **GetABSDetails**
> AbsDetailsResponse GetABSDetails (List<string> ids, string startDate = null, string endDate = null, string frequency = null, string calendar = null)

Get Asset Backed Security Details for a list of securities

Get details for Asset Backed Securities like factors, pay up, wal, cdr, cpr and prepay details provided by Markit for the specified date range and frequency. 

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Api;
using FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Client;
using FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Model;

namespace Example
{
    public class GetABSDetailsExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Client.Configuration();

            // Examples for each supported authentication method are below,
            // choose one that satisfies your use case.

            /* (Preferred) OAuth 2.0: FactSetOAuth2 */
            // See https://github.com/FactSet/enterprise-sdk#oauth-20
            // for information on how to create the app-config.json file
            // See https://github.com/FactSet/enterprise-sdk-utils-dotnet#authentication
            // for more information on using the ConfidentialClient class
            ConfidentialClient confidentialClient = await ConfidentialClient.CreateAsync("/path/to/app-config.json");
            config.OAuth2Client = confidentialClient;

            /* Basic authentication: FactSetApiKey */
            // See https://github.com/FactSet/enterprise-sdk#api-key
            // for information how to create an API key
            // config.Username = "USERNAME-SERIAL";
            // config.Password = "API-KEY";

            var apiInstance = new ABSDetailsApi(config);

            var ids = new List<string>(); // List<string> | Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP, ISIN and SEDOL are accepted as input. <p>***ids limit** = 2000  per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
            var startDate = "2021-01-01";  // string | The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  (optional) 
            var endDate = "2021-12-31";  // string | The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  (optional) 
            var frequency = "D";  // string | Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** = Fiscal Quarter of the company.   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.   * **FY** = Fiscal Annual, based on the last trading day of the company's fiscal year.  (optional)  (default to D)
            var calendar = "FIVEDAY";  // string | Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (optional)  (default to FIVEDAY)

            try
            {
                // Get Asset Backed Security Details for a list of securities
                AbsDetailsResponse result = apiInstance.GetABSDetails(ids, startDate, endDate, frequency, calendar);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling ABSDetailsApi.GetABSDetails: " + e.Message );
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**List&lt;string&gt;**](string.md)| Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP, ISIN and SEDOL are accepted as input. &lt;p&gt;***ids limit** &#x3D; 2000  per request*&lt;/p&gt; *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*  | 
 **startDate** | **string**| The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  | [optional] 
 **endDate** | **string**| The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  | [optional] 
 **frequency** | **string**| Controls the display frequency of the data returned.   * **D** &#x3D; Daily   * **W** &#x3D; Weekly, based on the last day of the week of the start date.   * **M** &#x3D; Monthly, based on the last trading day of the month.   * **AM** &#x3D; Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** &#x3D; Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** &#x3D; Fiscal Quarter of the company.   * **AY** &#x3D; Actual Annual, based on the start date.   * **CY** &#x3D; Calendar Annual, based on the last trading day of the calendar year.   * **FY** &#x3D; Fiscal Annual, based on the last trading day of the company&#39;s fiscal year.  | [optional] [default to D]
 **calendar** | **string**| Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities&#39; trading calendar which excludes date records for respective holiday periods. | [optional] [default to FIVEDAY]

### Return type
[**AbsDetailsResponse**](AbsDetailsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Asset Bond Security Detail items |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


<a name="getabsdetailsforlist"></a>
# **GetABSDetailsForList**
> AbsDetailsResponse GetABSDetailsForList (AbsDetailsRequest absDetailsRequest)

Request Asset Backed Security Details for a list of securities

Get details for Asset Backed Securities like factors, pay up, wal, cdr, cpr and prepay details provided by Markit for the specified date range and frequency. 

### Example
```csharp
using System;
using System.Threading.Tasks;
using FactSet.SDK.Utils.Authentication;
using FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Api;
using FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Client;
using FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Model;

namespace Example
{
    public class GetABSDetailsForListExample
    {
        public static async Task Main()
        {
            var config = new FactSet.SDK.SPGlobalFixedIncomeEvaluatedPricesandAnalytics.Client.Configuration();

            // Examples for each supported authentication method are below,
            // choose one that satisfies your use case.

            /* (Preferred) OAuth 2.0: FactSetOAuth2 */
            // See https://github.com/FactSet/enterprise-sdk#oauth-20
            // for information on how to create the app-config.json file
            // See https://github.com/FactSet/enterprise-sdk-utils-dotnet#authentication
            // for more information on using the ConfidentialClient class
            ConfidentialClient confidentialClient = await ConfidentialClient.CreateAsync("/path/to/app-config.json");
            config.OAuth2Client = confidentialClient;

            /* Basic authentication: FactSetApiKey */
            // See https://github.com/FactSet/enterprise-sdk#api-key
            // for information how to create an API key
            // config.Username = "USERNAME-SERIAL";
            // config.Password = "API-KEY";

            var apiInstance = new ABSDetailsApi(config);

            var absDetailsRequest = new AbsDetailsRequest(); // AbsDetailsRequest | Request object for requesting ABS details

            try
            {
                // Request Asset Backed Security Details for a list of securities
                AbsDetailsResponse result = apiInstance.GetABSDetailsForList(absDetailsRequest);
                Console.WriteLine(result.ToJson());
            }
            catch (ApiException  e)
            {
                Console.WriteLine("Exception when calling ABSDetailsApi.GetABSDetailsForList: " + e.Message );
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **absDetailsRequest** | [**AbsDetailsRequest**](AbsDetailsRequest.md)| Request object for requesting ABS details | 

### Return type
[**AbsDetailsResponse**](AbsDetailsResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Asset Bond Security Detail items |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


