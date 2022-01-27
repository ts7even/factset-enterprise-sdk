# @factset/sdk-barraportfoliooptimizer

barraportfoliooptimizer - JavaScript client for @factset/sdk-barraportfoliooptimizer
Allow clients to fetch Analytics through APIs.
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
npm install @factset/sdk-barraportfoliooptimizer --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-barraportfoliooptimizer from, and run:

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
const { ApiClient, AccountsApi } = require('@factset/sdk-barraportfoliooptimizer');
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
*barraportfoliooptimizer.AccountsApi* | [**getAccounts**](docs/AccountsApi.md#getAccounts) | **GET** /analytics/lookups/v3/accounts/{path} | Get accounts and sub-directories in a directory
*barraportfoliooptimizer.BPMOptimizerApi* | [**cancelOptimizationById**](docs/BPMOptimizerApi.md#cancelOptimizationById) | **DELETE** /analytics/engines/bpm/v3/optimizations/{id} | Cancel BPM optimization by id
*barraportfoliooptimizer.BPMOptimizerApi* | [**getOptimizationParameters**](docs/BPMOptimizerApi.md#getOptimizationParameters) | **GET** /analytics/engines/bpm/v3/optimizations/{id} | Get BPM optimization parameters by id
*barraportfoliooptimizer.BPMOptimizerApi* | [**getOptimizationResult**](docs/BPMOptimizerApi.md#getOptimizationResult) | **GET** /analytics/engines/bpm/v3/optimizations/{id}/result | Get BPM optimization result by id
*barraportfoliooptimizer.BPMOptimizerApi* | [**getOptimizationStatusById**](docs/BPMOptimizerApi.md#getOptimizationStatusById) | **GET** /analytics/engines/bpm/v3/optimizations/{id}/status | Get BPM optimization status by id
*barraportfoliooptimizer.BPMOptimizerApi* | [**postAndOptimize**](docs/BPMOptimizerApi.md#postAndOptimize) | **POST** /analytics/engines/bpm/v3/optimizations | Create and Run BPM optimization
*barraportfoliooptimizer.BPMOptimizerApi* | [**putAndOptimize**](docs/BPMOptimizerApi.md#putAndOptimize) | **PUT** /analytics/engines/bpm/v3/optimizations/{id} | Create or Update BPM optimization and run it.
*barraportfoliooptimizer.CurrenciesApi* | [**getCurrencies**](docs/CurrenciesApi.md#getCurrencies) | **GET** /analytics/lookups/v3/currencies | Get currencies
*barraportfoliooptimizer.StrategyDocumentsApi* | [**getBarraStrategyDocuments**](docs/StrategyDocumentsApi.md#getBarraStrategyDocuments) | **GET** /analytics/engines/bpm/v3/strategies/{path} | Get Barra strategy documents and sub-directories in a directory


## Documentation for Models

 - [barraportfoliooptimizer.AccountDirectories](docs/AccountDirectories.md)
 - [barraportfoliooptimizer.AccountDirectoriesRoot](docs/AccountDirectoriesRoot.md)
 - [barraportfoliooptimizer.BPMOptimization](docs/BPMOptimization.md)
 - [barraportfoliooptimizer.BPMOptimizationParameters](docs/BPMOptimizationParameters.md)
 - [barraportfoliooptimizer.BPMOptimizationParametersRoot](docs/BPMOptimizationParametersRoot.md)
 - [barraportfoliooptimizer.BPMOptimizerStrategy](docs/BPMOptimizerStrategy.md)
 - [barraportfoliooptimizer.BPMOptimizerStrategyAlphaOverride](docs/BPMOptimizerStrategyAlphaOverride.md)
 - [barraportfoliooptimizer.BPMOptimizerStrategyOverrides](docs/BPMOptimizerStrategyOverrides.md)
 - [barraportfoliooptimizer.CalculationInfo](docs/CalculationInfo.md)
 - [barraportfoliooptimizer.CalculationInfoRoot](docs/CalculationInfoRoot.md)
 - [barraportfoliooptimizer.ClientErrorResponse](docs/ClientErrorResponse.md)
 - [barraportfoliooptimizer.ConstraintAction](docs/ConstraintAction.md)
 - [barraportfoliooptimizer.Currency](docs/Currency.md)
 - [barraportfoliooptimizer.CurrencyRoot](docs/CurrencyRoot.md)
 - [barraportfoliooptimizer.DocumentDirectories](docs/DocumentDirectories.md)
 - [barraportfoliooptimizer.DocumentDirectoriesRoot](docs/DocumentDirectoriesRoot.md)
 - [barraportfoliooptimizer.Error](docs/Error.md)
 - [barraportfoliooptimizer.ErrorSource](docs/ErrorSource.md)
 - [barraportfoliooptimizer.ObjectRoot](docs/ObjectRoot.md)
 - [barraportfoliooptimizer.OptimalPortfolio](docs/OptimalPortfolio.md)
 - [barraportfoliooptimizer.OptimizerAccount](docs/OptimizerAccount.md)
 - [barraportfoliooptimizer.OptimizerAccountOverrides](docs/OptimizerAccountOverrides.md)
 - [barraportfoliooptimizer.OptimizerOptimalHoldings](docs/OptimizerOptimalHoldings.md)
 - [barraportfoliooptimizer.OptimizerOutputTypes](docs/OptimizerOutputTypes.md)
 - [barraportfoliooptimizer.OptimizerTradesList](docs/OptimizerTradesList.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
