# @factset/sdk-axiomafixedincomeoptimizer

axiomafixedincomeoptimizer - JavaScript client for @factset/sdk-axiomafixedincomeoptimizer
Allow clients to fetch Analytics through APIs.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v3
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://developer.factset.com/contact](https://developer.factset.com/contact)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factset/sdk-axiomafixedincomeoptimizer --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-axiomafixedincomeoptimizer from, and run:

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
const { ApiClient, AFIOptimizerApi } = require('@factset/sdk-axiomafixedincomeoptimizer');
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

const apiInstance = new AFIOptimizerApi();
const id = "id_example"; // String | from url, provided from the location header in the Create and Run AFI optimization endpoint

// Call api endpoint
apiInstance.cancelOptimizationById(id).then(
  () => {
    console.log('API called successfully.');
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
*axiomafixedincomeoptimizer.AFIOptimizerApi* | [**cancelOptimizationById**](docs/AFIOptimizerApi.md#cancelOptimizationById) | **DELETE** /analytics/engines/afi/v3/optimizations/{id} | Cancel AFI optimization by id
*axiomafixedincomeoptimizer.AFIOptimizerApi* | [**getOptimizationParameters**](docs/AFIOptimizerApi.md#getOptimizationParameters) | **GET** /analytics/engines/afi/v3/optimizations/{id} | Get AFI optimization parameters by id
*axiomafixedincomeoptimizer.AFIOptimizerApi* | [**getOptimizationResult**](docs/AFIOptimizerApi.md#getOptimizationResult) | **GET** /analytics/engines/afi/v3/optimizations/{id}/result | Get AFI optimization result by id
*axiomafixedincomeoptimizer.AFIOptimizerApi* | [**getOptimizationStatusById**](docs/AFIOptimizerApi.md#getOptimizationStatusById) | **GET** /analytics/engines/afi/v3/optimizations/{id}/status | Get AFI optimization status by id
*axiomafixedincomeoptimizer.AFIOptimizerApi* | [**postAndOptimize**](docs/AFIOptimizerApi.md#postAndOptimize) | **POST** /analytics/engines/afi/v3/optimizations | Create and Run AFI optimization
*axiomafixedincomeoptimizer.AFIOptimizerApi* | [**putAndOptimize**](docs/AFIOptimizerApi.md#putAndOptimize) | **PUT** /analytics/engines/afi/v3/optimizations/{id} | Create or Update AFI optimization and run it.
*axiomafixedincomeoptimizer.StrategyDocumentsApi* | [**getAxiomaFIStrategyDocuments**](docs/StrategyDocumentsApi.md#getAxiomaFIStrategyDocuments) | **GET** /analytics/engines/afi/v3/strategies/{path} | Get Axioma FI strategy documents and sub-directories in a directory


## Documentation for Models

 - [axiomafixedincomeoptimizer.AFIOptimizationParameters](docs/AFIOptimizationParameters.md)
 - [axiomafixedincomeoptimizer.AFIOptimizationParametersRoot](docs/AFIOptimizationParametersRoot.md)
 - [axiomafixedincomeoptimizer.AFIOptimizerStrategy](docs/AFIOptimizerStrategy.md)
 - [axiomafixedincomeoptimizer.AFIOptimizerStrategyOverrides](docs/AFIOptimizerStrategyOverrides.md)
 - [axiomafixedincomeoptimizer.CalculationInfo](docs/CalculationInfo.md)
 - [axiomafixedincomeoptimizer.CalculationInfoRoot](docs/CalculationInfoRoot.md)
 - [axiomafixedincomeoptimizer.ClientErrorResponse](docs/ClientErrorResponse.md)
 - [axiomafixedincomeoptimizer.DocumentDirectories](docs/DocumentDirectories.md)
 - [axiomafixedincomeoptimizer.DocumentDirectoriesRoot](docs/DocumentDirectoriesRoot.md)
 - [axiomafixedincomeoptimizer.Error](docs/Error.md)
 - [axiomafixedincomeoptimizer.ErrorSource](docs/ErrorSource.md)
 - [axiomafixedincomeoptimizer.ObjectRoot](docs/ObjectRoot.md)
 - [axiomafixedincomeoptimizer.OptimalPortfolio](docs/OptimalPortfolio.md)
 - [axiomafixedincomeoptimizer.Optimization](docs/Optimization.md)
 - [axiomafixedincomeoptimizer.OptimizerAccount](docs/OptimizerAccount.md)
 - [axiomafixedincomeoptimizer.OptimizerAccountOverrides](docs/OptimizerAccountOverrides.md)
 - [axiomafixedincomeoptimizer.OptimizerOptimalHoldings](docs/OptimizerOptimalHoldings.md)
 - [axiomafixedincomeoptimizer.OptimizerOutputTypes](docs/OptimizerOutputTypes.md)
 - [axiomafixedincomeoptimizer.OptimizerTradesList](docs/OptimizerTradesList.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
