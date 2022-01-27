# FactSet.SDK.FactSetRBICS.Api.StructureApi

All URIs are relative to *https://api.factset.com/content*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetRbicsStructure**](StructureApi.md#getrbicsstructure) | **GET** /factset-rbics/v1/structure | Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.
[**GetRbicsStructureForList**](StructureApi.md#getrbicsstructureforlist) | **POST** /factset-rbics/v1/structure | Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.


<a name="getrbicsstructure"></a>
# **GetRbicsStructure**
> StructureResponse GetRbicsStructure (List<string> rbicsIds = null, int? level = null, bool? includeNames = null, string date = null)

Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.

Understand the full RBICS Taxonomy Structure through time to help organize your analysis or facilitate the use of RBICS in application development.  Designed to overcome disparate and non-standardized company disclosures, the RBICS taxonomy is a normalized global industry classification consisting of a fourteen-by-six matrix. There are twelve economies with two specialty sectors, each with six incremental detailed layers, resulting in over 1,600 sector groups.  The top-levels' market-defined approach groups companies based on their behavioral similarities and stock price co-movement, while the patented product-based approach used in the lower levels enables the necessary precision to capture the specialty sectors of global markets. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using FactSet.SDK.Utils.Authentication;
using Microsoft.IdentityModel.Tokens;
using FactSet.SDK.FactSetRBICS.Api;
using FactSet.SDK.FactSetRBICS.Client;
using FactSet.SDK.FactSetRBICS.Model;

namespace Example
{
    public class GetRbicsStructureExample
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

            var apiInstance = new StructureApi(config);
            var rbicsIds = new List<string>(); // List<string> | RBICS Taxonomy Id Filter. Use to lookup the structure details for the Id requested.  (optional) 
            var level = 1;  // int? | RBICS industry levels to include in the response. All levels from 1-N will be returned. For example, '3' returns all levels 1,2 and 3. To request all levels, request level=6. Level 1 is returned by default.   |Level|Description|Number of Groups|   |- --|- --|- --|   |1|Economomy|14|   |2|Sector|37   |3|Sub-Sector|109|   |4|Industry Group|366|   |5|Inudstry|901|   |6|Sub-Industry|1629|  (optional) 
            var includeNames = true;  // bool? | Option to include or exclude industry Names and the L6 Description. true = Include Names; false = Exclude Names. (optional)  (default to true)
            var date = 2017-07-24;  // string | Effective date for data expressed in YYYY-MM-DD format. If no date is requested, the default behavior is to return the full history for the requested entity. (optional) 

            try
            {
                // Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.
                StructureResponse result = apiInstance.GetRbicsStructure(rbicsIds, level, includeNames, date);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StructureApi.GetRbicsStructure: " + e.Message );
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
 **rbicsIds** | [**List&lt;string&gt;**](string.md)| RBICS Taxonomy Id Filter. Use to lookup the structure details for the Id requested.  | [optional] 
 **level** | **int?**| RBICS industry levels to include in the response. All levels from 1-N will be returned. For example, &#39;3&#39; returns all levels 1,2 and 3. To request all levels, request level&#x3D;6. Level 1 is returned by default.   |Level|Description|Number of Groups|   |- --|- --|- --|   |1|Economomy|14|   |2|Sector|37   |3|Sub-Sector|109|   |4|Industry Group|366|   |5|Inudstry|901|   |6|Sub-Industry|1629|  | [optional] 
 **includeNames** | **bool?**| Option to include or exclude industry Names and the L6 Description. true &#x3D; Include Names; false &#x3D; Exclude Names. | [optional] [default to true]
 **date** | **string**| Effective date for data expressed in YYYY-MM-DD format. If no date is requested, the default behavior is to return the full history for the requested entity. | [optional] 

### Return type

[**StructureResponse**](StructureResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response producing an array of Entity Focus Objects |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="getrbicsstructureforlist"></a>
# **GetRbicsStructureForList**
> StructureResponse GetRbicsStructureForList (StructureRequest structureRequest)

Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.

Get the full RBICS Taxonomy Structure Ids, Names, and effective periods. POST method is optimal for requesting large lists of `rbicsIds`. 

### Example
```csharp
using System.Collections.Generic;
using System.Diagnostics;
using FactSet.SDK.Utils.Authentication;
using Microsoft.IdentityModel.Tokens;
using FactSet.SDK.FactSetRBICS.Api;
using FactSet.SDK.FactSetRBICS.Client;
using FactSet.SDK.FactSetRBICS.Model;

namespace Example
{
    public class GetRbicsStructureForListExample
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

            var apiInstance = new StructureApi(config);
            var structureRequest = new StructureRequest(); // StructureRequest | Request Body to request a list of RBICS Structure objects.

            try
            {
                // Get the full RBICS Taxonomy Structure Ids, Names, and effective periods.
                StructureResponse result = apiInstance.GetRbicsStructureForList(structureRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling StructureApi.GetRbicsStructureForList: " + e.Message );
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
 **structureRequest** | [**StructureRequest**](StructureRequest.md)| Request Body to request a list of RBICS Structure objects. | 

### Return type

[**StructureResponse**](StructureResponse.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response producing an array of RBICS Structure Objects |  -  |
| **400** | Bad Request. This can occur for several reasons. Please review the \&quot;message\&quot; for more details. |  -  |
| **401** | Unauthenticated USERNAME-SERIAL. Ensure you are logged in and have successfully generated an API KEY for the IP range you are connecting from. For more help, select the **Report Issue** in the top right corner of this Developer Portal specification card and choose Connectivity 401 or 403 Responses. |  -  |
| **403** | The USERNAME-SERIAL attempted to request the endpoint is not authorized to access. The request was a legal request, but the server is refusing to respond. Please reach out to FactSet Account Team for assistance with authorization. |  -  |
| **415** | Unsupported Media Type. This error may be returned when the caller sends a resource in a format that is not accepted by the server. This can be fixed by ensuring that Content-Type header is set to the correct value. In this instance, \&quot;application/json\&quot; would be the appropriate value. |  -  |
| **500** | Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
