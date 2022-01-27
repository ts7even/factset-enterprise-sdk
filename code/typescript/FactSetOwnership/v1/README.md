# @factset/sdk-factsetownership

factsetownership - JavaScript client for @factset/sdk-factsetownership
FactSet’s Fund Ownership API gives access to both **Holdings** and **Holders** data.<p> Factset's Holdings endpoints gives access to all the underlying securities and their position detils held within a given fund. Fund Types supported include Open-End Mutual Funds, Closed-end Mutual Funds, and Exchange Traded Funds. Security Holders information retrieves all \"holder types\" and their positions across institutions, funds, insiders, and stakeholders.</p><p>The FactSet Ownership and Mutual Funds database collects global equity ownership data for approximately 50,000 institutions, 60,000 unique Mutual Fund portfolios, and 400,000 Insider/Stake holders from around 110 countries.  For more details review our [Data Collection](https://my.apps.factset.com/oa/cms/oaAttachment/87e162be-f2d1-4f40-a85b-bfb1b020d270/20079) methodology. </p>

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.0
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factset/sdk-factsetownership --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-factsetownership from, and run:

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
const { ApiClient, FundHoldingsApi } = require('@factset/sdk-factsetownership');
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

const apiInstance = new FundHoldingsApi();
const ids = ["VTI-USA"]; // [String] | List of requested fund identifiers. <p>***ids limit** =  10 per request*</p>
const opts = {
  'date': 2019-12-31, // String | Date of holdings expressed in YYYY-MM-DD format. The fund-holdings endpoint will default to latest month-end close.
  'topn': 5, // String | Limits number of holdings or holders displayed by the top *n* securities based on positions Market Value. Default is ALL, otherwise use number to limit number.
  'assetType': EQ, // String | Filter holdings by the following major asset classes -   * **EQ**  = Equity   * **FI** = Fixed Income   * **ALL** = ALL 
  'currency': USD // String | Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
};

// Call api endpoint
apiInstance.getOwnershipHoldings(ids, opts).then(
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
*factsetownership.FundHoldingsApi* | [**getOwnershipHoldings**](docs/FundHoldingsApi.md#getOwnershipHoldings) | **GET** /factset-ownership/v1/fund-holdings | Get underlying holdings information for a requested fund identifer.
*factsetownership.FundHoldingsApi* | [**postOwnershipHoldings**](docs/FundHoldingsApi.md#postOwnershipHoldings) | **POST** /factset-ownership/v1/fund-holdings | Get holdings for a list of funds.
*factsetownership.SecurityHoldersApi* | [**getSecurityHolders**](docs/SecurityHoldersApi.md#getSecurityHolders) | **GET** /factset-ownership/v1/security-holders | Get security ownership data for requested security identifers.
*factsetownership.SecurityHoldersApi* | [**postSecurityHolders**](docs/SecurityHoldersApi.md#postSecurityHolders) | **POST** /factset-ownership/v1/security-holders | Get security ownership data for a list of requested securities.


## Documentation for Models

 - [factsetownership.AssetType](docs/AssetType.md)
 - [factsetownership.ErrorResponse](docs/ErrorResponse.md)
 - [factsetownership.ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [factsetownership.FundHolding](docs/FundHolding.md)
 - [factsetownership.FundHoldingsRequest](docs/FundHoldingsRequest.md)
 - [factsetownership.FundHoldingsResponse](docs/FundHoldingsResponse.md)
 - [factsetownership.HolderType](docs/HolderType.md)
 - [factsetownership.SecurityHolders](docs/SecurityHolders.md)
 - [factsetownership.SecurityHoldersRequest](docs/SecurityHoldersRequest.md)
 - [factsetownership.SecurityHoldersResponse](docs/SecurityHoldersResponse.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
