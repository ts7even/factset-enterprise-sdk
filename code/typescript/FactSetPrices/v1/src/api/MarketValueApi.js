/**
 * FactSet Prices API
 * Gain access to comprehensive global coverage for Equities & Fixed Income. Perform quick analytics by controlling the date ranges, currencies, and rolling periods, or simply request Open, High, Low, and Close prices. Easily connect pricing data with other core company data or alternative content sets using FactSet's hub and spoke symbology. <p>Equity and Fund Security types include Common Stock, ADR, GDR, Preferred, Closed-ended Fund, Exchange Traded Fund, Unit, Open-ended Fund, Exchange Traded Fund UVI, Exchange Traded Fund NAV, Preferred Equity, Non-Voting Depositary Receipt/Certificate, Alien/Foreign, Structured Product, and Temporary Instruments. Reference over 180,000+ active and inactive securities.</p><p>Fixed Income Security Types include Corporate Bonds, Treasury and Agency bonds, Government Bonds, and Municipals.</p> 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import MarketValueRequest from '../model/MarketValueRequest';
import MarketValueResponse from '../model/MarketValueResponse';

/**
* MarketValue service.
* @module api/MarketValueApi
* @version 0.9.0
*/
export default class MarketValueApi {

    /**
    * Constructs a new MarketValueApi. 
    * @alias module:api/MarketValueApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets the security level and company level market values for a list of `ids` as of given date range and frequency.
     * Gets market capitalization of list of ids for the company level, security level, calendar, frequency, and currency for a specified date range. 
     * @param {Array.<String>} ids The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {String} opts.endDate The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {module:model/String} opts.frequency Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** = Fiscal Quarter of the company.   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.   * **FY** = Fiscal Annual, based on the last trading day of the company's fiscal year.  (default to 'D')
     * @param {module:model/String} opts.calendar Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (default to 'FIVEDAY')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MarketValueResponse} and HTTP response
     */
    getMarketValueWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getMarketValue");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'frequency': opts['frequency'],
        'calendar': opts['calendar'],
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MarketValueResponse;
      return this.apiClient.callApi(
        '/factset-prices/v1/market-value', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the security level and company level market values for a list of `ids` as of given date range and frequency.
     * Gets market capitalization of list of ids for the company level, security level, calendar, frequency, and currency for a specified date range. 
     * @param {Array.<String>} ids The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {String} opts.endDate The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {module:model/String} opts.frequency Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** = Fiscal Quarter of the company.   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.   * **FY** = Fiscal Annual, based on the last trading day of the company's fiscal year.  (default to 'D')
     * @param {module:model/String} opts.calendar Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (default to 'FIVEDAY')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MarketValueResponse}
     */
    getMarketValue(ids, opts) {
      return this.getMarketValueWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Requests the market value for a list of `ids` as of given date range.
     * Requests the market value for a list of `ids` as of given date range.
     * @param {module:model/MarketValueRequest} marketValueRequest Request object for `Security` market values.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MarketValueResponse} and HTTP response
     */
    getMarketValueForListWithHttpInfo(marketValueRequest) {
      let postBody = marketValueRequest;
      // verify the required parameter 'marketValueRequest' is set
      if (marketValueRequest === undefined || marketValueRequest === null) {
        throw new Error("Missing the required parameter 'marketValueRequest' when calling getMarketValueForList");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MarketValueResponse;
      return this.apiClient.callApi(
        '/factset-prices/v1/market-value', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Requests the market value for a list of `ids` as of given date range.
     * Requests the market value for a list of `ids` as of given date range.
     * @param {module:model/MarketValueRequest} marketValueRequest Request object for `Security` market values.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MarketValueResponse}
     */
    getMarketValueForList(marketValueRequest) {
      return this.getMarketValueForListWithHttpInfo(marketValueRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}