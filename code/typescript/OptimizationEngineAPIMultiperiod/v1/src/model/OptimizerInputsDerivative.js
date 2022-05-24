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
import OptimizerInputsDerivativeFuture from './OptimizerInputsDerivativeFuture';

/**
 * The OptimizerInputsDerivative model module.
 * @module model/OptimizerInputsDerivative
 * @version 0.20.0
 */
class OptimizerInputsDerivative {
    /**
     * Constructs a new <code>OptimizerInputsDerivative</code>.
     * @alias module:model/OptimizerInputsDerivative
     */
    constructor() { 
        
        OptimizerInputsDerivative.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsDerivative</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsDerivative} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsDerivative} The populated <code>OptimizerInputsDerivative</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsDerivative();

            if (data.hasOwnProperty('offset_index')) {
                obj['offset_index'] = ApiClient.convertToType(data['offset_index'], 'Number');
            }
            if (data.hasOwnProperty('future')) {
                obj['future'] = OptimizerInputsDerivativeFuture.constructFromObject(data['future']);
            }
            if (data.hasOwnProperty('forward')) {
                obj['forward'] = ApiClient.convertToType(data['forward'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Index of the offset. E.g. CASH_USD_FUT for Futures or 2nd leg for Forwards. -1 if no offset generated
 * @member {Number} offset_index
 */
OptimizerInputsDerivative.prototype['offset_index'] = undefined;

/**
 * @member {module:model/OptimizerInputsDerivativeFuture} future
 */
OptimizerInputsDerivative.prototype['future'] = undefined;

/**
 * Nothing else is needed for forwards.
 * @member {Boolean} forward
 */
OptimizerInputsDerivative.prototype['forward'] = undefined;






export default OptimizerInputsDerivative;
