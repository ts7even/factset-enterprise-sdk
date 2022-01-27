# @factset/sdk-pricealertingapifordigitalportals

pricealertingapifordigitalportals - JavaScript client for @factset/sdk-pricealertingapifordigitalportals
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: v1
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factset/sdk-pricealertingapifordigitalportals --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-pricealertingapifordigitalportals from, and run:

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
const { ApiClient, AlertingApi } = require('@factset/sdk-pricealertingapifordigitalportals');
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

const apiInstance = new AlertingApi();
const id = "id_example"; // String | Identifier of the alert.
const opts = {
  'attributes': ["null"] // [String] | Limit the attributes returned in the response to the specified set.
};

// Call api endpoint
apiInstance.getAlertingPricesBasicAlertGet(id, opts).then(
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

All URIs are relative to *http://api.factset.com/wealth/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*pricealertingapifordigitalportals.AlertingApi* | [**getAlertingPricesBasicAlertGet**](docs/AlertingApi.md#getAlertingPricesBasicAlertGet) | **GET** /alerting/prices/basic/alert/get | Details of an alert.
*pricealertingapifordigitalportals.AlertingApi* | [**getAlertingPricesBasicAlertList**](docs/AlertingApi.md#getAlertingPricesBasicAlertList) | **GET** /alerting/prices/basic/alert/list | List of alerts.
*pricealertingapifordigitalportals.AlertingApi* | [**getAlertingPricesBasicTriggerGet**](docs/AlertingApi.md#getAlertingPricesBasicTriggerGet) | **GET** /alerting/prices/basic/trigger/get | Details of a trigger.
*pricealertingapifordigitalportals.AlertingApi* | [**postAlertingPricesBasicTriggerList**](docs/AlertingApi.md#postAlertingPricesBasicTriggerList) | **POST** /alerting/prices/basic/trigger/list | List of triggers.


## Documentation for Models

 - [pricealertingapifordigitalportals.AlertingPricesBasicTriggerListData](docs/AlertingPricesBasicTriggerListData.md)
 - [pricealertingapifordigitalportals.AlertingPricesBasicTriggerListDataFilter](docs/AlertingPricesBasicTriggerListDataFilter.md)
 - [pricealertingapifordigitalportals.AlertingPricesBasicTriggerListDataFilterStatus](docs/AlertingPricesBasicTriggerListDataFilterStatus.md)
 - [pricealertingapifordigitalportals.AlertingPricesBasicTriggerListMeta](docs/AlertingPricesBasicTriggerListMeta.md)
 - [pricealertingapifordigitalportals.AlertingPricesBasicTriggerListMetaPagination](docs/AlertingPricesBasicTriggerListMetaPagination.md)
 - [pricealertingapifordigitalportals.CursorBasedPaginationOutputObject](docs/CursorBasedPaginationOutputObject.md)
 - [pricealertingapifordigitalportals.CursorBasedPaginationOutputObjectWithoutTotal](docs/CursorBasedPaginationOutputObjectWithoutTotal.md)
 - [pricealertingapifordigitalportals.ErrorMetaObject](docs/ErrorMetaObject.md)
 - [pricealertingapifordigitalportals.InlineObject](docs/InlineObject.md)
 - [pricealertingapifordigitalportals.InlineResponse200](docs/InlineResponse200.md)
 - [pricealertingapifordigitalportals.InlineResponse2001](docs/InlineResponse2001.md)
 - [pricealertingapifordigitalportals.InlineResponse2001Data](docs/InlineResponse2001Data.md)
 - [pricealertingapifordigitalportals.InlineResponse2001Meta](docs/InlineResponse2001Meta.md)
 - [pricealertingapifordigitalportals.InlineResponse2001Trigger](docs/InlineResponse2001Trigger.md)
 - [pricealertingapifordigitalportals.InlineResponse2001TriggerPrice](docs/InlineResponse2001TriggerPrice.md)
 - [pricealertingapifordigitalportals.InlineResponse2001TriggerStatus](docs/InlineResponse2001TriggerStatus.md)
 - [pricealertingapifordigitalportals.InlineResponse2002](docs/InlineResponse2002.md)
 - [pricealertingapifordigitalportals.InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [pricealertingapifordigitalportals.InlineResponse2003](docs/InlineResponse2003.md)
 - [pricealertingapifordigitalportals.InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [pricealertingapifordigitalportals.InlineResponse2003Range](docs/InlineResponse2003Range.md)
 - [pricealertingapifordigitalportals.InlineResponse200Data](docs/InlineResponse200Data.md)
 - [pricealertingapifordigitalportals.InlineResponse200DataPrice](docs/InlineResponse200DataPrice.md)
 - [pricealertingapifordigitalportals.InlineResponse200DataTrigger](docs/InlineResponse200DataTrigger.md)
 - [pricealertingapifordigitalportals.InlineResponse200DataTriggerNotation](docs/InlineResponse200DataTriggerNotation.md)
 - [pricealertingapifordigitalportals.InlineResponse200DataTriggerPrice](docs/InlineResponse200DataTriggerPrice.md)
 - [pricealertingapifordigitalportals.InlineResponse200DataTriggerRange](docs/InlineResponse200DataTriggerRange.md)
 - [pricealertingapifordigitalportals.InlineResponse200DataTriggerStatus](docs/InlineResponse200DataTriggerStatus.md)
 - [pricealertingapifordigitalportals.InlineResponse200Meta](docs/InlineResponse200Meta.md)
 - [pricealertingapifordigitalportals.OffsetBasedPaginationOutputObject](docs/OffsetBasedPaginationOutputObject.md)
 - [pricealertingapifordigitalportals.OffsetBasedPaginationOutputObjectWithoutTotal](docs/OffsetBasedPaginationOutputObjectWithoutTotal.md)
 - [pricealertingapifordigitalportals.PartialOutputObject](docs/PartialOutputObject.md)
 - [pricealertingapifordigitalportals.StatusObject](docs/StatusObject.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
