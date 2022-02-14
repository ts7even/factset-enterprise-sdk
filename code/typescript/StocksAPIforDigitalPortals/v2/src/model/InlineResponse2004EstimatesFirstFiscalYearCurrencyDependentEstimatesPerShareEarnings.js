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
 * The InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings model module.
 * @module model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings
 * @version 0.9.1
 */
class InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings {
    /**
     * Constructs a new <code>InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings</code>.
     * Earnings per share (EPS), which is ratio of the net income, divided by the shares outstanding. For European equities, EPS is adjusted for exceptional and any non-recurring items. For Asian equities, EPS is as reported (as per local accounting standards). For US, Canada &amp; South Africa, EPS reflects the analysts’ and company’s standards.
     * @alias module:model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings
     */
    constructor() { 
        
        InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings} The populated <code>InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings();

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
InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings.prototype['mean'] = undefined;






export default InlineResponse2004EstimatesFirstFiscalYearCurrencyDependentEstimatesPerShareEarnings;

