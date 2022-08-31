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
import EMSCancelOrdersDataMetaModel from '../model/EMSCancelOrdersDataMetaModel';
import EMSOrdersCreateResponseEmsResponse from '../model/EMSOrdersCreateResponseEmsResponse';
import EMSOrdersDataMetaModel from '../model/EMSOrdersDataMetaModel';
import EMSReplaceOrdersDataMetaModel from '../model/EMSReplaceOrdersDataMetaModel';

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
     * @param {module:model/EMSCancelOrdersDataMetaModel} opts.eMSCancelOrdersDataMetaModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EMSOrdersCreateResponseEmsResponse} and HTTP response
     */
    cancelWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['eMSCancelOrdersDataMetaModel'];

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


      let returnType = EMSOrdersCreateResponseEmsResponse;

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
     * @param {module:model/EMSCancelOrdersDataMetaModel} opts.eMSCancelOrdersDataMetaModel 
     * @return { Promise.< module:model/EMSOrdersCreateResponseEmsResponse > } a Promise, with data of type {@link module:model/EMSOrdersCreateResponseEmsResponse }
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
     * @param {module:model/EMSOrdersDataMetaModel} opts.eMSOrdersDataMetaModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EMSOrdersCreateResponseEmsResponse} and HTTP response
     */
    createWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['eMSOrdersDataMetaModel'];

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


      let returnType = EMSOrdersCreateResponseEmsResponse;

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
     * @param {module:model/EMSOrdersDataMetaModel} opts.eMSOrdersDataMetaModel 
     * @return { Promise.< module:model/EMSOrdersCreateResponseEmsResponse > } a Promise, with data of type {@link module:model/EMSOrdersCreateResponseEmsResponse }
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
     * @param {module:model/EMSReplaceOrdersDataMetaModel} opts.eMSReplaceOrdersDataMetaModel 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EMSOrdersCreateResponseEmsResponse} and HTTP response
     */
    replaceWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['eMSReplaceOrdersDataMetaModel'];

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


      let returnType = EMSOrdersCreateResponseEmsResponse;

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
     * @param {module:model/EMSReplaceOrdersDataMetaModel} opts.eMSReplaceOrdersDataMetaModel 
     * @return { Promise.< module:model/EMSOrdersCreateResponseEmsResponse > } a Promise, with data of type {@link module:model/EMSOrdersCreateResponseEmsResponse }
     */
    replace(opts) {
      return this.replaceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





