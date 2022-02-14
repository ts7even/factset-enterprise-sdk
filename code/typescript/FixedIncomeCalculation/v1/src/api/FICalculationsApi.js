/**
 * FI API
 * Allow clients to fetch Analytics through APIs.
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
import FICalculationParameters from '../model/FICalculationParameters';

/**
* FICalculations service.
* @module api/FICalculationsApi
* @version 0.8.1
*/
export default class FICalculationsApi {

    /**
    * Constructs a new FICalculationsApi. 
    * @alias module:api/FICalculationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancel FI calculation by id
     * This is the endpoint to cancel a previously submitted calculation.  Instead of doing a GET on the polling URL, cancel the request by doing a DELETE.
     * @param {String} id from url, provided from the location header in the Run FI Calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelFICalculationByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelFICalculationById");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/analytics/engines/fi/v1/calculations/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel FI calculation by id
     * This is the endpoint to cancel a previously submitted calculation.  Instead of doing a GET on the polling URL, cancel the request by doing a DELETE.
     * @param {String} id from url, provided from the location header in the Run FI Calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    cancelFICalculationById(id) {
      return this.cancelFICalculationByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get FI calculation by id
     * This is the endpoint to check on the progress of a previously requested calculation.  If the calculation has finished computing, the body of the response will contain the requested document in JSON.  Otherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage.
     * @param {String} id from url, provided from the location header in the Run FI Calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getFICalculationByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFICalculationById");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/analytics/engines/fi/v1/calculations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get FI calculation by id
     * This is the endpoint to check on the progress of a previously requested calculation.  If the calculation has finished computing, the body of the response will contain the requested document in JSON.  Otherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage.
     * @param {String} id from url, provided from the location header in the Run FI Calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getFICalculationById(id) {
      return this.getFICalculationByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Run FI calculation
     * This endpoint creates a new FI calculation.  This must be used first before get status or cancelling endpoints with a calculation id.  A successful response will contain the resulting FI calculation or a polling URL in location header if the request takes too long.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xFactSetContentOrganization FactSet content organization
     * @param {String} opts.xFactSetContentType FactSet content type
     * @param {module:model/FICalculationParameters} opts.fICalculationParameters 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    runFICalculationWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['fICalculationParameters'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-FactSet-Content-Organization': opts['xFactSetContentOrganization'],
        'X-FactSet-Content-Type': opts['xFactSetContentType']
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/analytics/engines/fi/v1/calculations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Run FI calculation
     * This endpoint creates a new FI calculation.  This must be used first before get status or cancelling endpoints with a calculation id.  A successful response will contain the resulting FI calculation or a polling URL in location header if the request takes too long.
     * @param {Object} opts Optional parameters
     * @param {String} opts.xFactSetContentOrganization FactSet content organization
     * @param {String} opts.xFactSetContentType FactSet content type
     * @param {module:model/FICalculationParameters} opts.fICalculationParameters 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    runFICalculation(opts) {
      return this.runFICalculationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
