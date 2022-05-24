/**
 * fpo_mp_input
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import OptimizerInputsMultiPeriodInput from '../model/OptimizerInputsMultiPeriodInput';
import OptimizerOutputsMultiPeriodOutput from '../model/OptimizerOutputsMultiPeriodOutput';

/**
* Default service.
* @module api/DefaultApi
* @version 0.20.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/OptimizerInputsMultiPeriodInput} opts.multiPeriodInput Multiperiod protobuf input
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OptimizerOutputsMultiPeriodOutput} and HTTP response
     */
    mpoV1OptimizeFPOPostWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['multiPeriodInput'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/x-protobuf'];
      let accepts = ['application/x-protobuf'];


      let returnType = OptimizerOutputsMultiPeriodOutput;

      return this.apiClient.callApi(
        '/mpo/v1/optimizeFPO', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/OptimizerInputsMultiPeriodInput} opts.multiPeriodInput Multiperiod protobuf input
     * @return { Promise.< module:model/OptimizerOutputsMultiPeriodOutput > } a Promise, with data of type {@link module:model/OptimizerOutputsMultiPeriodOutput }
     */
    mpoV1OptimizeFPOPost(opts) {
      return this.mpoV1OptimizeFPOPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}




