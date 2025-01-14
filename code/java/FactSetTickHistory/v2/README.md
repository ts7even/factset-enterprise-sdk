[![FactSet](https://raw.githubusercontent.com/factset/enterprise-sdk/main/docs/images/factset-logo.svg)](https://www.factset.com)

# FactSet Tick History client library for Java

[![Maven Central](https://img.shields.io/maven-central/v/com.factset.sdk/factsettickhistory)](https://search.maven.org/artifact/com.factset.sdk/factsettickhistory)
[![Apache-2 license](https://img.shields.io/badge/license-Apache2-brightgreen.svg)](https://www.apache.org/licenses/LICENSE-2.0)

Tick History provides dynamic access to historical tick data for a specific security for specific dates or date range.

This Java package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 0.30.0
- Build package: org.openapitools.codegen.languages.JavaClientCodegen

For more information, please visit [https://developer.factset.com/contact](https://developer.factset.com/contact)

## Requirements

* Java JDK >= 1.8

## Installation

### Maven

Add these dependencies to your project's POM:

```xml
<dependency>
  <groupId>com.factset.sdk</groupId>
  <artifactId>utils</artifactId>
  <version>1.0.0</version>
</dependency>
<dependency>
  <groupId>com.factset.sdk</groupId>
  <artifactId>factsettickhistory</artifactId>
  <version>0.30.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle

Add these dependencies to your project's build file:

```groovy
  repositories {
    mavenCentral()
  }

  dependencies {
    implementation "com.factset.sdk:utils:1.0.0"
    implementation "com.factset.sdk:factsettickhistory:0.30.0"
  }
```

## Usage

1. [Generate authentication credentials](../../../../README.md#authentication).
2. Setup Java environment.
   1. Install and activate Java 1.8+
   2. Install [maven](https://maven.apache.org/install.html) or [gradle](https://gradle.org/install/)
3. [Install dependencies](#installation).
4. Run the following:

```java
import com.factset.sdk.FactSetTickHistory.*;
import com.factset.sdk.FactSetTickHistory.auth.*;
import com.factset.sdk.FactSetTickHistory.models.*;
import com.factset.sdk.FactSetTickHistory.api.Level1Api;

import com.factset.sdk.utils.authentication.ConfidentialClient;


public class Level1ApiExample {

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

        Level1Api apiInstance = new Level1Api(defaultClient);
        LeveloneRequest leveloneRequest = new LeveloneRequest(); // LeveloneRequest | 
        try {
            SubmittedResponse result = apiInstance.getId(leveloneRequest);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling Level1Api#getId");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

### Using a Proxy

To add a HTTP proxy for the API client, use `ClientConfig`:
```java

import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.ClientProperties;
import com.factset.sdk.FactSetTickHistory.*;
import com.factset.sdk.FactSetTickHistory.api.Level1Api;

...

ApiClient defaultClient = Configuration.getDefaultApiClient();
ClientConfig clientConfig = defaultClient.getClientConfig();
clientConfig.connectorProvider(new ApacheConnectorProvider());
clientConfig.property(ClientProperties.PROXY_URI, "http://proxy_url_here");
clientConfig.property(ClientProperties.PROXY_USERNAME, "proxy_username");
clientConfig.property(ClientProperties.PROXY_PASSWORD, "proxy_password");
defaultClient.setClientConfig(clientConfig);

Level1Api apiInstance = new Level1Api(defaultClient);

```

### Debugging
The SDK uses the standard library class [`java.util.logging.Logger`](https://docs.oracle.com/javase/7/docs/api/java/util/logging/Logger.html).

Calling `setDebugging(true)` on an instance of the `ApiClient` will return an instance of the `ApiClient` that has set the logger's [`Level`](https://docs.oracle.com/javase/7/docs/api/java/util/logging/Level.html) to `ALL`.

**Note**: This prints out sensitive information (e.g. the full request and response). Use with care.

```java
import com.factset.sdk.FactSetTickHistory.ApiClient;

public class Main {
    public static void main(String[] args) throws Exception {
        ApiClient defaultClient = new ApiClient();
        defaultClient.setDebugging(true);

        // Setup authentication and make request with apiInstance...
    }
}
```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/tick-history/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Level1Api* | [**getId**](docs/Level1Api.md#getId) | **POST** /level1/files/create | Returns the ID for the requested data.
*Level1Api* | [**getStatusLevel1**](docs/Level1Api.md#getStatusLevel1) | **GET** /level1/files/status | Returns the status of the ID
*Level1Api* | [**getTickHistoryCoverage**](docs/Level1Api.md#getTickHistoryCoverage) | **GET** /level1/coverage | Returns the coverage for the requested ticker/isin along with other response fields for Level1 data.
*Level1Api* | [**getTickHistoryFiles**](docs/Level1Api.md#getTickHistoryFiles) | **GET** /level1/files/get | Returns the tick history files requested in the /create endpoint
*Level2Api* | [**getStatusLevel2**](docs/Level2Api.md#getStatusLevel2) | **GET** /level2/files/status | Returns the status of the ID
*Level2Api* | [**getTickHistoryFilesLevel2**](docs/Level2Api.md#getTickHistoryFilesLevel2) | **GET** /level2/files/get | Returns the tick history files requested in the /create endpoint
*Level2Api* | [**getlevel2id**](docs/Level2Api.md#getlevel2id) | **POST** /level2/files/create | Returns the ID for the requested data.


## Documentation for Models

 - [CheckFiles](docs/CheckFiles.md)
 - [CompletedResponse](docs/CompletedResponse.md)
 - [CoverageResponse](docs/CoverageResponse.md)
 - [CoverageTickHistory](docs/CoverageTickHistory.md)
 - [DateRangeOne](docs/DateRangeOne.md)
 - [DateTimePeriod](docs/DateTimePeriod.md)
 - [ErrorExample](docs/ErrorExample.md)
 - [ErrorObject](docs/ErrorObject.md)
 - [Files](docs/Files.md)
 - [GetFilesResponse](docs/GetFilesResponse.md)
 - [Level1RequestBody](docs/Level1RequestBody.md)
 - [Level2RequestBody](docs/Level2RequestBody.md)
 - [LevelTwoRequest](docs/LevelTwoRequest.md)
 - [LeveloneRequest](docs/LeveloneRequest.md)
 - [LeveltwoGetFilesResponse](docs/LeveltwoGetFilesResponse.md)
 - [Meta](docs/Meta.md)
 - [Pagination](docs/Pagination.md)
 - [ResponseFileType](docs/ResponseFileType.md)
 - [Status](docs/Status.md)
 - [StatusOne](docs/StatusOne.md)
 - [SubmittedResponse](docs/SubmittedResponse.md)
 - [TickData](docs/TickData.md)
 - [TickDataLevel2](docs/TickDataLevel2.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### FactSetApiKey


- **Type**: HTTP basic authentication

### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multi-threaded environment to avoid any potential issues.

# Contributing

Please refer to the [contributing guide](../../../../CONTRIBUTING.md).

# Copyright

Copyright 2022 FactSet Research Systems Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
