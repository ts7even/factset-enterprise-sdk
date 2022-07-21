/**
 * EMS API
 * Allow clients to trade orders.
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
import ClientErrorResponse from '../model/ClientErrorResponse';
import EMSCancelOrdersRoot from '../model/EMSCancelOrdersRoot';
import EMSOrdersCreateResponseRoot from '../model/EMSOrdersCreateResponseRoot';
import EMSOrdersRoot from '../model/EMSOrdersRoot';
import EMSReplaceOrdersRoot from '../model/EMSReplaceOrdersRoot';

/**
* Orders service.
* @module api/OrdersApi
*/
export default class OrdersApi {

    /**
    * Constructs a new OrdersApi. 
    * @alias module:api/OrdersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancel the orders on EMS system.
     * This endpoint takes the list of orders to be cancelled on the EMS system.
     * @param {Object} opts Optional parameters
     * @param {module:model/EMSCancelOrdersRoot} opts.eMSCancelOrdersRoot 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EMSOrdersCreateResponseRoot} and HTTP response
     */
    cancelWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['eMSCancelOrdersRoot'];

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


      let returnType = EMSOrdersCreateResponseRoot;

      return this.apiClient.callApi(
        '/trading/ems/v1/orders/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Cancel the orders on EMS system.
     * This endpoint takes the list of orders to be cancelled on the EMS system.
     * @param {Object} opts Optional parameters
     * @param {module:model/EMSCancelOrdersRoot} opts.eMSCancelOrdersRoot 
     * @return { Promise.< module:model/EMSOrdersCreateResponseRoot > } a Promise, with data of type {@link module:model/EMSOrdersCreateResponseRoot }
     */
    cancel(opts) {
      return this.cancelWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send orders to EMS for execution.
     * This endpoint takes the list of orders and place them on EMS for execution.
     * @param {Object} opts Optional parameters
     * @param {module:model/EMSOrdersRoot} opts.eMSOrdersRoot 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EMSOrdersCreateResponseRoot} and HTTP response
     */
    createWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['eMSOrdersRoot'];

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


      let returnType = EMSOrdersCreateResponseRoot;

      return this.apiClient.callApi(
        '/trading/ems/v1/orders/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send orders to EMS for execution.
     * This endpoint takes the list of orders and place them on EMS for execution.
     * @param {Object} opts Optional parameters
     * @param {module:model/EMSOrdersRoot} opts.eMSOrdersRoot 
     * @return { Promise.< module:model/EMSOrdersCreateResponseRoot > } a Promise, with data of type {@link module:model/EMSOrdersCreateResponseRoot }
     */
    create(opts) {
      return this.createWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace the orders on EMS system.
     * This endpoint takes the list of orders to be replaced on the EMS system.
     * @param {Object} opts Optional parameters
     * @param {module:model/EMSReplaceOrdersRoot} opts.eMSReplaceOrdersRoot 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EMSOrdersCreateResponseRoot} and HTTP response
     */
    replaceWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['eMSReplaceOrdersRoot'];

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


      let returnType = EMSOrdersCreateResponseRoot;

      return this.apiClient.callApi(
        '/trading/ems/v1/orders/replace', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Replace the orders on EMS system.
     * This endpoint takes the list of orders to be replaced on the EMS system.
     * @param {Object} opts Optional parameters
     * @param {module:model/EMSReplaceOrdersRoot} opts.eMSReplaceOrdersRoot 
     * @return { Promise.< module:model/EMSOrdersCreateResponseRoot > } a Promise, with data of type {@link module:model/EMSOrdersCreateResponseRoot }
     */
    replace(opts) {
      return this.replaceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}




