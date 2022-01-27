# @factset/sdk-intradaytickhistory

intradaytickhistory - JavaScript client for @factset/sdk-intradaytickhistory

<p>FactSet’s Tick History provides cost-effective access to real-time and delayed global exchange data. Proprietary technology normalizes over 200 global exchanges and 19 tick history fields. Asset types integrated include equities, futures, options, fixed income, mutual funds, ETFs, indices, commodities, and FX rates.</p><p>Tick History provides dynamic access to tick data for a specific security intra-day or historically via standard HTTPS protocol. History is available for all quotes and trades for a trailing 6 months or 1-year, respectively. Quotes and trade data for Options is available for 30 days. Tick History data is also available in a separate end-of-day feed.</p>
 

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
npm install @factset/sdk-intradaytickhistory --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-intradaytickhistory from, and run:

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
const { ApiClient, FirstTradeApi } = require('@factset/sdk-intradaytickhistory');
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

const apiInstance = new FirstTradeApi();
const id = "id_example"; // String | Requested symbol or security. The symbol can be a FactSet exchange symbol, CUSIP, or SEDOL. **NOTE**: Only one identifier can be requested per request.<P>**TRY IT OUT** - Choose One from - BABA-USA,WALMEX-MX,7203-TKS,VOD-LON,NPN-JSE,MABAX,NZF,SPY-USA,AGG-USA,GLD-USA,AOR-USA,MNA-USA,UUP-USA,SP50-SPX,ESX-STX,XAO-ASX,WD-MSX,NG00-USA,GC00-USA,CC00-USA,C00-USA,FC00-USA,ER00-USA,EURUSD-FX1,USDMXN-FX1,AUDJPY-FX1,EURCZK-FX1,USDILS-FX1,USDZAR-FX1,US10YY-TU1,FDS#190621C00145000-USA,FDS#190621P00145000-USA
const opts = {
  'reqId': "reqId_example", // String | Request Identification String. Can be used by the application to keep track of requests. The id is not used by this service, however, it is included in the XML response.
  'startDate': "startDate_example", // String | This is the start date for the Snapshot History. Requests should be made in the format YYYYMMDD Default is current business day. Field can be sd or date. TRY IT OUT Cannot use current day.
  'startTime': "'040000'", // String | This is the start time for the snapshot history requested. Requests should be made in a **HHMMSSS** format.Range from 000000 - 235959. **TRY IT OUT** Cannot use current day
  'format': "'XML'", // String | The format of the output file. TRY IT OUT Choose from JSON, CSV, CSV_NO_HEADER
  'includeRequest': "'false'", // String | Flag to include request id and key in the CSV output.
  'dataset': "dataset_example" // String | Decides what type of trades to return, default is all trades and quotes, alternatively charting can be selected which will filter out unofficial trades.
};

// Call api endpoint
apiInstance.tickHistoryFirsttradeGet(id, opts).then(
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

All URIs are relative to *https://api-sandbox.factset.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*intradaytickhistory.FirstTradeApi* | [**tickHistoryFirsttradeGet**](docs/FirstTradeApi.md#tickHistoryFirsttradeGet) | **GET** /TickHistory/firsttrade | Request returns data for the first trade (official and unofficial) after the specified time
*intradaytickhistory.LastTradeApi* | [**tickHistoryLasttradeGet**](docs/LastTradeApi.md#tickHistoryLasttradeGet) | **GET** /TickHistory/lasttrade | Request returns data for the last trade and associated quotes before the specified time
*intradaytickhistory.QuoteAtTimeApi* | [**tickHistoryQatGet**](docs/QuoteAtTimeApi.md#tickHistoryQatGet) | **GET** /TickHistory/qat | Request returns a quote at the specified time
*intradaytickhistory.TickHistoryApi* | [**getTickHistory**](docs/TickHistoryApi.md#getTickHistory) | **GET** /TickHistory/history | Tick History service returns trade data and associated quotes for a client specified interval and time period
*intradaytickhistory.TradesAtTimeApi* | [**tickHistoryTradesattimeGet**](docs/TradesAtTimeApi.md#tickHistoryTradesattimeGet) | **GET** /TickHistory/tradesattime | Request returns the before and after trade data along with the associated quotes for the specified time


## Documentation for Models

 - [intradaytickhistory.Fields](docs/Fields.md)
 - [intradaytickhistory.Intervals](docs/Intervals.md)
 - [intradaytickhistory.Specialfield](docs/Specialfield.md)
 - [intradaytickhistory.TickhistoryResponse](docs/TickhistoryResponse.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
