/**
 * Documents Distributor - Documents API
 * Documents APIs that provide filings such as Global Filings and XML files such as StreetAccount    Global Filings API provides the capability to search and download filings documents from various exchanges around the world. The API also provides relevant metadata such as document source, company identifiers and form type around each filings document. Filings providers currently include EDGAR and SYMEX WebDisclosure.      StreetAccount XML API provides access to historical StreetAccount (SA) news. SA provides a summary for various corporate and market news written by journalist with background in financial markets.    The API delivers SA stories in XML format based on user-specified date input parameters. When the API request is completed, output files will be made available back to the users through a secure URL. This API has three endpoints (1) Request Files (2) Check Status (3) Get Files.   Files delivered contain both metadata and content body in each file. This eliminates the need to make multiple requests through multiple services to get all the information.  
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Response from '../model/Response';
import Status from '../model/Status';

/**
* GlobalFilingsAPI service.
* @module api/GlobalFilingsAPIApi
* @version 0.9.0
*/
export default class GlobalFilingsAPIApi {

    /**
    * Constructs a new GlobalFilingsAPIApi. 
    * @alias module:api/GlobalFilingsAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieve form types for each available Filings Source
     * Gets all available form types for the filings sources. Source parameter can be used to filter the results.
     * @param {module:model/String} source This parameter filters the results based on the source of the filings document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    globalFilingsV1FormTypesGetWithHttpInfo(source) {
      let postBody = null;
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling globalFilingsV1FormTypesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'source': source
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Response;
      return this.apiClient.callApi(
        '/global-filings/v1/form-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve form types for each available Filings Source
     * Gets all available form types for the filings sources. Source parameter can be used to filter the results.
     * @param {module:model/String} source This parameter filters the results based on the source of the filings document.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    globalFilingsV1FormTypesGet(source) {
      return this.globalFilingsV1FormTypesGetWithHttpInfo(source)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve filings and metadata within FactSet coverage
     * Gets the latest 25 filings files. Parameters can be used to filter and narrow down the results
     * @param {module:model/String} source This parameter filters the results based on the source of the filings documents.
     * @param {module:model/Number} paginationLimit Specifies the maximum number of results to return per result (max. 25)
     * @param {module:model/Number} paginationOffset Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Enables to get the data in ascending or descending order based on startTime. Results are in reverse chronological order if this parameter is not used (default to '-startDate')
     * @param {String} opts.startDate The earliest date the API should fetch for. Dates can be YYYY-MM-DD format
     * @param {String} opts.endDate The latest date the API should fetch for. Dates can be YYYY-MM-DD format
     * @param {String} opts.ids This parameter filters the results based on ticker ID.
     * @param {String} opts.formType This parameter filters the results based on filings formType. Use the form-types endpoint to view the formTypes available by filings source.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    globalFilingsV1ListFilesGetWithHttpInfo(source, paginationLimit, paginationOffset, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling globalFilingsV1ListFilesGet");
      }
      // verify the required parameter 'paginationLimit' is set
      if (paginationLimit === undefined || paginationLimit === null) {
        throw new Error("Missing the required parameter 'paginationLimit' when calling globalFilingsV1ListFilesGet");
      }
      // verify the required parameter 'paginationOffset' is set
      if (paginationOffset === undefined || paginationOffset === null) {
        throw new Error("Missing the required parameter 'paginationOffset' when calling globalFilingsV1ListFilesGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'source': source,
        '_sort': opts['sort'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        '_paginationLimit': paginationLimit,
        '_paginationOffset': paginationOffset,
        'ids': opts['ids'],
        'formType': opts['formType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Response;
      return this.apiClient.callApi(
        '/global-filings/v1/list-files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve filings and metadata within FactSet coverage
     * Gets the latest 25 filings files. Parameters can be used to filter and narrow down the results
     * @param {module:model/String} source This parameter filters the results based on the source of the filings documents.
     * @param {module:model/Number} paginationLimit Specifies the maximum number of results to return per result (max. 25)
     * @param {module:model/Number} paginationOffset Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.sort Enables to get the data in ascending or descending order based on startTime. Results are in reverse chronological order if this parameter is not used (default to '-startDate')
     * @param {String} opts.startDate The earliest date the API should fetch for. Dates can be YYYY-MM-DD format
     * @param {String} opts.endDate The latest date the API should fetch for. Dates can be YYYY-MM-DD format
     * @param {String} opts.ids This parameter filters the results based on ticker ID.
     * @param {String} opts.formType This parameter filters the results based on filings formType. Use the form-types endpoint to view the formTypes available by filings source.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    globalFilingsV1ListFilesGet(source, paginationLimit, paginationOffset, opts) {
      return this.globalFilingsV1ListFilesGetWithHttpInfo(source, paginationLimit, paginationOffset, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}