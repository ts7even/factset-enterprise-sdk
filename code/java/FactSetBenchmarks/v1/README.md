# factsetbenchmarks

FactSet Benchmarks API

- API version: 1.4.0

FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon.



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
  <artifactId>factsetbenchmarks</artifactId>
  <version>0.9.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
  repositories {
    mavenCentral()     // Needed if the 'factsetbenchmarks' jar has been published to maven central.
    mavenLocal()       // Needed if the 'factsetbenchmarks' jar has been published to the local maven repo.
  }

  dependencies {
     implementation "com.factset.sdk:factsetbenchmarks:0.9.0"
  }
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

- `target/factsetbenchmarks-0.9.0.jar`
- `target/lib/*.jar`

## Usage

To add a HTTP proxy for the API client, use `ClientConfig`:
```java

import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.ClientProperties;
import com.factset.sdk.FactSetBenchmarks.*;
import com.factset.sdk.FactSetBenchmarks.api.BenchmarkConstituentsApi;

...

ApiClient defaultClient = Configuration.getDefaultApiClient();
ClientConfig clientConfig = defaultClient.getClientConfig();
clientConfig.connectorProvider(new ApacheConnectorProvider());
clientConfig.property(ClientProperties.PROXY_URI, "http://proxy_url_here");
clientConfig.property(ClientProperties.PROXY_USERNAME, "proxy_username");
clientConfig.property(ClientProperties.PROXY_PASSWORD, "proxy_password");
defaultClient.setClientConfig(clientConfig);

BenchmarkConstituentsApi apiInstance = new BenchmarkConstituentsApi(defaultClient);

```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.factset.sdk.FactSetBenchmarks.*;
import com.factset.sdk.FactSetBenchmarks.auth.*;
import com.factset.sdk.FactSetBenchmarks.models.*;
import com.factset.sdk.FactSetBenchmarks.api.BenchmarkConstituentsApi;

public class BenchmarkConstituentsApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.factset.com/content");
        
        // Configure HTTP basic authorization: FactSetApiKey
        HttpBasicAuth FactSetApiKey = (HttpBasicAuth) defaultClient.getAuthentication("FactSetApiKey");
        FactSetApiKey.setUsername("YOUR USERNAME");
        FactSetApiKey.setPassword("YOUR PASSWORD");

        // Configure OAuth2 access token for authorization: FactSetOAuth2
        OAuth FactSetOAuth2 = (OAuth) defaultClient.getAuthentication("FactSetOAuth2");
        FactSetOAuth2.setAccessToken("YOUR ACCESS TOKEN");

        BenchmarkConstituentsApi apiInstance = new BenchmarkConstituentsApi(defaultClient);
        java.util.List<String> ids = Arrays.asList(); // java.util.List<String> | Benchmark Identifiers. Reference the helper endpoint **_/id-list** to get a sample list of  valid identifiers. You must be authorized for the `ids` requested, otherwise you will receive an error. <p>***ids limit** =  1 per request*</p>
        String date = "date_example"; // String | Date of holding expressed in YYYY-MM-DD format.
        String currency = "currency_example"; // String | Currency for response.
        try {
            BenchmarkConstituentsResponse result = apiInstance.getBenchmarkConstituents(ids, date, currency);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling BenchmarkConstituentsApi#getBenchmarkConstituents");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BenchmarkConstituentsApi* | [**getBenchmarkConstituents**](docs/BenchmarkConstituentsApi.md#getBenchmarkConstituents) | **GET** /factset-benchmarks/v1/constituents | Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.
*BenchmarkConstituentsApi* | [**getBenchmarkConstituentsForList**](docs/BenchmarkConstituentsApi.md#getBenchmarkConstituentsForList) | **POST** /factset-benchmarks/v1/constituents | Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.
*BenchmarkConstituentsApi* | [**getFIBenchmarkConstituents**](docs/BenchmarkConstituentsApi.md#getFIBenchmarkConstituents) | **GET** /factset-benchmarks/v1/fixed-income-constituents | Returns the requested Fixed Income Benchmark Constituents and respective Weights, Price and Market Value.
*BenchmarkConstituentsApi* | [**getFIBenchmarkConstituentsForList**](docs/BenchmarkConstituentsApi.md#getFIBenchmarkConstituentsForList) | **POST** /factset-benchmarks/v1/fixed-income-constituents | Returns the requested Benchmark Constituents and respective Weights, Price and Market Value.
*HelperApi* | [**getBenchmarkIds**](docs/HelperApi.md#getBenchmarkIds) | **GET** /factset-benchmarks/v1/id-list | Returns a sample list of Benchmark Identifiers and the benchmark categorization to use in other Benchmark API endpoints.
*HelperApi* | [**getBenchmarkIdsForList**](docs/HelperApi.md#getBenchmarkIdsForList) | **POST** /factset-benchmarks/v1/id-list | Returns a sample list of Benchmark Identifiers and the benchmark categorization to use in other Benchmark API endpoints.
*IndexLevelApi* | [**getBenchmarkRatios**](docs/IndexLevelApi.md#getBenchmarkRatios) | **GET** /factset-benchmarks/v1/ratios | Returns the aggregated ratios of a requested benchmark
*IndexLevelApi* | [**getBenchmarkRatiosForList**](docs/IndexLevelApi.md#getBenchmarkRatiosForList) | **POST** /factset-benchmarks/v1/ratios | Returns the aggregated ratios of a requested benchmark
*IndexLevelApi* | [**getIndexHistory**](docs/IndexLevelApi.md#getIndexHistory) | **GET** /factset-benchmarks/v1/index-history | Retrieves Index Level Prices and Returns information for a list of identifiers and historical date range.
*IndexLevelApi* | [**getIndexHistoryForList**](docs/IndexLevelApi.md#getIndexHistoryForList) | **POST** /factset-benchmarks/v1/index-history | Retrieves Index Level Prices and Returns information for a list of identifiers and historical date range.
*IndexLevelApi* | [**getIndexSnapshot**](docs/IndexLevelApi.md#getIndexSnapshot) | **GET** /factset-benchmarks/v1/index-snapshot | Index Level Prices, Returns, and related information as of a single date.
*IndexLevelApi* | [**getIndexSnapshotForList**](docs/IndexLevelApi.md#getIndexSnapshotForList) | **POST** /factset-benchmarks/v1/index-snapshot | Retrieves the Index Level Snapshot of Prices and Returns information for a given identifier and single date.


## Documentation for Models

 - [BenchmarkConstituent](docs/BenchmarkConstituent.md)
 - [BenchmarkConstituentsRequest](docs/BenchmarkConstituentsRequest.md)
 - [BenchmarkConstituentsResponse](docs/BenchmarkConstituentsResponse.md)
 - [BenchmarkIdList](docs/BenchmarkIdList.md)
 - [BenchmarkIdListRequest](docs/BenchmarkIdListRequest.md)
 - [BenchmarkIdListResponse](docs/BenchmarkIdListResponse.md)
 - [BenchmarkRatios](docs/BenchmarkRatios.md)
 - [BenchmarkRatiosRequest](docs/BenchmarkRatiosRequest.md)
 - [BenchmarkRatiosResponse](docs/BenchmarkRatiosResponse.md)
 - [Calendar](docs/Calendar.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [FamilyFilter](docs/FamilyFilter.md)
 - [FixedIncomeBenchmarkConstituent](docs/FixedIncomeBenchmarkConstituent.md)
 - [FixedIncomeBenchmarkConstituentsRequest](docs/FixedIncomeBenchmarkConstituentsRequest.md)
 - [FixedIncomeBenchmarkConstituentsResponse](docs/FixedIncomeBenchmarkConstituentsResponse.md)
 - [Frequency](docs/Frequency.md)
 - [IndexHistory](docs/IndexHistory.md)
 - [IndexHistoryRequest](docs/IndexHistoryRequest.md)
 - [IndexHistoryResponse](docs/IndexHistoryResponse.md)
 - [IndexSnapshot](docs/IndexSnapshot.md)
 - [IndexSnapshotRequest](docs/IndexSnapshotRequest.md)
 - [IndexSnapshotResponse](docs/IndexSnapshotResponse.md)
 - [Periodicity](docs/Periodicity.md)
 - [ReturnType](docs/ReturnType.md)


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

api@factset.com
