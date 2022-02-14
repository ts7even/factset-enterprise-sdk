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
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYieldMean from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYieldMean';

/**
 * The InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield model module.
 * @module model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield
 * @version 0.9.1
 */
class InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield {
    /**
     * Constructs a new <code>InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield</code>.
     * Ratio of the dividend per share, divided by the price.
     * @alias module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield
     */
    constructor() { 
        
        InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield} The populated <code>InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield();

            if (data.hasOwnProperty('mean')) {
                obj['mean'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYieldMean.constructFromObject(data['mean']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYieldMean} mean
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield.prototype['mean'] = undefined;






export default InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield;

