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
import OptimizerInputsDiversificationRatioTerm from './OptimizerInputsDiversificationRatioTerm';
import OptimizerInputsOnPeriods from './OptimizerInputsOnPeriods';
import OptimizerInputsSTARRTerm from './OptimizerInputsSTARRTerm';
import OptimizerInputsSharpeRatioTerm from './OptimizerInputsSharpeRatioTerm';

/**
 * The OptimizerInputsMPObjectiveRatioTerm model module.
 * @module model/OptimizerInputsMPObjectiveRatioTerm
 * @version 0.20.0
 */
class OptimizerInputsMPObjectiveRatioTerm {
    /**
     * Constructs a new <code>OptimizerInputsMPObjectiveRatioTerm</code>.
     * @alias module:model/OptimizerInputsMPObjectiveRatioTerm
     */
    constructor() { 
        
        OptimizerInputsMPObjectiveRatioTerm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptimizerInputsMPObjectiveRatioTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptimizerInputsMPObjectiveRatioTerm} obj Optional instance to populate.
     * @return {module:model/OptimizerInputsMPObjectiveRatioTerm} The populated <code>OptimizerInputsMPObjectiveRatioTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptimizerInputsMPObjectiveRatioTerm();

            if (data.hasOwnProperty('sharpe_ratio')) {
                obj['sharpe_ratio'] = OptimizerInputsSharpeRatioTerm.constructFromObject(data['sharpe_ratio']);
            }
            if (data.hasOwnProperty('starr')) {
                obj['starr'] = OptimizerInputsSTARRTerm.constructFromObject(data['starr']);
            }
            if (data.hasOwnProperty('diversification_ratio')) {
                obj['diversification_ratio'] = OptimizerInputsDiversificationRatioTerm.constructFromObject(data['diversification_ratio']);
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
 * @member {module:model/OptimizerInputsSharpeRatioTerm} sharpe_ratio
 */
OptimizerInputsMPObjectiveRatioTerm.prototype['sharpe_ratio'] = undefined;

/**
 * @member {module:model/OptimizerInputsSTARRTerm} starr
 */
OptimizerInputsMPObjectiveRatioTerm.prototype['starr'] = undefined;

/**
 * @member {module:model/OptimizerInputsDiversificationRatioTerm} diversification_ratio
 */
OptimizerInputsMPObjectiveRatioTerm.prototype['diversification_ratio'] = undefined;

/**
 * @member {module:model/OptimizerInputsOnPeriods} on_periods
 */
OptimizerInputsMPObjectiveRatioTerm.prototype['on_periods'] = undefined;

/**
 * @member {module:model/OptimizerInputsAcrossPeriods} across_periods
 */
OptimizerInputsMPObjectiveRatioTerm.prototype['across_periods'] = undefined;






export default OptimizerInputsMPObjectiveRatioTerm;
