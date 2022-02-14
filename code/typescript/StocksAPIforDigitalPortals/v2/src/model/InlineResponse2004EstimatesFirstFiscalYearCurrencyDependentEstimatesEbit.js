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
 * The InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit model module.
 * @module model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit
 * @version 0.9.1
 */
class InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit {
    /**
     * Constructs a new <code>InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit</code>.
     * EBIT (earnings before interest and taxes).
     * @alias module:model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit
     */
    constructor() { 
        
        InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit} The populated <code>InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit();

            if (data.hasOwnProperty('mean')) {
                obj['mean'] = ApiClient.convertToType(data['mean'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Mean value.
 * @member {Number} mean
 */
InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit.prototype['mean'] = undefined;






export default InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesEbit;

