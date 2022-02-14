/**
 * FactSet Capital Structure Report Builder API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import ErrorResponse from '../model/ErrorResponse';
import Response from '../model/Response';

/**
* CapitalStructure service.
* @module api/CapitalStructureApi
* @version 0.9.1
*/
export default class CapitalStructureApi {

    /**
    * Constructs a new CapitalStructureApi. 
    * @alias module:api/CapitalStructureApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Debt Capital Structure (DCS)
     * @param {String} id Company ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getDcsDetailWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDcsDetail");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'schema': opts['schema']
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
        '/dcs-detail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Debt Capital Structure (DCS)
     * @param {String} id Company ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getDcsDetail(id, opts) {
      return this.getDcsDetailWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Debt Capital Structure (DCS) Summary
     * @param {String} id Company ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getDcsSummaryWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDcsSummary");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        'schema': opts['schema']
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
        '/dcs-summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Debt Capital Structure (DCS) Summary
     * @param {String} id Company ticker
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.schema The schema that the data is returned as. The following are descriptions for the accepted values: - table_group_level - STACH 2.0 row organized package format with parent-child relationships represented using STACH group level cell metadata - table_parent_child_columns - STACH 2.0 row organized package format with parent-child relationships represented using STACH parent-child columns  (default to 'table_parent_child_columns')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getDcsSummary(id, opts) {
      return this.getDcsSummaryWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Source of Capital
     * @param {String} id Company ticker
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Response} and HTTP response
     */
    getSourceOfCapitalWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSourceOfCapital");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id
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
        '/source-of-capital', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Source of Capital
     * @param {String} id Company ticker
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Response}
     */
    getSourceOfCapital(id) {
      return this.getSourceOfCapitalWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
