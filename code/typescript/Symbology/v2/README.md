# @factset/sdk-symbology

symbology - JavaScript client for @factset/sdk-symbology
The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and Bloomberg FIGIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as of a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time.</p>

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.1.1
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factset/sdk-symbology --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-symbology from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g. <https://github.com/GIT_USER_ID/GIT_REPO_ID>
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const { ApiClient, BloombergFIGIApi } = require('@factset/sdk-symbology');
const { ConfidentialClient } = require('@factset/sdk-utils');

const apiClient = ApiClient.instance;

// Configure HTTP basic authorization: FactSetApiKey
const FactSetApiKey = apiClient.authentications['FactSetApiKey'];
FactSetApiKey.username = 'YOUR USERNAME';
FactSetApiKey.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: FactSetOAuth2
const FactSetOAuth2 = apiClient.authentications['FactSetOAuth2'];
FactSetOAuth2.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access with ConfidentialClient
apiClient.factsetOauth2Client = new ConfidentialClient('./config.json');

const apiInstance = new BloombergFIGIApi();
const bloombergTranslationRequest = new symbology.BloombergTranslationRequest(); // BloombergTranslationRequest | Request Body for Bloomberg FIGIs.

// Call api endpoint
apiInstance.batchTranslateBloomberg(bloombergTranslationRequest).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


## Documentation for API Endpoints

All URIs are relative to *https://api.factset.com/content*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*symbology.BloombergFIGIApi* | [**batchTranslateBloomberg**](docs/BloombergFIGIApi.md#batchTranslateBloomberg) | **POST** /symbology/v2/bloomberg | Translate market security symbols into Bloomberg Identifiers.
*symbology.BloombergFIGIApi* | [**translateBloomberg**](docs/BloombergFIGIApi.md#translateBloomberg) | **GET** /symbology/v2/bloomberg | Translate market security symbols into Bloomberg Identifiers.
*symbology.CUSIPApi* | [**batchCusipHistory**](docs/CUSIPApi.md#batchCusipHistory) | **POST** /symbology/v2/cusip-history | Retrieve the full history or as of a specific date of CUSIP changes for the requested ID(s).
*symbology.CUSIPApi* | [**batchTranslateCusips**](docs/CUSIPApi.md#batchTranslateCusips) | **POST** /symbology/v2/cusip | Translate market security symbols into CUSIP - Current Only
*symbology.CUSIPApi* | [**cusipHistory**](docs/CUSIPApi.md#cusipHistory) | **GET** /symbology/v2/cusip-history | Retrieve the full history or as of a requested date of CUSIP changes for the requested ID(s).
*symbology.CUSIPApi* | [**translateCusip**](docs/CUSIPApi.md#translateCusip) | **GET** /symbology/v2/cusip | Translate market security symbols into CUSIPs - Current Only
*symbology.FactSetApi* | [**batchTranslateFactSet**](docs/FactSetApi.md#batchTranslateFactSet) | **POST** /symbology/v2/factset | Translate market security symbols into FactSet Permanent Identifiers
*symbology.FactSetApi* | [**batchTranslateFactSetAdvanced**](docs/FactSetApi.md#batchTranslateFactSetAdvanced) | **POST** /symbology/v2/factset-advanced | Translate advanced symbol types into FactSet Permanent Identifiers
*symbology.FactSetApi* | [**translateFactset**](docs/FactSetApi.md#translateFactset) | **GET** /symbology/v2/factset | Translate market security symbols into FactSet Permanent Identifiers.
*symbology.FactSetApi* | [**translateFactsetAdvanced**](docs/FactSetApi.md#translateFactsetAdvanced) | **GET** /symbology/v2/factset-advanced | Translate advanced symbol types into FactSet Permanent Identifiers
*symbology.ISINApi* | [**batchIsinHistory**](docs/ISINApi.md#batchIsinHistory) | **POST** /symbology/v2/isin-history | Translate Market IDs into ISINS as of a specific date or receive the full history of changes.
*symbology.ISINApi* | [**batchTranslateIsin**](docs/ISINApi.md#batchTranslateIsin) | **POST** /symbology/v2/isin | Translate market security symbols into ISIN. - Current Only
*symbology.ISINApi* | [**isinHistory**](docs/ISINApi.md#isinHistory) | **GET** /symbology/v2/isin-history | Translate Market IDs into ISINS as of a specific date or receive the full history of changes.
*symbology.ISINApi* | [**translateIsin**](docs/ISINApi.md#translateIsin) | **GET** /symbology/v2/isin | Translate market security symbols into ISIN. - Current Only
*symbology.SEDOLApi* | [**batchSedolHistory**](docs/SEDOLApi.md#batchSedolHistory) | **POST** /symbology/v2/sedol-history | Retrieve the full history or as of a specific date of SEDOL changes for a requested ID.
*symbology.SEDOLApi* | [**batchTranslateSedol**](docs/SEDOLApi.md#batchTranslateSedol) | **POST** /symbology/v2/sedol | Translate market security symbols into SEDOL. - Current Only
*symbology.SEDOLApi* | [**sedolHistory**](docs/SEDOLApi.md#sedolHistory) | **GET** /symbology/v2/sedol-history | Retrieve the full history or as of a specific date of SEDOL changes for the requested ID(s).
*symbology.SEDOLApi* | [**translateSedol**](docs/SEDOLApi.md#translateSedol) | **GET** /symbology/v2/sedol | Translate market security symbols into SEDOL. - Current Only
*symbology.TickerApi* | [**batchTickerHistory**](docs/TickerApi.md#batchTickerHistory) | **POST** /symbology/v2/ticker-history | Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security.
*symbology.TickerApi* | [**batchTranslateTicker**](docs/TickerApi.md#batchTranslateTicker) | **POST** /symbology/v2/ticker | Returns the Ticker-Exchange or Ticker-Region for a given security.
*symbology.TickerApi* | [**tickerHistory**](docs/TickerApi.md#tickerHistory) | **GET** /symbology/v2/ticker-history | Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security.
*symbology.TickerApi* | [**translateTicker**](docs/TickerApi.md#translateTicker) | **GET** /symbology/v2/ticker | Returns the Ticker-Exchange or Ticker-Region for a given security. - Current Only


## Documentation for Models

 - [symbology.BloombergTranslation](docs/BloombergTranslation.md)
 - [symbology.BloombergTranslationRequest](docs/BloombergTranslationRequest.md)
 - [symbology.BloombergTranslationResponse](docs/BloombergTranslationResponse.md)
 - [symbology.CusipHistoryResponse](docs/CusipHistoryResponse.md)
 - [symbology.CusipHistoryTranslation](docs/CusipHistoryTranslation.md)
 - [symbology.CusipHistoryTranslationRequest](docs/CusipHistoryTranslationRequest.md)
 - [symbology.CusipTranslation](docs/CusipTranslation.md)
 - [symbology.CusipTranslationRequest](docs/CusipTranslationRequest.md)
 - [symbology.CusipTranslationResponse](docs/CusipTranslationResponse.md)
 - [symbology.ErrorResponse](docs/ErrorResponse.md)
 - [symbology.ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [symbology.FactsetTranslation](docs/FactsetTranslation.md)
 - [symbology.FactsetTranslationAdvanced](docs/FactsetTranslationAdvanced.md)
 - [symbology.FactsetTranslationAdvancedRequest](docs/FactsetTranslationAdvancedRequest.md)
 - [symbology.FactsetTranslationAdvancedResponse](docs/FactsetTranslationAdvancedResponse.md)
 - [symbology.FactsetTranslationRequest](docs/FactsetTranslationRequest.md)
 - [symbology.FactsetTranslationResponse](docs/FactsetTranslationResponse.md)
 - [symbology.GetSymbolType](docs/GetSymbolType.md)
 - [symbology.IsinHistoryTranslation](docs/IsinHistoryTranslation.md)
 - [symbology.IsinHistoryTranslationRequest](docs/IsinHistoryTranslationRequest.md)
 - [symbology.IsinHistoryTranslationResponse](docs/IsinHistoryTranslationResponse.md)
 - [symbology.IsinTranslation](docs/IsinTranslation.md)
 - [symbology.IsinTranslationRequest](docs/IsinTranslationRequest.md)
 - [symbology.IsinTranslationResponse](docs/IsinTranslationResponse.md)
 - [symbology.SedolHistoryTranslation](docs/SedolHistoryTranslation.md)
 - [symbology.SedolHistoryTranslationRequest](docs/SedolHistoryTranslationRequest.md)
 - [symbology.SedolHistoryTranslationResponse](docs/SedolHistoryTranslationResponse.md)
 - [symbology.SedolTranslation](docs/SedolTranslation.md)
 - [symbology.SedolTranslationRequest](docs/SedolTranslationRequest.md)
 - [symbology.SedolTranslationResponse](docs/SedolTranslationResponse.md)
 - [symbology.TickerHistoryTranslation](docs/TickerHistoryTranslation.md)
 - [symbology.TickerHistoryTranslationRequest](docs/TickerHistoryTranslationRequest.md)
 - [symbology.TickerHistoryTranslationResponse](docs/TickerHistoryTranslationResponse.md)
 - [symbology.TickerTranslation](docs/TickerTranslation.md)
 - [symbology.TickerTranslationRequest](docs/TickerTranslationRequest.md)
 - [symbology.TickerTranslationResponse](docs/TickerTranslationResponse.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
