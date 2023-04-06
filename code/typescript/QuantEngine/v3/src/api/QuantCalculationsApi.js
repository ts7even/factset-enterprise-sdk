/**
 * Quant API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CalculationStatusRoot from '../model/CalculationStatusRoot';
import CalculationsSummaryRoot from '../model/CalculationsSummaryRoot';
import ClientErrorResponse from '../model/ClientErrorResponse';
import ObjectRoot from '../model/ObjectRoot';
import QuantCalculationParametersRoot from '../model/QuantCalculationParametersRoot';

/**
* QuantCalculations service.
* @module api/QuantCalculationsApi
*/
export default class QuantCalculationsApi {

    /**
    * Constructs a new QuantCalculationsApi. 
    * @alias module:api/QuantCalculationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancel Quant calculation by id
     * This is the endpoint to cancel a previously submitted calculation.
     * @param {String} id from url, provided from the location header in the Create and Run Quant calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    cancelCalculationByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelCalculationById");
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
      let accepts = ['text/plain', 'application/json', 'text/json'];


      let returnType = null;

      return this.apiClient.callApi(
        '/analytics/engines/quant/v3/calculations/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel Quant calculation by id
     * This is the endpoint to cancel a previously submitted calculation.
     * @param {String} id from url, provided from the location header in the Create and Run Quant calculation endpoint
     * @return { Promise } a Promise
     */
    cancelCalculationById(id) {
      return this.cancelCalculationByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all calculations
     * This endpoints returns all calculation requests.
     * @param {Number} pageNumber 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationsSummaryRoot} and HTTP response
     */
    getAllCalculationsWithHttpInfo(pageNumber) {
      let postBody = null;
      // verify the required parameter 'pageNumber' is set
      if (pageNumber === undefined || pageNumber === null) {
        throw new Error("Missing the required parameter 'pageNumber' when calling getAllCalculations");
      }

      let pathParams = {
      };
      let queryParams = {
        'pageNumber': pageNumber
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = CalculationsSummaryRoot;

      return this.apiClient.callApi(
        '/analytics/engines/quant/v3/calculations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all calculations
     * This endpoints returns all calculation requests.
     * @param {Number} pageNumber 
     * @return { Promise.< module:model/CalculationsSummaryRoot > } a Promise, with data of type {@link module:model/CalculationsSummaryRoot }
     */
    getAllCalculations(pageNumber) {
      return this.getAllCalculationsWithHttpInfo(pageNumber)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Quant Engine calculation parameters by id
     * This is the endpoint that returns the calculation parameters passed for a calculation.
     * @param {String} id from url, provided from the location header in the Create and Run Quant Engine calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/QuantCalculationParametersRoot} and HTTP response
     */
    getCalculationParametersWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCalculationParameters");
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


      let returnType = QuantCalculationParametersRoot;

      return this.apiClient.callApi(
        '/analytics/engines/quant/v3/calculations/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Quant Engine calculation parameters by id
     * This is the endpoint that returns the calculation parameters passed for a calculation.
     * @param {String} id from url, provided from the location header in the Create and Run Quant Engine calculation endpoint
     * @return { Promise.< module:model/QuantCalculationParametersRoot > } a Promise, with data of type {@link module:model/QuantCalculationParametersRoot }
     */
    getCalculationParameters(id) {
      return this.getCalculationParametersWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Quant Engine calculation status by id
     * This is the endpoint to check on the progress of a previously requested calculation.  If the calculation has finished computing, the location header will point to the result url.  Otherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage.
     * @param {String} id from url, provided from the location header in the Create and Run Quant Engine calculation endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationStatusRoot} and HTTP response
     */
    getCalculationStatusByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCalculationStatusById");
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


      let returnType = CalculationStatusRoot;

      return this.apiClient.callApi(
        '/analytics/engines/quant/v3/calculations/{id}/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Quant Engine calculation status by id
     * This is the endpoint to check on the progress of a previously requested calculation.  If the calculation has finished computing, the location header will point to the result url.  Otherwise, the calculation is still running and the X-FactSet-Api-PickUp-Progress header will contain a progress percentage.
     * @param {String} id from url, provided from the location header in the Create and Run Quant Engine calculation endpoint
     * @return { Promise.< module:model/CalculationStatusRoot > } a Promise, with data of type {@link module:model/CalculationStatusRoot }
     */
    getCalculationStatusById(id) {
      return this.getCalculationStatusByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Quant Engine calculation metadata information by id
     * This is the endpoint to get the metadata information of a previously requested calculation.
     * @param {String} id from url, provided from the location header in the Get Quant calculation status by id endpoint
     * @param {String} unitId from url, provided from the location header in the Get Quant calculation status by id endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    getCalculationUnitInfoByIdWithHttpInfo(id, unitId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCalculationUnitInfoById");
      }
      // verify the required parameter 'unitId' is set
      if (unitId === undefined || unitId === null) {
        throw new Error("Missing the required parameter 'unitId' when calling getCalculationUnitInfoById");
      }

      let pathParams = {
        'id': id,
        'unitId': unitId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/x-protobuf', 'application/octet-stream'];


      let returnType = File;

      return this.apiClient.callApi(
        '/analytics/engines/quant/v3/calculations/{id}/units/{unitId}/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Quant Engine calculation metadata information by id
     * This is the endpoint to get the metadata information of a previously requested calculation.
     * @param {String} id from url, provided from the location header in the Get Quant calculation status by id endpoint
     * @param {String} unitId from url, provided from the location header in the Get Quant calculation status by id endpoint
     * @return { Promise.< File > } a Promise, with data of type {@link File }
     */
    getCalculationUnitInfoById(id, unitId) {
      return this.getCalculationUnitInfoByIdWithHttpInfo(id, unitId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Quant Engine calculation result by id
     * This is the endpoint to get the result of a previously requested calculation.  If the calculation has finished computing, the body of the response will contain the requested document in JSON.
     * @param {String} id from url, provided from the location header in the Get Quant Engine calculation status by id endpoint
     * @param {String} unitId from url, provided from the location header in the Get Quant Engine calculation status by id endpoint
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link File} and HTTP response
     */
    getCalculationUnitResultByIdWithHttpInfo(id, unitId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCalculationUnitResultById");
      }
      // verify the required parameter 'unitId' is set
      if (unitId === undefined || unitId === null) {
        throw new Error("Missing the required parameter 'unitId' when calling getCalculationUnitResultById");
      }

      let pathParams = {
        'id': id,
        'unitId': unitId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/x-protobuf', 'application/octet-stream'];


      let returnType = File;

      return this.apiClient.callApi(
        '/analytics/engines/quant/v3/calculations/{id}/units/{unitId}/result', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Quant Engine calculation result by id
     * This is the endpoint to get the result of a previously requested calculation.  If the calculation has finished computing, the body of the response will contain the requested document in JSON.
     * @param {String} id from url, provided from the location header in the Get Quant Engine calculation status by id endpoint
     * @param {String} unitId from url, provided from the location header in the Get Quant Engine calculation status by id endpoint
     * @return { Promise.< File > } a Promise, with data of type {@link File }
     */
    getCalculationUnitResultById(id, unitId) {
      return this.getCalculationUnitResultByIdWithHttpInfo(id, unitId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create and Run Quant Engine calculation
     * This endpoint runs the Quant Engine calculation specified in the POST body parameters.  It can take one or more calculation units as input.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl Standard HTTP header.  Accepts no-store, max-age, max-stale.
     * @param {module:model/QuantCalculationParametersRoot} opts.quantCalculationParametersRoot 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationStatusRoot} and HTTP response
     */
    postAndCalculateWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['quantCalculationParametersRoot'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl']
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/x-protobuf'];

      let returnType = PostAndCalculateResponseWrapperTypeMap;
      
      return this.apiClient.callApi(
        '/analytics/engines/quant/v3/calculations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create and Run Quant Engine calculation
     * This endpoint runs the Quant Engine calculation specified in the POST body parameters.  It can take one or more calculation units as input.
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl Standard HTTP header.  Accepts no-store, max-age, max-stale.
     * @param {module:model/QuantCalculationParametersRoot} opts.quantCalculationParametersRoot 
     * @return { Promise.< PostAndCalculateResponseWrapper > } a Promise, with data of type {@link PostAndCalculateResponseWrapper }
     */
    postAndCalculate(opts) {
      return this.postAndCalculateWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update Quant Engine calculation and run it.
     * This endpoint updates and runs the Quant Engine calculation specified in the PUT body parameters. This also allows creating new Quant Engine calculations with custom ids.  It can take one or more calculation units as input.
     * @param {String} id from url, provided from the location header in the Create and Run Quant Engine calculation endpoint
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl Standard HTTP header.  Accepts no-store, max-age, max-stale.
     * @param {module:model/QuantCalculationParametersRoot} opts.quantCalculationParametersRoot Calculation Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CalculationStatusRoot} and HTTP response
     */
    putAndCalculateWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['quantCalculationParametersRoot'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putAndCalculate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'Cache-Control': opts['cacheControl']
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/x-protobuf'];

      let returnType = PutAndCalculateResponseWrapperTypeMap;
      
      return this.apiClient.callApi(
        '/analytics/engines/quant/v3/calculations/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create or update Quant Engine calculation and run it.
     * This endpoint updates and runs the Quant Engine calculation specified in the PUT body parameters. This also allows creating new Quant Engine calculations with custom ids.  It can take one or more calculation units as input.
     * @param {String} id from url, provided from the location header in the Create and Run Quant Engine calculation endpoint
     * @param {Object} opts Optional parameters
     * @param {String} opts.cacheControl Standard HTTP header.  Accepts no-store, max-age, max-stale.
     * @param {module:model/QuantCalculationParametersRoot} opts.quantCalculationParametersRoot Calculation Parameters
     * @return { Promise.< PutAndCalculateResponseWrapper > } a Promise, with data of type {@link PutAndCalculateResponseWrapper }
     */
    putAndCalculate(id, opts) {
      return this.putAndCalculateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}


const PostAndCalculateResponseWrapperTypeMap = {
  200: CalculationStatusRoot,
  201: ObjectRoot,
  202: CalculationStatusRoot,
  400: ClientErrorResponse,
  404: ClientErrorResponse,

  _createResponseWrapper(statusCode, response) {
    return new PostAndCalculateResponseWrapper(statusCode, response);
  }
};

const PutAndCalculateResponseWrapperTypeMap = {
  200: CalculationStatusRoot,
  201: ObjectRoot,
  202: CalculationStatusRoot,
  400: ClientErrorResponse,
  404: ClientErrorResponse,
  409: ClientErrorResponse,

  _createResponseWrapper(statusCode, response) {
    return new PutAndCalculateResponseWrapper(statusCode, response);
  }
};



/**
 * Wrapper to support POST /analytics/engines/quant/v3/calculations returning different types
 * per status code.
 *
 * <p>
 * Responses:
 * <ul>
 *   <li>200 : {@code CalculationStatusRoot }<br>Expected response if the calculation has one unit and is completed with an error.</li>
 * 
 *   <li>201 : {@code ObjectRoot }<br>Expected response if the calculation has one unit and is completed in a short span, returns JSON in the format specified in the Calculation parameters.</li>
 * 
 *   <li>202 : {@code CalculationStatusRoot }<br>Expected response, contains the poll URL in the Location header.</li>
 * </ul>
 *
 * </p>
 * Example:
 * <pre>{@code
 * const response = ...;
 * switch (response.statusCode) {
 *   case 200:
 *     CalculationStatusRoot data200 = response.getResponse200();
 *     break;
 *   case 201:
 *     ObjectRoot data201 = response.getResponse201();
 *     break;
 *   case 202:
 *     CalculationStatusRoot data202 = response.getResponse202();
 *     break;
 *  }
 * }</pre>
 *
 * @alias module:PostAndCalculateResponseWrapper
 * @class
 */
export class PostAndCalculateResponseWrapper {

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
   * @returns { CalculationStatusRoot }
   */
  getResponse200() {
    if (this.statusCode !== 200) {
      throw new Error("Invalid response getter called. getResponse200 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { ObjectRoot }
   */
  getResponse201() {
    if (this.statusCode !== 201) {
      throw new Error("Invalid response getter called. getResponse201 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { CalculationStatusRoot }
   */
  getResponse202() {
    if (this.statusCode !== 202) {
      throw new Error("Invalid response getter called. getResponse202 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
}

/**
 * Wrapper to support PUT /analytics/engines/quant/v3/calculations/{id} returning different types
 * per status code.
 *
 * <p>
 * Responses:
 * <ul>
 *   <li>200 : {@code CalculationStatusRoot }<br>Expected response if the calculation has one unit and is completed with an error.</li>
 * 
 *   <li>201 : {@code ObjectRoot }<br>Expected response if the calculation has one unit and is completed in a short span, returns JSON in the format specified in the Calculation parameters.</li>
 * 
 *   <li>202 : {@code CalculationStatusRoot }<br>Expected response, contains the poll URL in the Location header.</li>
 * </ul>
 *
 * </p>
 * Example:
 * <pre>{@code
 * const response = ...;
 * switch (response.statusCode) {
 *   case 200:
 *     CalculationStatusRoot data200 = response.getResponse200();
 *     break;
 *   case 201:
 *     ObjectRoot data201 = response.getResponse201();
 *     break;
 *   case 202:
 *     CalculationStatusRoot data202 = response.getResponse202();
 *     break;
 *  }
 * }</pre>
 *
 * @alias module:PutAndCalculateResponseWrapper
 * @class
 */
export class PutAndCalculateResponseWrapper {

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
   * @returns { CalculationStatusRoot }
   */
  getResponse200() {
    if (this.statusCode !== 200) {
      throw new Error("Invalid response getter called. getResponse200 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { ObjectRoot }
   */
  getResponse201() {
    if (this.statusCode !== 201) {
      throw new Error("Invalid response getter called. getResponse201 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
  /**
   * @returns { CalculationStatusRoot }
   */
  getResponse202() {
    if (this.statusCode !== 202) {
      throw new Error("Invalid response getter called. getResponse202 can't return a " + this.statusCode + " response");
    }

    return this.response;
  }
  
}

