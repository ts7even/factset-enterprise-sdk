/**
 * FactSet Fundamentals API
 * Gain access to current, comprehensive, and comparative information on securities in worldwide developed and emerging markets. Composed of annual and interim/quarterly data, detailed historical financial statement content, per share data, and calculated ratios, FactSet Fundamentals provides you with the information you need for a global investment perspective. 
 *
 * The version of the OpenAPI document: 1.0.2
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Periodicity from './Periodicity';
import Restated from './Restated';

/**
 * The FundamentalsRequest model module.
 * @module model/FundamentalsRequest
 * @version 0.9.0
 */
class FundamentalsRequest {
    /**
     * Constructs a new <code>FundamentalsRequest</code>.
     * Fundamentals request body elements
     * @alias module:model/FundamentalsRequest
     * @param ids {Array.<String>} Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. 
     * @param metrics {Array.<String>} Requested List of Financial Statement Items or Ratios. Use /metrics endpoint for a complete list of available FF_* metric items. 
     */
    constructor(ids, metrics) { 
        
        FundamentalsRequest.initialize(this, ids, metrics);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ids, metrics) { 
        obj['ids'] = ids;
        obj['metrics'] = metrics;
    }

    /**
     * Constructs a <code>FundamentalsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FundamentalsRequest} obj Optional instance to populate.
     * @return {module:model/FundamentalsRequest} The populated <code>FundamentalsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundamentalsRequest();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['String']);
            }
            if (data.hasOwnProperty('periodicity')) {
                obj['periodicity'] = Periodicity.constructFromObject(data['periodicity']);
            }
            if (data.hasOwnProperty('fiscalPeriodStart')) {
                obj['fiscalPeriodStart'] = ApiClient.convertToType(data['fiscalPeriodStart'], 'String');
            }
            if (data.hasOwnProperty('fiscalPeriodEnd')) {
                obj['fiscalPeriodEnd'] = ApiClient.convertToType(data['fiscalPeriodEnd'], 'String');
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ApiClient.convertToType(data['metrics'], ['String']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('restated')) {
                obj['restated'] = Restated.constructFromObject(data['restated']);
            }
        }
        return obj;
    }


}

/**
 * Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. 
 * @member {Array.<String>} ids
 */
FundamentalsRequest.prototype['ids'] = undefined;

/**
 * @member {module:model/Periodicity} periodicity
 */
FundamentalsRequest.prototype['periodicity'] = undefined;

/**
 * Fiscal period start expressed as YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution. 
 * @member {String} fiscalPeriodStart
 */
FundamentalsRequest.prototype['fiscalPeriodStart'] = undefined;

/**
 * Fiscal period end expressed YYYY-MM-DD.  Calendar date that will fall back to most recent completed period during resolution. 
 * @member {String} fiscalPeriodEnd
 */
FundamentalsRequest.prototype['fiscalPeriodEnd'] = undefined;

/**
 * Requested List of Financial Statement Items or Ratios. Use /metrics endpoint for a complete list of available FF_* metric items. 
 * @member {Array.<String>} metrics
 */
FundamentalsRequest.prototype['metrics'] = undefined;

/**
 * Currency code for currency values. For a list of currency ISO codes, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470). 
 * @member {String} currency
 * @default 'LOCAL'
 */
FundamentalsRequest.prototype['currency'] = 'LOCAL';

/**
 * @member {module:model/Restated} restated
 */
FundamentalsRequest.prototype['restated'] = undefined;






export default FundamentalsRequest;
