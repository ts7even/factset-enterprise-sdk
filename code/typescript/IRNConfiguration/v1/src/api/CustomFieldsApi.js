/**
 * IRN API v1
 * Allows users to create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CustomFieldConfigDto from '../model/CustomFieldConfigDto';
import ProblemDetails from '../model/ProblemDetails';

/**
* CustomFields service.
* @module api/CustomFieldsApi
* @version 0.9.1
*/
export default class CustomFieldsApi {

    /**
    * Constructs a new CustomFieldsApi. 
    * @alias module:api/CustomFieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get all Custom Fields
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xIRNIgnorePermissions  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CustomFieldConfigDto>} and HTTP response
     */
    v1CustomFieldsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-IRN-Ignore-Permissions': opts['xIRNIgnorePermissions']
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CustomFieldConfigDto];
      return this.apiClient.callApi(
        '/v1/custom-fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all Custom Fields
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xIRNIgnorePermissions  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CustomFieldConfigDto>}
     */
    v1CustomFieldsGet(opts) {
      return this.v1CustomFieldsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
