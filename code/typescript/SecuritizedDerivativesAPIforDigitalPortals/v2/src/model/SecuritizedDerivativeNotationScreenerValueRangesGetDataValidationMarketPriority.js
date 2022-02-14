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

/**
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority
 * @version 0.9.1
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority</code>.
     * Sequence of markets specifying the priority order of the markets for the selection of one notation per instrument. If for a given instrument with two matching notations, A and B, the market of notation A precedes the market of notation B in this list, A will be selected. The list does not restrict the request to only those markets (use the parameter &#x60;market.selection&#x60; for that purpose).
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority();

            if (data.hasOwnProperty('ids')) {
                obj['ids'] = ApiClient.convertToType(data['ids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * List of market identifiers.
 * @member {Array.<Number>} ids
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority.prototype['ids'] = undefined;






export default SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarketPriority;

