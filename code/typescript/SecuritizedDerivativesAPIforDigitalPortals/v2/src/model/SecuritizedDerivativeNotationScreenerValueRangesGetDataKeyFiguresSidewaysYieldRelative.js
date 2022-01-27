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
import SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtectionMaximum from './SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtectionMaximum';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtectionMinimum from './SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtectionMinimum';

/**
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative
 * @version 0.9.0
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative</code>.
     * Value range of the sideways yield relative to the ask price.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative();

            if (data.hasOwnProperty('minimum')) {
                obj['minimum'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtectionMinimum.constructFromObject(data['minimum']);
            }
            if (data.hasOwnProperty('maximum')) {
                obj['maximum'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtectionMaximum.constructFromObject(data['maximum']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtectionMinimum} minimum
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative.prototype['minimum'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataCapitalProtectionMaximum} maximum
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative.prototype['maximum'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative;
