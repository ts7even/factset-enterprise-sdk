/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineObject2 from '../model/InlineObject2';
import InlineObject3 from '../model/InlineObject3';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse2007 from '../model/InlineResponse2007';

/**
* SecuritizedDerivative service.
* @module api/SecuritizedDerivativeApi
* @version 0.9.1
*/
export default class SecuritizedDerivativeApi {

    /**
    * Constructs a new SecuritizedDerivativeApi. 
    * @alias module:api/SecuritizedDerivativeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List of barrier types.
     * List of barrier types.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    getSecuritizedDerivativeBarrierTypeListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/securitizedDerivative/barrier/type/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of barrier types.
     * List of barrier types.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    getSecuritizedDerivativeBarrierTypeList(opts) {
      return this.getSecuritizedDerivativeBarrierTypeListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fundamental data for a single securitized derivative.
     * Fundamental data for a single securitized derivative. Dates are interpreted in the timezone of the issuer.
     * @param {String} id Identifier of the instrument.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    getSecuritizedDerivativeGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSecuritizedDerivativeGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/securitizedDerivative/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fundamental data for a single securitized derivative.
     * Fundamental data for a single securitized derivative. Dates are interpreted in the timezone of the issuer.
     * @param {String} id Identifier of the instrument.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    getSecuritizedDerivativeGet(id, opts) {
      return this.getSecuritizedDerivativeGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Notation-based key figures of a securitized derivative.
     * Notation-based key figures of a securitized derivative. Not all key figures are applicable and/or calculated for all types of securitized derivatives. Following, some frequently used references:   Cover ratio - see attribute `underlyings.coverRatio` in endpoint `/securitizedDerivative/underlying/list`.  Various barrier types (e.g. strike, knock in) - see endpoint `/securitizedDerivative/barrier/type/list`.  Exercise right - see attribute `exercise.right` in endpoint `/securitizedDerivative/get`.  Issue price - see attribute `issue.price` in endpoint `/securitizedDerivative/get`.  Ask price - see attribute `prices.ask`.  Bid price - see attribute `prices.bid`.
     * @param {String} id Identifier of a notation.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    getSecuritizedDerivativeKeyFiguresNotationGetWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSecuritizedDerivativeKeyFiguresNotationGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/securitizedDerivative/keyFigures/notation/get', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Notation-based key figures of a securitized derivative.
     * Notation-based key figures of a securitized derivative. Not all key figures are applicable and/or calculated for all types of securitized derivatives. Following, some frequently used references:   Cover ratio - see attribute `underlyings.coverRatio` in endpoint `/securitizedDerivative/underlying/list`.  Various barrier types (e.g. strike, knock in) - see endpoint `/securitizedDerivative/barrier/type/list`.  Exercise right - see attribute `exercise.right` in endpoint `/securitizedDerivative/get`.  Issue price - see attribute `issue.price` in endpoint `/securitizedDerivative/get`.  Ask price - see attribute `prices.ask`.  Bid price - see attribute `prices.bid`.
     * @param {String} id Identifier of a notation.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    getSecuritizedDerivativeKeyFiguresNotationGet(id, opts) {
      return this.getSecuritizedDerivativeKeyFiguresNotationGetWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List of underlyings with barrier and cash flow information.
     * Provides details regarding the underlyings, their respective barriers and related cash flows (if any) of a securitized derivative. A unique combination of a cash flow and related barrier modalities, such as observation and level, is called a condition. In case of a securitized derivative with multiple underlyings, a condition comprises the respective barriers of all underlyings participating in that condition. Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term \"level\" is used instead of \"price\", e.g. underlying level instead of underlying price.
     * @param {String} id Identifier of an instrument.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2007} and HTTP response
     */
    getSecuritizedDerivativeUnderlyingListWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSecuritizedDerivativeUnderlyingList");
      }

      let pathParams = {
      };
      let queryParams = {
        'id': id,
        '_attributes': this.apiClient.buildCollectionParam(opts['attributes'], 'csv'),
        '_language': opts['language']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;
      return this.apiClient.callApi(
        '/securitizedDerivative/underlying/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List of underlyings with barrier and cash flow information.
     * Provides details regarding the underlyings, their respective barriers and related cash flows (if any) of a securitized derivative. A unique combination of a cash flow and related barrier modalities, such as observation and level, is called a condition. In case of a securitized derivative with multiple underlyings, a condition comprises the respective barriers of all underlyings participating in that condition. Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term \"level\" is used instead of \"price\", e.g. underlying level instead of underlying price.
     * @param {String} id Identifier of an instrument.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.attributes Limit the attributes returned in the response to the specified set.
     * @param {String} opts.language ISO 639-1 code of the language.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2007}
     */
    getSecuritizedDerivativeUnderlyingList(id, opts) {
      return this.getSecuritizedDerivativeUnderlyingListWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search for issuers of securitized derivatives.
     * Search for issuers of securitized derivatives, including issuer groups, which do not represent actual juristic persons, but are defined by FactSet to facilitate searching. FactSet does not consolidate the data provided by different suppliers, therefore the result may contain more than one identifier for a given issuer. The response is limited to 100 results.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    postSecuritizedDerivativeIssuerSearchWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/securitizedDerivative/issuer/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search for issuers of securitized derivatives.
     * Search for issuers of securitized derivatives, including issuer groups, which do not represent actual juristic persons, but are defined by FactSet to facilitate searching. FactSet does not consolidate the data provided by different suppliers, therefore the result may contain more than one identifier for a given issuer. The response is limited to 100 results.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    postSecuritizedDerivativeIssuerSearch(opts) {
      return this.postSecuritizedDerivativeIssuerSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Ranking of securitized derivatives' notations using intraday figures.
     * Ranking of securitized derivatives' notations using intraday figures. The result is limited to 100 notations that all must satisfy all selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, the selection of the notation depends on the sort attribute: - absolute and relative performance (see the response attributes `trade.performance.absolute` and `trade.performance.relative`) - the notation with the most recent trade price is used - number trades, trading value and trading volume (see the response attributes `accumulated.numberTrades`, `accumulated.tradingVolume` and `accumulated.tradingValue`) - the notation with highest (lowest) value is used  By default, the result is sorted descending by the relative intraday performance corresponding to the most recent trade price, see attribute `trade.performance.relative`. The result may contain sortable values based on different currencies, possibly making the ranking nonsensical, if the parameters `valueUnit` and/or `currency` have not been specified.  The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.  All identifiers used as parameters must be valid and entitled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    postSecuritizedDerivativeNotationRankingIntradayListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/securitizedDerivative/notation/ranking/intraday/list', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Ranking of securitized derivatives' notations using intraday figures.
     * Ranking of securitized derivatives' notations using intraday figures. The result is limited to 100 notations that all must satisfy all selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, the selection of the notation depends on the sort attribute: - absolute and relative performance (see the response attributes `trade.performance.absolute` and `trade.performance.relative`) - the notation with the most recent trade price is used - number trades, trading value and trading volume (see the response attributes `accumulated.numberTrades`, `accumulated.tradingVolume` and `accumulated.tradingValue`) - the notation with highest (lowest) value is used  By default, the result is sorted descending by the relative intraday performance corresponding to the most recent trade price, see attribute `trade.performance.relative`. The result may contain sortable values based on different currencies, possibly making the ranking nonsensical, if the parameters `valueUnit` and/or `currency` have not been specified.  The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.  All identifiers used as parameters must be valid and entitled.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    postSecuritizedDerivativeNotationRankingIntradayList(opts) {
      return this.postSecuritizedDerivativeNotationRankingIntradayListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Screener for securitized derivatives's notations based on securitized derivatives-specific parameters.
     * Screener for securitized derivatives's notations based on securitized derivatives-specific parameters. The result is limited to the notations that satisfy all the selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered. All identifiers used as parameters must be valid and entitled.   Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term \"level\" is used instead of \"price\", e.g. underlying level instead of underlying price.   The endpoint does not support the search for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are returned in the result.   The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2006} and HTTP response
     */
    postSecuritizedDerivativeNotationScreenerSearchWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/securitizedDerivative/notation/screener/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Screener for securitized derivatives's notations based on securitized derivatives-specific parameters.
     * Screener for securitized derivatives's notations based on securitized derivatives-specific parameters. The result is limited to the notations that satisfy all the selected filters. If more than one notation of an instrument matches the parameters, and no market priority has been specified, only the notation with the highest trading volume, averaged over one month, is considered. All identifiers used as parameters must be valid and entitled.   Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term \"level\" is used instead of \"price\", e.g. underlying level instead of underlying price.   The endpoint does not support the search for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are returned in the result.   The search can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject3} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    postSecuritizedDerivativeNotationScreenerSearch(opts) {
      return this.postSecuritizedDerivativeNotationScreenerSearchWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Possible values and value ranges for the parameters used in the endpoint `/securitizedDerivative/notation/screener/search`.
     * The endpoint returns the possible values and value ranges for the parameters used in the endpoint `/securitizedDerivatives/notation/screener/search`. It allows to request the values and value ranges only for a restricted set of notations that match predefined parameters. If more than one notation of an instrument matches, only the notation with the best market priority (according to the parameter `market.priority`) or, in the absence of market priorities, with the highest monetary trading volume, averaged over 30 trading days, is considered. The functionality may be used to pre-fill the values and value ranges of the parameters of the `/securitizedDerivatives/notation/screener/search` endpoint so that performing a search always leads to a non-empty list of notations. Lists of distinct values, e.g. identifiers, are sorted descending by the number of notations for each value.   Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term \"level\" is used instead of \"price\", e.g. underlying level instead of underlying price.   The endpoint does not support possible values and value ranges for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are considered.   The possible values and value ranges can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    postSecuritizedDerivativeNotationScreenerValueRangesGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['body'];

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
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/securitizedDerivative/notation/screener/valueRanges/get', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Possible values and value ranges for the parameters used in the endpoint `/securitizedDerivative/notation/screener/search`.
     * The endpoint returns the possible values and value ranges for the parameters used in the endpoint `/securitizedDerivatives/notation/screener/search`. It allows to request the values and value ranges only for a restricted set of notations that match predefined parameters. If more than one notation of an instrument matches, only the notation with the best market priority (according to the parameter `market.priority`) or, in the absence of market priorities, with the highest monetary trading volume, averaged over 30 trading days, is considered. The functionality may be used to pre-fill the values and value ranges of the parameters of the `/securitizedDerivatives/notation/screener/search` endpoint so that performing a search always leads to a non-empty list of notations. Lists of distinct values, e.g. identifiers, are sorted descending by the number of notations for each value.   Since some underlyings, e.g. an index or a performance difference of a stock and an index (alpha structure), do not represent a directly tradable asset, they do not have a price in the classical sense. Therefore, the term \"level\" is used instead of \"price\", e.g. underlying level instead of underlying price.   The endpoint does not support possible values and value ranges for securitized derivatives with multiple underlyings, thus only securitized derivatives with a single underlying are considered.   The possible values and value ranges can be restricted to a specific set of products by using customer-specific instrument or notation lists. Such restriction lists are set up by FactSet upon request.
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    postSecuritizedDerivativeNotationScreenerValueRangesGet(opts) {
      return this.postSecuritizedDerivativeNotationScreenerValueRangesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
