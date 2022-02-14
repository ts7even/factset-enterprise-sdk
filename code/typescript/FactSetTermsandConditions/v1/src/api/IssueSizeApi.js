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
import IssueSizeResponse from '../model/IssueSizeResponse';
import TermsAndConditionsScalarRequest from '../model/TermsAndConditionsScalarRequest';

/**
* IssueSize service.
* @module api/IssueSizeApi
* @version 0.9.1
*/
export default class IssueSizeApi {

    /**
    * Constructs a new IssueSizeApi. 
    * @alias module:api/IssueSizeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Return Issue Size data for a list of Fixed Income securities.
     * Returns Issue Size data for the Fixed Income security. 
     * @param {Array.<String>} ids List of Fixed Income Security identifiers. Supported symbol types include CUSIP, SEDOL, ISIN, and FactSet Security Permanent Identifier (-S).  **ID LIMIT = 250** *per request*. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IssueSizeResponse} and HTTP response
     */
    getIssueSizeWithHttpInfo(ids) {
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getIssueSize");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IssueSizeResponse;
      return this.apiClient.callApi(
        '/factset-terms-and-conditions/v1/issue-size', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return Issue Size data for a list of Fixed Income securities.
     * Returns Issue Size data for the Fixed Income security. 
     * @param {Array.<String>} ids List of Fixed Income Security identifiers. Supported symbol types include CUSIP, SEDOL, ISIN, and FactSet Security Permanent Identifier (-S).  **ID LIMIT = 250** *per request*. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IssueSizeResponse}
     */
    getIssueSize(ids) {
      return this.getIssueSizeWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Return Issue Size data for a large list of Fixed Income securities.
     * Returns Issue Size data for a list of Fixed Income securities. 
     * @param {module:model/TermsAndConditionsScalarRequest} termsAndConditionsScalarRequest Request object for Fixed Income Issue Size.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IssueSizeResponse} and HTTP response
     */
    getIssueSizeForListWithHttpInfo(termsAndConditionsScalarRequest) {
      let postBody = termsAndConditionsScalarRequest;
      // verify the required parameter 'termsAndConditionsScalarRequest' is set
      if (termsAndConditionsScalarRequest === undefined || termsAndConditionsScalarRequest === null) {
        throw new Error("Missing the required parameter 'termsAndConditionsScalarRequest' when calling getIssueSizeForList");
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
      let returnType = IssueSizeResponse;
      return this.apiClient.callApi(
        '/factset-terms-and-conditions/v1/issue-size', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Return Issue Size data for a large list of Fixed Income securities.
     * Returns Issue Size data for a list of Fixed Income securities. 
     * @param {module:model/TermsAndConditionsScalarRequest} termsAndConditionsScalarRequest Request object for Fixed Income Issue Size.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IssueSizeResponse}
     */
    getIssueSizeForList(termsAndConditionsScalarRequest) {
      return this.getIssueSizeForListWithHttpInfo(termsAndConditionsScalarRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
