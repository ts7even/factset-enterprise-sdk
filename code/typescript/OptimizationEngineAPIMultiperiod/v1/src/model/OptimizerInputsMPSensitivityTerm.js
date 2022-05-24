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
import OptimizerInputsAcrossPeriods from './OptimizerInputsAcrossPeriods';
import OptimizerInputsOnPeriods from './OptimizerInputsOnPeriods';
import OptimizerInputsSensitivityTerm from './OptimizerInputsSensitivityTerm';

/**
 * The OptimizerInputsMPSensitivityTerm model module.
 * @module model/OptimizerInputsMPSensitivityTerm
 * @version 0.20.0
 */
class OptimizerInputsMPSensitivityTerm {
    /**
     * Constructs a new <code>OptimizerInputsMPSensitivityTerm</code>.
     * @alias module:model/OptimizerInputsMPSensitivityTerm
     */
    constructor() { 
        
        OptimizerInputsMPSensitivityTerm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsMPSensitivityTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsMPSensitivityTerm} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsMPSensitivityTerm} The populated <code>OptimizerInputsMPSensitivityTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsMPSensitivityTerm();

            if (data.hasOwnProperty('term')) {
                obj['term'] = OptimizerInputsSensitivityTerm.constructFromObject(data['term']);
            }
            if (data.hasOwnProperty('on_periods')) {
                obj['on_periods'] = OptimizerInputsOnPeriods.constructFromObject(data['on_periods']);
            }
            if (data.hasOwnProperty('across_periods')) {
                obj['across_periods'] = OptimizerInputsAcrossPeriods.constructFromObject(data['across_periods']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OptimizerInputsSensitivityTerm} term
 */
OptimizerInputsMPSensitivityTerm.prototype['term'] = undefined;

/**
 * @member {module:model/OptimizerInputsOnPeriods} on_periods
 */
OptimizerInputsMPSensitivityTerm.prototype['on_periods'] = undefined;

/**
 * @member {module:model/OptimizerInputsAcrossPeriods} across_periods
 */
OptimizerInputsMPSensitivityTerm.prototype['across_periods'] = undefined;






export default OptimizerInputsMPSensitivityTerm;
