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
import ProblemDetails from '../model/ProblemDetails';
import SubjectConfigDto from '../model/SubjectConfigDto';
import SubjectSummaryDto from '../model/SubjectSummaryDto';

/**
* Subjects service.
* @module api/SubjectsApi
* @version 0.9.1
*/
export default class SubjectsApi {

    /**
    * Constructs a new SubjectsApi. 
    * @alias module:api/SubjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get all Subjects
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xIRNIgnorePermissions  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SubjectSummaryDto>} and HTTP response
     */
    v1SubjectsGetWithHttpInfo(opts) {
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
      let returnType = [SubjectSummaryDto];
      return this.apiClient.callApi(
        '/v1/subjects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all Subjects
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xIRNIgnorePermissions  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SubjectSummaryDto>}
     */
    v1SubjectsGet(opts) {
      return this.v1SubjectsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Subject details for the given Id provided
     * @param {String} subjectId Id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xIRNIgnorePermissions  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubjectConfigDto} and HTTP response
     */
    v1SubjectsSubjectIdGetWithHttpInfo(subjectId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'subjectId' is set
      if (subjectId === undefined || subjectId === null) {
        throw new Error("Missing the required parameter 'subjectId' when calling v1SubjectsSubjectIdGet");
      }

      let pathParams = {
        'subjectId': subjectId
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
      let returnType = SubjectConfigDto;
      return this.apiClient.callApi(
        '/v1/subjects/{subjectId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Subject details for the given Id provided
     * @param {String} subjectId Id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.xIRNIgnorePermissions  (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SubjectConfigDto}
     */
    v1SubjectsSubjectIdGet(subjectId, opts) {
      return this.v1SubjectsSubjectIdGetWithHttpInfo(subjectId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
