# @factset/sdk-factsetgeorev

factsetgeorev - JavaScript client for @factset/sdk-factsetgeorev
FactSet Revere Geographic Revenue (\"GeoRev\") Exposure data provides a highly structured and normalized display of companies’ revenues by geography. Using a four level taxonomy structure, understand the companies' Super-Region-->Region-->Area-->Country revenue breakdowns. Quickly understand a company’s revenue exposure in countries impacted by geopolitical, macroeconomic, and market risk. Understand the geographic footprint of a company based on sources of revenue versus country of domicile, and analyze global revenue exposures at the company, index, or portfolio level.<p> Geographic revenue has historically been difficult to analyze due to companies’ non-standard and incomplete reporting. Investors relying solely on this as-reported data are limited in their ability to compare, aggregate or screen exposures across a universe or portfolio of companies. To achieve normalization, FactSet GeoRev captures data through a proprietary four-level geographic classification structure. An estimation algorithm based on GDP weighting and accounting logic is then applied to solve for any non-explicit disclosures. The result is a consistent, accurate, and flexible dataset that can take a company’s revenues and break them down into any geographic country or region categories.</p><p>As markets become more integrated and companies expand operations beyond their domestic markets, GeoRev provides a new and valuable country factor to help investors discover alpha, model risk exposure, optimize portfolio weighting, and improve fund administration and reporting.</p><p>Data Frequency -  Annual; Update Frequency - Daily. 49,000+ Publically Listed Companies. All Russell 3000 and MSCI ACWI Index Consituents. U.S. Data is available from 2003, with Non-US data from 2007. For more details, visit [OA 17555](https://my.apps.factset.com/oa/pages/17555)</p>

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.1
- Package version: 0.9.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @factset/sdk-factsetgeorev --save
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

To use the link you just defined in your project, switch to the directory you want to use your @factset/sdk-factsetgeorev from, and run:

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
const { ApiClient, CountriesApi } = require('@factset/sdk-factsetgeorev');
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

const apiInstance = new CountriesApi();
const ids = ["AAPL-USA"]; // [String] | Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  300 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
const opts = {
  'countryIds': ["US","CN"], // [String] | The Country ISO2 Codes representing the Country requested. By default, the service will request *ALL* Countries. To limit the Countries returned in the response, provide a comma-separated list of the ISO2 Country Codes. Visit [OA 8754](https://my.apps.factset.com/oa/pages/8754) for a full list of ISO2 codes. 
  'startDate': 2018-12-31, // String | The start date requested for a given date range in **YYYY-MM-DD** format. Data is available on a Fiscal Annual periodicity and updated Daily. If left blank, the API will default to latest available fiscal period. Future dates (T+1) are not accepted in this endpoint. 
  'endDate': 2019-12-31, // String | The end date requested for a given date range in **YYYY-MM-DD** format. Data is available on a Fiscal Annual periodicity and updated daily. If left blank, the API will default to latest available fiscal period. Future dates (T+1) are not accepted in this endpoint. 
  'frequency': "'FY'", // String | Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** = Fiscal Quarter of the company.   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.   * **FY** = Fiscal Annual, based on the last trading day of the company's fiscal year.    
  'currency': USD // String | Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
};

// Call api endpoint
apiInstance.getCountries(ids, opts).then(
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
*factsetgeorev.CountriesApi* | [**getCountries**](docs/CountriesApi.md#getCountries) | **GET** /factset-georev/v1/countries | Gets the revenue details for the requested Countries.
*factsetgeorev.CountriesApi* | [**getCountriesForList**](docs/CountriesApi.md#getCountriesForList) | **POST** /factset-georev/v1/countries | Gets the revenue details for the requested Countries. Use for large lists of ids.
*factsetgeorev.RegionsApi* | [**getRegions**](docs/RegionsApi.md#getRegions) | **GET** /factset-georev/v1/regions | Gets the revenue details for the requested Regions
*factsetgeorev.RegionsApi* | [**getRegionsForList**](docs/RegionsApi.md#getRegionsForList) | **POST** /factset-georev/v1/regions | Gets the revenue details for the requested Regions. Use for large lists of company ids.


## Documentation for Models

 - [factsetgeorev.Country](docs/Country.md)
 - [factsetgeorev.CountryRequest](docs/CountryRequest.md)
 - [factsetgeorev.CountryResponse](docs/CountryResponse.md)
 - [factsetgeorev.ErrorResponse](docs/ErrorResponse.md)
 - [factsetgeorev.ErrorResponseSubErrors](docs/ErrorResponseSubErrors.md)
 - [factsetgeorev.Frequency](docs/Frequency.md)
 - [factsetgeorev.Region](docs/Region.md)
 - [factsetgeorev.RegionRequest](docs/RegionRequest.md)
 - [factsetgeorev.RegionResponse](docs/RegionResponse.md)


## Documentation for Authorization



### FactSetApiKey

- **Type**: HTTP basic authentication



### FactSetOAuth2


- **Type**: OAuth
- **Flow**: application
- **Authorization URL**: 
- **Scopes**: N/A
