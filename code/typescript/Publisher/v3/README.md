# @factset/sdk-publisher

publisher - JavaScript client for @factset/sdk-publisher
Allow clients to fetch Publisher Analytics through APIs.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://developer.factset.com/contact](https://developer.factset.com/contact)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factset/sdk-publisher --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-publisher from, and run:

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
const { ApiClient, AccountsApi } = require('@factset/sdk-publisher');
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

const apiInstance = new AccountsApi();
const path = "'Client:Foo/Bar'"; // String | The directory to get the accounts and sub-directories in

// Call api endpoint
apiInstance.getAccounts(path).then(
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

All URIs are relative to *https://api.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*publisher.AccountsApi* | [**getAccounts**](docs/AccountsApi.md#getAccounts) | **GET** /analytics/lookups/v3/accounts/{path} | Get accounts and sub-directories in a directory
*publisher.CurrenciesApi* | [**getCurrencies**](docs/CurrenciesApi.md#getCurrencies) | **GET** /analytics/lookups/v3/currencies | Get currencies
*publisher.DocumentsApi* | [**getPubDocuments**](docs/DocumentsApi.md#getPubDocuments) | **GET** /analytics/engines/pub/v3/documents/{path} | Gets Publisher documents and sub-directories in a directory
*publisher.PubCalculationsApi* | [**cancelCalculationById**](docs/PubCalculationsApi.md#cancelCalculationById) | **DELETE** /analytics/engines/pub/v3/calculations/{id} | Cancel Pub calculation by id
*publisher.PubCalculationsApi* | [**getCalculationParameters**](docs/PubCalculationsApi.md#getCalculationParameters) | **GET** /analytics/engines/pub/v3/calculations/{id} | Get Pub calculation parameters by id
*publisher.PubCalculationsApi* | [**getCalculationStatusById**](docs/PubCalculationsApi.md#getCalculationStatusById) | **GET** /analytics/engines/pub/v3/calculations/{id}/status | Get Pub calculation status by id
*publisher.PubCalculationsApi* | [**getCalculationUnitResultById**](docs/PubCalculationsApi.md#getCalculationUnitResultById) | **GET** /analytics/engines/pub/v3/calculations/{id}/units/{unitId}/result | Get Pub calculation result by id
*publisher.PubCalculationsApi* | [**postAndCalculate**](docs/PubCalculationsApi.md#postAndCalculate) | **POST** /analytics/engines/pub/v3/calculations | Create and Run Pub calculation
*publisher.PubCalculationsApi* | [**putAndCalculate**](docs/PubCalculationsApi.md#putAndCalculate) | **PUT** /analytics/engines/pub/v3/calculations/{id} | Create or Update Pub calculation and run it.


## Documentation for Models

 - [publisher.AccountDirectories](docs/AccountDirectories.md)
 - [publisher.AccountDirectoriesRoot](docs/AccountDirectoriesRoot.md)
 - [publisher.CalculationStatus](docs/CalculationStatus.md)
 - [publisher.CalculationStatusRoot](docs/CalculationStatusRoot.md)
 - [publisher.CalculationUnitStatus](docs/CalculationUnitStatus.md)
 - [publisher.ClientErrorResponse](docs/ClientErrorResponse.md)
 - [publisher.Currency](docs/Currency.md)
 - [publisher.CurrencyRoot](docs/CurrencyRoot.md)
 - [publisher.DocumentDirectories](docs/DocumentDirectories.md)
 - [publisher.DocumentDirectoriesRoot](docs/DocumentDirectoriesRoot.md)
 - [publisher.Error](docs/Error.md)
 - [publisher.ErrorSource](docs/ErrorSource.md)
 - [publisher.ObjectRoot](docs/ObjectRoot.md)
 - [publisher.PubCalculationParameters](docs/PubCalculationParameters.md)
 - [publisher.PubCalculationParametersRoot](docs/PubCalculationParametersRoot.md)
 - [publisher.PubDateParameters](docs/PubDateParameters.md)
 - [publisher.PubIdentifier](docs/PubIdentifier.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
