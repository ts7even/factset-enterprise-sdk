/**
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
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
import SymbolRelationshipDto from '../model/SymbolRelationshipDto';
import SymbolRelationshipSaveDto from '../model/SymbolRelationshipSaveDto';
import SymbolRelationshipUpdateDto from '../model/SymbolRelationshipUpdateDto';

/**
* CustomSymbolsRelationships service.
* @module api/CustomSymbolsRelationshipsApi
* @version 0.20.0
*/
export default class CustomSymbolsRelationshipsApi {

    /**
    * Constructs a new CustomSymbolsRelationshipsApi. 
    * @alias module:api/CustomSymbolsRelationshipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a symbol relationship
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/SymbolRelationshipSaveDto>} opts.symbolRelationshipSaveDto symbolRelationship object to save
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createSymbolRelationshipWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['symbolRelationshipSaveDto'];

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


      let returnType = null;

      return this.apiClient.callApi(
        '/v1/symbol-relationships', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a symbol relationship
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/SymbolRelationshipSaveDto>} opts.symbolRelationshipSaveDto symbolRelationship object to save
     * @return { Promise } a Promise
     */
    createSymbolRelationship(opts) {
      return this.createSymbolRelationshipWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a symbol relationship
     * @param {String} symbolRelationshipId symbolRelationshipId to delete associated record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSymbolRelationshipWithHttpInfo(symbolRelationshipId) {
      let postBody = null;
      // verify the required parameter 'symbolRelationshipId' is set
      if (symbolRelationshipId === undefined || symbolRelationshipId === null) {
        throw new Error("Missing the required parameter 'symbolRelationshipId' when calling deleteSymbolRelationship");
      }

      let pathParams = {
        'symbolRelationshipId': symbolRelationshipId
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
        '/v1/symbol-relationships/{symbolRelationshipId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a symbol relationship
     * @param {String} symbolRelationshipId symbolRelationshipId to delete associated record
     * @return { Promise } a Promise
     */
    deleteSymbolRelationship(symbolRelationshipId) {
      return this.deleteSymbolRelationshipWithHttpInfo(symbolRelationshipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Edit a symbol relationship
     * @param {String} symbol 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/SymbolRelationshipUpdateDto>} opts.symbolRelationshipUpdateDto symbolRelationship object to save
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    editAndAddSymbolRelationshipWithHttpInfo(symbol, opts) {
      opts = opts || {};
      let postBody = opts['symbolRelationshipUpdateDto'];
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling editAndAddSymbolRelationship");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = [];


      let returnType = null;

      return this.apiClient.callApi(
        '/v1/symbol-relationships/{symbol}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Edit a symbol relationship
     * @param {String} symbol 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/SymbolRelationshipUpdateDto>} opts.symbolRelationshipUpdateDto symbolRelationship object to save
     * @return { Promise } a Promise
     */
    editAndAddSymbolRelationship(symbol, opts) {
      return this.editAndAddSymbolRelationshipWithHttpInfo(symbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details on a specific symbol relationship
     * @param {String} symbolRelationshipId symbolRelationshipId to get associated record
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SymbolRelationshipDto} and HTTP response
     */
    getSymbolRelationshipWithHttpInfo(symbolRelationshipId) {
      let postBody = null;
      // verify the required parameter 'symbolRelationshipId' is set
      if (symbolRelationshipId === undefined || symbolRelationshipId === null) {
        throw new Error("Missing the required parameter 'symbolRelationshipId' when calling getSymbolRelationship");
      }

      let pathParams = {
        'symbolRelationshipId': symbolRelationshipId
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


      let returnType = SymbolRelationshipDto;

      return this.apiClient.callApi(
        '/v1/symbol-relationships/{symbolRelationshipId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get details on a specific symbol relationship
     * @param {String} symbolRelationshipId symbolRelationshipId to get associated record
     * @return { Promise.< module:model/SymbolRelationshipDto > } a Promise, with data of type {@link module:model/SymbolRelationshipDto }
     */
    getSymbolRelationship(symbolRelationshipId) {
      return this.getSymbolRelationshipWithHttpInfo(symbolRelationshipId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns a list of a symbol’s relationships
     * @param {String} symbolId symbolId to get associated records
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SymbolRelationshipDto>} and HTTP response
     */
    getSymbolRelationshipsWithHttpInfo(symbolId) {
      let postBody = null;
      // verify the required parameter 'symbolId' is set
      if (symbolId === undefined || symbolId === null) {
        throw new Error("Missing the required parameter 'symbolId' when calling getSymbolRelationships");
      }

      let pathParams = {
        'symbolId': symbolId
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


      let returnType = [SymbolRelationshipDto];

      return this.apiClient.callApi(
        '/v1/symbol-relationships/{symbolId}/relationships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns a list of a symbol’s relationships
     * @param {String} symbolId symbolId to get associated records
     * @return { Promise.< Array.<module:model/SymbolRelationshipDto> > } a Promise, with data of type {@link Array.<module:model/SymbolRelationshipDto> }
     */
    getSymbolRelationships(symbolId) {
      return this.getSymbolRelationshipsWithHttpInfo(symbolId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}




