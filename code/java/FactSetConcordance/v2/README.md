# factsetconcordance

FactSet Concordance API

- API version: 2.0.0

The FactSet Concordance API provides the ability to programmatically look up several types of entities by their name and other attributes. It attempts to match attributes that you supply for the entity and returns as many match candidates as it can find. The result is a \"concorded\" FactSet Entity Permanent identifier.  The Entity Identifier can then be used as input throughout FactSet's Content soultions, such as Content APIs and Standard DataFeeds.<p> There are two types of workflows supported in the API. The first workflow type follows traditional API conventions in that a request is accepted and a response is returned synchronously. The second workflow type involves a background task. With this workflow, a task is created for uploading a set of queries, and then the client polls for the task to complete. Once the task has completed, the client retrieves the concordance results throught the decisions endpoint.</p>



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
  <artifactId>factsetconcordance</artifactId>
  <version>0.9.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
  repositories {
    mavenCentral()     // Needed if the 'factsetconcordance' jar has been published to maven central.
    mavenLocal()       // Needed if the 'factsetconcordance' jar has been published to the local maven repo.
  }

  dependencies {
     implementation "com.factset.sdk:factsetconcordance:0.9.0"
  }
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

- `target/factsetconcordance-0.9.0.jar`
- `target/lib/*.jar`

## Usage

To add a HTTP proxy for the API client, use `ClientConfig`:
```java

import org.glassfish.jersey.apache.connector.ApacheConnectorProvider;
import org.glassfish.jersey.client.ClientConfig;
import org.glassfish.jersey.client.ClientProperties;
import com.factset.sdk.FactSetConcordance.*;
import com.factset.sdk.FactSetConcordance.api.EntityMatchApi;

...

ApiClient defaultClient = Configuration.getDefaultApiClient();
ClientConfig clientConfig = defaultClient.getClientConfig();
clientConfig.connectorProvider(new ApacheConnectorProvider());
clientConfig.property(ClientProperties.PROXY_URI, "http://proxy_url_here");
clientConfig.property(ClientProperties.PROXY_USERNAME, "proxy_username");
clientConfig.property(ClientProperties.PROXY_PASSWORD, "proxy_password");
defaultClient.setClientConfig(clientConfig);

EntityMatchApi apiInstance = new EntityMatchApi(defaultClient);

```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.factset.sdk.FactSetConcordance.*;
import com.factset.sdk.FactSetConcordance.auth.*;
import com.factset.sdk.FactSetConcordance.models.*;
import com.factset.sdk.FactSetConcordance.api.EntityMatchApi;

public class EntityMatchApiExample {

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

        EntityMatchApi apiInstance = new EntityMatchApi(defaultClient);
        String name = "FactSet"; // String | Name of Entity to match.
        String country = "US"; // String | ISO2 country code corresponding to the entity name that is used when evaluating candidates for a match. For a list of ISO2 Country codes, visit [OA 8754](https://my.apps.factset.com/oa/pages/8754).
        String state = "CT"; // String | Two-character state code corresponding to the entity name that is used when evaluating candidates for a match. Currently, only US state codes are supported.
        String url = "url_example"; // String | URL corresponding to the entity name that is used when evaluating candidates for a match.
        java.util.List<String> includeEntityType = Arrays.asList(); // java.util.List<String> | Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Only candidates with an entity type specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---|   |ABS|Asset-Backed||MED|Broadcast Call Sign|   |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End|   |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF|   |CMD|Commodity||MUT|Mutual Fd-Open End|   |COL|College/University||NPO|Non-Profit Organization|   |CUR|Currency||OPD|Operating Division|   |ESP|Emp Stk Ownership Plan||OTH|Other|   |EXT|Extinct||PEF|Pension Fund|   |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property|   |FND|Foundation/Endowment||PUB|Public Company|   |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt|   |FRX|ForEx||PVT|Private Company|   |GOV|Government||SOV|Sovereign Wealth Fund|   |HED|Hedge Fund||SUB|Subsidiary|   |HOL|Holding Company||TRU|Trust/Trustee|   |IDX|Index||UMB|Umbrella Fund|   |VEN|Venture Capital Fund||JVT|Joint Venture| 
        java.util.List<String> excludeEntityType = Arrays.asList(); // java.util.List<String> | Three-character FactSet entity type code used to filter candidates in order to determine the final match result. Candidates with an entity type specified will *not* be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Type Code|Entity Type Description|Entity Type Code|Entity Type Description|   |---|---|---|---| |ABS|Asset-Backed||MED|Broadcast Call Sign| |BAS|Business Association (JP)||MUC|Mutual Fd-Closed End| |CAC|Consolidated Accounting||MUE|Mutual Fd-ETF| |CMD|Commodity||MUT|Mutual Fd-Open End| |COL|College/University||NPO|Non-Profit Organization| |CUR|Currency||OPD|Operating Division| |ESP|Emp Stk Ownership Plan||OTH|Other| |EXT|Extinct||PEF|Pension Fund| |FAF|Family of Fds (VC/Pvt EQ)||PRO|Real Property| |FND|Foundation/Endowment||PUB|Public Company| |FNS|Financing Subsidiary/SPE||PVF|Private Eq Fd/Alt Invt| |FRX|ForEx||PVT|Private Company| |GOV|Government||SOV|Sovereign Wealth Fund| |HED|Hedge Fund||SUB|Subsidiary| |HOL|Holding Company||TRU|Trust/Trustee| |IDX|Index||UMB|Umbrella Fund| |VEN|Venture Capital Fund||JVT|Joint Venture| 
        java.util.List<String> includeEntitySubType = Arrays.asList(); // java.util.List<String> | Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Only candidates with an entity subtype specified will be considered for the final match result. Multiple types can be entered separated by commas.   |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description|   |---|---|---|---|   |AR|Arbitrage|IC|Investment Company|   |BM|Bank Investment Division|IN|Insurance Company|   |BR|Broker|MF|Mutual Fund Manager|   |CP|Corporate|ML|Master Ltd Part|   |CU|Custodial|MM|Market Maker|   |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt|   |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager|   |FO|Foundation/Endowment Manager|PP|Real Estate Manager|   |FS|Fund Distributor|RE|Research Firm|   |FU|Fund|SB|Subsidiary Branch|   |FY|Family Office|ST|Stock Borrowing/Lending|   |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager|   |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity|   |IA|Investment Adviser|   |IB|Investment Banking| 
        java.util.List<String> excludeEntitySubType = Arrays.asList(); // java.util.List<String> | Two-character FactSet entity subtype code used to filter candidates in order to determine the final match result. Candidates with an entity subtype specified will not be considered for the final match result. Multiple types can be entered separated by commas. |Entity Subtype Code|Entity Subtype Description|Entity Subtype Code|Entity Subtype Description| |---|---|---|---| |AR|Arbitrage|IC|Investment Company| |BM|Bank Investment Division|IN|Insurance Company| |BR|Broker|MF|Mutual Fund Manager| |CP|Corporate|ML|Master Ltd Part| |CU|Custodial|MM|Market Maker| |FF|Fund of Funds Manager|PB|Private Banking/Wealth Mgmt| |FH|Fund of Hedge Funds Manager|PF|Pension Fund Manager| |FO|Foundation/Endowment Manager|PP|Real Estate Manager| |FS|Fund Distributor|RE|Research Firm| |FU|Fund|SB|Subsidiary Branch| |FY|Family Office|ST|Stock Borrowing/Lending| |GV|Govt (Fed/Local/Agency)|SV|Sovereign Wealth Manager| |HF|Hedge Fund Manager|VC|Venture Capital/Pvt Equity| |IA|Investment Adviser| |IB|Investment Banking| 
        Boolean includeParent = false; // Boolean | Flag to include parent entities in the list of candidates. This parameter does not influence the match result.
        try {
            EntityMatchesResponse result = apiInstance.getEntityMatch(name, country, state, url, includeEntityType, excludeEntityType, includeEntitySubType, excludeEntitySubType, includeParent);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling EntityMatchApi#getEntityMatch");
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
*EntityMatchApi* | [**getEntityMatch**](docs/EntityMatchApi.md#getEntityMatch) | **GET** /factset-concordance/v2/entity-match | Get Entity Candidates and Matches for a single name and attributes.
*EntityMatchApi* | [**getEntityMatchForList**](docs/EntityMatchApi.md#getEntityMatchForList) | **POST** /factset-concordance/v2/entity-match | Get a list of Entity Candidates and Matches for a requested list of up to 25 names and attributes.
*EntityMatchBulkApi* | [**getEntityDecisions**](docs/EntityMatchBulkApi.md#getEntityDecisions) | **GET** /factset-concordance/v2/entity-decisions | Get the decisions of matches for the requested taskId.
*EntityMatchBulkApi* | [**getEntityTaskForList**](docs/EntityMatchBulkApi.md#getEntityTaskForList) | **POST** /factset-concordance/v2/entity-task | Input a file with names and attributes, creating a taskId.
*EntityMatchBulkApi* | [**getEntityTaskStatus**](docs/EntityMatchBulkApi.md#getEntityTaskStatus) | **GET** /factset-concordance/v2/entity-task-status | Gets the status of the requested taskId or all tasks for a User
*MappingsApi* | [**getEntityMappingDeleteForList**](docs/MappingsApi.md#getEntityMappingDeleteForList) | **POST** /factset-concordance/v2/entity-mapping-delete | Deletes mapping specified by the client.
*MappingsApi* | [**getEntityMappingForList**](docs/MappingsApi.md#getEntityMappingForList) | **POST** /factset-concordance/v2/entity-mapping | Saves a single-mapping specified by the client.
*MappingsApi* | [**getEntityUniverse**](docs/MappingsApi.md#getEntityUniverse) | **GET** /factset-concordance/v2/entity-universe | Retrieve all saved mappings within a requested universe
*MappingsApi* | [**getEntityUniverseForList**](docs/MappingsApi.md#getEntityUniverseForList) | **POST** /factset-concordance/v2/entity-universe | Retrieve all saved mappings within a requested universe or large list of client ids
*SnowflakeApi* | [**getSnowflakeEntityMatchForList**](docs/SnowflakeApi.md#getSnowflakeEntityMatchForList) | **POST** /factset-concordance/v2/snowflake-entity-match | Perform an entity search and return a snowflake-friendly response. Up to 25 Names per request.
*UniversesApi* | [**getEntityUniverseStatistics**](docs/UniversesApi.md#getEntityUniverseStatistics) | **GET** /factset-concordance/v2/entity-universe-statistics | Get statistics on a given universe
*UniversesApi* | [**getUniverseForList**](docs/UniversesApi.md#getUniverseForList) | **POST** /factset-concordance/v2/universe | Create a new universe
*UniversesApi* | [**getUniverses**](docs/UniversesApi.md#getUniverses) | **GET** /factset-concordance/v2/universes | Fetch metadata for universes
*UniversesApi* | [**getUpdateUniverseForList**](docs/UniversesApi.md#getUpdateUniverseForList) | **POST** /factset-concordance/v2/update-universe | Update metadata for an existing universe


## Documentation for Models

 - [CreateUniverseRequest](docs/CreateUniverseRequest.md)
 - [EntityDecisionsResponse](docs/EntityDecisionsResponse.md)
 - [EntityMapping](docs/EntityMapping.md)
 - [EntityMappingDeleteRequest](docs/EntityMappingDeleteRequest.md)
 - [EntityMappingDeleteResponse](docs/EntityMappingDeleteResponse.md)
 - [EntityMappingRequest](docs/EntityMappingRequest.md)
 - [EntityMappingResponse](docs/EntityMappingResponse.md)
 - [EntityMatch](docs/EntityMatch.md)
 - [EntityMatchRequest](docs/EntityMatchRequest.md)
 - [EntityMatchRequestInput](docs/EntityMatchRequestInput.md)
 - [EntityMatchesResponse](docs/EntityMatchesResponse.md)
 - [EntityResponse](docs/EntityResponse.md)
 - [EntityTaskResponse](docs/EntityTaskResponse.md)
 - [EntityTaskStatus](docs/EntityTaskStatus.md)
 - [EntityTaskStatusResponse](docs/EntityTaskStatusResponse.md)
 - [EntityUniverseRequest](docs/EntityUniverseRequest.md)
 - [EntityUniverseResponse](docs/EntityUniverseResponse.md)
 - [EntityUniverseStatisticsResponse](docs/EntityUniverseStatisticsResponse.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [MapStatus](docs/MapStatus.md)
 - [SnowflakeEntityMatchRequest](docs/SnowflakeEntityMatchRequest.md)
 - [SnowflakeEntityMatchResponse](docs/SnowflakeEntityMatchResponse.md)
 - [UniverseMeta](docs/UniverseMeta.md)
 - [UniverseMetaResponse](docs/UniverseMetaResponse.md)
 - [UniverseStatistics](docs/UniverseStatistics.md)
 - [UniversesResponse](docs/UniversesResponse.md)
 - [UpdateUniverseRequest](docs/UpdateUniverseRequest.md)


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
