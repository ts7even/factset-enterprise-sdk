/**
 * FactSet Estimates
 * Gain access to 20+ years of comprehensive estimates and statistics of over 250+ estimated metrics, including financial statement items, product segments, geosegments, and industry metrics. FactSet's consensus estimates are aggregated from a wide base of over 800+ contributors and cover over 19,000 active companies across 90+ countries. Data returned can be accessed on the data frequencies based on quarterly, fiscal years, and calendar years. FactSet Estimates updates on a real time basis intraday (every 5 minutes). Updating times vary based on earning season vs. non-earning season but the goal is to have the data available to the client within a few hours that FactSet receives updated information. Often times updates times can be much faster as FactSet has always been known as one of the fastest estimate providers in the market. 
 *
 * The version of the OpenAPI document: 2.3.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DetailResponse from '../model/DetailResponse';
import ErrorResponse from '../model/ErrorResponse';
import FixedDetailRequest from '../model/FixedDetailRequest';
import RollingDetailRequest from '../model/RollingDetailRequest';

/**
* BrokerDetail service.
* @module api/BrokerDetailApi
* @version 0.9.1
*/
export default class BrokerDetailApi {

    /**
    * Constructs a new BrokerDetailApi. 
    * @alias module:api/BrokerDetailApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Estimates detail data for fixed fiscal periods
     * Updated intraday, the FactSet detail estimates apis provide individual broker-level estimates collected from over 800 sell-side analysts. This database contains 20+ years of broker history across more than 59,000 global companies. Content is provided for \"fixed\" fiscal periods. 
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
     * @param {Array.<String>} metrics Requested metrics. Use the /metrics endpoint to return a list of available estimate items. Note, the number of metrics you are allowed to supply is limited to 1 for now. **Top 10** most used metrics are **EPS, SALES, DPS, EBITDA,EBIT, PRICE_TGT, CFPS, BPS, NET_INC, and ASSETS**.  For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {String} opts.endDate End date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {module:model/String} opts.frequency Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.   (default to 'D')
     * @param {module:model/String} opts.periodicity The periodicity for the estimates requested, allowing you to fetch Quarterly, Semi-Annual, Annual, and NTMA/LTMA Estimates.   * **ANN** - Annual   * **QTR** - Quarterly   * **SEMI** - Semi-Annual    * **NTMA** - Next-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.   * **LTMA** - Last-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.  (default to 'ANN')
     * @param {Boolean} opts.includeAll Include All filter is used to identify included and excluded broker details from the consensus   By default the service would return only the brokers included in the consensus-   * **TRUE** = Returns all the brokers included and excluded in the consensus   * **FALSE** = Returns only the broker details included in the consensus     (default to false)
     * @param {String} opts.fiscalPeriodStart Fiscal period start expressed in absolute date formats. Date that will fall back to most recent completed period during resolution.   * **Fiscal Quarter-end** - YYYY/FQ (e.g., 2019/1F, 2019/2F, 2019/3F, 2019/4F)   * **Fiscal Year-end** - YYYY (e.g. 2019) 
     * @param {String} opts.fiscalPeriodEnd Fiscal period start expressed in absolute date formats. Date that will fall back to most recent completed period during resolution.   * **Fiscal Quarter-end** - YYYY/FQ (e.g., 2019/1F, 2019/2F, 2019/3F, 2019/4F)   * **Fiscal Year-end** - YYYY (e.g. 2019) 
     * @param {String} opts.currency Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DetailResponse} and HTTP response
     */
    getFixedDetailWithHttpInfo(ids, metrics, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getFixedDetail");
      }
      // verify the required parameter 'metrics' is set
      if (metrics === undefined || metrics === null) {
        throw new Error("Missing the required parameter 'metrics' when calling getFixedDetail");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'metrics': this.apiClient.buildCollectionParam(metrics, 'csv'),
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'frequency': opts['frequency'],
        'periodicity': opts['periodicity'],
        'includeAll': opts['includeAll'],
        'fiscalPeriodStart': opts['fiscalPeriodStart'],
        'fiscalPeriodEnd': opts['fiscalPeriodEnd'],
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DetailResponse;
      return this.apiClient.callApi(
        '/factset-estimates/v2/fixed-detail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Estimates detail data for fixed fiscal periods
     * Updated intraday, the FactSet detail estimates apis provide individual broker-level estimates collected from over 800 sell-side analysts. This database contains 20+ years of broker history across more than 59,000 global companies. Content is provided for \"fixed\" fiscal periods. 
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
     * @param {Array.<String>} metrics Requested metrics. Use the /metrics endpoint to return a list of available estimate items. Note, the number of metrics you are allowed to supply is limited to 1 for now. **Top 10** most used metrics are **EPS, SALES, DPS, EBITDA,EBIT, PRICE_TGT, CFPS, BPS, NET_INC, and ASSETS**.  For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {String} opts.endDate End date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {module:model/String} opts.frequency Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.   (default to 'D')
     * @param {module:model/String} opts.periodicity The periodicity for the estimates requested, allowing you to fetch Quarterly, Semi-Annual, Annual, and NTMA/LTMA Estimates.   * **ANN** - Annual   * **QTR** - Quarterly   * **SEMI** - Semi-Annual    * **NTMA** - Next-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.   * **LTMA** - Last-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.  (default to 'ANN')
     * @param {Boolean} opts.includeAll Include All filter is used to identify included and excluded broker details from the consensus   By default the service would return only the brokers included in the consensus-   * **TRUE** = Returns all the brokers included and excluded in the consensus   * **FALSE** = Returns only the broker details included in the consensus     (default to false)
     * @param {String} opts.fiscalPeriodStart Fiscal period start expressed in absolute date formats. Date that will fall back to most recent completed period during resolution.   * **Fiscal Quarter-end** - YYYY/FQ (e.g., 2019/1F, 2019/2F, 2019/3F, 2019/4F)   * **Fiscal Year-end** - YYYY (e.g. 2019) 
     * @param {String} opts.fiscalPeriodEnd Fiscal period start expressed in absolute date formats. Date that will fall back to most recent completed period during resolution.   * **Fiscal Quarter-end** - YYYY/FQ (e.g., 2019/1F, 2019/2F, 2019/3F, 2019/4F)   * **Fiscal Year-end** - YYYY (e.g. 2019) 
     * @param {String} opts.currency Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DetailResponse}
     */
    getFixedDetail(ids, metrics, opts) {
      return this.getFixedDetailWithHttpInfo(ids, metrics, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Estimates detail data for fixed fiscal periods
     * Updated intraday, the FactSet detail estimates apis provide individual broker-level estimates collected from over 800 sell-side analysts. This database contains 20+ years of broker history across more than 59,000 global companies. Content is provided for \"fixed\" fiscal periods. 
     * @param {module:model/FixedDetailRequest} fixedDetailRequest Request object for Estimate Data Items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DetailResponse} and HTTP response
     */
    getFixedDetailForListWithHttpInfo(fixedDetailRequest) {
      let postBody = fixedDetailRequest;
      // verify the required parameter 'fixedDetailRequest' is set
      if (fixedDetailRequest === undefined || fixedDetailRequest === null) {
        throw new Error("Missing the required parameter 'fixedDetailRequest' when calling getFixedDetailForList");
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
      let returnType = DetailResponse;
      return this.apiClient.callApi(
        '/factset-estimates/v2/fixed-detail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Estimates detail data for fixed fiscal periods
     * Updated intraday, the FactSet detail estimates apis provide individual broker-level estimates collected from over 800 sell-side analysts. This database contains 20+ years of broker history across more than 59,000 global companies. Content is provided for \"fixed\" fiscal periods. 
     * @param {module:model/FixedDetailRequest} fixedDetailRequest Request object for Estimate Data Items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DetailResponse}
     */
    getFixedDetailForList(fixedDetailRequest) {
      return this.getFixedDetailForListWithHttpInfo(fixedDetailRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * FactSet estimates detail data for rolling fiscal periods
     * Updated intraday, the FactSet detail estimates apis provide individual broker-level estimates collected from over 800 sell-side analysts. This database contains 20+ years of broker history across more than 59,000 global companies. Content is provided for \"rolling\" fiscal periods.      
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
     * @param {Array.<String>} metrics Requested metrics. Use the /metrics endpoint to return a list of available estimate items. Note, the number of metrics you are allowed to supply is limited to 1 for now. **Top 10** most used metrics are **EPS, SALES, DPS, EBITDA,EBIT, PRICE_TGT, CFPS, BPS, NET_INC, and ASSETS**.  For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {String} opts.endDate End date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {module:model/String} opts.frequency Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.   (default to 'D')
     * @param {module:model/String} opts.periodicity The periodicity for the estimates requested, allowing you to fetch Quarterly, Semi-Annual, Annual, and NTMA/LTMA Estimates.   * **ANN** - Annual   * **QTR** - Quarterly   * **SEMI** - Semi-Annual    * **NTMA** - Next-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.   * **LTMA** - Last-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.  (default to 'ANN')
     * @param {Boolean} opts.includeAll Include All filter is used to identify included and excluded broker details from the consensus   By default the service would return only the brokers included in the consensus-   * **TRUE** = Returns all the brokers included and excluded in the consensus   * **FALSE** = Returns only the broker details included in the consensus     (default to false)
     * @param {Number} opts.relativeFiscalStart Relative fiscal period, expressed as an integer, used to filter results. This is combined with the periodicity parameter to specify a relative estimate period. For example, set to 1 and periodicity to ANN to ask for relative Fiscal Year 1 (FY1).
     * @param {Number} opts.relativeFiscalEnd Relative fiscal period, expressed as an integer, used to filter results. This is combined with the periodicity parameter to specify a relative estimate period. For example, set to 2 and periodicity to ANN to ask for relative Fiscal Year 1 (FY2).
     * @param {String} opts.currency Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DetailResponse} and HTTP response
     */
    getRollingDetailWithHttpInfo(ids, metrics, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling getRollingDetail");
      }
      // verify the required parameter 'metrics' is set
      if (metrics === undefined || metrics === null) {
        throw new Error("Missing the required parameter 'metrics' when calling getRollingDetail");
      }

      let pathParams = {
      };
      let queryParams = {
        'ids': this.apiClient.buildCollectionParam(ids, 'csv'),
        'metrics': this.apiClient.buildCollectionParam(metrics, 'csv'),
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'frequency': opts['frequency'],
        'periodicity': opts['periodicity'],
        'includeAll': opts['includeAll'],
        'relativeFiscalStart': opts['relativeFiscalStart'],
        'relativeFiscalEnd': opts['relativeFiscalEnd'],
        'currency': opts['currency']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['FactSetApiKey', 'FactSetOAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DetailResponse;
      return this.apiClient.callApi(
        '/factset-estimates/v2/rolling-detail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * FactSet estimates detail data for rolling fiscal periods
     * Updated intraday, the FactSet detail estimates apis provide individual broker-level estimates collected from over 800 sell-side analysts. This database contains 20+ years of broker history across more than 59,000 global companies. Content is provided for \"rolling\" fiscal periods.      
     * @param {Array.<String>} ids Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. <p>***ids limit** =  3000 per request*</p> * Make Note - id limit of 3000 for defaults, otherwise the service is limited to a 30 second duration. This can be reached when increasing total number of metrics requested and depth of history. * 
     * @param {Array.<String>} metrics Requested metrics. Use the /metrics endpoint to return a list of available estimate items. Note, the number of metrics you are allowed to supply is limited to 1 for now. **Top 10** most used metrics are **EPS, SALES, DPS, EBITDA,EBIT, PRICE_TGT, CFPS, BPS, NET_INC, and ASSETS**.  For more details, visit [Online Assistant Page #15034](https://oa.apps.factset.com/pages/15034). 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate Start date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {String} opts.endDate End date for point in time of estimates expressed in YYYY-MM-DD format.
     * @param {module:model/String} opts.frequency Controls the frequency of the data returned.   * **D** = Daily   * **W** = Weekly, based on the last day of the week of the start date.   * **AM** = Monthly, based on the start date (e.g., if the start date is June 16, data is displayed for June 16, May 16, April 16 etc.).         * **AQ** = Quarterly, based on the start date.   * **AY** = Actual Annual, based on the start date.   (default to 'D')
     * @param {module:model/String} opts.periodicity The periodicity for the estimates requested, allowing you to fetch Quarterly, Semi-Annual, Annual, and NTMA/LTMA Estimates.   * **ANN** - Annual   * **QTR** - Quarterly   * **SEMI** - Semi-Annual    * **NTMA** - Next-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.   * **LTMA** - Last-Twelve-Months - Time-weighted Annual. Estimates use a percentage of annual estimates from two fiscal years to create an estimate based on the 12-month period. Visit [OA 16614](https://my.apps.factset.com/oa/pages/16614) for detail.  (default to 'ANN')
     * @param {Boolean} opts.includeAll Include All filter is used to identify included and excluded broker details from the consensus   By default the service would return only the brokers included in the consensus-   * **TRUE** = Returns all the brokers included and excluded in the consensus   * **FALSE** = Returns only the broker details included in the consensus     (default to false)
     * @param {Number} opts.relativeFiscalStart Relative fiscal period, expressed as an integer, used to filter results. This is combined with the periodicity parameter to specify a relative estimate period. For example, set to 1 and periodicity to ANN to ask for relative Fiscal Year 1 (FY1).
     * @param {Number} opts.relativeFiscalEnd Relative fiscal period, expressed as an integer, used to filter results. This is combined with the periodicity parameter to specify a relative estimate period. For example, set to 2 and periodicity to ANN to ask for relative Fiscal Year 1 (FY2).
     * @param {String} opts.currency Currency code for adjusting the data. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DetailResponse}
     */
    getRollingDetail(ids, metrics, opts) {
      return this.getRollingDetailWithHttpInfo(ids, metrics, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * FactSet estimates detail data for rolling fiscal periods
     * Updated intraday, the FactSet detail estimates apis provide individual broker-level estimates collected from over 800 sell-side analysts. This database contains 20+ years of broker history across more than 59,000 global companies. Content is provided for \"rolling\" fiscal periods. 
     * @param {module:model/RollingDetailRequest} rollingDetailRequest Request object for Estimate Data Items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DetailResponse} and HTTP response
     */
    getRollingDetailForListWithHttpInfo(rollingDetailRequest) {
      let postBody = rollingDetailRequest;
      // verify the required parameter 'rollingDetailRequest' is set
      if (rollingDetailRequest === undefined || rollingDetailRequest === null) {
        throw new Error("Missing the required parameter 'rollingDetailRequest' when calling getRollingDetailForList");
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
      let returnType = DetailResponse;
      return this.apiClient.callApi(
        '/factset-estimates/v2/rolling-detail', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * FactSet estimates detail data for rolling fiscal periods
     * Updated intraday, the FactSet detail estimates apis provide individual broker-level estimates collected from over 800 sell-side analysts. This database contains 20+ years of broker history across more than 59,000 global companies. Content is provided for \"rolling\" fiscal periods. 
     * @param {module:model/RollingDetailRequest} rollingDetailRequest Request object for Estimate Data Items.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DetailResponse}
     */
    getRollingDetailForList(rollingDetailRequest) {
      return this.getRollingDetailForListWithHttpInfo(rollingDetailRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
