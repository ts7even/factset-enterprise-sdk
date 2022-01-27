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
import FamilyFilter from './FamilyFilter';

/**
 * The BenchmarkIdListRequest model module.
 * @module model/BenchmarkIdListRequest
 * @version 0.9.0
 */
class BenchmarkIdListRequest {
    /**
     * Constructs a new <code>BenchmarkIdListRequest</code>.
     * @alias module:model/BenchmarkIdListRequest
     */
    constructor() { 
        
        BenchmarkIdListRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BenchmarkIdListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenchmarkIdListRequest} obj Optional instance to populate.
     * @return {module:model/BenchmarkIdListRequest} The populated <code>BenchmarkIdListRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BenchmarkIdListRequest();

            if (data.hasOwnProperty('familyFilter')) {
                obj['familyFilter'] = FamilyFilter.constructFromObject(data['familyFilter']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FamilyFilter} familyFilter
 */
BenchmarkIdListRequest.prototype['familyFilter'] = undefined;






export default BenchmarkIdListRequest;
