/**
 * FactSet Terms & Conditions API
 * The FactSet Terms & Conditions API exposes Terms & Conditions data for Fixed Income Corporate, Governement & Agency securities. The FactSet Corporate Government & Agency Terms & Conditions library provides descriptive data on the issue level, such as offering details, redemption information, and coupon schedules. Issuer level data is also available. Coverage is global and includes corporate, sovereign, and agency issues. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import FieldsResponse from '../model/FieldsResponse';
import TermsAndConditionsRequest from '../model/TermsAndConditionsRequest';
import TermsAndConditionsResponse from '../model/TermsAndConditionsResponse';

/**
* TermsConditions service.
* @module api/TermsConditionsApi
* @version 0.9.0
*/
export default class TermsConditionsApi {

    /**
    * Constructs a new TermsConditionsApi. 
    * @alias module:api/TermsConditionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Return select Terms and Conditions items for a Fixed Income security.
     * Returns Terms and Conditions data items for the Fixed Income security. Includes items for Conditional Redemptions, Redemption Options, Security Details, and Coupon Details. Use the `fields` parameter to request specific items only or request an entire category of items to fetch all available fields matching that category(s). <p>*For T&C data related to Agency, Coupon History, Issue Size, Negative Covenants, or Redemption Prices, Lead Underwriters, and Use of Proceeds, please use respective endpoints optimized for that content.*</p> 
     * @param {Array.<String>} ids List of Fixed Income Security identifiers. Supported symbol types include CUSIP, SEDOL, ISIN, and FactSet Security Permanent Identifier (-S).  **ID LIMIT = 250** *per request*. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields List of data items for Terms and Conditions. For a full list of available fields, definitions, and category assignments, use the `/fields` endpoint.
     * @param {Array.<module:model/String>} opts.categories Selects the Fixed Income metrics by major category. Use the `/fields` endpoint to get a list of all fields associated with each category.   * **SECURITY_DETAILS** = Detailed information about the security.   * **COUPON_DETAILS** = Coupon details.   * **CONVERTIBLE_FEATURES** = Features of convertible instruments.   * **REDEMPTION_OPTIONS** = Redemption options. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TermsAndConditionsResponse} and HTTP response
     */
    getTermsAndConditionsWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getTermsAndConditions");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
        'categories': this.apiClient.buildCollectionParam(opts['categories'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TermsAndConditionsResponse;
      return this.apiClient.callApi(
        '/factset-terms-and-conditions/v1/terms-and-conditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return select Terms and Conditions items for a Fixed Income security.
     * Returns Terms and Conditions data items for the Fixed Income security. Includes items for Conditional Redemptions, Redemption Options, Security Details, and Coupon Details. Use the `fields` parameter to request specific items only or request an entire category of items to fetch all available fields matching that category(s). <p>*For T&C data related to Agency, Coupon History, Issue Size, Negative Covenants, or Redemption Prices, Lead Underwriters, and Use of Proceeds, please use respective endpoints optimized for that content.*</p> 
     * @param {Array.<String>} ids List of Fixed Income Security identifiers. Supported symbol types include CUSIP, SEDOL, ISIN, and FactSet Security Permanent Identifier (-S).  **ID LIMIT = 250** *per request*. 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields List of data items for Terms and Conditions. For a full list of available fields, definitions, and category assignments, use the `/fields` endpoint.
     * @param {Array.<module:model/String>} opts.categories Selects the Fixed Income metrics by major category. Use the `/fields` endpoint to get a list of all fields associated with each category.   * **SECURITY_DETAILS** = Detailed information about the security.   * **COUPON_DETAILS** = Coupon details.   * **CONVERTIBLE_FEATURES** = Features of convertible instruments.   * **REDEMPTION_OPTIONS** = Redemption options. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TermsAndConditionsResponse}
     */
    getTermsAndConditions(ids, opts) {
      return this.getTermsAndConditionsWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Available fields for /terms-and-conditions endpoint
     * Returns a list of available fields that can be used in the `fields` parameter of the **_/terms-and-conditions** endpoint. Leave _category_ blank to request all available items. Make Note, this does not represent all available fields within the Terms and Conditions API and all other endpoints. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.category Filters the list of Fixed Income metrics by major category -   * **SECURITY_DETAILS** = Detailed information about the security.   * **COUPON_DETAILS** = Coupon details.   * **CONVERTIBLE_FEATURES** = Features of convertible instruments.   * **REDEMPTION_OPTIONS** = Redemption options. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FieldsResponse} and HTTP response
     */
    getTermsAndConditionsFieldsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'category': opts['category']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FieldsResponse;
      return this.apiClient.callApi(
        '/factset-terms-and-conditions/v1/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Available fields for /terms-and-conditions endpoint
     * Returns a list of available fields that can be used in the `fields` parameter of the **_/terms-and-conditions** endpoint. Leave _category_ blank to request all available items. Make Note, this does not represent all available fields within the Terms and Conditions API and all other endpoints. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.category Filters the list of Fixed Income metrics by major category -   * **SECURITY_DETAILS** = Detailed information about the security.   * **COUPON_DETAILS** = Coupon details.   * **CONVERTIBLE_FEATURES** = Features of convertible instruments.   * **REDEMPTION_OPTIONS** = Redemption options. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FieldsResponse}
     */
    getTermsAndConditionsFields(opts) {
      return this.getTermsAndConditionsFieldsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return Terms and Conditions for a list of Fixed Income securities.
     * Returns Terms and Conditions data items for the Fixed Income security. Includes reference items for Conditional Redemptions, Redemption Options, Security Details, Convertible Features, and Coupon Details. Use the `fields` parameter to request specific items only or request an entire category of items to fetch all available fields matching that category(s). <p>*For T&C data related to Agency, Coupon History, Issue Size, Negative Covenants, or Redemption Prices, Lead Underwriters, and Use of Proceeds, please use respective endpoints optimized for that content.*</p> 
     * @param {module:model/TermsAndConditionsRequest} termsAndConditionsRequest Request object for Terms And Conditions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TermsAndConditionsResponse} and HTTP response
     */
    getTermsAndConditionsForListWithHttpInfo(termsAndConditionsRequest) {
      let postBody = termsAndConditionsRequest;
      // verify the required parameter 'termsAndConditionsRequest' is set
      if (termsAndConditionsRequest === undefined || termsAndConditionsRequest === null) {
        throw new Error("Missing the required parameter 'termsAndConditionsRequest' when calling getTermsAndConditionsForList");
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
      let returnType = TermsAndConditionsResponse;
      return this.apiClient.callApi(
        '/factset-terms-and-conditions/v1/terms-and-conditions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return Terms and Conditions for a list of Fixed Income securities.
     * Returns Terms and Conditions data items for the Fixed Income security. Includes reference items for Conditional Redemptions, Redemption Options, Security Details, Convertible Features, and Coupon Details. Use the `fields` parameter to request specific items only or request an entire category of items to fetch all available fields matching that category(s). <p>*For T&C data related to Agency, Coupon History, Issue Size, Negative Covenants, or Redemption Prices, Lead Underwriters, and Use of Proceeds, please use respective endpoints optimized for that content.*</p> 
     * @param {module:model/TermsAndConditionsRequest} termsAndConditionsRequest Request object for Terms And Conditions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TermsAndConditionsResponse}
     */
    getTermsAndConditionsForList(termsAndConditionsRequest) {
      return this.getTermsAndConditionsForListWithHttpInfo(termsAndConditionsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}