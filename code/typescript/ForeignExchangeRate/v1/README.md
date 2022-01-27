# @factset/sdk-foreignexchangerate

foreignexchangerate - JavaScript client for @factset/sdk-foreignexchangerate
Foreign Exchange Rates API in which retrieves Spots and Forwards for a given currency pair and date range. <p>*Spots and Forwards rates are sourced from W/M Reuters.The WM Company calculates daily standardized spot rates for global foreign exchange transactions, using rates provided by Reuters. These rates are recognized globally as the standard by banks, fund managers, and index compilers; increasingly these rates are also being used for benchmark currency trading. In 1994, WM Company began calculating closing spot rates. Closing spot rates provide a standard set of currency rates so that portfolio valuations can be compared to each other and their performances measured against benchmarks, without having discrepancies caused by exchange rates. Closing spot rates are recorded at 16:00 GMT.*</p>

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
npm install @factset/sdk-foreignexchangerate --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-foreignexchangerate from, and run:

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
const { ApiClient, ForwardsApi } = require('@factset/sdk-foreignexchangerate');
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

const apiInstance = new ForwardsApi();
const ids = ["USDGBP"]; // [String] | The currency pair requested in the format of a ISO {source}{target}. For a complete list of ISO currencies, please visit [OA 1470](https://my.apps.factset.com/oa/pages/1470)
const opts = {
  'forwardPeriod': ON, // String | Bid, offer, and mid rates are available for the following 11 time periods.  * ON - Overnight  * TN - Tomorrow Next  * SW - One Week (Spot Week)  * 1M - One Month  * 2M - Two Months  * 3M - Three Months  * 6M - Six Months  * 9M - Nine Months  * 1Y - One Year  * 2Y - Two Years  * 5Y - Five Years 
  'startDate': 2019-01-01, // String | The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available. 
  'endDate': 2019-12-31, // String | The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to latest available. 
  'frequency': D // String | Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).    * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year. 
};

// Call api endpoint
apiInstance.getFXForwards(ids, opts).then(
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
*foreignexchangerate.ForwardsApi* | [**getFXForwards**](docs/ForwardsApi.md#getFXForwards) | **GET** /foreign-exchange/v1/forwards | Gets Forwards for a list of currency pairs
*foreignexchangerate.ForwardsApi* | [**getFXForwardsForList**](docs/ForwardsApi.md#getFXForwardsForList) | **POST** /foreign-exchange/v1/forwards | Gets Forwards for a list of currency pairs
*foreignexchangerate.SpotsApi* | [**getSpots**](docs/SpotsApi.md#getSpots) | **GET** /foreign-exchange/v1/spots | Gets spots for a list of currency pairs
*foreignexchangerate.SpotsApi* | [**getSpotsForList**](docs/SpotsApi.md#getSpotsForList) | **POST** /foreign-exchange/v1/spots | Gets spots for a list of currency pairs


## Documentation for Models

 - [foreignexchangerate.ErrorResponse](docs/ErrorResponse.md)
 - [foreignexchangerate.ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [foreignexchangerate.Forward](docs/Forward.md)
 - [foreignexchangerate.ForwardPeriod](docs/ForwardPeriod.md)
 - [foreignexchangerate.ForwardsRequest](docs/ForwardsRequest.md)
 - [foreignexchangerate.ForwardsResponse](docs/ForwardsResponse.md)
 - [foreignexchangerate.Frequency](docs/Frequency.md)
 - [foreignexchangerate.Spot](docs/Spot.md)
 - [foreignexchangerate.SpotsRequest](docs/SpotsRequest.md)
 - [foreignexchangerate.SpotsResponse](docs/SpotsResponse.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
