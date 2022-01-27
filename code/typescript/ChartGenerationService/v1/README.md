# @factset/sdk-chartgenerationservice

chartgenerationservice - JavaScript client for @factset/sdk-chartgenerationservice
This is a service for generating charts in a node environment that were created using web charting and get back images in form of `PNGs` and `JPEGs` as response.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factset/sdk-chartgenerationservice --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-chartgenerationservice from, and run:

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
const { ApiClient, ChartTemplatesApi } = require('@factset/sdk-chartgenerationservice');
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

const apiInstance = new ChartTemplatesApi();

// Call api endpoint
apiInstance.getCategoryList().then(
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

All URIs are relative to *https://api-sandbox.factset.com/charting*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*chartgenerationservice.ChartTemplatesApi* | [**getCategoryList**](docs/ChartTemplatesApi.md#getCategoryList) | **GET** /v1/catalog/categories | Get a list of chart categories
*chartgenerationservice.ChartTemplatesApi* | [**getChartList**](docs/ChartTemplatesApi.md#getChartList) | **GET** /v1/catalog/charts | Get a list of chart templates that can be used for getting the image from the service.
*chartgenerationservice.ChartTemplatesApi* | [**images**](docs/ChartTemplatesApi.md#images) | **GET** /v1/image | Get chart image back in PNG or JPEG formats


## Documentation for Models

 - [chartgenerationservice.CategoriesErrorResponse](docs/CategoriesErrorResponse.md)
 - [chartgenerationservice.ChartInput](docs/ChartInput.md)
 - [chartgenerationservice.ChartList](docs/ChartList.md)
 - [chartgenerationservice.ChartListErrorResponse](docs/ChartListErrorResponse.md)
 - [chartgenerationservice.ErrorResponse](docs/ErrorResponse.md)
 - [chartgenerationservice.UnauthorizedResponse](docs/UnauthorizedResponse.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
