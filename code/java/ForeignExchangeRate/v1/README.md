# foreignexchangerate

Foreign Exchange Rates API

- API version: 1.0.0

Foreign Exchange Rates API in which retrieves Spots and Forwards for a given currency pair and date range. <p>*Spots and Forwards rates are sourced from W/M Reuters.The WM Company calculates daily standardized spot rates for global foreign exchange transactions, using rates provided by Reuters. These rates are recognized globally as the standard by banks, fund managers, and index compilers; increasingly these rates are also being used for benchmark currency trading. In 1994, WM Company began calculating closing spot rates. Closing spot rates provide a standard set of currency rates so that portfolio valuations can be compared to each other and their performances measured against benchmarks, without having discrepancies caused by exchange rates. Closing spot rates are recorded at 16:00 GMT.*</p>



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
  <artifactId>foreignexchangerate</artifactId>
  <version>0.9.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
  repositories {
    mavenCentral()     // Needed if the 'foreignexchangerate' jar has been published to maven central.
    mavenLocal()       // Needed if the 'foreignexchangerate' jar has been published to the local maven repo.
  }

  dependencies {
     implementation "com.factset.sdk:foreignexchangerate:0.9.0"
  }
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

- `target/foreignexchangerate-0.9.0.jar`
- `target/lib/*.jar`

## Usage

To add a HTTP proxy for the API client, use `ClientConfig`:
```java

import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.ClientProperties;
import com.factset.sdk.ForeignExchangeRate.*;
import com.factset.sdk.ForeignExchangeRate.api.ForwardsApi;

...

ApiClient defaultClient = Configuration.getDefaultApiClient();
ClientConfig clientConfig = defaultClient.getClientConfig();
clientConfig.connectorProvider(new ApacheConnectorProvider());
clientConfig.property(ClientProperties.PROXY_URI, "http://proxy_url_here");
clientConfig.property(ClientProperties.PROXY_USERNAME, "proxy_username");
clientConfig.property(ClientProperties.PROXY_PASSWORD, "proxy_password");
defaultClient.setClientConfig(clientConfig);

ForwardsApi apiInstance = new ForwardsApi(defaultClient);

```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.factset.sdk.ForeignExchangeRate.*;
import com.factset.sdk.ForeignExchangeRate.auth.*;
import com.factset.sdk.ForeignExchangeRate.models.*;
import com.factset.sdk.ForeignExchangeRate.api.ForwardsApi;

public class ForwardsApiExample {

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

        ForwardsApi apiInstance = new ForwardsApi(defaultClient);
        java.util.List<String> ids = Arrays.asList(); // java.util.List<String> | The currency pair requested in the format of a ISO {source}{target}. For a complete list of ISO currencies, please visit [OA 1470](https://my.apps.factset.com/oa/pages/1470)
        String forwardPeriod = "ON"; // String | Bid, offer, and mid rates are available for the following 11 time periods.  * ON - Overnight  * TN - Tomorrow Next  * SW - One Week (Spot Week)  * 1M - One Month  * 2M - Two Months  * 3M - Three Months  * 6M - Six Months  * 9M - Nine Months  * 1Y - One Year  * 2Y - Two Years  * 5Y - Five Years 
        String startDate = "2019-01-01"; // String | The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available. 
        String endDate = "2019-12-31"; // String | The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available. 
        String frequency = "D"; // String | Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).    * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year. 
        try {
            ForwardsResponse result = apiInstance.getFXForwards(ids, forwardPeriod, startDate, endDate, frequency);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ForwardsApi#getFXForwards");
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
*ForwardsApi* | [**getFXForwards**](docs/ForwardsApi.md#getFXForwards) | **GET** /foreign-exchange/v1/forwards | Gets Forwards for a list of currency pairs
*ForwardsApi* | [**getFXForwardsForList**](docs/ForwardsApi.md#getFXForwardsForList) | **POST** /foreign-exchange/v1/forwards | Gets Forwards for a list of currency pairs
*SpotsApi* | [**getSpots**](docs/SpotsApi.md#getSpots) | **GET** /foreign-exchange/v1/spots | Gets spots for a list of currency pairs
*SpotsApi* | [**getSpotsForList**](docs/SpotsApi.md#getSpotsForList) | **POST** /foreign-exchange/v1/spots | Gets spots for a list of currency pairs


## Documentation for Models

 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [Forward](docs/Forward.md)
 - [ForwardPeriod](docs/ForwardPeriod.md)
 - [ForwardsRequest](docs/ForwardsRequest.md)
 - [ForwardsResponse](docs/ForwardsResponse.md)
 - [Frequency](docs/Frequency.md)
 - [Spot](docs/Spot.md)
 - [SpotsRequest](docs/SpotsRequest.md)
 - [SpotsResponse](docs/SpotsResponse.md)


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
