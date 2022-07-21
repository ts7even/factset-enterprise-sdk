/*
 * Natural Language Processing API
 *
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: ai@factset.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Net;
using System.Net.Mime;
using FactSet.SDK.NaturalLanguageProcessing.Client;
using FactSet.SDK.NaturalLanguageProcessing.Model;
using FactSet.SDK.Utils.Authentication;

namespace FactSet.SDK.NaturalLanguageProcessing.Api
{

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IThemesApiSync : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// POST request to extract themes from text
        /// </summary>
        /// <remarks>
        /// This endpoint extracts themes from unstructured text. Each theme (&#x60;themeText&#x60;) is also given a score (&#x60;themeScore&#x60;). This score shows the relevancy of the theme within the text.  Example Output: &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [   {     \&quot;themeText\&quot;: \&quot;home entertainment results\&quot;,     \&quot;themeScore\&quot;: 0.92   },   {     \&quot;themeText\&quot;: \&quot;.....\&quot;,     \&quot;themeScore\&quot;: .....   }] } &#x60;&#x60;&#x60; 
        /// </remarks>
        /// <exception cref="FactSet.SDK.NaturalLanguageProcessing.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="themeParametersRoot"></param>
        /// <returns>ThemesRoot</returns>
        ThemesRoot CognitiveNlpV1ThemesPost(ThemeParametersRoot themeParametersRoot);

        /// <summary>
        /// POST request to extract themes from text
        /// </summary>
        /// <remarks>
        /// This endpoint extracts themes from unstructured text. Each theme (&#x60;themeText&#x60;) is also given a score (&#x60;themeScore&#x60;). This score shows the relevancy of the theme within the text.  Example Output: &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [   {     \&quot;themeText\&quot;: \&quot;home entertainment results\&quot;,     \&quot;themeScore\&quot;: 0.92   },   {     \&quot;themeText\&quot;: \&quot;.....\&quot;,     \&quot;themeScore\&quot;: .....   }] } &#x60;&#x60;&#x60; 
        /// </remarks>
        /// <exception cref="FactSet.SDK.NaturalLanguageProcessing.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="themeParametersRoot"></param>
        /// <returns>ApiResponse of ThemesRoot</returns>
        ApiResponse<ThemesRoot> CognitiveNlpV1ThemesPostWithHttpInfo(ThemeParametersRoot themeParametersRoot);
        #endregion Synchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IThemesApiAsync : IApiAccessor
    {
        #region Asynchronous Operations
        /// <summary>
        /// POST request to extract themes from text
        /// </summary>
        /// <remarks>
        /// This endpoint extracts themes from unstructured text. Each theme (&#x60;themeText&#x60;) is also given a score (&#x60;themeScore&#x60;). This score shows the relevancy of the theme within the text.  Example Output: &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [   {     \&quot;themeText\&quot;: \&quot;home entertainment results\&quot;,     \&quot;themeScore\&quot;: 0.92   },   {     \&quot;themeText\&quot;: \&quot;.....\&quot;,     \&quot;themeScore\&quot;: .....   }] } &#x60;&#x60;&#x60; 
        /// </remarks>
        /// <exception cref="FactSet.SDK.NaturalLanguageProcessing.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="themeParametersRoot"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ThemesRoot</returns>
        System.Threading.Tasks.Task<ThemesRoot> CognitiveNlpV1ThemesPostAsync(ThemeParametersRoot themeParametersRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));

        /// <summary>
        /// POST request to extract themes from text
        /// </summary>
        /// <remarks>
        /// This endpoint extracts themes from unstructured text. Each theme (&#x60;themeText&#x60;) is also given a score (&#x60;themeScore&#x60;). This score shows the relevancy of the theme within the text.  Example Output: &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [   {     \&quot;themeText\&quot;: \&quot;home entertainment results\&quot;,     \&quot;themeScore\&quot;: 0.92   },   {     \&quot;themeText\&quot;: \&quot;.....\&quot;,     \&quot;themeScore\&quot;: .....   }] } &#x60;&#x60;&#x60; 
        /// </remarks>
        /// <exception cref="FactSet.SDK.NaturalLanguageProcessing.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="themeParametersRoot"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (ThemesRoot)</returns>
        System.Threading.Tasks.Task<ApiResponse<ThemesRoot>> CognitiveNlpV1ThemesPostWithHttpInfoAsync(ThemeParametersRoot themeParametersRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IThemesApi : IThemesApiSync, IThemesApiAsync
    {

    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class ThemesApi : IThemesApi
    {
        private FactSet.SDK.NaturalLanguageProcessing.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        # region Response Type Disctionaries
                private static readonly Dictionary<HttpStatusCode, System.Type> CognitiveNlpV1ThemesPostResponseTypeDictionary = new Dictionary<HttpStatusCode, System.Type>
        {
            { (HttpStatusCode)200, typeof(ThemesRoot) },
            { (HttpStatusCode)400, typeof(ErrorsRoot) },
            { (HttpStatusCode)404, typeof(ErrorsRoot) },
        };

        # endregion Response Type Disctionaries

        # region Api Response Objects
         

        # endregion Api Response Objects

        /// <summary>
        /// Initializes a new instance of the <see cref="ThemesApi"/> class.
        /// </summary>
        /// <returns></returns>
        public ThemesApi() : this((string)null)
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ThemesApi"/> class.
        /// </summary>
        /// <returns></returns>
        public ThemesApi(string basePath)
        {
            this.Configuration = FactSet.SDK.NaturalLanguageProcessing.Client.Configuration.MergeConfigurations(
                FactSet.SDK.NaturalLanguageProcessing.Client.GlobalConfiguration.Instance,
                new FactSet.SDK.NaturalLanguageProcessing.Client.Configuration { BasePath = basePath }
            );
            this.Client = new FactSet.SDK.NaturalLanguageProcessing.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.NaturalLanguageProcessing.Client.ApiClient(this.Configuration.BasePath);
            this.ExceptionFactory = FactSet.SDK.NaturalLanguageProcessing.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ThemesApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public ThemesApi(FactSet.SDK.NaturalLanguageProcessing.Client.Configuration configuration)
        {
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Configuration = FactSet.SDK.NaturalLanguageProcessing.Client.Configuration.MergeConfigurations(
                FactSet.SDK.NaturalLanguageProcessing.Client.GlobalConfiguration.Instance,
                configuration
            );
            this.Client = new FactSet.SDK.NaturalLanguageProcessing.Client.ApiClient(this.Configuration.BasePath);
            this.AsynchronousClient = new FactSet.SDK.NaturalLanguageProcessing.Client.ApiClient(this.Configuration.BasePath);
            ExceptionFactory = FactSet.SDK.NaturalLanguageProcessing.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ThemesApi"/> class
        /// using a Configuration object and client instance.
        /// </summary>
        /// <param name="client">The client interface for synchronous API access.</param>
        /// <param name="asyncClient">The client interface for asynchronous API access.</param>
        /// <param name="configuration">The configuration object.</param>
        public ThemesApi(FactSet.SDK.NaturalLanguageProcessing.Client.ISynchronousClient client, FactSet.SDK.NaturalLanguageProcessing.Client.IAsynchronousClient asyncClient, FactSet.SDK.NaturalLanguageProcessing.Client.IReadableConfiguration configuration)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (asyncClient == null) throw new ArgumentNullException("asyncClient");
            if (configuration == null) throw new ArgumentNullException("configuration");

            this.Client = client;
            this.AsynchronousClient = asyncClient;
            this.Configuration = configuration;
            this.ExceptionFactory = FactSet.SDK.NaturalLanguageProcessing.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// The client for accessing this underlying API asynchronously.
        /// </summary>
        public FactSet.SDK.NaturalLanguageProcessing.Client.IAsynchronousClient AsynchronousClient { get; set; }

        /// <summary>
        /// The client for accessing this underlying API synchronously.
        /// </summary>
        public FactSet.SDK.NaturalLanguageProcessing.Client.ISynchronousClient Client { get; set; }

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
        public FactSet.SDK.NaturalLanguageProcessing.Client.IReadableConfiguration Configuration { get; set; }

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public FactSet.SDK.NaturalLanguageProcessing.Client.ExceptionFactory ExceptionFactory
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
        /// POST request to extract themes from text This endpoint extracts themes from unstructured text. Each theme (&#x60;themeText&#x60;) is also given a score (&#x60;themeScore&#x60;). This score shows the relevancy of the theme within the text.  Example Output: &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [   {     \&quot;themeText\&quot;: \&quot;home entertainment results\&quot;,     \&quot;themeScore\&quot;: 0.92   },   {     \&quot;themeText\&quot;: \&quot;.....\&quot;,     \&quot;themeScore\&quot;: .....   }] } &#x60;&#x60;&#x60; 
        /// </summary>
        /// <exception cref="FactSet.SDK.NaturalLanguageProcessing.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="themeParametersRoot"></param>
        /// <returns>ThemesRoot</returns>
        public ThemesRoot CognitiveNlpV1ThemesPost(ThemeParametersRoot themeParametersRoot)
        {
            var localVarResponse = CognitiveNlpV1ThemesPostWithHttpInfo(themeParametersRoot);
            return localVarResponse.Data;
        }

        /// <summary>
        /// POST request to extract themes from text This endpoint extracts themes from unstructured text. Each theme (&#x60;themeText&#x60;) is also given a score (&#x60;themeScore&#x60;). This score shows the relevancy of the theme within the text.  Example Output: &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [   {     \&quot;themeText\&quot;: \&quot;home entertainment results\&quot;,     \&quot;themeScore\&quot;: 0.92   },   {     \&quot;themeText\&quot;: \&quot;.....\&quot;,     \&quot;themeScore\&quot;: .....   }] } &#x60;&#x60;&#x60; 
        /// </summary>
        /// <exception cref="FactSet.SDK.NaturalLanguageProcessing.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="themeParametersRoot"></param>
        /// <returns>ApiResponse of ThemesRoot</returns>
        public ApiResponse<ThemesRoot> CognitiveNlpV1ThemesPostWithHttpInfo(ThemeParametersRoot themeParametersRoot)
        {
            // verify the required parameter 'themeParametersRoot' is set
            if (themeParametersRoot == null)
            {
                throw new FactSet.SDK.NaturalLanguageProcessing.Client.ApiException(400, "Missing required parameter 'themeParametersRoot' when calling ThemesApi->CognitiveNlpV1ThemesPost");
            }

            FactSet.SDK.NaturalLanguageProcessing.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.NaturalLanguageProcessing.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.NaturalLanguageProcessing.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.NaturalLanguageProcessing.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.Data = themeParametersRoot;

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.NaturalLanguageProcessing.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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

            localVarRequestOptions.ResponseTypeDictionary = CognitiveNlpV1ThemesPostResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = this.Client.Post<
            ThemesRoot>("/cognitive/nlp/v1/themes", localVarRequestOptions, this.Configuration);
            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("CognitiveNlpV1ThemesPost", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }
            return localVarResponse;
        }

        /// <summary>
        /// POST request to extract themes from text This endpoint extracts themes from unstructured text. Each theme (&#x60;themeText&#x60;) is also given a score (&#x60;themeScore&#x60;). This score shows the relevancy of the theme within the text.  Example Output: &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [   {     \&quot;themeText\&quot;: \&quot;home entertainment results\&quot;,     \&quot;themeScore\&quot;: 0.92   },   {     \&quot;themeText\&quot;: \&quot;.....\&quot;,     \&quot;themeScore\&quot;: .....   }] } &#x60;&#x60;&#x60; 
        /// </summary>
        /// <exception cref="FactSet.SDK.NaturalLanguageProcessing.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="themeParametersRoot"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ThemesRoot</returns>
        public async System.Threading.Tasks.Task<ThemesRoot>CognitiveNlpV1ThemesPostAsync(ThemeParametersRoot themeParametersRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            var localVarResponse = await CognitiveNlpV1ThemesPostWithHttpInfoAsync(themeParametersRoot, cancellationToken).ConfigureAwait(false);
            return localVarResponse.Data;
        }

        /// <summary>
        /// POST request to extract themes from text This endpoint extracts themes from unstructured text. Each theme (&#x60;themeText&#x60;) is also given a score (&#x60;themeScore&#x60;). This score shows the relevancy of the theme within the text.  Example Output: &#x60;&#x60;&#x60;json {   \&quot;data\&quot;: [   {     \&quot;themeText\&quot;: \&quot;home entertainment results\&quot;,     \&quot;themeScore\&quot;: 0.92   },   {     \&quot;themeText\&quot;: \&quot;.....\&quot;,     \&quot;themeScore\&quot;: .....   }] } &#x60;&#x60;&#x60; 
        /// </summary>
        /// <exception cref="FactSet.SDK.NaturalLanguageProcessing.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="themeParametersRoot"></param>
        /// <param name="cancellationToken">Cancellation Token to cancel the request.</param>
        /// <returns>Task of ApiResponse (ThemesRoot)</returns>

        public async System.Threading.Tasks.Task<ApiResponse<ThemesRoot>> CognitiveNlpV1ThemesPostWithHttpInfoAsync(ThemeParametersRoot themeParametersRoot, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken))
        {
            // verify the required parameter 'themeParametersRoot' is set
            if (themeParametersRoot == null)
            {
                throw new FactSet.SDK.NaturalLanguageProcessing.Client.ApiException(400, "Missing required parameter 'themeParametersRoot' when calling ThemesApi->CognitiveNlpV1ThemesPost");
            }


            FactSet.SDK.NaturalLanguageProcessing.Client.RequestOptions localVarRequestOptions = new FactSet.SDK.NaturalLanguageProcessing.Client.RequestOptions();

            string[] _contentTypes = new string[] {
                "application/json"
            };

            // to determine the Accept header
            string[] _accepts = new string[] {
                "application/json"
            };

            var localVarContentType = FactSet.SDK.NaturalLanguageProcessing.Client.ClientUtils.SelectHeaderContentType(_contentTypes);
            if (localVarContentType != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Content-Type", localVarContentType);
            }

            var localVarAccept = FactSet.SDK.NaturalLanguageProcessing.Client.ClientUtils.SelectHeaderAccept(_accepts);
            if (localVarAccept != null)
            {
                localVarRequestOptions.HeaderParameters.Add("Accept", localVarAccept);
            }

            localVarRequestOptions.Data = themeParametersRoot;

            // authentication (FactSetApiKey) required
            // http basic authentication required
            if (!string.IsNullOrEmpty(this.Configuration.Username) || !string.IsNullOrEmpty(this.Configuration.Password) && !localVarRequestOptions.HeaderParameters.ContainsKey("Authorization"))
            {
                localVarRequestOptions.HeaderParameters.Add("Authorization", "Basic " + FactSet.SDK.NaturalLanguageProcessing.Client.ClientUtils.Base64Encode(this.Configuration.Username + ":" + this.Configuration.Password));
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


            localVarRequestOptions.ResponseTypeDictionary = CognitiveNlpV1ThemesPostResponseTypeDictionary;

            // make the HTTP request
            var localVarResponse = await this.AsynchronousClient.PostAsync<ThemesRoot>("/cognitive/nlp/v1/themes", localVarRequestOptions, this.Configuration, cancellationToken).ConfigureAwait(false);

            if (this.ExceptionFactory != null)
            {
                Exception _exception = this.ExceptionFactory("CognitiveNlpV1ThemesPost", localVarResponse);
                if (_exception != null)
                {
                    throw _exception;
                }
            }

            return localVarResponse;
        }

    }
}