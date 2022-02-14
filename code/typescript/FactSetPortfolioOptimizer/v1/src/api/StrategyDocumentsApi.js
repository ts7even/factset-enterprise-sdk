/**
 * Engines API
 * Allow clients to fetch Engines Analytics through APIs.
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DocumentDirectories from '../model/DocumentDirectories';

/**
* StrategyDocuments service.
* @module api/StrategyDocumentsApi
* @version 0.8.1
*/
export default class StrategyDocumentsApi {

    /**
    * Constructs a new StrategyDocumentsApi. 
    * @alias module:api/StrategyDocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get FactSet Portfolio Optimizer strategy documents and sub-directories in a directory
     * This endpoint looks up all FactSet Portfolio Optimizer strategy documents and sub-directories in a given directory.
     * @param {String} path The directory to get the strategy documents and sub-directories in
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentDirectories} and HTTP response
     */
    getFPOStrategyDocumentsWithHttpInfo(path) {
      let postBody = null;
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling getFPOStrategyDocuments");
      }

      let pathParams = {
        'path': path
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DocumentDirectories;
      return this.apiClient.callApi(
        '/analytics/engines/fpo/v1/strategies/{path}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get FactSet Portfolio Optimizer strategy documents and sub-directories in a directory
     * This endpoint looks up all FactSet Portfolio Optimizer strategy documents and sub-directories in a given directory.
     * @param {String} path The directory to get the strategy documents and sub-directories in
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentDirectories}
     */
    getFPOStrategyDocuments(path) {
      return this.getFPOStrategyDocumentsWithHttpInfo(path)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
