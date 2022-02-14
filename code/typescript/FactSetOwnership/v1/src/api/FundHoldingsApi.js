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
import FundHoldingsRequest from '../model/FundHoldingsRequest';
import FundHoldingsResponse from '../model/FundHoldingsResponse';

/**
* FundHoldings service.
* @module api/FundHoldingsApi
* @version 0.9.1
*/
export default class FundHoldingsApi {

    /**
    * Constructs a new FundHoldingsApi. 
    * @alias module:api/FundHoldingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get underlying holdings information for a requested fund identifer.
     * Gets holdings information for list of fund identifiers. The service allows you to filter by the TopN holdings and Asset Type. 
     * @param {Array.<String>} ids List of requested fund identifiers. <p>***ids limit** =  10 per request*</p>
     * @param {Object} opts Optional parameters
     * @param {String} opts.date Date of holdings expressed in YYYY-MM-DD format. The fund-holdings endpoint will default to latest month-end close.
     * @param {String} opts.topn Limits number of holdings or holders displayed by the top *n* securities based on positions Market Value. Default is ALL, otherwise use number to limit number. (default to 'ALL')
     * @param {module:model/String} opts.assetType Filter holdings by the following major asset classes -   * **EQ**  = Equity   * **FI** = Fixed Income   * **ALL** = ALL  (default to 'EQ')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FundHoldingsResponse} and HTTP response
     */
    getOwnershipHoldingsWithHttpInfo(ids, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getOwnershipHoldings");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'date': opts['date'],
        'topn': opts['topn'],
        'assetType': opts['assetType'],
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FundHoldingsResponse;
      return this.apiClient.callApi(
        '/factset-ownership/v1/fund-holdings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get underlying holdings information for a requested fund identifer.
     * Gets holdings information for list of fund identifiers. The service allows you to filter by the TopN holdings and Asset Type. 
     * @param {Array.<String>} ids List of requested fund identifiers. <p>***ids limit** =  10 per request*</p>
     * @param {Object} opts Optional parameters
     * @param {String} opts.date Date of holdings expressed in YYYY-MM-DD format. The fund-holdings endpoint will default to latest month-end close.
     * @param {String} opts.topn Limits number of holdings or holders displayed by the top *n* securities based on positions Market Value. Default is ALL, otherwise use number to limit number. (default to 'ALL')
     * @param {module:model/String} opts.assetType Filter holdings by the following major asset classes -   * **EQ**  = Equity   * **FI** = Fixed Income   * **ALL** = ALL  (default to 'EQ')
     * @param {String} opts.currency Currency code for adjusting prices. Default is Local. For a list of currency ISO codes, visit [Online Assistant Page 1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FundHoldingsResponse}
     */
    getOwnershipHoldings(ids, opts) {
      return this.getOwnershipHoldingsWithHttpInfo(ids, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get holdings for a list of funds.
     * Gets Holding information for a long list of Fund objects.
     * @param {module:model/FundHoldingsRequest} fundHoldingsRequest Requesting Underlying Holdings for a list of Fund Identifiers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FundHoldingsResponse} and HTTP response
     */
    postOwnershipHoldingsWithHttpInfo(fundHoldingsRequest) {
      let postBody = fundHoldingsRequest;
      // verify the required parameter 'fundHoldingsRequest' is set
      if (fundHoldingsRequest === undefined || fundHoldingsRequest === null) {
        throw new Error("Missing the required parameter 'fundHoldingsRequest' when calling postOwnershipHoldings");
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
      let returnType = FundHoldingsResponse;
      return this.apiClient.callApi(
        '/factset-ownership/v1/fund-holdings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get holdings for a list of funds.
     * Gets Holding information for a long list of Fund objects.
     * @param {module:model/FundHoldingsRequest} fundHoldingsRequest Requesting Underlying Holdings for a list of Fund Identifiers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FundHoldingsResponse}
     */
    postOwnershipHoldings(fundHoldingsRequest) {
      return this.postOwnershipHoldingsWithHttpInfo(fundHoldingsRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
