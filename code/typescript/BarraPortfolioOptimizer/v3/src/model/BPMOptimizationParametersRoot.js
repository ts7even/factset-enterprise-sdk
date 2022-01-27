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
import BPMOptimizationParameters from './BPMOptimizationParameters';

/**
 * The BPMOptimizationParametersRoot model module.
 * @module model/BPMOptimizationParametersRoot
 * @version 0.9.0
 */
class BPMOptimizationParametersRoot {
    /**
     * Constructs a new <code>BPMOptimizationParametersRoot</code>.
     * @alias module:model/BPMOptimizationParametersRoot
     */
    constructor() { 
        
        BPMOptimizationParametersRoot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BPMOptimizationParametersRoot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BPMOptimizationParametersRoot} obj Optional instance to populate.
     * @return {module:model/BPMOptimizationParametersRoot} The populated <code>BPMOptimizationParametersRoot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BPMOptimizationParametersRoot();

            if (data.hasOwnProperty('data')) {
                obj['data'] = BPMOptimizationParameters.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BPMOptimizationParameters} data
 */
BPMOptimizationParametersRoot.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
BPMOptimizationParametersRoot.prototype['meta'] = undefined;






export default BPMOptimizationParametersRoot;
