/**
 * FactSet Benchmarks API
 * FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon. 
 *
 * The version of the OpenAPI document: 1.8.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BenchmarkIdList from './BenchmarkIdList';

/**
 * The BenchmarkIdListResponse model module.
 * @module model/BenchmarkIdListResponse
 */
class BenchmarkIdListResponse {
    /**
     * Constructs a new <code>BenchmarkIdListResponse</code>.
     * @alias module:model/BenchmarkIdListResponse
     */
    constructor() { 
        
        BenchmarkIdListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BenchmarkIdListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenchmarkIdListResponse} obj Optional instance to populate.
     * @return {module:model/BenchmarkIdListResponse} The populated <code>BenchmarkIdListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BenchmarkIdListResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BenchmarkIdList]);
            }
        }
        return obj;
    }


}

/**
 * Array of Benchmark Ids and their respective categorizations. 
 * @member {Array.<module:model/BenchmarkIdList>} data
 */
BenchmarkIdListResponse.prototype['data'] = undefined;






export default BenchmarkIdListResponse;

