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
import HighLowRequest from '../model/HighLowRequest';
import HighLowResponse from '../model/HighLowResponse';

/**
* HighLow service.
* @module api/HighLowApi
* @version 0.9.0
*/
export default class HighLowApi {

    /**
    * Constructs a new HighLowApi. 
    * @alias module:api/HighLowApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Gets the price high and price low of securities for a list of `ids` as of given date, period and frequency.
     * For given security(s), gets the high and low prices with the respective dates on which they occurred. This service gives options for fetching the price as of the close or intraday. 
     * @param {Array.<String>} ids The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.date The as of date in **YYYY-MM-DD** format. This controls the perspective date in which the period parameter will be computed. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {module:model/String} opts.period The period of measure for the security's high and low pricing. This does not change display `frequency` but rather the underlying period. For example, if you wish to fetch the latest 52 week high and low price, select 52W. All periods are referencing actual periods of measure, not period-ends where-    * **D** = Daily   * **W** = Weekly, based on the last trading day of the week. Use the 52W for representing the latest year.   * **M** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **YTD** = Year-to-Date   * **Y** =  Actual Annual, based on the start date.  (default to '52W')
     * @param {module:model/String} opts.priceType Controls whether price high and low data is returned intraday or at the close. For example, by selecting INTRADAY, if a security price reached an all time high of 10 during trading hours over the period of measure but closed that day at 8, then the service will return 10. If CLOSE was selected the service would return 8 if that was the high for the period measured.  (default to 'CLOSE')
     * @param {module:model/String} opts.calendar Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (default to 'FIVEDAY')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @param {module:model/String} opts.adjust Controls the split, spinoff, and dividend adjustments for the prices. <p>For more information, visit [Online Assistant Page 614](https://oa.apps.factset.com/pages/614)</p>   * **SPLIT** = Split ONLY Adjusted. This is used by default.   * **SPINOFF** = Splits & Spinoff Adjusted.   * **DIVADJ** = Splits, Spinoffs, and Dividends adjusted.   * **UNSPLIT** = No Adjustments.  (default to 'SPLIT')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HighLowResponse} and HTTP response
     */
    getHighLowWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getHighLow");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'date': opts['date'],
        'period': opts['period'],
        'priceType': opts['priceType'],
        'calendar': opts['calendar'],
        'currency': opts['currency'],
        'adjust': opts['adjust']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = HighLowResponse;
      return this.apiClient.callApi(
        '/factset-prices/v1/high-low', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets the price high and price low of securities for a list of `ids` as of given date, period and frequency.
     * For given security(s), gets the high and low prices with the respective dates on which they occurred. This service gives options for fetching the price as of the close or intraday. 
     * @param {Array.<String>} ids The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.date The as of date in **YYYY-MM-DD** format. This controls the perspective date in which the period parameter will be computed. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {module:model/String} opts.period The period of measure for the security's high and low pricing. This does not change display `frequency` but rather the underlying period. For example, if you wish to fetch the latest 52 week high and low price, select 52W. All periods are referencing actual periods of measure, not period-ends where-    * **D** = Daily   * **W** = Weekly, based on the last trading day of the week. Use the 52W for representing the latest year.   * **M** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **YTD** = Year-to-Date   * **Y** =  Actual Annual, based on the start date.  (default to '52W')
     * @param {module:model/String} opts.priceType Controls whether price high and low data is returned intraday or at the close. For example, by selecting INTRADAY, if a security price reached an all time high of 10 during trading hours over the period of measure but closed that day at 8, then the service will return 10. If CLOSE was selected the service would return 8 if that was the high for the period measured.  (default to 'CLOSE')
     * @param {module:model/String} opts.calendar Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (default to 'FIVEDAY')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @param {module:model/String} opts.adjust Controls the split, spinoff, and dividend adjustments for the prices. <p>For more information, visit [Online Assistant Page 614](https://oa.apps.factset.com/pages/614)</p>   * **SPLIT** = Split ONLY Adjusted. This is used by default.   * **SPINOFF** = Splits & Spinoff Adjusted.   * **DIVADJ** = Splits, Spinoffs, and Dividends adjusted.   * **UNSPLIT** = No Adjustments.  (default to 'SPLIT')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HighLowResponse}
     */
    getHighLow(ids, opts) {
      return this.getHighLowWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Requests the price high and price low of securities for a list of `ids` as of given date, period and frequency.
     * For given security(s), gets the high and low prices with the respective dates on which they occurred. This service gives options for fetching the price as of the close or intraday. 
     * @param {module:model/HighLowRequest} highLowRequest Request object for high low prices.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/HighLowResponse} and HTTP response
     */
    getHighLowForListWithHttpInfo(highLowRequest) {
      let postBody = highLowRequest;
      // verify the required parameter 'highLowRequest' is set
      if (highLowRequest === undefined || highLowRequest === null) {
        throw new Error("Missing the required parameter 'highLowRequest' when calling getHighLowForList");
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
      let returnType = HighLowResponse;
      return this.apiClient.callApi(
        '/factset-prices/v1/high-low', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Requests the price high and price low of securities for a list of `ids` as of given date, period and frequency.
     * For given security(s), gets the high and low prices with the respective dates on which they occurred. This service gives options for fetching the price as of the close or intraday. 
     * @param {module:model/HighLowRequest} highLowRequest Request object for high low prices.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/HighLowResponse}
     */
    getHighLowForList(highLowRequest) {
      return this.getHighLowForListWithHttpInfo(highLowRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}