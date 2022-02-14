/**
 * FactSet Benchmarks API
 * FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon. 
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FixedIncomeBenchmarkConstituent model module.
 * @module model/FixedIncomeBenchmarkConstituent
 * @version 0.9.1
 */
class FixedIncomeBenchmarkConstituent {
    /**
     * Constructs a new <code>FixedIncomeBenchmarkConstituent</code>.
     * @alias module:model/FixedIncomeBenchmarkConstituent
     */
    constructor() { 
        
        FixedIncomeBenchmarkConstituent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FixedIncomeBenchmarkConstituent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FixedIncomeBenchmarkConstituent} obj Optional instance to populate.
     * @return {module:model/FixedIncomeBenchmarkConstituent} The populated <code>FixedIncomeBenchmarkConstituent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FixedIncomeBenchmarkConstituent();

            if (data.hasOwnProperty('fsymId')) {
                obj['fsymId'] = ApiClient.convertToType(data['fsymId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('fsymSecurityId')) {
                obj['fsymSecurityId'] = ApiClient.convertToType(data['fsymSecurityId'], 'String');
            }
            if (data.hasOwnProperty('weightClose')) {
                obj['weightClose'] = ApiClient.convertToType(data['weightClose'], 'Number');
            }
            if (data.hasOwnProperty('amountOutstanding')) {
                obj['amountOutstanding'] = ApiClient.convertToType(data['amountOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('adjMarketValue')) {
                obj['adjMarketValue'] = ApiClient.convertToType(data['adjMarketValue'], 'Number');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Benchmark Id
 * @member {String} fsymId
 */
FixedIncomeBenchmarkConstituent.prototype['fsymId'] = undefined;

/**
 * Date of weight and shares.
 * @member {Date} date
 */
FixedIncomeBenchmarkConstituent.prototype['date'] = undefined;

/**
 * FactSet Security Identifier (-S).
 * @member {String} fsymSecurityId
 */
FixedIncomeBenchmarkConstituent.prototype['fsymSecurityId'] = undefined;

/**
 * Weight of Security in benchmark (percent).
 * @member {Number} weightClose
 */
FixedIncomeBenchmarkConstituent.prototype['weightClose'] = undefined;

/**
 * Amount Outstanding for the Fixed Income Security.
 * @member {Number} amountOutstanding
 */
FixedIncomeBenchmarkConstituent.prototype['amountOutstanding'] = undefined;

/**
 * Fixed Income Price of security held.
 * @member {Number} price
 */
FixedIncomeBenchmarkConstituent.prototype['price'] = undefined;

/**
 * Market value adjusted. Market Value represented in Millions.
 * @member {Number} adjMarketValue
 */
FixedIncomeBenchmarkConstituent.prototype['adjMarketValue'] = undefined;

/**
 * Identifier specified in the request
 * @member {String} requestId
 */
FixedIncomeBenchmarkConstituent.prototype['requestId'] = undefined;






export default FixedIncomeBenchmarkConstituent;

