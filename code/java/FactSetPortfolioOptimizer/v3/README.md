# factsetportfoliooptimizer

FPO API

- API version: 3

Allow clients to fetch Analytics through APIs.

  For more information, please visit [https://developer.factset.com/contact](https://developer.factset.com/contact)

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
  <artifactId>factsetportfoliooptimizer</artifactId>
  <version>0.9.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
  repositories {
    mavenCentral()     // Needed if the 'factsetportfoliooptimizer' jar has been published to maven central.
    mavenLocal()       // Needed if the 'factsetportfoliooptimizer' jar has been published to the local maven repo.
  }

  dependencies {
     implementation "com.factset.sdk:factsetportfoliooptimizer:0.9.0"
  }
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

- `target/factsetportfoliooptimizer-0.9.0.jar`
- `target/lib/*.jar`

## Usage

To add a HTTP proxy for the API client, use `ClientConfig`:
```java

import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.ClientProperties;
import com.factset.sdk.FactSetPortfolioOptimizer.*;
import com.factset.sdk.FactSetPortfolioOptimizer.api.AccountsApi;

...

ApiClient defaultClient = Configuration.getDefaultApiClient();
ClientConfig clientConfig = defaultClient.getClientConfig();
clientConfig.connectorProvider(new ApacheConnectorProvider());
clientConfig.property(ClientProperties.PROXY_URI, "http://proxy_url_here");
clientConfig.property(ClientProperties.PROXY_USERNAME, "proxy_username");
clientConfig.property(ClientProperties.PROXY_PASSWORD, "proxy_password");
defaultClient.setClientConfig(clientConfig);

AccountsApi apiInstance = new AccountsApi(defaultClient);

```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.factset.sdk.FactSetPortfolioOptimizer.*;
import com.factset.sdk.FactSetPortfolioOptimizer.auth.*;
import com.factset.sdk.FactSetPortfolioOptimizer.models.*;
import com.factset.sdk.FactSetPortfolioOptimizer.api.AccountsApi;

public class AccountsApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.factset.com");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AccountsApi apiInstance = new AccountsApi(defaultClient);
        String path = "Client:Foo/Bar"; // String | The directory to get the accounts and sub-directories in
        try {
            AccountDirectoriesRoot result = apiInstance.getAccounts(path);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountsApi#getAccounts");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountsApi* | [**getAccounts**](docs/AccountsApi.md#getAccounts) | **GET** /analytics/lookups/v3/accounts/{path} | Get accounts and sub-directories in a directory
*CurrenciesApi* | [**getCurrencies**](docs/CurrenciesApi.md#getCurrencies) | **GET** /analytics/lookups/v3/currencies | Get currencies
*FpoOptimizerApi* | [**cancelOptimizationById**](docs/FpoOptimizerApi.md#cancelOptimizationById) | **DELETE** /analytics/engines/fpo/v3/optimizations/{id} | Cancel FPO optimization by id
*FpoOptimizerApi* | [**getOptimizationParameters**](docs/FpoOptimizerApi.md#getOptimizationParameters) | **GET** /analytics/engines/fpo/v3/optimizations/{id} | Get FPO optimization parameters by id
*FpoOptimizerApi* | [**getOptimizationResult**](docs/FpoOptimizerApi.md#getOptimizationResult) | **GET** /analytics/engines/fpo/v3/optimizations/{id}/result | Get FPO optimization result by id
*FpoOptimizerApi* | [**getOptimizationStatusById**](docs/FpoOptimizerApi.md#getOptimizationStatusById) | **GET** /analytics/engines/fpo/v3/optimizations/{id}/status | Get FPO optimization status by id
*FpoOptimizerApi* | [**postAndOptimize**](docs/FpoOptimizerApi.md#postAndOptimize) | **POST** /analytics/engines/fpo/v3/optimizations | Create and Run FPO optimization
*FpoOptimizerApi* | [**putAndOptimize**](docs/FpoOptimizerApi.md#putAndOptimize) | **PUT** /analytics/engines/fpo/v3/optimizations/{id} | Create or Update FPO optimization and run it.
*StrategyDocumentsApi* | [**getFPOStrategyDocuments**](docs/StrategyDocumentsApi.md#getFPOStrategyDocuments) | **GET** /analytics/engines/fpo/v3/strategies/{path} | Get FactSet Portfolio Optimizer strategy documents and sub-directories in a directory


## Documentation for Models

 - [AccountDirectories](docs/AccountDirectories.md)
 - [AccountDirectoriesRoot](docs/AccountDirectoriesRoot.md)
 - [CalculationInfo](docs/CalculationInfo.md)
 - [CalculationInfoRoot](docs/CalculationInfoRoot.md)
 - [ClientErrorResponse](docs/ClientErrorResponse.md)
 - [Currency](docs/Currency.md)
 - [CurrencyRoot](docs/CurrencyRoot.md)
 - [DocumentDirectories](docs/DocumentDirectories.md)
 - [DocumentDirectoriesRoot](docs/DocumentDirectoriesRoot.md)
 - [Error](docs/Error.md)
 - [ErrorSource](docs/ErrorSource.md)
 - [FPOAccount](docs/FPOAccount.md)
 - [FPOOptimizationParameters](docs/FPOOptimizationParameters.md)
 - [FPOOptimizationParametersRoot](docs/FPOOptimizationParametersRoot.md)
 - [ObjectRoot](docs/ObjectRoot.md)
 - [OptimalPortfolio](docs/OptimalPortfolio.md)
 - [Optimization](docs/Optimization.md)
 - [OptimizerAccountOverrides](docs/OptimizerAccountOverrides.md)
 - [OptimizerOptimalHoldings](docs/OptimizerOptimalHoldings.md)
 - [OptimizerOutputTypes](docs/OptimizerOutputTypes.md)
 - [OptimizerStrategy](docs/OptimizerStrategy.md)
 - [OptimizerStrategyOverrides](docs/OptimizerStrategyOverrides.md)
 - [OptimizerTradesList](docs/OptimizerTradesList.md)
 - [PaDoc](docs/PaDoc.md)


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

analytics.api.support@factset.com
