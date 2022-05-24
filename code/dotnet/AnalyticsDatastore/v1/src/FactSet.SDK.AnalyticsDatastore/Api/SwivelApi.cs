/*
 * Analytics Datastore  API
 *
 * Allow clients to fetch precalculated Analytics through predeterministic URLs.
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using FactSet.SDK.AnalyticsDatastore.Client;
using FactSet.SDK.Utils.Authentication;

namespace FactSet.SDK.AnalyticsDatastore.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISwivelApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get Swivel endpoint, takes report parameter inputs and returns the Cargo location for the specified report via a 302 redirect.
        /// </summary>
        /// <remarks>
        /// Note: Due to Swagger UI functionality, the redirect is automatically followed when using &#39;Try it out&#39;, so instead of the 302 Header response, a 200 is returned with the Cargo response Body.
        /// </remarks>
        /// <exception cref="FactSet.SDK.AnalyticsDatastore.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="pubDoc">The publisher document containing the report</param>
        /// <param name="assetName">The PA/SPAR asset name and extension</param>
        /// <param name="reportId">The PA/SPAR report ID</param>
        /// <param name="tileId">The PA/SPAR tile ID</param>
        /// <param name="accountId">The account ID</param>
        /// <returns>List<string></returns>
        List<string> GetSwivelEndpoint(string pubDoc, string assetName, string reportId, string tileId, string accountId);

        /// <summary>
        /// Get Swivel endpoint, takes report parameter inputs and returns the Cargo location for the specified report via a 302 redirect.
        /// </summary>
        /// <remarks>
        /// Note: Due to Swagger UI functionality, the redirect is automatically followed when using &#39;Try it out&#39;, so instead of the 302 Header response, a 200 is returned with the Cargo response Body.
        /// </remarks>
        /// <exception cref="FactSet.SDK.AnalyticsDatastore.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="pubDoc">The publisher document containing the report</param>
        /// <param name="assetName">The PA/SPAR asset name and extension</param>
        /// <param name="reportId">The PA/SPAR report ID</param>
        /// <param name="tileId">The PA/SPAR tile ID</param>
        /// <param name="accountId">The account ID</param>
        /// <returns>ApiResponse of List<string></returns>
        ApiResponse<List<string>> GetSwivelEndpointWithHttpInfo(string pubDoc, string assetName, string reportId, string tileId, string accountId);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISwivelApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Get Swivel endpoint, takes report parameter inputs and returns the Cargo location for the specified report via a 302 redirect.
        /// </summary>
        /// <remarks>
        /// Note: Due to Swagger UI functionality, the redirect is automatically followed when using &#39;Try it out&#39;, so instead of the 302 Header response, a 200 is returned with the Cargo response Body.
        /// </remarks>
        /// <exception cref="FactSet.SDK.AnalyticsDatastore.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="pubDoc">The publisher document containing the report</param>
        /// <param name="assetName">The PA/SPAR asset name and extension</param>
        /// <param name="reportId">The PA/SPAR report ID</param>
        /// <param name="tileId">The PA/SPAR tile ID</param>
        /// <param name="accountId">The account ID</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;string&gt;</returns>
        System.Threading.Tasks.Task<List<string>> GetSwivelEndpointAsync(string pubDoc, string assetName, string reportId, string tileId, string accountId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Get Swivel endpoint, takes report parameter inputs and returns the Cargo location for the specified report via a 302 redirect.
        /// </summary>
        /// <remarks>
        /// Note: Due to Swagger UI functionality, the redirect is automatically followed when using &#39;Try it out&#39;, so instead of the 302 Header response, a 200 is returned with the Cargo response Body.
        /// </remarks>
        /// <exception cref="FactSet.SDK.AnalyticsDatastore.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="pubDoc">The publisher document containing the report</param>
        /// <param name="assetName">The PA/SPAR asset name and extension</param>
        /// <param name="reportId">The PA/SPAR report ID</param>
        /// <param name="tileId">The PA/SPAR tile ID</param>
        /// <param name="accountId">The account ID</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List<string>)</returns>
        System.Threading.Tasks.Task<ApiResponse<List<string>>> GetSwivelEndpointWithHttpInfoAsync(string pubDoc, string assetName, string reportId, string tileId, string accountId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface ISwivelApi : ISwivelApiSync, ISwivelApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class SwivelApi : ISwivelApi
    {
        private FactSet.SDK.AnalyticsDatastore.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        # region Response Type Disctionaries
                private static readonly Dictionary<HttpStatusCode, System.Type> GetSwivelEndpointResponseTypeDictionary = new Dictionary<HttpStatusCode, System.Type>
        {
            { (HttpStatusCode)200, typeof(List<string>) },
        };

        # endregion Response Type Disctionaries

        # region Api Response Objects
         

        # endregion Api Response Objects

        /// <summary>
        /// Initializes a new instance of the <see cref="SwivelApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SwivelApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SwivelApi"/> class.
        /// </summary>
        /// <returns></returns>
        public SwivelApi(string basePath)
        {
            this.Configuration = FactSet.SDK.AnalyticsDatastore.Client.Configuration.MergeConfigurations(
                FactSet.SDK.AnalyticsDatastore.Client.GlobalConfiguration.Instance,
                new FactSet.SDK.AnalyticsDatastore.Client.Configuration { BasePath = basePath }
            );
            this.Client = new FactSet.SDK.AnalyticsDatastore.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.AnalyticsDatastore.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = FactSet.SDK.AnalyticsDatastore.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SwivelApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public SwivelApi(FactSet.SDK.AnalyticsDatastore.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = FactSet.SDK.AnalyticsDatastore.Client.Configuration.MergeConfigurations(
                FactSet.SDK.AnalyticsDatastore.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new FactSet.SDK.AnalyticsDatastore.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.AnalyticsDatastore.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = FactSet.SDK.AnalyticsDatastore.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="SwivelApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public SwivelApi(FactSet.SDK.AnalyticsDatastore.Client.ISynchronousClient client, FactSet.SDK.AnalyticsDatastore.Client.IAsynchronousClient asyncClient, FactSet.SDK.AnalyticsDatastore.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = FactSet.SDK.AnalyticsDatastore.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public FactSet.SDK.AnalyticsDatastore.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public FactSet.SDK.AnalyticsDatastore.Client.ISynchronousClient Client { get; set; }

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
        public FactSet.SDK.AnalyticsDatastore.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public FactSet.SDK.AnalyticsDatastore.Client.ExceptionFactory ExceptionFactory
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
        /// Get Swivel endpoint, takes report parameter inputs and returns the Cargo location for the specified report via a 302 redirect. Note: Due to Swagger UI functionality, the redirect is automatically followed when using &#39;Try it out&#39;, so instead of the 302 Header response, a 200 is returned with the Cargo response Body.
        /// </summary>
        /// <exception cref="FactSet.SDK.AnalyticsDatastore.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="pubDoc">The publisher document containing the report</param>
        /// <param name="assetName">The PA/SPAR asset name and extension</param>
        /// <param name="reportId">The PA/SPAR report ID</param>
        /// <param name="tileId">The PA/SPAR tile ID</param>
        /// <param name="accountId">The account ID</param>
        /// <returns>List<string></returns>
        public List<string> GetSwivelEndpoint(string pubDoc, string assetName, string reportId, string tileId, string accountId)
        {
            var localVarResponse = GetSwivelEndpointWithHttpInfo(pubDoc, assetName, reportId, tileId, accountId);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get Swivel endpoint, takes report parameter inputs and returns the Cargo location for the specified report via a 302 redirect. Note: Due to Swagger UI functionality, the redirect is automatically followed when using &#39;Try it out&#39;, so instead of the 302 Header response, a 200 is returned with the Cargo response Body.
        /// </summary>
        /// <exception cref="FactSet.SDK.AnalyticsDatastore.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="pubDoc">The publisher document containing the report</param>
        /// <param name="assetName">The PA/SPAR asset name and extension</param>
        /// <param name="reportId">The PA/SPAR report ID</param>
        /// <param name="tileId">The PA/SPAR tile ID</param>
        /// <param name="accountId">The account ID</param>
        /// <returns>ApiResponse of List&lt;string&gt;</returns>
        public ApiResponse<List<string>> GetSwivelEndpointWithHttpInfo(string pubDoc, string assetName, string reportId, string tileId, string accountId)
        {
            // verify the required parameter 'pubDoc' is set
            if (pubDoc == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'pubDoc' when calling SwivelApi->GetSwivelEndpoint");
            }

            // verify the required parameter 'assetName' is set
            if (assetName == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'assetName' when calling SwivelApi->GetSwivelEndpoint");
            }

            // verify the required parameter 'reportId' is set
            if (reportId == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'reportId' when calling SwivelApi->GetSwivelEndpoint");
            }

            // verify the required parameter 'tileId' is set
            if (tileId == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'tileId' when calling SwivelApi->GetSwivelEndpoint");
            }

            // verify the required parameter 'accountId' is set
            if (accountId == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'accountId' when calling SwivelApi->GetSwivelEndpoint");
            }

            FactSet.SDK.AnalyticsDatastore.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.AnalyticsDatastore.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "headers"
            };

            var localVarContentType = FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.PathParameters.Add("pubDoc", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(pubDoc)); // path parameter
            localVarRequestOptions.PathParameters.Add("assetName", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(assetName)); // path parameter
            localVarRequestOptions.PathParameters.Add("reportId", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(reportId)); // path parameter
            localVarRequestOptions.PathParameters.Add("tileId", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(tileId)); // path parameter
            localVarRequestOptions.PathParameters.Add("accountId", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(accountId)); // path parameter

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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

            localVarRequestOptions.ResponseTypeDictionary = GetSwivelEndpointResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = this.Client.Get<
            List<string>>("/analytics/pub-datastore/swivel/v1/{pubDoc}/{assetName}/{reportId}/{tileId}/{accountId}", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSwivelEndpoint", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }
            return localVarResponse;
        }

        /// <summary>
        /// Get Swivel endpoint, takes report parameter inputs and returns the Cargo location for the specified report via a 302 redirect. Note: Due to Swagger UI functionality, the redirect is automatically followed when using &#39;Try it out&#39;, so instead of the 302 Header response, a 200 is returned with the Cargo response Body.
        /// </summary>
        /// <exception cref="FactSet.SDK.AnalyticsDatastore.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="pubDoc">The publisher document containing the report</param>
        /// <param name="assetName">The PA/SPAR asset name and extension</param>
        /// <param name="reportId">The PA/SPAR report ID</param>
        /// <param name="tileId">The PA/SPAR tile ID</param>
        /// <param name="accountId">The account ID</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of List&lt;string&gt;</returns>
        public async System.Threading.Tasks.Task<List<string>>GetSwivelEndpointAsync(string pubDoc, string assetName, string reportId, string tileId, string accountId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            var localVarResponse = await GetSwivelEndpointWithHttpInfoAsync(pubDoc, assetName, reportId, tileId, accountId, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get Swivel endpoint, takes report parameter inputs and returns the Cargo location for the specified report via a 302 redirect. Note: Due to Swagger UI functionality, the redirect is automatically followed when using &#39;Try it out&#39;, so instead of the 302 Header response, a 200 is returned with the Cargo response Body.
        /// </summary>
        /// <exception cref="FactSet.SDK.AnalyticsDatastore.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="pubDoc">The publisher document containing the report</param>
        /// <param name="assetName">The PA/SPAR asset name and extension</param>
        /// <param name="reportId">The PA/SPAR report ID</param>
        /// <param name="tileId">The PA/SPAR tile ID</param>
        /// <param name="accountId">The account ID</param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (List&lt;string&gt;)</returns>

        public async System.Threading.Tasks.Task<ApiResponse<List<string>>> GetSwivelEndpointWithHttpInfoAsync(string pubDoc, string assetName, string reportId, string tileId, string accountId, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'pubDoc' is set
            if (pubDoc == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'pubDoc' when calling SwivelApi->GetSwivelEndpoint");
            }

            // verify the required parameter 'assetName' is set
            if (assetName == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'assetName' when calling SwivelApi->GetSwivelEndpoint");
            }

            // verify the required parameter 'reportId' is set
            if (reportId == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'reportId' when calling SwivelApi->GetSwivelEndpoint");
            }

            // verify the required parameter 'tileId' is set
            if (tileId == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'tileId' when calling SwivelApi->GetSwivelEndpoint");
            }

            // verify the required parameter 'accountId' is set
            if (accountId == null)
            {
                throw new FactSet.SDK.AnalyticsDatastore.Client.ApiException(400, "Missing required parameter 'accountId' when calling SwivelApi->GetSwivelEndpoint");
            }


            FactSet.SDK.AnalyticsDatastore.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.AnalyticsDatastore.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "headers"
            };

            var localVarContentType = FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.PathParameters.Add("pubDoc", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(pubDoc)); // path parameter
            localVarRequestOptions.PathParameters.Add("assetName", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(assetName)); // path parameter
            localVarRequestOptions.PathParameters.Add("reportId", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(reportId)); // path parameter
            localVarRequestOptions.PathParameters.Add("tileId", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(tileId)); // path parameter
            localVarRequestOptions.PathParameters.Add("accountId", FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.ParameterToString(accountId)); // path parameter

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.AnalyticsDatastore.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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


            localVarRequestOptions.ResponseTypeDictionary = GetSwivelEndpointResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<List<string>>("/analytics/pub-datastore/swivel/v1/{pubDoc}/{assetName}/{reportId}/{tileId}/{accountId}", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("GetSwivelEndpoint", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}