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
import PhoneNumberTypeDto from '../model/PhoneNumberTypeDto';
import ProblemDetails from '../model/ProblemDetails';

/**
* PhoneNumberTypes service.
* @module api/PhoneNumberTypesApi
* @version 0.9.1
*/
export default class PhoneNumberTypesApi {

    /**
    * Constructs a new PhoneNumberTypesApi. 
    * @alias module:api/PhoneNumberTypesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get list of the phone types configured in your group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PhoneNumberTypeDto>} and HTTP response
     */
    v1PhoneNumberTypesGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = [PhoneNumberTypeDto];
      return this.apiClient.callApi(
        '/v1/phone-number-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get list of the phone types configured in your group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PhoneNumberTypeDto>}
     */
    v1PhoneNumberTypesGet() {
      return this.v1PhoneNumberTypesGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a phone type
     * @param {String} phoneNumberTypeId phoneNumberTypeId for deleting associated record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    v1PhoneNumberTypesPhoneNumberTypeIdDeleteWithHttpInfo(phoneNumberTypeId) {
      let postBody = null;
      // verify the required parameter 'phoneNumberTypeId' is set
      if (phoneNumberTypeId === undefined || phoneNumberTypeId === null) {
        throw new Error("Missing the required parameter 'phoneNumberTypeId' when calling v1PhoneNumberTypesPhoneNumberTypeIdDelete");
      }

      let pathParams = {
        'phoneNumberTypeId': phoneNumberTypeId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/phone-number-types/{phoneNumberTypeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a phone type
     * @param {String} phoneNumberTypeId phoneNumberTypeId for deleting associated record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    v1PhoneNumberTypesPhoneNumberTypeIdDelete(phoneNumberTypeId) {
      return this.v1PhoneNumberTypesPhoneNumberTypeIdDeleteWithHttpInfo(phoneNumberTypeId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Edit a phone type
     * @param {String} phoneNumberTypeId phoneNumberTypeId to update associated record
     * @param {String} body Update with phoneNumberType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    v1PhoneNumberTypesPhoneNumberTypeIdPutWithHttpInfo(phoneNumberTypeId, body) {
      let postBody = body;
      // verify the required parameter 'phoneNumberTypeId' is set
      if (phoneNumberTypeId === undefined || phoneNumberTypeId === null) {
        throw new Error("Missing the required parameter 'phoneNumberTypeId' when calling v1PhoneNumberTypesPhoneNumberTypeIdPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling v1PhoneNumberTypesPhoneNumberTypeIdPut");
      }

      let pathParams = {
        'phoneNumberTypeId': phoneNumberTypeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/phone-number-types/{phoneNumberTypeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Edit a phone type
     * @param {String} phoneNumberTypeId phoneNumberTypeId to update associated record
     * @param {String} body Update with phoneNumberType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    v1PhoneNumberTypesPhoneNumberTypeIdPut(phoneNumberTypeId, body) {
      return this.v1PhoneNumberTypesPhoneNumberTypeIdPutWithHttpInfo(phoneNumberTypeId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a phone type
     * @param {String} body To add phoneNumberType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    v1PhoneNumberTypesPostWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling v1PhoneNumberTypesPost");
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
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/v1/phone-number-types', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a phone type
     * @param {String} body To add phoneNumberType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    v1PhoneNumberTypesPost(body) {
      return this.v1PhoneNumberTypesPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
