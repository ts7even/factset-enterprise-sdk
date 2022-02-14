/**
 * PA Engine API
 * Allow clients to fetch PA Engine Analytics through APIs.
 *
 * The version of the OpenAPI document: 2
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ComponentSummary from '../model/ComponentSummary';
import PAComponent from '../model/PAComponent';

/**
* Components service.
* @module api/ComponentsApi
* @version 0.8.1
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
     * Get PA component by id
     * This endpoint returns the default settings of a PA component.
     * @param {String} id Unique identifier for a PA component
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PAComponent} and HTTP response
     */
    getPAComponentByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPAComponentById");
      }

      let pathParams = {
        'id': id
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
      let returnType = PAComponent;
      return this.apiClient.callApi(
        '/analytics/lookups/v2/engines/pa/components/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get PA component by id
     * This endpoint returns the default settings of a PA component.
     * @param {String} id Unique identifier for a PA component
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PAComponent}
     */
    getPAComponentById(id) {
      return this.getPAComponentByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get PA components
     * This endpoint returns the list of PA components in a given PA document.
     * @param {String} document Document Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{String: ComponentSummary}>} and HTTP response
     */
    getPAComponentsWithHttpInfo(document) {
      let postBody = null;
      // verify the required parameter 'document' is set
      if (document === undefined || document === null) {
        throw new Error("Missing the required parameter 'document' when calling getPAComponents");
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
      let returnType = {'String': ComponentSummary};
      return this.apiClient.callApi(
        '/analytics/lookups/v2/engines/pa/components', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get PA components
     * This endpoint returns the list of PA components in a given PA document.
     * @param {String} document Document Name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{String: ComponentSummary}>}
     */
    getPAComponents(document) {
      return this.getPAComponentsWithHttpInfo(document)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
