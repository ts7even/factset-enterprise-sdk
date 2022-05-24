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
import CreateCustomSymbolDto from '../model/CreateCustomSymbolDto';
import CustomSymbolDto from '../model/CustomSymbolDto';
import NewItemDto from '../model/NewItemDto';
import Operation from '../model/Operation';
import ProblemDetails from '../model/ProblemDetails';
import RecordPreviewDto from '../model/RecordPreviewDto';
import StandardSymbolDto from '../model/StandardSymbolDto';

/**
* CustomSymbols service.
* @module api/CustomSymbolsApi
* @version 0.20.0
*/
export default class CustomSymbolsApi {

    /**
    * Constructs a new CustomSymbolsApi. 
    * @alias module:api/CustomSymbolsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a custom symbol
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCustomSymbolDto} opts.createCustomSymbolDto createCustomSymbolDto object to save
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NewItemDto} and HTTP response
     */
    createCustomSymbolWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createCustomSymbolDto'];

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


      let returnType = NewItemDto;

      return this.apiClient.callApi(
        '/v1/custom-symbols', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a custom symbol
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCustomSymbolDto} opts.createCustomSymbolDto createCustomSymbolDto object to save
     * @return { Promise.< module:model/NewItemDto > } a Promise, with data of type {@link module:model/NewItemDto }
     */
    createCustomSymbol(opts) {
      return this.createCustomSymbolWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a custom symbol
     * @param {String} customSymbolId customSymbolId to delete associated custom symbol
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCustomSymbolWithHttpInfo(customSymbolId) {
      let postBody = null;
      // verify the required parameter 'customSymbolId' is set
      if (customSymbolId === undefined || customSymbolId === null) {
        throw new Error("Missing the required parameter 'customSymbolId' when calling deleteCustomSymbol");
      }

      let pathParams = {
        'customSymbolId': customSymbolId
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
        '/v1/custom-symbols/{customSymbolId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a custom symbol
     * @param {String} customSymbolId customSymbolId to delete associated custom symbol
     * @return { Promise } a Promise
     */
    deleteCustomSymbol(customSymbolId) {
      return this.deleteCustomSymbolWithHttpInfo(customSymbolId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all custom field and standard field details on a specific custom symbol
     * @param {String} customSymbolId customSymbolId to get associated custom symbol
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeEvent Whether or not to include event (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomSymbolDto} and HTTP response
     */
    getCustomSymbolWithHttpInfo(customSymbolId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'customSymbolId' is set
      if (customSymbolId === undefined || customSymbolId === null) {
        throw new Error("Missing the required parameter 'customSymbolId' when calling getCustomSymbol");
      }

      let pathParams = {
        'customSymbolId': customSymbolId
      };
      let queryParams = {
        'includeEvent': opts['includeEvent']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = CustomSymbolDto;

      return this.apiClient.callApi(
        '/v1/custom-symbols/{customSymbolId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all custom field and standard field details on a specific custom symbol
     * @param {String} customSymbolId customSymbolId to get associated custom symbol
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeEvent Whether or not to include event (default to false)
     * @return { Promise.< module:model/CustomSymbolDto > } a Promise, with data of type {@link module:model/CustomSymbolDto }
     */
    getCustomSymbol(customSymbolId, opts) {
      return this.getCustomSymbolWithHttpInfo(customSymbolId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all notes and meetings where a specific customSymbol was tagged as primary or related identifier
     * @param {String} customSymbolId CustomSymbolId to get associated records
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/RecordPreviewDto>} and HTTP response
     */
    getCustomSymbolRecordsWithHttpInfo(customSymbolId) {
      let postBody = null;
      // verify the required parameter 'customSymbolId' is set
      if (customSymbolId === undefined || customSymbolId === null) {
        throw new Error("Missing the required parameter 'customSymbolId' when calling getCustomSymbolRecords");
      }

      let pathParams = {
        'customSymbolId': customSymbolId
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


      let returnType = [RecordPreviewDto];

      return this.apiClient.callApi(
        '/v1/custom-symbols/{customSymbolId}/records', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all notes and meetings where a specific customSymbol was tagged as primary or related identifier
     * @param {String} customSymbolId CustomSymbolId to get associated records
     * @return { Promise.< Array.<module:model/RecordPreviewDto> > } a Promise, with data of type {@link Array.<module:model/RecordPreviewDto> }
     */
    getCustomSymbolRecords(customSymbolId) {
      return this.getCustomSymbolRecordsWithHttpInfo(customSymbolId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of all custom symbols in your group along with some of their standard field and custom fields data
     * @param {Object} opts Optional parameters
     * @param {String} opts.typeName filter custom symbols based on custom symbol type
     * @param {String} opts.query filter custom symbols based on custom symbol code or name
     * @param {Boolean} opts.includeCustomFieldValues Whether or not to include customFieldValues (default to false)
     * @param {Boolean} opts.excludeLinkedCustomSymbol Whether or not to exclude linked custom symbol (default to false)
     * @param {Boolean} opts.includeEvent Whether or not to include event (default to true)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CustomSymbolDto>} and HTTP response
     */
    getCustomSymbolsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'typeName': opts['typeName'],
        'query': opts['query'],
        'includeCustomFieldValues': opts['includeCustomFieldValues'],
        'excludeLinkedCustomSymbol': opts['excludeLinkedCustomSymbol'],
        'includeEvent': opts['includeEvent']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = [CustomSymbolDto];

      return this.apiClient.callApi(
        '/v1/custom-symbols', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get list of all custom symbols in your group along with some of their standard field and custom fields data
     * @param {Object} opts Optional parameters
     * @param {String} opts.typeName filter custom symbols based on custom symbol type
     * @param {String} opts.query filter custom symbols based on custom symbol code or name
     * @param {Boolean} opts.includeCustomFieldValues Whether or not to include customFieldValues (default to false)
     * @param {Boolean} opts.excludeLinkedCustomSymbol Whether or not to exclude linked custom symbol (default to false)
     * @param {Boolean} opts.includeEvent Whether or not to include event (default to true)
     * @return { Promise.< Array.<module:model/CustomSymbolDto> > } a Promise, with data of type {@link Array.<module:model/CustomSymbolDto> }
     */
    getCustomSymbols(opts) {
      return this.getCustomSymbolsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Link custom symbol to standard symbol
     * @param {String} customSymbolId customSymbolId associated with custom symbol
     * @param {Object} opts Optional parameters
     * @param {module:model/StandardSymbolDto} opts.standardSymbolDto standard symbol name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    linkCustomSymbolToStandardSymbolWithHttpInfo(customSymbolId, opts) {
      opts = opts || {};
      let postBody = opts['standardSymbolDto'];
      // verify the required parameter 'customSymbolId' is set
      if (customSymbolId === undefined || customSymbolId === null) {
        throw new Error("Missing the required parameter 'customSymbolId' when calling linkCustomSymbolToStandardSymbol");
      }

      let pathParams = {
        'customSymbolId': customSymbolId
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
        '/v1/custom-symbols/{customSymbolId}/link-standard-symbol', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Link custom symbol to standard symbol
     * @param {String} customSymbolId customSymbolId associated with custom symbol
     * @param {Object} opts Optional parameters
     * @param {module:model/StandardSymbolDto} opts.standardSymbolDto standard symbol name
     * @return { Promise } a Promise
     */
    linkCustomSymbolToStandardSymbol(customSymbolId, opts) {
      return this.linkCustomSymbolToStandardSymbolWithHttpInfo(customSymbolId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Edit a custom symbol’s standard field and custom field data
     * @param {String} customSymbolId customSymbolId to update associated custom symbol
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation updateCustomSymbolDto object to update
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    patchCustomSymbolWithHttpInfo(customSymbolId, opts) {
      opts = opts || {};
      let postBody = opts['operation'];
      // verify the required parameter 'customSymbolId' is set
      if (customSymbolId === undefined || customSymbolId === null) {
        throw new Error("Missing the required parameter 'customSymbolId' when calling patchCustomSymbol");
      }

      let pathParams = {
        'customSymbolId': customSymbolId
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
        '/v1/custom-symbols/{customSymbolId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Edit a custom symbol’s standard field and custom field data
     * @param {String} customSymbolId customSymbolId to update associated custom symbol
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation updateCustomSymbolDto object to update
     * @return { Promise } a Promise
     */
    patchCustomSymbol(customSymbolId, opts) {
      return this.patchCustomSymbolWithHttpInfo(customSymbolId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}




