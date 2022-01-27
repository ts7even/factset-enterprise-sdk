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
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAnnualized from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAnnualized';
import SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioRelative from './SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioRelative';

/**
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio
 * @version 0.9.0
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio</code>.
     * Agio. For plain vanilla warrants, it represents the difference between the ask price of the derivative and its parity (see attribute &#x60;parity&#x60;). Thus, for those with exercise right &#x60;call&#x60;, the agio indicates how much more expensive would it be to obtain the underlying through purchasing and exercising the warrant compared to directly purchasing the underlying. For those with exercise right &#x60;put&#x60;, the above consideration is applied inversely. For other types of securitized derivatives, the calculation and interpretation of the agio depends on their category. Negative values are possible.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio();

            if (data.hasOwnProperty('absolute')) {
                obj['absolute'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute.constructFromObject(data['absolute']);
            }
            if (data.hasOwnProperty('relative')) {
                obj['relative'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioRelative.constructFromObject(data['relative']);
            }
            if (data.hasOwnProperty('annualized')) {
                obj['annualized'] = SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAnnualized.constructFromObject(data['annualized']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAbsolute} absolute
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio.prototype['absolute'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioRelative} relative
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio.prototype['relative'] = undefined;

/**
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgioAnnualized} annualized
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio.prototype['annualized'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresAgio;
