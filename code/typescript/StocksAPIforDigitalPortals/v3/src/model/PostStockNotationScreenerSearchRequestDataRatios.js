/**
 * Stocks API For Digital Portals
 * The Stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years. Search criteria also include benchmark-related attributes (beta, correlation, outperformance), and ESG parameters, based on FactSet’s Truvalue ESG scores.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with daily updates).  This API is fully integrated with the corresponding [Quotes API](https://developer.factset.com/api-catalog/quotes-api-digital-portals), allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals).  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the [Bonds API](https://developer.factset.com/api-catalog/bonds-api-digital-portals) and the [Securitized Derivatives API](https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals) for details.  See also the recipe [\"Enrich Your Digital Portal with Flexible Equity Screening\"](https://developer.factset.com/recipe-catalog/enrich-your-digital-portal-flexible-equity-screening). 
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PostStockNotationScreenerSearchRequestDataRatiosDebtEquity from './PostStockNotationScreenerSearchRequestDataRatiosDebtEquity';
import PostStockNotationScreenerSearchRequestDataRatiosDividendYield from './PostStockNotationScreenerSearchRequestDataRatiosDividendYield';
import PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueEbit from './PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueEbit';
import PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueEbitda from './PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueEbitda';
import PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueSales from './PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueSales';
import PostStockNotationScreenerSearchRequestDataRatiosPriceBookValue from './PostStockNotationScreenerSearchRequestDataRatiosPriceBookValue';
import PostStockNotationScreenerSearchRequestDataRatiosPriceCashFlow from './PostStockNotationScreenerSearchRequestDataRatiosPriceCashFlow';
import PostStockNotationScreenerSearchRequestDataRatiosPriceEarnings from './PostStockNotationScreenerSearchRequestDataRatiosPriceEarnings';
import PostStockNotationScreenerSearchRequestDataRatiosPriceFreeCashFlow from './PostStockNotationScreenerSearchRequestDataRatiosPriceFreeCashFlow';
import PostStockNotationScreenerSearchRequestDataRatiosPriceSales from './PostStockNotationScreenerSearchRequestDataRatiosPriceSales';

/**
 * The PostStockNotationScreenerSearchRequestDataRatios model module.
 * @module model/PostStockNotationScreenerSearchRequestDataRatios
 */
class PostStockNotationScreenerSearchRequestDataRatios {
    /**
     * Constructs a new <code>PostStockNotationScreenerSearchRequestDataRatios</code>.
     * Ratio parameters.
     * @alias module:model/PostStockNotationScreenerSearchRequestDataRatios
     */
    constructor() { 
        
        PostStockNotationScreenerSearchRequestDataRatios.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostStockNotationScreenerSearchRequestDataRatios</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostStockNotationScreenerSearchRequestDataRatios} obj Optional instance to populate.
     * @return {module:model/PostStockNotationScreenerSearchRequestDataRatios} The populated <code>PostStockNotationScreenerSearchRequestDataRatios</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostStockNotationScreenerSearchRequestDataRatios();

            if (data.hasOwnProperty('priceSales')) {
                obj['priceSales'] = PostStockNotationScreenerSearchRequestDataRatiosPriceSales.constructFromObject(data['priceSales']);
            }
            if (data.hasOwnProperty('priceEarnings')) {
                obj['priceEarnings'] = PostStockNotationScreenerSearchRequestDataRatiosPriceEarnings.constructFromObject(data['priceEarnings']);
            }
            if (data.hasOwnProperty('priceBookValue')) {
                obj['priceBookValue'] = PostStockNotationScreenerSearchRequestDataRatiosPriceBookValue.constructFromObject(data['priceBookValue']);
            }
            if (data.hasOwnProperty('priceCashFlow')) {
                obj['priceCashFlow'] = PostStockNotationScreenerSearchRequestDataRatiosPriceCashFlow.constructFromObject(data['priceCashFlow']);
            }
            if (data.hasOwnProperty('priceFreeCashFlow')) {
                obj['priceFreeCashFlow'] = PostStockNotationScreenerSearchRequestDataRatiosPriceFreeCashFlow.constructFromObject(data['priceFreeCashFlow']);
            }
            if (data.hasOwnProperty('dividendYield')) {
                obj['dividendYield'] = PostStockNotationScreenerSearchRequestDataRatiosDividendYield.constructFromObject(data['dividendYield']);
            }
            if (data.hasOwnProperty('enterpriseValueEbit')) {
                obj['enterpriseValueEbit'] = PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueEbit.constructFromObject(data['enterpriseValueEbit']);
            }
            if (data.hasOwnProperty('enterpriseValueEbitda')) {
                obj['enterpriseValueEbitda'] = PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueEbitda.constructFromObject(data['enterpriseValueEbitda']);
            }
            if (data.hasOwnProperty('enterpriseValueSales')) {
                obj['enterpriseValueSales'] = PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueSales.constructFromObject(data['enterpriseValueSales']);
            }
            if (data.hasOwnProperty('debtEquity')) {
                obj['debtEquity'] = PostStockNotationScreenerSearchRequestDataRatiosDebtEquity.constructFromObject(data['debtEquity']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosPriceSales} priceSales
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['priceSales'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosPriceEarnings} priceEarnings
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['priceEarnings'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosPriceBookValue} priceBookValue
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['priceBookValue'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosPriceCashFlow} priceCashFlow
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['priceCashFlow'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosPriceFreeCashFlow} priceFreeCashFlow
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['priceFreeCashFlow'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosDividendYield} dividendYield
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['dividendYield'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueEbit} enterpriseValueEbit
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['enterpriseValueEbit'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueEbitda} enterpriseValueEbitda
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['enterpriseValueEbitda'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosEnterpriseValueSales} enterpriseValueSales
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['enterpriseValueSales'] = undefined;

/**
 * @member {module:model/PostStockNotationScreenerSearchRequestDataRatiosDebtEquity} debtEquity
 */
PostStockNotationScreenerSearchRequestDataRatios.prototype['debtEquity'] = undefined;






export default PostStockNotationScreenerSearchRequestDataRatios;
