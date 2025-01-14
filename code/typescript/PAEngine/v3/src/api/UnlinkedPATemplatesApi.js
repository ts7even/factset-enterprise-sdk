/**
 * PA Engine API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.14.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ClientErrorResponse from '../model/ClientErrorResponse';
import UnlinkedPATemplateCategoryAndTypeDetailsRoot from '../model/UnlinkedPATemplateCategoryAndTypeDetailsRoot';
import UnlinkedPATemplateCategoryAndTypeRoot from '../model/UnlinkedPATemplateCategoryAndTypeRoot';
import UnlinkedPATemplateParametersRoot from '../model/UnlinkedPATemplateParametersRoot';
import UnlinkedPATemplatePostSummaryRoot from '../model/UnlinkedPATemplatePostSummaryRoot';
import UnlinkedPATemplateRoot from '../model/UnlinkedPATemplateRoot';
import UnlinkedPATemplateSummaryRoot from '../model/UnlinkedPATemplateSummaryRoot';
import UnlinkedPATemplateUpdateParametersRoot from '../model/UnlinkedPATemplateUpdateParametersRoot';

/**
* UnlinkedPATemplates service.
* @module api/UnlinkedPATemplatesApi
*/
export default class UnlinkedPATemplatesApi {

    /**
    * Constructs a new UnlinkedPATemplatesApi. 
    * @alias module:api/UnlinkedPATemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create unlinked PA template
     * This endpoint creates a template which is not linked to any specific PA3 tile.     Remarks:    *   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary.       If no mandatory fields are passed, then we can use the template as a component and skip the component creation.        *   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"datasources\", \"dates\", \"currencyisocode\" and \"componentdetail\".    *   We cannot override the Locked fields when creating the Component.    *   Mandatory and locked strings are mutually exclusive.    *   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.    *   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account.       Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System),       VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H.    *   Multi-horizon frequencies are not supported through this endpoint.    *   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.      Additionally, while 'groupsall' returns all the group levels in the PA component,      setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component.    *   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also       overriding the default frequency of the Beginning of Period to whatever we pass in the request body.        *   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.
     * @param {module:model/UnlinkedPATemplateParametersRoot} unlinkedPATemplateParametersRoot Request Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UnlinkedPATemplatePostSummaryRoot} and HTTP response
     */
    createUnlinkedPATemplatesWithHttpInfo(unlinkedPATemplateParametersRoot) {
      let postBody = unlinkedPATemplateParametersRoot;
      // verify the required parameter 'unlinkedPATemplateParametersRoot' is set
      if (unlinkedPATemplateParametersRoot === undefined || unlinkedPATemplateParametersRoot === null) {
        throw new Error("Missing the required parameter 'unlinkedPATemplateParametersRoot' when calling createUnlinkedPATemplates");
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


      let returnType = UnlinkedPATemplatePostSummaryRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/unlinked-templates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create unlinked PA template
     * This endpoint creates a template which is not linked to any specific PA3 tile.     Remarks:    *   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary.       If no mandatory fields are passed, then we can use the template as a component and skip the component creation.        *   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"datasources\", \"dates\", \"currencyisocode\" and \"componentdetail\".    *   We cannot override the Locked fields when creating the Component.    *   Mandatory and locked strings are mutually exclusive.    *   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.    *   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account.       Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System),       VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H.    *   Multi-horizon frequencies are not supported through this endpoint.    *   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.      Additionally, while 'groupsall' returns all the group levels in the PA component,      setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component.    *   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also       overriding the default frequency of the Beginning of Period to whatever we pass in the request body.        *   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.
     * @param {module:model/UnlinkedPATemplateParametersRoot} unlinkedPATemplateParametersRoot Request Parameters
     * @return { Promise.< module:model/UnlinkedPATemplatePostSummaryRoot > } a Promise, with data of type {@link module:model/UnlinkedPATemplatePostSummaryRoot }
     */
    createUnlinkedPATemplates(unlinkedPATemplateParametersRoot) {
      return this.createUnlinkedPATemplatesWithHttpInfo(unlinkedPATemplateParametersRoot)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete unlinked PA template
     * This endpoint deletes an existing unliked PA template.
     * @param {String} id Unique identifier for an unlinked PA template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteUnlinkedPATemplatesWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteUnlinkedPATemplates");
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


      let returnType = null;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/unlinked-templates/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete unlinked PA template
     * This endpoint deletes an existing unliked PA template.
     * @param {String} id Unique identifier for an unlinked PA template
     * @return { Promise } a Promise
     */
    deleteUnlinkedPATemplates(id) {
      return this.deleteUnlinkedPATemplatesWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get default unlinked PA template types.
     * This endpoint fetches default unlinked PA template types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UnlinkedPATemplateCategoryAndTypeRoot} and HTTP response
     */
    getDefaultUnlinkedPATemplateTypesWithHttpInfo() {
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


      let returnType = UnlinkedPATemplateCategoryAndTypeRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/unlinked-templates/template-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get default unlinked PA template types.
     * This endpoint fetches default unlinked PA template types.
     * @return { Promise.< module:model/UnlinkedPATemplateCategoryAndTypeRoot > } a Promise, with data of type {@link module:model/UnlinkedPATemplateCategoryAndTypeRoot }
     */
    getDefaultUnlinkedPATemplateTypes() {
      return this.getDefaultUnlinkedPATemplateTypesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get unlinked PA template type details by id.
     * This endpoint fetches the unlinked PA template type details.
     * @param {String} id Unique identifier for an unlinked PA template type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UnlinkedPATemplateCategoryAndTypeDetailsRoot} and HTTP response
     */
    getDetailsTypeWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getDetailsType");
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


      let returnType = UnlinkedPATemplateCategoryAndTypeDetailsRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/unlinked-templates/template-types/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get unlinked PA template type details by id.
     * This endpoint fetches the unlinked PA template type details.
     * @param {String} id Unique identifier for an unlinked PA template type
     * @return { Promise.< module:model/UnlinkedPATemplateCategoryAndTypeDetailsRoot > } a Promise, with data of type {@link module:model/UnlinkedPATemplateCategoryAndTypeDetailsRoot }
     */
    getDetailsType(id) {
      return this.getDetailsTypeWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get unlinked PA templates
     * This endpoint returns the list of unlinked PA templates.
     * @param {Object} opts Optional parameters
     * @param {String} opts.directory Get unlinked PA templates in path. (default to 'Personal:UninkedPATemplates/')
     * @param {String} opts.category Get unlinked PA templates by category. (default to 'Weights')
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UnlinkedPATemplateSummaryRoot} and HTTP response
     */
    getUnlinkedPATemplatesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'directory': opts['directory'],
        'category': opts['category']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = UnlinkedPATemplateSummaryRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/unlinked-templates', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get unlinked PA templates
     * This endpoint returns the list of unlinked PA templates.
     * @param {Object} opts Optional parameters
     * @param {String} opts.directory Get unlinked PA templates in path. (default to 'Personal:UninkedPATemplates/')
     * @param {String} opts.category Get unlinked PA templates by category. (default to 'Weights')
     * @return { Promise.< module:model/UnlinkedPATemplateSummaryRoot > } a Promise, with data of type {@link module:model/UnlinkedPATemplateSummaryRoot }
     */
    getUnlinkedPATemplates(opts) {
      return this.getUnlinkedPATemplatesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get unlinked PA template details by id
     * This endpoint fetches the template settings.
     * @param {String} id Unique identifier for an unlinked PA template
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UnlinkedPATemplateRoot} and HTTP response
     */
    getUnlinkedPATemplatesByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUnlinkedPATemplatesById");
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


      let returnType = UnlinkedPATemplateRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/unlinked-templates/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get unlinked PA template details by id
     * This endpoint fetches the template settings.
     * @param {String} id Unique identifier for an unlinked PA template
     * @return { Promise.< module:model/UnlinkedPATemplateRoot > } a Promise, with data of type {@link module:model/UnlinkedPATemplateRoot }
     */
    getUnlinkedPATemplatesById(id) {
      return this.getUnlinkedPATemplatesByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update unlinked PA template
     * This endpoint updates an existing unlinked PA template.    Remarks:                *   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary.       If no mandatory fields are passed, then we can use the template as a component and skip the component creation.        *   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"datasources\", \"dates\", \"currencyisocode\" and \"componentdetail\".    *   We cannot override the Locked fields when creating the Component.    *   Mandatory and locked strings are mutually exclusive.    *   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.    *   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account.       Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System),       VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H.    *   Multi-horizon frequencies are not supported through this endpoint.    *   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.      Additionally, while 'groupsall' returns all the group levels in the PA component,      setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component.    *   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding       the default frequency of the Beginning of Period to whatever we pass in the request body.        *   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.
     * @param {String} id Unique identifier for an unlinked PA template
     * @param {module:model/UnlinkedPATemplateUpdateParametersRoot} unlinkedPATemplateUpdateParametersRoot Request Parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UnlinkedPATemplatePostSummaryRoot} and HTTP response
     */
    updateUnlinkedPATemplatesWithHttpInfo(id, unlinkedPATemplateUpdateParametersRoot) {
      let postBody = unlinkedPATemplateUpdateParametersRoot;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateUnlinkedPATemplates");
      }
      // verify the required parameter 'unlinkedPATemplateUpdateParametersRoot' is set
      if (unlinkedPATemplateUpdateParametersRoot === undefined || unlinkedPATemplateUpdateParametersRoot === null) {
        throw new Error("Missing the required parameter 'unlinkedPATemplateUpdateParametersRoot' when calling updateUnlinkedPATemplates");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];


      let returnType = UnlinkedPATemplatePostSummaryRoot;

      return this.apiClient.callApi(
        '/analytics/engines/pa/v3/unlinked-templates/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update unlinked PA template
     * This endpoint updates an existing unlinked PA template.    Remarks:                *   Mandatory fields are required to be passed in POST requests and Optional fields are not necessary.       If no mandatory fields are passed, then we can use the template as a component and skip the component creation.        *   Mandatory, optional and locked fields can be  \"accounts\", \"benchmarks\", \"groups\", \"columns\", \"datasources\", \"dates\", \"currencyisocode\" and \"componentdetail\".    *   We cannot override the Locked fields when creating the Component.    *   Mandatory and locked strings are mutually exclusive.    *   Any settings in the POST body will act as a one-time override over the settings saved in the PA template.    *   Account identifiers must have .ACCT or .ACTM extension or BENCH: prefix. Holdings mode can be optionally set for every account.       Possible values for holdings mode are B&H (Buy and Hold), TBR (Transaction based returns), OMS (Order Management System),       VLT (Vaulted returns) or EXT (External Returns Data). Default holdings mode value is B&H.    *   Multi-horizon frequencies are not supported through this endpoint.    *   Componentdetail supports securities, groups, groupsall, and totals levels of granularity. However, if no value is passed, the default value is 'securities'.      Additionally, while 'groupsall' returns all the group levels in the PA component,      setting componentdetail to 'groups' only returns the expanded or collapsed group levels within the PA component.    *   If we are overriding the grouping with a frequency, we will be overriding the grouping saved to the original component and also overriding       the default frequency of the Beginning of Period to whatever we pass in the request body.        *   If we are overriding gouping frequency without overriding the group id it will not be applied to the default groupings saved to the original component.
     * @param {String} id Unique identifier for an unlinked PA template
     * @param {module:model/UnlinkedPATemplateUpdateParametersRoot} unlinkedPATemplateUpdateParametersRoot Request Parameters
     * @return { Promise.< module:model/UnlinkedPATemplatePostSummaryRoot > } a Promise, with data of type {@link module:model/UnlinkedPATemplatePostSummaryRoot }
     */
    updateUnlinkedPATemplates(id, unlinkedPATemplateUpdateParametersRoot) {
      return this.updateUnlinkedPATemplatesWithHttpInfo(id, unlinkedPATemplateUpdateParametersRoot)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





