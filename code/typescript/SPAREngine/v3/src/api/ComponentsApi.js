/**
 * SPAR Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ClientErrorResponse from '../model/ClientErrorResponse';
import ComponentSummaryRoot from '../model/ComponentSummaryRoot';

/**
* Components service.
* @module api/ComponentsApi
* @version 0.9.0
*/
export default class ComponentsApi {

    /**
    * Constructs a new ComponentsApi. 
    * @alias module:api/ComponentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get SPAR components
     * This endpoint returns the list of SPAR components in a given SPAR document.
     * @param {String} document Document Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ComponentSummaryRoot} and HTTP response
     */
    getSPARComponentsWithHttpInfo(document) {
      let postBody = null;
      // verify the required parameter 'document' is set
      if (document === undefined || document === null) {
        throw new Error("Missing the required parameter 'document' when calling getSPARComponents");
      }

      let pathParams = {
      };
      let queryParams = {
        'document': document
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ComponentSummaryRoot;
      return this.apiClient.callApi(
        '/analytics/engines/spar/v3/components', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get SPAR components
     * This endpoint returns the list of SPAR components in a given SPAR document.
     * @param {String} document Document Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ComponentSummaryRoot}
     */
    getSPARComponents(document) {
      return this.getSPARComponentsWithHttpInfo(document)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}