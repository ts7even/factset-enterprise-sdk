/**
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CalculateFromHoldingsRequestBody from '../model/CalculateFromHoldingsRequestBody';
import ErrorResponse from '../model/ErrorResponse';
import GenerateIDMappingRequestBody from '../model/GenerateIDMappingRequestBody';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';

/**
* Operations service.
* @module api/OperationsApi
*/
export default class OperationsApi {

    /**
    * Constructs a new OperationsApi. 
    * @alias module:api/OperationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Calculate risk statistics
     * Calculate predicted risk statistics for provided holdings using risk model data. Asset symbols and market values/weights are required.
     * @param {String} version Semantic version number. See [this link here](https://regexr.com/47b7t) to test validate patterns.
     * @param {module:model/CalculateFromHoldingsRequestBody} calculateFromHoldingsRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    calculateFromHoldingsWithHttpInfo(version, calculateFromHoldingsRequestBody) {
      let postBody = calculateFromHoldingsRequestBody;
      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling calculateFromHoldings");
      }
      // verify the required parameter 'calculateFromHoldingsRequestBody' is set
      if (calculateFromHoldingsRequestBody === undefined || calculateFromHoldingsRequestBody === null) {
        throw new Error("Missing the required parameter 'calculateFromHoldingsRequestBody' when calling calculateFromHoldings");
      }

      let pathParams = {
        'version': version
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'text/plain'];


      let returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/linear/{version}/calculate/from-holdings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Calculate risk statistics
     * Calculate predicted risk statistics for provided holdings using risk model data. Asset symbols and market values/weights are required.
     * @param {String} version Semantic version number. See [this link here](https://regexr.com/47b7t) to test validate patterns.
     * @param {module:model/CalculateFromHoldingsRequestBody} calculateFromHoldingsRequestBody 
     * @return { Promise.< module:model/InlineResponse2004 > } a Promise, with data of type {@link module:model/InlineResponse2004 }
     */
    calculateFromHoldings(version, calculateFromHoldingsRequestBody) {
      return this.calculateFromHoldingsWithHttpInfo(version, calculateFromHoldingsRequestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generate risk model ID mapping
     * Resolve all input holdings IDs against a risk model for coverage and provide a mapping to security indices in the model or the reason for exclusion
     * @param {String} version Semantic version number. See [this link here](https://regexr.com/47b7t) to test validate patterns.
     * @param {module:model/GenerateIDMappingRequestBody} generateIDMappingRequestBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    generateIdMappingWithHttpInfo(version, generateIDMappingRequestBody) {
      let postBody = generateIDMappingRequestBody;
      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling generateIdMapping");
      }
      // verify the required parameter 'generateIDMappingRequestBody' is set
      if (generateIDMappingRequestBody === undefined || generateIDMappingRequestBody === null) {
        throw new Error("Missing the required parameter 'generateIDMappingRequestBody' when calling generateIdMapping");
      }

      let pathParams = {
        'version': version
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/linear/{version}/generate/id-mapping', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generate risk model ID mapping
     * Resolve all input holdings IDs against a risk model for coverage and provide a mapping to security indices in the model or the reason for exclusion
     * @param {String} version Semantic version number. See [this link here](https://regexr.com/47b7t) to test validate patterns.
     * @param {module:model/GenerateIDMappingRequestBody} generateIDMappingRequestBody 
     * @return { Promise.< module:model/InlineResponse2005 > } a Promise, with data of type {@link module:model/InlineResponse2005 }
     */
    generateIdMapping(version, generateIDMappingRequestBody) {
      return this.generateIdMappingWithHttpInfo(version, generateIDMappingRequestBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





