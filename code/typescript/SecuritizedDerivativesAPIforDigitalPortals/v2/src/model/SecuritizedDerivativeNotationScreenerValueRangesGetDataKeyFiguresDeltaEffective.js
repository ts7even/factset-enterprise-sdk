/**
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum from './SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMinimum from './SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMinimum';

/**
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective
 * @version 0.9.1
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective</code>.
     * Value range of the delta calculated using the actual cover ratio of the securitized derivative.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMinimum.constructFromObject(data['minimum']);
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum.constructFromObject(data['maximum']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMinimum} minimum
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective.prototype['minimum'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum} maximum
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective.prototype['maximum'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDeltaEffective;

