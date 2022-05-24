/*
 * FactSet SCIM API
 *
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using FactSet.SDK.ProcuretoPaySCIM.Client;
using FactSet.SDK.ProcuretoPaySCIM.Model;
using FactSet.SDK.Utils.Authentication;

namespace FactSet.SDK.ProcuretoPaySCIM.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IServerConfigurationApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get server configuration.
        /// </summary>
        /// <exception cref="FactSet.SDK.ProcuretoPaySCIM.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ServiceProviderConfig</returns>
        ServiceProviderConfig ServiceProviderConfigGet();

        /// <summary>
        /// Get server configuration.
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="FactSet.SDK.ProcuretoPaySCIM.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of ServiceProviderConfig</returns>
        ApiResponse<ServiceProviderConfig> ServiceProviderConfigGetWithHttpInfo();
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IServerConfigurationApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// Get server configuration.
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="FactSet.SDK.ProcuretoPaySCIM.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ServiceProviderConfig</returns>
        System.Threading.Tasks.Task<ServiceProviderConfig> ServiceProviderConfigGetAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// Get server configuration.
        /// </summary>
        /// <remarks>
        /// 
        /// </remarks>
        /// <exception cref="FactSet.SDK.ProcuretoPaySCIM.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (ServiceProviderConfig)</returns>
        System.Threading.Tasks.Task<ApiResponse<ServiceProviderConfig>> ServiceProviderConfigGetWithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IServerConfigurationApi : IServerConfigurationApiSync, IServerConfigurationApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class ServerConfigurationApi : IServerConfigurationApi
    {
        private FactSet.SDK.ProcuretoPaySCIM.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        # region Response Type Disctionaries
                private static readonly Dictionary<HttpStatusCode, System.Type> ServiceProviderConfigGetResponseTypeDictionary = new Dictionary<HttpStatusCode, System.Type>
        {
            { (HttpStatusCode)200, typeof(ServiceProviderConfig) },
            { (HttpStatusCode)401, typeof(Error) },
            { (HttpStatusCode)500, typeof(Error) },
        };

        # endregion Response Type Disctionaries

        # region Api Response Objects
         

        # endregion Api Response Objects

        /// <summary>
        /// Initializes a new instance of the <see cref="ServerConfigurationApi"/> class.
        /// </summary>
        /// <returns></returns>
        public ServerConfigurationApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ServerConfigurationApi"/> class.
        /// </summary>
        /// <returns></returns>
        public ServerConfigurationApi(string basePath)
        {
            this.Configuration = FactSet.SDK.ProcuretoPaySCIM.Client.Configuration.MergeConfigurations(
                FactSet.SDK.ProcuretoPaySCIM.Client.GlobalConfiguration.Instance,
                new FactSet.SDK.ProcuretoPaySCIM.Client.Configuration { BasePath = basePath }
            );
            this.Client = new FactSet.SDK.ProcuretoPaySCIM.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.ProcuretoPaySCIM.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = FactSet.SDK.ProcuretoPaySCIM.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ServerConfigurationApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public ServerConfigurationApi(FactSet.SDK.ProcuretoPaySCIM.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = FactSet.SDK.ProcuretoPaySCIM.Client.Configuration.MergeConfigurations(
                FactSet.SDK.ProcuretoPaySCIM.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new FactSet.SDK.ProcuretoPaySCIM.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.ProcuretoPaySCIM.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = FactSet.SDK.ProcuretoPaySCIM.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ServerConfigurationApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public ServerConfigurationApi(FactSet.SDK.ProcuretoPaySCIM.Client.ISynchronousClient client, FactSet.SDK.ProcuretoPaySCIM.Client.IAsynchronousClient asyncClient, FactSet.SDK.ProcuretoPaySCIM.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = FactSet.SDK.ProcuretoPaySCIM.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public FactSet.SDK.ProcuretoPaySCIM.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public FactSet.SDK.ProcuretoPaySCIM.Client.ISynchronousClient Client { get; set; }

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
        public FactSet.SDK.ProcuretoPaySCIM.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public FactSet.SDK.ProcuretoPaySCIM.Client.ExceptionFactory ExceptionFactory
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
        /// Get server configuration. 
        /// </summary>
        /// <exception cref="FactSet.SDK.ProcuretoPaySCIM.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ServiceProviderConfig</returns>
        public ServiceProviderConfig ServiceProviderConfigGet()
        {
            var localVarResponse = ServiceProviderConfigGetWithHttpInfo();
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get server configuration. 
        /// </summary>
        /// <exception cref="FactSet.SDK.ProcuretoPaySCIM.Client.ApiException">Thrown when fails to make API call</exception>
        /// <returns>ApiResponse of ServiceProviderConfig</returns>
        public ApiResponse<ServiceProviderConfig> ServiceProviderConfigGetWithHttpInfo()
        {
            FactSet.SDK.ProcuretoPaySCIM.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.ProcuretoPaySCIM.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/scim+json"
            };

            var localVarContentType = FactSet.SDK.ProcuretoPaySCIM.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.ProcuretoPaySCIM.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.ProcuretoPaySCIM.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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

            localVarRequestOptions.ResponseTypeDictionary = ServiceProviderConfigGetResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = this.Client.Get<
            ServiceProviderConfig>("/ServiceProviderConfig", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("ServiceProviderConfigGet", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }
            return localVarResponse;
        }

        /// <summary>
        /// Get server configuration. 
        /// </summary>
        /// <exception cref="FactSet.SDK.ProcuretoPaySCIM.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ServiceProviderConfig</returns>
        public async System.Threading.Tasks.Task<ServiceProviderConfig>ServiceProviderConfigGetAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            var localVarResponse = await ServiceProviderConfigGetWithHttpInfoAsync(cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// Get server configuration. 
        /// </summary>
        /// <exception cref="FactSet.SDK.ProcuretoPaySCIM.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (ServiceProviderConfig)</returns>

        public async System.Threading.Tasks.Task<ApiResponse<ServiceProviderConfig>> ServiceProviderConfigGetWithHttpInfoAsync(System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {

            FactSet.SDK.ProcuretoPaySCIM.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.ProcuretoPaySCIM.Client.RequestOptions();

            string[] _contentTypes = new string[] {
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/scim+json"
            };

            var localVarContentType = FactSet.SDK.ProcuretoPaySCIM.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.ProcuretoPaySCIM.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }


            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.ProcuretoPaySCIM.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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


            localVarRequestOptions.ResponseTypeDictionary = ServiceProviderConfigGetResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.GetAsync<ServiceProviderConfig>("/ServiceProviderConfig", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("ServiceProviderConfigGet", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}