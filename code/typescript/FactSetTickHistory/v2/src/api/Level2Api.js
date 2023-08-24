/**
 * Tick History
 * Tick History provides dynamic access to historical tick data for a specific security for specific dates or date range.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CompletedResponse from '../model/CompletedResponse';
import LevelTwoRequest from '../model/LevelTwoRequest';
import LeveltwoGetFilesResponse from '../model/LeveltwoGetFilesResponse';
import Status from '../model/Status';
import SubmittedResponse from '../model/SubmittedResponse';

/**
* Level2 service.
* @module api/Level2Api
*/
export default class Level2Api {

    /**
    * Constructs a new Level2Api. 
    * @alias module:api/Level2Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the status of the ID
     * Need to plug-in the id get from /create endpoint into /status endpoint
     * @param {String} id id returned by files create endpoint to poll and collect status of the query
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CompletedResponse} and HTTP response
     */
    getStatusLevel2WithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getStatusLevel2");
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

      let returnType = GetStatusLevel2ResponseWrapperTypeMap;
      
      return this.apiClient.callApi(
        '/level2/files/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the status of the ID
     * Need to plug-in the id get from /create endpoint into /status endpoint
     * @param {String} id id returned by files create endpoint to poll and collect status of the query
     * @return { Promise.< GetStatusLevel2ResponseWrapper > } a Promise, with data of type {@link GetStatusLevel2ResponseWrapper }
     */
    getStatusLevel2(id) {
      return this.getStatusLevel2WithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the tick history files requested in the /create endpoint
     * Returns the files from tickhistory endpoint
     * @param {String} id id returned by files create endpoint to poll and collect results of the query
     * @param {Object} opts Optional parameters
     * @param {Number} opts.paginationLimit Specifies the maximum number of results to return per response page (default to 20)
     * @param {Number} opts.paginationOffset Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results (default to 0)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeveltwoGetFilesResponse} and HTTP response
     */
    getTickHistoryFilesLevel2WithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTickHistoryFilesLevel2");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_paginationLimit': opts['paginationLimit'],
        '_paginationOffset': opts['paginationOffset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];

      let returnType = GetTickHistoryFilesLevel2ResponseWrapperTypeMap;
      
      return this.apiClient.callApi(
        '/level2/files/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the tick history files requested in the /create endpoint
     * Returns the files from tickhistory endpoint
     * @param {String} id id returned by files create endpoint to poll and collect results of the query
     * @param {Object} opts Optional parameters
     * @param {Number} opts.paginationLimit Specifies the maximum number of results to return per response page (default to 20)
     * @param {Number} opts.paginationOffset Specifies the starting point for pagination. This parameter is used to identify the beginning of next set of results (default to 0)
     * @return { Promise.< GetTickHistoryFilesLevel2ResponseWrapper > } a Promise, with data of type {@link GetTickHistoryFilesLevel2ResponseWrapper }
     */
    getTickHistoryFilesLevel2(id, opts) {
      return this.getTickHistoryFilesLevel2WithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the ID for the requested data.
     * Data available from past 6 years to current date.
     * @param {module:model/LevelTwoRequest} levelTwoRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SubmittedResponse} and HTTP response
     */
    getlevel2idWithHttpInfo(levelTwoRequest) {
      let postBody = levelTwoRequest;
      // verify the required parameter 'levelTwoRequest' is set
      if (levelTwoRequest === undefined || levelTwoRequest === null) {
        throw new Error("Missing the required parameter 'levelTwoRequest' when calling getlevel2id");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = SubmittedResponse;

      return this.apiClient.callApi(
        '/level2/files/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the ID for the requested data.
     * Data available from past 6 years to current date.
     * @param {module:model/LevelTwoRequest} levelTwoRequest 
     * @return { Promise.< module:model/SubmittedResponse > } a Promise, with data of type {@link module:model/SubmittedResponse }
     */
    getlevel2id(levelTwoRequest) {
      return this.getlevel2idWithHttpInfo(levelTwoRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}


const GetStatusLevel2ResponseWrapperTypeMap = {
  201: CompletedResponse,
  202: SubmittedResponse,
  401: Status,
  403: Status,
  404: Status,
  500: Status,

  _createResponseWrapper(statusCode, response) {
    return new GetStatusLevel2ResponseWrapper(statusCode, response);
  }
};

const GetTickHistoryFilesLevel2ResponseWrapperTypeMap = {
  200: LeveltwoGetFilesResponse,
  202: SubmittedResponse,
  400: Status,
  401: Status,
  403: Status,
  404: Status,
  500: Status,

  _createResponseWrapper(statusCode, response) {
    return new GetTickHistoryFilesLevel2ResponseWrapper(statusCode, response);
  }
};



/**
 * Wrapper to support GET /level2/files/status returning different types
 * per status code.
 *
 * <p>
 * Responses:
 * <ul>
 *   <li>201 : {@code CompletedResponse }<br>The Request has been created and the response has been created. </li>
 * 
 *   <li>202 : {@code SubmittedResponse }<br>The Request has not finished and the result has NOT been created. </li>
 * </ul>
 *
 * </p>
 * Example:
 * <pre>{@code
 * const response = ...;
 * switch (response.statusCode) {
 *   case 201:
 *     CompletedResponse data201 = response.getResponse201();
 *     break;
 *   case 202:
 *     SubmittedResponse data202 = response.getResponse202();
 *     break;
 *  }
 * }</pre>
 *
 * @alias module:GetStatusLevel2ResponseWrapper
 * @class
 */
export class GetStatusLevel2ResponseWrapper {

  /**
   * @param {number} statusCode
   * @param {*} response
   */
  constructor(statusCode, response) {
    /**
     * @type {number}
     */
    this.statusCode = statusCode;

    /**
     * @type {*}
     */
    this.response = response;
  }

  
  /**
   * @returns { CompletedResponse }
   */
  getResponse201() {
    if (this.statusCode !== 201) {
      throw new Error("Invalid response getter called. getResponse201 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { SubmittedResponse }
   */
  getResponse202() {
    if (this.statusCode !== 202) {
      throw new Error("Invalid response getter called. getResponse202 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
}

/**
 * Wrapper to support GET /level2/files/get returning different types
 * per status code.
 *
 * <p>
 * Responses:
 * <ul>
 *   <li>200 : {@code LeveltwoGetFilesResponse }<br>Success&lt;/p&gt; **To download the output file copy the response url in a browser**</li>
 * 
 *   <li>202 : {@code SubmittedResponse }<br> The Request has not finished and the result has NOT been created. </li>
 * </ul>
 *
 * </p>
 * Example:
 * <pre>{@code
 * const response = ...;
 * switch (response.statusCode) {
 *   case 200:
 *     LeveltwoGetFilesResponse data200 = response.getResponse200();
 *     break;
 *   case 202:
 *     SubmittedResponse data202 = response.getResponse202();
 *     break;
 *  }
 * }</pre>
 *
 * @alias module:GetTickHistoryFilesLevel2ResponseWrapper
 * @class
 */
export class GetTickHistoryFilesLevel2ResponseWrapper {

  /**
   * @param {number} statusCode
   * @param {*} response
   */
  constructor(statusCode, response) {
    /**
     * @type {number}
     */
    this.statusCode = statusCode;

    /**
     * @type {*}
     */
    this.response = response;
  }

  
  /**
   * @returns { LeveltwoGetFilesResponse }
   */
  getResponse200() {
    if (this.statusCode !== 200) {
      throw new Error("Invalid response getter called. getResponse200 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { SubmittedResponse }
   */
  getResponse202() {
    if (this.statusCode !== 202) {
      throw new Error("Invalid response getter called. getResponse202 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
}


