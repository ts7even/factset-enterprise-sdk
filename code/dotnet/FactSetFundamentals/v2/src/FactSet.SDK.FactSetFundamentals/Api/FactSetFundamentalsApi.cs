/*
 * FactSet Fundamentals API
 *
 * Gain access to current, comprehensive, and comparative information on securities in worldwide developed and emerging markets. Composed of annual and interim/quarterly data, detailed historical financial statement content, per-share data, and calculated ratios, FactSet Fundamentals provides you with the information you need for a global investment perspective. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using FactSet.SDK.FactSetFundamentals.Client;
using FactSet.SDK.FactSetFundamentals.Model;
using FactSet.SDK.Utils.Authentication;

namespace FactSet.SDK.FactSetFundamentals.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFactSetFundamentalsApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Returns Company Fundamental Data.
        /// </summary>
        /// <remarks>
        /// Retrieves FactSet Fundamental standardized data for specified securities. Use the &#x60;&#x60;&#x60;/metrics&#x60;&#x60;&#x60; endpoint to retrieve a full list of valid metrics or data items.   The &#x60;&#x60;&#x60;/fundamentals&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability. This 30000 id limit has been derived based on single metric for one day. This feature is available for all users.  
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetFundamentals.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fundamentalsRequest">Request object for requesting fundamentals data</param>
        /// <returns>FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper</returns>
        FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper GetFdsFundamentalsForList(FundamentalsRequest fundamentalsRequest);

        /// <summary>
        /// Returns Company Fundamental Data.
        /// </summary>
        /// <remarks>
        /// Retrieves FactSet Fundamental standardized data for specified securities. Use the &#x60;&#x60;&#x60;/metrics&#x60;&#x60;&#x60; endpoint to retrieve a full list of valid metrics or data items.   The &#x60;&#x60;&#x60;/fundamentals&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability. This 30000 id limit has been derived based on single metric for one day. This feature is available for all users.  
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetFundamentals.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fundamentalsRequest">Request object for requesting fundamentals data</param>
        /// <returns>ApiResponse of FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper</returns>
        ApiResponse<FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper> GetFdsFundamentalsForListWithHttpInfo(FundamentalsRequest fundamentalsRequest);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFactSetFundamentalsApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Returns Company Fundamental Data.
        /// </summary>
        /// <remarks>
        /// Retrieves FactSet Fundamental standardized data for specified securities. Use the &#x60;&#x60;&#x60;/metrics&#x60;&#x60;&#x60; endpoint to retrieve a full list of valid metrics or data items.   The &#x60;&#x60;&#x60;/fundamentals&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability. This 30000 id limit has been derived based on single metric for one day. This feature is available for all users.  
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetFundamentals.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fundamentalsRequest">Request object for requesting fundamentals data</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of FundamentalsResponse</returns>
        System.Threading.Tasks.Task<FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper> GetFdsFundamentalsForListAsync(FundamentalsRequest fundamentalsRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Returns Company Fundamental Data.
        /// </summary>
        /// <remarks>
        /// Retrieves FactSet Fundamental standardized data for specified securities. Use the &#x60;&#x60;&#x60;/metrics&#x60;&#x60;&#x60; endpoint to retrieve a full list of valid metrics or data items.   The &#x60;&#x60;&#x60;/fundamentals&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability. This 30000 id limit has been derived based on single metric for one day. This feature is available for all users.  
        /// </remarks>
        /// <exception cref="FactSet.SDK.FactSetFundamentals.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fundamentalsRequest">Request object for requesting fundamentals data</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper)</returns>
        System.Threading.Tasks.Task<ApiResponse<FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper>> GetFdsFundamentalsForListWithHttpInfoAsync(FundamentalsRequest fundamentalsRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IFactSetFundamentalsApi : IFactSetFundamentalsApiSync, IFactSetFundamentalsApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class FactSetFundamentalsApi : IFactSetFundamentalsApi
    {
        private FactSet.SDK.FactSetFundamentals.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        # region Response Type Disctionaries
        
        private static readonly Dictionary<HttpStatusCode, System.Type> GetFdsFundamentalsForListResponseTypeDictionary = new Dictionary<HttpStatusCode, System.Type>
        {
            { (HttpStatusCode)200, typeof(FundamentalsResponse) },
            { (HttpStatusCode)202, typeof(BatchStatusResponse) },
            { (HttpStatusCode)400, typeof(ErrorResponse) },
            { (HttpStatusCode)401, typeof(ErrorResponse) },
            { (HttpStatusCode)403, typeof(ErrorResponse) },
            { (HttpStatusCode)415, typeof(ErrorResponse) },
            { (HttpStatusCode)500, typeof(ErrorResponse) },
        };

        # endregion Response Type Disctionaries

        # region Api Response Objects
        
        /// <summary>
        /// Wrapper to support POST /fundamentals returning different types
        /// per status code.
        ///
        /// <list>
        /// <item>
        /// <description>
        /// 200 : FundamentalsResponse<br />
        /// Fundamental data items
        /// </description>
        /// </item>
        /// 
        /// <item>
        /// <description>
        /// 202 : BatchStatusResponse<br />
        /// Batch request has been accepted.
        /// </description>
        /// </item>
        /// </list>
        ///
        /// <example>
        /// <code>
        /// GetFdsFundamentalsForListResponseWrapper response = ...;
        /// switch (response.statusCode)
        /// {
        ///   case 200:
        ///     FundamentalsResponse data200 = response.getResponse200();
        ///     break;
        ///   case 202:
        ///     BatchStatusResponse data202 = response.getResponse202();
        ///     break;
        ///  }
        /// </code>
        /// </example>
        /// </summary>
        public class GetFdsFundamentalsForListResponseWrapper {

            /// <summary>This constructor initializes the new GetFdsFundamentalsForListResponseWrapper to
            /// (<paramref name="statusCode"/>,<paramref name="response"/>).
            /// </summary>
            /// <param name="statusCode">Http status code of the response</param>
            /// <param name="response">Raw response</param>
            public GetFdsFundamentalsForListResponseWrapper(HttpStatusCode statusCode, object response)
            {
                StatusCode = statusCode;
                Response = response;
            }

            /// <summary>
            /// Http status code of the response
            /// </summary>
            public HttpStatusCode StatusCode { get; }

            /// <summary>
            /// Raw Object response
            /// </summary>
            public object Response { get; }

            
            /// <summary>
            /// Fundamental data items
            /// </summary>
            public FundamentalsResponse Response200
            {
                get
                {
                    if (StatusCode != (HttpStatusCode) 200)
                    {
                        throw new FactSet.SDK.FactSetFundamentals.Client.ApiException(500, "Invalid response getter called. Response200 can't return a " + StatusCode + " response");
                    }
                    return (FundamentalsResponse) Response;
                }
            }
            
            /// <summary>
            /// Batch request has been accepted.
            /// </summary>
            public BatchStatusResponse Response202
            {
                get
                {
                    if (StatusCode != (HttpStatusCode) 202)
                    {
                        throw new FactSet.SDK.FactSetFundamentals.Client.ApiException(500, "Invalid response getter called. Response202 can't return a " + StatusCode + " response");
                    }
                    return (BatchStatusResponse) Response;
                }
            }
            
        }



        # endregion Api Response Objects

        /// <summary>
        /// Initializes a new instance of the <see cref="FactSetFundamentalsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public FactSetFundamentalsApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FactSetFundamentalsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public FactSetFundamentalsApi(string basePath)
        {
            this.Configuration = FactSet.SDK.FactSetFundamentals.Client.Configuration.MergeConfigurations(
                FactSet.SDK.FactSetFundamentals.Client.GlobalConfiguration.Instance,
                new FactSet.SDK.FactSetFundamentals.Client.Configuration { BasePath = basePath }
            );
            this.Client = new FactSet.SDK.FactSetFundamentals.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.FactSetFundamentals.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = FactSet.SDK.FactSetFundamentals.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FactSetFundamentalsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public FactSetFundamentalsApi(FactSet.SDK.FactSetFundamentals.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = FactSet.SDK.FactSetFundamentals.Client.Configuration.MergeConfigurations(
                FactSet.SDK.FactSetFundamentals.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new FactSet.SDK.FactSetFundamentals.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.FactSetFundamentals.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = FactSet.SDK.FactSetFundamentals.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FactSetFundamentalsApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public FactSetFundamentalsApi(FactSet.SDK.FactSetFundamentals.Client.ISynchronousClient client, FactSet.SDK.FactSetFundamentals.Client.IAsynchronousClient asyncClient, FactSet.SDK.FactSetFundamentals.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = FactSet.SDK.FactSetFundamentals.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public FactSet.SDK.FactSetFundamentals.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public FactSet.SDK.FactSetFundamentals.Client.ISynchronousClient Client { get; set; }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public string GetBasePath()
        {
            return this.Configuration.BasePath;
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public FactSet.SDK.FactSetFundamentals.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public FactSet.SDK.FactSetFundamentals.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Returns Company Fundamental Data. Retrieves FactSet Fundamental standardized data for specified securities. Use the &#x60;&#x60;&#x60;/metrics&#x60;&#x60;&#x60; endpoint to retrieve a full list of valid metrics or data items.   The &#x60;&#x60;&#x60;/fundamentals&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability. This 30000 id limit has been derived based on single metric for one day. This feature is available for all users.  
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetFundamentals.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fundamentalsRequest">Request object for requesting fundamentals data</param>
        /// <returns>FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper</returns>
        public FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper GetFdsFundamentalsForList(FundamentalsRequest fundamentalsRequest)
        {
            var localVarResponse = GetFdsFundamentalsForListWithHttpInfo(fundamentalsRequest);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Returns Company Fundamental Data. Retrieves FactSet Fundamental standardized data for specified securities. Use the &#x60;&#x60;&#x60;/metrics&#x60;&#x60;&#x60; endpoint to retrieve a full list of valid metrics or data items.   The &#x60;&#x60;&#x60;/fundamentals&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability. This 30000 id limit has been derived based on single metric for one day. This feature is available for all users.  
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetFundamentals.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fundamentalsRequest">Request object for requesting fundamentals data</param>
        /// <returns>ApiResponse of FundamentalsResponse</returns>
        public ApiResponse<FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper> GetFdsFundamentalsForListWithHttpInfo(FundamentalsRequest fundamentalsRequest)
        {
            // verify the required parameter 'fundamentalsRequest' is set
            if (fundamentalsRequest == null)
            {
                throw new FactSet.SDK.FactSetFundamentals.Client.ApiException(400, "Missing required parameter 'fundamentalsRequest' when calling FactSetFundamentalsApi->GetFdsFundamentalsForList");
            }

            FactSet.SDK.FactSetFundamentals.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.FactSetFundamentals.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.FactSetFundamentals.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.FactSetFundamentals.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.Data = fundamentalsRequest;

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.FactSetFundamentals.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
            }
            // authentication (FactSetOAuth2) required
            // oauth required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // FactSet Authentication Client required
            if (this.Configuration.OAuth2Client != null)
            {
                var token = this.Configuration.OAuth2Client.GetAccessTokenAsync().Result;
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + token);
            }

            localVarRequestOptions.ResponseTypeDictionary = GetFdsFundamentalsForListResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = this.Client.Post<
            Object>("/fundamentals", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetFdsFundamentalsForList", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }
            var getfdsfundamentalsforlistResponse = new GetFdsFundamentalsForListResponseWrapper(localVarResponse.StatusCode, localVarResponse.Data);
            return new ApiResponse<GetFdsFundamentalsForListResponseWrapper>(localVarResponse.StatusCode, getfdsfundamentalsforlistResponse);
        }

        /// <summary>
        /// Returns Company Fundamental Data. Retrieves FactSet Fundamental standardized data for specified securities. Use the &#x60;&#x60;&#x60;/metrics&#x60;&#x60;&#x60; endpoint to retrieve a full list of valid metrics or data items.   The &#x60;&#x60;&#x60;/fundamentals&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability. This 30000 id limit has been derived based on single metric for one day. This feature is available for all users.  
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetFundamentals.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fundamentalsRequest">Request object for requesting fundamentals data</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of FundamentalsResponse</returns>
        public async System.Threading.Tasks.Task<FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper>GetFdsFundamentalsForListAsync(FundamentalsRequest fundamentalsRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            var localVarResponse = await GetFdsFundamentalsForListWithHttpInfoAsync(fundamentalsRequest, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Returns Company Fundamental Data. Retrieves FactSet Fundamental standardized data for specified securities. Use the &#x60;&#x60;&#x60;/metrics&#x60;&#x60;&#x60; endpoint to retrieve a full list of valid metrics or data items.   The &#x60;&#x60;&#x60;/fundamentals&#x60;&#x60;&#x60; endpoint currently supports Long Running asynchronous requests up to **20 minutes** via batch parameter. Id limits are increased to 30000 ids per request when using batch capability. This 30000 id limit has been derived based on single metric for one day. This feature is available for all users.  
        /// </summary>
        /// <exception cref="FactSet.SDK.FactSetFundamentals.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="fundamentalsRequest">Request object for requesting fundamentals data</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (FundamentalsResponse)</returns>

        public async System.Threading.Tasks.Task<ApiResponse<FactSetFundamentalsApi.GetFdsFundamentalsForListResponseWrapper>> GetFdsFundamentalsForListWithHttpInfoAsync(FundamentalsRequest fundamentalsRequest, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'fundamentalsRequest' is set
            if (fundamentalsRequest == null)
            {
                throw new FactSet.SDK.FactSetFundamentals.Client.ApiException(400, "Missing required parameter 'fundamentalsRequest' when calling FactSetFundamentalsApi->GetFdsFundamentalsForList");
            }


            FactSet.SDK.FactSetFundamentals.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.FactSetFundamentals.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.FactSetFundamentals.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.FactSetFundamentals.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.Data = fundamentalsRequest;

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.FactSetFundamentals.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
            }
            // authentication (FactSetOAuth2) required
            // oauth required
            if (!string.IsNullOrEmpty(this.Configuration.AccessToken) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + this.Configuration.AccessToken);
            }

            // FactSet Authentication Client required
            if (this.Configuration.OAuth2Client != null) {
                var token = await this.Configuration.OAuth2Client.GetAccessTokenAsync();
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Bearer " + token);
            }


            localVarRequestOptions.ResponseTypeDictionary = GetFdsFundamentalsForListResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PostAsync<Object>("/fundamentals", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetFdsFundamentalsForList", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            var getfdsfundamentalsforlistResponse = new GetFdsFundamentalsForListResponseWrapper(localVarResponse.StatusCode, localVarResponse.Data);
            return new ApiResponse<GetFdsFundamentalsForListResponseWrapper>(localVarResponse.StatusCode, getfdsfundamentalsforlistResponse);
        }

    }
}