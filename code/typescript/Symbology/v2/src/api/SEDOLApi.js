/**
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and Bloomberg FIGIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs. Translate market IDs into CUSIP, SEDOL, ISIN, Tickers as of a point in time or for the entire history of the requested id allowing Data Management workflows to normalize ids over time.</p> 
 *
 * The version of the OpenAPI document: 2.1.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import SedolHistoryTranslationRequest from '../model/SedolHistoryTranslationRequest';
import SedolHistoryTranslationResponse from '../model/SedolHistoryTranslationResponse';
import SedolTranslationRequest from '../model/SedolTranslationRequest';
import SedolTranslationResponse from '../model/SedolTranslationResponse';

/**
* SEDOL service.
* @module api/SEDOLApi
* @version 0.9.1
*/
export default class SEDOLApi {

    /**
    * Constructs a new SEDOLApi. 
    * @alias module:api/SEDOLApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieve the full history or as of a specific date of SEDOL changes for a requested ID.
     * Return the full history of SEDOL changes for a given market security or FactSet Permanent Id. The service will default to returning the full history if no asOfDate is requested. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 
     * @param {module:model/SedolHistoryTranslationRequest} sedolHistoryTranslationRequest Response Body for SEDOL History
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SedolHistoryTranslationResponse} and HTTP response
     */
    batchSedolHistoryWithHttpInfo(sedolHistoryTranslationRequest) {
      let postBody = sedolHistoryTranslationRequest;
      // verify the required parameter 'sedolHistoryTranslationRequest' is set
      if (sedolHistoryTranslationRequest === undefined || sedolHistoryTranslationRequest === null) {
        throw new Error("Missing the required parameter 'sedolHistoryTranslationRequest' when calling batchSedolHistory");
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
      let returnType = SedolHistoryTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v2/sedol-history', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve the full history or as of a specific date of SEDOL changes for a requested ID.
     * Return the full history of SEDOL changes for a given market security or FactSet Permanent Id. The service will default to returning the full history if no asOfDate is requested. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 
     * @param {module:model/SedolHistoryTranslationRequest} sedolHistoryTranslationRequest Response Body for SEDOL History
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SedolHistoryTranslationResponse}
     */
    batchSedolHistory(sedolHistoryTranslationRequest) {
      return this.batchSedolHistoryWithHttpInfo(sedolHistoryTranslationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Translate market security symbols into SEDOL. - Current Only
     * Translate market security symbols into SEDOL and FactSet Permanent Identifiers. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 
     * @param {module:model/SedolTranslationRequest} sedolTranslationRequest Request Body for SEDOL Symbology Translation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SedolTranslationResponse} and HTTP response
     */
    batchTranslateSedolWithHttpInfo(sedolTranslationRequest) {
      let postBody = sedolTranslationRequest;
      // verify the required parameter 'sedolTranslationRequest' is set
      if (sedolTranslationRequest === undefined || sedolTranslationRequest === null) {
        throw new Error("Missing the required parameter 'sedolTranslationRequest' when calling batchTranslateSedol");
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
      let returnType = SedolTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v2/sedol', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Translate market security symbols into SEDOL. - Current Only
     * Translate market security symbols into SEDOL and FactSet Permanent Identifiers. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 
     * @param {module:model/SedolTranslationRequest} sedolTranslationRequest Request Body for SEDOL Symbology Translation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SedolTranslationResponse}
     */
    batchTranslateSedol(sedolTranslationRequest) {
      return this.batchTranslateSedolWithHttpInfo(sedolTranslationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve the full history or as of a specific date of SEDOL changes for the requested ID(s).
     * Returns the full history of SEDOL changes for a given security or as of a requested date. The service will default to returning the full history if no asOfDate is requested. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId'. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.asOfDate As-Of date for historical symbol request in YYYY-MM-DD format. This is the date requested in the service. If no asOfDate was requested, the response will be null.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SedolHistoryTranslationResponse} and HTTP response
     */
    sedolHistoryWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling sedolHistory");
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
      let returnType = SedolHistoryTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v2/sedol-history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve the full history or as of a specific date of SEDOL changes for the requested ID(s).
     * Returns the full history of SEDOL changes for a given security or as of a requested date. The service will default to returning the full history if no asOfDate is requested. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId'. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @param {Object} opts Optional parameters
     * @param {String} opts.asOfDate As-Of date for historical symbol request in YYYY-MM-DD format. This is the date requested in the service. If no asOfDate was requested, the response will be null.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SedolHistoryTranslationResponse}
     */
    sedolHistory(ids, opts) {
      return this.sedolHistoryWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Translate market security symbols into SEDOL. - Current Only
     * Translate market security symbols into SEDOL and FactSet Permanent Identifiers. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId'. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SedolTranslationResponse} and HTTP response
     */
    translateSedolWithHttpInfo(ids) {
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling translateSedol");
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
      let returnType = SedolTranslationResponse;
      return this.apiClient.callApi(
        '/symbology/v2/sedol', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Translate market security symbols into SEDOL. - Current Only
     * Translate market security symbols into SEDOL and FactSet Permanent Identifiers. Visit [OA 3938](https://my.apps.factset.com/oa/pages/3938%23sedol) for more details regarding the SEDOL numbering system. 
     * @param {Array.<String>} ids Requested market securities or entities. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, `requestId'. <p>***ids limit** =  3000 per request*</p> *<p>Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \"POST\" method.</p>*
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SedolTranslationResponse}
     */
    translateSedol(ids) {
      return this.translateSedolWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
