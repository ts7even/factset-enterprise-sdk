# @factset/sdk-quantitativeresearchenvironment

quantitativeresearchenvironment - JavaScript client for @factset/sdk-quantitativeresearchenvironment
TBD
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.0
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factset/sdk-quantitativeresearchenvironment --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-quantitativeresearchenvironment from, and run:

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
const { ApiClient, CalculationsApi } = require('@factset/sdk-quantitativeresearchenvironment');
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

const apiInstance = new CalculationsApi();
const id = "id_example"; // String | From url, provided by location header or response body in the calculation start endpoint

// Call api endpoint
apiInstance.analyticsQuantQreV1CalculationsIdGet(id).then(
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
*quantitativeresearchenvironment.CalculationsApi* | [**analyticsQuantQreV1CalculationsIdGet**](docs/CalculationsApi.md#analyticsQuantQreV1CalculationsIdGet) | **GET** /analytics/quant/qre/v1/calculations/{id} | Get calculation status by id
*quantitativeresearchenvironment.CalculationsApi* | [**analyticsQuantQreV1CalculationsIdLogGet**](docs/CalculationsApi.md#analyticsQuantQreV1CalculationsIdLogGet) | **GET** /analytics/quant/qre/v1/calculations/{id}/log | Get calculation log for a specific calculation
*quantitativeresearchenvironment.CalculationsApi* | [**analyticsQuantQreV1CalculationsIdOutputGet**](docs/CalculationsApi.md#analyticsQuantQreV1CalculationsIdOutputGet) | **GET** /analytics/quant/qre/v1/calculations/{id}/output | Get calculation output for a specific calculation
*quantitativeresearchenvironment.CalculationsApi* | [**analyticsQuantQreV1CalculationsPost**](docs/CalculationsApi.md#analyticsQuantQreV1CalculationsPost) | **POST** /analytics/quant/qre/v1/calculations | Starts a new script calculation
*quantitativeresearchenvironment.FilesApi* | [**analyticsQuantQreV1FilesServerFilePost**](docs/FilesApi.md#analyticsQuantQreV1FilesServerFilePost) | **POST** /analytics/quant/qre/v1/files/{server}/{file} | Starts a file upload
*quantitativeresearchenvironment.FilesApi* | [**analyticsQuantQreV1FilesUploadsIdGet**](docs/FilesApi.md#analyticsQuantQreV1FilesUploadsIdGet) | **GET** /analytics/quant/qre/v1/files/uploads/{id} | Get upload status by id


## Documentation for Models

 - [quantitativeresearchenvironment.Calculation](docs/Calculation.md)
 - [quantitativeresearchenvironment.CalculationStatus](docs/CalculationStatus.md)
 - [quantitativeresearchenvironment.FileUploadStatus](docs/FileUploadStatus.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
