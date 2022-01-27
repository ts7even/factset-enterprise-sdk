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
import StockNotationScreenerSearchDataCurrencyDependentKeyFigures from './StockNotationScreenerSearchDataCurrencyDependentKeyFigures';
import StockNotationScreenerSearchDataEbitMargin from './StockNotationScreenerSearchDataEbitMargin';
import StockNotationScreenerSearchDataEbitdaMargin from './StockNotationScreenerSearchDataEbitdaMargin';
import StockNotationScreenerSearchDataFiscalYear from './StockNotationScreenerSearchDataFiscalYear';
import StockNotationScreenerSearchDataGrossIncomeMargin from './StockNotationScreenerSearchDataGrossIncomeMargin';
import StockNotationScreenerSearchDataNetIncomeMargin from './StockNotationScreenerSearchDataNetIncomeMargin';
import StockNotationScreenerSearchDataOperatingMargin from './StockNotationScreenerSearchDataOperatingMargin';
import StockNotationScreenerSearchDataRatios from './StockNotationScreenerSearchDataRatios';
import StockNotationScreenerSearchDataReturnOnAssets from './StockNotationScreenerSearchDataReturnOnAssets';
import StockNotationScreenerSearchDataReturnOnEquity from './StockNotationScreenerSearchDataReturnOnEquity';

/**
 * The StockNotationScreenerSearchDataReportedKeyFigures model module.
 * @module model/StockNotationScreenerSearchDataReportedKeyFigures
 * @version 0.9.0
 */
class StockNotationScreenerSearchDataReportedKeyFigures {
    /**
     * Constructs a new <code>StockNotationScreenerSearchDataReportedKeyFigures</code>.
     * @alias module:model/StockNotationScreenerSearchDataReportedKeyFigures
     * @param fiscalYear {module:model/StockNotationScreenerSearchDataFiscalYear} 
     */
    constructor(fiscalYear) { 
        
        StockNotationScreenerSearchDataReportedKeyFigures.initialize(this, fiscalYear);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fiscalYear) { 
        obj['fiscalYear'] = fiscalYear;
    }

    /**
     * Constructs a <code>StockNotationScreenerSearchDataReportedKeyFigures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StockNotationScreenerSearchDataReportedKeyFigures} obj Optional instance to populate.
     * @return {module:model/StockNotationScreenerSearchDataReportedKeyFigures} The populated <code>StockNotationScreenerSearchDataReportedKeyFigures</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StockNotationScreenerSearchDataReportedKeyFigures();

            if (data.hasOwnProperty('fiscalYear')) {
                obj['fiscalYear'] = StockNotationScreenerSearchDataFiscalYear.constructFromObject(data['fiscalYear']);
            }
            if (data.hasOwnProperty('currencyDependentKeyFigures')) {
                obj['currencyDependentKeyFigures'] = StockNotationScreenerSearchDataCurrencyDependentKeyFigures.constructFromObject(data['currencyDependentKeyFigures']);
            }
            if (data.hasOwnProperty('ebitMargin')) {
                obj['ebitMargin'] = StockNotationScreenerSearchDataEbitMargin.constructFromObject(data['ebitMargin']);
            }
            if (data.hasOwnProperty('ebitdaMargin')) {
                obj['ebitdaMargin'] = StockNotationScreenerSearchDataEbitdaMargin.constructFromObject(data['ebitdaMargin']);
            }
            if (data.hasOwnProperty('netIncomeMargin')) {
                obj['netIncomeMargin'] = StockNotationScreenerSearchDataNetIncomeMargin.constructFromObject(data['netIncomeMargin']);
            }
            if (data.hasOwnProperty('grossIncomeMargin')) {
                obj['grossIncomeMargin'] = StockNotationScreenerSearchDataGrossIncomeMargin.constructFromObject(data['grossIncomeMargin']);
            }
            if (data.hasOwnProperty('operatingMargin')) {
                obj['operatingMargin'] = StockNotationScreenerSearchDataOperatingMargin.constructFromObject(data['operatingMargin']);
            }
            if (data.hasOwnProperty('returnOnAssets')) {
                obj['returnOnAssets'] = StockNotationScreenerSearchDataReturnOnAssets.constructFromObject(data['returnOnAssets']);
            }
            if (data.hasOwnProperty('returnOnEquity')) {
                obj['returnOnEquity'] = StockNotationScreenerSearchDataReturnOnEquity.constructFromObject(data['returnOnEquity']);
            }
            if (data.hasOwnProperty('ratios')) {
                obj['ratios'] = StockNotationScreenerSearchDataRatios.constructFromObject(data['ratios']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/StockNotationScreenerSearchDataFiscalYear} fiscalYear
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['fiscalYear'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataCurrencyDependentKeyFigures} currencyDependentKeyFigures
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['currencyDependentKeyFigures'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataEbitMargin} ebitMargin
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['ebitMargin'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataEbitdaMargin} ebitdaMargin
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['ebitdaMargin'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataNetIncomeMargin} netIncomeMargin
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['netIncomeMargin'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataGrossIncomeMargin} grossIncomeMargin
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['grossIncomeMargin'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataOperatingMargin} operatingMargin
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['operatingMargin'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataReturnOnAssets} returnOnAssets
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['returnOnAssets'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataReturnOnEquity} returnOnEquity
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['returnOnEquity'] = undefined;

/**
 * @member {module:model/StockNotationScreenerSearchDataRatios} ratios
 */
StockNotationScreenerSearchDataReportedKeyFigures.prototype['ratios'] = undefined;






export default StockNotationScreenerSearchDataReportedKeyFigures;
