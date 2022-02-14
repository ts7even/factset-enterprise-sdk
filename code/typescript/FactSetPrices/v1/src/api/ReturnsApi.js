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
import ReturnsRequest from '../model/ReturnsRequest';
import ReturnsResponse from '../model/ReturnsResponse';
import ReturnsSnapshotRequest from '../model/ReturnsSnapshotRequest';
import ReturnsSnapshotResponse from '../model/ReturnsSnapshotResponse';

/**
* Returns service.
* @module api/ReturnsApi
* @version 0.9.1
*/
export default class ReturnsApi {

    /**
    * Constructs a new ReturnsApi. 
    * @alias module:api/ReturnsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the price performance of the security and annualized compound total returns.
     * Retrieves various return periods as of a given date for a requested list of securities. This endpoint is very helpful for quickly retrieving a list of pre-calculated returns for application development.<p> Return periods include   * oneDay   * weekToDate   * monthToDate   * quarterToDate   * yearToDate   * oneMonth   * threeMonth   * sixMonth   * nineMonth   * oneYear   * twoYearAnnualized   * threeYearAnnualized   * fiveYearAnnualized   * tenYearAnnualized   * twentyYearAnnualized   * thirtyYearAnnualized   * ipoToDateAnnualized   </p> 
     * @param {Array.<String>} ids The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.date The date in **YYYY-MM-DD** format. This controls the perspective dates to the calculate the returns. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {module:model/String} opts.calendar Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (default to 'FIVEDAY')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @param {module:model/String} opts.dividendAdjust Controls the dividend reinvestment for the returns calculation. Dividends will be reinvested on the date the dividends go ex (when the dividends belong to the seller rather than the buyer). Visit [OA 8748](https://my.apps.factset.com/oa/pages/8748) for calculation methodology.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested. Dividends accumulated throughout the specified period are added to the price at the end of the period.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate. Dividends accumulated throughout the specified period are used to buy more shares of stock in the company.  (default to 'PRICE')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReturnsSnapshotResponse} and HTTP response
     */
    getReturnsSnapshotWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getReturnsSnapshot");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'date': opts['date'],
        'calendar': opts['calendar'],
        'currency': opts['currency'],
        'dividendAdjust': opts['dividendAdjust']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReturnsSnapshotResponse;
      return this.apiClient.callApi(
        '/factset-prices/v1/returns-snapshot', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the price performance of the security and annualized compound total returns.
     * Retrieves various return periods as of a given date for a requested list of securities. This endpoint is very helpful for quickly retrieving a list of pre-calculated returns for application development.<p> Return periods include   * oneDay   * weekToDate   * monthToDate   * quarterToDate   * yearToDate   * oneMonth   * threeMonth   * sixMonth   * nineMonth   * oneYear   * twoYearAnnualized   * threeYearAnnualized   * fiveYearAnnualized   * tenYearAnnualized   * twentyYearAnnualized   * thirtyYearAnnualized   * ipoToDateAnnualized   </p> 
     * @param {Array.<String>} ids The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.date The date in **YYYY-MM-DD** format. This controls the perspective dates to the calculate the returns. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {module:model/String} opts.calendar Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (default to 'FIVEDAY')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @param {module:model/String} opts.dividendAdjust Controls the dividend reinvestment for the returns calculation. Dividends will be reinvested on the date the dividends go ex (when the dividends belong to the seller rather than the buyer). Visit [OA 8748](https://my.apps.factset.com/oa/pages/8748) for calculation methodology.   * **PRICE** = Price Change - Dividends Excluded.   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested. Dividends accumulated throughout the specified period are added to the price at the end of the period.   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate. Dividends accumulated throughout the specified period are used to buy more shares of stock in the company.  (default to 'PRICE')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReturnsSnapshotResponse}
     */
    getReturnsSnapshot(ids, opts) {
      return this.getReturnsSnapshotWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the price performance of the security and annualized compound total returns.
     * Retrieves various return periods as of a given date for a requested list of securities. This endpoint is very helpful for quickly retrieving a list of pre-calculated returns for application development.<p> Return periods include   * oneDay   * weekToDate   * monthToDate   * quarterToDate   * yearToDate   * oneMonth   * threeMonth   * sixMonth   * nineMonth   * oneYear   * twoYearAnnualized   * threeYearAnnualized   * fiveYearAnnualized   * tenYearAnnualized   * twentyYearAnnualized   * thirtyYearAnnualized   * ipoToDateAnnualized   </p> 
     * @param {module:model/ReturnsSnapshotRequest} returnsSnapshotRequest Request object for Returns-Snapshot.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReturnsSnapshotResponse} and HTTP response
     */
    getReturnsSnapshotForListWithHttpInfo(returnsSnapshotRequest) {
      let postBody = returnsSnapshotRequest;
      // verify the required parameter 'returnsSnapshotRequest' is set
      if (returnsSnapshotRequest === undefined || returnsSnapshotRequest === null) {
        throw new Error("Missing the required parameter 'returnsSnapshotRequest' when calling getReturnsSnapshotForList");
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
      let returnType = ReturnsSnapshotResponse;
      return this.apiClient.callApi(
        '/factset-prices/v1/returns-snapshot', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the price performance of the security and annualized compound total returns.
     * Retrieves various return periods as of a given date for a requested list of securities. This endpoint is very helpful for quickly retrieving a list of pre-calculated returns for application development.<p> Return periods include   * oneDay   * weekToDate   * monthToDate   * quarterToDate   * yearToDate   * oneMonth   * threeMonth   * sixMonth   * nineMonth   * oneYear   * twoYearAnnualized   * threeYearAnnualized   * fiveYearAnnualized   * tenYearAnnualized   * twentyYearAnnualized   * thirtyYearAnnualized   * ipoToDateAnnualized   </p> 
     * @param {module:model/ReturnsSnapshotRequest} returnsSnapshotRequest Request object for Returns-Snapshot.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReturnsSnapshotResponse}
     */
    getReturnsSnapshotForList(returnsSnapshotRequest) {
      return this.getReturnsSnapshotForListWithHttpInfo(returnsSnapshotRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Gets Returns for a list of `ids` as of given date range and rolling Period
     * The simple or compound return for the requested frequency and/or rollingPeriod. Depending on the input parameters the return will adjust accordingly. If you simply use frequency and no rollingPeriod, the return value will represent the frequency period. If you use rollingPeriod, the values will be returned in actual period ends (e.g. actual month, actual week, daily, etc.). General Return Calculation Details found on [Online Assistant Page #8748](https://oa.apps.factset.com/pages/8748)
     * @param {Array.<String>} ids The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {String} opts.endDate The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {module:model/String} opts.frequency Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** = Fiscal Quarter of the company.   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.   * **FY** = Fiscal Annual, based on the last trading day of the company's fiscal year.  (default to 'D')
     * @param {module:model/String} opts.calendar Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (default to 'FIVEDAY')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @param {module:model/String} opts.dividendAdjust Controls the dividend reinvestment for the returns calculation.   * **PRICE** = Price Change - Dividends Excluded   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested   * **PAYDATE** = Simple Return - Dividends Received on paydate but not reinvested   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate   * **PAYDATE_C** = Compound Return - Dividends reinvested on paydate.  (default to 'PRICE')
     * @param {module:model/String} opts.rollingPeriod Period of measure for the rolling cumulative return. This does not change display `frequency` but rather the underlying return calculation period. All periods are referencing actual periods of measure, not period-ends. For example, 1M rolling period will go back to that date the previous month, which is not always the month-end date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReturnsResponse} and HTTP response
     */
    getSecurityReturnsWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getSecurityReturns");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'frequency': opts['frequency'],
        'calendar': opts['calendar'],
        'currency': opts['currency'],
        'dividendAdjust': opts['dividendAdjust'],
        'rollingPeriod': opts['rollingPeriod']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ReturnsResponse;
      return this.apiClient.callApi(
        '/factset-prices/v1/returns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Gets Returns for a list of `ids` as of given date range and rolling Period
     * The simple or compound return for the requested frequency and/or rollingPeriod. Depending on the input parameters the return will adjust accordingly. If you simply use frequency and no rollingPeriod, the return value will represent the frequency period. If you use rollingPeriod, the values will be returned in actual period ends (e.g. actual month, actual week, daily, etc.). General Return Calculation Details found on [Online Assistant Page #8748](https://oa.apps.factset.com/pages/8748)
     * @param {Array.<String>} ids The requested list of security identifiers. Accepted ID types include Market Tickers, SEDOL, ISINs, CUSIPs, or FactSet Permanent Ids. <p>***ids limit** =  2000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {String} opts.endDate The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
     * @param {module:model/String} opts.frequency Controls the display frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **M** = Monthly, based on the last trading day of the month.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).   * **CQ** = Quarterly based on the last trading day of the calendar quarter (March, June, September, or December).   * **FQ** = Fiscal Quarter of the company.   * **AY** = Actual Annual, based on the start date.   * **CY** = Calendar Annual, based on the last trading day of the calendar year.   * **FY** = Fiscal Annual, based on the last trading day of the company's fiscal year.  (default to 'D')
     * @param {module:model/String} opts.calendar Calendar of data returned. SEVENDAY includes weekends. LOCAL calendar will default to the securities' trading calendar which excludes date records for respective holiday periods. (default to 'FIVEDAY')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @param {module:model/String} opts.dividendAdjust Controls the dividend reinvestment for the returns calculation.   * **PRICE** = Price Change - Dividends Excluded   * **EXDATE** = Simple Return - Dividends Received on exdate but not reinvested   * **PAYDATE** = Simple Return - Dividends Received on paydate but not reinvested   * **EXDATE_C** = Compound Return - Dividends reinvested on exdate   * **PAYDATE_C** = Compound Return - Dividends reinvested on paydate.  (default to 'PRICE')
     * @param {module:model/String} opts.rollingPeriod Period of measure for the rolling cumulative return. This does not change display `frequency` but rather the underlying return calculation period. All periods are referencing actual periods of measure, not period-ends. For example, 1M rolling period will go back to that date the previous month, which is not always the month-end date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReturnsResponse}
     */
    getSecurityReturns(ids, opts) {
      return this.getSecurityReturnsWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Requests security returns for the given date range and rollingPeriod.
     * The simple or compound return for the requested frequency and/or rollingPeriod. Depending on the input parameters the return will adjust accordingly. If you simply use frequency and no rollingPeriod, the return value will represent the frequency period. If you use rollingPeriod, the values will be returned in actual period ends (e.g. actual month, actual week, daily, etc.). General Return Calculation Details found on [Online Assistant Page #8748](https://oa.apps.factset.com/pages/8748)
     * @param {module:model/ReturnsRequest} returnsRequest Request object for `Security` returns.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReturnsResponse} and HTTP response
     */
    getSecurityReturnsForListWithHttpInfo(returnsRequest) {
      let postBody = returnsRequest;
      // verify the required parameter 'returnsRequest' is set
      if (returnsRequest === undefined || returnsRequest === null) {
        throw new Error("Missing the required parameter 'returnsRequest' when calling getSecurityReturnsForList");
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
      let returnType = ReturnsResponse;
      return this.apiClient.callApi(
        '/factset-prices/v1/returns', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Requests security returns for the given date range and rollingPeriod.
     * The simple or compound return for the requested frequency and/or rollingPeriod. Depending on the input parameters the return will adjust accordingly. If you simply use frequency and no rollingPeriod, the return value will represent the frequency period. If you use rollingPeriod, the values will be returned in actual period ends (e.g. actual month, actual week, daily, etc.). General Return Calculation Details found on [Online Assistant Page #8748](https://oa.apps.factset.com/pages/8748)
     * @param {module:model/ReturnsRequest} returnsRequest Request object for `Security` returns.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReturnsResponse}
     */
    getSecurityReturnsForList(returnsRequest) {
      return this.getSecurityReturnsForListWithHttpInfo(returnsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
