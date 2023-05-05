/**
 * FactSet Estimates
 * Gain access to 20+ years of comprehensive estimates and statistics of over 250+ estimated metrics, including financial statement items, product segments, geosegments, and industry metrics. FactSet's consensus estimates are aggregated from a wide base of over 800+ contributors and cover over 19,000 active companies across 90+ countries. Data returned can be accessed on the data frequencies based on quarterly, fiscal years, and calendar years. FactSet Estimates updates on a real time basis intraday (every 5 minutes). Updating times vary based on earning season vs. non-earning season but the goal is to have the data available to the client within a few hours that FactSet receives updated information. Often times updates times can be much faster as FactSet has always been known as one of the fastest estimate providers in the market. 
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ConsensusResponse from '../model/ConsensusResponse';
import ErrorResponse from '../model/ErrorResponse';
import FixedConsensusRequest from '../model/FixedConsensusRequest';
import RollingConsensusRequest from '../model/RollingConsensusRequest';

/**
* Consensus service.
* @module api/ConsensusApi
*/
export default class ConsensusApi {

    /**
    * Constructs a new ConsensusApi. 
    * @alias module:api/ConsensusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Retrieves consensus estimates for a requested list of ids and fixed fiscal periods
     * Returns FactSet Estimates consensus data using fixed fiscal dates. For example, if the company's current unreported year is 12/2020, all data returned by formulas that specify as the period/report basis will be for 12/2005 regardless of what perspective dates (startDate/endDate) are used. The fixed dates are \"locked\" in time and all estimated values are for that explicit date. If you are requesting that the estimated periods can change with the perspective date, please use the rolling-consensus endpoint. 
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
     * @param {Array.<String>} metrics Requested metrics. Use the /metrics endpoint to return a list of available estimate items. Note, the number of metrics you are allowed to supply is limited to 1 for now. **Top 10** most used metrics are **EPS, SALES, DPS, EBITDA,EBIT, PRICE_TGT, CFPS, BPS, NET_INC, and ASSETS**.  For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {String} opts.endDate End date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {module:model/String} opts.frequency Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.   (default to 'D')
     * @param {String} opts.fiscalPeriodStart Fiscal period start expressed in absolute date formats. Date that will fall back to most recent completed period during resolution.   * **Fiscal Quarter-end** - YYYY/FQ (e.g., 2019/1F, 2019/2F, 2019/3F, 2019/4F)   * **Fiscal Year-end** - YYYY (e.g. 2019) 
     * @param {String} opts.fiscalPeriodEnd Fiscal period start expressed in absolute date formats. Date that will fall back to most recent completed period during resolution.   * **Fiscal Quarter-end** - YYYY/FQ (e.g., 2019/1F, 2019/2F, 2019/3F, 2019/4F)   * **Fiscal Year-end** - YYYY (e.g. 2019) 
     * @param {module:model/String} opts.periodicity The periodicity for the estimates requested, allowing you to fetch Quarterly, Semi-Annual, Annual, and NTMA/LTMA Estimates.   * **ANN** - Annual   * **QTR** - Quarterly   * **SEMI** - Semi-Annual    * **NTMA** - Next-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.   * **LTMA** - Last-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.     (default to 'ANN')
     * @param {String} opts.currency Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConsensusResponse} and HTTP response
     */
    getFixedConsensusWithHttpInfo(ids, metrics, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getFixedConsensus");
      }
      // verify the required parameter 'metrics' is set
      if (metrics === undefined || metrics === null) {
        throw new Error("Missing the required parameter 'metrics' when calling getFixedConsensus");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'metrics': this.apiClient.buildCollectionParam(metrics, 'csv'),
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'frequency': opts['frequency'],
        'fiscalPeriodStart': opts['fiscalPeriodStart'],
        'fiscalPeriodEnd': opts['fiscalPeriodEnd'],
        'periodicity': opts['periodicity'],
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = ConsensusResponse;

      return this.apiClient.callApi(
        '/factset-estimates/v2/fixed-consensus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves consensus estimates for a requested list of ids and fixed fiscal periods
     * Returns FactSet Estimates consensus data using fixed fiscal dates. For example, if the company's current unreported year is 12/2020, all data returned by formulas that specify as the period/report basis will be for 12/2005 regardless of what perspective dates (startDate/endDate) are used. The fixed dates are \"locked\" in time and all estimated values are for that explicit date. If you are requesting that the estimated periods can change with the perspective date, please use the rolling-consensus endpoint. 
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
     * @param {Array.<String>} metrics Requested metrics. Use the /metrics endpoint to return a list of available estimate items. Note, the number of metrics you are allowed to supply is limited to 1 for now. **Top 10** most used metrics are **EPS, SALES, DPS, EBITDA,EBIT, PRICE_TGT, CFPS, BPS, NET_INC, and ASSETS**.  For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {String} opts.endDate End date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {module:model/String} opts.frequency Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.   (default to 'D')
     * @param {String} opts.fiscalPeriodStart Fiscal period start expressed in absolute date formats. Date that will fall back to most recent completed period during resolution.   * **Fiscal Quarter-end** - YYYY/FQ (e.g., 2019/1F, 2019/2F, 2019/3F, 2019/4F)   * **Fiscal Year-end** - YYYY (e.g. 2019) 
     * @param {String} opts.fiscalPeriodEnd Fiscal period start expressed in absolute date formats. Date that will fall back to most recent completed period during resolution.   * **Fiscal Quarter-end** - YYYY/FQ (e.g., 2019/1F, 2019/2F, 2019/3F, 2019/4F)   * **Fiscal Year-end** - YYYY (e.g. 2019) 
     * @param {module:model/String} opts.periodicity The periodicity for the estimates requested, allowing you to fetch Quarterly, Semi-Annual, Annual, and NTMA/LTMA Estimates.   * **ANN** - Annual   * **QTR** - Quarterly   * **SEMI** - Semi-Annual    * **NTMA** - Next-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.   * **LTMA** - Last-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.     (default to 'ANN')
     * @param {String} opts.currency Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
     * @return { Promise.< module:model/ConsensusResponse > } a Promise, with data of type {@link module:model/ConsensusResponse }
     */
    getFixedConsensus(ids, metrics, opts) {
      return this.getFixedConsensusWithHttpInfo(ids, metrics, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * FactSet consensus estimates for fixed fiscal periods
     * Returns FactSet Estimates consensus data using fixed fiscal dates. For example, if the company's current unreported year is 12/2020, all data returned by formulas that specify as the period/report basis will be for 12/2005 regardless of what perspective dates (startDate/endDate) are used. The fixed dates are \"locked\" in time and all estimated values are for that explicit date. If you are requesting that the estimated periods can change with the perspective date, please use the rolling-consensus endpoint. 
     * @param {module:model/FixedConsensusRequest} fixedConsensusRequest Request object for Estimate Data Items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConsensusResponse} and HTTP response
     */
    getFixedConsensusForListWithHttpInfo(fixedConsensusRequest) {
      let postBody = fixedConsensusRequest;
      // verify the required parameter 'fixedConsensusRequest' is set
      if (fixedConsensusRequest === undefined || fixedConsensusRequest === null) {
        throw new Error("Missing the required parameter 'fixedConsensusRequest' when calling getFixedConsensusForList");
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


      let returnType = ConsensusResponse;

      return this.apiClient.callApi(
        '/factset-estimates/v2/fixed-consensus', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * FactSet consensus estimates for fixed fiscal periods
     * Returns FactSet Estimates consensus data using fixed fiscal dates. For example, if the company's current unreported year is 12/2020, all data returned by formulas that specify as the period/report basis will be for 12/2005 regardless of what perspective dates (startDate/endDate) are used. The fixed dates are \"locked\" in time and all estimated values are for that explicit date. If you are requesting that the estimated periods can change with the perspective date, please use the rolling-consensus endpoint. 
     * @param {module:model/FixedConsensusRequest} fixedConsensusRequest Request object for Estimate Data Items.
     * @return { Promise.< module:model/ConsensusResponse > } a Promise, with data of type {@link module:model/ConsensusResponse }
     */
    getFixedConsensusForList(fixedConsensusRequest) {
      return this.getFixedConsensusForListWithHttpInfo(fixedConsensusRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves consensus estimates for a requested list of ids and rolling fiscal periods.
     * Returns FactSet Estimates consensus data using rolling fiscal dates. <p>The rolling behavior causes fiscal year to automatically roll from one year to the next as the historical perspective date changes. The fiscal period rolls forward as of each period end. This endpoint is optimized to allow the request to simply include a relative fiscal period (e.g. use relativeFiscalStart integer 1 and periodicity ANN for next unreported fiscal year end), and then see what the consensus thought the \"next fiscal year\" estimates were through time as you \"roll\" back your perspective dates. This differs from locking down an absolute estimate period such as explicitly stating Fiscal Year 2019. This can be done in the fixed-consensus endpoint.</p> 
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
     * @param {Array.<String>} metrics Requested metrics. Use the /metrics endpoint to return a list of available estimate items. Note, the number of metrics you are allowed to supply is limited to 1 for now. **Top 10** most used metrics are **EPS, SALES, DPS, EBITDA,EBIT, PRICE_TGT, CFPS, BPS, NET_INC, and ASSETS**.  For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {String} opts.endDate End date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {module:model/String} opts.frequency Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.   (default to 'D')
     * @param {Number} opts.relativeFiscalStart Relative fiscal period, expressed as an integer, used to filter results. This is combined with the periodicity parameter to specify a relative estimate period. For example, set to 1 and periodicity to ANN to ask for relative Fiscal Year 1 (FY1).
     * @param {Number} opts.relativeFiscalEnd Relative fiscal period, expressed as an integer, used to filter results. This is combined with the periodicity parameter to specify a relative estimate period. For example, set to 2 and periodicity to ANN to ask for relative Fiscal Year 1 (FY2).
     * @param {module:model/String} opts.periodicity The periodicity for the estimates requested, allowing you to fetch Quarterly, Semi-Annual, Annual, and NTMA/LTMA Estimates.   * **ANN** - Annual   * **QTR** - Quarterly   * **SEMI** - Semi-Annual    * **NTMA** - Next-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.   * **LTMA** - Last-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.     (default to 'ANN')
     * @param {String} opts.currency Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConsensusResponse} and HTTP response
     */
    getRollingConsensusWithHttpInfo(ids, metrics, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getRollingConsensus");
      }
      // verify the required parameter 'metrics' is set
      if (metrics === undefined || metrics === null) {
        throw new Error("Missing the required parameter 'metrics' when calling getRollingConsensus");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'metrics': this.apiClient.buildCollectionParam(metrics, 'csv'),
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'frequency': opts['frequency'],
        'relativeFiscalStart': opts['relativeFiscalStart'],
        'relativeFiscalEnd': opts['relativeFiscalEnd'],
        'periodicity': opts['periodicity'],
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];


      let returnType = ConsensusResponse;

      return this.apiClient.callApi(
        '/factset-estimates/v2/rolling-consensus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves consensus estimates for a requested list of ids and rolling fiscal periods.
     * Returns FactSet Estimates consensus data using rolling fiscal dates. <p>The rolling behavior causes fiscal year to automatically roll from one year to the next as the historical perspective date changes. The fiscal period rolls forward as of each period end. This endpoint is optimized to allow the request to simply include a relative fiscal period (e.g. use relativeFiscalStart integer 1 and periodicity ANN for next unreported fiscal year end), and then see what the consensus thought the \"next fiscal year\" estimates were through time as you \"roll\" back your perspective dates. This differs from locking down an absolute estimate period such as explicitly stating Fiscal Year 2019. This can be done in the fixed-consensus endpoint.</p> 
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
     * @param {Array.<String>} metrics Requested metrics. Use the /metrics endpoint to return a list of available estimate items. Note, the number of metrics you are allowed to supply is limited to 1 for now. **Top 10** most used metrics are **EPS, SALES, DPS, EBITDA,EBIT, PRICE_TGT, CFPS, BPS, NET_INC, and ASSETS**.  For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {String} opts.endDate End date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {module:model/String} opts.frequency Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.   (default to 'D')
     * @param {Number} opts.relativeFiscalStart Relative fiscal period, expressed as an integer, used to filter results. This is combined with the periodicity parameter to specify a relative estimate period. For example, set to 1 and periodicity to ANN to ask for relative Fiscal Year 1 (FY1).
     * @param {Number} opts.relativeFiscalEnd Relative fiscal period, expressed as an integer, used to filter results. This is combined with the periodicity parameter to specify a relative estimate period. For example, set to 2 and periodicity to ANN to ask for relative Fiscal Year 1 (FY2).
     * @param {module:model/String} opts.periodicity The periodicity for the estimates requested, allowing you to fetch Quarterly, Semi-Annual, Annual, and NTMA/LTMA Estimates.   * **ANN** - Annual   * **QTR** - Quarterly   * **SEMI** - Semi-Annual    * **NTMA** - Next-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.   * **LTMA** - Last-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.     (default to 'ANN')
     * @param {String} opts.currency Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
     * @return { Promise.< module:model/ConsensusResponse > } a Promise, with data of type {@link module:model/ConsensusResponse }
     */
    getRollingConsensus(ids, metrics, opts) {
      return this.getRollingConsensusWithHttpInfo(ids, metrics, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieves consensus estimates for a requested list of ids and rolling fiscal periods
     * Returns FactSet Estimates consensus data using rolling fiscal dates. <p>The rolling behavior causes fiscal year to automatically roll from one year to the next as the historical perspective date changes. The fiscal period rolls forward as of each period end. This endpoint is optimized to allow the request to simply include a relative fiscal period (e.g. use relativeFiscalStart integer 1 and periodicity ANN for next unreported fiscal year end), and then see what the consensus thought the \"next fiscal year\" estimates were through time as you \"roll\" back your perspective dates. This differs from locking down an absolute estimate period such as explicitly stating Fiscal Year 2019. This can be done in the fixed-consensus endpoint.</p> 
     * @param {module:model/RollingConsensusRequest} rollingConsensusRequest Request object for Rolling Conensus estimates.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConsensusResponse} and HTTP response
     */
    getRollingConsensusForListWithHttpInfo(rollingConsensusRequest) {
      let postBody = rollingConsensusRequest;
      // verify the required parameter 'rollingConsensusRequest' is set
      if (rollingConsensusRequest === undefined || rollingConsensusRequest === null) {
        throw new Error("Missing the required parameter 'rollingConsensusRequest' when calling getRollingConsensusForList");
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


      let returnType = ConsensusResponse;

      return this.apiClient.callApi(
        '/factset-estimates/v2/rolling-consensus', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieves consensus estimates for a requested list of ids and rolling fiscal periods
     * Returns FactSet Estimates consensus data using rolling fiscal dates. <p>The rolling behavior causes fiscal year to automatically roll from one year to the next as the historical perspective date changes. The fiscal period rolls forward as of each period end. This endpoint is optimized to allow the request to simply include a relative fiscal period (e.g. use relativeFiscalStart integer 1 and periodicity ANN for next unreported fiscal year end), and then see what the consensus thought the \"next fiscal year\" estimates were through time as you \"roll\" back your perspective dates. This differs from locking down an absolute estimate period such as explicitly stating Fiscal Year 2019. This can be done in the fixed-consensus endpoint.</p> 
     * @param {module:model/RollingConsensusRequest} rollingConsensusRequest Request object for Rolling Conensus estimates.
     * @return { Promise.< module:model/ConsensusResponse > } a Promise, with data of type {@link module:model/ConsensusResponse }
     */
    getRollingConsensusForList(rollingConsensusRequest) {
      return this.getRollingConsensusForListWithHttpInfo(rollingConsensusRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}





