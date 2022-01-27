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
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceBookValue from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceBookValue';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceEarnings from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceEarnings';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow';
import InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceSales from './InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceSales';

/**
 * The InlineResponse2005DataEstimatesFirstFiscalYearRatios model module.
 * @module model/InlineResponse2005DataEstimatesFirstFiscalYearRatios
 * @version 0.9.0
 */
class InlineResponse2005DataEstimatesFirstFiscalYearRatios {
    /**
     * Constructs a new <code>InlineResponse2005DataEstimatesFirstFiscalYearRatios</code>.
     * Ratios.
     * @alias module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatios
     */
    constructor() { 
        
        InlineResponse2005DataEstimatesFirstFiscalYearRatios.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2005DataEstimatesFirstFiscalYearRatios</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatios} obj Optional instance to populate.
     * @return {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatios} The populated <code>InlineResponse2005DataEstimatesFirstFiscalYearRatios</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2005DataEstimatesFirstFiscalYearRatios();

            if (data.hasOwnProperty('priceSales')) {
                obj['priceSales'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceSales.constructFromObject(data['priceSales']);
            }
            if (data.hasOwnProperty('priceEarnings')) {
                obj['priceEarnings'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceEarnings.constructFromObject(data['priceEarnings']);
            }
            if (data.hasOwnProperty('priceEarningsGrowth')) {
                obj['priceEarningsGrowth'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth.constructFromObject(data['priceEarningsGrowth']);
            }
            if (data.hasOwnProperty('priceBookValue')) {
                obj['priceBookValue'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceBookValue.constructFromObject(data['priceBookValue']);
            }
            if (data.hasOwnProperty('priceCashFlow')) {
                obj['priceCashFlow'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow.constructFromObject(data['priceCashFlow']);
            }
            if (data.hasOwnProperty('priceFreeCashFlow')) {
                obj['priceFreeCashFlow'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow.constructFromObject(data['priceFreeCashFlow']);
            }
            if (data.hasOwnProperty('dividendYield')) {
                obj['dividendYield'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield.constructFromObject(data['dividendYield']);
            }
            if (data.hasOwnProperty('enterpriseValueEbit')) {
                obj['enterpriseValueEbit'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit.constructFromObject(data['enterpriseValueEbit']);
            }
            if (data.hasOwnProperty('enterpriseValueEbitda')) {
                obj['enterpriseValueEbitda'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda.constructFromObject(data['enterpriseValueEbitda']);
            }
            if (data.hasOwnProperty('enterpriseValueSales')) {
                obj['enterpriseValueSales'] = InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales.constructFromObject(data['enterpriseValueSales']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceSales} priceSales
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['priceSales'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceEarnings} priceEarnings
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['priceEarnings'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth} priceEarningsGrowth
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['priceEarningsGrowth'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceBookValue} priceBookValue
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['priceBookValue'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceCashFlow} priceCashFlow
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['priceCashFlow'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow} priceFreeCashFlow
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['priceFreeCashFlow'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosDividendYield} dividendYield
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['dividendYield'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit} enterpriseValueEbit
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['enterpriseValueEbit'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda} enterpriseValueEbitda
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['enterpriseValueEbitda'] = undefined;

/**
 * @member {module:model/InlineResponse2005DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales} enterpriseValueSales
 */
InlineResponse2005DataEstimatesFirstFiscalYearRatios.prototype['enterpriseValueSales'] = undefined;






export default InlineResponse2005DataEstimatesFirstFiscalYearRatios;
