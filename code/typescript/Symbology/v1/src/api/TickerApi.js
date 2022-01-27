/**
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types. various market symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN,  SEDOL, Tickers, and Bloomberg FIGIs.   Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly  harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time. Additionally, the Symbology API provides  translation of market ids into Bloomberg FIGI. 
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import TickerHistoryTranslationRequest from '../model/TickerHistoryTranslationRequest';
import TickerHistoryTranslationResponse from '../model/TickerHistoryTranslationResponse';
import TickerTranslationRequest from '../model/TickerTranslationRequest';
import TickerTranslationResponse from '../model/TickerTranslationResponse';

/**
* Ticker service.
* @module api/TickerApi
* @version 0.8.0
*/
export default class TickerApi {

    /**
    * Constructs a new TickerApi. 
    * @alias module:api/TickerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security.
     * Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security. 
     * @param {module:model/TickerHistoryTranslationRequest} tickerHistoryTranslationRequest Request Body for Ticker History
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TickerHistoryTranslationResponse} and HTTP response
     */
    batchTickerHistoryWithHttpInfo(tickerHistoryTranslationRequest) {
      let postBody = tickerHistoryTranslationRequest;
      // verify the required parameter 'tickerHistoryTranslationRequest' is set
      if (tickerHistoryTranslationRequest === undefined || tickerHistoryTranslationRequest === null) {
        throw new Error("Missing the required parameter 'tickerHistoryTranslationRequest' when calling batchTickerHistory");
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
      let returnType = TickerHistoryTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v1/ticker-history', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security.
     * Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security. 
     * @param {module:model/TickerHistoryTranslationRequest} tickerHistoryTranslationRequest Request Body for Ticker History
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TickerHistoryTranslationResponse}
     */
    batchTickerHistory(tickerHistoryTranslationRequest) {
      return this.batchTickerHistoryWithHttpInfo(tickerHistoryTranslationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the Ticker-Exchange or Ticker-Region for a given security.
     * Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security. 
     * @param {module:model/TickerTranslationRequest} tickerTranslationRequest Request Body for Ticker History
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TickerTranslationResponse} and HTTP response
     */
    batchTranslateTickerWithHttpInfo(tickerTranslationRequest) {
      let postBody = tickerTranslationRequest;
      // verify the required parameter 'tickerTranslationRequest' is set
      if (tickerTranslationRequest === undefined || tickerTranslationRequest === null) {
        throw new Error("Missing the required parameter 'tickerTranslationRequest' when calling batchTranslateTicker");
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
      let returnType = TickerTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v1/ticker', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the Ticker-Exchange or Ticker-Region for a given security.
     * Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security. 
     * @param {module:model/TickerTranslationRequest} tickerTranslationRequest Request Body for Ticker History
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TickerTranslationResponse}
     */
    batchTranslateTicker(tickerTranslationRequest) {
      return this.batchTranslateTickerWithHttpInfo(tickerTranslationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security.
     * Return the full history of Ticker changes for a given market security or FactSet Permanent Id. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.tickerType Controls the Ticker Type returned. The only accepted parameter values are REGION or EXCHANGE.   * **REGION** = Ticker-Regional (e.g. GOOGL-US)   * **EXCHANGE** = TIcker-Exchange (e.g. GOOGL-NAS)  (default to 'REGION')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TickerHistoryTranslationResponse} and HTTP response
     */
    tickerHistoryWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling tickerHistory");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'tickerType': opts['tickerType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TickerHistoryTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v1/ticker-history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the full history of Ticker-Exchange or Ticker-Region changes for a requested security.
     * Return the full history of Ticker changes for a given market security or FactSet Permanent Id. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.tickerType Controls the Ticker Type returned. The only accepted parameter values are REGION or EXCHANGE.   * **REGION** = Ticker-Regional (e.g. GOOGL-US)   * **EXCHANGE** = TIcker-Exchange (e.g. GOOGL-NAS)  (default to 'REGION')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TickerHistoryTranslationResponse}
     */
    tickerHistory(ids, opts) {
      return this.tickerHistoryWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the Ticker-Exchange or Ticker-Region for a given security.
     * Returns the Ticker-Exchange or Ticker-Region for a given security. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.tickerType Controls the Ticker Type returned. The only accepted parameter values are REGION or EXCHANGE.   * **REGION** = Ticker-Regional (e.g. GOOGL-US)   * **EXCHANGE** = TIcker-Exchange (e.g. GOOGL-NAS)  (default to 'REGION')
     * @param {String} opts.asOfDate As-Of date for historical symbol request in YYYY-MM-DD format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TickerTranslationResponse} and HTTP response
     */
    translateTickerWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling translateTicker");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'tickerType': opts['tickerType'],
        'asOfDate': opts['asOfDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TickerTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v1/ticker', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the Ticker-Exchange or Ticker-Region for a given security.
     * Returns the Ticker-Exchange or Ticker-Region for a given security. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.tickerType Controls the Ticker Type returned. The only accepted parameter values are REGION or EXCHANGE.   * **REGION** = Ticker-Regional (e.g. GOOGL-US)   * **EXCHANGE** = TIcker-Exchange (e.g. GOOGL-NAS)  (default to 'REGION')
     * @param {String} opts.asOfDate As-Of date for historical symbol request in YYYY-MM-DD format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TickerTranslationResponse}
     */
    translateTicker(ids, opts) {
      return this.translateTickerWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}