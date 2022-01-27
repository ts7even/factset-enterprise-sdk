# paengine.UnlinkedPATemplatesApi

All URIs are relative to *https://api.factset.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnlinkedPATemplates**](UnlinkedPATemplatesApi.md#createUnlinkedPATemplates) | **POST** /analytics/engines/pa/v3/unlinked-templates | Create unlinked PA template
[**deleteUnlinkedPATemplates**](UnlinkedPATemplatesApi.md#deleteUnlinkedPATemplates) | **DELETE** /analytics/engines/pa/v3/unlinked-templates/{id} | Delete unlinked PA template
[**getDefaultUnlinkedPATemplateTypes**](UnlinkedPATemplatesApi.md#getDefaultUnlinkedPATemplateTypes) | **GET** /analytics/engines/pa/v3/unlinked-templates/template-types | Get default unlinked PA template types.
[**getDetailsType**](UnlinkedPATemplatesApi.md#getDetailsType) | **GET** /analytics/engines/pa/v3/unlinked-templates/template-types/{id} | Get unlinked PA template type details by id.
[**getUnlinkedPATemplates**](UnlinkedPATemplatesApi.md#getUnlinkedPATemplates) | **GET** /analytics/engines/pa/v3/unlinked-templates | Get unlinked PA templates
[**getUnlinkedPATemplatesById**](UnlinkedPATemplatesApi.md#getUnlinkedPATemplatesById) | **GET** /analytics/engines/pa/v3/unlinked-templates/{id} | Get unlinked PA template details by id
[**updateUnlinkedPATemplates**](UnlinkedPATemplatesApi.md#updateUnlinkedPATemplates) | **PUT** /analytics/engines/pa/v3/unlinked-templates/{id} | Update unlinked PA template



## createUnlinkedPATemplates

> UnlinkedPATemplatePostSummaryRoot createUnlinkedPATemplates(unlinkedPATemplateParametersRoot)

Create unlinked PA template

This endpoint creates a template which is not linked to any specific PA3 tile.     Remarks:    *   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary.       If no mandatory fields are passed, then we can use the template as a component and skip the component creation.        *   Mandatory, optional and locked fields can be  \&quot;accounts\&quot;, \&quot;benchmarks\&quot;, \&quot;groups\&quot;, \&quot;columns\&quot;, \&quot;dates\&quot;, \&quot;currencyisocode\&quot; and \&quot;componentdetail\&quot;.    *   We cannot override the Locked fields when creating the Component.    *   Mandatory and locked strings are mutually exclusive.    *   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.    *   Multi-horizon frequencies are not supported through this endpoint.    *   Componentdetail supports securities, groups, and totals as well but if we don&#39;t pass anything that defaults to securities.

### Example

```javascript
const { ApiClient, UnlinkedPATemplatesApi } = require('@factset/sdk-paengine');
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

const apiInstance = new UnlinkedPATemplatesApi();
const unlinkedPATemplateParametersRoot = {"data":{"directory":"Personal:UnlinkedPATemplates/","templateTypeId":"996E90B981AEE83F14029ED3D309FB3F03EC6E2ACC7FD42C22CBD5D279502CFD","description":"This is an unlinked PA template that only returns security level data","accounts":[{"id":"SPN:SP50","holdingsmode":"B&H"},{"id":"MSCI_USA:984000","holdingsmode":"B&H"}],"benchmarks":[{"id":"SPN:SP50","holdingsmode":"B&H"},{"id":"DJGX:AMERICAS","holdingsmode":"B&H"}],"columns":[{"id":"BD1720474AB8A80BDD79777F5B9CA594F4151C0554E30F9C916BA73BFAFC1FE0","statistics":["eb9d6d91416e4224bacadc261787e56f"]}],"dates":{"startdate":"20200101","enddate":"20201215","frequency":"Monthly"},"groups":[{"id":"5BCFFD17598FAEBD88EB4934EFB5FEF53849867D607ECEF232CD42D3369BBBCA"}],"currencyisocode":"USD","componentdetail":"GROUPS","content":{"mandatory":["accounts","benchmarks"],"optional":["groups","columns"],"locked":["dates"]}}}; // UnlinkedPATemplateParametersRoot | Request Parameters

// Call api endpoint
apiInstance.createUnlinkedPATemplates(unlinkedPATemplateParametersRoot).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unlinkedPATemplateParametersRoot** | [**UnlinkedPATemplateParametersRoot**](UnlinkedPATemplateParametersRoot.md)| Request Parameters | 

### Return type

[**UnlinkedPATemplatePostSummaryRoot**](UnlinkedPATemplatePostSummaryRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteUnlinkedPATemplates

> deleteUnlinkedPATemplates(id)

Delete unlinked PA template

This endpoint deletes an existing unliked PA template.

### Example

```javascript
const { ApiClient, UnlinkedPATemplatesApi } = require('@factset/sdk-paengine');
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

const apiInstance = new UnlinkedPATemplatesApi();
const id = "'01234567890123456789012345678901'"; // String | Unique identifier for an unlinked PA template

// Call api endpoint
apiInstance.deleteUnlinkedPATemplates(id).then(
  () => {
    console.log('API called successfully.');
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier for an unlinked PA template | [default to &#39;01234567890123456789012345678901&#39;]

### Return type

null (empty response body)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDefaultUnlinkedPATemplateTypes

> UnlinkedPATemplateCategoryAndTypeRoot getDefaultUnlinkedPATemplateTypes()

Get default unlinked PA template types.

This endpoint fetches default unlinked PA template types.

### Example

```javascript
const { ApiClient, UnlinkedPATemplatesApi } = require('@factset/sdk-paengine');
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

const apiInstance = new UnlinkedPATemplatesApi();

// Call api endpoint
apiInstance.getDefaultUnlinkedPATemplateTypes().then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters

This endpoint does not need any parameter.

### Return type

[**UnlinkedPATemplateCategoryAndTypeRoot**](UnlinkedPATemplateCategoryAndTypeRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDetailsType

> UnlinkedPATemplateCategoryAndTypeDetailsRoot getDetailsType(id)

Get unlinked PA template type details by id.

This endpoint fetches the unlinked PA template type details.

### Example

```javascript
const { ApiClient, UnlinkedPATemplatesApi } = require('@factset/sdk-paengine');
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

const apiInstance = new UnlinkedPATemplatesApi();
const id = "id_example"; // String | Unique identifier for an unlinked PA template type

// Call api endpoint
apiInstance.getDetailsType(id).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier for an unlinked PA template type | 

### Return type

[**UnlinkedPATemplateCategoryAndTypeDetailsRoot**](UnlinkedPATemplateCategoryAndTypeDetailsRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnlinkedPATemplates

> UnlinkedPATemplateSummaryRoot getUnlinkedPATemplates(opts)

Get unlinked PA templates

This endpoint returns the list of unlinked PA templates.

### Example

```javascript
const { ApiClient, UnlinkedPATemplatesApi } = require('@factset/sdk-paengine');
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

const apiInstance = new UnlinkedPATemplatesApi();
const opts = {
  'directory': "'Personal:UninkedPATemplates/'", // String | Get unlinked PA templates in path.
  'category': "'Weights'" // String | Get unlinked PA templates by category.
};

// Call api endpoint
apiInstance.getUnlinkedPATemplates(opts).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **directory** | **String**| Get unlinked PA templates in path. | [optional] [default to &#39;Personal:UninkedPATemplates/&#39;]
 **category** | **String**| Get unlinked PA templates by category. | [optional] [default to &#39;Weights&#39;]

### Return type

[**UnlinkedPATemplateSummaryRoot**](UnlinkedPATemplateSummaryRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUnlinkedPATemplatesById

> UnlinkedPATemplateRoot getUnlinkedPATemplatesById(id)

Get unlinked PA template details by id

This endpoint fetches the template settings.

### Example

```javascript
const { ApiClient, UnlinkedPATemplatesApi } = require('@factset/sdk-paengine');
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

const apiInstance = new UnlinkedPATemplatesApi();
const id = "'01234567890123456789012345678901'"; // String | Unique identifier for an unlinked PA template

// Call api endpoint
apiInstance.getUnlinkedPATemplatesById(id).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier for an unlinked PA template | [default to &#39;01234567890123456789012345678901&#39;]

### Return type

[**UnlinkedPATemplateRoot**](UnlinkedPATemplateRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateUnlinkedPATemplates

> UnlinkedPATemplatePostSummaryRoot updateUnlinkedPATemplates(id, unlinkedPATemplateUpdateParametersRoot)

Update unlinked PA template

This endpoint updates an existing unlinked PA template.    Remarks:                *   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary.       If no mandatory fields are passed, then we can use the template as a component and skip the component creation.        *   Mandatory, optional and locked fields can be  \&quot;accounts\&quot;, \&quot;benchmarks\&quot;, \&quot;groups\&quot;, \&quot;columns\&quot;, \&quot;dates\&quot;, \&quot;currencyisocode\&quot; and \&quot;componentdetail\&quot;.    *   We cannot override the Locked fields when creating the Component.    *   Mandatory and locked strings are mutually exclusive.    *   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.    *   Multi-horizon frequencies are not supported through this endpoint.    *   Componentdetail supports securities, groups, and totals as well but if we don&#39;t pass anything that defaults to securities.

### Example

```javascript
const { ApiClient, UnlinkedPATemplatesApi } = require('@factset/sdk-paengine');
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

const apiInstance = new UnlinkedPATemplatesApi();
const id = "'01234567890123456789012345678901'"; // String | Unique identifier for an unlinked PA template
const unlinkedPATemplateUpdateParametersRoot = {"data":{"description":"This is an unlinked PA template that only returns security level data","accounts":[{"id":"SPN:SP50","holdingsmode":"B&H"},{"id":"MSCI_USA:984000","holdingsmode":"B&H"}],"benchmarks":[{"id":"SPN:SP50","holdingsmode":"B&H"},{"id":"DJGX:AMERICAS","holdingsmode":"B&H"}],"columns":[{"id":"BD1720474AB8A80BDD79777F5B9CA594F4151C0554E30F9C916BA73BFAFC1FE0","statistics":["eb9d6d91416e4224bacadc261787e56f"]}],"dates":{"startdate":"20200101","enddate":"20201215","frequency":"Monthly"},"groups":[{"id":"5BCFFD17598FAEBD88EB4934EFB5FEF53849867D607ECEF232CD42D3369BBBCA"}],"currencyisocode":"USD","componentdetail":"GROUPS","content":{"mandatory":["accounts","benchmarks"],"optional":["columns"],"locked":["groups"]}}}; // UnlinkedPATemplateUpdateParametersRoot | Request Parameters

// Call api endpoint
apiInstance.updateUnlinkedPATemplates(id, unlinkedPATemplateUpdateParametersRoot).then(
  data => {
    console.log('API called successfully. Returned data:');
    console.log(data);
  },
  error => {
    console.error(error);
  },
);

```


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier for an unlinked PA template | [default to &#39;01234567890123456789012345678901&#39;]
 **unlinkedPATemplateUpdateParametersRoot** | [**UnlinkedPATemplateUpdateParametersRoot**](UnlinkedPATemplateUpdateParametersRoot.md)| Request Parameters | 

### Return type

[**UnlinkedPATemplatePostSummaryRoot**](UnlinkedPATemplatePostSummaryRoot.md)

### Authorization

[FactSetApiKey](../README.md#FactSetApiKey), [FactSetOAuth2](../README.md#FactSetOAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
