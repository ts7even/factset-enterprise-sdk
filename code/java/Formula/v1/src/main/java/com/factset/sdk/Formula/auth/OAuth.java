/*
 * FactSet Formula API
 *  **FactSet Formula API**  FactSet’s Formula API is a modern, flexible, formula-based API that enables users to access FactSet’s wide range of financial data and content. The API offers two endpoints, one optimized for time-series analysis and one designed for cross-sectional analysis, providing users a simplified interface into FactSet’s expansive offering. By providing two endpoints, it allows for the optimization of user workflows, while reducing complexity.  Leverage the power and flexibility of the Formula API to -   * Pull data from across most content sets that a user has access to in a single request   * Include business logic and mathematical operations in request   * Submit a dynamic universe in both endpoints   * Return the fsymId to easily combine with other FactSet content / products   * Set the trading calendar   * Define custom display names  **Formula API Request Builder**  The Formula API Request Builder provides users everything they need to form a Formula API request. In the Request Builder, you can select identifiers, build a universe expression, select FQL or Screening formulas, easily apply business logic and mathematical functions to the FQL or Screening formulas, specify optional parameters, and construct a GET or POST request. The Request Builder eliminates the need to have previous FQL and Screening knowledge and allows you to quickly find your desired data items and form the request.  The Formula API Request Builder can be accessed by navigating to [https://developer.factset.com/formula-api-request-builder](https://developer.factset.com/formula-api-request-builder) and logging in using your FactSet.net ID. When using the Request Builder to construct requests for the one of the Formula API's endpoints, be sure to toggle to the correct endpoint at the top of the page.  **How to Check the Health and Availability of the Formula API**  Please use the below endpoint to check the health and availability of the Formula API. You must be authorized for this API to use the Health endpoint.  [https://api.factset.com/formula-api/health](https://api.factset.com/formula-api/health)  **How to Programmatically Download API Specification File**  Please use the below endpoint to download the FactSet Formula API Specification File in .yaml. You must be authorized for this API to extract. This specification can then be used for Codegen to create your own SDKs. You can also download the spec using the \"Download Spec\" button to the right of the version number.  [https://api.factset.com/formula-api/v1/spec](https://api.factset.com/formula-api/v1/spec) 
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Formula.auth;

import com.factset.sdk.Formula.Pair;
import com.factset.sdk.Formula.ApiException;
import com.github.scribejava.core.builder.ServiceBuilder;
import com.github.scribejava.core.builder.api.DefaultApi20;
import com.github.scribejava.core.exceptions.OAuthException;
import com.github.scribejava.core.model.OAuth2AccessToken;
import com.github.scribejava.core.oauth.OAuth20Service;

import javax.ws.rs.core.UriBuilder;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.logging.Level;
import java.util.logging.Logger;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class OAuth implements Authentication {
    private static final Logger log = Logger.getLogger(OAuth.class.getName());

    private String tokenUrl;
    private String absoluteTokenUrl;
    private OAuthFlow flow = OAuthFlow.application;
    private OAuth20Service service;
    private DefaultApi20 authApi;
    private String scope;
    private String username;
    private String password;
    private String code;
    private volatile OAuth2AccessToken accessToken;

    public OAuth(String basePath, String tokenUrl) {
        this.tokenUrl = tokenUrl;
        this.absoluteTokenUrl = createAbsoluteTokenUrl(basePath, tokenUrl);
        authApi = new DefaultApi20() {
            @Override
            public String getAccessTokenEndpoint() {
              return absoluteTokenUrl;
            }

            @Override
            protected String getAuthorizationBaseUrl() {
              throw new UnsupportedOperationException("Shouldn't get there !");
            }
        };
    }

    private static String createAbsoluteTokenUrl(String basePath, String tokenUrl) {
        if (!URI.create(tokenUrl).isAbsolute()) {
            try {
                return UriBuilder.fromPath(basePath).path(tokenUrl).build().toURL().toString();
            } catch (MalformedURLException e) {
                log.log(Level.SEVERE, "Couldn't create absolute token URL", e);
            }
        }
        return tokenUrl;
    }

    @Override
    public void applyToParams(
        List<Pair> queryParams,
        Map<String, String> headerParams,
        Map<String, String> cookieParams,
        String payload,
        String method,
        URI uri)
        throws ApiException {

        if (accessToken == null) {
            obtainAccessToken(null);
        }
        if (accessToken != null) {
            headerParams.put("Authorization", "Bearer " + accessToken.getAccessToken());
        }
    }

    public OAuth2AccessToken renewAccessToken() throws ApiException {
        String refreshToken = null;
        if (accessToken != null) {
            refreshToken = accessToken.getRefreshToken();
            accessToken = null;
        }
        return obtainAccessToken(refreshToken);
    }

    public synchronized OAuth2AccessToken obtainAccessToken(String refreshToken) throws ApiException {
        if (service == null) {
            log.log(Level.FINE, "service is null in obtainAccessToken.");
            return null;
        }
        try {
            if (refreshToken != null) {
                return service.refreshAccessToken(refreshToken);
            }
        } catch (OAuthException | InterruptedException | ExecutionException | IOException e) {
            log.log(Level.FINE, "Refreshing the access token using the refresh token failed", e);
        }
        try {
            switch (flow) {
                case password:
                    if (username != null && password != null) {
                        accessToken = service.getAccessTokenPasswordGrant(username, password, scope);
                    }
                    break;
                case accessCode:
                    if (code != null) {
                        accessToken = service.getAccessToken(code);
                        code = null;
                    }
                    break;
                case application:
                    accessToken = service.getAccessTokenClientCredentialsGrant(scope);
                    break;
                default:
                    log.log(Level.SEVERE, "Invalid flow in obtainAccessToken: " + flow);
            }
        } catch (OAuthException | InterruptedException | ExecutionException | IOException e) {
            throw new ApiException(e);
        }
        return accessToken;
    }

    public OAuth2AccessToken getAccessToken() {
        return accessToken;
    }

    public OAuth setAccessToken(OAuth2AccessToken accessToken) {
        this.accessToken = accessToken;
        return this;
    }

    public OAuth setAccessToken(String accessToken) {
        this.accessToken = new OAuth2AccessToken(accessToken);
        return this;
    }

    public OAuth setScope(String scope) {
       this.scope = scope;
       return this;
    }

    public OAuth setCredentials(String clientId, String clientSecret, Boolean debug) {
        if (Boolean.TRUE.equals(debug)) {
            service = new ServiceBuilder(clientId)
                .apiSecret(clientSecret).debug()
                .build(authApi);
        } else {
            service = new ServiceBuilder(clientId)
                .apiSecret(clientSecret)
                .build(authApi);
        }
        return this;
    }

    public OAuth usePasswordFlow(String username, String password) {
        this.flow = OAuthFlow.password;
        this.username = username;
        this.password = password;
        return this;
    }

    public OAuth useAuthorizationCodeFlow(String code) {
        this.flow = OAuthFlow.accessCode;
        this.code = code;
        return this;
    }

    public OAuth setFlow(OAuthFlow flow) {
        this.flow = flow;
        return this;
    }

    public void setBasePath(String basePath) {
        this.absoluteTokenUrl = createAbsoluteTokenUrl(basePath, tokenUrl);
    }
}