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
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldAbsolute from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldAbsolute';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldAnnualized from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldAnnualized';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative';

/**
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield
 * @version 0.9.1
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield</code>.
     * Sideways yield. It represents a hypothetical payout at maturity minus the ask price of the securitized derivative, under the assumption that all payout-influencing factors remain unchanged until maturity.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldAbsolute.constructFromObject(data['absolute']);
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative.constructFromObject(data['relative']);
            }
            if (data.hasOwnProperty('annualized')) {
                obj['annualized'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldAnnualized.constructFromObject(data['annualized']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldAbsolute} absolute
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield.prototype['absolute'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldRelative} relative
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield.prototype['relative'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYieldAnnualized} annualized
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield.prototype['annualized'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresSidewaysYield;

