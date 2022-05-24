/**
 * fpo_mp_input
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OptimizerInputsExpectedReturn from './OptimizerInputsExpectedReturn';
import OptimizerInputsMultiPeriodConstraints from './OptimizerInputsMultiPeriodConstraints';
import OptimizerInputsMultiPeriodObjective from './OptimizerInputsMultiPeriodObjective';
import OptimizerInputsMultiPeriodOptions from './OptimizerInputsMultiPeriodOptions';
import OptimizerInputsTransactionCost from './OptimizerInputsTransactionCost';

/**
 * The OptimizerInputsMultiPeriodStrategy model module.
 * @module model/OptimizerInputsMultiPeriodStrategy
 * @version 0.20.0
 */
class OptimizerInputsMultiPeriodStrategy {
    /**
     * Constructs a new <code>OptimizerInputsMultiPeriodStrategy</code>.
     * @alias module:model/OptimizerInputsMultiPeriodStrategy
     */
    constructor() { 
        
        OptimizerInputsMultiPeriodStrategy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsMultiPeriodStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsMultiPeriodStrategy} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsMultiPeriodStrategy} The populated <code>OptimizerInputsMultiPeriodStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsMultiPeriodStrategy();

            if (data.hasOwnProperty('objective')) {
                obj['objective'] = OptimizerInputsMultiPeriodObjective.constructFromObject(data['objective']);
            }
            if (data.hasOwnProperty('constraints')) {
                obj['constraints'] = OptimizerInputsMultiPeriodConstraints.constructFromObject(data['constraints']);
            }
            if (data.hasOwnProperty('transaction_cost')) {
                obj['transaction_cost'] = OptimizerInputsTransactionCost.constructFromObject(data['transaction_cost']);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = OptimizerInputsMultiPeriodOptions.constructFromObject(data['options']);
            }
            if (data.hasOwnProperty('expected_return')) {
                obj['expected_return'] = OptimizerInputsExpectedReturn.constructFromObject(data['expected_return']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OptimizerInputsMultiPeriodObjective} objective
 */
OptimizerInputsMultiPeriodStrategy.prototype['objective'] = undefined;

/**
 * @member {module:model/OptimizerInputsMultiPeriodConstraints} constraints
 */
OptimizerInputsMultiPeriodStrategy.prototype['constraints'] = undefined;

/**
 * @member {module:model/OptimizerInputsTransactionCost} transaction_cost
 */
OptimizerInputsMultiPeriodStrategy.prototype['transaction_cost'] = undefined;

/**
 * @member {module:model/OptimizerInputsMultiPeriodOptions} options
 */
OptimizerInputsMultiPeriodStrategy.prototype['options'] = undefined;

/**
 * @member {module:model/OptimizerInputsExpectedReturn} expected_return
 */
OptimizerInputsMultiPeriodStrategy.prototype['expected_return'] = undefined;






export default OptimizerInputsMultiPeriodStrategy;
