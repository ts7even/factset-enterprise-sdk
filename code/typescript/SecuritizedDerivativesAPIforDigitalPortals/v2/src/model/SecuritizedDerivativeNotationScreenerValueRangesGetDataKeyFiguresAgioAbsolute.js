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
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute
 * @version 0.9.0
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute</code>.
     * Value range of the agio in absolute terms.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute();

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
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute.prototype['minimum'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum} maximum
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute.prototype['maximum'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute;
