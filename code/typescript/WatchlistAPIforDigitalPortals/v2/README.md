# @factset/sdk-watchlistapifordigitalportals

watchlistapifordigitalportals - JavaScript client for @factset/sdk-watchlistapifordigitalportals
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
npm install @factset/sdk-watchlistapifordigitalportals --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-watchlistapifordigitalportals from, and run:

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
const { ApiClient, WatchlistApi } = require('@factset/sdk-watchlistapifordigitalportals');
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

const apiInstance = new WatchlistApi();
const opts = {
  'body': new watchlistapifordigitalportals.InlineObject() // InlineObject | 
};

// Call api endpoint
apiInstance.watchlistCreatePost(opts).then(
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

All URIs are relative to *http://api-sandbox.factset.com/wealth/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*watchlistapifordigitalportals.WatchlistApi* | [**watchlistCreatePost**](docs/WatchlistApi.md#watchlistCreatePost) | **POST** /watchlist/create | Create watchlist.
*watchlistapifordigitalportals.WatchlistApi* | [**watchlistDeletePost**](docs/WatchlistApi.md#watchlistDeletePost) | **POST** /watchlist/delete | The endpoint deletes a watchlist.
*watchlistapifordigitalportals.WatchlistApi* | [**watchlistListGet**](docs/WatchlistApi.md#watchlistListGet) | **GET** /watchlist/list | List watchlists.
*watchlistapifordigitalportals.WatchlistApi* | [**watchlistModifyPost**](docs/WatchlistApi.md#watchlistModifyPost) | **POST** /watchlist/modify | Rename a watchlist.
*watchlistapifordigitalportals.WatchlistApi* | [**watchlistPositionCreatePost**](docs/WatchlistApi.md#watchlistPositionCreatePost) | **POST** /watchlist/position/create | Add position in watchlist.
*watchlistapifordigitalportals.WatchlistApi* | [**watchlistPositionDeletePost**](docs/WatchlistApi.md#watchlistPositionDeletePost) | **POST** /watchlist/position/delete | Add position in watchlist.
*watchlistapifordigitalportals.WatchlistApi* | [**watchlistPositionListGet**](docs/WatchlistApi.md#watchlistPositionListGet) | **GET** /watchlist/position/list | List positions of watchlist.
*watchlistapifordigitalportals.WatchlistApi* | [**watchlistPositionModifyPost**](docs/WatchlistApi.md#watchlistPositionModifyPost) | **POST** /watchlist/position/modify | Add position in watchlist.


## Documentation for Models

 - [watchlistapifordigitalportals.CursorBasedPaginationOutputObject](docs/CursorBasedPaginationOutputObject.md)
 - [watchlistapifordigitalportals.ErrorMetaObject](docs/ErrorMetaObject.md)
 - [watchlistapifordigitalportals.InlineObject](docs/InlineObject.md)
 - [watchlistapifordigitalportals.InlineObject1](docs/InlineObject1.md)
 - [watchlistapifordigitalportals.InlineObject2](docs/InlineObject2.md)
 - [watchlistapifordigitalportals.InlineObject3](docs/InlineObject3.md)
 - [watchlistapifordigitalportals.InlineObject4](docs/InlineObject4.md)
 - [watchlistapifordigitalportals.InlineObject5](docs/InlineObject5.md)
 - [watchlistapifordigitalportals.InlineResponse200](docs/InlineResponse200.md)
 - [watchlistapifordigitalportals.InlineResponse2001](docs/InlineResponse2001.md)
 - [watchlistapifordigitalportals.InlineResponse2002](docs/InlineResponse2002.md)
 - [watchlistapifordigitalportals.InlineResponse2002Data](docs/InlineResponse2002Data.md)
 - [watchlistapifordigitalportals.InlineResponse2002Meta](docs/InlineResponse2002Meta.md)
 - [watchlistapifordigitalportals.InlineResponse2003](docs/InlineResponse2003.md)
 - [watchlistapifordigitalportals.InlineResponse2003Data](docs/InlineResponse2003Data.md)
 - [watchlistapifordigitalportals.InlineResponse2004](docs/InlineResponse2004.md)
 - [watchlistapifordigitalportals.InlineResponse2004Data](docs/InlineResponse2004Data.md)
 - [watchlistapifordigitalportals.InlineResponse200Meta](docs/InlineResponse200Meta.md)
 - [watchlistapifordigitalportals.OffsetBasedPaginationOutputObject](docs/OffsetBasedPaginationOutputObject.md)
 - [watchlistapifordigitalportals.PartialOutputObject](docs/PartialOutputObject.md)
 - [watchlistapifordigitalportals.StatusObject](docs/StatusObject.md)
 - [watchlistapifordigitalportals.SubscriptionMember](docs/SubscriptionMember.md)
 - [watchlistapifordigitalportals.WatchlistCreateData](docs/WatchlistCreateData.md)
 - [watchlistapifordigitalportals.WatchlistCreateMeta](docs/WatchlistCreateMeta.md)
 - [watchlistapifordigitalportals.WatchlistModifyData](docs/WatchlistModifyData.md)
 - [watchlistapifordigitalportals.WatchlistPositionCreateData](docs/WatchlistPositionCreateData.md)
 - [watchlistapifordigitalportals.WatchlistPositionDeleteData](docs/WatchlistPositionDeleteData.md)
 - [watchlistapifordigitalportals.WatchlistPositionModifyData](docs/WatchlistPositionModifyData.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
