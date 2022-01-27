/**
 * FactSet Ownership API
 * FactSet’s Fund Ownership API gives access to both **Holdings** and **Holders** data.<p> Factset's Holdings endpoints gives access to all the underlying securities and their position detils held within a given fund. Fund Types supported include Open-End Mutual Funds, Closed-end Mutual Funds, and Exchange Traded Funds. Security Holders information retrieves all \"holder types\" and their positions across institutions, funds, insiders, and stakeholders.</p><p>The FactSet Ownership and Mutual Funds database collects global equity ownership data for approximately 50,000 institutions, 60,000 unique Mutual Fund portfolios, and 400,000 Insider/Stake holders from around 110 countries.  For more details review our [Data Collection](https://my.apps.factset.com/oa/cms/oaAttachment/87e162be-f2d1-4f40-a85b-bfb1b020d270/20079) methodology. </p> 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import SecurityHoldersRequest from '../model/SecurityHoldersRequest';
import SecurityHoldersResponse from '../model/SecurityHoldersResponse';

/**
* SecurityHolders service.
* @module api/SecurityHoldersApi
* @version 0.9.0
*/
export default class SecurityHoldersApi {

    /**
    * Constructs a new SecurityHoldersApi. 
    * @alias module:api/SecurityHoldersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get security ownership data for requested security identifers.
     * Gets security ownership details and activity for the requested security identifiers. The services allows filtering by \"Topn\" holders and by holder \"type\", such as Institutions, Insiders, and Stakeholders. 
     * @param {Array.<String>} ids Requested list of security identifiers. <p>***ids limit** =  1 per request*</p>.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.holderType Controls the Holder Type of the data returned. By default, the service will return Institutional Holders. Requesting All Holders is not currently supported. Only a single Holder Type is allowed per request.   * **F** = Institutions   * **M** = Mutual Funds   * **S** =  Insiders/Stakeholders   * **FS** = Institutions/Insiders   * **B** = Beneficial Owners  (default to 'F')
     * @param {String} opts.topn Limits number of holdings or holders displayed by the top *n* securities based on positions Market Value. Default is ALL, otherwise use number to limit number. (default to 'ALL')
     * @param {String} opts.date Date of holdings expressed in YYYY-MM-DD format. The fund-holdings endpoint will default to latest month-end close.
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecurityHoldersResponse} and HTTP response
     */
    getSecurityHoldersWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getSecurityHolders");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'holderType': opts['holderType'],
        'topn': opts['topn'],
        'date': opts['date'],
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SecurityHoldersResponse;
      return this.apiClient.callApi(
        '/factset-ownership/v1/security-holders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get security ownership data for requested security identifers.
     * Gets security ownership details and activity for the requested security identifiers. The services allows filtering by \"Topn\" holders and by holder \"type\", such as Institutions, Insiders, and Stakeholders. 
     * @param {Array.<String>} ids Requested list of security identifiers. <p>***ids limit** =  1 per request*</p>.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.holderType Controls the Holder Type of the data returned. By default, the service will return Institutional Holders. Requesting All Holders is not currently supported. Only a single Holder Type is allowed per request.   * **F** = Institutions   * **M** = Mutual Funds   * **S** =  Insiders/Stakeholders   * **FS** = Institutions/Insiders   * **B** = Beneficial Owners  (default to 'F')
     * @param {String} opts.topn Limits number of holdings or holders displayed by the top *n* securities based on positions Market Value. Default is ALL, otherwise use number to limit number. (default to 'ALL')
     * @param {String} opts.date Date of holdings expressed in YYYY-MM-DD format. The fund-holdings endpoint will default to latest month-end close.
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecurityHoldersResponse}
     */
    getSecurityHolders(ids, opts) {
      return this.getSecurityHoldersWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get security ownership data for a list of requested securities.
     * Gets security ownership details and activity for the requested security identifiers. The services allows filtering by \"Topn\" holders and by holder \"type\", such as Institutions, Insiders, and Stakeholders. 
     * @param {module:model/SecurityHoldersRequest} securityHoldersRequest Requesting Security Holders for a list of Fund Identifiers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecurityHoldersResponse} and HTTP response
     */
    postSecurityHoldersWithHttpInfo(securityHoldersRequest) {
      let postBody = securityHoldersRequest;
      // verify the required parameter 'securityHoldersRequest' is set
      if (securityHoldersRequest === undefined || securityHoldersRequest === null) {
        throw new Error("Missing the required parameter 'securityHoldersRequest' when calling postSecurityHolders");
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
      let returnType = SecurityHoldersResponse;
      return this.apiClient.callApi(
        '/factset-ownership/v1/security-holders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get security ownership data for a list of requested securities.
     * Gets security ownership details and activity for the requested security identifiers. The services allows filtering by \"Topn\" holders and by holder \"type\", such as Institutions, Insiders, and Stakeholders. 
     * @param {module:model/SecurityHoldersRequest} securityHoldersRequest Requesting Security Holders for a list of Fund Identifiers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecurityHoldersResponse}
     */
    postSecurityHolders(securityHoldersRequest) {
      return this.postSecurityHoldersWithHttpInfo(securityHoldersRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}