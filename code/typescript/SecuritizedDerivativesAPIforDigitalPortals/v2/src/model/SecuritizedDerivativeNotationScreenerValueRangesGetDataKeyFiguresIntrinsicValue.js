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
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue
 * @version 0.9.1
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue</code>.
     * Value range of the intrinsic value. It represents the difference between the underlying level and the strike of the securitized derivative, adjusted for the cover ratio and the currency cross rate. If the difference is negative, the intrinsic value is given as 0. The intrinsic value represents the theoretical profit from an immediate exercise of the derivative. This key figure is calculated for plain vanilla warrants only.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue();

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
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue.prototype['minimum'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum} maximum
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue.prototype['maximum'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresIntrinsicValue;

