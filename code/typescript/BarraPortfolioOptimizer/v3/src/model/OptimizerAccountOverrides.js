/**
 * Barra Portfolio Optimizer API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OptimizerAccountOverrides model module.
 * @module model/OptimizerAccountOverrides
 * @version 0.9.1
 */
class OptimizerAccountOverrides {
    /**
     * Constructs a new <code>OptimizerAccountOverrides</code>.
     * @alias module:model/OptimizerAccountOverrides
     */
    constructor() { 
        
        OptimizerAccountOverrides.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerAccountOverrides</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerAccountOverrides} obj Optional instance to populate.
     * @return {module:model/OptimizerAccountOverrides} The populated <code>OptimizerAccountOverrides</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerAccountOverrides();

            if (data.hasOwnProperty('portfolio')) {
                obj['portfolio'] = ApiClient.convertToType(data['portfolio'], 'String');
            }
            if (data.hasOwnProperty('benchmark')) {
                obj['benchmark'] = ApiClient.convertToType(data['benchmark'], 'String');
            }
            if (data.hasOwnProperty('riskModelId')) {
                obj['riskModelId'] = ApiClient.convertToType(data['riskModelId'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Portfolio
 * @member {String} portfolio
 */
OptimizerAccountOverrides.prototype['portfolio'] = undefined;

/**
 * Benchmark
 * @member {String} benchmark
 */
OptimizerAccountOverrides.prototype['benchmark'] = undefined;

/**
 * Risk model
 * @member {String} riskModelId
 */
OptimizerAccountOverrides.prototype['riskModelId'] = undefined;

/**
 * Currency
 * @member {String} currency
 */
OptimizerAccountOverrides.prototype['currency'] = undefined;






export default OptimizerAccountOverrides;

