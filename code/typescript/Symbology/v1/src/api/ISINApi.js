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
import IsinHistoryTranslationRequest from '../model/IsinHistoryTranslationRequest';
import IsinHistoryTranslationResponse from '../model/IsinHistoryTranslationResponse';
import IsinTranslationRequest from '../model/IsinTranslationRequest';
import IsinTranslationResponse from '../model/IsinTranslationResponse';

/**
* ISIN service.
* @module api/ISINApi
* @version 0.8.0
*/
export default class ISINApi {

    /**
    * Constructs a new ISINApi. 
    * @alias module:api/ISINApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieve the full history or as of a specific date of ISIN changes for a requested ID.
     * Return the full history of ISIN changes for a given market security or FactSet Permanent Id. 
     * @param {module:model/IsinHistoryTranslationRequest} isinHistoryTranslationRequest Request Body for ISIN History
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IsinHistoryTranslationResponse} and HTTP response
     */
    batchIsinHistoryWithHttpInfo(isinHistoryTranslationRequest) {
      let postBody = isinHistoryTranslationRequest;
      // verify the required parameter 'isinHistoryTranslationRequest' is set
      if (isinHistoryTranslationRequest === undefined || isinHistoryTranslationRequest === null) {
        throw new Error("Missing the required parameter 'isinHistoryTranslationRequest' when calling batchIsinHistory");
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
      let returnType = IsinHistoryTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v1/isin-history', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve the full history or as of a specific date of ISIN changes for a requested ID.
     * Return the full history of ISIN changes for a given market security or FactSet Permanent Id. 
     * @param {module:model/IsinHistoryTranslationRequest} isinHistoryTranslationRequest Request Body for ISIN History
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IsinHistoryTranslationResponse}
     */
    batchIsinHistory(isinHistoryTranslationRequest) {
      return this.batchIsinHistoryWithHttpInfo(isinHistoryTranslationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Translate market security symbols into ISIN.
     * Translate market security symbols into ISIN and FactSet Permanent Identifiers. 
     * @param {module:model/IsinTranslationRequest} isinTranslationRequest Request Body for ISIN Symbology Translation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IsinTranslationResponse} and HTTP response
     */
    batchTranslateIsinWithHttpInfo(isinTranslationRequest) {
      let postBody = isinTranslationRequest;
      // verify the required parameter 'isinTranslationRequest' is set
      if (isinTranslationRequest === undefined || isinTranslationRequest === null) {
        throw new Error("Missing the required parameter 'isinTranslationRequest' when calling batchTranslateIsin");
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
      let returnType = IsinTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v1/isin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Translate market security symbols into ISIN.
     * Translate market security symbols into ISIN and FactSet Permanent Identifiers. 
     * @param {module:model/IsinTranslationRequest} isinTranslationRequest Request Body for ISIN Symbology Translation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IsinTranslationResponse}
     */
    batchTranslateIsin(isinTranslationRequest) {
      return this.batchTranslateIsinWithHttpInfo(isinTranslationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve the full history or as of a specific date of ISIN changes for the requested ID(s).
     * Returns the full history of ISIN changes for a given security. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IsinHistoryTranslationResponse} and HTTP response
     */
    isinHistoryWithHttpInfo(ids) {
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling isinHistory");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IsinHistoryTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v1/isin-history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve the full history or as of a specific date of ISIN changes for the requested ID(s).
     * Returns the full history of ISIN changes for a given security. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IsinHistoryTranslationResponse}
     */
    isinHistory(ids) {
      return this.isinHistoryWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Translate market security symbols into ISIN.
     * Translate market security symbols into ISIN and FactSet Permanent Identifiers.  
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.asOfDate As-Of date for historical symbol request in YYYY-MM-DD format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IsinTranslationResponse} and HTTP response
     */
    translateIsinWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling translateIsin");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'asOfDate': opts['asOfDate']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IsinTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v1/isin', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Translate market security symbols into ISIN.
     * Translate market security symbols into ISIN and FactSet Permanent Identifiers.  
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.asOfDate As-Of date for historical symbol request in YYYY-MM-DD format.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IsinTranslationResponse}
     */
    translateIsin(ids, opts) {
      return this.translateIsinWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}