/**
 * FactSet Symbology API
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and LEIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs.</p> 
 *
 * The version of the OpenAPI document: 3.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorResponse from '../model/ErrorResponse';
import IdentifierResolutionRequest from '../model/IdentifierResolutionRequest';
import IdentifierResolutionResponse from '../model/IdentifierResolutionResponse';

/**
* IdentifierResolution service.
* @module api/IdentifierResolutionApi
*/
export default class IdentifierResolutionApi {

    /**
    * Constructs a new IdentifierResolutionApi. 
    * @alias module:api/IdentifierResolutionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns the specified output identifiers for the specified input identifier.
     * The Identifier Resolution endpoint provides flexibility for requesting and receiving both third-party and FactSet Permanent identifiers. Users can both input and output most of the listed identifiers, with exceptions noted below.  All input and output symbols must be declared, and users have the ability to resolve one input symbol to many different output symbols in one request.  * BIC* - Bank Identification Code (e.g. ABXXHKH1) * CIK - Edgar Central Index Keys (e.g. 0000100331) * CRD - Central Registration Depository (e.g. 149722) * DUNS - Dun & Bradstreet Data Universal Numbering System (e.g. 621513451) (Input only) * EIN - Employer Identification Number (e.g. 953540776) * FITCH* - Fitch Ratings Identifier (e.g. 47504) * LEI - Legal Entity Identifier (e.g. 549300A6K7JX8EX2QZ33) * MD* - Moody's Ratings Identifier (e.g. 0823736553) * SPR* - S&P Ratings Identifier (e.g. 301939) * VALOREN - Valoren (\"Valor\") Identification (e.g. 685558) (Input only) * WKN* - German Securities Identification (\"Wert\") (e.g. A0MU9T) * UKCH - UK Company House Identifier(e.g.CE012494) * RSSD - Federal Reserve RSSD Identifier(1139297) * SEDOL* * CUSIP* * fsymEntityId - FactSet entity Id * fsymSecurityId - FactSet security level permanent identifier * fsymRegionalId - FactSet regional level permanent identifier * fsymListingId - FactSet listing level permanent identifier * ISIN* * tickerExchange * tickerRegion * bloombergFigi (output symbols: bloombergFigiListing, bloombergFigiRegional & bloombergFigiSecurity ) * bloombergTicker (output symbols: bloombergRegionalTicker & bloombergListingTicker) * GVKEY (Input only) * GVKEY & IID (Input only) * JCN * LoanX (Input only) * Markit Red (Input only)  **These symbol types require additional subscriptions. If you would like to gain access to these symbol types, please contact your FactSet Account Team or \"Report Issue\" above and our support teams can assist.* 
     * @param {module:model/IdentifierResolutionRequest} identifierResolutionRequest Request Body for Identifier Resolution.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdentifierResolutionResponse} and HTTP response
     */
    batchIdentifierResolutionWithHttpInfo(identifierResolutionRequest) {
      let postBody = identifierResolutionRequest;
      // verify the required parameter 'identifierResolutionRequest' is set
      if (identifierResolutionRequest === undefined || identifierResolutionRequest === null) {
        throw new Error("Missing the required parameter 'identifierResolutionRequest' when calling batchIdentifierResolution");
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


      let returnType = IdentifierResolutionResponse;

      return this.apiClient.callApi(
        '/symbology/v3/identifier-resolution', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the specified output identifiers for the specified input identifier.
     * The Identifier Resolution endpoint provides flexibility for requesting and receiving both third-party and FactSet Permanent identifiers. Users can both input and output most of the listed identifiers, with exceptions noted below.  All input and output symbols must be declared, and users have the ability to resolve one input symbol to many different output symbols in one request.  * BIC* - Bank Identification Code (e.g. ABXXHKH1) * CIK - Edgar Central Index Keys (e.g. 0000100331) * CRD - Central Registration Depository (e.g. 149722) * DUNS - Dun & Bradstreet Data Universal Numbering System (e.g. 621513451) (Input only) * EIN - Employer Identification Number (e.g. 953540776) * FITCH* - Fitch Ratings Identifier (e.g. 47504) * LEI - Legal Entity Identifier (e.g. 549300A6K7JX8EX2QZ33) * MD* - Moody's Ratings Identifier (e.g. 0823736553) * SPR* - S&P Ratings Identifier (e.g. 301939) * VALOREN - Valoren (\"Valor\") Identification (e.g. 685558) (Input only) * WKN* - German Securities Identification (\"Wert\") (e.g. A0MU9T) * UKCH - UK Company House Identifier(e.g.CE012494) * RSSD - Federal Reserve RSSD Identifier(1139297) * SEDOL* * CUSIP* * fsymEntityId - FactSet entity Id * fsymSecurityId - FactSet security level permanent identifier * fsymRegionalId - FactSet regional level permanent identifier * fsymListingId - FactSet listing level permanent identifier * ISIN* * tickerExchange * tickerRegion * bloombergFigi (output symbols: bloombergFigiListing, bloombergFigiRegional & bloombergFigiSecurity ) * bloombergTicker (output symbols: bloombergRegionalTicker & bloombergListingTicker) * GVKEY (Input only) * GVKEY & IID (Input only) * JCN * LoanX (Input only) * Markit Red (Input only)  **These symbol types require additional subscriptions. If you would like to gain access to these symbol types, please contact your FactSet Account Team or \"Report Issue\" above and our support teams can assist.* 
     * @param {module:model/IdentifierResolutionRequest} identifierResolutionRequest Request Body for Identifier Resolution.
     * @return { Promise.< module:model/IdentifierResolutionResponse > } a Promise, with data of type {@link module:model/IdentifierResolutionResponse }
     */
    batchIdentifierResolution(identifierResolutionRequest) {
      return this.batchIdentifierResolutionWithHttpInfo(identifierResolutionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns the specified output identifiers for the specified input identifier.
     * The Identifier Resolution endpoint provides flexibility for requesting and receiving both third-party and FactSet Permanent identifiers. Users can both input and output most of the listed identifiers, with exceptions noted below.  All input and output symbols must be declared, and users have the ability to resolve one input symbol to many different output symbols in one request.  * BIC* - Bank Identification Code (e.g. ABXXHKH1) * CIK - Edgar Central Index Keys (e.g. 0000100331) * CRD - Central Registration Depository (e.g. 149722) * DUNS - Dun & Bradstreet Data Universal Numbering System (e.g. 621513451) (Input only) * EIN - Employer Identification Number (e.g. 953540776) * FITCH* - Fitch Ratings Identifier (e.g. 47504) * LEI - Legal Entity Identifier (e.g. 549300A6K7JX8EX2QZ33) * MD* - Moody's Ratings Identifier (e.g. 0823736553) * SPR* - S&P Ratings Identifier (e.g. 301939) * VALOREN - Valoren (\"Valor\") Identification (e.g. 685558) (Input only) * WKN* - German Securities Identification (\"Wert\") (e.g. A0MU9T) * UKCH - UK Company House Identifier(e.g.CE012494) * RSSD - Federal Reserve RSSD Identifier(1139297) * SEDOL* * CUSIP* * fsymEntityId - FactSet entity Id * fsymSecurityId - FactSet security level permanent identifier * fsymRegionalId - FactSet regional level permanent identifier * fsymListingId - FactSet listing level permanent identifier * ISIN* * tickerExchange * tickerRegion * bloombergFigi (output symbols: bloombergFigiListing, bloombergFigiRegional & bloombergFigiSecurity ) * bloombergTicker (output symbols: bloombergRegionalTicker & bloombergListingTicker) * GVKEY (Input only) * GVKEY & IID (Input only) * JCN * LoanX (Input only) * Markit Red (Input only)  **These symbol types require additional subscriptions. If you would like to gain access to these symbol types, please contact your FactSet Account Team or \"Report Issue\" above and our support teams can assist.* 
     * @param {Array.<String>} ids Requested security or entity identifiers. All requested identifiers must be of the same type. This request value is sent back in the response as, `requestId'. <p>***ids limit** =  3000 per request*</p>   *<p>NOTE:  GET Method URL request lines are also limited to a total   length of 8192 bytes (8KB). In cases where the service allows for thousands   of ids, which may lead to exceeding this request line limit of 8KB, its   advised for any requests with large request lines to be requested through   the respective \"POST\" method.</p>* 
     * @param {module:model/String} inputSymbolType The type of symbol being inputted. Only one type of symbol is accepted with each request. 
     * @param {Array.<module:model/String>} outputSymbolTypes The type of symbols being outputted. Multiple types of symbols can be outputted with each request. The user must be authorized for the requested identifier type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdentifierResolutionResponse} and HTTP response
     */
    identifierResolutionWithHttpInfo(ids, inputSymbolType, outputSymbolTypes) {
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling identifierResolution");
      }
      // verify the required parameter 'inputSymbolType' is set
      if (inputSymbolType === undefined || inputSymbolType === null) {
        throw new Error("Missing the required parameter 'inputSymbolType' when calling identifierResolution");
      }
      // verify the required parameter 'outputSymbolTypes' is set
      if (outputSymbolTypes === undefined || outputSymbolTypes === null) {
        throw new Error("Missing the required parameter 'outputSymbolTypes' when calling identifierResolution");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'inputSymbolType': inputSymbolType,
        'outputSymbolTypes': this.apiClient.buildCollectionParam(outputSymbolTypes, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = IdentifierResolutionResponse;

      return this.apiClient.callApi(
        '/symbology/v3/identifier-resolution', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns the specified output identifiers for the specified input identifier.
     * The Identifier Resolution endpoint provides flexibility for requesting and receiving both third-party and FactSet Permanent identifiers. Users can both input and output most of the listed identifiers, with exceptions noted below.  All input and output symbols must be declared, and users have the ability to resolve one input symbol to many different output symbols in one request.  * BIC* - Bank Identification Code (e.g. ABXXHKH1) * CIK - Edgar Central Index Keys (e.g. 0000100331) * CRD - Central Registration Depository (e.g. 149722) * DUNS - Dun & Bradstreet Data Universal Numbering System (e.g. 621513451) (Input only) * EIN - Employer Identification Number (e.g. 953540776) * FITCH* - Fitch Ratings Identifier (e.g. 47504) * LEI - Legal Entity Identifier (e.g. 549300A6K7JX8EX2QZ33) * MD* - Moody's Ratings Identifier (e.g. 0823736553) * SPR* - S&P Ratings Identifier (e.g. 301939) * VALOREN - Valoren (\"Valor\") Identification (e.g. 685558) (Input only) * WKN* - German Securities Identification (\"Wert\") (e.g. A0MU9T) * UKCH - UK Company House Identifier(e.g.CE012494) * RSSD - Federal Reserve RSSD Identifier(1139297) * SEDOL* * CUSIP* * fsymEntityId - FactSet entity Id * fsymSecurityId - FactSet security level permanent identifier * fsymRegionalId - FactSet regional level permanent identifier * fsymListingId - FactSet listing level permanent identifier * ISIN* * tickerExchange * tickerRegion * bloombergFigi (output symbols: bloombergFigiListing, bloombergFigiRegional & bloombergFigiSecurity ) * bloombergTicker (output symbols: bloombergRegionalTicker & bloombergListingTicker) * GVKEY (Input only) * GVKEY & IID (Input only) * JCN * LoanX (Input only) * Markit Red (Input only)  **These symbol types require additional subscriptions. If you would like to gain access to these symbol types, please contact your FactSet Account Team or \"Report Issue\" above and our support teams can assist.* 
     * @param {Array.<String>} ids Requested security or entity identifiers. All requested identifiers must be of the same type. This request value is sent back in the response as, `requestId'. <p>***ids limit** =  3000 per request*</p>   *<p>NOTE:  GET Method URL request lines are also limited to a total   length of 8192 bytes (8KB). In cases where the service allows for thousands   of ids, which may lead to exceeding this request line limit of 8KB, its   advised for any requests with large request lines to be requested through   the respective \"POST\" method.</p>* 
     * @param {module:model/String} inputSymbolType The type of symbol being inputted. Only one type of symbol is accepted with each request. 
     * @param {Array.<module:model/String>} outputSymbolTypes The type of symbols being outputted. Multiple types of symbols can be outputted with each request. The user must be authorized for the requested identifier type.
     * @return { Promise.< module:model/IdentifierResolutionResponse > } a Promise, with data of type {@link module:model/IdentifierResolutionResponse }
     */
    identifierResolution(ids, inputSymbolType, outputSymbolTypes) {
      return this.identifierResolutionWithHttpInfo(ids, inputSymbolType, outputSymbolTypes)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





