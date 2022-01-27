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
import InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbitMean from './InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbitMean';

/**
 * The InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit model module.
 * @module model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit
 * @version 0.9.0
 */
class InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit {
    /**
     * Constructs a new <code>InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit</code>.
     * EBIT (earnings before interest and taxes).
     * @alias module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit
     */
    constructor() { 
        
        InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit} The populated <code>InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit();

            if (data.hasOwnProperty('mean')) {
                obj['mean'] = InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbitMean.constructFromObject(data['mean']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbitMean} mean
 */
InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit.prototype['mean'] = undefined;






export default InlineResponse2005DataEstimatesFirstFiscalYearCurrencyDependentEstimatesEbit;
