# chartgenerationservice

Chart Generation Service

- API version: 1.0.0

This is a service for generating charts in a node environment that were created using web charting and get back images in form of `PNGs` and `JPEGs` as response.


*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*

## Requirements

Building the API client library requires:

1. Java 1.8+
2. Maven (3.8.3+)/Gradle (7.2+)

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>com.factset.sdk</groupId>
  <artifactId>chartgenerationservice</artifactId>
  <version>0.9.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
  repositories {
    mavenCentral()     // Needed if the 'chartgenerationservice' jar has been published to maven central.
    mavenLocal()       // Needed if the 'chartgenerationservice' jar has been published to the local maven repo.
  }

  dependencies {
     implementation "com.factset.sdk:chartgenerationservice:0.9.0"
  }
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

- `target/chartgenerationservice-0.9.0.jar`
- `target/lib/*.jar`

## Usage

To add a HTTP proxy for the API client, use `ClientConfig`:
```java

import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.ClientProperties;
import com.factset.sdk.ChartGenerationService.*;
import com.factset.sdk.ChartGenerationService.api.ChartTemplatesApi;

...

ApiClient defaultClient = Configuration.getDefaultApiClient();
ClientConfig clientConfig = defaultClient.getClientConfig();
clientConfig.connectorProvider(new ApacheConnectorProvider());
clientConfig.property(ClientProperties.PROXY_URI, "http://proxy_url_here");
clientConfig.property(ClientProperties.PROXY_USERNAME, "proxy_username");
clientConfig.property(ClientProperties.PROXY_PASSWORD, "proxy_password");
defaultClient.setClientConfig(clientConfig);

ChartTemplatesApi apiInstance = new ChartTemplatesApi(defaultClient);

```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.factset.sdk.ChartGenerationService.*;
import com.factset.sdk.ChartGenerationService.auth.*;
import com.factset.sdk.ChartGenerationService.models.*;
import com.factset.sdk.ChartGenerationService.api.ChartTemplatesApi;

public class ChartTemplatesApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api-sandbox.factset.com/charting");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ChartTemplatesApi apiInstance = new ChartTemplatesApi(defaultClient);
        try {
            java.util.List<String> result = apiInstance.getCategoryList();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ChartTemplatesApi#getCategoryList");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://api-sandbox.factset.com/charting*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ChartTemplatesApi* | [**getCategoryList**](docs/ChartTemplatesApi.md#getCategoryList) | **GET** /v1/catalog/categories | Get a list of chart categories
*ChartTemplatesApi* | [**getChartList**](docs/ChartTemplatesApi.md#getChartList) | **GET** /v1/catalog/charts | Get a list of chart templates that can be used for getting the image from the service.
*ChartTemplatesApi* | [**images**](docs/ChartTemplatesApi.md#images) | **GET** /v1/image | Get chart image back in PNG or JPEG formats


## Documentation for Models

 - [CategoriesErrorResponse](docs/CategoriesErrorResponse.md)
 - [ChartInput](docs/ChartInput.md)
 - [ChartList](docs/ChartList.md)
 - [ChartListErrorResponse](docs/ChartListErrorResponse.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [UnauthorizedResponse](docs/UnauthorizedResponse.md)


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

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author


