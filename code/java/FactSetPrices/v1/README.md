# factsetprices

FactSet Prices API

- API version: 1.2.1

Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p>



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
  <artifactId>factsetprices</artifactId>
  <version>0.9.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
  repositories {
    mavenCentral()     // Needed if the 'factsetprices' jar has been published to maven central.
    mavenLocal()       // Needed if the 'factsetprices' jar has been published to the local maven repo.
  }

  dependencies {
     implementation "com.factset.sdk:factsetprices:0.9.0"
  }
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

- `target/factsetprices-0.9.0.jar`
- `target/lib/*.jar`

## Usage

To add a HTTP proxy for the API client, use `ClientConfig`:
```java

import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.ClientProperties;
import com.factset.sdk.FactSetPrices.*;
import com.factset.sdk.FactSetPrices.api.DatabaseRolloverApi;

...

ApiClient defaultClient = Configuration.getDefaultApiClient();
ClientConfig clientConfig = defaultClient.getClientConfig();
clientConfig.connectorProvider(new ApacheConnectorProvider());
clientConfig.property(ClientProperties.PROXY_URI, "http://proxy_url_here");
clientConfig.property(ClientProperties.PROXY_USERNAME, "proxy_username");
clientConfig.property(ClientProperties.PROXY_PASSWORD, "proxy_password");
defaultClient.setClientConfig(clientConfig);

DatabaseRolloverApi apiInstance = new DatabaseRolloverApi(defaultClient);

```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.factset.sdk.FactSetPrices.*;
import com.factset.sdk.FactSetPrices.auth.*;
import com.factset.sdk.FactSetPrices.models.*;
import com.factset.sdk.FactSetPrices.api.DatabaseRolloverApi;

public class DatabaseRolloverApiExample {

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

        DatabaseRolloverApi apiInstance = new DatabaseRolloverApi(defaultClient);
        try {
            RolloverResponse result = apiInstance.getDatabaseRollover();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DatabaseRolloverApi#getDatabaseRollover");
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
*DatabaseRolloverApi* | [**getDatabaseRollover**](docs/DatabaseRolloverApi.md#getDatabaseRollover) | **GET** /factset-prices/v1/database-rollover | Gets the latest relative rollover date for the database.
*DatabaseRolloverApi* | [**getDatabaseRolloverForList**](docs/DatabaseRolloverApi.md#getDatabaseRolloverForList) | **POST** /factset-prices/v1/database-rollover | Gets the latest relative rollover date for the database.
*DividendsApi* | [**getSecurityDividends**](docs/DividendsApi.md#getSecurityDividends) | **GET** /factset-prices/v1/dividends | Gets dividend information for a given date range and list of securities
*DividendsApi* | [**getSecurityDividendsForList**](docs/DividendsApi.md#getSecurityDividendsForList) | **POST** /factset-prices/v1/dividends | Requests dividend information for a given date range and list of securities
*HighLowApi* | [**getHighLow**](docs/HighLowApi.md#getHighLow) | **GET** /factset-prices/v1/high-low | Gets the price high and price low of securities for a list of &#x60;ids&#x60; as of given date, period and frequency.
*HighLowApi* | [**getHighLowForList**](docs/HighLowApi.md#getHighLowForList) | **POST** /factset-prices/v1/high-low | Requests the price high and price low of securities for a list of &#x60;ids&#x60; as of given date, period and frequency.
*MarketValueApi* | [**getMarketValue**](docs/MarketValueApi.md#getMarketValue) | **GET** /factset-prices/v1/market-value | Gets the security level and company level market values for a list of &#x60;ids&#x60; as of given date range and frequency.
*MarketValueApi* | [**getMarketValueForList**](docs/MarketValueApi.md#getMarketValueForList) | **POST** /factset-prices/v1/market-value | Requests the market value for a list of &#x60;ids&#x60; as of given date range.
*PricesApi* | [**getFixedSecurityPrices**](docs/PricesApi.md#getFixedSecurityPrices) | **GET** /factset-prices/v1/fixed-income | Gets pricing for a list of Fixed Income securities
*PricesApi* | [**getFixedSecurityPricesForList**](docs/PricesApi.md#getFixedSecurityPricesForList) | **POST** /factset-prices/v1/fixed-income | Requests pricing for a list of Fixed Income securities for date range requested
*PricesApi* | [**getSecurityPrices**](docs/PricesApi.md#getSecurityPrices) | **GET** /factset-prices/v1/prices | Gets end-of-day Open, High, Low, Close for a list of securities.
*PricesApi* | [**getSecurityPricesForList**](docs/PricesApi.md#getSecurityPricesForList) | **POST** /factset-prices/v1/prices | Requests end-of-day Open, High, Low, Close for a large list of securities.
*ReferenceApi* | [**getSecurityReferenceForList**](docs/ReferenceApi.md#getSecurityReferenceForList) | **POST** /factset-prices/v1/references | Requests security reference details a list of securities
*ReferenceApi* | [**getSecurityReferences**](docs/ReferenceApi.md#getSecurityReferences) | **GET** /factset-prices/v1/references | Gets security reference details for a list of securities
*ReturnsApi* | [**getReturnsSnapshot**](docs/ReturnsApi.md#getReturnsSnapshot) | **GET** /factset-prices/v1/returns-snapshot | Returns the price performance of the security and annualized compound total returns.
*ReturnsApi* | [**getReturnsSnapshotForList**](docs/ReturnsApi.md#getReturnsSnapshotForList) | **POST** /factset-prices/v1/returns-snapshot | Returns the price performance of the security and annualized compound total returns.
*ReturnsApi* | [**getSecurityReturns**](docs/ReturnsApi.md#getSecurityReturns) | **GET** /factset-prices/v1/returns | Gets Returns for a list of &#x60;ids&#x60; as of given date range and rolling Period
*ReturnsApi* | [**getSecurityReturnsForList**](docs/ReturnsApi.md#getSecurityReturnsForList) | **POST** /factset-prices/v1/returns | Requests security returns for the given date range and rollingPeriod.
*SharesApi* | [**getSecurityShares**](docs/SharesApi.md#getSecurityShares) | **GET** /factset-prices/v1/shares | Gets shares for a list of &#x60;ids&#x60; as of given date range.
*SharesApi* | [**getSecuritySharesForList**](docs/SharesApi.md#getSecuritySharesForList) | **POST** /factset-prices/v1/shares | Requests shares for a list of &#x60;ids&#x60; as of given date range.
*SplitsApi* | [**getSecuritySplits**](docs/SplitsApi.md#getSecuritySplits) | **GET** /factset-prices/v1/splits | Gets full history of security Splits for a list of &#x60;ids&#x60;
*SplitsApi* | [**getSecuritySplitsForList**](docs/SplitsApi.md#getSecuritySplitsForList) | **POST** /factset-prices/v1/splits | Requests splits for a list of &#x60;ids&#x60;


## Documentation for Models

 - [Adjust](docs/Adjust.md)
 - [Batch](docs/Batch.md)
 - [BatchStatus](docs/BatchStatus.md)
 - [BatchStatusResponse](docs/BatchStatusResponse.md)
 - [Calendar](docs/Calendar.md)
 - [Dividend](docs/Dividend.md)
 - [DividendAdjust](docs/DividendAdjust.md)
 - [DividendAdjustSnapshot](docs/DividendAdjustSnapshot.md)
 - [DividendsRequest](docs/DividendsRequest.md)
 - [DividendsResponse](docs/DividendsResponse.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [FixedIncomePrice](docs/FixedIncomePrice.md)
 - [Frequency](docs/Frequency.md)
 - [FrequencyFi](docs/FrequencyFi.md)
 - [HighLow](docs/HighLow.md)
 - [HighLowRequest](docs/HighLowRequest.md)
 - [HighLowResponse](docs/HighLowResponse.md)
 - [MarketValue](docs/MarketValue.md)
 - [MarketValueRequest](docs/MarketValueRequest.md)
 - [MarketValueResponse](docs/MarketValueResponse.md)
 - [ModelReturn](docs/ModelReturn.md)
 - [Period](docs/Period.md)
 - [Price](docs/Price.md)
 - [PriceType](docs/PriceType.md)
 - [PricesFixedIncomeRequest](docs/PricesFixedIncomeRequest.md)
 - [PricesFixedIncomeResponse](docs/PricesFixedIncomeResponse.md)
 - [PricesRequest](docs/PricesRequest.md)
 - [PricesResponse](docs/PricesResponse.md)
 - [References](docs/References.md)
 - [ReferencesRequest](docs/ReferencesRequest.md)
 - [ReferencesResponse](docs/ReferencesResponse.md)
 - [ReturnsRequest](docs/ReturnsRequest.md)
 - [ReturnsResponse](docs/ReturnsResponse.md)
 - [ReturnsSnapshot](docs/ReturnsSnapshot.md)
 - [ReturnsSnapshotRequest](docs/ReturnsSnapshotRequest.md)
 - [ReturnsSnapshotResponse](docs/ReturnsSnapshotResponse.md)
 - [RollingPeriod](docs/RollingPeriod.md)
 - [Rollover](docs/Rollover.md)
 - [RolloverResponse](docs/RolloverResponse.md)
 - [Shares](docs/Shares.md)
 - [SharesRequest](docs/SharesRequest.md)
 - [SharesResponse](docs/SharesResponse.md)
 - [SplitAdjust](docs/SplitAdjust.md)
 - [Splits](docs/Splits.md)
 - [SplitsRequest](docs/SplitsRequest.md)
 - [SplitsResponse](docs/SplitsResponse.md)


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
