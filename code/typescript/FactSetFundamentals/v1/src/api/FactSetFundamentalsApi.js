/**
 * FactSet Fundamentals API
 * Gain access to current, comprehensive, and comparative information on securities in worldwide developed and emerging markets. Composed of annual and interim/quarterly data, detailed historical financial statement content, per share data, and calculated ratios, FactSet Fundamentals provides you with the information you need for a global investment perspective. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import FundamentalsRequest from '../model/FundamentalsRequest';
import FundamentalsResponse from '../model/FundamentalsResponse';

/**
* FactSetFundamentals service.
* @module api/FactSetFundamentalsApi
* @version 0.9.0
*/
export default class FactSetFundamentalsApi {

    /**
    * Constructs a new FactSetFundamentalsApi. 
    * @alias module:api/FactSetFundamentalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the Company Fundamental Data.
     * Retrieves FactSet Fundamental standardized data for an individual security. Use the /metrics endpoint to retrieve a full list of valid metrics or data items. 
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted as input. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
     * @param {Array.<String>} metrics Requested List of Financial Statement Items or Ratios. Use /metrics endpoint for a complete list of available FF_* metric items. <p>*When requesting multiple metrics, you cannot mix metric data types (e.g. strings and floats). Please use /metrics endpoints for context on metric dataType to avoid null data.*</p> <p>***metrics limit** =  1600 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of metrics, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods, where   * **ANN**  = Annual - Original,   * **ANN_R** = Annual - Latest - *Includes Restatements*,   * **QTR**  = Quarterly - Original,   * **QTR_R** = Quarterly - Latest - *Includes Restatements*,   * **SEMI** = Semi-Annual,   * **LTM**  = Last Twelve Months,   * **LTMSG** = Last Twelve Months Global [OA17959](https://my.apps.factset.com/oa/pages/17959),   * **YTD** = Year-to-date.  (default to 'QTR')
     * @param {String} opts.fiscalPeriodStart Fiscal period start expressed as YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution. 
     * @param {String} opts.fiscalPeriodEnd Fiscal period end expressed YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution. 
     * @param {String} opts.currency Currency code for currency values. For a list of currency ISO codes, visit Online Assistant Page [OA1470](https://my.apps.factset.com/oa/pages/1470).  (default to 'LOCAL')
     * @param {module:model/String} opts.restated Update Status Flag:   * **RP** = Include preliminary data,   * **RF** = Only final data  (default to 'RP')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FundamentalsResponse} and HTTP response
     */
    getFdsFundamentalsWithHttpInfo(ids, metrics, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getFdsFundamentals");
      }
      // verify the required parameter 'metrics' is set
      if (metrics === undefined || metrics === null) {
        throw new Error("Missing the required parameter 'metrics' when calling getFdsFundamentals");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'periodicity': opts['periodicity'],
        'fiscalPeriodStart': opts['fiscalPeriodStart'],
        'fiscalPeriodEnd': opts['fiscalPeriodEnd'],
        'metrics': this.apiClient.buildCollectionParam(metrics, 'csv'),
        'currency': opts['currency'],
        'restated': opts['restated']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FundamentalsResponse;
      return this.apiClient.callApi(
        '/factset-fundamentals/v1/fundamentals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the Company Fundamental Data.
     * Retrieves FactSet Fundamental standardized data for an individual security. Use the /metrics endpoint to retrieve a full list of valid metrics or data items. 
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted as input. <p>***ids limit** =  1000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
     * @param {Array.<String>} metrics Requested List of Financial Statement Items or Ratios. Use /metrics endpoint for a complete list of available FF_* metric items. <p>*When requesting multiple metrics, you cannot mix metric data types (e.g. strings and floats). Please use /metrics endpoints for context on metric dataType to avoid null data.*</p> <p>***metrics limit** =  1600 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of metrics, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>* 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.periodicity Periodicity or frequency of the fiscal periods, where   * **ANN**  = Annual - Original,   * **ANN_R** = Annual - Latest - *Includes Restatements*,   * **QTR**  = Quarterly - Original,   * **QTR_R** = Quarterly - Latest - *Includes Restatements*,   * **SEMI** = Semi-Annual,   * **LTM**  = Last Twelve Months,   * **LTMSG** = Last Twelve Months Global [OA17959](https://my.apps.factset.com/oa/pages/17959),   * **YTD** = Year-to-date.  (default to 'QTR')
     * @param {String} opts.fiscalPeriodStart Fiscal period start expressed as YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution. 
     * @param {String} opts.fiscalPeriodEnd Fiscal period end expressed YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution. 
     * @param {String} opts.currency Currency code for currency values. For a list of currency ISO codes, visit Online Assistant Page [OA1470](https://my.apps.factset.com/oa/pages/1470).  (default to 'LOCAL')
     * @param {module:model/String} opts.restated Update Status Flag:   * **RP** = Include preliminary data,   * **RF** = Only final data  (default to 'RP')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FundamentalsResponse}
     */
    getFdsFundamentals(ids, metrics, opts) {
      return this.getFdsFundamentalsWithHttpInfo(ids, metrics, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the Company Fundamental Data.
     * Retrieves FactSet Fundamental standardized data for an individual security. Use the /metrics endpoint to retrieve a full list of valid metrics or data items.   
     * @param {module:model/FundamentalsRequest} fundamentalsRequest Request object for requesting fundamentals data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FundamentalsResponse} and HTTP response
     */
    getFdsFundamentalsForListWithHttpInfo(fundamentalsRequest) {
      let postBody = fundamentalsRequest;
      // verify the required parameter 'fundamentalsRequest' is set
      if (fundamentalsRequest === undefined || fundamentalsRequest === null) {
        throw new Error("Missing the required parameter 'fundamentalsRequest' when calling getFdsFundamentalsForList");
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
      let returnType = FundamentalsResponse;
      return this.apiClient.callApi(
        '/factset-fundamentals/v1/fundamentals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the Company Fundamental Data.
     * Retrieves FactSet Fundamental standardized data for an individual security. Use the /metrics endpoint to retrieve a full list of valid metrics or data items.   
     * @param {module:model/FundamentalsRequest} fundamentalsRequest Request object for requesting fundamentals data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FundamentalsResponse}
     */
    getFdsFundamentalsForList(fundamentalsRequest) {
      return this.getFdsFundamentalsForListWithHttpInfo(fundamentalsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}