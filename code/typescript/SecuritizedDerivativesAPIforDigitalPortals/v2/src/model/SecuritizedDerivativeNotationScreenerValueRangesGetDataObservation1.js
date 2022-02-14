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
 * The SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1 model module.
 * @module model/SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1
 * @version 0.9.1
 */
class SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1 {
    /**
     * Constructs a new <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1</code>.
     * Barrier observation modality.
     * @alias module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1
     */
    constructor() { 
        
        SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1} obj Optional instance to populate.
     * @return {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1} The populated <code>SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Type of the barrier observation.
 * @member {module:model/SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1.TypeEnum} type
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1['TypeEnum'] = {

    /**
     * value: "continuous"
     * @const
     */
    "continuous": "continuous",

    /**
     * value: "eod"
     * @const
     */
    "eod": "eod"
};



export default SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation1;

