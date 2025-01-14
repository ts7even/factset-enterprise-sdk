/*
 * Exchange DataFeed Data Model API
 * FactSet’s Exchange DataFeed products provide access to consolidated real-time and delayed global exchange data. Proprietary technology normalizes over 250 global venues, 18+ million instruments, and 150+ data fields. Asset types integrated include equities, futures, options, warrants, fixed income, mutual funds, ETFs, indices, commodities, and FX rates. Innovative technology ensures reliability and provides scalability that allows clients to make requests based on a symbol list or an exchange. Reduce development time by powering proprietary and third-party applications with exchange data from a unified data model. <p>The Exchange DataFeed Data Model API provides mappings for enumerations used in our Real-Time DataFeed products and should be used in conjunction with the DataFeed Data Model documentation available for each product. <p>The initial beta version of this API is limited to include mapping tables for the product codes only.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.ExchangeDataFeedDataModel.auth;

import com.factset.sdk.ExchangeDataFeedDataModel.Pair;
import com.factset.sdk.ExchangeDataFeedDataModel.ApiException;
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
