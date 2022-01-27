/**
 * Engines API
 * Allow clients to fetch Engines Analytics through APIs.
 *
 * The version of the OpenAPI document: 1
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OptimizerStrategyOverrides from './OptimizerStrategyOverrides';

/**
 * The OptimizerStrategy model module.
 * @module model/OptimizerStrategy
 * @version 0.8.0
 */
class OptimizerStrategy {
    /**
     * Constructs a new <code>OptimizerStrategy</code>.
     * @alias module:model/OptimizerStrategy
     * @param id {String} OptimizerStrategy document path
     */
    constructor(id) { 
        
        OptimizerStrategy.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>OptimizerStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerStrategy} obj Optional instance to populate.
     * @return {module:model/OptimizerStrategy} The populated <code>OptimizerStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerStrategy();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('overrides')) {
                obj['overrides'] = OptimizerStrategyOverrides.constructFromObject(data['overrides']);
            }
        }
        return obj;
    }


}

/**
 * OptimizerStrategy document path
 * @member {String} id
 */
OptimizerStrategy.prototype['id'] = undefined;

/**
 * @member {module:model/OptimizerStrategyOverrides} overrides
 */
OptimizerStrategy.prototype['overrides'] = undefined;






export default OptimizerStrategy;
